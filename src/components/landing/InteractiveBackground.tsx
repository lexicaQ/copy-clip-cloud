
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const translateY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const translateY2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateY3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 0.5, 0.3]);
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  
  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
      {/* Modern gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
      
      {/* Animated aurora elements */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full opacity-30"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(45, 55, 72, 0.3) 0%, rgba(17, 24, 39, 0) 70%)',
          backgroundSize: '100% 100%'
        }}
      />
      
      {/* Animated nebula elements */}
      <motion.div
        style={{ y: translateY1, opacity: opacity1 }}
        className="fixed top-1/4 right-1/4 w-[800px] h-[800px] rounded-full bg-purple-500/5 blur-[120px]"
      />
      
      <motion.div
        style={{ y: translateY2, scale: scale1 }}
        className="fixed bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[100px]"
      />
      
      <motion.div
        style={{ y: translateY3 }}
        className="fixed top-1/3 left-2/3 w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-[80px]"
      />

      {/* Floating particles */}
      <div className="fixed inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [
                Math.random() * 10,
                Math.random() * -20,
                Math.random() * 10
              ],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Subtle grid overlay */}
      <div 
        className="fixed inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Vignette effect */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_80%)] pointer-events-none" />
    </div>
  );
};

export default InteractiveBackground;
