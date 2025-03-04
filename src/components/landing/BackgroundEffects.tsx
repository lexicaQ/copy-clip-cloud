
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const BackgroundEffects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    updateCanvasSize();
    
    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Create particles
    const particles: {
      x: number, 
      y: number, 
      size: number, 
      speedX: number, 
      speedY: number, 
      opacity: number,
      color: string
    }[] = [];
    
    const particleCount = 70;
    const colors = ['#8B5CF6', '#EC4899', '#3B82F6', '#10B981', '#F59E0B'];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Reset position if particle moves off-screen
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.x = Math.random() * canvas.width;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.y = Math.random() * canvas.height;
        }
        
        // Mouse interaction - particles move away from cursor
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) / 1000;
          particle.speedX -= Math.cos(angle) * force;
          particle.speedY -= Math.sin(angle) * force;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle resize
    window.addEventListener('resize', updateCanvasSize);
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* Colorful gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.15)_0%,_transparent_70%)]" />
      
      {/* Ambient light effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-pink-900/20" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-20 left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/10 to-pink-500/10 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute top-[40%] right-[30%] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Dark overlay for better content contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
    </div>
  );
};

export default BackgroundEffects;
