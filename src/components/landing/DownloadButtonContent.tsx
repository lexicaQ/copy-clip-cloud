
import { motion, AnimatePresence } from "framer-motion";
import { Download, Check, ArrowRight } from "lucide-react";
import React from "react";

interface DownloadButtonContentProps {
  downloading: boolean;
  isHovered: boolean;
}

export const DownloadButtonContent = ({ downloading, isHovered }: DownloadButtonContentProps) => {
  return (
    <div className="px-8 py-4 relative z-20 backdrop-blur-sm">
      <AnimatePresence mode="wait">
        {downloading ? (
          <motion.div 
            key="checking"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-2"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Check className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-lg font-medium text-white">Downloading...</span>
          </motion.div>
        ) : (
          <motion.div 
            key="download"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-2"
          >
            <motion.div
              animate={{ 
                y: isHovered ? [-1, 1, -1] : 0
              }}
              transition={{
                duration: 0.6,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
            >
              <Download className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-lg font-medium text-white">Download Now</span>
            <motion.div 
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <ArrowRight className={`w-4 h-4 text-white transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
