
import { useState } from "react";
import { motion } from "framer-motion";
import { Apple, Download, Check } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      // TODO: Replace with actual download URL
      const url = "https://your-file-hosting-service.com/copyclipcloud.dmg";
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = "CopyClipCloud.dmg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success("Download started!");
    } catch (error) {
      toast.error("Download failed. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl mx-auto text-center space-y-8"
      >
        <div className="space-y-2">
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full glass-panel space-x-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Apple className="w-4 h-4" />
            <span className="text-sm font-medium">Made for macOS</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            CopyClipCloud
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            The ultimate clipboard manager for Mac. Store, sync, and access your clipboard history across all your devices with powerful features and seamless integration.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="space-y-8"
        >
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="animated-border-button glass-panel"
          >
            <span className="relative z-10 flex items-center space-x-2">
              {downloading ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  <span>Download for macOS</span>
                </>
              )}
            </span>
          </button>

          <p className="text-sm text-gray-500">
            Version 1.0.0 • Requires macOS 12 or later
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-panel p-6 rounded-xl text-left"
            >
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const features = [
  {
    title: "Universal Clipboard",
    description: "Copy on one device, paste on another. Seamlessly sync your clipboard across all your Mac devices.",
  },
  {
    title: "Rich Media Support",
    description: "Store and manage text, images, files, and more in your clipboard history with intelligent organization.",
  },
  {
    title: "Secure & Private",
    description: "End-to-end encryption ensures your clipboard data stays private and secure at all times.",
  },
];

export default Index;
