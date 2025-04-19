
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

  // Set default file info since Supabase is not connected in this demo
  useEffect(() => {
    setFileInfo({
      version: "1.2.0",
      extension: "ZIP",
      fileName: "CopyClipCloud-1.2.0.zip",
      size: "14.2 MB"
    });
  }, []);

  const handleDownload = async () => {
    if (downloading) return; // Prevent multiple clicks
    
    setDownloading(true);
    
    try {
      console.log("Preparing download...");
      
      // In a real app, we'd connect to Supabase here
      // Since we don't have a real Supabase connection, simulate a download
      
      // Show success message
      toast.success("Download started", {
        description: "Your download will begin shortly",
      });
      
      // Create a temporary file to download (or redirect to a static file)
      setTimeout(() => {
        // For demo purposes, create a download link to a blank file
        const link = document.createElement('a');
        link.href = 'data:application/zip;base64,UEsDBBQAAAAAAMZfeFQAAAAAAAAAAAAAAAAMACAATXlEb2N1bWVudC8vUEsDBBQAAAAAAN1feFQAAAAAAAAAAAAAAAAVACAATXlEb2N1bWVudC9kb2N1bWVudC5wZGZQSwECFAAUAAAAAADGX3hUAAAAAAAAAAAAAAAADAAgAAAAAAAAAAAA7UEAAAAATXlEb2N1bWVudC8vUEsBAhQAFAAAAAAA3V94VAAAAAAAAAAAAAAAABUAIAAAAAAAAAAAAEAASQAAAEdpdEh1Yi9kb2N1bWVudC5wZGZQSwUGAAAAAAIAAgB2AAAAXAAAAAA=';
        link.setAttribute('download', 'CopyClipCloud-1.2.0.zip');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show success message
        toast.success("Download complete!", {
          description: "Thank you for downloading CopyClipCloud"
        });
      }, 2000);
      
      // Reset attempt count on success
      setAttemptCount(0);
      
    } catch (error: any) {
      console.error("Download error:", error);
      
      toast.error(`Download failed: Please try again later.`);
    } finally {
      // Set downloading back to false after a slight delay to prevent quick re-clicks
      setTimeout(() => {
        setDownloading(false);
      }, 2500);
    }
  };

  return {
    downloading,
    fileInfo,
    handleDownload
  };
};
