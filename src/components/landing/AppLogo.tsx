
import React from "react";
import { motion } from "framer-motion";
import { Clipboard, Sparkles, Shield, Cloud, Apple, Code, Zap, Lock, Server } from "lucide-react";

const AppLogo = () => {
  return (
    <div className="space-y-6 relative mt-16">
      <div className="relative mx-auto" style={{ width: "180px", height: "180px" }}>
        {/* Smaller background circle */}
        <motion.div
          className="absolute rounded-full bg-black/30 backdrop-blur-lg"
          style={{ 
            width: "120%", 
            height: "120%", 
            top: "-10%", 
            left: "-10%" 
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.6, 0.7, 0.6]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Orbital paths with continuous rotation */}
        {[0, 1, 2].map((orbit) => (
          <motion.div
            key={orbit}
            className="absolute rounded-full border border-white/10"
            style={{ 
              width: `${120 + orbit * 20}%`, 
              height: `${120 + orbit * 20}%`, 
              top: `${-10 - orbit * 10}%`, 
              left: `${-10 - orbit * 10}%`,
            }}
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 20 + orbit * 5, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}

        {/* More orbiting elements with continuous motion */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ width: "150%", height: "150%", top: "-25%", left: "-25%" }}
        >
          <motion.div 
            className="absolute top-[40%] right-[20%] w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md"
            style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))" }}
            whileHover={{ scale: 1.2 }}
          >
            <Sparkles className="w-4 h-4 text-white" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ width: "140%", height: "140%", top: "-20%", left: "-20%" }}
        >
          <motion.div 
            className="absolute bottom-[35%] left-[20%] w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md"
            style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))" }}
            whileHover={{ scale: 1.2 }}
          >
            <Shield className="w-4 h-4 text-white" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ width: "160%", height: "160%", top: "-30%", left: "-30%" }}
        >
          <motion.div 
            className="absolute top-[25%] left-[25%] w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md"
            style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))" }}
            whileHover={{ scale: 1.2 }}
          >
            <Cloud className="w-4 h-4 text-white" />
          </motion.div>
        </motion.div>

        {/* Additional orbiting elements */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: -330 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{ width: "145%", height: "145%", top: "-22.5%", left: "-22.5%" }}
        >
          <motion.div 
            className="absolute top-[60%] right-[25%] w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md"
            style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))" }}
            whileHover={{ scale: 1.2 }}
          >
            <Code className="w-4 h-4 text-white" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 390 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          style={{ width: "155%", height: "155%", top: "-27.5%", left: "-27.5%" }}
        >
          <motion.div 
            className="absolute bottom-[65%] right-[40%] w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md"
            style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))" }}
            whileHover={{ scale: 1.2 }}
          >
            <Zap className="w-4 h-4 text-white" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: -270 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{ width: "135%", height: "135%", top: "-17.5%", left: "-17.5%" }}
        >
          <motion.div 
            className="absolute bottom-[30%] right-[60%] w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md"
            style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))" }}
            whileHover={{ scale: 1.2 }}
          >
            <Lock className="w-4 h-4 text-white" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 300 }}
          transition={{ duration: 33, repeat: Infinity, ease: "linear" }}
          style={{ width: "165%", height: "165%", top: "-32.5%", left: "-32.5%" }}
        >
          <motion.div 
            className="absolute top-[70%] left-[60%] w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md"
            style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))" }}
            whileHover={{ scale: 1.2 }}
          >
            <Server className="w-4 h-4 text-white" />
          </motion.div>
        </motion.div>

        {/* Main logo with enhanced styling */}
        <motion.div 
          className="w-28 h-28 mx-auto relative z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="w-full h-full rounded-2xl flex items-center justify-center relative overflow-hidden backdrop-blur-xl"
            style={{ 
              background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))",
              border: "1px solid rgba(255,255,255,0.2)"
            }}>
            <Clipboard className="w-14 h-14 text-white" />
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
