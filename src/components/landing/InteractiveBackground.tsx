
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

    // Set up canvas
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 1.5;
    };
    
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Mouse tracking
    let mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined,
    };

    window.addEventListener("mousemove", function(e) {
      mouse.x = e.x;
      mouse.y = e.y + window.scrollY;
    });

    window.addEventListener("mouseout", function() {
      mouse.x = undefined;
      mouse.y = undefined;
    });

    // Create modern floating elements instead of particles
    class FloatingElement {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      shape: 'circle' | 'square' | 'triangle'; // Add variety with different shapes

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 80 + 20; // Larger elements
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = Math.random() * 0.2 - 0.1;
        
        // Create a gradient color palette
        const hue = Math.random() * 30 + 210; // Blue to purple range
        this.opacity = Math.random() * 0.07 + 0.03; // Very subtle
        this.color = `hsla(${hue}, 70%, 60%, ${this.opacity})`;
        
        // Randomly assign a shape
        const shapes = ['circle', 'square', 'triangle'];
        this.shape = shapes[Math.floor(Math.random() * shapes.length)] as 'circle' | 'square' | 'triangle';
      }

      draw() {
        if (!ctx) return;
        
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        
        // Draw different shapes
        switch(this.shape) {
          case 'circle':
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 'square':
            ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
            break;
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(this.x, this.y - this.size/2);
            ctx.lineTo(this.x - this.size/2, this.y + this.size/2);
            ctx.lineTo(this.x + this.size/2, this.y + this.size/2);
            ctx.closePath();
            ctx.fill();
            break;
        }
        
        ctx.globalAlpha = 1;
      }

      update(scrollOffset: number) {
        // Add subtle mouse interaction
        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = (mouse.y - scrollOffset) - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 300) { // Larger interaction radius
            const angle = Math.atan2(dy, dx);
            const force = (300 - distance) / 3000;
            
            this.x -= Math.cos(angle) * force * this.size;
            this.y -= Math.sin(angle) * force * this.size;
          }
        }
        
        // Very gentle floating motion
        this.x += Math.sin(Date.now() * 0.0005) * this.speedX;
        this.y += Math.cos(Date.now() * 0.0005) * this.speedY;
        
        // Gradually return to base position
        this.x += (this.baseX - this.x) * 0.01;
        this.y += (this.baseY - this.y) * 0.01;
        
        this.draw();
      }
    }

    // Generate floating elements
    let elements: FloatingElement[] = [];
    
    function init() {
      elements = [];
      // Fewer but larger elements
      const numberOfElements = Math.min(15, Math.floor(window.innerWidth * window.innerHeight / 50000));
      
      for (let i = 0; i < numberOfElements; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        elements.push(new FloatingElement(x, y));
      }
    }

    // Animation loop
    let scrollOffset = 0;
    window.addEventListener('scroll', () => {
      scrollOffset = window.scrollY;
    });

    function animate() {
      requestAnimationFrame(animate);
      // Create a semi-transparent gradient background
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add a subtle gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(10, 10, 30, 0.2)');
      gradient.addColorStop(1, 'rgba(5, 5, 20, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      elements.forEach(element => element.update(scrollOffset));
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
      <div className="fixed top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent opacity-60" />
      <div className="fixed bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent opacity-60" />
      
      {/* Atmospheric glow elements */}
      <motion.div
        style={{ y: translateY1, opacity: opacity1 }}
        className="fixed top-1/3 right-1/3 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[150px]"
      />
      
      <motion.div
        style={{ y: translateY2, scale: scale1 }}
        className="fixed bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[100px]"
      />
      
      <motion.div
        style={{ y: translateY3 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
      >
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(120,120,255,0.03)_0%,_transparent_70%)] blur-lg" />
      </motion.div>
    </div>
  );
};

export default InteractiveBackground;
