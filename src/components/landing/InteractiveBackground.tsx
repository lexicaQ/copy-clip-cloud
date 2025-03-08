
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

    // Enhanced canvas setup with smoother rendering
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * 1.5 * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight * 1.5}px`;
    };
    
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Enhanced mouse tracking with improved smoothness
    let mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined,
      targetX: undefined as number | undefined,
      targetY: undefined as number | undefined,
      radius: 150 // Increased interaction radius
    };

    window.addEventListener("mousemove", function(e) {
      mouse.targetX = e.x;
      mouse.targetY = e.y + window.scrollY;
    });

    window.addEventListener("mouseout", function() {
      mouse.targetX = undefined;
      mouse.targetY = undefined;
    });

    // Improved particle class with better visuals
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
      hue: number;
      type: 'line' | 'circle' | 'square';

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 2 + 0.5;
        this.density = Math.random() * 30 + 1;
        this.opacity = Math.random() * 0.3 + 0.05;
        this.hue = Math.random() * 30; 
        this.color = `rgba(255, 255, ${255 - this.hue}, ${this.opacity})`;
        this.velocityX = Math.random() * 0.2 - 0.1;
        this.velocityY = Math.random() * 0.2 - 0.1;
        
        // Different particle types for visual variety
        const types = ['line', 'circle', 'square'] as const;
        this.type = types[Math.floor(Math.random() * types.length)];
      }

      draw() {
        if (!ctx) return;
        
        switch(this.type) {
          case 'circle':
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            break;
            
          case 'square':
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
            break;
            
          case 'line':
            const angle = Math.random() * Math.PI * 2;
            const length = this.size * 2;
            
            ctx.beginPath();
            ctx.moveTo(
              this.x - Math.cos(angle) * length/2,
              this.y - Math.sin(angle) * length/2
            );
            ctx.lineTo(
              this.x + Math.cos(angle) * length/2,
              this.y + Math.sin(angle) * length/2
            );
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.size / 2;
            ctx.stroke();
            break;
        }
      }

      update(scrollOffset: number) {
        if (mouse.x && mouse.y) {
          // Smooth mouse tracking with better interpolation
          mouse.x = mouse.targetX ?? mouse.x;
          mouse.y = mouse.targetY ?? mouse.y;
          
          // Calculate distance between mouse and particle, adjusted for scroll
          const dx = mouse.x - this.x;
          const dy = (mouse.y - scrollOffset) - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            // Enhanced repel effect with smoother falloff
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            const maxForce = 6; // Increased maximum force
            
            const moveX = forceDirectionX * force * this.density * 0.06;
            const moveY = forceDirectionY * force * this.density * 0.06;
            
            this.x -= Math.min(Math.abs(moveX), maxForce) * Math.sign(moveX);
            this.y -= Math.min(Math.abs(moveY), maxForce) * Math.sign(moveY);
          } else {
            // More natural drift back to original position
            if (Math.abs(this.x - this.baseX) > 0.5) {
              this.x -= (this.x - this.baseX) * 0.02;
            }
            if (Math.abs(this.y - this.baseY) > 0.5) {
              this.y -= (this.y - this.baseY) * 0.02;
            }
            
            // Enhanced scroll effect with more natural movement
            const scrollFactor = scrollOffset * 0.018;
            this.y += Math.sin(Date.now() * 0.0005 * this.density) * 0.15 + scrollFactor * 0.03;
            
            // Enhanced random movement with sinusoidal variations
            this.x += this.velocityX + Math.sin(Date.now() * 0.001 + this.density) * 0.1;
            this.y += this.velocityY + Math.cos(Date.now() * 0.001 + this.density) * 0.1;
            
            // Improved edge handling
            if (this.x < 0 || this.x > window.innerWidth) this.velocityX *= -0.6;
            if (this.y < 0 || this.y > window.innerHeight * 1.5) this.velocityY *= -0.6;
          }
        } else {
          // Enhanced background movement when no mouse interaction
          const scrollInfluence = scrollOffset * 0.004;
          const time = Date.now() * 0.0004;
          
          this.x += Math.sin(time * this.density + scrollInfluence) * 0.15;
          this.y += Math.cos(time * this.density + scrollInfluence) * 0.15;
          
          // Improved return to base position
          if (Math.abs(this.x - this.baseX) > 50) {
            this.x -= (this.x - this.baseX) * 0.01;
          }
          if (Math.abs(this.y - this.baseY) > 50) {
            this.y -= (this.y - this.baseY) * 0.01;
          }
        }
        
        this.draw();
      }
    }

    // Generate particles with better distribution
    let particlesArray: Particle[] = [];
    
    function init() {
      particlesArray = [];
      const dpr = window.devicePixelRatio || 1;
      const baseCount = Math.min(140, window.innerWidth * window.innerHeight / 15000);
      const numberOfParticles = Math.round(baseCount * Math.min(dpr, 2));
      
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 1.5);
        particlesArray.push(new Particle(x, y));
      }
    }

    function connectParticles(scrollOffset: number) {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Enhanced connection distance with scroll effects
          const maxDistance = 90 + scrollOffset * 0.1;
          
          if (distance < maxDistance) {
            // Enhanced opacity calculation for more subtle connections
            const opacity = (1 - distance / maxDistance) * 0.07;
            
            // Use gradient lines for more visual appeal
            const gradient = ctx!.createLinearGradient(
              particlesArray[a].x, 
              particlesArray[a].y,
              particlesArray[b].x,
              particlesArray[b].y
            );
            
            gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.5})`);
            gradient.addColorStop(0.5, `rgba(255, 255, 255, ${opacity})`);
            gradient.addColorStop(1, `rgba(255, 255, 255, ${opacity * 0.5})`);
            
            ctx!.strokeStyle = gradient;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx!.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx!.stroke();
          }
        }
      }
    }

    // Animation loop with improved scroll awareness
    let scrollOffset = 0;
    window.addEventListener('scroll', () => {
      scrollOffset = window.scrollY;
    });

    function animate() {
      requestAnimationFrame(animate);
      ctx!.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
      
      // Add subtle background gradient
      const bgGradient = ctx!.createLinearGradient(0, 0, 0, canvas.height / (window.devicePixelRatio || 1));
      bgGradient.addColorStop(0, 'rgba(0,0,0,0)');
      bgGradient.addColorStop(1, 'rgba(20,20,40,0.03)');
      ctx!.fillStyle = bgGradient;
      ctx!.fillRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
      
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
      
      {/* Enhanced gradient overlays */}
      <div className="fixed top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent opacity-50" />
      <div className="fixed bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent opacity-50" />
      
      {/* Enhanced ambient elements */}
      <motion.div
        style={{ y: translateY1, opacity: opacity1 }}
        className="fixed top-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-white/5 to-white/2 blur-3xl"
      />
      
      <motion.div
        style={{ y: translateY2, scale: scale1 }}
        className="fixed bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-white/5 to-white/2 blur-3xl"
      />
      
      <motion.div
        style={{ y: translateY3 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-15"
      >
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
      </motion.div>
      
      {/* Dynamic light rays effect */}
      <div className="fixed inset-0 overflow-hidden opacity-10 pointer-events-none">
        <motion.div 
          className="absolute top-0 -left-20 w-40 h-[200vh] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
          animate={{ 
            x: ['-100%', '200%'],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 5
          }}
        />
        
        <motion.div 
          className="absolute top-0 -right-20 w-40 h-[200vh] bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          animate={{ 
            x: ['200%', '-100%'],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 3,
            delay: 2
          }}
        />
      </div>
      
      {/* New aurora effect */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute w-full h-full opacity-20"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(75,0,130,0.1), transparent 60%)",
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
};

export default InteractiveBackground;
