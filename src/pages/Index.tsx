
import { useState } from "react";
import { motion } from "framer-motion";
import { Apple, Download, Check, Clipboard, Cloud, Shield } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (downloading) return; // Prevent multiple clicks
    
    setDownloading(true);
    try {
      toast.info("Preparing download...");
      
      // Try to download using the direct Storage API first
      try {
        console.log("Attempting direct storage download");
        const { data: files, error: filesError } = await supabase
          .storage
          .from('app_files')
          .list();
        
        if (filesError) {
          console.error("Error listing files:", filesError);
          throw new Error("Could not list files");
        }
        
        if (!files || files.length === 0) {
          console.error("No files found in storage");
          throw new Error("No files available");
        }
        
        // Sort files to get the latest version based on filename
        const sortedFiles = files.sort((a, b) => b.name.localeCompare(a.name));
        const latestFile = sortedFiles[0];
        console.log("Latest file:", latestFile.name);
        
        const { data: fileData, error: fileError } = await supabase
          .storage
          .from('app_files')
          .createSignedUrl(latestFile.name, 60);
        
        if (fileError) {
          console.error("Error creating signed URL:", fileError);
          throw new Error("Could not create download URL");
        }
        
        if (!fileData || !fileData.signedUrl) {
          console.error("No signed URL returned");
          throw new Error("No download URL available");
        }
        
        // Start the download
        toast.success(`Download started! Latest version`);
        console.log("Starting download with URL:", fileData.signedUrl);
        
        // Create a temporary link element to trigger the download
        const link = document.createElement('a');
        link.href = fileData.signedUrl;
        link.setAttribute('download', latestFile.name);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setTimeout(() => {
          setDownloading(false);
        }, 1000);
        return;
      } catch (directDownloadError) {
        console.error("Direct download failed:", directDownloadError);
        console.log("Falling back to edge function...");
      }
      
      // Fall back to edge function if direct download fails
      console.log("Calling download-app edge function");
      const { data, error } = await supabase.functions.invoke('download-app', {
        method: 'GET',
      });

      if (error) {
        console.error("Edge function error:", error);
        toast.error("Download failed. Please try again later.");
        setDownloading(false);
        return;
      }

      if (!data || !data.downloadUrl) {
        console.error("No download URL returned from edge function");
        toast.error("No app version available for download.");
        setDownloading(false);
        return;
      }

      // Start the download by creating a temporary link
      toast.success(`Download started! ${data.version ? `Version ${data.version}` : ''}`);
      console.log("Starting download via edge function with URL:", data.downloadUrl);
      
      // Create a temporary link element to trigger the download
      const link = document.createElement('a');
      link.href = data.downloadUrl;
      link.setAttribute('download', data.fileName || 'CopyClipCloud.zip');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download error:", error);
      toast.error("Download failed. Please try again later.");
    } finally {
      // Set downloading back to false after a slight delay to prevent quick re-clicks
      setTimeout(() => {
        setDownloading(false);
      }, 1000);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl mx-auto text-center space-y-8 relative z-10"
      >
        {/* Logo and Badge */}
        <div className="space-y-6">
          <motion.div 
            className="w-24 h-24 mx-auto floating-element"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="w-full h-full rounded-2xl glass-panel flex items-center justify-center">
              <Clipboard className="w-12 h-12" />
            </div>
          </motion.div>

          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full glass-panel space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Apple className="w-4 h-4" />
            <span className="text-sm font-medium">Built for macOS 15+</span>
          </motion.div>
        </div>
        
        {/* Title and Description */}
        <div className="space-y-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-tight"
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
            Experience the next generation of clipboard management. Seamlessly sync your clipboard across all your Apple devices with powerful organization features and military-grade encryption.
          </motion.p>
        </div>

        {/* Download Button */}
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
            Version 1.0.0 • For macOS 15 or later • ZIP Archive
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="glass-panel p-6 hover:bg-white/10 transition-all duration-300 cursor-default group"
              whileHover={{ y: -5 }}
            >
              <feature.icon className="w-8 h-8 mb-4 text-white/80 group-hover:text-white transition-colors" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
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
    icon: Cloud
  },
  {
    title: "Rich Media Support",
    description: "Store and manage text, images, files, and more in your clipboard history with intelligent organization.",
    icon: Clipboard
  },
  {
    title: "Secure & Private",
    description: "End-to-end encryption ensures your clipboard data stays private and secure at all times.",
    icon: Shield
  },
];

export default Index;
