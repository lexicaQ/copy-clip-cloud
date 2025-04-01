
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

  // Animation for orbiting elements
  const orbitVariants = {
    hover: {
      scale: 1.1,
      filter: "brightness(1.2)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="space-y-6 relative">
      <div className="relative mx-auto" style={{ width: "180px", height: "180px" }}>
        {/* Larger dynamic halo */}
        <motion.div
          className="absolute rounded-full"
          animate={{
            boxShadow: [
              "0 0 40px 20px rgba(255, 255, 255, 0.02)",
              "0 0 60px 30px rgba(255, 255, 255, 0.05)",
              "0 0 40px 20px rgba(255, 255, 255, 0.02)"
            ],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{ width: "160%", height: "160%", top: "-30%", left: "-30%" }}
        />
        
        {/* Multiple orbital paths for depth */}
        {[0, 1, 2].map((orbit) => (
          <motion.div
            key={orbit}
            className={`absolute inset-0 rounded-full border border-white/5`}
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 30 + orbit * 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{ 
              width: `${140 + orbit * 15}%`, 
              height: `${140 + orbit * 15}%`, 
              top: `${-20 - orbit * 7.5}%`, 
              left: `${-20 - orbit * 7.5}%`,
              opacity: 0.3 - orbit * 0.08,
            }}
          />
        ))}

        {/* Dynamic orbiting elements */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <motion.div 
            className="absolute top-0 left-[calc(50%-12px)] w-7 h-7 glass-panel rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.1)]"
            variants={orbitVariants}
            whileHover="hover"
            style={{ background: "linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          initial={{ rotate: 120 }}
        >
          <motion.div 
            className="absolute bottom-0 left-[calc(50%-10px)] w-6 h-6 glass-panel rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.1)]"
            variants={orbitVariants}
            whileHover="hover"
            style={{ background: "linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))" }}
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
            className="absolute top-[calc(50%-10px)] right-0 w-6 h-6 glass-panel rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.1)]"
            variants={orbitVariants}
            whileHover="hover"
            style={{ background: "linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))" }}
          >
            <Cloud className="w-3 h-3 text-white" />
          </motion.div>
        </motion.div>
        
        {/* Enhanced floating particles */}
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              background: `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.2})`,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.2)'
            }}
            custom={i}
            variants={particleVariants}
            animate="animate"
          />
        ))}

        {/* Main logo with enhanced effects */}
        <motion.div 
          className="w-28 h-28 mx-auto relative z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="w-full h-full rounded-2xl glass-panel flex items-center justify-center shadow-xl border border-white/10 relative overflow-hidden backdrop-blur-xl">
            {/* Dynamic glow effect */}
            <motion.div
              className="absolute inset-0 opacity-0"
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                boxShadow: [
                  "inset 0 0 15px 5px rgba(255,255,255,0.1)",
                  "inset 0 0 25px 10px rgba(255,255,255,0.2)",
                  "inset 0 0 15px 5px rgba(255,255,255,0.1)"
                ]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Icon with subtle animation */}
            <motion.div
              animate={{ 
                scale: [1, 1.03, 1],
                rotate: [0, 1, 0, -1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Clipboard className="w-14 h-14 text-white" />
            </motion.div>
            
            {/* Enhanced shine effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                opacity: [0, 0.3, 0],
                left: ["-100%", "100%"],
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 4
              }}
              style={{
                width: "50%",
                transform: "skewX(-20deg)"
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Enhanced badge */}
      <motion.div 
        className="inline-flex items-center px-4 py-2 rounded-full glass-panel space-x-2 border border-white/10 backdrop-blur-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ 
          scale: 1.05, 
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)" 
        }}
      >
        <Apple className="w-4 h-4" />
        <span className="text-sm font-medium">Built for macOS 15+</span>
      </motion.div>

      {/* Enhanced download indicator */}
      <motion.div
        className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/10 text-white text-xs font-medium shadow-lg backdrop-blur-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 15px rgba(255, 255, 255, 0.15)"
        }}
      >
        <motion.span 
          className="w-1.5 h-1.5 rounded-full bg-white mr-1.5"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        Free Download
      </motion.div>
    </div>
  );
};

export default AppLogo;
