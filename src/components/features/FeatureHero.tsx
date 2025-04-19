import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
const FeatureHero = () => {
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 0.7
  }} className="text-center mb-20 relative">
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px] opacity-50"></div>
      </div>
      
      <motion.div className="h-20 w-20 rounded-2xl glass-panel flex items-center justify-center mx-auto mb-8 relative" initial={{
      scale: 0.8,
      opacity: 0
    }} animate={{
      scale: 1,
      opacity: 1
    }} transition={{
      duration: 0.5,
      delay: 0.2
    }}>
        <Sparkles className="w-10 h-10" />
        <motion.div className="absolute inset-0 border border-white/20 rounded-2xl" animate={{
        boxShadow: ["0 0 0 0 rgba(255, 255, 255, 0)", "0 0 0 10px rgba(255, 255, 255, 0)"],
        scale: [1, 1.2]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeOut"
      }} />
      </motion.div>
      
      <motion.h1 className="text-5xl md:text-6xl font-bold mb-6 relative" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 0.3
    }}>
        <span className="text-gradient">Advanced Features</span>
      </motion.h1>
      
      <motion.p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 0.4
    }}>
        Experience the next generation of clipboard management with our powerful features designed for professionals.
      </motion.p>
      
      <motion.div className="mt-10 flex flex-wrap justify-center gap-3" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.6
    }}>
        {["AI-Powered", "End-to-End Encryption", "Cloud Sync", "Privacy First", "Intelligent Search"].map((tag, index) => <motion.span key={index} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm" initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: 0.7 + index * 0.1
      }} whileHover={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        scale: 1.05,
        transition: {
          duration: 0.2
        }
      }}>
            {tag}
          </motion.span>)}
      </motion.div>
      
      
    </motion.div>;
};
export default FeatureHero;