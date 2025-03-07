
import React from "react";
import { motion } from "framer-motion";
import DownloadButton from "@/components/landing/DownloadButton";
import { ArrowDown } from "lucide-react";

const FeatureCallToAction = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="mt-32 text-center relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-30"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-white/5 blur-[100px] opacity-30"></div>
      </div>
      
      {/* Metro-style decorative elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-32 bg-white/10 hidden lg:block"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-32 bg-white/10 hidden lg:block"></div>
      
      <motion.div
        className="mb-12 relative"
        variants={itemVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to <span className="text-gradient">Transform Your Workflow?</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Join thousands of professionals who have already upgraded their clipboard experience.
          Download now and see the difference.
        </p>
      </motion.div>
      
      <motion.div
        className="relative z-10"
        variants={itemVariants}
      >
        <DownloadButton />
      </motion.div>
      
      <motion.div
        className="mt-12 flex justify-center"
        variants={itemVariants}
      >
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 px-6 py-3 rounded-full flex items-center space-x-4 text-sm">
          <span className="text-white/70">Free 14-day trial</span>
          <span className="h-4 w-px bg-white/20"></span>
          <span className="text-white/70">No credit card required</span>
          <span className="h-4 w-px bg-white/20"></span>
          <span className="text-white/70">Cancel anytime</span>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-16 opacity-30"
        animate={{ 
          y: [0, 8, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </motion.div>
  );
};

export default FeatureCallToAction;
