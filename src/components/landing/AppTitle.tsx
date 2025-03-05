
import React from "react";
import { motion } from "framer-motion";

const AppTitle = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const title = "CopyClipCloud";

  return (
    <div className="space-y-6">
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
              className="inline-block text-5xl md:text-7xl font-bold tracking-tighter"
              variants={letterVariants}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </motion.div>
      
      <motion.p 
        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        Experience the next generation of clipboard management with <span className="text-gradient font-medium">military-grade encryption</span>. Seamlessly sync across all your Apple devices with powerful organization features.
      </motion.p>
      
      <motion.div
        className="mt-4 flex flex-wrap justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        {["Text", "Images", "Files", "Formats", "Search"].map((feature, index) => (
          <span key={index} className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300">
            {feature}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default AppTitle;
