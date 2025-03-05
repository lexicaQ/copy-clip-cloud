
import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Apple, Clipboard, Sparkles, Shield, Cloud, Code } from "lucide-react";

const AppLogo = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false });
  
  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Orbit animation for orbiting elements
  const orbitVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="space-y-6 relative">
      <div ref={containerRef} className="relative mx-auto" style={{ width: "220px", height: "220px" }}>
        {/* Background pulse circle */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white/5"
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
        
        {/* Orbit circles */}
        <motion.div
          className="absolute inset-0 opacity-20 rounded-full border border-white/30"
          style={{ width: "140%", height: "140%", top: "-20%", left: "-20%" }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1 }}
        />
        
        <motion.div
          className="absolute inset-0 opacity-20 rounded-full border border-white/20"
          style={{ width: "180%", height: "180%", top: "-40%", left: "-40%" }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Orbiting elements */}
        <motion.div
          className="absolute"
          style={{ 
            width: "140%", 
            height: "140%", 
            top: "-20%", 
            left: "-20%",
            transformOrigin: "center center"
          }}
          variants={orbitVariants}
          initial="hidden"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <motion.div 
            className="absolute top-0 left-[calc(50%-15px)] w-12 h-12 glass-panel rounded-xl flex items-center justify-center shadow-lg border border-white/20"
            whileHover={{ scale: 1.2 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ 
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Sparkles className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute"
          style={{ 
            width: "140%", 
            height: "140%", 
            top: "-20%", 
            left: "-20%",
            transformOrigin: "center center"
          }}
          variants={orbitVariants}
          initial="hidden"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: 5
          }}
        >
          <motion.div 
            className="absolute bottom-0 left-[calc(50%-15px)] w-12 h-12 glass-panel rounded-xl flex items-center justify-center shadow-lg border border-white/20"
            whileHover={{ scale: 1.2 }}
            animate={{ y: [0, 5, 0] }}
            transition={{ 
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Shield className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute"
          style={{ 
            width: "140%", 
            height: "140%", 
            top: "-20%", 
            left: "-20%",
            transformOrigin: "center center"
          }}
          variants={orbitVariants}
          initial="hidden"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: 10
          }}
        >
          <motion.div 
            className="absolute top-[calc(50%-15px)] right-0 w-12 h-12 glass-panel rounded-xl flex items-center justify-center shadow-lg border border-white/20"
            whileHover={{ scale: 1.2 }}
            animate={{ x: [0, 5, 0] }}
            transition={{ 
              x: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Cloud className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>
        
        {/* Additional orbiting element */}
        <motion.div
          className="absolute"
          style={{ 
            width: "140%", 
            height: "140%", 
            top: "-20%", 
            left: "-20%",
            transformOrigin: "center center"
          }}
          variants={orbitVariants}
          initial="hidden"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: 15
          }}
        >
          <motion.div 
            className="absolute bottom-[calc(30%-15px)] right-[calc(30%-15px)] w-12 h-12 glass-panel rounded-xl flex items-center justify-center shadow-lg border border-white/20"
            whileHover={{ scale: 1.2 }}
            animate={{ 
              x: [0, -5, 0],
              y: [0, 5, 0]
            }}
            transition={{ 
              x: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Code className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>

        {/* Main logo */}
        <motion.div 
          className="w-40 h-40 mx-auto relative z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
          }}
        >
          <div className="w-full h-full rounded-2xl glass-panel flex items-center justify-center shadow-xl border border-white/20 relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 opacity-60"
              animate={{
                background: [
                  "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                  "linear-gradient(225deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                  "linear-gradient(315deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                  "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                  "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                ]
              }}
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity
              }}
            />
            <Clipboard className="w-20 h-20 text-white" />
            
            {/* Shine effect */}
            <motion.div 
              className="absolute inset-0 bg-white/20 opacity-0"
              animate={{
                opacity: [0, 0.1, 0],
                translateX: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 3
              }}
              style={{
                clipPath: "polygon(0 0, 30% 0, 60% 100%, 0% 100%)"
              }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="inline-flex items-center px-5 py-2.5 rounded-full glass-panel space-x-2 relative overflow-hidden shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-white/5" />
        <Apple className="w-5 h-5" />
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
        className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium shadow-lg"
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
