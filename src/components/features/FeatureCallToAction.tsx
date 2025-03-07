
import React from "react";
import { motion } from "framer-motion";
import DownloadButton from "@/components/landing/DownloadButton";
import { ArrowDown } from "lucide-react";

const FeatureCallToAction = () => {
  return (
    <motion.div
      className="mt-32 text-center relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[400px] rounded-full bg-white/5 blur-[100px] opacity-30"></div>
      </div>
      
      <motion.div
        className="mb-8 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <DownloadButton />
      </motion.div>
      
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="glass-panel px-6 py-3 flex items-center space-x-3 text-sm">
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
