
import { motion } from "framer-motion";
import { Clipboard, Star } from "lucide-react";

const AppLogo = () => {
  return (
    <motion.div
      className="w-32 h-32 mx-auto"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="w-full h-full rounded-2xl glass-panel flex items-center justify-center bg-zinc-950 relative overflow-hidden group glow-effect">
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
          }}
          animate={{ x: ["200%", "-200%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <Clipboard className="w-16 h-16 relative z-10" />
        <motion.div
          className="absolute -top-2 -right-2"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Star className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AppLogo;
