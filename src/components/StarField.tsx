
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const StarField = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number }>>([]);

  useEffect(() => {
    // Generate random stars
    const newStars = [...Array(50)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }));
    setStars(newStars);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="star-field">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="star"
          initial={{ opacity: Math.random() }}
          animate={{
            opacity: [Math.random() * 0.2, 1, Math.random() * 0.2],
            scale: [1, Math.random() + 1, 1],
            x: mouseX.get() * 0.02,
            y: mouseY.get() * 0.02,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
