
import React, { useEffect, useRef } from "react";

const BackgroundEffects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle settings
    const particlesArray: Particle[] = [];
    const numberOfParticles = 120;
    
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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

    window.addEventListener("mouseout", function() {
      mouse.x = null;
      mouse.y = null;
    });

    // Particle class with improved visuals
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

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 2.5 + 0.5; // More varied sizes
        this.opacity = Math.random() * 0.5 + 0.2; // More varied opacity
        this.color = `rgba(255, 255, 255, ${this.opacity})`;
        this.directionX = Math.random() * 2 - 1;
        this.directionY = Math.random() * 2 - 1;
        this.density = Math.random() * 35 + 1; // More responsive to mouse
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (mouse.x === null || mouse.y === null) {
          // Gentle floating motion when mouse is inactive
          this.x += Math.sin(Date.now() * 0.001 + this.density) * 0.2;
          this.y += Math.cos(Date.now() * 0.001 + this.density) * 0.2;
          
          // Gradually return to original position
          const dx = this.baseX - this.x;
          const dy = this.baseY - this.y;
          if (Math.abs(dx) > 0.1) {
            this.x += dx * 0.02;
          }
          if (Math.abs(dy) > 0.1) {
            this.y += dy * 0.02;
          }
        } else {
          // More dynamic response to mouse
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          
          // Distance past which we won't apply any force
          const maxDistance = mouse.radius;
          const force = (maxDistance - distance) / maxDistance;
          
          if (distance < maxDistance) {
            this.x -= forceDirectionX * force * this.density;
            this.y -= forceDirectionY * force * this.density;
          } else {
            // Return to original position
            const dx = this.baseX - this.x;
            const dy = this.baseY - this.y;
            if (Math.abs(dx) > 0.1) {
              this.x += dx * 0.03;
            }
            if (Math.abs(dy) > 0.1) {
              this.y += dy * 0.03;
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
      const lineOpacity = 0.08; // Slightly more visible connections
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) { // Increased connection distance
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineOpacity * (120 - distance) / 120})`;
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

  return (
    <div className="absolute inset-0 z-0">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08)_0%,_transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
    </div>
  );
};

export default BackgroundEffects;
