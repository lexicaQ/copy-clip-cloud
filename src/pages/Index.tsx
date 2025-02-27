import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cloud, Shield, Clipboard } from "lucide-react";
import { toast } from "sonner";
import { getLatestAppVersion, downloadApp } from "@/utils/appDownload";

// Components
import SplashScreen from "@/components/SplashScreen";
import AnimatedBackground from "@/components/AnimatedBackground";
import FAQSection from "@/components/FAQSection";
import FeatureShowcase from "@/components/FeatureShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ChartsSection from "@/components/sections/ChartsSection";

// Features data
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

// FAQ data
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
  },
  {
    question: "Can I use it offline?",
    answer: "Yes! CopyClipCloud works offline for local clipboard history. Your content will sync automatically when you're back online."
  },
  {
    question: "Is there a limit to how much I can store?",
    answer: "Free accounts include 1GB of storage for clipboard history. Premium accounts will offer expanded storage options."
  },
  {
    question: "How do I get started?",
    answer: "Simply download the app, install it on your Mac, and sign in with your account. The app will guide you through a quick setup process to enable clipboard syncing."
  }
];

const Index = () => {
  const [downloading, setDownloading] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem("visited");
    if (visited) {
      setShowSplash(false);
      setHasVisited(true);
    } else {
      localStorage.setItem("visited", "true");
    }
  }, []);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      console.log('Initiating download process...');
      
      const latestVersion = await getLatestAppVersion();
      if (!latestVersion) {
        throw new Error("No version available for download");
      }
      
      console.log('Found latest version:', latestVersion);

      const fileBlob = await downloadApp(latestVersion.file_path);
      console.log('File blob received, creating download link...');
      
      const url = URL.createObjectURL(fileBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = latestVersion.filename || 'CopyClipCloud.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast.success("Download started successfully!");
      console.log('Download process completed');
    } catch (error) {
      console.error('Download error:', error);
      toast.error(error instanceof Error ? error.message : "Download failed. Please try again later.");
    } finally {
      setTimeout(() => {
        setDownloading(false);
      }, 2000);
    }
  };

  if (showSplash && !hasVisited) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <AnimatedBackground />
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,1)_70%)]" />
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto text-center space-y-12 relative z-10 px-4 md:px-8 py-16"
      >
        <HeroSection downloading={downloading} onDownload={handleDownload} />
        
        <StatsSection />
        
        <ChartsSection />

        <motion.div 
          className="mt-24 space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.h2 
            className="text-3xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Key Features
          </motion.h2>
          
          <FeatureShowcase features={features} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <FAQSection items={faqs} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <TestimonialsSection companies={["TechCorp", "InnovateLabs", "FutureWorks"]} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
