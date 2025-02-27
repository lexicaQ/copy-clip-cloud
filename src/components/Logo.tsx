
import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

const Logo = ({ size = "md", animated = true }: LogoProps) => {
  const sizes = {
    sm: { container: "h-12 w-12", icon: "w-6 h-6" },
    md: { container: "h-16 w-16", icon: "w-8 h-8" },
    lg: { container: "h-24 w-24", icon: "w-12 h-12" },
  };

  return (
    <motion.div
      className={`relative ${sizes[size].container} rounded-2xl overflow-hidden`}
      initial={animated ? { scale: 0.8, opacity: 0 } : false}
      animate={animated ? { scale: 1, opacity: 1 } : false}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20, 
        duration: 0.5 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg border border-white/10 rounded-2xl" />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={`${sizes[size].icon} text-white`}
        >
          <path 
            d="M12 2L2 7L12 12L22 7L12 2Z" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M2 17L12 22L22 17" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M2 12L12 17L22 12" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default Logo;
