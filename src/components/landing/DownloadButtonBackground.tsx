
import { motion } from "framer-motion";
import React from "react";

export const DownloadButtonBackground = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <>
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80 rounded-xl z-0" />
      
      {/* Animated border */}
      <motion.div 
        className="absolute inset-0 rounded-xl z-10 pointer-events-none"
        animate={{
          boxShadow: isHovered 
            ? "inset 0 0 0 1.5px rgba(255,255,255,0.5)" 
            : "inset 0 0 0 1px rgba(255,255,255,0.2)"
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden rounded-xl z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              opacity: 0 
            }}
            animate={{ 
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              opacity: [0, isHovered ? 0.8 : 0.4, 0],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2 + Math.random() * 3,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      
      {/* Enhanced bottom glowing line animation */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden rounded-b-xl z-10">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
        />
      </div>
    </>
  );
};
