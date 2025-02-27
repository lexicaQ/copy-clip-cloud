
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
      className={`animated-border-button group relative overflow-hidden px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 ${isDownloading ? 'animate-pulse' : ''}`}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Border animation container */}
      <div className="absolute inset-0 z-0 rounded-xl overflow-hidden">
        <motion.div 
          className="absolute w-full h-full rounded-xl"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",
            backgroundSize: "200% 100%",
          }}
          animate={isDownloading ? {
            backgroundPosition: ["0% 0%", "200% 0%"],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }
          } : {}}
        />
        
        {/* Glowing border */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-xl"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
          animate={isDownloading ? {
            boxShadow: [
              "0 0 5px rgba(255, 255, 255, 0.3)",
              "0 0 20px rgba(255, 255, 255, 0.5)",
              "0 0 5px rgba(255, 255, 255, 0.3)"
            ],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          } : {}}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 z-0 rounded-xl" />
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-white/5 rounded-xl" />
        <div className="absolute inset-0 bg-grid-white/10 rounded-xl" />
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
    </motion.button>
  );
};

export default DownloadButton;
