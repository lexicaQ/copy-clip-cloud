
import React from "react";
import { motion } from "framer-motion";
import { Apple, Clipboard, Sparkles, Shield, Cloud } from "lucide-react";

const AppLogo = () => {
  // Orbit animation for subtle orbital elements
  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 35,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="space-y-6 relative">
      <div className="relative mx-auto" style={{ width: "160px", height: "160px" }}>
        {/* Subtle orbit circles */}
        <motion.div
          className="absolute inset-0 opacity-10 rounded-full border border-white/30"
          style={{ width: "100%", height: "100%" }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1 }}
        />
        
        <motion.div
          className="absolute inset-0 opacity-10 rounded-full border border-white/20"
          style={{ width: "140%", height: "140%", top: "-20%", left: "-20%" }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Orbiting elements - subtle and minimal */}
        <motion.div
          className="absolute w-full h-full"
          variants={orbitVariants}
          animate="animate"
        >
          <motion.div 
            className="absolute top-0 left-[calc(50%-8px)] w-4 h-4 glass-panel rounded-full flex items-center justify-center"
          >
            <Sparkles className="w-2 h-2 text-white" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute w-full h-full"
          variants={orbitVariants}
          animate="animate"
          initial={{ rotate: 120 }}
        >
          <motion.div 
            className="absolute bottom-0 left-[calc(50%-6px)] w-3 h-3 glass-panel rounded-full bg-white/20 flex items-center justify-center"
          >
            <Shield className="w-1.5 h-1.5 text-white" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute w-full h-full"
          variants={orbitVariants}
          animate="animate"
          initial={{ rotate: 240 }}
        >
          <motion.div 
            className="absolute top-[calc(50%-6px)] right-0 w-3 h-3 glass-panel rounded-full bg-white/20 flex items-center justify-center"
          >
            <Cloud className="w-1.5 h-1.5 text-white" />
          </motion.div>
        </motion.div>

        {/* Main logo - simplified with subtle animation */}
        <motion.div 
          className="w-24 h-24 mx-auto relative z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <div className="w-full h-full rounded-2xl glass-panel flex items-center justify-center shadow-xl border border-white/20 relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 opacity-60"
            />
            <Clipboard className="w-12 h-12 text-white" />
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="inline-flex items-center px-4 py-2 rounded-full glass-panel space-x-2 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-white/5" />
        <Apple className="w-4 h-4" />
        <span className="text-sm font-medium">Built for macOS 15+</span>
      </motion.div>

      <motion.div
        className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white mr-1.5"></span>
        Free Download
      </motion.div>
    </div>
  );
};

export default AppLogo;
