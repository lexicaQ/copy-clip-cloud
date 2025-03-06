
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const FeatureHero = () => {
  return (
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
  );
};

export default FeatureHero;
