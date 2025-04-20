
import React from "react";
import { motion } from "framer-motion";
import { Cloud, Clipboard, Shield, Search, Clock, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ElementType;
  index: number;
  link: string;
}

const Feature = ({ title, description, icon: Icon, index, link }: FeatureProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="backdrop-blur-xl bg-white/[0.03] border border-white/10 p-8 rounded-2xl hover:bg-white/[0.05] transition-all duration-300 h-full">
        <div className="flex items-start gap-5">
          <div className={`p-3 rounded-xl flex items-center justify-center ${isEven ? 'bg-white/5' : 'bg-white/10'}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-3">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
            
            <Link to={link}>
              <motion.div 
                className="flex items-center text-sm text-white/70 hover:text-white cursor-pointer transition-colors group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Learn more <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Metro-style decorative elements */}
      {index < 3 && (
        <div className="absolute h-6 w-px bg-white/10 left-1/2 -bottom-6 hidden md:block"></div>
      )}
      {(index === 0 || index === 3) && (
        <div className="absolute w-6 h-px bg-white/10 -right-6 top-1/2 hidden lg:block"></div>
      )}
    </motion.div>
  );
};

const features = [
  {
    title: "Universal Clipboard",
    description: "Copy on one device, paste on another. Seamlessly sync your clipboard across all your Mac devices.",
    icon: Cloud,
    link: "/features/universal-clipboard"
  },
  {
    title: "Rich Media Support",
    description: "Store and manage text, images, files, and more in your clipboard history with intelligent organization.",
    icon: Clipboard,
    link: "/features/smart-organization"
  },
  {
    title: "Secure & Private",
    description: "End-to-end encryption ensures your clipboard data stays private and secure at all times.",
    icon: Shield,
    link: "/features/end-to-end-encryption"
  },
  {
    title: "Intelligent Search",
    description: "Quickly find any item in your clipboard history with powerful search and filtering options.",
    icon: Search,
    link: "/features/smart-search"
  },
  {
    title: "History Timeline",
    description: "Browse through your clipboard history with an intuitive timeline view and quick access to recent items.",
    icon: Clock,
    link: "/docs/core-features"
  },
  {
    title: "Performance Optimized",
    description: "Lightweight and responsive, designed to work seamlessly without slowing down your system.",
    icon: Zap,
    link: "/features/lightning-fast"
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
        className="text-gray-400 text-center mb-16 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        Everything you need in a modern clipboard manager
      </motion.p>
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {features.map((feature, index) => (
          <Feature 
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            index={index}
            link={feature.link}
          />
        ))}
        
        {/* Metro-style background grid lines */}
        <div className="absolute inset-0 grid grid-cols-3 pointer-events-none opacity-20 hidden lg:grid">
          <div className="border-r border-white/5"></div>
          <div className="border-r border-white/5"></div>
          <div></div>
          <div className="col-span-3 border-t border-white/5 mt-[33%]"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default AppFeatures;
