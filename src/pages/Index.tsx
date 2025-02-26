import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Apple, Download, Check, Cloud, Shield, Zap, History, Users, ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [downloading, setDownloading] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  const logoControls = useAnimation();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const animateLogo = async () => {
      await logoControls.start({
        scale: [0, 1.2, 1],
        rotate: [0, -10, 10, 0],
        transition: { 
          duration: 1.5,
          times: [0, 0.6, 0.8, 1],
          ease: "easeOut"
        }
      });
    };
    animateLogo();

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
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

  const toggleFaq = (index: number) => {
    setSelectedFaq(selectedFaq === index ? null : index);
  };

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
              transition={{ duration: 2, times: [0, 0.5, 1] }}
              className="w-32 h-32"
            >
              <img
                src="/lovable-uploads/47736611-82aa-49d6-81c4-d97073c3bb26.png"
                alt="CopyClipCloud Logo"
                className="w-full h-full object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_800px)]" />
        </div>

        <div className="w-full max-w-6xl mx-auto relative z-10">
          <motion.div 
            animate={logoControls}
            className="w-32 h-32 mx-auto mb-12"
          >
            <img
              src="/lovable-uploads/47736611-82aa-49d6-81c4-d97073c3bb26.png"
              alt="CopyClipCloud Logo"
              className="w-full h-full object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-panel space-x-2">
              <Apple className="w-4 h-4" />
              <span className="text-sm font-medium">Made for macOS 15+</span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Your Clipboard,
            <br />
            Supercharged
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Experience the next generation of clipboard management with CopyClipCloud. 
            Seamlessly sync your clipboard across all your Apple devices with powerful 
            organization features and military-grade encryption.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="space-y-4 mb-24 text-center"
          >
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="animated-border-button glass-panel group"
            >
              <span className="relative z-10 flex items-center space-x-3 px-8">
                {downloading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Check className="w-6 h-6" />
                    </motion.div>
                    <span className="text-lg">Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-6 h-6 group-hover:transform group-hover:-translate-y-1 transition-transform" />
                    <span className="text-lg">Download for Mac</span>
                  </>
                )}
              </span>
            </button>

            <p className="text-sm text-gray-500">
              Version 1.0.0 • For macOS 15 or later • 14.2 MB
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="glass-panel p-6 hover:bg-white/10 transition-all duration-300 cursor-default group"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <feature.icon className="w-10 h-10 mb-4 text-white/80 group-hover:text-white transition-colors" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="glass-panel p-8 text-center space-y-2"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="w-full max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="glass-panel overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    {selectedFaq === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  <AnimatePresence>
                    {selectedFaq === index && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-400">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

const features = [
  {
    title: "Universal Sync",
    description: "Copy on one device, paste on another. Real-time sync across all your Apple devices.",
    icon: Cloud
  },
  {
    title: "Rich History",
    description: "Access your complete clipboard history with powerful search and organization tools.",
    icon: History
  },
  {
    title: "Secure & Private",
    description: "End-to-end encryption ensures your data stays private and secure at all times.",
    icon: Shield
  },
  {
    title: "Lightning Fast",
    description: "Instant copying and pasting with negligible latency across devices.",
    icon: Zap
  }
];

const stats = [
  {
    value: "100K+",
    label: "Active Users"
  },
  {
    value: "99.9%",
    label: "Uptime"
  },
  {
    value: "5★",
    label: "App Store Rating"
  }
];

const faqs = [
  {
    question: "What is CopyClipCloud?",
    answer: "CopyClipCloud is a revolutionary clipboard management tool that synchronizes your clipboard across all your Apple devices, offering seamless copying and pasting with advanced organization features."
  },
  {
    question: "How secure is my clipboard data?",
    answer: "We use military-grade encryption to protect your clipboard data. All content is encrypted end-to-end, meaning only you can access your clipboard items across your devices."
  },
  {
    question: "Does it work offline?",
    answer: "Yes! CopyClipCloud works offline and automatically syncs when you're back online. Your clipboard history is always available, regardless of your connection status."
  },
  {
    question: "What's the storage limit?",
    answer: "The free tier includes 1GB of clipboard storage. Premium users get unlimited storage and additional features like advanced search and organization tools."
  },
  {
    question: "Can I share clipboard items with others?",
    answer: "Yes, premium users can securely share clipboard items with other CopyClipCloud users while maintaining end-to-end encryption."
  },
  {
    question: "How do I get started?",
    answer: "Simply download CopyClipCloud for macOS, sign in with your Apple ID, and you're ready to go! The app will guide you through a quick setup process."
  }
];

export default Index;
