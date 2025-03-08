
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Check, ExternalLink, ArrowRight, SparkleIcon, Shield } from "lucide-react";
import { useFileDownload } from "@/hooks/useFileDownload";
import { toast } from "sonner";

const DownloadButton = ({ variant = "primary" }: { variant?: "primary" | "compact" }) => {
  const { downloading, fileInfo, handleDownload } = useFileDownload();
  const [isHovered, setIsHovered] = useState(false);
  const [downloadCount, setDownloadCount] = useState<number | null>(null);
  const [showArrow, setShowArrow] = useState(false);

  // Simulate download count with a random number between 15,000 and 25,000
  useEffect(() => {
    setDownloadCount(Math.floor(Math.random() * (25000 - 15000) + 15000));
  }, []);

  // Show arrow animation periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setShowArrow(true);
      const timeout = setTimeout(() => setShowArrow(false), 1500);
      return () => clearTimeout(timeout);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    handleDownload();
    toast.success("Download started", {
      description: "Your download will begin shortly",
      position: "bottom-center",
      className: "bg-black/90 border border-white/10 text-white shadow-xl",
    });
  };

  // Compact variant for header buttons
  if (variant === "compact") {
    return (
      <motion.button
        onClick={handleButtonClick}
        disabled={downloading}
        className={`px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all flex items-center gap-2 relative overflow-hidden ${
          downloading ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <AnimatePresence mode="wait">
          {downloading ? (
            <motion.div
              key="check"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <Check className="w-4 h-4" />
            </motion.div>
          ) : (
            <motion.div
              key="download"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <Download className="w-4 h-4" />
            </motion.div>
          )}
        </AnimatePresence>
        <span className="text-sm font-medium">Download</span>
        
        {/* Add subtle shimmer effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
          animate={{ 
            x: ['-100%', '100%'],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 3
          }}
        />
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
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Enhanced gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Enhanced animated particles in the background */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white/40 rounded-full"
                initial={{ 
                  x: Math.random() * 100 + "%", 
                  y: Math.random() * 100 + "%", 
                  opacity: 0 
                }}
                animate={{ 
                  y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                  opacity: [0, 0.9, 0],
                  scale: [0.5, 1.2, 0.5]
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
                  {/* Enhanced loading animation */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  >
                    <Check className="w-5 h-5" />
                  </motion.div>
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
                  {/* Enhanced download icon animation */}
                  <motion.div
                    animate={isHovered ? { y: [0, -3, 0] } : {}}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                  >
                    <Download className="w-5 h-5" />
                  </motion.div>
                  <span>Download for Mac</span>
                  <motion.div 
                    animate={{ 
                      x: isHovered || showArrow ? 5 : 0,
                      opacity: isHovered || showArrow ? 1 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </span>
          
          {/* Enhanced border and glow effects */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/5 to-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Top shimmer */}
            <motion.div 
              className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent"
              style={{ transform: 'translateX(-100%)' }}
              animate={{ x: ['100%', '-100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Bottom shimmer */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent"
              style={{ transform: 'translateX(100%)' }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Left shimmer */}
            <motion.div 
              className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/80 to-transparent"
              style={{ transform: 'translateY(-100%)' }}
              animate={{ y: ['100%', '-100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
            />
            
            {/* Right shimmer */}
            <motion.div 
              className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/80 to-transparent"
              style={{ transform: 'translateY(100%)' }}
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
            />
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
              <div className="text-sm text-gray-400 flex flex-wrap justify-center gap-2 mb-2">
                <motion.div 
                  className="px-2 py-1 rounded-full bg-white/10 text-xs backdrop-blur-md border border-white/5 flex items-center"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                >
                  Version {fileInfo?.version || "1.0.0"}
                </motion.div>
                <motion.div 
                  className="px-2 py-1 rounded-full bg-white/10 text-xs backdrop-blur-md border border-white/5 flex items-center gap-1"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                >
                  <Shield className="w-3 h-3" />
                  macOS 15+
                </motion.div>
                <motion.div 
                  className="px-2 py-1 rounded-full bg-white/10 text-xs backdrop-blur-md border border-white/5 flex items-center"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                >
                  {fileInfo?.extension || "ZIP"} Archive
                </motion.div>
              </div>

              <div className="flex flex-col items-center gap-2">
                {downloadCount && (
                  <motion.div 
                    className="text-xs text-gray-400 flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.span 
                      className="inline-block w-1.5 h-1.5 rounded-full bg-white/40 mr-1.5"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    {downloadCount.toLocaleString()}+ users already downloaded
                  </motion.div>
                )}

                <motion.a
                  href="https://docs.copyclipcloud.com/installation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1 group"
                  whileHover={{ x: 3 }}
                >
                  Installation guide 
                  <motion.div
                    animate={{ x: 0 }}
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ExternalLink className="w-3 h-3 group-hover:scale-110 transition-transform" />
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
