
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

  // Set default file info
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
      
      // Show download starting notification
      toast.success("Download started", {
        description: "Your download will begin shortly",
        position: "bottom-right",
      });
      
      // Create a temporary file to download
      setTimeout(() => {
        // For demo purposes, create a simulated download
        const link = document.createElement('a');
        link.href = 'data:application/zip;base64,UEsDBBQAAAAAAMZfeFQAAAAAAAAAAAAAAAAMACAATXlEb2N1bWVudC8vUEsDBBQAAAAAAN1feFQAAAAAAAAAAAAAAAAVACAATXlEb2N1bWVudC9kb2N1bWVudC5wZGZQSwECFAAUAAAAAADGX3hUAAAAAAAAAAAAAAAADAAgAAAAAAAAAAAA7UEAAAAATXlEb2N1bWVudC8vUEsBAhQAFAAAAAAA3V94VAAAAAAAAAAAAAAAABUAIAAAAAAAAAAAAEAASQAAAEdpdEh1Yi9kb2N1bWVudC5wZGZQSwUGAAAAAAIAAgB2AAAAXAAAAAA=';
        link.setAttribute('download', 'CopyClipCloud-1.2.0.zip');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show completion notification
        toast.success("Download complete!", {
          description: "Thank you for downloading CopyClipCloud",
          position: "bottom-right",
        });
        
        // Create web notification
        showWebNotification("Download Complete", "CopyClipCloud has been downloaded successfully!");
      }, 2000);
      
      // Reset attempt count on success
      setAttemptCount(0);
      
    } catch (error: any) {
      console.error("Download error:", error);
      
      toast.error(`Download failed: Please try again later.`, {
        position: "bottom-right"
      });
    } finally {
      // Set downloading back to false after a slight delay
      setTimeout(() => {
        setDownloading(false);
      }, 2500);
    }
  };
  
  // Web notification function
  const showWebNotification = (title: string, body: string) => {
    // Check if browser supports notifications and permission is granted
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        new Notification(title, { 
          body,
          icon: '/favicon.ico'
        });
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            new Notification(title, { 
              body,
              icon: '/favicon.ico'
            });
          }
        });
      }
    }
    
    // Also show in-app notification
    const notification = document.createElement('div');
    notification.className = 'web-notification animate-slide-in-right';
    notification.innerHTML = `
      <div class="flex items-start">
        <div class="flex-1">
          <h4 class="font-medium text-sm">${title}</h4>
          <p class="text-xs text-gray-400 mt-1">${body}</p>
        </div>
        <button class="text-white/70 hover:text-white" onclick="this.parentElement.parentElement.classList.add('exit'); setTimeout(() => this.parentElement.parentElement.remove(), 300);">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      notification.classList.add('exit');
      setTimeout(() => notification.remove(), 300);
    }, 5000);
  };

  return {
    downloading,
    fileInfo,
    handleDownload
  };
};
