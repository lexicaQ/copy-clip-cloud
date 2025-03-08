
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
  // Prepare animations
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
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div className="flex-1 space-y-6" variants={itemVariants}>
        <div className="flex items-center space-x-3">
          <motion.div 
            className="w-12 h-12 rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 flex items-center justify-center"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              boxShadow: "0 0 15px rgba(255,255,255,0.1)"
            }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-6 h-6" />
          </motion.div>
          <h3 className="text-2xl font-bold text-gradient">{title}</h3>
        </div>
        
        <p className="text-gray-300 leading-relaxed text-lg">{description}</p>
        
        <motion.button 
          className="px-5 py-2.5 bg-white text-black rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2 relative overflow-hidden group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">Explore feature</span> 
          <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          
          {/* Button background shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
            initial={{ left: "-100%" }}
            whileHover={{ left: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ width: "50%" }}
          />
        </motion.button>
      </motion.div>
      
      <motion.div 
        className="flex-1"
        variants={itemVariants}
        style={{ perspective: "1000px" }}
      >
        <motion.div 
          className="backdrop-blur-xl bg-white/[0.03] border border-white/10 p-1 rounded-xl overflow-hidden shadow-xl"
          whileHover={{ 
            scale: 1.02,
            rotateY: 5,
            rotateX: 5,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="h-80 w-full bg-gradient-to-br from-white/10 to-transparent rounded-lg flex items-center justify-center relative overflow-hidden">
            {image ? (
              <motion.img 
                src={image} 
                alt={title} 
                className="max-w-full max-h-full relative z-10"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ transform: "translateZ(30px)" }}
              />
            ) : (
              <div className="text-white/20 text-center p-4 relative z-10" style={{ transform: "translateZ(30px)" }}>
                <motion.div
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-16 h-16 mx-auto mb-4 opacity-40" />
                </motion.div>
                <p>Feature visualization</p>
                
                {/* Enhanced Metro-style decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <motion.div 
                    className="absolute top-6 left-6 w-20 h-px bg-white/10"
                    animate={{ width: ["0px", "80px"] }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute top-6 left-6 w-px h-20 bg-white/10"
                    animate={{ height: ["0px", "80px"] }}
                    transition={{ duration: 1, delay: 0.7 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute bottom-6 right-6 w-20 h-px bg-white/10"
                    animate={{ width: ["0px", "80px"] }}
                    transition={{ duration: 1, delay: 0.9 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute bottom-6 right-6 w-px h-20 bg-white/10"
                    animate={{ height: ["0px", "80px"] }}
                    transition={{ duration: 1, delay: 1.1 }}
                  ></motion.div>
                </div>
                
                {/* Enhanced animated pulse effect */}
                <motion.div 
                  className="absolute inset-0 bg-white/5 rounded-lg"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* 3D grid effect */}
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                  {Array.from({ length: 16 }).map((_, index) => (
                    <motion.div 
                      key={index}
                      className="border border-white/[0.02] flex items-center justify-center"
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {/* Enhanced animated highlight */}
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
            
            {/* 3D floating particles */}
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={`particle-${index}`}
                className="absolute w-2 h-2 bg-white/10 rounded-full"
                initial={{
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                  scale: Math.random() * 0.5 + 0.5,
                  opacity: Math.random() * 0.5 + 0.25
                }}
                animate={{
                  y: ['-20px', '20px'],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  yoyo: true,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
                style={{ left: `${Math.random() * 100}%` }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FeatureShowcase;
