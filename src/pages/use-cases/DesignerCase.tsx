
import React from "react";
import { motion } from "framer-motion";
import { PenTool, Palette, Layers, Image } from "lucide-react";

const DesignerCase = () => {
  const features = [
    {
      icon: PenTool,
      title: "Vector Tools",
      description: "Store commonly used vector paths and design elements across projects"
    },
    {
      icon: Palette,
      title: "Color Palettes",
      description: "Organize and access your brand colors and custom palettes"
    },
    {
      icon: Layers,
      title: "Layer Styles",
      description: "Save and reuse layer styles and effects across design files"
    },
    {
      icon: Image,
      title: "Asset Library",
      description: "Keep track of design assets, icons, and images in one place"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-24 px-4 md:px-6">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl font-bold mb-4 text-gradient"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Designed for Creatives
          </motion.h1>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Enhance your creative workflow with smart design clipboard management
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-panel p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Design Preview Section */}
        <motion.div 
          className="glass-panel p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Smart Design Management</h3>
            <p className="text-gray-400">
              Your design elements are intelligently organized and immediately accessible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-sm text-white/70 mb-2">Color Palette</div>
              <div className="flex flex-wrap gap-3">
                {["#FF5252", "#4CAF50", "#2196F3", "#FFC107", "#9C27B0", "#607D8B"].map((color, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full" style={{ backgroundColor: color }}></div>
                    <span className="text-xs text-white/70 mt-1">{color}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-sm text-white/70 mb-2">Design Notes</div>
              <pre className="text-sm text-white/90 font-mono overflow-x-auto">
                {`Logo dimensions: 512x512px
Primary font: Montserrat
Secondary font: Roboto
Icon set: Phosphor Icons`}
              </pre>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DesignerCase;
