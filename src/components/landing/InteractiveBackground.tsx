
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
      canvas.height = window.innerHeight * 1.5 * dpr; // Larger canvas for scrolling effects
      
      // Scale the drawing context
      ctx.scale(dpr, dpr);
      
      // Set display size
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight * 1.5}px`;
    };
    
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Enhanced mouse tracking with improved interpolation
    let mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined,
      targetX: undefined as number | undefined,
      targetY: undefined as number | undefined,
      radius: 120 // Slightly increased interaction radius
    };

    window.addEventListener("mousemove", function(e) {
      mouse.targetX = e.x;
      mouse.targetY = e.y + window.scrollY; // Adjust for scroll position
    });

    window.addEventListener("mouseout", function() {
      mouse.targetX = undefined;
      mouse.targetY = undefined;
    });

    // Particles with improved scroll sensitivity and visual appeal
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

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 2 + 0.5; // Slightly larger, more visible particles
        this.density = Math.random() * 25 + 1;
        this.opacity = Math.random() * 0.2 + 0.05; // More varied opacity
        this.hue = Math.random() * 20; // Slight color variation
        this.color = `rgba(255, 255, ${255 - this.hue}, ${this.opacity})`;
        this.velocityX = Math.random() * 0.15 - 0.075; // Slightly more movement
        this.velocityY = Math.random() * 0.15 - 0.075;
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
          // Smooth mouse tracking with interpolation
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
            const maxForce = 5; // Maximum force to limit extreme movements
            
            const moveX = forceDirectionX * force * this.density * 0.05;
            const moveY = forceDirectionY * force * this.density * 0.05;
            
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
            const scrollFactor = scrollOffset * 0.015;
            this.y += Math.sin(Date.now() * 0.0005 * this.density) * 0.15 + scrollFactor * 0.03;
            
            // Enhanced random movement with sinusoidal variations
            this.x += this.velocityX + Math.sin(Date.now() * 0.001 + this.density) * 0.1;
            this.y += this.velocityY + Math.cos(Date.now() * 0.001 + this.density) * 0.1;
            
            // Improved edge bounce with damping
            if (this.x < 0 || this.x > window.innerWidth) this.velocityX *= -0.6;
            if (this.y < 0 || this.y > window.innerHeight * 1.5) this.velocityY *= -0.6;
          }
        } else {
          // Enhanced background movement when no mouse interaction
          const scrollInfluence = scrollOffset * 0.003;
          const time = Date.now() * 0.0004;
          
          this.x += Math.sin(time * this.density + scrollInfluence) * 0.15;
          this.y += Math.cos(time * this.density + scrollInfluence) * 0.15;
          
          // Improved return to base position with natural damping
          if (Math.abs(this.x - this.baseX) > 50) {
            this.x -= (this.x - this.baseX) * 0.008;
          }
          if (Math.abs(this.y - this.baseY) > 50) {
            this.y -= (this.y - this.baseY) * 0.008;
          }
        }
        
        this.draw();
      }
    }

    // Generate particles with improved density on high-DPI screens
    let particlesArray: Particle[] = [];
    
    function init() {
      particlesArray = [];
      const dpr = window.devicePixelRatio || 1;
      const baseCount = Math.min(120, window.innerWidth * window.innerHeight / 18000);
      const numberOfParticles = Math.round(baseCount * Math.min(dpr, 2)); // Scale with DPR but cap at 2x
      
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
          const maxDistance = 80 + scrollOffset * 0.08;
          
          if (distance < maxDistance) {
            // Enhanced opacity calculation for more visible connections
            const opacity = (1 - distance / maxDistance) * 0.1;
            ctx!.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx!.lineWidth = 0.5; // Slightly thicker lines for better visibility
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
      
      {/* Enhanced gradient overlays with smoother transitions */}
      <div className="fixed top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent opacity-40" />
      <div className="fixed bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent opacity-40" />
      
      {/* Enhanced ambient elements with better positioning and blending */}
      <motion.div
        style={{ y: translateY1, opacity: opacity1 }}
        className="fixed top-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-white/8 to-white/3 blur-3xl"
      />
      
      <motion.div
        style={{ y: translateY2, scale: scale1 }}
        className="fixed bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-white/5 to-white/2 blur-3xl"
      />
      
      <motion.div
        style={{ y: translateY3 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-15"
      >
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)]" />
      </motion.div>
      
      {/* New dynamic light rays effect */}
      <div className="fixed inset-0 overflow-hidden opacity-10 pointer-events-none">
        <motion.div 
          className="absolute top-0 -left-20 w-40 h-[200vh] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
          animate={{ 
            x: ['-100%', '200%'],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 8,
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
    </div>
  );
};

export default InteractiveBackground;
