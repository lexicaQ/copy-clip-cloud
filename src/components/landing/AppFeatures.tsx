
import React from "react";
import { motion } from "framer-motion";
import { Cloud, Clipboard, Shield, Search, Clock, Zap } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const Feature = ({ title, description, icon: Icon }: FeatureProps) => (
  <motion.div 
    className="glass-panel p-6 transition-all duration-300 cursor-default"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="p-3 rounded-xl glass-panel w-12 h-12 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.div>
);

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
  {
    title: "Intelligent Search",
    description: "Quickly find any item in your clipboard history with powerful search and filtering options.",
    icon: Search
  },
  {
    title: "History Timeline",
    description: "Browse through your clipboard history with an intuitive timeline view and quick access to recent items.",
    icon: Clock
  },
  {
    title: "Performance Optimized",
    description: "Lightweight and responsive, designed to work seamlessly without slowing down your system.",
    icon: Zap
  }
];

const AppFeatures = () => {
  return (
    <motion.div 
      className="mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-2xl font-bold text-center mb-2 text-gradient"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Key Features
      </motion.h2>
      
      <motion.p 
        className="text-gray-400 text-center mb-10 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        Everything you need in a modern clipboard manager
      </motion.p>
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Feature 
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default AppFeatures;
