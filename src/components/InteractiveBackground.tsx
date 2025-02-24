
import { motion } from "framer-motion";

const InteractiveBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <motion.div 
        animate={{ 
          background: [
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 0%, transparent 70%)",
            "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 70%)",
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 0%, transparent 70%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
    </div>
  );
};

export default InteractiveBackground;
