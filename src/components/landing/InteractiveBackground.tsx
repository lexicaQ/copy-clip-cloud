
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const translateY1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const translateY2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const translateY3 = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.6, 0.4]);
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Enhanced canvas setup with higher resolution rendering
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * 1.8 * dpr; // Increased canvas height
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight * 1.8}px`;
    };
    
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Enhanced mouse tracking with smoother animation
    let mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined,
      targetX: undefined as number | undefined,
      targetY: undefined as number | undefined,
      lerpFactor: 0.1, // Factor for smoother mouse movement
      radius: 180 // Increased interaction radius
    };

    window.addEventListener("mousemove", function(e) {
      mouse.targetX = e.x;
      mouse.targetY = e.y + window.scrollY;
    });

    window.addEventListener("mouseout", function() {
      mouse.targetX = undefined;
      mouse.targetY = undefined;
    });

    // Improved particle class with more dynamic visuals
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
      type: 'line' | 'circle' | 'square' | 'triangle' | 'diamond';
      glowing: boolean;
      glowIntensity: number;
      rotationAngle: number;
      rotationSpeed: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 3 + 0.5; // Increased size range
        this.density = Math.random() * 35 + 1;
        this.opacity = Math.random() * 0.4 + 0.1; // Higher base opacity
        this.hue = Math.random() * 40; 
        this.color = `rgba(255, 255, ${255 - this.hue}, ${this.opacity})`;
        this.velocityX = Math.random() * 0.3 - 0.15;
        this.velocityY = Math.random() * 0.3 - 0.15;
        this.glowing = Math.random() > 0.8; // Some particles will glow
        this.glowIntensity = Math.random() * 0.5;
        this.rotationAngle = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        
        // More diverse particle types for visual variety
        const types = ['line', 'circle', 'square', 'triangle', 'diamond'] as const;
        this.type = types[Math.floor(Math.random() * types.length)];
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotationAngle);
        
        // Add glow effect to some particles
        if (this.glowing) {
          ctx.shadowBlur = 10 * this.glowIntensity;
          ctx.shadowColor = this.color;
        }
        
        switch(this.type) {
          case 'circle':
            ctx.beginPath();
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            break;
            
          case 'square':
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size);
            break;
            
          case 'line':
            const length = this.size * 3;
            const angle = Math.random() * Math.PI * 2;
            
            ctx.beginPath();
            ctx.moveTo(-length/2, 0);
            ctx.lineTo(length/2, 0);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.size / 2;
            ctx.stroke();
            break;
            
          case 'triangle':
            const sideLength = this.size * 1.5;
            ctx.beginPath();
            ctx.moveTo(0, -sideLength/Math.sqrt(3));
            ctx.lineTo(-sideLength/2, sideLength/(2*Math.sqrt(3)));
            ctx.lineTo(sideLength/2, sideLength/(2*Math.sqrt(3)));
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
            break;
            
          case 'diamond':
            ctx.beginPath();
            ctx.moveTo(0, -this.size);
            ctx.lineTo(this.size, 0);
            ctx.lineTo(0, this.size);
            ctx.lineTo(-this.size, 0);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
            break;
        }
        
        ctx.restore();
      }

      update(scrollOffset: number) {
        // Update rotation for more dynamic movement
        this.rotationAngle += this.rotationSpeed;
        
        if (mouse.x && mouse.y) {
          // Smooth mouse tracking with lerp interpolation
          mouse.x = mouse.x !== undefined ? mouse.x + (mouse.targetX! - mouse.x) * mouse.lerpFactor : mouse.targetX;
          mouse.y = mouse.y !== undefined ? mouse.y + (mouse.targetY! - mouse.y) * mouse.lerpFactor : mouse.targetY;
          
          // Calculate distance between mouse and particle, adjusted for scroll
          const dx = mouse.x! - this.x;
          const dy = (mouse.y! - scrollOffset) - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            // Enhanced repel effect with more organic feel
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            const maxForce = 7; // Increased maximum force
            
            const moveX = forceDirectionX * force * this.density * 0.08;
            const moveY = forceDirectionY * force * this.density * 0.08;
            
            // Add some randomness to the movement for more organic feel
            this.x -= Math.min(Math.abs(moveX), maxForce) * Math.sign(moveX) * (1 + Math.random() * 0.1);
            this.y -= Math.min(Math.abs(moveY), maxForce) * Math.sign(moveY) * (1 + Math.random() * 0.1);
          } else {
            // More organic drift back to original position
            if (Math.abs(this.x - this.baseX) > 0.5) {
              this.x -= (this.x - this.baseX) * 0.03;
            }
            if (Math.abs(this.y - this.baseY) > 0.5) {
              this.y -= (this.y - this.baseY) * 0.03;
            }
            
            // Enhanced scroll effect with more natural movement
            const scrollFactor = scrollOffset * 0.022;
            const time = Date.now() * 0.0006;
            
            // More complex movement patterns
            this.y += Math.sin(time * this.density) * 0.2 + scrollFactor * 0.04;
            this.x += this.velocityX + Math.sin(time * this.density * 1.3) * 0.15;
            
            // Improved edge handling with bounce effect
            if (this.x < 0 || this.x > window.innerWidth) {
              this.velocityX *= -0.7;
              // Add a small random nudge for variety
              this.velocityX += (Math.random() - 0.5) * 0.02;
            }
            if (this.y < 0 || this.y > window.innerHeight * 1.8) {
              this.velocityY *= -0.7;
              this.velocityY += (Math.random() - 0.5) * 0.02;
            }
          }
        } else {
          // Enhanced background movement when no mouse interaction
          const scrollInfluence = scrollOffset * 0.005;
          const time = Date.now() * 0.0005;
          
          // More complex motion patterns
          this.x += Math.sin(time * this.density + scrollInfluence) * 0.2 + this.velocityX * 0.3;
          this.y += Math.cos(time * this.density * 1.2 + scrollInfluence) * 0.2 + this.velocityY * 0.3;
          
          // Periodically update velocity for more dynamic movement
          if (Math.random() < 0.01) {
            this.velocityX += (Math.random() - 0.5) * 0.03;
            this.velocityY += (Math.random() - 0.5) * 0.03;
          }
          
          // Dampen velocity to prevent extreme movement
          this.velocityX *= 0.99;
          this.velocityY *= 0.99;
          
          // Improved return to base position
          if (Math.abs(this.x - this.baseX) > 60) {
            this.x -= (this.x - this.baseX) * 0.01;
          }
          if (Math.abs(this.y - this.baseY) > 60) {
            this.y -= (this.y - this.baseY) * 0.01;
          }
        }
        
        // Occasionally change opacity for twinkling effect
        if (Math.random() < 0.01) {
          this.opacity = Math.random() * 0.4 + 0.1;
          this.color = `rgba(255, 255, ${255 - this.hue}, ${this.opacity})`;
          
          // Occasionally update glow intensity
          if (this.glowing && Math.random() < 0.05) {
            this.glowIntensity = Math.random() * 0.5;
          }
        }
        
        this.draw();
      }
    }

    // Generate particles with more optimal distribution
    let particlesArray: Particle[] = [];
    
    function init() {
      particlesArray = [];
      const dpr = window.devicePixelRatio || 1;
      const baseCount = Math.min(160, window.innerWidth * window.innerHeight / 14000);
      const numberOfParticles = Math.round(baseCount * Math.min(dpr, 2));
      
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 1.8);
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
          const maxDistance = 100 + scrollOffset * 0.15;
          
          if (distance < maxDistance) {
            // Enhanced opacity calculation for more subtle connections
            const opacity = (1 - distance / maxDistance) * 0.08;
            
            // Use dynamic gradient lines for more visual appeal
            const gradient = ctx!.createLinearGradient(
              particlesArray[a].x, 
              particlesArray[a].y,
              particlesArray[b].x,
              particlesArray[b].y
            );
            
            // More vibrant color connections
            gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.6})`);
            gradient.addColorStop(0.5, `rgba(220, 240, 255, ${opacity * 1.2})`);
            gradient.addColorStop(1, `rgba(255, 255, 255, ${opacity * 0.6})`);
            
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
      
      // Add enhanced background gradient
      const bgGradient = ctx!.createLinearGradient(0, 0, 0, canvas.height / (window.devicePixelRatio || 1));
      bgGradient.addColorStop(0, 'rgba(0,0,0,0)');
      bgGradient.addColorStop(0.5, 'rgba(15,20,50,0.02)');
      bgGradient.addColorStop(1, 'rgba(20,20,40,0.04)');
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
      <div className="fixed top-0 left-0 right-0 h-48 bg-gradient-to-b from-black to-transparent opacity-60" />
      <div className="fixed bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent opacity-60" />
      
      {/* Enhanced ambient elements with better visual effects */}
      <motion.div
        style={{ y: translateY1, opacity: opacity1 }}
        className="fixed top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-white/5 to-white/2 blur-3xl"
      />
      
      <motion.div
        style={{ y: translateY2, scale: scale1 }}
        className="fixed bottom-1/4 left-1/4 w-[32rem] h-[32rem] rounded-full bg-gradient-to-r from-white/5 to-white/2 blur-3xl"
      />
      
      <motion.div
        style={{ y: translateY3 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-15"
      >
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12)_0%,_transparent_70%)]" />
      </motion.div>
      
      {/* Enhanced dynamic light rays with more subtle effect */}
      <div className="fixed inset-0 overflow-hidden opacity-15 pointer-events-none">
        <motion.div 
          className="absolute top-0 -left-20 w-48 h-[200vh] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
          animate={{ 
            x: ['-100%', '200%'],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 6
          }}
        />
        
        <motion.div 
          className="absolute top-0 -right-20 w-48 h-[200vh] bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
          animate={{ 
            x: ['200%', '-100%'],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 14,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 4,
            delay: 2.5
          }}
        />
        
        {/* Add a third light ray for more depth */}
        <motion.div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-60 h-[200vh] bg-gradient-to-r from-transparent via-white/25 to-transparent"
          animate={{ 
            opacity: [0, 0.4, 0],
            scaleX: [0.7, 1.3, 0.7]
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 3,
            delay: 5
          }}
        />
      </div>
      
      {/* Enhanced aurora effect with more vibrant colors */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute w-full h-full opacity-20"
          style={{
            background: "radial-gradient(circle at 30% 50%, rgba(100,50,180,0.13), transparent 60%)",
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: ['-5%', '5%', '-5%'],
          }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        
        {/* Second aurora blob for more dynamic effect */}
        <motion.div
          className="absolute w-full h-full opacity-15"
          style={{
            background: "radial-gradient(circle at 70% 40%, rgba(50,100,180,0.13), transparent 60%)",
            filter: "blur(70px)",
          }}
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.15, 0.25, 0.15],
            x: ['5%', '-5%', '5%'],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 2
          }}
        />
      </div>
    </div>
  );
};

export default InteractiveBackground;
