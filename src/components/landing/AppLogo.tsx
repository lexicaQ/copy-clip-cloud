
import React from "react";
import { motion } from "framer-motion";
import { Apple, Clipboard, Zap, Shield } from "lucide-react";

const AppLogo = () => {
  return (
    <div className="space-y-8">
      <motion.div 
        className="relative w-32 h-32 mx-auto"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Orbiting elements */}
        <motion.div 
          className="absolute w-8 h-8 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full rounded-full glass-panel flex items-center justify-center">
            <Zap className="w-4 h-4 text-blue-400" />
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute w-8 h-8 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 0.5 }}
        >
          <div className="w-full h-full rounded-full glass-panel flex items-center justify-center">
            <Shield className="w-4 h-4 text-purple-400" />
          </div>
        </motion.div>
        
        {/* Main icon */}
        <motion.div 
          className="w-full h-full rounded-2xl glass-panel flex items-center justify-center relative z-10"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl" />
          <div className="relative z-10 bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-xl">
            <Clipboard className="w-16 h-16 text-white" />
          </div>
          
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-30 blur-sm z-0" />
        </motion.div>
      </motion.div>

      <motion.div 
        className="inline-flex items-center px-5 py-3 rounded-full glass-panel space-x-3 border border-white/10 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.03 }}
      >
        <Apple className="w-5 h-5 text-gray-200" />
        <span className="text-sm font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Entwickelt für macOS 15+</span>
      </motion.div>
    </div>
  );
};

export default AppLogo;
