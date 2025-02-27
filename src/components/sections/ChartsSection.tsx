
import { motion } from "framer-motion";
import ChartDisplay from "@/components/ChartDisplay";

const efficiencyData = [
  { name: 'Traditional', value: 35 },
  { name: 'CopyClipCloud', value: 85 },
];

const satisfactionData = [
  { name: 'Very Satisfied', value: 68 },
  { name: 'Satisfied', value: 22 },
  { name: 'Neutral', value: 10 },
];

const ChartsSection = () => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <ChartDisplay 
        title="Workflow Efficiency" 
        type="bar" 
        data={efficiencyData} 
        dataKey="value"
        delay={0.1}
      />
      <ChartDisplay 
        title="User Satisfaction" 
        type="pie" 
        data={satisfactionData} 
        dataKey="value"
        colors={['#00C49F', '#0088FE', '#FFBB28']}
        delay={0.2}
      />
    </motion.div>
  );
};

export default ChartsSection;
