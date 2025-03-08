
import React from "react";
import { motion } from "framer-motion";
import { Apple, Clipboard, Sparkles, Shield, Cloud, Code } from "lucide-react";

const AppLogo = () => {
  // Animation for the floating particles
  const particleVariants = {
    animate: (i: number) => ({
      y: [0, -15, 0],
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 2 + i,
        ease: "easeInOut",
        repeat: Infinity,
      },
    }),
  };

  return (
    <div className="space-y-6 relative">
      <div className="relative mx-auto" style={{ width: "180px", height: "180px" }}>
        {/* Enhanced pulse circle with more vibrant glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-white/5"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{ width: "100%", height: "100%", left: "0%", top: "0%" }}
        />
        
        {/* Improved orbit circle with more visual definition */}
        <motion.div
          className="absolute inset-0 opacity-20 rounded-full border border-white/30"
          style={{ width: "140%", height: "140%", top: "-20%", left: "-20%" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* Enhanced orbiting elements with better interactive hover */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <motion.div 
            className="absolute top-0 left-[calc(50%-12px)] w-6 h-6 glass-panel rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.15)]"
            whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
          >
            <Sparkles className="w-3 h-3 text-white" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          initial={{ rotate: 120 }}
        >
          <motion.div 
            className="absolute bottom-0 left-[calc(50%-10px)] w-5 h-5 glass-panel rounded-full bg-white/10 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.1)]"
            whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
          >
            <Shield className="w-3 h-3 text-white" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          initial={{ rotate: 240 }}
        >
          <motion.div 
            className="absolute top-[calc(50%-10px)] right-0 w-5 h-5 glass-panel rounded-full bg-white/10 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.1)]"
            whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
          >
            <Cloud className="w-3 h-3 text-white" />
          </motion.div>
        </motion.div>

        {/* Additional orbiting element for more visual interest */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          initial={{ rotate: 60 }}
        >
          <motion.div 
            className="absolute top-[calc(50%-10px)] left-0 w-5 h-5 glass-panel rounded-full bg-white/10 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.1)]"
            whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
          >
            <Code className="w-3 h-3 text-white" />
          </motion.div>
        </motion.div>
        
        {/* Enhanced floating particles with more vibrant colors */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-white/40 to-white/20"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            custom={i}
            variants={particleVariants}
            animate="animate"
          />
        ))}

        {/* Main logo with enhanced glow and animation */}
        <motion.div 
          className="w-28 h-28 mx-auto relative z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-full h-full rounded-2xl glass-panel flex items-center justify-center shadow-xl border border-white/10 relative overflow-hidden backdrop-blur-xl">
            <Clipboard className="w-14 h-14 text-white" />
            
            {/* Enhanced shine effect with more pronounced movement */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0"
              animate={{
                opacity: [0, 1, 0],
                translateX: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
            
            {/* Subtle pulsing glow behind the icon */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-white/5"
              animate={{
                scale: [0.8, 1.1, 0.8],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="inline-flex items-center px-4 py-2 rounded-full glass-panel space-x-2 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ 
          boxShadow: "0 0 30px rgba(255,255,255,0.1)",
          scale: 1.02
        }}
      >
        <Apple className="w-4 h-4" />
        <span className="text-sm font-medium">Built for macOS 15+</span>
      </motion.div>

      <motion.div
        className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-xs font-medium relative overflow-hidden"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        whileHover={{ 
          scale: 1.05,
          borderColor: "rgba(255,255,255,0.2)"
        }}
      >
        {/* Enhanced pulse indicator */}
        <span className="relative flex h-2 w-2 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        Free Download
        
        {/* Background shimmer effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2
          }}
        />
      </motion.div>
    </div>
  );
};

export default AppLogo;
