
import React from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, PieChart, Pie, Cell } from "recharts";
import { BarChart4, PieChart as PieChartIcon } from "lucide-react";

const UsageStats = () => {
  const usageData = [
    { name: "Text", amount: 68, color: "#8B5CF6" },
    { name: "Links", amount: 23, color: "#EC4899" },
    { name: "Bilder", amount: 15, color: "#3B82F6" },
    { name: "Code", amount: 12, color: "#10B981" },
    { name: "Dateien", amount: 8, color: "#F59E0B" },
  ];

  const deviceData = [
    { name: "MacBook", value: 45, color: "#8B5CF6" },
    { name: "iPhone", value: 35, color: "#3B82F6" },
    { name: "iPad", value: 20, color: "#EC4899" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mt-20 w-full max-w-5xl mx-auto"
    >
      <div className="text-center mb-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <BarChart4 className="w-6 h-6 text-green-400" />
          <h2 className="text-3xl font-bold text-gradient-primary">Wie andere CopyClipCloud nutzen</h2>
        </motion.div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Optimiere deine Produktivität mit einem Blick darauf, wie unsere Nutzer:innen CopyClipCloud verwenden.
        </p>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="glass-panel rounded-xl p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-lg overflow-hidden h-[400px]">
          <h3 className="text-xl font-semibold mb-4 text-gradient flex items-center gap-2">
            <BarChart4 className="h-5 w-5 text-blue-400" />
            Clip-Typen Verteilung
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={usageData} layout="vertical">
                <XAxis type="number" tickFormatter={(value) => `${value}%`} />
                <YAxis dataKey="name" type="category" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(23, 23, 23, 0.9)",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "0.5rem",
                    color: "#fff",
                  }}
                  formatter={(value) => [`${value}%`, "Nutzung"]}
                />
                <Bar dataKey="amount" radius={[0, 4, 4, 0]}>
                  {usageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-6 bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-lg overflow-hidden h-[400px]">
          <h3 className="text-xl font-semibold mb-4 text-gradient flex items-center gap-2">
            <PieChartIcon className="h-5 w-5 text-purple-400" />
            Gerätenutzung
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(23, 23, 23, 0.9)",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "0.5rem",
                    color: "#fff",
                  }}
                  formatter={(value) => [`${value}%`, "Nutzung"]}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UsageStats;
