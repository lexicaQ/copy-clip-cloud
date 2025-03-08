
import React from "react";
import { motion } from "framer-motion";
import { Cloud, Clipboard, Shield, Search, Clock, Zap, ArrowRight, Sparkles } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ElementType;
  index: number;
}

const Feature = ({ title, description, icon: Icon, index }: FeatureProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: "1000px" }}
    >
      <motion.div 
        className="backdrop-blur-xl bg-white/[0.03] border border-white/10 p-8 rounded-2xl hover:bg-white/[0.05] transition-all duration-300 h-full"
        whileHover={{ 
          scale: 1.03,
          rotateX: 5, 
          rotateY: 5,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex items-start gap-5" style={{ transform: "translateZ(30px)" }}>
          <motion.div 
            className={`p-3 rounded-xl flex items-center justify-center ${isEven ? 'bg-white/5' : 'bg-white/10'}`}
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              boxShadow: "0 0 15px rgba(255,255,255,0.1)"
            }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-3">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
            
            <motion.div 
              className="flex items-center text-sm text-white/70 hover:text-white cursor-pointer transition-colors group"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Learn more <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>
        </div>
        
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-10 h-px bg-white/10"></div>
        <div className="absolute top-0 left-0 w-px h-10 bg-white/10"></div>
        <div className="absolute bottom-0 right-0 w-10 h-px bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-0 right-0 w-px h-10 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        {/* Animated background effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
          animate={{
            backgroundPosition: ["200% 200%", "-200% -200%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: "200% 200%",
            borderRadius: "1rem"
          }}
        />
      </motion.div>
      
      {/* Metro-style connecting lines */}
      {index < 3 && (
        <motion.div 
          className="absolute h-6 w-px bg-white/10 left-1/2 -bottom-6 hidden md:block"
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: 24, opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 + 0.5 }}
          viewport={{ once: true }}
        ></motion.div>
      )}
      {(index === 0 || index === 3) && (
        <motion.div 
          className="absolute w-6 h-px bg-white/10 -right-6 top-1/2 hidden lg:block"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 24, opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 + 0.5 }}
          viewport={{ once: true }}
        ></motion.div>
      )}
    </motion.div>
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
      <motion.div 
        className="flex items-center justify-center gap-3 mb-4"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="h-px w-8 bg-white/20"></div>
        <motion.div 
          className="px-3 py-1 bg-white/5 rounded-full border border-white/10 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles className="w-3.5 h-3.5 text-white/70" />
          <span className="text-sm font-medium">Powerful Features</span>
        </motion.div>
        <div className="h-px w-8 bg-white/20"></div>
      </motion.div>
      
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
          />
        ))}
        
        {/* Metro-style background grid lines */}
        <div className="absolute inset-0 grid grid-cols-3 pointer-events-none opacity-20 hidden lg:grid">
          <div className="border-r border-white/5"></div>
          <div className="border-r border-white/5"></div>
          <div></div>
          <div className="col-span-3 border-t border-white/5 mt-[33%]"></div>
        </div>
        
        {/* 3D floating particles */}
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute w-2 h-2 bg-white/5 rounded-full pointer-events-none hidden lg:block"
            animate={{
              y: ['-20px', '20px'],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              yoyo: true,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
      
      {/* View all features button */}
      <motion.div 
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.button 
          className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-all flex items-center gap-2 group relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">View All Features</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
          
          {/* Button shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 1
            }}
            style={{
              width: "50%"
            }}
          />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default AppFeatures;
