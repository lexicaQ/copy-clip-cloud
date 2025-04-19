
import React from "react";
import { motion } from "framer-motion";

const EnhancedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Grundlegende schwarze Farbfläche */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
      
      {/* Weiche, verschwommene weiße und graue Flächen */}
      <motion.div
        className="absolute top-20 left-1/4 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[180px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.04, 0.03],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-gray-200/[0.02] rounded-full blur-[150px]"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.02, 0.03, 0.02],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div
        className="absolute top-1/3 -right-20 w-[700px] h-[700px] bg-white/[0.015] rounded-full blur-[130px]"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.015, 0.025, 0.015],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-gray-300/[0.01] rounded-full blur-[100px]"
        animate={{
          scale: [1.05, 1, 1.05],
          opacity: [0.01, 0.02, 0.01],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      
      {/* Feine Rasterelemente */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" style={{ backgroundSize: '60px 60px' }} />
      </div>
      
      {/* Subtiler Vignette-Effekt */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40 pointer-events-none" />
    </div>
  );
};

export default EnhancedBackground;
