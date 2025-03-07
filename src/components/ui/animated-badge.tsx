
import React from "react";
import { motion } from "framer-motion";

interface AnimatedBadgeProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

export const AnimatedBadge = ({ text, icon, className = "" }: AnimatedBadgeProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
    >
      <div className="absolute inset-0 bg-white/5 rounded-lg blur-md transform -translate-x-1 translate-y-1"></div>
      <div className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">
        {icon && <span className="text-white/90">{icon}</span>}
        <span className="text-xs font-medium text-white/90">{text}</span>
        
        {/* 3D effect layers */}
        <div className="absolute inset-0 rounded-lg border border-white/10 transform translate-z-0"></div>
        <div className="absolute inset-0 rounded-lg border border-white/5 transform translate-z-1"></div>
        
        {/* Subtle animation */}
        <motion.div 
          className="absolute inset-0 rounded-lg bg-white/5"
          animate={{ 
            boxShadow: ["0 0 0px rgba(255,255,255,0.2)", "0 0 10px rgba(255,255,255,0.1)", "0 0 0px rgba(255,255,255,0.2)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
};
