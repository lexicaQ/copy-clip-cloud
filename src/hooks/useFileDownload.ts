
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
  
  // Fetch file info on hook initialization
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
        // Sort files by created_at to get the latest
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
      // Call the edge function using fetch with the correct URL format
      const response = await fetch('/api/download-app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to generate download URL');
      }
      
      const data = await response.json();
      
      if (!data.downloadUrl) {
        throw new Error('No download URL returned');
      }
      
      // Create download link and trigger download
      const link = document.createElement('a');
      link.href = data.downloadUrl;
      link.setAttribute('download', data.fileName || 'CopyClipCloud.dmg');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show toast in bottom right
      toast.success("Download started", {
        position: "bottom-right",
        description: "Your file will be downloaded shortly"
      });
      
      // Update the file info with the latest data
      if (data.fileName && data.version) {
        const extension = data.fileName.split('.').pop() || '';
        setFileInfo(prev => ({
          ...prev!,
          fileName: data.fileName,
          version: data.version,
          extension
        }));
      }

    } catch (error: any) {
      console.error("Download error:", error);
      toast.error(`Download failed: ${error.message || 'Please try again.'}`, {
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
