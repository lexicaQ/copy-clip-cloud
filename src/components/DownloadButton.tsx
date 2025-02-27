
import { motion, AnimatePresence } from "framer-motion";
import { Download, Loader2 } from "lucide-react";

interface DownloadButtonProps {
  onClick: () => void;
  isDownloading: boolean;
  text?: string;
}

const DownloadButton = ({
  onClick,
  isDownloading,
  text = "Download for Mac",
}: DownloadButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={isDownloading}
      className="animated-border-button group relative overflow-hidden px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 z-0" />
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-white/5" />
        <div className="absolute inset-0 bg-grid-white/10" />
      </div>
      
      <AnimatePresence mode="wait">
        {isDownloading ? (
          <motion.div
            key="downloading"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="relative z-10 flex items-center justify-center space-x-2"
          >
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Downloading...</span>
          </motion.div>
        ) : (
          <motion.div
            key="download"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="relative z-10 flex items-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>{text}</span>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={false}
        animate={isDownloading ? { opacity: 1 } : { opacity: 0 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5" />
        <div className="h-1 bg-white/20 absolute bottom-0 left-0 right-0">
          <motion.div
            className="h-full bg-white/40"
            initial={{ width: "0%" }}
            animate={isDownloading ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.button>
  );
};

export default DownloadButton;
