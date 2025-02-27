
import { motion } from "framer-motion";
import { Zap, Users, Clock } from "lucide-react";
import StatsCard from "@/components/StatsCard";

const StatsSection = () => {
  return (
    <motion.div 
      className="stats-grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <StatsCard 
        icon={Zap} 
        value="85%" 
        label="Faster Workflow" 
        subtext="Based on user studies"
        delay={0.1}
      />
      <StatsCard 
        icon={Users} 
        value="50K+" 
        label="Active Users" 
        subtext="Growing daily"
        delay={0.2}
      />
      <StatsCard 
        icon={Clock} 
        value="2.5hrs" 
        label="Saved Weekly" 
        subtext="Per user average"
        delay={0.3}
      />
    </motion.div>
  );
};

export default StatsSection;
