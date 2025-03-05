
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, Download, Users, Star, Award, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area, LineChart, Line } from "recharts";

const statData = [
  {
    icon: Download,
    value: "180K+",
    label: "Active Users",
    description: "Growing globally daily",
    numericValue: 180000
  },
  {
    icon: Star,
    value: "4.8",
    label: "Average Rating",
    description: "From 16,400+ reviews",
    numericValue: 4.8
  },
  {
    icon: Award,
    value: "12+",
    label: "Industry Awards",
    description: "Best productivity app 2023",
    numericValue: 12
  }
];

const userGrowthData = [
  { name: 'Jan', value: 12400, prevValue: 8200 },
  { name: 'Feb', value: 14598, prevValue: 9800 },
  { name: 'Mar', value: 18800, prevValue: 11200 },
  { name: 'Apr', value: 23908, prevValue: 14800 },
  { name: 'May', value: 29800, prevValue: 18900 },
  { name: 'Jun', value: 38800, prevValue: 24200 },
  { name: 'Jul', value: 52600, prevValue: 32400 },
  { name: 'Aug', value: 74800, prevValue: 45600 },
  { name: 'Sep', value: 99200, prevValue: 62400 },
  { name: 'Oct', value: 124800, prevValue: 78900 },
  { name: 'Nov', value: 154600, prevValue: 98200 },
  { name: 'Dec', value: 180000, prevValue: 124600 },
];

const usageData = [
  { name: 'Text', value: 45 },
  { name: 'Images', value: 30 },
  { name: 'Files', value: 15 },
  { name: 'Code', value: 10 },
];

const devicesData = [
  { name: 'macOS', value: 68 },
  { name: 'iOS', value: 22 },
  { name: 'iPadOS', value: 10 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-panel p-3 text-xs">
        <p className="label font-medium">{`${label}`}</p>
        <p className="value">{`Users: ${payload[0].value.toLocaleString()}`}</p>
        {payload.length > 1 && (
          <p className="value text-gray-400">{`Previous Year: ${payload[1].value.toLocaleString()}`}</p>
        )}
      </div>
    );
  }

  return null;
};

const CountUp = ({ to, duration = 2, formatter = (value: number) => value.toString() }: { 
  to: number; 
  duration?: number;
  formatter?: (value: number) => string;
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number | null = null;
    let animationFrame: number;
    
    const updateValue = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / (duration * 1000), 1);
      
      // Use easeOutQuart easing function
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeProgress * to);
      
      setValue(currentValue);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateValue);
      }
    };
    
    animationFrame = requestAnimationFrame(updateValue);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, to, duration]);

  return <span ref={nodeRef}>{formatter(value)}</span>;
};

