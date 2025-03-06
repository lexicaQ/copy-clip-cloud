
import React from "react";
import { motion } from "framer-motion";
import { Cloud, Shield, Zap, Search, Sparkles, Code, Settings, Clock, Users, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InteractiveBackground from "@/components/landing/InteractiveBackground";
import DownloadButton from "@/components/landing/DownloadButton";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay?: number;
  color?: string;
}

const FeatureCard = ({ title, description, icon: Icon, delay = 0, color = "from-white/10 to-white/5" }: FeatureCardProps) => (
  <motion.div
    className="glass-panel p-8 relative overflow-hidden group hover:border-white/20"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
        viewport={{ once: true }}
        className="mt-6 flex items-center text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer group/link"
      >
        Learn more 
        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
      </motion.div>
    </div>
  </motion.div>
);

const FeatureShowcase = ({ title, description, icon: Icon, image, isReversed = false, delay = 0 }: {
  title: string;
  description: string;
  icon: React.ElementType;
  image?: string;
  isReversed?: boolean;
  delay?: number;
}) => (
  <motion.div 
    className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center my-24`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
  >
    <div className="flex-1 space-y-6">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-2xl font-bold text-gradient">{title}</h3>
      </div>
      
      <p className="text-gray-300 leading-relaxed text-lg">{description}</p>
      
      <motion.button 
        className="px-5 py-2.5 bg-white text-black rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Explore feature <ArrowRight className="w-4 h-4" />
      </motion.button>
    </div>
    
    <div className="flex-1">
      <div className="glass-panel p-1 rounded-xl overflow-hidden subtle-glow">
        <div className="h-80 w-full bg-gradient-to-br from-white/10 to-transparent rounded-lg flex items-center justify-center">
          {image ? (
            <img src={image} alt={title} className="max-w-full max-h-full" />
          ) : (
            <div className="text-white/20 text-center p-4">
              <Icon className="w-16 h-16 mx-auto mb-4 opacity-40" />
              <p>Feature visualization</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const Features = () => {
  const features = [
    {
      title: "Intelligent Sync",
      description: "Seamlessly synchronize your clipboard across all Apple devices with real-time updates and conflict resolution.",
      icon: Cloud,
      color: "from-blue-500/10 to-blue-600/5"
    },
    {
      title: "Military-Grade Encryption",
      description: "Your data is protected with end-to-end encryption, ensuring complete privacy and security at all times.",
      icon: Shield,
      color: "from-green-500/10 to-green-600/5"
    },
    {
      title: "Lightning Fast",
      description: "Experience instant clipboard operations with our optimized performance engine, even with large files.",
      icon: Zap,
      color: "from-yellow-500/10 to-yellow-600/5"
    },
    {
      title: "Smart Search",
      description: "Find any copied item instantly with our AI-powered search that understands context and content.",
      icon: Search,
      color: "from-purple-500/10 to-purple-600/5"
    },
    {
      title: "AI Organization",
      description: "Let our AI automatically organize your clipboard items into smart categories and suggestions.",
      icon: Sparkles,
      color: "from-pink-500/10 to-pink-600/5"
    },
    {
      title: "Code Snippets",
      description: "Special handling for code with syntax highlighting and automatic language detection.",
      icon: Code,
      color: "from-red-500/10 to-red-600/5"
    },
    {
      title: "Custom Rules",
      description: "Create powerful automation rules to handle specific types of clipboard content.",
      icon: Settings,
      color: "from-indigo-500/10 to-indigo-600/5"
    },
    {
      title: "History Timeline",
      description: "Access your complete clipboard history with our intuitive timeline interface.",
      icon: Clock,
      color: "from-orange-500/10 to-orange-600/5"
    },
    {
      title: "Team Collaboration",
      description: "Share clipboard items with team members securely with fine-grained access controls.",
      icon: Users,
      color: "from-teal-500/10 to-teal-600/5"
    }
  ];

  const showcaseFeatures = [
    {
      title: "Universal Clipboard",
      description: "Copy on one device, paste on another. Our synchronization technology ensures your clipboard is instantly available across all your devices. Whether you're working on your MacBook, iPad, or iPhone, your clipboard follows you everywhere, making cross-device workflows seamless and efficient.",
      icon: Cloud
    },
    {
      title: "Smart Organization",
      description: "Never lose track of important copied content again. CopyClipCloud's AI automatically categorizes your clipboard items, creating smart collections for code snippets, addresses, URLs, and more. The intelligent system learns from your usage patterns to suggest and prioritize the content you need most.",
      icon: Sparkles,
      isReversed: true
    },
    {
      title: "End-to-End Encryption",
      description: "Your clipboard often contains sensitive information. That's why we've implemented military-grade end-to-end encryption for all your data. Only your devices have the keys to decrypt your content, ensuring complete privacy and security even when syncing across multiple devices.",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <InteractiveBackground />
      <Header />
      
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="h-20 w-20 rounded-2xl glass-panel flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles className="w-10 h-10" />
          </motion.div>
          
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Advanced Features</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of clipboard management with our powerful features designed for professionals.
          </p>
        </motion.div>

        {/* Feature Showcase Section */}
        <div className="mb-32">
          {showcaseFeatures.map((feature, index) => (
            <FeatureShowcase
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              isReversed={feature.isReversed}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gradient">All Features</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 0.1}
              color={feature.color}
            />
          ))}
        </div>

        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Workflow?</h2>
          <DownloadButton />
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Features;
