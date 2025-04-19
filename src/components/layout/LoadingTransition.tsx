
import React from "react";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";

const LoadingTransition = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        animate={{
          rotate: 360,
          transition: {
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        <Loader className="w-8 h-8 text-white/80" />
      </motion.div>
    </motion.div>
  );
};

export default LoadingTransition;
