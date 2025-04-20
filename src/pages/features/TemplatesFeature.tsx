
import React from "react";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import FeatureLayout from "./FeatureLayout";

const TemplatesFeature = () => {
  return (
    <FeatureLayout
      title="Smart Templates"
      subtitle="Create and reuse custom templates for frequently used text, code snippets and content blocks"
      icon={Layers}
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
              {/* Placeholder for an animated illustration */}
              <div className="w-64 h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center relative overflow-hidden border border-white/10">
                <Layers className="w-16 h-16 text-white/70" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
                <div className="absolute top-10 -left-5 w-20 h-20 bg-white/5 rounded-full"></div>
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
              <span className="text-gradient">Create Custom Templates</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 leading-relaxed mb-6"
            >
              Build and save custom templates for any type of content you frequently use. From email responses and code snippets to form letters and design elements, templates save you time and ensure consistency across your work.
            </motion.p>
            
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
            >
              {["Rich formatting options", "Variable placeholders for customization", "Categorize and tag templates", "Import and export capabilities"].map((item, index) => (
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
              <span className="text-gradient">Quick Access & Intelligent Suggestions</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 leading-relaxed mb-6"
            >
              Access your templates instantly with customizable keyboard shortcuts or search. Our smart system also suggests relevant templates based on your current context and typing patterns, making your workflow even more efficient.
            </motion.p>
            
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
            >
              {["Context-aware template suggestions", "Customizable keyboard shortcuts", "Search and filter by tags or content", "Recently used templates quick access"].map((item, index) => (
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
              {/* Placeholder for an animated illustration */}
              <div className="w-64 h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center relative overflow-hidden border border-white/10">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-32 h-8 bg-white/10 rounded-md"></div>
                  <div className="w-40 h-8 bg-white/10 rounded-md"></div>
                  <div className="w-36 h-8 bg-white/10 rounded-md"></div>
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
            <span className="text-gradient">Template Performance Analytics</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Usage Tracking",
                description: "Monitor which templates you use most frequently to optimize your workflow."
              },
              {
                title: "Time Savings",
                description: "See statistics on how much time your templates have saved you over time."
              },
              {
                title: "Optimization Suggestions",
                description: "Receive AI-powered suggestions to improve your most-used templates."
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

export default TemplatesFeature;
