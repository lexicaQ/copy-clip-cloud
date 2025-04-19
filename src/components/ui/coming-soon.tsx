
import React from "react";
import { motion } from "framer-motion";
import { Timer } from "lucide-react";

interface ComingSoonProps {
  className?: string;
  variant?: "badge" | "sticker";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
}

export const ComingSoon = ({ 
  className = "", 
  variant = "badge",
  position = "top-left" 
}: ComingSoonProps) => {
  // Position classes
  const positionClasses = {
    "top-left": "top-0 left-0 -translate-y-1/2 -translate-x-1/2",
    "top-right": "top-0 right-0 -translate-y-1/2 translate-x-1/2",
    "bottom-left": "bottom-0 left-0 translate-y-1/2 -translate-x-1/2",
    "bottom-right": "bottom-0 right-0 translate-y-1/2 translate-x-1/2",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  };

  // Different styling for badge vs sticker variant
  const variantClasses = variant === "sticker" 
    ? "absolute z-10 px-2 py-1 rounded-full backdrop-blur-md bg-black/70 border border-white/20 shadow-xl"
    : "inline-flex items-center px-3 py-1.5 rounded-full backdrop-blur-md bg-black/40 border border-white/10 shadow-lg";

  return (
    <motion.div 
      className={`${variantClasses} ${position ? positionClasses[position] : ""} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 500,
        damping: 30
      }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center gap-1.5">
        <Timer className="w-3.5 h-3.5 text-white/80" />
        <span className="text-xs font-medium text-white/80">Coming Soon</span>
      </div>
      
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
