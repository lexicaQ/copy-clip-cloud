
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useDownloadCount = () => {
  const [downloadCount, setDownloadCount] = useState<number>(0);
  
  useEffect(() => {
    const fetchDownloadCount = async () => {
      try {
        // Query the download_stats table
        const { data, error } = await supabase
          .from('download_stats')
          .select('download_count')
          .order('download_count', { ascending: false })
          .limit(1);
          
        if (error) {
          console.error("Error fetching download count:", error);
          return;
        }
        
        if (data && data.length > 0) {
          setDownloadCount(data[0].download_count);
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
