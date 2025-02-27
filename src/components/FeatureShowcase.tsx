
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeatureShowcaseProps {
  features: Feature[];
}

const FeatureShowcase = ({ features }: FeatureShowcaseProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div 
          key={index}
          className="glass-panel p-6 hover:bg-white/10 transition-all duration-300 cursor-default group relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
        >
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-2xl transform -rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <feature.icon className="w-8 h-8 mb-4 text-white/80 group-hover:text-white transition-colors relative z-10" />
          
          <h3 className="text-lg font-semibold mb-2 relative z-10">{feature.title}</h3>
          
          <p className="text-gray-400 text-sm relative z-10">{feature.description}</p>
          
          <motion.div 
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureShowcase;
