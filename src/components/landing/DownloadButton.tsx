
import React from "react";
import { motion } from "framer-motion";
import { Download, Check } from "lucide-react";
import { useFileDownload } from "@/hooks/useFileDownload";

const DownloadButton = () => {
  const { downloading, fileInfo, handleDownload } = useFileDownload();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="space-y-4"
    >
      <button
        onClick={handleDownload}
        disabled={downloading}
        className={`animated-border-button glass-panel download-button ${downloading ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'}`}
        aria-label="Download for Mac"
      >
        <span className="relative z-10 flex items-center space-x-2">
          {downloading ? (
            <>
              <motion.div
                className="animate-border-pulse"
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
      </button>

      <p className="text-sm text-gray-500">
        Version {fileInfo?.version || "1.0.0"} • For macOS 15 or later • {fileInfo?.extension || "ZIP"} Archive
      </p>
    </motion.div>
  );
};

export default DownloadButton;
