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
      
      console.log("Attempting to list files in app_files bucket");
      const { data: files, error: filesError } = await supabase
        .storage
        .from('app_files')
        .list();
      
      if (filesError) {
        console.error("Error listing files:", filesError);
        throw new Error(`Could not list files: ${filesError.message}`);
      }
      
      if (!files || files.length === 0) {
        console.error("No files found in storage bucket");
        throw new Error("No files available for download. Please check the app_files bucket.");
      }
      
      console.log("Found files:", files);
      
      // Find a file with .zip or .dmg extension, or use the first file
      let fileToDownload = files.find(file => 
        file.name.endsWith('.zip') || file.name.endsWith('.dmg')
      ) || files[0];
      
      console.log("Selected file for download:", fileToDownload.name);
      
      // Get a public URL for the file - note the corrected type checking here
      const { data: publicUrlData } = supabase
        .storage
        .from('app_files')
        .getPublicUrl(fileToDownload.name);
      
      if (!publicUrlData || !publicUrlData.publicUrl) {
        console.error("No public URL returned");
        throw new Error("No download URL available");
      }
      
      // Start the download
      toast.success(`Download started! ${fileToDownload.name}`);
      console.log("Starting download with URL:", publicUrlData.publicUrl);
      
      // Create a temporary link element to trigger the download
      const link = document.createElement('a');
      link.href = publicUrlData.publicUrl;
      link.setAttribute('download', fileToDownload.name);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error("Download error:", error);
      toast.error(`Download failed: ${error.message || "Please try again later."}`);
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
