
import React from "react";
import { motion } from "framer-motion";
import { Cloud, Clipboard, Shield, Search, Clock, Zap } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ElementType;
  index: number;
}

const Feature = ({ title, description, icon: Icon, index }: FeatureProps) => (
  <motion.div 
    className="glass-panel overflow-hidden relative group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5, borderColor: "rgba(255, 255, 255, 0.2)" }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="p-8">
      <div className="p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-5 bg-white/5 backdrop-blur-lg border border-white/10 group-hover:border-white/20 transition-all duration-300">
        <Icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:translate-x-0.5 transition-transform duration-300">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
    
    {/* Bottom shine effect */}
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
      className="mt-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-3xl font-bold text-center mb-4 relative"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">Key Features</span>
        <div className="h-1 w-16 bg-white/20 mx-auto mt-4"></div>
      </motion.h2>
      
      <motion.p 
        className="text-gray-400 text-center mb-16 max-w-xl mx-auto text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        Everything you need in a modern clipboard manager
      </motion.p>
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Feature 
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default AppFeatures;
