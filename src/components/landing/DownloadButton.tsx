
import React from "react";
import { motion } from "framer-motion";
import { useFileDownload } from "@/hooks/useFileDownload";
import { DownloadButtonBackground } from "./DownloadButtonBackground";
import { DownloadButtonContent } from "./DownloadButtonContent";
import { CompactDownloadButton } from "./CompactDownloadButton";
import { FileInformation } from "./FileInformation";
import { useDownloadCount } from "@/hooks/useDownloadCount";

const DownloadButton = ({ variant = "primary" }: { variant?: "primary" | "compact" }) => {
  const { downloading, fileInfo, handleDownload } = useFileDownload();
  const [isHovered, setIsHovered] = React.useState(false);
  const downloadCount = useDownloadCount();

  const handleButtonClick = () => {
    handleDownload();
    // Toast is now only shown in the useFileDownload hook
  };

  if (variant === "compact") {
    return <CompactDownloadButton downloading={downloading} onDownload={handleButtonClick} />;
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
          className={`relative overflow-hidden rounded-xl border border-white/30 ${
            downloading ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'
          }`}
          aria-label="Download App"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(255, 255, 255, 0.2)" }}
          whileTap={{ scale: 0.98 }}
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
          }}
        >
          <DownloadButtonBackground isHovered={isHovered} />
          <DownloadButtonContent downloading={downloading} isHovered={isHovered} />
        </motion.button>

        <FileInformation fileInfo={fileInfo} downloadCount={downloadCount} />
      </div>
    </motion.div>
  );
};

export default DownloadButton;
