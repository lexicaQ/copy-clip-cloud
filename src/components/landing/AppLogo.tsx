
import React from "react";
import { motion } from "framer-motion";
import { Apple, Clipboard, Sparkles, Shield, Cloud, Lightbulb, Zap, Star, Search } from "lucide-react";

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
        {/* Improved dynamic halo with subtle glow - SMALLER CIRCLE */}
        <motion.div
          className="absolute rounded-full bg-gradient-to-r from-transparent via-white/3 to-transparent"
          animate={{
            boxShadow: [
              "0 0 20px 10px rgba(255, 255, 255, 0.02)",
              "0 0 30px 15px rgba(255, 255, 255, 0.05)",
              "0 0 20px 10px rgba(255, 255, 255, 0.02)"
            ],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{ width: "120%", height: "120%", top: "-10%", left: "-10%" }}
        />
        
        {/* Enhanced orbital paths with better styling */}
        {[0, 1, 2, 3, 4].map((orbit) => (
          <motion.div
            key={orbit}
            className="absolute rounded-full border-dashed"
            style={{ 
              width: `${120 + orbit * 10}%`, 
              height: `${120 + orbit * 10}%`, 
              top: `${-10 - orbit * 5}%`, 
              left: `${-10 - orbit * 5}%`,
              opacity: 0.15 - orbit * 0.03,
              borderColor: "rgba(255, 255, 255, 0.1)",
              borderWidth: "1px",
            }}
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 30 + orbit * 8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}

        {/* More orbiting elements with improved positioning */}
        {[
          { Icon: Sparkles, orbitDuration: 30, initialRotate: 0, size: 3.5, orbitSize: 180 },
          { Icon: Shield, orbitDuration: 25, initialRotate: 120, size: 3, orbitSize: 170 },
          { Icon: Cloud, orbitDuration: 35, initialRotate: 240, size: 3, orbitSize: 190 },
          { Icon: Lightbulb, orbitDuration: 28, initialRotate: 60, size: 3.5, orbitSize: 175 },
          { Icon: Zap, orbitDuration: 32, initialRotate: 180, size: 3, orbitSize: 185 },
          { Icon: Star, orbitDuration: 27, initialRotate: 300, size: 3, orbitSize: 165 },
          { Icon: Search, orbitDuration: 33, initialRotate: 90, size: 3.5, orbitSize: 195 }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="absolute w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: item.orbitDuration, repeat: Infinity, ease: "linear" }}
            initial={{ rotate: item.initialRotate }}
            style={{ width: `${item.orbitSize}%`, height: `${item.orbitSize}%`, top: `${-(item.orbitSize-100)/2}%`, left: `${-(item.orbitSize-100)/2}%` }}
          >
            <motion.div 
              className="absolute rounded-full flex items-center justify-center shadow-lg"
              variants={orbitVariants}
              whileHover="hover"
              style={{ 
                background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                border: "1px solid rgba(255,255,255,0.2)",
                width: `${item.size * 2}px`,
                height: `${item.size * 2}px`,
                top: `${Math.sin(item.initialRotate * Math.PI / 180) * 50 + 50}%`,
                left: `${Math.cos(item.initialRotate * Math.PI / 180) * 50 + 50}%`
              }}
            >
              <item.Icon className={`w-${item.size} h-${item.size} text-white`} />
            </motion.div>
          </motion.div>
        ))}
        
        {/* Enhanced floating particles with better positioning */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
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

        {/* Improved main logo with enhanced styling - MOVED DOWN SLIGHTLY */}
        <motion.div 
          className="w-28 h-28 mx-auto relative z-10 mt-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* Elegant circle around logo */}
          <motion.div
            className="absolute inset-0 rounded-full border border-white/20"
            animate={{ 
              borderColor: ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.1)"]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              width: "calc(100% + 16px)",
              height: "calc(100% + 16px)",
              top: "-8px",
              left: "-8px"
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

      {/* Badge Container - Updated to display badges side by side */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* macOS Badge */}
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

        {/* Free Download Badge - Redesigned */}
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
