
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
      radius: 150 // Interaction radius
    };

    window.addEventListener("mousemove", function(e) {
      mouse.x = e.x;
      mouse.y = e.y + window.scrollY; // Adjust for scroll position
    });

    window.addEventListener("mouseout", function() {
      mouse.x = undefined;
      mouse.y = undefined;
    });

    // Modern floating elements instead of particles
    class FloatingElement {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      opacity: number;
      velocityX: number;
      velocityY: number;
      color: string;
      shape: string;
      rotation: number;
      rotationSpeed: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 15 + 5; // Larger, more visible elements
        this.density = Math.random() * 10 + 1;
        this.opacity = Math.random() * 0.2 + 0.05;
        
        // Random colors with a cohesive palette
        const colors = [
          `rgba(255, 255, 255, ${this.opacity})`,
          `rgba(200, 230, 255, ${this.opacity})`,
          `rgba(180, 210, 255, ${this.opacity})`
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        // Different shapes for variety
        const shapes = ["circle", "square", "triangle"];
        this.shape = shapes[Math.floor(Math.random() * shapes.length)];
        
        this.velocityX = Math.random() * 0.2 - 0.1;
        this.velocityY = Math.random() * 0.2 - 0.1;
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        
        if (this.shape === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.shape === "square") {
          ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        } else if (this.shape === "triangle") {
          ctx.beginPath();
          ctx.moveTo(0, -this.size / 2);
          ctx.lineTo(this.size / 2, this.size / 2);
          ctx.lineTo(-this.size / 2, this.size / 2);
          ctx.closePath();
          ctx.fill();
        }
        
        ctx.restore();
      }

      update(scrollOffset: number) {
        this.rotation += this.rotationSpeed;
        
        if (mouse.x && mouse.y) {
          // Calculate distance between mouse and element, adjusted for scroll
          const dx = mouse.x - this.x;
          const dy = (mouse.y - scrollOffset) - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            // More dynamic repel effect
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            
            this.x -= forceDirectionX * force * this.density * 0.15;
            this.y -= forceDirectionY * force * this.density * 0.15;
          } else {
            // Gentle drift back to original position
            if (Math.abs(this.x - this.baseX) > 0.5) {
              this.x -= (this.x - this.baseX) * 0.01;
            }
            if (Math.abs(this.y - this.baseY) > 0.5) {
              this.y -= (this.y - this.baseY) * 0.01;
            }
            
            // Affected by scroll position with smooth parallax effect
            const scrollFactor = scrollOffset * 0.005 * (this.size / 10);
            this.y += Math.sin(Date.now() * 0.0005 * this.density) * 0.2 + scrollFactor;
            
            // Subtle random movement
            this.x += this.velocityX;
            this.y += this.velocityY;
            
            // Edge bounce with damping
            if (this.x < 0 || this.x > canvas.width) this.velocityX *= -0.8;
            if (this.y < 0 || this.y > canvas.height) this.velocityY *= -0.8;
          }
        } else {
          // No mouse interaction, graceful floating effect
          const scrollInfluence = scrollOffset * 0.001;
          this.x += Math.sin(Date.now() * 0.0005 * this.density + scrollInfluence) * 0.5;
          this.y += Math.cos(Date.now() * 0.0005 * this.density + scrollInfluence) * 0.5;
          
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

    // Generate floating elements
    let elementsArray: FloatingElement[] = [];
    
    function init() {
      elementsArray = [];
      // Fewer elements for cleaner look but still interactive
      const numberOfElements = Math.min(30, Math.max(15, window.innerWidth * window.innerHeight / 50000));
      
      for (let i = 0; i < numberOfElements; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        elementsArray.push(new FloatingElement(x, y));
      }
    }

    function connectElements(scrollOffset: number) {
      // Connect nearby elements with gradient lines for modern effect
      for (let a = 0; a < elementsArray.length; a++) {
        for (let b = a; b < elementsArray.length; b++) {
          const dx = elementsArray[a].x - elementsArray[b].x;
          const dy = elementsArray[a].y - elementsArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Dynamic connection distance based on element size
          const maxDistance = 150 + scrollOffset * 0.1;
          
          if (distance < maxDistance) {
            // Create gradient lines with dynamic opacity
            const opacity = (1 - distance / maxDistance) * 0.15;
            
            // Create gradient for more modern look
            const gradient = ctx.createLinearGradient(
              elementsArray[a].x, 
              elementsArray[a].y, 
              elementsArray[b].x, 
              elementsArray[b].y
            );
            
            gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
            gradient.addColorStop(1, `rgba(200, 230, 255, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(elementsArray[a].x, elementsArray[a].y);
            ctx.lineTo(elementsArray[b].x, elementsArray[b].y);
            ctx.stroke();
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
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add gradient background for depth
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2, 
        canvas.height / 2, 
        0, 
        canvas.width / 2, 
        canvas.height / 2, 
        canvas.width / 2
      );
      bgGradient.addColorStop(0, 'rgba(10, 10, 20, 0)');
      bgGradient.addColorStop(1, 'rgba(0, 0, 10, 0)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      elementsArray.forEach(element => element.update(scrollOffset));
      connectElements(scrollOffset);
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
      
      {/* Modern gradient overlays */}
      <div className="fixed top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent opacity-80" />
      <div className="fixed bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent opacity-80" />
      
      {/* Modern ambient elements */}
      <motion.div
        style={{ y: translateY1, opacity: opacity1 }}
        className="fixed top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
      />
      
      <motion.div
        style={{ y: translateY2, scale: scale1 }}
        className="fixed bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
      />
      
      <motion.div
        style={{ y: translateY3 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30"
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(100,100,255,0.1)_0%,_transparent_70%)]" />
      </motion.div>
    </div>
  );
};

export default InteractiveBackground;
