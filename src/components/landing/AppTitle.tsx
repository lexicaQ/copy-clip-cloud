
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const AppTitle = () => {
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.6, 0.05, -0.01, 0.9] }
    }
  };

  const title = "CopyClipCloud";

  return (
    <div className="space-y-6 mt-10 relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-b from-white/10 via-blue-500/5 to-purple-500/10 rounded-full transform scale-150"></div>
      
      <motion.div 
        className="overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        <div className="flex justify-center items-center">
          {title.split('').map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block text-6xl md:text-8xl font-bold tracking-tighter"
              variants={letterVariants}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className="flex justify-center items-center gap-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        <div className="text-sm text-white/80 flex items-center font-medium tracking-widest uppercase">
          <Sparkles className="w-4 h-4 mr-2 text-yellow-400" /> INTELLIGENT CLIPBOARD MANAGEMENT
        </div>
        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      </motion.div>
      
      <motion.p 
        className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        Experience the next generation of clipboard management with <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent font-medium">military-grade encryption</span>. Seamlessly sync across all your Apple devices with powerful organization features.
      </motion.p>
      
      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        {["Text", "Images", "Files", "Code", "Formats", "Search", "Encryption", "Sync"].map((feature, index) => (
          <motion.span 
            key={index} 
            className="px-4 py-1.5 text-xs rounded-full bg-white/5 text-gray-200 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 + index * 0.05 }}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)"
            }}
          >
            {feature}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default AppTitle;
