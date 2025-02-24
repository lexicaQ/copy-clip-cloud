
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="loading-spinner">
          <div className="loading-cube">
            <div className="cube-face" style={{ transform: 'rotateX(0deg) translateZ(12px)' }} />
            <div className="cube-face" style={{ transform: 'rotateX(180deg) translateZ(12px)' }} />
            <div className="cube-face" style={{ transform: 'rotateY(90deg) translateZ(12px)' }} />
            <div className="cube-face" style={{ transform: 'rotateY(-90deg) translateZ(12px)' }} />
            <div className="cube-face" style={{ transform: 'rotateX(90deg) translateZ(12px)' }} />
            <div className="cube-face" style={{ transform: 'rotateX(-90deg) translateZ(12px)' }} />
          </div>
        </div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl font-medium text-white mt-8"
        >
          Loading CopyClipCloud...
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
