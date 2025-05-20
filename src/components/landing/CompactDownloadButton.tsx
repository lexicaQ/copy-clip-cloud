
import { motion } from "framer-motion";
import React from "react";
import { DownloadButtonContent } from "./DownloadButtonContent";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

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
        className={`flex items-center space-x-2 px-5 py-2.5 rounded-full relative overflow-hidden group bg-gradient-to-r from-white/10 to-white/5 border border-white/20 hover:bg-white/10 transition-all duration-300 ${
          downloading ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear",
            repeatType: "loop"
          }}
        />
        <Download className="w-4 h-4 text-white relative z-10" />
        <span className="font-medium text-white relative z-10">
          {downloading ? "Downloading..." : "Download"}
        </span>
      </Button>
    </motion.div>
  );
};
