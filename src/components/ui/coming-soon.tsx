
import React from "react";
import { motion } from "framer-motion";
import { Timer } from "lucide-react";

interface ComingSoonProps {
  className?: string;
}

export const ComingSoon = ({ className = "" }: ComingSoonProps) => {
  return (
    <motion.div 
      className={`inline-flex items-center px-3 py-1.5 rounded-full backdrop-blur-md bg-black/40 border border-white/10 shadow-lg ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 500,
        damping: 30
      }}
      whileHover={{ scale: 1.05 }}
    >
      <Timer className="w-3.5 h-3.5 mr-1.5 text-white/80" />
      <span className="text-xs font-medium text-white/80">Coming Soon</span>
      
      {/* Subtle pulse animation */}
      <motion.div 
        className="absolute inset-0 rounded-full bg-white/10"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0, 0.15, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
    </motion.div>
  );
};
