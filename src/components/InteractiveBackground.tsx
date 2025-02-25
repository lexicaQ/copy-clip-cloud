
import { motion } from "framer-motion";

const InteractiveBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
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
      
      {/* Animated waves */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 left-0 w-[200%] h-[20px] opacity-20"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2) ${50 + i * 10}%, transparent)`,
            transform: `translateY(${i * 10}px)`,
          }}
          animate={{
            x: ["-100%", "0%"],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      <div className="absolute top-0 left-0 w-full h-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
    </div>
  );
};

export default InteractiveBackground;
