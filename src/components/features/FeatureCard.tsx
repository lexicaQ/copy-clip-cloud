
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Timer, Ban } from "lucide-react";
import { ComingSoon } from "@/components/ui/coming-soon";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay?: number;
  color?: string;
  comingSoon?: boolean;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  delay = 0, 
  color = "from-white/10 to-white/5",
  comingSoon = false
}: FeatureCardProps) => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay } }
  };

  return (
    <motion.div
      className="backdrop-blur-xl bg-white/[0.03] border border-white/10 p-8 rounded-xl h-full relative overflow-hidden group hover:border-white/20 transition-all duration-300"
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      whileHover={{ y: -5, rotateY: 5, rotateX: 5 }}
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* 3D depth layers */}
      <div className="absolute inset-0 bg-white/[0.01] transform translate-z-0"></div>
      <div className="absolute inset-1 bg-white/[0.01] transform translate-z-1"></div>
      <div className="absolute inset-2 bg-white/[0.01] transform translate-z-2"></div>
      
      {/* Metro-style corner decoration */}
      <div className="absolute top-0 left-0 w-16 h-px bg-white/10 group-hover:w-20 transition-all duration-300"></div>
      <div className="absolute top-0 left-0 w-px h-16 bg-white/10 group-hover:h-20 transition-all duration-300"></div>
      <div className="absolute bottom-0 right-0 w-16 h-px bg-white/10 group-hover:w-20 transition-all duration-300"></div>
      <div className="absolute bottom-0 right-0 w-px h-16 bg-white/10 group-hover:h-20 transition-all duration-300"></div>
      
      {comingSoon && (
        <ComingSoon className="absolute top-4 right-4" />
      )}
      
      <div className="relative z-10">
        <motion.div 
          className="w-14 h-14 rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          whileHover={{ 
            rotateY: 180,
            transition: { duration: 0.6 }
          }}
        >
          <Icon className="w-7 h-7" />
        </motion.div>
        
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-400 leading-relaxed mb-6">{description}</p>
        
        {comingSoon ? (
          <div className="flex items-center text-sm font-medium text-white/50 cursor-not-allowed">
            <Ban className="w-4 h-4 mr-1.5" />
            Not available yet
          </div>
        ) : (
          <motion.div 
            className="flex items-center text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer group/link"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Learn more 
            <motion.div
              className="ml-1"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </motion.div>
          </motion.div>
        )}
      </div>
      
      {/* Background pulse effect */}
      <motion.div 
        className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0, 0.05, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating particles (subtle) */}
      <motion.div 
        className="absolute top-10 right-10 w-1 h-1 rounded-full bg-white/40"
        animate={{
          y: [0, -10, 0],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: Math.random() * 2
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-1 h-1 rounded-full bg-white/30"
        animate={{
          y: [0, -15, 0],
          opacity: [0, 0.7, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: Math.random() * 2
        }}
      />
    </motion.div>
  );
};

export default FeatureCard;
