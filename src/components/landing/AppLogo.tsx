
import React from "react";
import { motion } from "framer-motion";
import { Apple, Clipboard, Sparkles, Shield, Cloud } from "lucide-react";

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
        {/* Improved dynamic halo with subtle glow */}
        <motion.div
          className="absolute rounded-full bg-gradient-to-r from-transparent via-white/3 to-transparent"
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
        
        {/* Enhanced orbital paths with better styling */}
        {[0, 1, 2].map((orbit) => (
          <motion.div
            key={orbit}
            className="absolute rounded-full border-dashed"
            style={{ 
              width: `${140 + orbit * 15}%`, 
              height: `${140 + orbit * 15}%`, 
              top: `${-20 - orbit * 7.5}%`, 
              left: `${-20 - orbit * 7.5}%`,
              opacity: 0.15 - orbit * 0.04,
              borderColor: "rgba(255, 255, 255, 0.1)",
              borderWidth: "1px",
            }}
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 30 + orbit * 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}

        {/* Improved orbiting elements with wider orbits */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ width: "180%", height: "180%", top: "-40%", left: "-40%" }}
        >
          <motion.div 
            className="absolute top-[30%] left-[80%] w-7 h-7 rounded-full flex items-center justify-center shadow-lg"
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

        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          initial={{ rotate: 120 }}
          style={{ width: "170%", height: "170%", top: "-35%", left: "-35%" }}
        >
          <motion.div 
            className="absolute bottom-[30%] left-[75%] w-6 h-6 rounded-full flex items-center justify-center shadow-lg"
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

        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          initial={{ rotate: 240 }}
          style={{ width: "190%", height: "190%", top: "-45%", left: "-45%" }}
        >
          <motion.div 
            className="absolute top-[50%] left-[25%] w-6 h-6 rounded-full flex items-center justify-center shadow-lg"
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
        
        {/* Enhanced floating particles with better positioning */}
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              background: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`,
              left: `${Math.random() * 120}%`,
              top: `${Math.random() * 120}%`,
              boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.2)'
            }}
            custom={i}
            variants={particleVariants}
            animate="animate"
          />
        ))}

        {/* Improved main logo with enhanced styling */}
        <motion.div 
          className="w-28 h-28 mx-auto relative z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <div 
            className="w-full h-full rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xl"
            style={{ 
              background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)"
            }}
          >
            {/* Improved dynamic glow effect */}
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
        className="inline-flex items-center px-4 py-2 rounded-full space-x-2 backdrop-blur-lg"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
          border: "1px solid rgba(255,255,255,0.1)"
        }}
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
        className="inline-flex items-center px-3 py-1 rounded-full text-white text-xs font-medium shadow-lg backdrop-blur-md"
        style={{
          background: "linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
          border: "1px solid rgba(255,255,255,0.1)"
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
