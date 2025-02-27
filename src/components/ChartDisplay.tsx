
import { motion } from "framer-motion";
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';

interface ChartDisplayProps {
  title: string;
  type: "bar" | "pie";
  data: any[];
  colors?: string[];
  dataKey: string;
  nameKey?: string;
  delay?: number;
}

const defaultColors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ChartDisplay = ({ 
  title, 
  type, 
  data, 
  colors = defaultColors, 
  dataKey, 
  nameKey = "name",
  delay = 0 
}: ChartDisplayProps) => {
  return (
    <motion.div 
      className="glass-panel p-6"
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
      <motion.h3 
        className="text-xl font-semibold mb-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
      
      <motion.div 
        className="h-64"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.4 }}
        viewport={{ once: true }}
      >
        <ResponsiveContainer width="100%" height="100%">
          {type === "bar" ? (
            <BarChart data={data}>
              <XAxis dataKey={nameKey} stroke="#ffffff60" />
              <YAxis stroke="#ffffff60" />
              <Tooltip 
                contentStyle={{ 
                  background: 'rgba(0,0,0,0.8)', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px' 
                }} 
              />
              <Bar dataKey={dataKey} fill="rgba(255,255,255,0.2)" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} fillOpacity={0.8} />
                ))}
              </Bar>
            </BarChart>
          ) : (
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey={dataKey}
                nameKey={nameKey}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} fillOpacity={0.8} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  background: 'rgba(0,0,0,0.8)', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px' 
                }}
              />
            </PieChart>
          )}
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  );
};

export default ChartDisplay;
