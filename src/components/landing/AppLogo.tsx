
import React from "react";
import { motion } from "framer-motion";
import { Apple, Clipboard, Sparkles, Shield, Cloud, Code } from "lucide-react";

const AppLogo = () => {
  return (
    <div className="space-y-6 relative">
      <div className="relative mx-auto" style={{ width: "180px", height: "180px" }}>
        {/* Pulse circle */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white/5"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{ width: "100%", height: "100%", left: "0%", top: "0%" }}
        />
        
        {/* Orbit circles */}
        <motion.div
          className="absolute inset-0 opacity-20 rounded-full border border-white/30"
          style={{ width: "100%", height: "100%" }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1 }}
        />
        
        <motion.div
          className="absolute inset-0 opacity-20 rounded-full border border-white/20"
          style={{ width: "160%", height: "160%", top: "-30%", left: "-30%" }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Orbiting elements - Made larger and orbit further from the logo */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          <motion.div 
            className="absolute top-0 left-[calc(50%-12px)] w-8 h-8 glass-panel rounded-full flex items-center justify-center"
            style={{ transform: "translateY(-100px)" }}
            whileHover={{ scale: 1.2 }}
          >
            <Sparkles className="w-4 h-4 text-white" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          initial={{ rotate: 120 }}
        >
          <motion.div 
            className="absolute bottom-0 left-[calc(50%-10px)] w-7 h-7 glass-panel rounded-full bg-white/20 flex items-center justify-center"
            style={{ transform: "translateY(100px)" }}
            whileHover={{ scale: 1.2 }}
          >
            <Shield className="w-4 h-4 text-white" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          initial={{ rotate: 240 }}
        >
          <motion.div 
            className="absolute top-[calc(50%-10px)] right-0 w-7 h-7 glass-panel rounded-full bg-white/20 flex items-center justify-center"
            style={{ transform: "translateX(100px)" }}
            whileHover={{ scale: 1.2 }}
          >
            <Cloud className="w-4 h-4 text-white" />
          </motion.div>
        </motion.div>
        
        {/* Additional orbiting element */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity }}
          initial={{ rotate: 60 }}
        >
          <motion.div 
            className="absolute top-[calc(25%-10px)] right-[calc(25%-10px)] w-7 h-7 glass-panel rounded-full bg-white/20 flex items-center justify-center"
            style={{ transform: "translate(90px, -90px)" }}
            whileHover={{ scale: 1.2 }}
          >
            <Code className="w-4 h-4 text-white" />
          </motion.div>
        </motion.div>

        {/* Main logo - Removed excessive animations */}
        <div 
          className="w-28 h-28 mx-auto relative z-10"
        >
          <div className="w-full h-full rounded-2xl glass-panel flex items-center justify-center shadow-xl border border-white/20 relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 opacity-60"
            />
            <Clipboard className="w-14 h-14 text-white" />
            
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
        </div>
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
        className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium"
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
