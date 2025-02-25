
import { motion } from "framer-motion";
import { Clipboard } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          className="w-24 h-24 mb-8 mx-auto relative"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: {
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        >
          <div className="absolute inset-0 rounded-xl glass-panel flex items-center justify-center">
            <Clipboard className="w-12 h-12" />
          </div>
          <motion.div 
            className="absolute inset-0 rounded-xl border-2 border-white/20"
            animate={{
              borderColor: ["rgba(255,255,255,0.2)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.2)"]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl font-medium text-white"
        >
          Loading CopyClipCloud...
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
