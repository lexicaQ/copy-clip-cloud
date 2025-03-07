
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Canvas setup
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Mouse tracking
    let mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined,
      radius: 150
    };

    window.addEventListener("mousemove", function(e) {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    window.addEventListener("mouseout", function() {
      mouse.x = undefined;
      mouse.y = undefined;
    });

    // Particle system
    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;
      opacity: number;
      velocityX: number;
      velocityY: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 2 + 0.1;
        this.density = Math.random() * 30 + 1;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.color = `rgba(255, 255, 255, ${this.opacity})`;
        this.velocityX = Math.random() * 0.2 - 0.1;
        this.velocityY = Math.random() * 0.2 - 0.1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (mouse.x && mouse.y) {
          // Calculate distance between mouse and particle
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            // Repel particles away from mouse
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            
            // Move particle away from mouse
            this.x -= forceDirectionX * force * this.density * 0.1;
            this.y -= forceDirectionY * force * this.density * 0.1;
          } else {
            // Drift back to original position, but with a slight random movement
            if (Math.abs(this.x - this.baseX) > 0.5) {
              this.x -= (this.x - this.baseX) * 0.02;
            }
            if (Math.abs(this.y - this.baseY) > 0.5) {
              this.y -= (this.y - this.baseY) * 0.02;
            }
            
            // Add a slight random movement
            this.x += this.velocityX;
            this.y += this.velocityY;
            
            // Bounce off edges with slight damping
            if (this.x < 0 || this.x > canvas.width) this.velocityX *= -0.9;
            if (this.y < 0 || this.y > canvas.height) this.velocityY *= -0.9;
          }
        } else {
          // No mouse interaction, gentle floating effect
          this.x += Math.sin(Date.now() * 0.001 * this.density * 0.05) * 0.2;
          this.y += Math.cos(Date.now() * 0.001 * this.density * 0.05) * 0.2;
          
          // Gradually return to base position
          if (Math.abs(this.x - this.baseX) > 100) {
            this.x -= (this.x - this.baseX) * 0.01;
          }
          if (Math.abs(this.y - this.baseY) > 100) {
            this.y -= (this.y - this.baseY) * 0.01;
          }
        }
        
        this.draw();
      }
    }

    // Generate particles
    let particlesArray: Particle[] = [];
    
    function init() {
      particlesArray = [];
      const numberOfParticles = Math.min(150, window.innerWidth * window.innerHeight / 15000);
      
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
      }
    }

    function connectParticles() {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const maxDistance = 150;
          
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.15;
            ctx!.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx!.lineWidth = 0.5;
            ctx!.beginPath();
            ctx!.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx!.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx!.stroke();
          }
        }
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesArray.forEach(particle => particle.update());
      connectParticles();
    }

    init();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", () => {});
      window.removeEventListener("mouseout", () => {});
    };
  }, []);

  // Gradient overlays for depth
  const gradientElements = [
    { position: "top", gradient: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 50%)" },
    { position: "bottom", gradient: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)" },
    { position: "left", gradient: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 20%)" },
    { position: "right", gradient: "linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 20%)" }
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      {/* Gradient overlays for visual depth */}
      {gradientElements.map((elem, index) => (
        <div 
          key={index}
          className={`absolute ${elem.position}-0 left-0 right-0 h-32 opacity-50`}
          style={{ background: elem.gradient }}
        />
      ))}
      
      {/* Radial center glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(120,120,255,0.15)_0%,_transparent_70%)]" />
      </div>
      
      {/* Ambient motion elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-indigo-500/5 blur-3xl"
        animate={{
          x: [0, 30, 0, -30, 0],
          y: [0, -30, 0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"
        animate={{
          x: [0, -40, 0, 40, 0],
          y: [0, 40, 0, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default InteractiveBackground;
