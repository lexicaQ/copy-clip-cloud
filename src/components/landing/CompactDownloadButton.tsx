
import { motion } from "framer-motion";
import React from "react";
import { DownloadButtonContent } from "./DownloadButtonContent";

interface CompactDownloadButtonProps {
  downloading: boolean;
  onDownload: () => void;
}

export const CompactDownloadButton = ({ downloading, onDownload }: CompactDownloadButtonProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.button
      onClick={onDownload}
      disabled={downloading}
      className={`px-4 py-2 rounded-lg backdrop-blur-md border border-white/20 transition-all flex items-center gap-2 relative overflow-hidden ${
        downloading ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'
      }`}
      style={{
        background: "linear-gradient(to right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))"
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)"
      }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <DownloadButtonContent downloading={downloading} isHovered={isHovered} />
    </motion.button>
  );
};
