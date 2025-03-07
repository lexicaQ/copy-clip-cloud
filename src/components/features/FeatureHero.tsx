
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const FeatureHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-24"
    >
      <motion.div 
        className="h-20 w-20 rounded-full glass-panel flex items-center justify-center mx-auto mb-8 relative overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        <Sparkles className="w-10 h-10 relative z-10" />
      </motion.div>
      
      <h1 className="text-6xl font-bold mb-8 relative">
        <span className="text-gradient">Advanced Features</span>
        <motion.div 
          className="h-1 w-20 bg-white/20 mx-auto mt-6"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
      >
        Discover the powerful features that make CopyClipCloud the ultimate clipboard manager for professionals. Designed to enhance your productivity and streamline your workflow.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        {["Universal Sync", "End-to-End Encryption", "Rich Media Support", "Intelligent Search", "Custom Organization"].map((tag, index) => (
          <motion.span 
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + (index * 0.1) }}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FeatureHero;
