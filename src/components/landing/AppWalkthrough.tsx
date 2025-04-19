
import React from "react";
import { motion } from "framer-motion";
import { Laptop, Smartphone, ArrowRight } from "lucide-react";

const AppWalkthrough = () => {
  const steps = [
    {
      title: "Installieren",
      description: "Installiere CopyClipCloud auf all deinen Apple-Geräten",
      icon: Laptop,
      color: "bg-white/10",
    },
    {
      title: "Kopieren",
      description: "Kopiere Inhalte auf einem beliebigen Gerät",
      icon: Smartphone,
      color: "bg-white/10",
    },
    {
      title: "Synchronisieren",
      description: "Die Inhalte werden automatisch auf allen Geräten synchronisiert",
      icon: ArrowRight,
      color: "bg-white/10",
    },
    {
      title: "Einfügen",
      description: "Füge die Inhalte auf jedem deiner Geräte ein",
      icon: Laptop,
      color: "bg-white/10",
    },
  ];

  return (
    <motion.div
      className="mt-32 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-20 rounded-3xl blur-3xl transform -translate-y-1/2"></div>
      </div>
      
      <div className="text-center mb-16">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-4 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          So einfach funktioniert's
        </motion.h2>
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          In nur wenigen Schritten zu einer nahtlosen Clipboard-Erfahrung
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="glass-panel p-6 pt-12 pb-8 relative overflow-hidden text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center shadow-lg border border-white/10`}>
                <step.icon className="w-6 h-6" />
              </div>
            </div>
            
            <div className="absolute top-0 right-0 p-2 text-white/20 text-sm font-medium">
              {index + 1}
            </div>
            
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.description}</p>
            
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-20">
                <ArrowRight className="w-6 h-6 text-white/30" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <motion.button 
          className="btn-modern inline-flex items-center gap-2"
          whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
        >
          Jetzt starten <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default AppWalkthrough;
