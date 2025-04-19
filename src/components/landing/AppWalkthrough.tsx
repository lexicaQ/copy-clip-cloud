
import React from "react";
import { motion } from "framer-motion";
import { Laptop, Smartphone, ArrowRight, Check, Server, Download } from "lucide-react";

const AppWalkthrough = () => {
  const steps = [
    {
      title: "Install",
      description: "Install CopyClipCloud on all your devices",
      icon: Download,
      color: "bg-gradient-to-r from-white/10 to-white/5",
      details: "Available for macOS, Windows, iOS, and Android"
    },
    {
      title: "Copy",
      description: "Copy content on any device",
      icon: Laptop,
      color: "bg-gradient-to-r from-white/10 to-white/5",
      details: "Text, images, links, code snippets, and more"
    },
    {
      title: "Sync",
      description: "Content automatically syncs across devices",
      icon: Server,
      color: "bg-gradient-to-r from-white/10 to-white/5",
      details: "End-to-end encrypted, secure cloud storage"
    },
    {
      title: "Paste",
      description: "Access and paste content on any device",
      icon: Smartphone,
      color: "bg-gradient-to-r from-white/10 to-white/5",
      details: "Smart suggestion system based on context"
    },
  ];

  return (
    <motion.div
      className="py-28 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-20 rounded-3xl blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            How It Works
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Experience seamless clipboard management across all your devices with just a few simple steps
          </motion.p>
        </div>

        {/* Interactive steps visualization */}
        <div className="relative mb-16">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-white/5 via-white/10 to-white/5 transform -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {/* Step number */}
                <motion.div
                  className="absolute -top-4 -right-2 w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center text-sm font-bold z-20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                >
                  {index + 1}
                </motion.div>
                
                {/* Connection arrow */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 hidden md:block">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <ArrowRight className="w-6 h-6 text-white/30" />
                    </motion.div>
                  </div>
                )}
                
                {/* Step card */}
                <motion.div
                  className="glass-panel p-6 pt-10 pb-8 backdrop-blur-xl h-full"
                  whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-white/10`}
                      whileHover={{ rotate: 5 }}
                    >
                      <step.icon className="w-8 h-8" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    
                    {/* Details list */}
                    <div className="w-full text-left mt-2">
                      <div className="flex items-start gap-2">
                        <div className="mt-1 p-0.5 rounded-full bg-white/10 flex-shrink-0">
                          <Check className="w-3 h-3 text-white/70" />
                        </div>
                        <p className="text-sm text-gray-400">{step.details}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Additional info section */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.div 
            className="glass-panel p-8 max-w-3xl mx-auto"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Ready to Transform Your Workflow?</h3>
            <p className="text-gray-300 mb-6">
              Join thousands of professionals who have already streamlined their productivity with CopyClipCloud.
            </p>
            <motion.button 
              className="btn-modern inline-flex items-center gap-2"
              whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AppWalkthrough;
