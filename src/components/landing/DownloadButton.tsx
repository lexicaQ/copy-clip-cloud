import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useFileDownload } from "@/hooks/useFileDownload";
import { toast } from "sonner";
import { DownloadButtonBackground } from "./DownloadButtonBackground";
import { DownloadButtonContent } from "./DownloadButtonContent";

const DownloadButton = ({ variant = "primary" }: { variant?: "primary" | "compact" }) => {
  const { downloading, fileInfo, handleDownload } = useFileDownload();
  const [isHovered, setIsHovered] = useState(false);
  const [downloadCount, setDownloadCount] = useState<number | null>(null);

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
        <DownloadButtonContent downloading={downloading} isHovered={isHovered} />
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
          <DownloadButtonBackground isHovered={isHovered} />
          <DownloadButtonContent downloading={downloading} isHovered={isHovered} />
          
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
