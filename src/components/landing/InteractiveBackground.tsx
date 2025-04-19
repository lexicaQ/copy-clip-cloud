
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);
    
    // Create monochrome particles (no colorful accents)
    const particles: Particle[] = [];
    const particleCount = Math.min(window.innerWidth / 8, 100);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      });
    }
    
    // Create line connections data structure
    const connections: Connection[] = [];
    
    // Handle mouse movement
    let mouseX = 0;
    let mouseY = 0;
    let mouseRadius = 150;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        // Mouse repulsion (subtle effect)
        const dx = particle.x - mouseX;
        const dy = particle.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < mouseRadius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouseRadius - dist) / mouseRadius;
          
          particle.x += Math.cos(angle) * force * 0.5;
          particle.y += Math.sin(angle) * force * 0.5;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });
      
      // Find and draw connections
      connections.length = 0;
      
      // Only calculate connections for particles within a reasonable distance
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            connections.push({
              pointA: particles[i],
              pointB: particles[j],
              opacity: 0.15 * (1 - distance / 120),
            });
          }
        }
      }
      
      // Draw connections
      connections.forEach(connection => {
        ctx.beginPath();
        ctx.moveTo(connection.pointA.x, connection.pointA.y);
        ctx.lineTo(connection.pointB.x, connection.pointB.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${connection.opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]"></div>
      
      {/* Canvas for particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
      
      {/* Add some subtle grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff,#ffffff_1px,transparent_1px)] bg-[size:40px_100%]"></div>
        <div className="h-full w-full bg-[linear-gradient(to_bottom,#ffffff,#ffffff_1px,transparent_1px)] bg-[size:100%_40px]"></div>
      </div>
      
      {/* Horizontal gradient lines top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </div>
  );
};

// Types
interface Particle {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speedX: number;
  speedY: number;
}

interface Connection {
  pointA: Particle;
  pointB: Particle;
  opacity: number;
}

export default InteractiveBackground;
