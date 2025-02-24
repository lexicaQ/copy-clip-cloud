
import { motion } from "framer-motion";
import { Download, Check, ArrowBigDown } from "lucide-react";

interface DownloadButtonProps {
  downloading: boolean;
  onClick: () => void;
}

const DownloadButton = ({ downloading, onClick }: DownloadButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={downloading}
      className="animated-border-button glass-panel group relative"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
        }}
        animate={{ x: ["200%", "-200%"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
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
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowBigDown className="w-5 h-5" />
            </motion.div>
          </>
        )}
      </span>
    </motion.button>
  );
};

export default DownloadButton;
