
import React from "react";
import { motion } from "framer-motion";
import { Copy, CopyCheck, FileText, Link, Search, FileCode, Check } from "lucide-react";
import { Apple } from "lucide-react";

const AppLogo = () => {
  // Falling symbols configuration
  const symbols = [
    { Icon: Copy, delay: 0 },
    { Icon: CopyCheck, delay: 0.2 },
    { Icon: FileText, delay: 0.4 },
    { Icon: Link, delay: 0.6 },
    { Icon: Search, delay: 0.8 },
    { Icon: FileCode, delay: 1 },
    { Icon: Check, delay: 1.2 },
  ];

  return (
    <div className="space-y-6 relative mt-16">
      {/* Falling Symbols */}
      <div className="relative mx-auto" style={{ width: "180px", height: "180px" }}>
        {symbols.map(({ Icon, delay }, index) => (
          <motion.div
            key={index}
            className="absolute left-1/2 -translate-x-1/2"
            initial={{ y: -50, opacity: 0 }}
            animate={{ 
              y: [null, 200],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 3,
              delay: delay,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "linear"
            }}
          >
            <Icon className="w-6 h-6 text-white/30" />
          </motion.div>
        ))}

        {/* Main logo */}
        <motion.div 
          className="w-24 h-24 mx-auto relative z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="w-full h-full rounded-2xl flex items-center justify-center backdrop-blur-xl"
            style={{ 
              background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))",
              border: "1px solid rgba(255,255,255,0.2)"
            }}>
            <Copy className="w-12 h-12 text-white" />
          </div>
        </motion.div>
      </div>

      {/* Badge Container - Updated layout */}
      <motion.div
        className="flex flex-col items-center gap-3"
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

        {/* Free Download Badge - Smaller version */}
        <motion.div
          className="inline-flex items-center px-3 py-1.5 rounded-full text-white text-xs font-medium backdrop-blur-md"
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
            className="w-1.5 h-1.5 rounded-full bg-white mr-2"
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
