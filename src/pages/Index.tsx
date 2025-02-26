import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Apple, Download, Cloud, Loader2, ChevronDown, Zap, Users, Clock, Shield, Clipboard, Heart, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { getLatestAppVersion, downloadApp } from "@/utils/appDownload";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const efficiencyData = [
  { name: 'Traditional', value: 35 },
  { name: 'CopyClipCloud', value: 85 },
];

const satisfactionData = [
  { name: 'Very Satisfied', value: 68 },
  { name: 'Satisfied', value: 22 },
  { name: 'Neutral', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Index = () => {
  const [downloading, setDownloading] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

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

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,1)_70%)]" />
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl mx-auto text-center space-y-8 relative z-10"
      >
        <div className="space-y-6">
          <motion.div 
            className="app-logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotateY: downloading ? 360 : 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              rotateY: { duration: 1.5, ease: "easeInOut" }
            }}
          >
            <div className="w-full h-full rounded-3xl glass-panel flex items-center justify-center bg-gradient-to-br from-white/20 to-white/5">
              <Cloud className="w-14 h-14 text-white/90" />
            </div>
          </motion.div>

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
            className="text-4xl md:text-6xl font-bold tracking-tight text-gradient"
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="space-y-4"
        >
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="animated-border-button group relative overflow-hidden px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105"
          >
            <AnimatePresence mode="wait">
              {downloading ? (
                <motion.div
                  key="downloading"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-white/20 to-white/5"
                >
                  <div className="loading-spinner-container">
                    <div className="loading-spinner" />
                  </div>
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

        <motion.div 
          className="stats-grid mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="stat-card">
            <Zap className="w-8 h-8 mb-4 text-white/80" />
            <div className="stat-value">85%</div>
            <div className="stat-label">Faster Workflow</div>
            <div className="text-xs text-gray-400 mt-2">Based on user studies</div>
          </div>
          <div className="stat-card">
            <Users className="w-8 h-8 mb-4 text-white/80" />
            <div className="stat-value">50K+</div>
            <div className="stat-label">Active Users</div>
            <div className="text-xs text-gray-400 mt-2">Growing daily</div>
          </div>
          <div className="stat-card">
            <Clock className="w-8 h-8 mb-4 text-white/80" />
            <div className="stat-value">2.5hrs</div>
            <div className="stat-label">Saved Weekly</div>
            <div className="text-xs text-gray-400 mt-2">Per user average</div>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="glass-panel p-6">
            <h3 className="text-xl font-semibold mb-6">Workflow Efficiency</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={efficiencyData}>
                  <XAxis dataKey="name" stroke="#ffffff60" />
                  <YAxis stroke="#ffffff60" />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'rgba(0,0,0,0.8)', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px' 
                    }} 
                  />
                  <Bar dataKey="value" fill="rgba(255,255,255,0.2)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-panel p-6">
            <h3 className="text-xl font-semibold mb-6">User Satisfaction</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={satisfactionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {satisfactionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      background: 'rgba(0,0,0,0.8)', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px' 
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

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
              className="faq-item glass-panel overflow-hidden"
              initial={false}
              animate={{ 
                backgroundColor: activeFaq === index ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)'
              }}
            >
              <button
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <span className="faq-question font-medium">{faq.question}</span>
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
                <div className="faq-answer p-4 pt-0 text-gray-400 text-left">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="testimonials-section mt-16 text-center"
        >
          <p className="text-sm text-gray-400 mb-6">
            Trusted by innovative teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-4">
            <motion.div 
              className="company-logo h-8 opacity-50 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
            >
              TechCorp
            </motion.div>
            <motion.div 
              className="company-logo h-8 opacity-50 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
            >
              InnovateLabs
            </motion.div>
            <motion.div 
              className="company-logo h-8 opacity-50 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
            >
              FutureWorks
            </motion.div>
          </div>
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

export default Index;
