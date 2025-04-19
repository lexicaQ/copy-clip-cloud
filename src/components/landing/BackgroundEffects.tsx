
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const BackgroundEffects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Advanced particle settings
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(160, Math.floor(width * height / 12000));
    
    // Mouse position tracking with improved sensitivity
    let mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 180
    };

    window.addEventListener("mousemove", function(event) {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    window.addEventListener("resize", function() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    });

    window.addEventListener("mouseout", function() {
      mouse.x = null;
      mouse.y = null;
    });

    // Advanced Particle class with improved visuals
    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;
      baseX: number;
      baseY: number;
      density: number;
      opacity: number;
      speed: number;
      pulseSpeed: number;
      pulseDirection: number;
      connectDistance: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 2.5 + 0.5; 
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = `rgba(255, 255, 255, ${this.opacity})`;
        this.directionX = Math.random() * 2 - 1;
        this.directionY = Math.random() * 2 - 1;
        this.density = Math.random() * 35 + 1;
        this.speed = Math.random() * 0.2 + 0.05;
        this.pulseSpeed = Math.random() * 0.04 + 0.01;
        this.pulseDirection = 1;
        this.connectDistance = Math.random() * 80 + 80;
      }

      draw() {
        if (!ctx) return;
        
        // Add safety check to prevent IndexSizeError
        if (this.size <= 0) {
          this.size = 0.1; // Ensure a minimum size
        }
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (mouse.x === null || mouse.y === null) {
          // More natural floating motion when mouse is inactive
          this.x += Math.sin(Date.now() * 0.001 * this.speed) * 0.3;
          this.y += Math.cos(Date.now() * 0.001 * this.speed) * 0.3;
          
          // Size pulsing effect with safety checks
          this.size += this.pulseDirection * this.pulseSpeed;
          if (this.size > this.density / 10 + 1) this.pulseDirection = -1;
          if (this.size < 0.1) {
            this.size = 0.1;
            this.pulseDirection = 1;
          }
          
          // Gradually return to original position
          const dx = this.baseX - this.x;
          const dy = this.baseY - this.y;
          if (Math.abs(dx) > 0.1) {
            this.x += dx * 0.01;
          }
          if (Math.abs(dy) > 0.1) {
            this.y += dy * 0.01;
          }
        } else {
          // More dynamic response to mouse
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Prevent division by zero
          if (distance > 0) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            
            // Distance past which we won't apply any force
            const maxDistance = mouse.radius;
            const force = (maxDistance - distance) / maxDistance;
            
            if (distance < maxDistance) {
              this.x -= forceDirectionX * force * this.density * 0.05;
              this.y -= forceDirectionY * force * this.density * 0.05;
            } else {
              // Return to original position with slight drift
              const dx = this.baseX - this.x;
              const dy = this.baseY - this.y;
              this.x += dx * 0.02;
              this.y += dy * 0.02;
            }
          }
        }
        this.draw();
      }
    }

    function init() {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }

      connect();
    }

    function connect() {
      let opacityValue = 0.8;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const particleDistance = particlesArray[a].connectDistance;

          if (distance < particleDistance) {
            // Dynamic connection opacity based on distance
            opacityValue = 1 - (distance / particleDistance);
            opacityValue *= 0.15; // Reduce maximum opacity
            
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    init();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", () => {});
      window.removeEventListener("resize", () => {});
      window.removeEventListener("mouseout", () => {});
    };
  }, []);

  // Beat effect elements
  const beatElements = [
    { x: "20%", y: "30%", size: 180, delay: 0 },
    { x: "70%", y: "60%", size: 220, delay: 1 },
    { x: "80%", y: "20%", size: 150, delay: 0.5 },
    { x: "40%", y: "80%", size: 190, delay: 1.5 },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      {/* Beat effect */}
      {beatElements.map((elem, index) => (
        <motion.div
          key={index}
          className="absolute opacity-5 rounded-full bg-white"
          style={{
            left: elem.x,
            top: elem.y,
            width: elem.size,
            height: elem.size,
          }}
          animate={{
            scale: [1, 1.05, 1, 1.03, 1],
            opacity: [0.03, 0.05, 0.03, 0.04, 0.03],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            delay: elem.delay,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />
      
      {/* Vignette effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
    </div>
  );
};

export default BackgroundEffects;
