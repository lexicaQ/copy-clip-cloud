
import React from "react";
import { motion } from "framer-motion";
import { Apple, Clipboard } from "lucide-react";

const AppLogo = () => {
  return (
    <div className="space-y-6">
      <motion.div 
        className="w-24 h-24 mx-auto floating-element"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="w-full h-full rounded-2xl glass-panel flex items-center justify-center">
          <Clipboard className="w-12 h-12" />
        </div>
      </motion.div>

      <motion.div 
        className="inline-flex items-center px-4 py-2 rounded-full glass-panel space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Apple className="w-4 h-4" />
        <span className="text-sm font-medium">Built for macOS 15+</span>
      </motion.div>
    </div>
  );
};

export default AppLogo;
