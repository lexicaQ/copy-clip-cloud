
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import React from "react";

interface FileInformationProps {
  fileInfo: any;
  downloadCount: number | null;
}

export const FileInformation = ({ fileInfo, downloadCount }: FileInformationProps) => {
  return (
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
  );
};
