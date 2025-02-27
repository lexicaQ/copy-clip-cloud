
import { motion } from "framer-motion";
import { Apple } from "lucide-react";
import Logo from "@/components/Logo";
import DownloadButton from "@/components/DownloadButton";

interface HeroSectionProps {
  downloading: boolean;
  onDownload: () => void;
}

const HeroSection = ({ downloading, onDownload }: HeroSectionProps) => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center justify-center space-y-6">
        <Logo size="lg" />
        
        <motion.div 
          className="inline-flex items-center px-4 py-2 rounded-full glass-panel space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Apple className="w-4 h-4 text-white" />
          <span className="text-sm font-medium">Built for macOS 15+</span>
        </motion.div>
      </div>
      
      <div className="space-y-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          CopyClipCloud
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Experience the next generation of clipboard management. Seamlessly sync your clipboard across all your Apple devices with powerful organization features and military-grade encryption.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="space-y-4"
      >
        <DownloadButton 
          onClick={onDownload} 
          isDownloading={downloading} 
        />

        <p className="text-sm text-gray-500">
          Version 1.0.1 • For macOS 15 or later • ZIP Archive
        </p>
      </motion.div>
    </div>
  );
};

export default HeroSection;
