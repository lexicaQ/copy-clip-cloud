
import React from "react";
import { motion } from "framer-motion";

const AppTitle = () => {
  return (
    <div className="space-y-6">
      <motion.div
        className="relative mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight text-gradient relative z-10"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        >
          CopyClipCloud
        </motion.h1>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
      </motion.div>
      
      <motion.p 
        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Erlebe die nächste Generation der Zwischenablage-Verwaltung. Synchronisiere deine Zwischenablage nahtlos über alle deine Apple-Geräte mit leistungsstarken Organisationsfunktionen und militärischer Verschlüsselung.
      </motion.p>
      
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <div className="glass-panel px-4 py-2 rounded-full flex items-center space-x-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium">Echtzeit-Synchronisierung</span>
        </div>
        
        <div className="glass-panel px-4 py-2 rounded-full flex items-center space-x-2">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium">End-zu-End Verschlüsselung</span>
        </div>
        
        <div className="glass-panel px-4 py-2 rounded-full flex items-center space-x-2">
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium">Intelligente Organisation</span>
        </div>
      </motion.div>
    </div>
  );
};

export default AppTitle;
