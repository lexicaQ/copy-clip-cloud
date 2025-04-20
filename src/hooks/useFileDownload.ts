
import { useState } from "react";
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

      toast.success("Download started", {
        position: "bottom-right"
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
