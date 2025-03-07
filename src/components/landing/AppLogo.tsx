
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
        {/* Pulse circle */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white/5"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{ width: "100%", height: "100%", left: "0%", top: "0%" }}
        />
        
        {/* Subtle orbit circle */}
        <motion.div
          className="absolute inset-0 opacity-10 rounded-full border border-white/20"
          style={{ width: "140%", height: "140%", top: "-20%", left: "-20%" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* Orbiting elements - simplified */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <motion.div 
            className="absolute top-0 left-[calc(50%-12px)] w-6 h-6 glass-panel rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.2 }}
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
            className="absolute bottom-0 left-[calc(50%-10px)] w-5 h-5 glass-panel rounded-full bg-white/10 flex items-center justify-center"
            whileHover={{ scale: 1.2 }}
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
            className="absolute top-[calc(50%-10px)] right-0 w-5 h-5 glass-panel rounded-full bg-white/10 flex items-center justify-center"
            whileHover={{ scale: 1.2 }}
          >
            <Cloud className="w-3 h-3 text-white" />
          </motion.div>
        </motion.div>
        
        {/* Floating particles - minimized */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/30"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            custom={i}
            variants={particleVariants}
            animate="animate"
          />
        ))}

        {/* Main logo */}
        <motion.div 
          className="w-28 h-28 mx-auto relative z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="w-full h-full rounded-2xl glass-panel flex items-center justify-center shadow-xl border border-white/10 relative overflow-hidden">
            <Clipboard className="w-14 h-14 text-white" />
            
            {/* Subtle shine effect */}
            <motion.div 
              className="absolute inset-0 bg-white/5 opacity-0"
              animate={{
                opacity: [0, 0.1, 0],
                translateX: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 5
              }}
              style={{
                clipPath: "polygon(0 0, 30% 0, 60% 100%, 0% 100%)"
              }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="inline-flex items-center px-4 py-2 rounded-full glass-panel space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Apple className="w-4 h-4" />
        <span className="text-sm font-medium">Built for macOS 15+</span>
      </motion.div>

      <motion.div
        className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-xs font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white mr-1.5 animate-ping"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-white mr-1.5 absolute"></span>
        Free Download
      </motion.div>
    </div>
  );
};

export default AppLogo;
