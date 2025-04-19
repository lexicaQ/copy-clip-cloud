
import React from "react";
import { motion } from "framer-motion";
import { Laptop, Clipboard, Cloud, Shield } from "lucide-react";

const TimelineSection = () => {
  const steps = [
    {
      icon: Laptop,
      title: "Install",
      description: "Install CopyClipCloud on all your Apple devices",
    },
    {
      icon: Clipboard,
      title: "Copy",
      description: "Copy content on any device",
    },
    {
      icon: Cloud,
      title: "Sync",
      description: "Content automatically syncs across devices",
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Access your content securely on any device",
    },
  ];

  return (
    <div className="py-24 px-4 md:px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-4 text-gradient"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.h2>
          <motion.p 
            className="text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Get started with CopyClipCloud in just a few simple steps
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col md:flex-row items-center md:gap-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Timeline content */}
                <div className={`flex items-center w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:justify-end md:text-right' : 'md:justify-start'
                }`}>
                  <motion.div
                    className="glass-panel p-6 max-w-sm w-full"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`flex items-center gap-4 ${
                      index % 2 === 0 ? 'flex-row md:flex-row-reverse' : 'flex-row'
                    }`}>
                      <div className="w-12 h-12 rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineSection;
