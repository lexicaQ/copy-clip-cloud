
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Timer, Ban, ChevronRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay?: number;
  color?: string;
  comingSoon?: boolean;
  detailedDescription?: string;
  benefits?: string[];
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  delay = 0, 
  color = "from-white/10 to-white/5",
  comingSoon = false,
  detailedDescription,
  benefits = []
}: FeatureCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
    hover: { 
      y: -8,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };
  
  const expandVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: "auto", opacity: 1, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      className={`backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-xl h-full relative overflow-hidden transition-all duration-500 ${isExpanded ? 'shadow-2xl' : ''}`}
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      whileHover="hover"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Modern top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>
      
      {/* Card content */}
      <div className="p-8 relative z-10">
        <div className="w-16 h-16 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
          <Icon className="w-8 h-8" />
        </div>
        
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">{title}</h3>
        <p className="text-gray-300 leading-relaxed mb-6">{description}</p>
        
        {/* Coming soon badge */}
        {comingSoon && (
          <div className="absolute top-4 right-4 flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/70 backdrop-blur-md">
            <Timer className="w-3 h-3 mr-1.5" />
            <span>Coming Soon</span>
          </div>
        )}
        
        {/* Expand/collapse button */}
        {(detailedDescription || benefits.length > 0) && (
          <motion.button 
            className="flex items-center text-sm font-medium text-blue-300 hover:text-white transition-colors cursor-pointer group/link"
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {isExpanded ? "Show less" : "Learn more"} 
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronRight className="w-4 h-4 ml-1.5" />
            </motion.div>
          </motion.button>
        )}
        
        {/* Expanded content */}
        {(detailedDescription || benefits.length > 0) && (
          <motion.div
            className="mt-4 overflow-hidden"
            variants={expandVariants}
            initial="collapsed"
            animate={isExpanded ? "expanded" : "collapsed"}
          >
            {detailedDescription && (
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{detailedDescription}</p>
            )}
            
            {benefits.length > 0 && (
              <div className="space-y-2 mt-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Key Benefits:</h4>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-gray-400 text-sm">
                      <div className="mr-3 mt-1 text-blue-400">•</div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
        
        {/* Action link for non-coming-soon features */}
        {!comingSoon && !detailedDescription && !benefits.length && (
          <motion.div 
            className="flex items-center text-sm font-medium text-blue-300 hover:text-white transition-colors cursor-pointer group/link"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Learn more 
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/link:translate-x-1" />
          </motion.div>
        )}
      </div>
      
      {/* Background pulse effect */}
      <motion.div 
        className="absolute inset-0 bg-white/3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{ 
          scale: [1, 1.03, 1],
          opacity: [0, 0.05, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default FeatureCard;
