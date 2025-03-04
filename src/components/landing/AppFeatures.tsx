
import React from "react";
import { motion } from "framer-motion";
import { Cloud, Clipboard, Shield } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const Feature = ({ title, description, icon: Icon }: FeatureProps) => (
  <motion.div 
    className="glass-panel p-6 hover:bg-white/10 transition-all duration-300 cursor-default group"
    whileHover={{ y: -5 }}
  >
    <Icon className="w-8 h-8 mb-4 text-white/80 group-hover:text-white transition-colors" />
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
];

const AppFeatures = () => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      {features.map((feature, index) => (
        <Feature 
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </motion.div>
  );
};

export default AppFeatures;
