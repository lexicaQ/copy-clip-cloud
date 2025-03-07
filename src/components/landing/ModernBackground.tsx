
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ModernBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate mouse position relative to the container
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate gradient positions based on mouse movement
  const gradientX = mousePosition.x * 100;
  const gradientY = mousePosition.y * 100;

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
      {/* Primary background gradient that follows mouse */}
      <div 
        className="absolute inset-0 bg-background transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 25%, transparent 50%)`
        }}
      />
      
      {/* Subtle gradient shapes */}
      <div className="absolute inset-0">
        {/* Top gradient */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-[50vh] opacity-20" 
          style={{
            background: `linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)`,
            transform: `translateY(${mousePosition.y * -10}px)`
          }}
        />
        
        {/* Bottom gradient */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[30vh] opacity-10" 
          style={{
            background: `linear-gradient(0deg, rgba(255,255,255,0.05) 0%, transparent 100%)`,
            transform: `translateY(${mousePosition.y * 10}px)`
          }}
        />
      </div>
      
      {/* Floating elements that follow mouse - very subtle */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
          left: `calc(${mousePosition.x * 100}% - 300px)`,
          top: `calc(${mousePosition.y * 100}% - 300px)`,
          transition: "all 2s cubic-bezier(0.2, 0.8, 0.2, 1)"
        }}
      />
      
      {/* Grid Pattern - very subtle */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
          transition: "transform 1s ease-out"
        }}
      />
      
      {/* Floating blurred circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-[0.03] bg-white/20 blur-3xl"
          initial={{ 
            width: `${Math.random() * 40 + 10}rem`, 
            height: `${Math.random() * 40 + 10}rem`,
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%` 
          }}
          animate={{
            x: [0, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Vignette effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
    </div>
  );
};

export default ModernBackground;
