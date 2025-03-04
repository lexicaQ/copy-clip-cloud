
import React from "react";
import { motion } from "framer-motion";

const AppTitle = () => {
  return (
    <div className="space-y-4">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold tracking-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        CopyClipCloud
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Experience the next generation of clipboard management. Seamlessly sync your clipboard across all your Apple devices with powerful organization features and military-grade encryption.
      </motion.p>
    </div>
  );
};

export default AppTitle;
