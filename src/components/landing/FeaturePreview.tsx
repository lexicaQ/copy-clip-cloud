
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FeaturePreview = () => {
  return (
    <motion.div 
      className="py-24 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Soft blurred background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] opacity-20"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="p-6 relative z-10 order-2 lg:order-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-4 text-gradient"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            KI-gestützte Organisation
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-300 mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            CopyClipCloud verwendet künstliche Intelligenz, um deine Clipboard-Inhalte automatisch zu kategorisieren und zu organisieren. Texte, Bilder, Links und Code-Snippets werden intelligent gruppiert und sind leicht auffindbar.
          </motion.p>
          
          <motion.div 
            className="space-y-4 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {[
              "Automatische Erkennung von Inhaltstypen",
              "Kontextbezogene Gruppierung zusammengehöriger Elemente",
              "Intelligente Tagging-Vorschläge",
              "Personalisierte Organisation nach deinem Nutzungsverhalten"
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
                <p className="text-gray-300">{item}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.button 
            className="btn-modern inline-flex items-center gap-2"
            whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            Funktion entdecken <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="relative order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="aspect-video rounded-xl overflow-hidden backdrop-blur-lg bg-white/[0.03] border border-white/10 shadow-xl relative">
            {/* Stilisierte UI-Vorschau */}
            <div className="absolute inset-0 p-6">
              <div className="w-full h-full rounded-lg border border-white/10 overflow-hidden flex flex-col">
                {/* UI Header */}
                <div className="h-10 border-b border-white/10 flex items-center px-4 gap-3">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  </div>
                  <div className="flex-1 text-xs text-white/50 text-center">CopyClipCloud</div>
                </div>
                
                {/* UI Content */}
                <div className="flex-1 flex">
                  {/* Sidebar */}
                  <div className="w-1/4 border-r border-white/10 p-3 space-y-2">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-6 bg-white/5 rounded-md"></div>
                    ))}
                  </div>
                  
                  {/* Main content */}
                  <div className="flex-1 p-3">
                    <div className="grid grid-cols-2 gap-3">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="h-20 bg-white/5 rounded-md p-2 flex flex-col justify-between">
                          <div className="h-2 w-2/3 bg-white/10 rounded-sm"></div>
                          <div className="h-10 bg-white/10 rounded-sm"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Animation layer */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ 
                x: ['-100%', '100%'],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0.5
              }}
            />
            
            {/* UI Elements */}
            <div className="absolute top-5 right-5 flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="w-2 h-2 bg-white/50 rounded-full"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute -bottom-6 -right-6 w-24 h-24 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl -z-10"
            animate={{ 
              rotate: 10,
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute -top-4 -left-4 w-16 h-16 rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl -z-10"
            animate={{ 
              rotate: -5,
              scale: [1, 1.03, 1],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturePreview;
