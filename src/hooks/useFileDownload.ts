
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface FileInfo {
  version: string;
  fileName: string;
  size: string;
  extension: string;
}

export const useFileDownload = () => {
  const [downloading, setDownloading] = useState(false);
  const [fileInfo, setFileInfo] = useState<FileInfo | null>(null);
  
  // Fetch file info on hook initialization with debounce to prevent animation issues
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchFileInfo();
    }, 300); // Add small delay to prevent animation issues
    
    return () => clearTimeout(timer);
  }, []);
  
  const fetchFileInfo = async () => {
    try {
      const { data: files, error } = await supabase
        .storage
        .from('app_files')
        .list();
      
      if (error) {
        console.error("Error fetching file info:", error);
        return;
      }
      
      if (files && files.length > 0) {
        // Sort files by created_at if available
        const latestFile = files[0];
        
        // Parse version from filename if possible (format: CopyClipCloud_X.Y.Z.ext)
        let version = '1.0.0'; // Default version
        const versionMatch = latestFile.name.match(/(\d+\.\d+\.\d+)/);
        if (versionMatch) {
          version = versionMatch[1];
        }
        
        // Extract file extension
        const extension = latestFile.name.split('.').pop() || '';
        
        // Format file size
        const size = formatFileSize(latestFile.metadata?.size || 0);
        
        setFileInfo({
          fileName: latestFile.name,
          version,
          size,
          extension
        });
      }
    } catch (error) {
      console.error("Error fetching file info:", error);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleDownload = async () => {
    if (downloading) return;
    setDownloading(true);
    
    try {
      const { data: files, error } = await supabase
        .storage
        .from('app_files')
        .list();

      if (error || !files?.length) {
        throw new Error('No files available');
      }
      
      // Get latest version file
      const latestFile = files[0];
      
      // Get the public URL of the file
      const { data } = await supabase
        .storage
        .from('app_files')
        .download(latestFile.name);

      if (!data) {
        throw new Error('Failed to download file');
      }

      // Create download link
      const url = URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', latestFile.name);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      // Increment download counter in database using edge function
      try {
        // Extract version from filename if possible
        let version = '1.0.0'; // Default version
        const versionMatch = latestFile.name.match(/(\d+\.\d+\.\d+)/);
        if (versionMatch) {
          version = versionMatch[1];
        }
        
        // Call the edge function to increment the download count
        const { error: updateError } = await supabase.rpc('increment_download_count', {
          version_param: version
        });
        
        if (updateError) {
          console.error("Error updating download count:", updateError);
        }
      } catch (countError) {
        console.error("Error calling increment function:", countError);
      }

      // Show toast in bottom right
      toast.success("Download started", {
        position: "bottom-right",
        description: "Your file will be downloaded shortly"
      });

    } catch (error: any) {
      console.error("Download error:", error);
      toast.error("Download failed. Please try again.", {
        position: "bottom-right"
      });
    } finally {
      setTimeout(() => {
        setDownloading(false);
      }, 2000);
    }
  };

  return {
    downloading,
    fileInfo,
    handleDownload
  };
};
