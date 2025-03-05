
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, Download, Users, Star } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const statData = [
  {
    icon: Download,
    value: "100K+",
    label: "Downloads",
    description: "Active users globally",
    numericValue: 100000
  },
  {
    icon: Star,
    value: "4.8",
    label: "Average Rating",
    description: "From 12,400+ reviews",
    numericValue: 4.8
  },
  {
    icon: Users,
    value: "93%",
    label: "User Retention",
    description: "After first month of use",
    numericValue: 93
  }
];

const chartData = [
  { name: 'Jan', value: 2400 },
  { name: 'Feb', value: 3598 },
  { name: 'Mar', value: 9800 },
  { name: 'Apr', value: 8908 },
  { name: 'May', value: 12800 },
  { name: 'Jun', value: 15800 },
  { name: 'Jul', value: 18600 },
];

const CountUp = ({ to, duration = 2 }: { to: number; duration?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!isInView || !nodeRef.current) return;
    
    let start = 0;
    const end = to;
    const increment = end / 100;
    const startTime = performance.now();
    
    const updateCounter = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / (duration * 1000), 1);
      
      // Use easeOutQuart easing function
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeProgress * end);
      
      if (nodeRef.current) {
        nodeRef.current.textContent = currentValue.toString();
      }
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  }, [isInView, to, duration]);

  return <span ref={nodeRef}>0</span>;
};

const AppStats = () => {
  return (
    <motion.div 
      className="mt-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-2xl font-bold text-center mb-2 text-gradient"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        By The Numbers
      </motion.h2>
      
      <motion.p 
        className="text-gray-400 text-center mb-10 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        See why CopyClipCloud is trusted by professionals worldwide
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {statData.map((stat, index) => {
          const Icon = stat.icon;
          const isNumber = !isNaN(parseFloat(stat.value.replace(/[^0-9.]/g, '')));
          const numericValue = isNumber ? parseFloat(stat.value.replace(/[^0-9.]/g, '')) : 0;
          const suffix = isNumber ? stat.value.replace(/[0-9.]/g, '') : '';
          
          // Format based on data type
          const formattedValue = (value: number, originalString: string) => {
            if (originalString.includes('%')) {
              return `${Math.round(value)}%`;
            } else if (value % 1 !== 0) {
              // If decimal number (like 4.8)
              return value.toFixed(1);
            } else if (value >= 1000) {
              // For thousands (like 100K)
              return (value / 1000).toFixed(0) + 'K+';
            } else {
              return Math.round(value).toString();
            }
          };
          
          return (
            <motion.div 
              key={index}
              className="glass-panel p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-1 text-white">
                {isNumber ? (
                  <>
                    <CountUp to={numericValue < 1000 ? numericValue * 10 : numericValue} />
                    {suffix}
                  </>
                ) : (
                  stat.value
                )}
              </h3>
              <p className="text-lg font-medium mb-2">{stat.label}</p>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        className="glass-panel p-6 h-64 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-medium mb-4 text-center">Monthly Active Users (thousands)</h3>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
            <YAxis stroke="rgba(255,255,255,0.5)" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(0,0,0,0.9)', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '0.5rem',
                color: 'white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
              }} 
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {chartData.map((entry, index) => (
                <motion.rect 
                  key={index} 
                  fillOpacity={0.9} 
                  fill={'white'} 
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  );
};

export default AppStats;
