
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Apple, Download, Check, Clipboard, Cloud, Shield, Loader2, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { getLatestAppVersion, downloadApp } from "@/utils/appDownload";

const Index = () => {
  const [downloading, setDownloading] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      // Get the latest version info
      const latestVersion = await getLatestAppVersion();
      if (!latestVersion) {
        throw new Error("No version available for download");
      }

      // Download the file
      const fileBlob = await downloadApp(latestVersion.file_path);
      
      // Create a download link
      const url = URL.createObjectURL(fileBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = latestVersion.filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast.success("Download started successfully!");
    } catch (error) {
      console.error('Download error:', error);
      toast.error("Download failed. Please try again later.");
    } finally {
      setTimeout(() => {
        setDownloading(false);
      }, 2000); // Keep animation visible for 2 seconds
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden bg-black">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,7,84,0.8)_0%,rgba(0,0,0,1)_100%)]" />
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
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
            className="w-28 h-28 mx-auto"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotateY: downloading ? 360 : 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              rotateY: { duration: 1.5, ease: "easeInOut" }
            }}
          >
            <div className="w-full h-full rounded-3xl glass-panel flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-500/20">
              <Cloud className="w-14 h-14 text-white/90" />
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
            className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
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
            className="animated-border-button glass-panel group relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {downloading ? (
                <motion.div
                  key="downloading"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-purple-500/20 to-blue-500/20"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader2 className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="download"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="relative z-10 flex items-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download for Mac</span>
                </motion.div>
              )}
            </AnimatePresence>
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

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 space-y-4"
        >
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass-panel overflow-hidden"
              initial={false}
            >
              <button
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: activeFaq === index ? "auto" : 0,
                  opacity: activeFaq === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 pt-0 text-gray-400">
                  {faq.answer}
                </div>
              </motion.div>
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

const faqs = [
  {
    question: "How does CopyClipCloud work?",
    answer: "CopyClipCloud runs in the background on your Mac, automatically syncing your clipboard content across all your devices using end-to-end encryption. When you copy something on one device, it's instantly available on all your other devices."
  },
  {
    question: "Is my clipboard data secure?",
    answer: "Yes, absolutely! We use military-grade encryption to protect your data. All clipboard content is encrypted before it leaves your device, and only you can decrypt it. We never have access to your unencrypted data."
  },
  {
    question: "What types of content can I sync?",
    answer: "CopyClipCloud supports text, formatted text, images, files, and more. You can sync practically anything you can copy to your clipboard, with support for rich text formatting and file attachments."
  },
  {
    question: "How much does it cost?",
    answer: "CopyClipCloud is currently free during our beta period. We plan to introduce premium features in the future, but core functionality will always remain free."
  }
];

export default Index;
