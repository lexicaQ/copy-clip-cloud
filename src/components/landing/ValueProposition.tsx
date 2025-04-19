
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clipboard, MoveRight } from "lucide-react";

const ValueProposition = () => {
  return (
    <motion.div 
      className="mt-32 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-30 blur-2xl"></div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-12 p-6">
        <motion.div 
          className="flex-1 md:order-1 order-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gradient"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Revolutionize Your Workflow with Smart Clipboard Management
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 text-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            Transform how you work by accessing your complete clipboard history across all your devices. 
            Save time, boost productivity, and never lose important information again.
          </motion.p>
          
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              "Access clipboard history across all your devices",
              "Organize content with AI-powered smart categories",
              "Search and filter with precision and speed",
              "Keep sensitive data secure with end-to-end encryption"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-white/10">
                  <MoveRight className="w-4 h-4" />
                </div>
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </motion.div>
          
          <motion.button 
            className="mt-8 flex items-center gap-2 text-gray-300 group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
          >
            Learn more about our features <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="flex-1 md:order-2 order-1 relative"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Animated clipboard illustration */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl border border-white/10 backdrop-blur-md p-8 flex items-center justify-center"
              animate={{
                boxShadow: ["0 0 20px rgba(255, 255, 255, 0.1)", "0 0 40px rgba(255, 255, 255, 0.2)", "0 0 20px rgba(255, 255, 255, 0.1)"]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Clipboard className="w-24 h-24 text-white/70" />
              
              {/* Animated elements representing clipboard items */}
              {[...Array(5)].map((_, idx) => (
                <motion.div
                  key={idx}
                  className="absolute h-6 rounded-md bg-white/10 border border-white/10"
                  style={{
                    width: `${80 - idx * 5}%`,
                    top: `${30 + idx * 14}%`,
                    left: '10%'
                  }}
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    width: [`${80 - idx * 5}%`, `${85 - idx * 5}%`, `${80 - idx * 5}%`]
                  }}
                  transition={{
                    duration: 3,
                    delay: idx * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              {/* Animated glowing effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl"
                animate={{ 
                  x: ['-100%', '100%'],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1
                }}
              />
            </motion.div>
            
            {/* Background elements */}
            <div className="absolute -z-10 inset-0 translate-x-6 translate-y-6 bg-white/5 rounded-2xl blur-md" />
            <div className="absolute -z-20 inset-0 translate-x-12 translate-y-12 bg-white/3 rounded-2xl blur-lg" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ValueProposition;
