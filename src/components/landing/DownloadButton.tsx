
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

  // Show arrow animation periodically with improved timing
  useEffect(() => {
    const interval = setInterval(() => {
      setShowArrow(true);
      const timeout = setTimeout(() => setShowArrow(false), 1800);
      return () => clearTimeout(timeout);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    handleDownload();
    // Enhanced toast with better styling
    toast.success("Download started", {
      description: "Your download will begin shortly",
      position: "bottom-center",
      className: "bg-black/95 border border-white/15 text-white shadow-2xl backdrop-blur-md",
      duration: 4000,
    });
  };

  // Compact variant for header buttons with enhanced styling
  if (variant === "compact") {
    return (
      <motion.button
        onClick={handleButtonClick}
        disabled={downloading}
        className={`px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all flex items-center gap-2 relative overflow-hidden ${
          downloading ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'
        }`}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <AnimatePresence mode="wait">
          {downloading ? (
            <motion.div
              key="check"
              initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Check className="w-4 h-4" />
            </motion.div>
          ) : (
            <motion.div
              key="download"
              initial={{ scale: 0.5, opacity: 0, rotate: 10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Download className="w-4 h-4" />
            </motion.div>
          )}
        </AnimatePresence>
        <span className="text-sm font-medium">Download</span>
        
        {/* Enhanced shimmer effect with smoother animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0"
          animate={{ 
            x: ['-100%', '100%'],
            opacity: [0, 0.7, 0]
          }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 3.5
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
          whileHover={{ scale: 1.04, y: -3 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/* Enhanced gradient background with smoother transition */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/8 via-white/15 to-white/8 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
          
          {/* Enhanced animated particles in the background with more variety */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white/50 rounded-full"
                initial={{ 
                  x: Math.random() * 100 + "%", 
                  y: Math.random() * 100 + "%", 
                  opacity: 0 
                }}
                animate={{ 
                  y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                  opacity: [0, 0.9, 0],
                  scale: [0.5, 1.3, 0.5]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2 + Math.random() * 4,
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
                  initial={{ opacity: 0, scale: 0.8, y: 5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="animate-border-pulse flex items-center gap-2"
                >
                  {/* Enhanced loading animation with smoother rotation */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                  >
                    <Check className="w-5 h-5" />
                  </motion.div>
                  <span>Downloading...</span>
                </motion.div>
              ) : (
                <motion.div 
                  key="download"
                  initial={{ opacity: 0, scale: 0.8, y: -5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="flex items-center gap-2"
                >
                  {/* Enhanced download icon animation with smoother motion */}
                  <motion.div
                    animate={isHovered ? { y: [0, -4, 0] } : {}}
                    transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  >
                    <Download className="w-5 h-5" />
                  </motion.div>
                  <span>Download for Mac</span>
                  <motion.div 
                    animate={{ 
                      x: isHovered || showArrow ? 7 : 0,
                      opacity: isHovered || showArrow ? 1 : 0
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 12 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </span>
          
          {/* Enhanced border and glow effects with smoother animations */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            {/* Enhanced gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/8 to-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            
            {/* Enhanced top shimmer with smoother motion */}
            <motion.div 
              className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/90 to-transparent"
              style={{ transform: 'translateX(-100%)' }}
              animate={{ x: ['100%', '-100%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Enhanced bottom shimmer with smoother motion */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/90 to-transparent"
              style={{ transform: 'translateX(100%)' }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            
            {/* Enhanced left shimmer with smoother motion */}
            <motion.div 
              className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/90 to-transparent"
              style={{ transform: 'translateY(-100%)' }}
              animate={{ y: ['100%', '-100%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            
            {/* Enhanced right shimmer with smoother motion */}
            <motion.div 
              className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/90 to-transparent"
              style={{ transform: 'translateY(100%)' }}
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
          </div>
          
          {/* Add inner glow on hover */}
          <motion.div 
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ 
              boxShadow: "inset 0 0 15px rgba(255, 255, 255, 0.15)",
            }}
          />
        </motion.button>

        <AnimatePresence>
          {fileInfo && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex flex-col items-center"
            >
              <div className="text-sm text-gray-400 flex flex-wrap justify-center gap-2 mb-2">
                <motion.div 
                  className="px-2 py-1 rounded-full bg-white/10 text-xs backdrop-blur-md border border-white/8 flex items-center"
                  whileHover={{ 
                    scale: 1.07, 
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    y: -2
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Version {fileInfo?.version || "1.0.0"}
                </motion.div>
                <motion.div 
                  className="px-2 py-1 rounded-full bg-white/10 text-xs backdrop-blur-md border border-white/8 flex items-center gap-1"
                  whileHover={{ 
                    scale: 1.07, 
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    y: -2
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Shield className="w-3 h-3" />
                  macOS 15+
                </motion.div>
                <motion.div 
                  className="px-2 py-1 rounded-full bg-white/10 text-xs backdrop-blur-md border border-white/8 flex items-center"
                  whileHover={{ 
                    scale: 1.07, 
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    y: -2
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
                    transition={{ delay: 0.4 }}
                  >
                    <motion.span 
                      className="inline-block w-1.5 h-1.5 rounded-full bg-white/50 mr-1.5"
                      animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {downloadCount.toLocaleString()}+ users already downloaded
                  </motion.div>
                )}

                <motion.a
                  href="https://docs.copyclipcloud.com/installation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1 group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Installation guide 
                  <motion.div
                    animate={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 500, damping: 10 }}
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
