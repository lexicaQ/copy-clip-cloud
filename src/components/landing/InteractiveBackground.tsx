
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
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Canvas setup
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 1.5; // Larger canvas for scrolling effects
    };
    
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Mouse tracking
    let mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined,
      radius: 100 // Smaller, more subtle interaction radius
    };

    window.addEventListener("mousemove", function(e) {
      mouse.x = e.x;
      mouse.y = e.y + window.scrollY; // Adjust for scroll position
    });

    window.addEventListener("mouseout", function() {
      mouse.x = undefined;
      mouse.y = undefined;
    });

    // Particles with scroll sensitivity
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
        this.size = Math.random() * 1.5 + 0.3; // Smaller, more subtle particles
        this.density = Math.random() * 20 + 1;
        this.opacity = Math.random() * 0.15 + 0.05; // More subtle opacity
        this.color = `rgba(255, 255, 255, ${this.opacity})`;
        this.velocityX = Math.random() * 0.1 - 0.05; // Slower movement
        this.velocityY = Math.random() * 0.1 - 0.05;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update(scrollOffset: number) {
        if (mouse.x && mouse.y) {
          // Calculate distance between mouse and particle, adjusted for scroll
          const dx = mouse.x - this.x;
          const dy = (mouse.y - scrollOffset) - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            // Subtle repel effect
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            
            this.x -= forceDirectionX * force * this.density * 0.03;
            this.y -= forceDirectionY * force * this.density * 0.03;
          } else {
            // Very gentle drift back to original position
            if (Math.abs(this.x - this.baseX) > 0.5) {
              this.x -= (this.x - this.baseX) * 0.01;
            }
            if (Math.abs(this.y - this.baseY) > 0.5) {
              this.y -= (this.y - this.baseY) * 0.01;
            }
            
            // Slightly affected by scroll position
            const scrollFactor = scrollOffset * 0.01;
            this.y += Math.sin(Date.now() * 0.0005 * this.density) * 0.1 + scrollFactor * 0.02;
            
            // Very subtle random movement
            this.x += this.velocityX;
            this.y += this.velocityY;
            
            // Gentle edge bounce
            if (this.x < 0 || this.x > canvas.width) this.velocityX *= -0.5;
            if (this.y < 0 || this.y > canvas.height) this.velocityY *= -0.5;
          }
        } else {
          // No mouse interaction, extremely subtle floating effect with scroll influence
          const scrollInfluence = scrollOffset * 0.002;
          this.x += Math.sin(Date.now() * 0.0003 * this.density + scrollInfluence) * 0.1;
          this.y += Math.cos(Date.now() * 0.0003 * this.density + scrollInfluence) * 0.1;
          
          // Very gradually return to base position
          if (Math.abs(this.x - this.baseX) > 50) {
            this.x -= (this.x - this.baseX) * 0.005;
          }
          if (Math.abs(this.y - this.baseY) > 50) {
            this.y -= (this.y - this.baseY) * 0.005;
          }
        }
        
        this.draw();
      }
    }

    // Generate particles
    let particlesArray: Particle[] = [];
    
    function init() {
      particlesArray = [];
      const numberOfParticles = Math.min(100, window.innerWidth * window.innerHeight / 20000);
      
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
      }
    }

    function connectParticles(scrollOffset: number) {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const maxDistance = 80 + scrollOffset * 0.05; // Connection distance changes with scroll
          
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.08; // More subtle connections
            ctx!.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx!.lineWidth = 0.3; // Thinner lines
            ctx!.beginPath();
            ctx!.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx!.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx!.stroke();
          }
        }
      }
    }

    // Animation loop with scroll awareness
    let scrollOffset = 0;
    window.addEventListener('scroll', () => {
      scrollOffset = window.scrollY;
    });

    function animate() {
      requestAnimationFrame(animate);
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesArray.forEach(particle => particle.update(scrollOffset));
      connectParticles(scrollOffset);
    }

    init();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", () => {});
      window.removeEventListener("mouseout", () => {});
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full" />
      
      {/* Subtle gradient overlays */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent opacity-30" />
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent opacity-30" />
      
      {/* Scroll-reactive ambient elements */}
      <motion.div
        style={{ y: translateY1, opacity: opacity1 }}
        className="fixed top-1/4 right-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl"
      />
      
      <motion.div
        style={{ y: translateY2, scale: scale1 }}
        className="fixed bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-white/3 blur-3xl"
      />
      
      <motion.div
        style={{ y: translateY3 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10"
      >
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
      </motion.div>
    </div>
  );
};

export default InteractiveBackground;
