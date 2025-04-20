import React from "react";
import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";
import FeatureLayout from "./FeatureLayout";

const LightningFastFeature = () => {
  return (
    <FeatureLayout
      title="Lightning Fast Performance"
      subtitle="Experience blazing speed with our optimized clipboard manager that works instantly without any noticeable delay"
      icon={CheckCheck}
      callToAction={{
        text: "Download Now",
        link: "/download"
      }}
    >
      <div className="space-y-24">
        {/* Feature Section 1 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="glass-panel p-8 lg:p-10 rounded-3xl h-[400px] flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Animated performance illustration */}
              <div className="w-64 h-64 flex flex-col items-center justify-center space-y-6">
                <motion.div
                  className="w-40 h-1 bg-white/20 rounded-full overflow-hidden"
                  initial={{ width: "40%" }}
                >
                  <motion.div
                    className="h-full bg-white"
                    animate={{
                      x: ["-100%", "100%"]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                <motion.div
                  className="w-40 h-1 bg-white/20 rounded-full overflow-hidden"
                  initial={{ width: "70%" }}
                >
                  <motion.div
                    className="h-full bg-white"
                    animate={{
                      x: ["-100%", "100%"]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2
                    }}
                  />
                </motion.div>
                
                <motion.div
                  className="w-40 h-1 bg-white/20 rounded-full overflow-hidden"
                  initial={{ width: "50%" }}
                >
                  <motion.div
                    className="h-full bg-white"
                    animate={{
                      x: ["-100%", "100%"]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4
                    }}
                  />
                </motion.div>
                
                <div className="text-white/60 text-sm">
                  <span className="font-mono">{"<2ms response time"}</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6"
            >
              <span className="text-gradient">Optimized for Speed</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 leading-relaxed mb-6"
            >
              CopyClipCloud is built from the ground up with performance in mind. Our clipboard manager operates at the system level with minimal overhead, ensuring that copying and pasting happens instantaneously without any perceptible delay, even when managing thousands of clipboard items.
            </motion.p>
            
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
            >
              {[
                "Sub-millisecond response time", 
                "Native kernel-level integration", 
                "Advanced memory management", 
                "Asynchronous background processing"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
        
        {/* Feature Section 2 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 lg:order-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6"
            >
              <span className="text-gradient">Efficient Resource Usage</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 leading-relaxed mb-6"
            >
              Despite its powerful features, CopyClipCloud maintains a minimal footprint on your system resources. The application runs efficiently in the background, using advanced techniques to minimize CPU, memory, and battery usage while still delivering instant performance.
            </motion.p>
            
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
            >
              {[
                "Minimal memory footprint (<50MB)", 
                "Intelligent battery optimization", 
                "Adaptive CPU usage patterns", 
                "Sleep mode when inactive"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
          
          <div className="glass-panel p-8 lg:p-10 rounded-3xl h-[400px] flex items-center justify-center order-1 lg:order-2">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Resource usage visualization */}
              <div className="w-64 h-64 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-40 h-40 rounded-full border-4 border-white/10"
                    animate={{ 
                      boxShadow: ["0 0 0 0 rgba(255,255,255,0.1)", "0 0 0 20px rgba(255,255,255,0)"],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                </div>
                
                <div className="z-10 w-32 h-32 rounded-full bg-white/5 flex flex-col items-center justify-center border border-white/10">
                  <div className="text-3xl font-bold text-white">
                    <motion.span
                      animate={{ 
                        opacity: [0.7, 1, 0.7],
                        scale: [0.98, 1, 0.98]
                      }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                      {'<5%'}
                    </motion.span>
                  </div>
                  <div className="text-xs text-white/60">CPU USAGE</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Feature Section 3 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8"
          >
            <span className="text-gradient">Performance Benchmarks</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                metric: "<2ms",
                title: "Copy/Paste Latency",
                description: "Near instantaneous clipboard operations without any noticeable delay."
              },
              {
                metric: "10,000+",
                title: "Clipboard Items",
                description: "Maintain performance even with thousands of items in your clipboard history."
              },
              {
                metric: "99.9%",
                title: "Reliability",
                description: "Consistently performs without crashes or data loss across all devices."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass-panel p-6 rounded-xl border border-white/10"
              >
                <div className="text-2xl font-bold mb-2 text-white">{item.metric}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </FeatureLayout>
  );
};

export default LightningFastFeature;
