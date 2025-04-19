import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureShowcaseProps {
  title: string;
  description: string;
  icon: React.ElementType;
  image?: string;
  isReversed?: boolean;
  delay?: number;
  link?: string;
}

const FeatureShowcase = ({ 
  title, 
  description, 
  icon: Icon, 
  image, 
  isReversed = false, 
  delay = 0,
  link
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
          <div className="w-14 h-14 rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-lg">
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
          {link ? (
            <Link to={link} className="flex items-center gap-2">
              Explore feature 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <>
              Explore feature 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </motion.button>
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        className={`${isReversed ? 'md:order-first' : ''}`}
      >
        {link ? (
          <Link to={link}>
            <motion.div 
              className="backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden shadow-xl relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="aspect-video w-full bg-gradient-to-br from-white/10 to-transparent rounded-lg p-6 flex items-center justify-center relative overflow-hidden">
                {image ? (
                  <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <div className="text-white/20 text-center relative z-10 w-full h-full flex flex-col items-center justify-center">
                    <div className="relative w-40 h-40 flex items-center justify-center">
                      <motion.div 
                        className="absolute w-full h-full rounded-full bg-white/5"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {[1, 2, 3].map((i) => (
                        <motion.div 
                          key={i}
                          className="absolute rounded-full border border-white/10"
                          style={{ 
                            width: `${70 - (i-1) * 15}%`, 
                            height: `${70 - (i-1) * 15}%`
                          }}
                          animate={{ 
                            rotate: 360,
                            borderColor: [
                              'rgba(255, 255, 255, 0.1)',
                              'rgba(255, 255, 255, 0.2)',
                              'rgba(255, 255, 255, 0.1)',
                            ],
                          }}
                          transition={{ 
                            duration: 10 + i * 5,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      ))}
                      
                      <motion.div
                        className="relative z-20 bg-white/10 rounded-full p-5"
                        animate={{
                          boxShadow: [
                            '0 0 10px rgba(255, 255, 255, 0.1)',
                            '0 0 20px rgba(255, 255, 255, 0.2)',
                            '0 0 10px rgba(255, 255, 255, 0.1)',
                          ]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Icon className="w-10 h-10 text-white/60" />
                      </motion.div>
                      
                      {[...Array(6)].map((_, index) => (
                        <motion.div
                          key={index}
                          className="absolute w-1.5 h-1.5 rounded-full bg-white/40"
                          initial={{ 
                            x: Math.random() * 100 - 50, 
                            y: Math.random() * 100 - 50,
                            opacity: 0.3 + Math.random() * 0.4
                          }}
                          animate={{ 
                            x: Math.random() * 100 - 50, 
                            y: Math.random() * 100 - 50,
                            opacity: [0.3, 0.7, 0.3]
                          }}
                          transition={{ 
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>
                    
                    <p className="mt-6 text-sm font-medium">Interactive {title} Visualization</p>
                  </div>
                )}
                
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
                
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 w-20 h-20">
                    <div className="absolute top-6 left-6 w-12 h-px bg-white/15"></div>
                    <div className="absolute top-6 left-6 w-px h-12 bg-white/15"></div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-20 h-20">
                    <div className="absolute bottom-6 right-6 w-12 h-px bg-white/15"></div>
                    <div className="absolute bottom-6 right-6 w-px h-12 bg-white/15"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ) : (
          <motion.div 
            className="backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden shadow-xl relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="aspect-video w-full bg-gradient-to-br from-white/10 to-transparent rounded-lg p-6 flex items-center justify-center relative overflow-hidden">
              {image ? (
                <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
              ) : (
                <div className="text-white/20 text-center relative z-10 w-full h-full flex flex-col items-center justify-center">
                  <div className="relative w-40 h-40 flex items-center justify-center">
                    <motion.div 
                      className="absolute w-full h-full rounded-full bg-white/5"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {[1, 2, 3].map((i) => (
                      <motion.div 
                        key={i}
                        className="absolute rounded-full border border-white/10"
                        style={{ 
                          width: `${70 - (i-1) * 15}%`, 
                          height: `${70 - (i-1) * 15}%`
                        }}
                        animate={{ 
                          rotate: 360,
                          borderColor: [
                            'rgba(255, 255, 255, 0.1)',
                            'rgba(255, 255, 255, 0.2)',
                            'rgba(255, 255, 255, 0.1)',
                          ],
                        }}
                        transition={{ 
                          duration: 10 + i * 5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    ))}
                    
                    <motion.div
                      className="relative z-20 bg-white/10 rounded-full p-5"
                      animate={{
                        boxShadow: [
                          '0 0 10px rgba(255, 255, 255, 0.1)',
                          '0 0 20px rgba(255, 255, 255, 0.2)',
                          '0 0 10px rgba(255, 255, 255, 0.1)',
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Icon className="w-10 h-10 text-white/60" />
                    </motion.div>
                    
                    {[...Array(6)].map((_, index) => (
                      <motion.div
                        key={index}
                        className="absolute w-1.5 h-1.5 rounded-full bg-white/40"
                        initial={{ 
                          x: Math.random() * 100 - 50, 
                          y: Math.random() * 100 - 50,
                          opacity: 0.3 + Math.random() * 0.4
                        }}
                        animate={{ 
                          x: Math.random() * 100 - 50, 
                          y: Math.random() * 100 - 50,
                          opacity: [0.3, 0.7, 0.3]
                        }}
                        transition={{ 
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                  
                  <p className="mt-6 text-sm font-medium">Interactive {title} Visualization</p>
                </div>
              )}
              
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
              
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-20 h-20">
                  <div className="absolute top-6 left-6 w-12 h-px bg-white/15"></div>
                  <div className="absolute top-6 left-6 w-px h-12 bg-white/15"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-20 h-20">
                  <div className="absolute bottom-6 right-6 w-12 h-px bg-white/15"></div>
                  <div className="absolute bottom-6 right-6 w-px h-12 bg-white/15"></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default FeatureShowcase;