const AppStats = () => {
  const [activeChart, setActiveChart] = useState<'growth' | 'usage' | 'devices'>('growth');
  
  const chartData = {
    growth: userGrowthData,
    usage: usageData,
    devices: devicesData
  };
  
  const chartTitles = {
    growth: "User Growth (YoY)",
    usage: "Content Type Distribution",
    devices: "Device Platform Usage"
  };
  
  const chartDescriptions = {
    growth: "Monthly active users over the past year",
    usage: "Types of content stored by our users",
    devices: "Platform distribution across Apple ecosystem"
  };

  return (
    <motion.div 
      className="mt-24 pt-10 border-t border-white/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-3xl font-bold text-center mb-2 relative"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">By The Numbers</span>
        <div className="h-1 w-16 bg-white/20 mx-auto mt-2"></div>
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
          const numericValue = stat.numericValue;
          const suffix = isNumber ? stat.value.replace(/[0-9.]/g, '') : '';
          
          // Format based on data type
          const formatValue = (value: number) => {
            if (stat.label === "Average Rating") {
              return value.toFixed(1);
            } else if (value >= 1000) {
              return `${Math.floor(value / 1000)}K+`;
            } else {
              return `${value}+`;
            }
          };
          
          return (
            <motion.div 
              key={index}
              className="glass-panel p-6 hover:scale-[1.02] transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-1 text-white text-center">
                <CountUp to={numericValue} formatter={formatValue} />
              </h3>
              <p className="text-lg font-medium mb-2 text-center">{stat.label}</p>
              <p className="text-gray-400 text-sm text-center">{stat.description}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        className="glass-panel p-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-medium">{chartTitles[activeChart]}</h3>
            <p className="text-sm text-gray-400">{chartDescriptions[activeChart]}</p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <button 
              className={`px-3 py-1 rounded-full text-sm ${activeChart === 'growth' ? 'bg-white text-black' : 'bg-white/10'}`}
              onClick={() => setActiveChart('growth')}
            >
              Growth
            </button>
            <button 
              className={`px-3 py-1 rounded-full text-sm ${activeChart === 'usage' ? 'bg-white text-black' : 'bg-white/10'}`}
              onClick={() => setActiveChart('usage')}
            >
              Usage
            </button>
            <button 
              className={`px-3 py-1 rounded-full text-sm ${activeChart === 'devices' ? 'bg-white text-black' : 'bg-white/10'}`}
              onClick={() => setActiveChart('devices')}
            >
              Devices
            </button>
          </div>
        </div>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            {activeChart === 'growth' ? (
              <AreaChart data={chartData.growth}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPrevValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#AAAAAA" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#AAAAAA" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="prevValue" 
                  stroke="#AAAAAA" 
                  fillOpacity={1} 
                  fill="url(#colorPrevValue)"
                  strokeWidth={1}
                  dot={false}
                  activeDot={{ r: 6, strokeWidth: 1 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#FFFFFF" 
                  fillOpacity={1} 
                  fill="url(#colorValue)"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 8, strokeWidth: 2 }}
                />
              </AreaChart>
            ) : activeChart === 'usage' ? (
              <BarChart data={chartData.usage}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="glass-panel p-3 text-xs">
                        <p className="label font-medium">{`${label}`}</p>
                        <p className="value">{`${payload[0].value}%`}</p>
                      </div>
                    );
                  }
                  return null;
                }} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} fill="#FFFFFF">
                  {chartData.usage.map((entry, index) => (
                    <motion.rect 
                      key={index} 
                      fillOpacity={0.9} 
                      fill={'white'} 
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                    />
                  ))}
                </Bar>
              </BarChart>
            ) : (
              <BarChart data={chartData.devices} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis type="number" stroke="rgba(255,255,255,0.5)" />
                <YAxis dataKey="name" type="category" stroke="rgba(255,255,255,0.5)" />
                <Tooltip content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="glass-panel p-3 text-xs">
                        <p className="label font-medium">{`${label}`}</p>
                        <p className="value">{`${payload[0].value}%`}</p>
                      </div>
                    );
                  }
                  return null;
                }} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} fill="#FFFFFF">
                  {chartData.devices.map((entry, index) => (
                    <motion.rect 
                      key={index} 
                      fillOpacity={0.9} 
                      fill={'white'} 
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                    />
                  ))}
                </Bar>
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </motion.div>
      
      <motion.div 
        className="glass-panel p-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-6">
          <TrendingUp className="w-6 h-6 mr-3" />
          <div>
            <h3 className="text-xl font-medium">Performance Metrics</h3>
            <p className="text-sm text-gray-400">CopyClipCloud vs. traditional clipboard managers</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Speed</span>
              <span className="text-white">4.8x faster</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full">
              <motion.div 
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "85%" }}
                transition={{ delay: 0.8, duration: 1 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Memory Usage</span>
              <span className="text-white">3.2x more efficient</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full">
              <motion.div 
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "78%" }}
                transition={{ delay: 0.9, duration: 1 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Battery Impact</span>
              <span className="text-white">2.6x less impact</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full">
              <motion.div 
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "72%" }}
                transition={{ delay: 1, duration: 1 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Security</span>
              <span className="text-white">Military-grade</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full">
              <motion.div 
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "95%" }}
                transition={{ delay: 1.1, duration: 1 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AppStats;
