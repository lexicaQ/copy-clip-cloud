
import React from "react";
import { motion } from "framer-motion";
import { useFileDownload } from "@/hooks/useFileDownload";
import { toast } from "sonner";
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
    toast.success("Download started", {
      description: "Your download will begin shortly",
      position: "bottom-center",
    });
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

        <FileInformation fileInfo={fileInfo} downloadCount={downloadCount} />
      </div>
    </motion.div>
  );
};

export default DownloadButton;
