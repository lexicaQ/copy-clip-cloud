
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Apple, Download, Cloud, Zap, Users, Clock, Shield, Clipboard, Heart, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { getLatestAppVersion, downloadApp } from "@/utils/appDownload";

// Custom components
import SplashScreen from "@/components/SplashScreen";
import Logo from "@/components/Logo";
import DownloadButton from "@/components/DownloadButton";
import AnimatedBackground from "@/components/AnimatedBackground";
import FAQSection from "@/components/FAQSection";
import FeatureShowcase from "@/components/FeatureShowcase";
import StatsCard from "@/components/StatsCard";
import ChartDisplay from "@/components/ChartDisplay";
import TestimonialsSection from "@/components/TestimonialsSection";

// Chart data
const efficiencyData = [
  { name: 'Traditional', value: 35 },
  { name: 'CopyClipCloud', value: 85 },
];

const satisfactionData = [
  { name: 'Very Satisfied', value: 68 },
  { name: 'Satisfied', value: 22 },
  { name: 'Neutral', value: 10 },
];

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
    // Check if user has visited before
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
      console.log('Initiating download...');
      
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
        {/* Header Section */}
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
              onClick={handleDownload} 
              isDownloading={downloading} 
            />

            <p className="text-sm text-gray-500">
              Version 1.0.0 • For macOS 15 or later • ZIP Archive
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="stats-grid mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <StatsCard 
            icon={Zap} 
            value="85%" 
            label="Faster Workflow" 
            subtext="Based on user studies"
            delay={0.1}
          />
          <StatsCard 
            icon={Users} 
            value="50K+" 
            label="Active Users" 
            subtext="Growing daily"
            delay={0.2}
          />
          <StatsCard 
            icon={Clock} 
            value="2.5hrs" 
            label="Saved Weekly" 
            subtext="Per user average"
            delay={0.3}
          />
        </motion.div>

        {/* Charts Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <ChartDisplay 
            title="Workflow Efficiency" 
            type="bar" 
            data={efficiencyData} 
            dataKey="value"
            delay={0.1}
          />
          <ChartDisplay 
            title="User Satisfaction" 
            type="pie" 
            data={satisfactionData} 
            dataKey="value"
            colors={['#00C49F', '#0088FE', '#FFBB28']}
            delay={0.2}
          />
        </motion.div>

        {/* Features Section */}
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

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <FAQSection items={faqs} />
        </motion.div>

        {/* Testimonials Section */}
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
