
import React from "react";
import { motion } from "framer-motion";
import { Apple, Clipboard, Sparkles } from "lucide-react";

const AppLogo = () => {
  // Custom animation for orbit effect
  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  // Animation for the floating particles
  const particleVariants = {
    animate: (i: number) => ({
      y: [0, -15, 0],
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 2 + i,
        ease: "easeInOut",
        repeat: Infinity,
      },
    }),
  };

  return (
    <div className="space-y-6 relative">
      <div className="relative mx-auto" style={{ width: "160px", height: "160px" }}>
        {/* Orbit circles */}
        <motion.div
          className="absolute inset-0 opacity-20 rounded-full border border-white/30"
          style={{ width: "100%", height: "100%" }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1 }}
        />
        
        <motion.div
          className="absolute inset-0 opacity-20 rounded-full border border-white/30"
          style={{ width: "130%", height: "130%", top: "-15%", left: "-15%" }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Orbiting elements */}
        <motion.div
          className="absolute w-full h-full"
          variants={orbitVariants}
          animate="animate"
        >
          <motion.div 
            className="absolute top-0 left-[calc(50%-10px)] w-5 h-5 glass-panel rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.2 }}
          >
            <Sparkles className="w-3 h-3 text-yellow-400" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute w-full h-full"
          variants={orbitVariants}
          animate="animate"
          initial={{ rotate: 120 }}
        >
          <motion.div 
            className="absolute bottom-0 left-[calc(50%-8px)] w-4 h-4 glass-panel rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
            whileHover={{ scale: 1.2 }}
          />
        </motion.div>

        <motion.div
          className="absolute w-full h-full"
          variants={orbitVariants}
          animate="animate"
          initial={{ rotate: 240 }}
        >
          <motion.div 
            className="absolute top-[calc(50%-8px)] right-0 w-4 h-4 glass-panel rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
            whileHover={{ scale: 1.2 }}
          />
        </motion.div>

        {/* Floating particles */}
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/40"
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
          className="w-24 h-24 mx-auto relative z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="w-full h-full rounded-2xl glass-panel flex items-center justify-center shadow-lg border border-white/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/20 to-[#7E69AB]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Clipboard className="w-12 h-12 text-white group-hover:text-gradient-purple transition-all duration-300" />
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="inline-flex items-center px-4 py-2 rounded-full glass-panel space-x-2 relative overflow-hidden group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/10 to-[#7E69AB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Apple className="w-4 h-4" />
        <span className="text-sm font-medium">Built for macOS 15+</span>
        <motion.span 
          className="absolute -right-20 top-0 h-full w-12 bg-white/10 transform rotate-20 translate-x-0"
          animate={{ 
            x: ["0%", "250%"]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatDelay: 5
          }}
        />
      </motion.div>

      <motion.div
        className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5"></span>
        Free Download
      </motion.div>
    </div>
  );
};

export default AppLogo;
