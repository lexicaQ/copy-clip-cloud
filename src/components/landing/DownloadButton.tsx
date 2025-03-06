
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Check, ExternalLink, ArrowRight } from "lucide-react";
import { useFileDownload } from "@/hooks/useFileDownload";
import { toast } from "sonner";

const DownloadButton = () => {
  const { downloading, fileInfo, handleDownload } = useFileDownload();
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    handleDownload();
    toast.success("Download started", {
      description: "Your download will begin shortly",
      position: "bottom-center",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="space-y-4"
    >
      <div className="flex flex-col items-center space-y-6">
        <motion.button
          onClick={handleButtonClick}
          disabled={downloading}
          className={`animated-border-button glass-panel download-button group ${
            downloading ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'
          }`}
          aria-label="Download for Mac"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 flex items-center space-x-2">
            <AnimatePresence mode="wait">
              {downloading ? (
                <motion.div 
                  key="checking"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="animate-border-pulse flex items-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  <span>Downloading...</span>
                </motion.div>
              ) : (
                <motion.div 
                  key="download"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Download for Mac</span>
                  <motion.div 
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </span>
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent" style={{ transform: 'translateX(-100%)', animation: 'download-border-animation 2s linear infinite' }} />
          </div>
        </motion.button>

        <AnimatePresence>
          {fileInfo && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center"
            >
              <div className="text-sm text-gray-400 flex items-center space-x-3 mb-2">
                <div className="px-2 py-1 rounded-full bg-white/10 text-xs">
                  Version {fileInfo?.version || "1.0.0"}
                </div>
                <div className="px-2 py-1 rounded-full bg-white/10 text-xs">
                  macOS 15+
                </div>
                <div className="px-2 py-1 rounded-full bg-white/10 text-xs">
                  {fileInfo?.extension || "ZIP"} Archive
                </div>
              </div>

              <motion.a
                href="https://docs.copyclipcloud.com/installation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1"
                whileHover={{ x: 3 }}
              >
                Installation guide <ExternalLink className="w-3 h-3" />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default DownloadButton;
