
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface FileInfo {
  version: string;
  extension: string;
  fileName?: string;
  size?: string;
}

export const useFileDownload = () => {
  const [downloading, setDownloading] = useState(false);
  const [fileInfo, setFileInfo] = useState<FileInfo | null>(null);
  const [attemptCount, setAttemptCount] = useState(0);

  // Check for available files when component mounts
  const checkForFiles = async () => {
    try {
      console.log("Checking for available files...");
      const { data: files, error } = await supabase
        .storage
        .from('app_files')
        .list();
      
      if (error) {
        console.error("Error checking files:", error);
        return;
      }

      if (files && files.length > 0) {
        console.log("Available files:", files);
        
        // Try to determine version and file type
        let version = "1.0.0";
        let extension = "ZIP";
        let fileName = "";
        let size = "";
        
        const downloadableFile = files.find(file => 
          file.name.endsWith('.zip') || 
          file.name.endsWith('.dmg') || 
          file.name.endsWith('.exe') || 
          file.name.endsWith('.pkg')
        ) || files[0];
        
        // Extract version if possible
        const versionMatch = downloadableFile.name.match(/(\d+\.\d+\.\d+)/);
        if (versionMatch) {
          version = versionMatch[1];
        }
        
        // Determine file extension
        if (downloadableFile.name.endsWith('.dmg')) {
          extension = "DMG";
        } else if (downloadableFile.name.endsWith('.exe')) {
          extension = "EXE";
        } else if (downloadableFile.name.endsWith('.pkg')) {
          extension = "PKG";
        } else if (downloadableFile.name.endsWith('.zip')) {
          extension = "ZIP";
        } else {
          const parts = downloadableFile.name.split('.');
          if (parts.length > 1) {
            extension = parts[parts.length - 1].toUpperCase();
          }
        }
        
        // Get file size
        if (downloadableFile.metadata && downloadableFile.metadata.size) {
          const fileSizeInBytes = parseInt(downloadableFile.metadata.size);
          // Convert bytes to MB
          size = (fileSizeInBytes / (1024 * 1024)).toFixed(1) + " MB";
        }
        
        fileName = downloadableFile.name;
        
        setFileInfo({ version, extension, fileName, size });
      }
    } catch (e) {
      console.error("Error in checkForFiles:", e);
    }
  };

  useEffect(() => {
    checkForFiles();
  }, []);

  // Retry mechanism for downloads
  useEffect(() => {
    if (attemptCount > 0 && attemptCount < 3) {
      const timer = setTimeout(() => {
        console.log(`Retry attempt ${attemptCount}...`);
        handleDownload();
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [attemptCount]);

  const handleDownload = async () => {
    if (downloading) return; // Prevent multiple clicks
    
    setDownloading(true);
    try {
      console.log("Preparing download...");
      
      console.log("Attempting to list files in app_files bucket");
      const { data: files, error: filesError } = await supabase
        .storage
        .from('app_files')
        .list();
      
      if (filesError) {
        console.error("Error listing files:", filesError);
        toast.error(`Could not list files: ${filesError.message}`);
        throw new Error(`Could not list files: ${filesError.message}`);
      }
      
      if (!files || files.length === 0) {
        console.error("No files found in storage bucket");
        toast.error("No files available for download. Please check the app_files bucket.");
        throw new Error("No files available for download. Please check the app_files bucket.");
      }
      
      console.log("Found files:", files);
      
      // Find a file with .zip, .dmg, or other common download extensions
      let fileToDownload = files.find(file => 
        file.name.endsWith('.zip') || 
        file.name.endsWith('.dmg') || 
        file.name.endsWith('.exe') || 
        file.name.endsWith('.pkg')
      );
      
      // If no specific download file type is found, use the first file
      if (!fileToDownload) {
        console.log("No .zip/.dmg/.exe file found, using first available file");
        fileToDownload = files[0];
      }
      
      if (!fileToDownload) {
        toast.error("No downloadable files found");
        throw new Error("No downloadable files found");
      }
      
      console.log("Selected file for download:", fileToDownload.name);
      
      // METHOD 1: Try direct storage download first
      try {
        const { data: publicUrlData } = supabase
          .storage
          .from('app_files')
          .getPublicUrl(fileToDownload.name);
        
        if (!publicUrlData || !publicUrlData.publicUrl) {
          throw new Error("No public URL returned from storage");
        }
        
        // Start the direct download
        toast.success(`Download started: ${fileToDownload.name}`);
        console.log("Starting direct download with URL:", publicUrlData.publicUrl);
        
        // Create a temporary link element to trigger the download
        const link = document.createElement('a');
        link.href = publicUrlData.publicUrl;
        link.setAttribute('download', fileToDownload.name);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
      } catch (directDownloadError) {
        console.error("Direct download failed, trying edge function:", directDownloadError);
        
        // METHOD 2: Try the edge function as a fallback
        const { data: functionData, error: functionError } = await supabase.functions.invoke('download-app', {
          body: { fileName: fileToDownload.name }
        });
        
        if (functionError) {
          console.error("Edge function error:", functionError);
          
          // If this is the first failure, increment attempt count to trigger retry
          if (attemptCount < 2) {
            setAttemptCount(prev => prev + 1);
            throw new Error(`Download retry ${attemptCount + 1}/3...`);
          }
          
          throw new Error(`Download API error: ${functionError.message}`);
        }
        
        if (!functionData || !functionData.downloadUrl) {
          console.error("No download URL returned from function:", functionData);
          
          // If this is the first failure, increment attempt count to trigger retry
          if (attemptCount < 2) {
            setAttemptCount(prev => prev + 1);
            throw new Error(`Download retry ${attemptCount + 1}/3...`);
          }
          
          throw new Error("Could not generate download URL");
        }
        
        // Start the download using the edge function URL
        toast.success(`Download started via API: ${fileToDownload.name}`);
        console.log("Starting download with URL from function:", functionData.downloadUrl);
        
        const link = document.createElement('a');
        link.href = functionData.downloadUrl;
        link.setAttribute('download', fileToDownload.name);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      
      // Reset attempt count on success
      setAttemptCount(0);
      
    } catch (error) {
      console.error("Download error:", error);
      
      // Only show error toast on final failure (after retries)
      if (attemptCount >= 2) {
        toast.error(`Download failed: ${error.message || "Please try again later."}`);
      } else {
        toast.info(`Download retry ${attemptCount + 1}/3...`);
      }
    } finally {
      // Set downloading back to false after a slight delay to prevent quick re-clicks
      setTimeout(() => {
        setDownloading(false);
      }, 1000);
    }
  };

  return {
    downloading,
    fileInfo,
    handleDownload
  };
};
