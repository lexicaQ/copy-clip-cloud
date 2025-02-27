
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  subtext?: string;
  delay?: number;
}

const StatsCard = ({ icon: Icon, value, label, subtext, delay = 0 }: StatsCardProps) => {
  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        backgroundColor: "rgba(255, 255, 255, 0.08)"
      }}
    >
      <Icon className="w-8 h-8 mb-4 text-white/80" />
      
      <motion.div 
        className="stat-value"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        viewport={{ once: true }}
      >
        {value}
      </motion.div>
      
      <div className="stat-label">{label}</div>
      
      {subtext && (
        <div className="text-xs text-gray-400 mt-2">{subtext}</div>
      )}
    </motion.div>
  );
};

export default StatsCard;
