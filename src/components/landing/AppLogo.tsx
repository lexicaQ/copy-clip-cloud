
import React from "react";
import { motion } from "framer-motion";
import { Clipboard, Sparkles, Shield, Cloud, Code, Lock, Zap } from "lucide-react";

const AppLogo = () => {
  // Animation for the floating elements
  const floatVariants = {
    animate: (i: number) => ({
      y: [0, -15, 0],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 2 + i,
        ease: "easeInOut",
        repeat: Infinity,
      },
    }),
  };
  
  // Animation for the orbiting elements
  const orbitVariants = {
    animate: (angle: number) => ({
      rotate: 360,
      transition: {
        duration: 25 + angle,
        repeat: Infinity,
        ease: "linear"
      }
    })
  };

  return (
    <div className="space-y-6 relative">
      <div className="relative mx-auto" style={{ width: "220px", height: "220px" }}>
        {/* Enhanced orbital system */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Main orbit ring with pulse effect */}
          <motion.div
            className="absolute rounded-full border border-white/10 opacity-60"
            style={{ width: "140%", height: "140%", top: "-20%", left: "-20%" }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              borderColor: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.3)", "rgba(255,255,255,0.1)"],
              boxShadow: [
                "0 0 0 rgba(255,255,255,0)",
                "0 0 20px rgba(255,255,255,0.1)",
                "0 0 0 rgba(255,255,255,0)"
              ]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Secondary orbit ring */}
          <motion.div
            className="absolute rounded-full border border-white/5 opacity-40"
            style={{ width: "180%", height: "180%", top: "-40%", left: "-40%" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Tertiary orbit ring */}
          <motion.div
            className="absolute rounded-full border border-white/5 opacity-30"
            style={{ width: "120%", height: "120%", top: "-10%", left: "-10%" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        {/* Enhanced pulse glow behind the main logo */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 to-white/2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{ width: "100%", height: "100%", left: "0%", top: "0%" }}
        />
        
        {/* Enhanced orbiting elements with interactive hover effects */}
        {[
          { icon: Sparkles, delay: 0, position: "top", size: "md" },
          { icon: Shield, delay: 120, position: "right", size: "sm" },
          { icon: Cloud, delay: 240, position: "bottom", size: "sm" },
          { icon: Code, delay: 60, position: "left", size: "sm" },
          { icon: Lock, delay: 180, position: "top-right", size: "xs" },
          { icon: Zap, delay: 300, position: "bottom-left", size: "xs" }
        ].map((item, index) => {
          const Icon = item.icon;
          const angle = (index * 60) % 360;
          const radius = item.size === "md" ? 110 : item.size === "sm" ? 100 : 90;
          const size = item.size === "md" ? 8 : item.size === "sm" ? 6 : 5;
          const iconSize = item.size === "md" ? 4 : item.size === "sm" ? 3 : 2.5;
          
          // Calculate position on the circle
          const x = Math.cos(angle * Math.PI / 180) * radius;
          const y = Math.sin(angle * Math.PI / 180) * radius;
          
          return (
            <motion.div
              key={index}
              className="absolute"
              style={{ 
                left: "calc(50% - " + size/2 + "px)", 
                top: "calc(50% - " + size/2 + "px)",
                width: 0, 
                height: 0,
              }}
              custom={angle}
              variants={orbitVariants}
              animate="animate"
              initial={{ rotate: item.delay }}
            >
              <motion.div 
                className="absolute glass-panel rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.07)]"
                style={{ 
                  width: `${size}px`, 
                  height: `${size}px`,
                  transform: `translate(${x}px, ${y}px)`,
                }}
                whileHover={{ 
                  scale: 1.4, 
                  boxShadow: "0 0 20px rgba(255,255,255,0.3)" 
                }}
              >
                <Icon className={`w-${iconSize} h-${iconSize} text-white`} />
              </motion.div>
            </motion.div>
          );
        })}

        {/* Enhanced floating particles with more vibrant visuals */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              background: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              boxShadow: `0 0 ${Math.random() * 5 + 2}px rgba(255, 255, 255, 0.5)`,
            }}
            custom={i}
            variants={floatVariants}
            animate="animate"
          />
        ))}

        {/* Enhanced main logo with improved animation and effects */}
        <motion.div 
          className="w-32 h-32 mx-auto relative z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-full h-full rounded-2xl glass-panel flex items-center justify-center shadow-xl border border-white/10 relative overflow-hidden backdrop-blur-xl">
            <Clipboard className="w-16 h-16 text-white" />
            
            {/* Enhanced shine effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0"
              animate={{
                opacity: [0, 1, 0],
                translateX: ["-100%", "100%"],
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2.5
              }}
            />
            
            {/* Enhanced pulsing glow behind the icon */}
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
            
            {/* Enhanced corners with animated accents */}
            {[
              "top-left", "top-right", "bottom-left", "bottom-right"
            ].map((corner, i) => (
              <motion.div
                key={i}
                className={`absolute w-3 h-3 bg-white/10 ${
                  corner === "top-left" ? "top-0 left-0 rounded-br-lg" :
                  corner === "top-right" ? "top-0 right-0 rounded-bl-lg" :
                  corner === "bottom-left" ? "bottom-0 left-0 rounded-tr-lg" :
                  "bottom-0 right-0 rounded-tl-lg"
                }`}
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Enhanced built for macOS badge */}
      <motion.div 
        className="inline-flex items-center px-4 py-2 rounded-full glass-panel space-x-2 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ 
          boxShadow: "0 0 30px rgba(255,255,255,0.15)",
          scale: 1.02,
          y: -2
        }}
      >
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
          <path d="M10 2c1 .5 2 2 2 5" />
        </svg>
        <span className="text-sm font-medium">Built for macOS 15+</span>
      </motion.div>

      {/* Enhanced download badge with improved animation */}
      <motion.div
        className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-xs font-medium relative overflow-hidden"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        whileHover={{ 
          scale: 1.05,
          borderColor: "rgba(255,255,255,0.2)",
          y: -2
        }}
      >
        {/* Enhanced pulse indicator */}
        <span className="relative flex h-2 w-2 mr-2">
          <motion.span 
            className="absolute inline-flex h-full w-full rounded-full bg-white"
            animate={{
              opacity: [0.7, 0, 0.7],
              scale: [1, 1.8, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        Free Download
        
        {/* Enhanced background shimmer effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1.5
          }}
        />
      </motion.div>
    </div>
  );
};

export default AppLogo;
