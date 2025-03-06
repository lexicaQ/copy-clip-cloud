
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay?: number;
  color?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  delay = 0, 
  color = "from-white/10 to-white/5" 
}: FeatureCardProps) => (
  <motion.div
    className="glass-panel p-8 relative overflow-hidden group hover:border-white/20"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
        viewport={{ once: true }}
        className="mt-6 flex items-center text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer group/link"
      >
        Learn more 
        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
      </motion.div>
    </div>
  </motion.div>
);

export default FeatureCard;
