
import React from "react";
import { motion } from "framer-motion";

const SharedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base black gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
      
      {/* Soft, blurred accent elements */}
      <motion.div
        className="absolute top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-white/[0.03] rounded-full blur-[180px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.04, 0.03],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[150px]"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.02, 0.03, 0.02],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      {/* Elegant vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
};

export default SharedBackground;
