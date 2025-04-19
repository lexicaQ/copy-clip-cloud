
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
}: FeatureShowcaseProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: delay 
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className={`grid md:grid-cols-2 gap-12 items-center`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div 
        className={`space-y-6 ${isReversed ? 'md:order-last' : ''}`}
        variants={itemVariants}
      >
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
            <Icon className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-gradient">{title}</h3>
        </div>
        
        <p className="text-gray-300 leading-relaxed text-lg">{description}</p>
        
        <motion.button 
          className="px-6 py-3 bg-white text-black rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Explore feature 
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        className={`${isReversed ? 'md:order-first' : ''}`}
      >
        <motion.div 
          className="backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden shadow-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="aspect-video w-full bg-gradient-to-br from-white/10 to-transparent rounded-lg p-6 flex items-center justify-center relative overflow-hidden">
            {image ? (
              <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
            ) : (
              <div className="text-white/20 text-center relative z-10">
                <Icon className="w-16 h-16 mx-auto mb-4 opacity-40" />
                <p>Feature visualization</p>
                
                {/* Metro-style decorative elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-6 left-6 w-20 h-px bg-white/10"></div>
                  <div className="absolute top-6 left-6 w-px h-20 bg-white/10"></div>
                  <div className="absolute bottom-6 right-6 w-20 h-px bg-white/10"></div>
                  <div className="absolute bottom-6 right-6 w-px h-20 bg-white/10"></div>
                </div>
              </div>
            )}
            
            {/* Animated highlight */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ 
                x: ['-100%', '100%'],
                opacity: [0, 0.5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FeatureShowcase;
