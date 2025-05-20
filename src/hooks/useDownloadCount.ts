
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useDownloadCount = () => {
  const [downloadCount, setDownloadCount] = useState<number>(0);
  
  useEffect(() => {
    const fetchDownloadCount = async () => {
      try {
        // Use a direct query with RPC as the download_stats table isn't in the TypeScript definitions
        const { data, error } = await supabase.rpc('get_total_downloads');
          
        if (error) {
          console.error("Error fetching download count:", error);
          return;
        }
        
        if (data) {
          setDownloadCount(data);
        } else {
          // If no records found, default to 0
          setDownloadCount(0);
        }
      } catch (error) {
        console.error("Error in download count hook:", error);
      }
    };
    
    fetchDownloadCount();
    
    // Set up a periodic refresh of the download count
    const interval = setInterval(fetchDownloadCount, 60000); // Refresh every minute
    
    return () => clearInterval(interval);
  }, []);
  
  return downloadCount;
};
