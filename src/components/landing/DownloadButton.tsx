
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Check, ExternalLink, ArrowRight } from "lucide-react";
import { useFileDownload } from "@/hooks/useFileDownload";
import { toast } from "sonner";

const DownloadButton = ({ variant = "primary" }: { variant?: "primary" | "compact" }) => {
  const { downloading, fileInfo, handleDownload } = useFileDownload();
  const [isHovered, setIsHovered] = useState(false);
  const [downloadCount, setDownloadCount] = useState<number | null>(null);

  // Simulate download count
  useEffect(() => {
    setDownloadCount(Math.floor(Math.random() * (25000 - 15000) + 15000));
  }, []);

  const handleButtonClick = () => {
    handleDownload();
  };

  // Compact variant for header buttons
  if (variant === "compact") {
    return (
      <motion.button
        onClick={handleButtonClick}
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
          className={`relative overflow-hidden rounded-xl ${
            downloading ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'
          }`}
          aria-label="Download App"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Modern black background with slight gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90 rounded-xl z-0" />
          
          {/* Dynamic border */}
          <motion.div 
            className="absolute inset-0 rounded-xl z-10 pointer-events-none"
            animate={{
              boxShadow: isHovered 
                ? "inset 0 0 0 1.5px rgba(255,255,255,0.5)" 
                : "inset 0 0 0 1px rgba(255,255,255,0.2)"
            }}
            transition={{ duration: 0.2 }}
          />
          
          {/* Subtle border animation */}
          <div className="absolute inset-0 overflow-hidden rounded-xl z-10 pointer-events-none">
            <motion.div 
              className="absolute -inset-[100%] z-10"
              animate={{
                transform: isHovered ? "rotate(180deg)" : "rotate(0deg)",
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{
                background: "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.2) 20%, transparent 40%)",
              }}
            />
          </div>
          
          {/* Button content */}
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
          
          {/* Bottom highlighting border */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden rounded-b-xl z-10">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              animate={{
                x: [-100, 100]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0.5
              }}
            />
          </div>
        </motion.button>

        <AnimatePresence>
          {fileInfo && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="text-sm text-gray-400 flex flex-wrap justify-center gap-3 mb-2">
                <motion.div 
                  className="px-2 py-1 rounded-full backdrop-blur-md border border-white/10 text-xs"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  Version {fileInfo?.version || "1.0.0"}
                </motion.div>
                <motion.div 
                  className="px-2 py-1 rounded-full backdrop-blur-md border border-white/10 text-xs"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  {fileInfo?.extension || "ZIP"} Archive
                </motion.div>
                {fileInfo?.size && (
                  <motion.div 
                    className="px-2 py-1 rounded-full backdrop-blur-md border border-white/10 text-xs"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {fileInfo.size}
                  </motion.div>
                )}
              </div>

              <div className="flex flex-col items-center gap-2">
                {downloadCount && (
                  <motion.div 
                    className="text-xs text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.span
                      animate={{ 
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {downloadCount.toLocaleString()}+ users already downloaded
                    </motion.span>
                  </motion.div>
                )}

                <motion.a
                  href="#"
                  className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1 group"
                  whileHover={{ x: 3 }}
                >
                  Installation guide 
                  <motion.div
                    animate={{ x: [0, 2, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 1
                    }}
                  >
                    <ExternalLink className="w-3 h-3 transition-transform group-hover:scale-110" />
                  </motion.div>
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
