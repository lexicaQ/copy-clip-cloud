
import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
}

const LoadingSpinner = ({ size = "md" }: LoadingSpinnerProps) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div className={`relative ${sizes[size]} flex items-center justify-center`}>
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-white/30 to-white/5"
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      <div className="absolute inset-2 rounded-full bg-black" />
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-white"
        style={{ top: "10%", left: "50%", marginLeft: "-2px" }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
