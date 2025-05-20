
import React from "react";
import { motion } from "framer-motion";
import { Clock, Download, Calendar } from "lucide-react";

interface FileInformationProps {
  fileInfo: {
    version: string;
    fileName: string;
    size: string;
    extension: string;
  } | null;
  downloadCount: number;
}

export const FileInformation = ({ fileInfo, downloadCount }: FileInformationProps) => {
  if (!fileInfo) return null;

  const formattedDownloadCount = downloadCount.toLocaleString();
  const releaseDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
    >
      <div className="flex items-center gap-1">
        <Clock className="w-3.5 h-3.5" />
        <span>Version {fileInfo.version}</span>
      </div>
      <div className="flex items-center gap-1">
        <Download className="w-3.5 h-3.5" />
        <span>{formattedDownloadCount} Downloads</span>
      </div>
      <div className="flex items-center gap-1">
        <Calendar className="w-3.5 h-3.5" />
        <span>Released {releaseDate}</span>
      </div>
      <div>
        <span>{fileInfo.size} ({fileInfo.extension.toUpperCase()})</span>
      </div>
    </motion.div>
  );
};
