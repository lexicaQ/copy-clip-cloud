
import React from "react";
import { motion } from "framer-motion";
import { Clipboard, Sparkles, Shield, Cloud, Code, Lock, Zap, LayoutGrid, Rocket } from "lucide-react";

const AppLogo = () => {
  // Enhanced animation for the floating elements
  const floatVariants = {
    animate: (i: number) => ({
      y: [0, -18, 0],
      opacity: [0.4, 0.9, 0.4],
      scale: [1, 1.05, 1],
      transition: {
        duration: 2 + i,
        ease: "easeInOut",
        repeat: Infinity,
      },
    }),
  };
  
  // Enhanced animation for the orbiting elements
  const orbitVariants = {
    animate: (angle: number) => ({
      rotate: 360,
      transition: {
        duration: 20 + angle,
        repeat: Infinity,
        ease: "linear"
      }
    })
  };

  return (
    <div className="space-y-6 relative">
      <div className="relative mx-auto" style={{ width: "220px", height: "220px" }}>
        {/* Enhanced orbital system with more dynamic motion */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Main orbit ring with enhanced pulse effect */}
          <motion.div
            className="absolute rounded-full border border-white/10 opacity-70"
            style={{ width: "150%", height: "150%", top: "-25%", left: "-25%" }}
            animate={{
              opacity: [0.3, 0.5, 0.3],
              borderColor: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.4)", "rgba(255,255,255,0.1)"],
              boxShadow: [
                "0 0 0 rgba(255,255,255,0)",
                "0 0 25px rgba(255,255,255,0.15)",
                "0 0 0 rgba(255,255,255,0)"
              ]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Secondary orbit ring with more organic motion */}
          <motion.div
            className="absolute rounded-full border border-white/5 opacity-50"
            style={{ width: "190%", height: "190%", top: "-45%", left: "-45%" }}
            animate={{ 
              rotate: 360,
              scale: [1, 1.03, 1],
            }}
            transition={{ 
              rotate: { duration: 80, repeat: Infinity, ease: "linear" },
              scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          {/* Tertiary orbit ring with counter-rotation */}
          <motion.div
            className="absolute rounded-full border border-white/5 opacity-40"
            style={{ width: "125%", height: "125%", top: "-12.5%", left: "-12.5%" }}
            animate={{ 
              rotate: -360,
              scale: [1, 0.97, 1],
            }}
            transition={{ 
              rotate: { duration: 60, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }
            }}
          />
          
          {/* Fourth orbit ring with elliptical shape */}
          <motion.div
            className="absolute rounded-full border border-white/3 opacity-20"
            style={{ 
              width: "160%", 
              height: "140%", 
              top: "-20%", 
              left: "-30%",
              borderRadius: "50%", 
            }}
            animate={{ 
              rotate: 360,
              scaleX: [1, 1.05, 1],
              scaleY: [1, 0.95, 1],
            }}
            transition={{ 
              rotate: { duration: 120, repeat: Infinity, ease: "linear" },
              scaleX: { duration: 15, repeat: Infinity, ease: "easeInOut" },
              scaleY: { duration: 15, repeat: Infinity, ease: "easeInOut", delay: 7.5 }
            }}
          />
        </div>
        
        {/* Enhanced pulse glow behind the main logo with more vibrant effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-white/8 to-white/3"
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.15, 0.4, 0.15]
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{ width: "100%", height: "100%", left: "0%", top: "0%" }}
        />
        
        {/* Secondary pulse glow for more dynamic effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-white/3 to-white/8"
          animate={{
            scale: [0.8, 1.1, 0.8],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 3
          }}
          style={{ width: "100%", height: "100%", left: "0%", top: "0%" }}
        />
        
        {/* Enhanced orbiting elements with more interactive hover effects */}
        {[
          { icon: Sparkles, delay: 0, position: "top", size: "md" },
          { icon: Shield, delay: 120, position: "right", size: "sm" },
          { icon: Cloud, delay: 240, position: "bottom", size: "sm" },
          { icon: Code, delay: 60, position: "left", size: "sm" },
          { icon: Lock, delay: 180, position: "top-right", size: "xs" },
          { icon: Zap, delay: 300, position: "bottom-left", size: "xs" },
          { icon: LayoutGrid, delay: 150, position: "bottom-right", size: "xs" },
          { icon: Rocket, delay: 90, position: "top-left", size: "xs" }
        ].map((item, index) => {
          const Icon = item.icon;
          const angle = (index * 45) % 360; // More evenly distributed
          const radius = item.size === "md" ? 115 : item.size === "sm" ? 105 : 95;
          const size = item.size === "md" ? 9 : item.size === "sm" ? 7 : 5.5;
          const iconSize = item.size === "md" ? 4.5 : item.size === "sm" ? 3.5 : 2.5;
          
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
                className="absolute glass-panel rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.12)]"
                style={{ 
                  width: `${size}px`, 
                  height: `${size}px`,
                  transform: `translate(${x}px, ${y}px)`,
                }}
                whileHover={{ 
                  scale: 1.6, 
                  boxShadow: "0 0 25px rgba(255,255,255,0.4)" 
                }}
                transition={{
                  scale: { type: "spring", stiffness: 400, damping: 10 },
                  boxShadow: { duration: 0.2 }
                }}
              >
                <Icon className={`w-${iconSize} h-${iconSize} text-white`} />
                
                {/* Add shimmer effect on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full opacity-0"
                  whileHover={{ 
                    opacity: 1,
                    x: ['-100%', '100%'],
                    transition: {
                      x: { repeat: Infinity, duration: 1, ease: "linear", repeatDelay: 0.5 },
                      opacity: { duration: 0.2 }
                    }
                  }}
                />
              </motion.div>
            </motion.div>
          );
        })}

        {/* Enhanced floating particles with more vibrant visuals */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              background: `rgba(255, 255, 255, ${Math.random() * 0.6 + 0.3})`,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              filter: `blur(${Math.random() > 0.7 ? '1px' : '0px'})`,
              boxShadow: `0 0 ${Math.random() * 8 + 3}px rgba(255, 255, 255, 0.6)`,
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
          whileHover={{ 
            scale: 1.07,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
        >
          <div className="w-full h-full rounded-2xl glass-panel flex items-center justify-center shadow-xl border border-white/15 relative overflow-hidden backdrop-blur-xl">
            <Clipboard className="w-16 h-16 text-white" />
            
            {/* Enhanced shine effect with smoother motion */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
              animate={{
                opacity: [0, 1, 0],
                translateX: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
            
            {/* Enhanced pulsing glow behind the icon */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-white/8"
              animate={{
                scale: [0.8, 1.15, 0.8],
                opacity: [0.1, 0.35, 0.1]
              }}
              transition={{
                duration: 7,
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
                className={`absolute w-4 h-4 bg-white/15 ${
                  corner === "top-left" ? "top-0 left-0 rounded-br-lg" :
                  corner === "top-right" ? "top-0 right-0 rounded-bl-lg" :
                  corner === "bottom-left" ? "bottom-0 left-0 rounded-tr-lg" :
                  "bottom-0 right-0 rounded-tl-lg"
                }`}
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  background: [
                    "rgba(255, 255, 255, 0.15)",
                    "rgba(255, 255, 255, 0.25)",
                    "rgba(255, 255, 255, 0.15)"
                  ]
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.7,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
            
            {/* Add subtle inner border glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}
              animate={{
                boxShadow: [
                  "inset 0 0 10px rgba(255, 255, 255, 0.1)",
                  "inset 0 0 20px rgba(255, 255, 255, 0.2)",
                  "inset 0 0 10px rgba(255, 255, 255, 0.1)"
                ]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Enhanced built for macOS badge with smoother animation */}
      <motion.div 
        className="inline-flex items-center px-4 py-2 rounded-full glass-panel space-x-2 shadow-[0_0_25px_rgba(255,255,255,0.07)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ 
          boxShadow: "0 0 35px rgba(255,255,255,0.2)",
          scale: 1.04,
          y: -3,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
      >
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
          <path d="M10 2c1 .5 2 2 2 5" />
        </svg>
        <span className="text-sm font-medium">Built for macOS 15+</span>
        
        {/* Add subtle shimmer effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-full opacity-0"
          animate={{ 
            x: ['-100%', '100%'],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 5
          }}
        />
      </motion.div>

      {/* Enhanced download badge with improved animation */}
      <motion.div
        className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-xs font-medium relative overflow-hidden"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        whileHover={{ 
          scale: 1.07,
          borderColor: "rgba(255,255,255,0.25)",
          y: -3,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
      >
        {/* Enhanced pulse indicator with smoother animation */}
        <span className="relative flex h-2 w-2 mr-2">
          <motion.span 
            className="absolute inline-flex h-full w-full rounded-full bg-white"
            animate={{
              opacity: [0.8, 0, 0.8],
              scale: [1, 2, 1]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        Free Download
        
        {/* Enhanced background shimmer effect with smoother motion */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 2.2,
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
