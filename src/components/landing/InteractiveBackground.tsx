
import React, { useEffect, useRef, useState } from "react";
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
  
  // State for mouse position to create interactive effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to the window size
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
      {/* Modern gradient background - pure black */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" 
      />
      
      {/* Modern aurora effect with subtle animations - monochrome */}
      <motion.div
        className="fixed inset-0 opacity-30"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(10, 15, 25, 0) 70%)',
          backgroundSize: '120% 120%'
        }}
      />
      
      {/* Monochrome nebula elements that follow mouse movement */}
      <motion.div
        style={{ 
          y: translateY1, 
          opacity: opacity1,
          x: mousePosition.x * -20,
        }}
        className="fixed top-1/4 right-1/4 w-[800px] h-[800px] rounded-full bg-white/5 blur-[120px]"
      />
      
      <motion.div
        style={{ 
          y: translateY2, 
          scale: scale1,
          x: mousePosition.x * 15,
          translateY: mousePosition.y * 20,
        }}
        className="fixed bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-white/5 blur-[100px]"
      />
      
      <motion.div
        style={{ 
          y: translateY3,
          x: mousePosition.x * -25,
        }}
        className="fixed top-1/3 left-2/3 w-[500px] h-[500px] rounded-full bg-white/5 blur-[80px]"
      />

      {/* Elegant floating particles with enhanced motion */}
      <div className="fixed inset-0">
        {Array.from({ length: 25 }).map((_, i) => {
          // Create a varied set of particles for visual interest
          const size = Math.random() * 1.5 + 0.5;
          const opacity = Math.random() * 0.5 + 0.1;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: `rgba(255, 255, 255, ${opacity})`,
                boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, ${opacity / 2})`,
              }}
              animate={{
                y: [
                  Math.random() * 30 - 15,
                  Math.random() * 30 - 15,
                  Math.random() * 30 - 15
                ],
                x: [
                  Math.random() * 30 - 15,
                  Math.random() * 30 - 15,
                  Math.random() * 30 - 15
                ],
                opacity: [opacity, opacity * 1.5, opacity],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>
      
      {/* Subtle geometric patterns */}
      <div className="fixed inset-0 opacity-5">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            backgroundPosition: `${mousePosition.x * 10}px ${mousePosition.y * 10}px`
          }}
        />
      </div>
      
      {/* Subtle radial gradient overlay for depth */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
    </div>
  );
};

export default InteractiveBackground;
