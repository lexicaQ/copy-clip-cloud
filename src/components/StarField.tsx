
import { motion } from "framer-motion";

const StarField = () => {
  return (
    <div className="star-field">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="star"
          initial={{ opacity: Math.random() }}
          animate={{
            opacity: [Math.random() * 0.2, 1, Math.random() * 0.2],
            scale: [1, Math.random() + 1, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
