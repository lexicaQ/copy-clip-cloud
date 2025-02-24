
import { motion } from "framer-motion";
import { Cloud, Clipboard, Shield } from "lucide-react";

const features = [
  {
    title: "Universal Clipboard",
    description: "Copy on one device, paste on another. Real-time sync across all your Mac devices with instant availability.",
    icon: Cloud
  },
  {
    title: "Rich Media Support",
    description: "Handle text, images, files, and code snippets with intelligent organization and quick search capabilities.",
    icon: Clipboard
  },
  {
    title: "Secure & Private",
    description: "Military-grade encryption ensures your sensitive data remains protected with zero-knowledge architecture.",
    icon: Shield
  }
];

const FeatureGrid = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="glass-panel p-6 hover:bg-white/10 transition-all duration-300 cursor-default group relative overflow-hidden"
          whileHover={{ y: -5 }}
        >
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              background: "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)",
            }}
            animate={{ x: ["200%", "-200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <feature.icon className="w-8 h-8 mb-4 text-white/80 group-hover:text-white transition-colors" />
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-400 text-sm">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeatureGrid;
