
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Apple } from "lucide-react";
import { toast } from "sonner";
import LoadingSpinner from "@/components/LoadingSpinner";
import StarField from "@/components/StarField";
import InteractiveBackground from "@/components/InteractiveBackground";
import AppLogo from "@/components/AppLogo";
import DownloadButton from "@/components/DownloadButton";
import FeatureGrid from "@/components/FeatureGrid";
import AdditionalFeatures from "@/components/AdditionalFeatures";
import FAQ from "@/components/FAQ";

const Index = () => {
  const [downloading, setDownloading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success("Download started! This is a preview version.");
    } catch (error) {
      toast.error("Download failed. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      <StarField />
      <InteractiveBackground />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl mx-auto text-center space-y-8 relative z-10"
      >
        {/* Logo and Badge */}
        <div className="space-y-6">
          <AppLogo />
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full glass-panel space-x-3 hover:bg-white/10 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 0.2 }}
          >
            <Apple className="w-5 h-5" />
            <span className="text-base font-medium">Built for macOS 15+</span>
          </motion.div>
        </div>
        
        {/* Title and Description */}
        <div className="space-y-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
            Transform your clipboard experience with our intelligent, secure, and seamless clipboard manager. Perfect for professionals, developers, and anyone who values productivity.
          </motion.p>
        </div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="space-y-4"
        >
          <DownloadButton downloading={downloading} onClick={handleDownload} />
          <p className="text-sm text-gray-500">
            Version 1.0.0 • For macOS 15 or later • ZIP Archive
          </p>
        </motion.div>

        <FeatureGrid />
        <AdditionalFeatures />
        <FAQ />
      </motion.div>
    </div>
  );
};

export default Index;
