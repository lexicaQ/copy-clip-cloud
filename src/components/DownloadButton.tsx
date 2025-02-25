
import { motion } from "framer-motion";
import { Download, Check } from "lucide-react";

interface DownloadButtonProps {
  downloading: boolean;
  onClick: () => void;
}

const DownloadButton = ({ downloading, onClick }: DownloadButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={downloading}
      className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium tracking-wider uppercase rounded-xl overflow-hidden group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glass background */}
      <div className="absolute inset-0 glass-panel" />
      
      {/* Animated border */}
      <motion.div 
        className="absolute inset-0 rounded-xl"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
          backgroundSize: "200% 100%",
        }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-white/0 transition-all duration-300 group-hover:bg-white/10"
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center space-x-2">
        {downloading ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Check className="w-5 h-5" />
            </motion.div>
            <span>Downloading...</span>
          </>
        ) : (
          <>
            <Download className="w-5 h-5" />
            <span>Download for Mac</span>
          </>
        )}
      </span>
    </motion.button>
  );
};

export default DownloadButton;
