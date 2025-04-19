
import { useState, useEffect } from "react";

export const useDownloadCount = () => {
  const [downloadCount, setDownloadCount] = useState<number | null>(null);

  useEffect(() => {
    setDownloadCount(Math.floor(Math.random() * (25000 - 15000) + 15000));
  }, []);

  return downloadCount;
};
