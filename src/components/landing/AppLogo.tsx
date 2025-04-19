
import React from "react";
import { motion } from "framer-motion";
import { Apple, Clipboard, Sparkles, Shield, Cloud, Zap, Lock, Clock } from "lucide-react";

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
    <div className="space-y-6 relative mt-12 mb-8">
      <div className="relative mx-auto" style={{ width: "180px", height: "180px" }}>
        {/* Improved dynamic halo with subtle glow - SMALLER CIRCLE */}
        <motion.div
          className="absolute rounded-full bg-gradient-to-r from-transparent via-white/3 to-transparent"
          animate={{
            boxShadow: [
              "0 0 15px 5px rgba(255, 255, 255, 0.02)",
              "0 0 20px 8px rgba(255, 255, 255, 0.05)",
              "0 0 15px 5px rgba(255, 255, 255, 0.02)"
            ],
            scale: [1, 1.03, 1]
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{ 
            width: "105%", 
            height: "105%", 
            top: "-2.5%", 
            left: "-2.5%",
            transform: "translate(0, 0)" 
          }}
        />
        
        {/* Enhanced orbital paths with better continuous animation */}
        {[0, 1, 2, 3, 4].map((orbit) => (
          <motion.div
            key={orbit}
            className="absolute rounded-full border-dashed"
            style={{ 
              width: `${105 + orbit * 10}%`, 
              height: `${105 + orbit * 10}%`, 
              top: `${-2.5 - orbit * 5}%`, 
              left: `${-2.5 - orbit * 5}%`,
              opacity: 0.15 - orbit * 0.02,
              borderColor: "rgba(255, 255, 255, 0.1)",
              borderWidth: "1px",
            }}
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 25 + orbit * 8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}

        {/* IMPROVED ORBITING ELEMENTS with continuous animation */}
        {/* First orbit */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ width: "140%", height: "140%", top: "-20%", left: "-20%" }}
        >
          <motion.div 
            className="absolute top-[45%] left-[80%] w-7 h-7 rounded-full flex items-center justify-center shadow-lg"
            variants={orbitVariants}
            whileHover="hover"
            style={{ 
              background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              border: "1px solid rgba(255,255,255,0.2)"
            }}
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />
          </motion.div>
        </motion.div>

        {/* Second orbit */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          initial={{ rotate: 120 }}
          style={{ width: "130%", height: "130%", top: "-15%", left: "-15%" }}
        >
          <motion.div 
            className="absolute bottom-[40%] left-[75%] w-6 h-6 rounded-full flex items-center justify-center shadow-lg"
            variants={orbitVariants}
            whileHover="hover"
            style={{ 
              background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              border: "1px solid rgba(255,255,255,0.2)"
            }}
          >
            <Shield className="w-3 h-3 text-white" />
          </motion.div>
        </motion.div>

        {/* Third orbit */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          initial={{ rotate: 240 }}
          style={{ width: "150%", height: "150%", top: "-25%", left: "-25%" }}
        >
          <motion.div 
            className="absolute top-[45%] left-[15%] w-6 h-6 rounded-full flex items-center justify-center shadow-lg"
            variants={orbitVariants}
            whileHover="hover"
            style={{ 
              background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              border: "1px solid rgba(255,255,255,0.2)"
            }}
          >
            <Cloud className="w-3 h-3 text-white" />
          </motion.div>
        </motion.div>
        
        {/* Fourth orbit */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          initial={{ rotate: 60 }}
          style={{ width: "135%", height: "135%", top: "-17.5%", left: "-17.5%" }}
        >
          <motion.div 
            className="absolute top-[45%] right-[15%] w-7 h-7 rounded-full flex items-center justify-center shadow-lg"
            variants={orbitVariants}
            whileHover="hover"
            style={{ 
              background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              border: "1px solid rgba(255,255,255,0.2)"
            }}
          >
            <Zap className="w-3.5 h-3.5 text-white" />
          </motion.div>
        </motion.div>
        
        {/* Fifth orbit */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          initial={{ rotate: 180 }}
          style={{ width: "145%", height: "145%", top: "-22.5%", left: "-22.5%" }}
        >
          <motion.div 
            className="absolute bottom-[30%] right-[25%] w-5 h-5 rounded-full flex items-center justify-center shadow-lg"
            variants={orbitVariants}
            whileHover="hover"
            style={{ 
              background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              border: "1px solid rgba(255,255,255,0.2)"
            }}
          >
            <Lock className="w-2.5 h-2.5 text-white" />
          </motion.div>
        </motion.div>
        
        {/* Sixth orbit */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          initial={{ rotate: 300 }}
          style={{ width: "125%", height: "125%", top: "-12.5%", left: "-12.5%" }}
        >
          <motion.div 
            className="absolute bottom-[35%] left-[30%] w-6 h-6 rounded-full flex items-center justify-center shadow-lg"
            variants={orbitVariants}
            whileHover="hover"
            style={{ 
              background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              border: "1px solid rgba(255,255,255,0.2)"
            }}
          >
            <Clock className="w-3 h-3 text-white" />
          </motion.div>
        </motion.div>
        
        {/* Enhanced floating particles with better positioning */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              background: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`,
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.2)'
            }}
            custom={i}
            variants={particleVariants}
            animate="animate"
          />
        ))}

        {/* Enhanced main logo with smaller circle */}
        <motion.div 
          className="w-28 h-28 mx-auto relative z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* Added elegant circle around the logo */}
          <motion.div
            className="absolute inset-0 rounded-full border border-white/20"
            animate={{
              boxShadow: [
                "0 0 0 1px rgba(255, 255, 255, 0.1)",
                "0 0 0 2px rgba(255, 255, 255, 0.2)",
                "0 0 0 1px rgba(255, 255, 255, 0.1)"
              ],
              scale: [0.98, 1.02, 0.98]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div 
            className="w-full h-full rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xl"
            style={{ 
              background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)"
            }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                background: [
                  "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
                  "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
                  "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)"
                ]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
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

      <motion.div
        className="flex flex-wrap justify-center items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div 
          className="inline-flex items-center px-4 py-2 rounded-full space-x-2 backdrop-blur-lg"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
            border: "1px solid rgba(255,255,255,0.1)"
          }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)" 
          }}
        >
          <Apple className="w-4 h-4" />
          <span className="text-sm font-medium">Built for macOS 15+</span>
        </motion.div>

        <motion.div
          className="inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-medium backdrop-blur-md"
          style={{
            background: "linear-gradient(90deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
            border: "1px solid rgba(255,255,255,0.15)"
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 15px rgba(255, 255, 255, 0.15)"
          }}
        >
          <motion.span 
            className="w-2 h-2 rounded-full bg-white mr-2"
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
      </motion.div>
    </div>
  );
};

export default AppLogo;
