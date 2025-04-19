
import React from "react";
import { motion } from "framer-motion";
import { Timer } from "lucide-react";

interface ComingSoonProps {
  className?: string;
}

export const ComingSoon = ({ className = "" }: ComingSoonProps) => {
  return (
    <motion.div 
      className={`inline-flex items-center px-3 py-1.5 rounded-full bg-black border border-white/20 shadow-md ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 500,
        damping: 30
      }}
      whileHover={{ scale: 1.05 }}
    >
      <Timer className="w-3.5 h-3.5 mr-1.5 text-white" />
      <span className="text-xs font-medium text-white">Coming Soon</span>
    </motion.div>
  );
};
