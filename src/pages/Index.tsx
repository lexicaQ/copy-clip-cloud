
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Apple, Download, Check, Clipboard, Cloud, Shield, Sparkles, ArrowBigDown, Star } from "lucide-react";
import { toast } from "sonner";

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
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="loading-spinner">
            <div className="loading-cube">
              <div className="cube-face" style={{ transform: 'rotateX(0deg) translateZ(12px)' }} />
              <div className="cube-face" style={{ transform: 'rotateX(180deg) translateZ(12px)' }} />
              <div className="cube-face" style={{ transform: 'rotateY(90deg) translateZ(12px)' }} />
              <div className="cube-face" style={{ transform: 'rotateY(-90deg) translateZ(12px)' }} />
              <div className="cube-face" style={{ transform: 'rotateX(90deg) translateZ(12px)' }} />
              <div className="cube-face" style={{ transform: 'rotateX(-90deg) translateZ(12px)' }} />
            </div>
          </div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl font-medium text-white mt-8"
          >
            Loading CopyClipCloud...
          </motion.h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Star Field Background */}
      <div className="star-field">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="star"
            initial={{ opacity: Math.random() }}
            animate={{
              opacity: [Math.random() * 0.2, 1, Math.random() * 0.2],
              scale: [1, Math.random() + 1, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Interactive Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 0%, transparent 70%)",
              "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 70%)",
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 0%, transparent 70%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
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
            className="w-32 h-32 mx-auto"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="w-full h-full rounded-2xl glass-panel flex items-center justify-center bg-zinc-950 relative overflow-hidden group glow-effect">
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                }}
                animate={{ x: ["200%", "-200%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <Clipboard className="w-16 h-16 relative z-10" />
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Star className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full glass-panel space-x-3 glow-effect"
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
          <motion.button
            onClick={handleDownload}
            disabled={downloading}
            className="animated-border-button glass-panel group relative"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
              }}
              animate={{ x: ["200%", "-200%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative z-10 flex items-center space-x-2">
              {downloading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Check className="w-5 h-5" />
                  </motion.div>
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  <span>Download for Mac</span>
                  <motion.div
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowBigDown className="w-5 h-5" />
                  </motion.div>
                </>
              )}
            </span>
          </motion.button>

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
              className="glass-panel p-6 hover:bg-white/10 transition-all duration-300 cursor-default group relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)",
                }}
                animate={{ x: ["200%", "-200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <feature.icon className="w-8 h-8 mb-4 text-white/80 group-hover:text-white transition-colors" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-2xl font-bold mb-8">Why Choose CopyClipCloud?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="glass-panel p-6"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const features = [
  {
    title: "Universal Clipboard",
    description: "Copy on one device, paste on another. Real-time sync across all your Mac devices with instant availability.",
    icon: Cloud
  },
  {
    title: "Rich Media Support",
    description: "Handle text, images, files, and code snippets with intelligent organization and quick search capabilities.",
    icon: Clipboard
  },
  {
    title: "Secure & Private",
    description: "Military-grade encryption ensures your sensitive data remains protected with zero-knowledge architecture.",
    icon: Shield
  }
];

const additionalFeatures = [
  {
    title: "Smart Organization",
    description: "AI-powered categorization automatically sorts your clipboard items by type, making it easy to find what you need."
  },
  {
    title: "Keyboard Maestro",
    description: "Custom keyboard shortcuts and powerful text expansion features to boost your productivity."
  },
  {
    title: "Developer Ready",
    description: "Code syntax highlighting, regex search, and seamless integration with your development workflow."
  },
  {
    title: "Privacy First",
    description: "Your data never leaves your devices without encryption. Complete control over your clipboard history."
  }
];

export default Index;
