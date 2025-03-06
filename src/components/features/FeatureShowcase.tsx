
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FeatureShowcaseProps {
  title: string;
  description: string;
  icon: React.ElementType;
  image?: string;
  isReversed?: boolean;
  delay?: number;
}

const FeatureShowcase = ({ 
  title, 
  description, 
  icon: Icon, 
  image, 
  isReversed = false, 
  delay = 0 
}: FeatureShowcaseProps) => (
  <motion.div 
    className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center my-24`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
  >
    <div className="flex-1 space-y-6">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-2xl font-bold text-gradient">{title}</h3>
      </div>
      
      <p className="text-gray-300 leading-relaxed text-lg">{description}</p>
      
      <motion.button 
        className="px-5 py-2.5 bg-white text-black rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Explore feature <ArrowRight className="w-4 h-4" />
      </motion.button>
    </div>
    
    <div className="flex-1">
      <div className="glass-panel p-1 rounded-xl overflow-hidden subtle-glow">
        <div className="h-80 w-full bg-gradient-to-br from-white/10 to-transparent rounded-lg flex items-center justify-center">
          {image ? (
            <img src={image} alt={title} className="max-w-full max-h-full" />
          ) : (
            <div className="text-white/20 text-center p-4">
              <Icon className="w-16 h-16 mx-auto mb-4 opacity-40" />
              <p>Feature visualization</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

export default FeatureShowcase;
