
import React from "react";
import { motion } from "framer-motion";
import { Shield, Sparkles, Zap, Check } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Secure & Private",
      description: "End-to-end encryption for maximum data security"
    },
    {
      icon: Sparkles,
      title: "AI-powered Organization",
      description: "Intelligent categorization and sorting of your content"
    },
    {
      icon: Zap,
      title: "Lightning-fast Sync",
      description: "Instant availability across all your devices"
    }
  ];

  return (
    <motion.div 
      className="py-24 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Soft blurred background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-white/5 rounded-full blur-[100px] opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-full h-2/3 bg-gray-500/5 rounded-full blur-[120px] opacity-20 transform translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Revolutionize <br/>
              <span className="text-gradient">Your Productivity</span> <br/>
              With Intelligent Clipboard Management
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              CopyClipCloud enhances your workflow through seamless device synchronization and intelligent content organization. Save time and work more efficiently.
            </motion.p>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {[
                "Reduce time switching between devices",
                "Keep important content always at your fingertips",
                "Organize clipboard contents automatically",
                "Find what you need quickly"
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="mt-1 p-0.5 rounded-full bg-white/10">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-gray-300">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="glass-panel p-6 backdrop-blur-xl hover:bg-white/[0.05] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex gap-5">
                  <div className="p-3 rounded-xl bg-white/5 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ValueProposition;
