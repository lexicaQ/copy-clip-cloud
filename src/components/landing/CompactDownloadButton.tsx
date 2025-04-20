
import { motion } from "framer-motion";
import React from "react";
import { DownloadButtonContent } from "./DownloadButtonContent";
import { Button } from "@/components/ui/button";

interface CompactDownloadButtonProps {
  downloading: boolean;
  onDownload: () => void;
}

export const CompactDownloadButton = ({ downloading, onDownload }: CompactDownloadButtonProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full"
    >
      <Button
        onClick={onDownload}
        disabled={downloading}
        className={`w-full py-6 bg-gradient-to-r from-white/15 to-white/5 hover:from-white/20 hover:to-white/10 text-white border border-white/10 relative overflow-hidden ${
          downloading ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <DownloadButtonContent downloading={downloading} isHovered={isHovered} />
      </Button>
    </motion.div>
  );
};
