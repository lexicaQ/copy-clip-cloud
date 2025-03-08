
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Check, ExternalLink, ArrowRight, SparkleIcon, Shield } from "lucide-react";
import { useFileDownload } from "@/hooks/useFileDownload";
import { toast } from "sonner";

const DownloadButton = ({ variant = "primary" }: { variant?: "primary" | "compact" }) => {
  const { downloading, fileInfo, handleDownload } = useFileDownload();
  const [isHovered, setIsHovered] = useState(false);
  const [downloadCount, setDownloadCount] = useState<number | null>(null);

  // Simulate download count with a random number between 15,000 and 25,000
  useEffect(() => {
    setDownloadCount(Math.floor(Math.random() * (25000 - 15000) + 15000));
  }, []);

  const handleButtonClick = () => {
    handleDownload();
    toast.success("Download started", {
      description: "Your download will begin shortly",
      position: "bottom-center",
    });
  };

  // Compact variant for header buttons
  if (variant === "compact") {
    return (
      <motion.button
        onClick={handleButtonClick}
        disabled={downloading}
        className={`px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all flex items-center gap-2 ${
          downloading ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {downloading ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
        <span className="text-sm font-medium">Download</span>
      </motion.button>
    );
  }

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
          className={`animated-border-button glass-panel download-button group relative overflow-hidden ${
            downloading ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'
          }`}
          aria-label="Download for Mac"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Subtle animated particles in the background */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                initial={{ 
                  x: Math.random() * 100 + "%", 
                  y: Math.random() * 100 + "%", 
                  opacity: 0 
                }}
                animate={{ 
                  y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2 + Math.random() * 3,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
          
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
                <div className="px-2 py-1 rounded-full bg-white/10 text-xs flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  macOS 15+
                </div>
                <div className="px-2 py-1 rounded-full bg-white/10 text-xs">
                  {fileInfo?.extension || "ZIP"} Archive
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                {downloadCount && (
                  <motion.div 
                    className="text-xs text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {downloadCount.toLocaleString()}+ users already downloaded
                  </motion.div>
                )}

                <motion.a
                  href="https://docs.copyclipcloud.com/installation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1"
                  whileHover={{ x: 3 }}
                >
                  Installation guide <ExternalLink className="w-3 h-3" />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default DownloadButton;
