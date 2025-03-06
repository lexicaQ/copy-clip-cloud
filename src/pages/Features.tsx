
import React from "react";
import { motion } from "framer-motion";
import { 
  CloudSync, 
  Shield, 
  Search, 
  Code, 
  Image, 
  Smartphone, 
  Laptop, 
  Server, 
  Globe, 
  Zap, 
  Lock, 
  Key,
  Clock,
  ClipboardCheck,
  Sparkles,
  Tags
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InteractiveBackground from "@/components/landing/InteractiveBackground";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      className="glass-panel p-6 hover:border-white/20 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="w-12 h-12 rounded-lg glass-panel flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const FeatureSection: React.FC<{ title: string; description: string; children: React.ReactNode }> = ({ 
  title, 
  description, 
  children 
}) => {
  return (
    <div className="py-16 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-3 text-gradient">{title}</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">{description}</p>
      </motion.div>
      {children}
    </div>
  );
};

const DemoSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
      <motion.div 
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-4">Seamless Experience Across All Devices</h3>
        <p className="text-gray-400 mb-6">
          CopyClipCloud provides a consistent, intuitive clipboard management experience across all your Apple devices. 
          Copy on your Mac, paste on your iPhone, or vice versa - your clipboard is always in sync.
        </p>
        <div className="space-y-4">
          {[
            "Real-time synchronization with end-to-end encryption",
            "Intelligent organization of clipboard items",
            "Rich media support for text, images, files, and code snippets",
            "Powerful search and filtering options",
            "Custom categories and tags for advanced organization"
          ].map((feature, i) => (
            <motion.div 
              key={i}
              className="flex items-start" 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              viewport={{ once: true }}
            >
              <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <p>{feature}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="glass-panel p-6 border border-white/20">
          <div className="aspect-video bg-black/40 rounded-lg overflow-hidden">
            <div className="bg-black/80 p-2 flex items-center space-x-2 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="flex-grow text-center text-xs text-gray-400">CopyClipCloud.app</div>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <ClipboardCheck className="w-4 h-4" />
                </div>
                <div className="flex-grow">
                  <div className="h-3 w-3/4 bg-white/20 rounded"></div>
                  <div className="h-2 w-1/2 bg-white/10 rounded mt-1"></div>
                </div>
                <div className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">3m ago</div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Code className="w-4 h-4" />
                </div>
                <div className="flex-grow">
                  <div className="h-3 w-full bg-white/20 rounded"></div>
                  <div className="h-2 w-3/4 bg-white/10 rounded mt-1"></div>
                </div>
                <div className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">12m ago</div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Image className="w-4 h-4" />
                </div>
                <div className="flex-grow">
                  <div className="h-10 bg-white/10 rounded"></div>
                </div>
                <div className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">45m ago</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Features = () => {
  const coreFeatures = [
    {
      title: "Universal Clipboard",
      description: "Copy on one device, paste on another. Your clipboard stays in sync across all your Apple devices automatically.",
      icon: CloudSync
    },
    {
      title: "End-to-End Encryption",
      description: "Your clipboard data is protected with military-grade encryption, ensuring your sensitive information stays private.",
      icon: Shield
    },
    {
      title: "Intelligent Search",
      description: "Quickly find any clipboard item with powerful search features that analyze content, format, and metadata.",
      icon: Search
    },
    {
      title: "Code Snippet Handling",
      description: "Automatic syntax highlighting and formatting for code snippets, making developer workflows smoother than ever.",
      icon: Code
    },
    {
      title: "Rich Media Support",
      description: "Seamlessly store and organize text, images, files, links, and other rich media in your clipboard history.",
      icon: Image
    },
    {
      title: "Cross-Device Support",
      description: "Works flawlessly across macOS, iOS, and iPadOS with native integration into each platform.",
      icon: Smartphone
    },
  ];

  const advancedFeatures = [
    {
      title: "Performance Optimized",
      description: "Designed to be lightweight and responsive, using minimal system resources even with thousands of clipboard items.",
      icon: Zap
    },
    {
      title: "Secure Storage",
      description: "Local and cloud storage options with AES-256 encryption to keep your clipboard history secure.",
      icon: Lock
    },
    {
      title: "Smart Categories",
      description: "AI-powered organization automatically sorts your clipboard items into relevant categories for easy access.",
      icon: Tags
    },
    {
      title: "API Integration",
      description: "Connect CopyClipCloud to your favorite apps and services with our developer-friendly API.",
      icon: Server
    },
    {
      title: "Global Access",
      description: "Access your clipboard history from anywhere in the world via our secure web interface.",
      icon: Globe
    },
    {
      title: "History Timeline",
      description: "Browse through your clipboard history chronologically with our intuitive timeline view.",
      icon: Clock
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <InteractiveBackground />
      <Header />
      
      <div className="pt-32 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-gradient">Powerful Features</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Discover all the ways CopyClipCloud can transform your workflow with intelligent clipboard management.
            </p>
          </motion.div>

          <FeatureSection 
            title="Core Features" 
            description="Everything you need for seamless clipboard management across all your devices"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreFeatures.map((feature, index) => (
                <FeatureCard 
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  delay={0.1 * index}
                />
              ))}
            </div>
          </FeatureSection>

          <FeatureSection 
            title="Interactive Demo" 
            description="See how CopyClipCloud seamlessly integrates into your workflow"
          >
            <DemoSection />
          </FeatureSection>

          <FeatureSection 
            title="Advanced Features" 
            description="Powerful tools for power users who demand more from their clipboard manager"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedFeatures.map((feature, index) => (
                <FeatureCard 
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  delay={0.1 * index}
                />
              ))}
            </div>
          </FeatureSection>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to transform your workflow?</h2>
            <div className="flex justify-center">
              <a 
                href="/download" 
                className="flex items-center px-8 py-4 bg-white text-black rounded-full hover:opacity-90 transition-all text-lg font-medium"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Download Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Features;
