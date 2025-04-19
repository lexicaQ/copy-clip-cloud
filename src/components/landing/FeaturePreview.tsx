
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FeaturePreview = () => {
  return (
    <motion.div 
      className="py-24 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Soft blurred background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] opacity-20"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="p-6 relative z-10 order-2 lg:order-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-4 text-gradient"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            AI-Powered Organization
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-300 mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            CopyClipCloud uses artificial intelligence to automatically categorize and organize your clipboard contents. Texts, images, links, and code snippets are intelligently grouped and easily searchable.
          </motion.p>
          
          <motion.div 
            className="space-y-4 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {[
              "Automatic content type detection",
              "Context-aware grouping of related items",
              "Intelligent tagging suggestions",
              "Personalized organization based on usage patterns"
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
                <p className="text-gray-300">{item}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.button 
            className="btn-modern inline-flex items-center gap-2"
            whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            Explore Feature <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="relative order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="aspect-video rounded-xl overflow-hidden backdrop-blur-lg bg-white/[0.03] border border-white/10 shadow-xl relative">
            {/* Enhanced UI Preview */}
            <div className="absolute inset-0 p-6">
              <div className="w-full h-full rounded-lg border border-white/10 overflow-hidden flex flex-col">
                {/* UI Header */}
                <div className="h-10 border-b border-white/10 flex items-center px-4 gap-3">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  </div>
                  <div className="flex-1 text-xs text-white/50 text-center">CopyClipCloud</div>
                </div>
                
                {/* Enhanced Content Preview */}
                <div className="flex-1 flex">
                  {/* Smart Categories Sidebar */}
                  <div className="w-1/4 border-r border-white/10 p-3 space-y-2">
                    {[
                      "Recent Items",
                      "Code Snippets",
                      "Text Notes",
                      "Images",
                      "Links",
                      "Documents"
                    ].map((category, i) => (
                      <div key={i} className={`h-6 rounded-md flex items-center px-2 text-xs ${i === 1 ? 'bg-white/10 text-white' : 'text-white/50'}`}>
                        {category}
                      </div>
                    ))}
                  </div>
                  
                  {/* Main Content Area */}
                  <div className="flex-1 p-3">
                    {/* Code Snippets Preview */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-24 bg-white/5 rounded-md p-2 flex flex-col justify-between">
                        <div className="text-xs text-white/70">React Component</div>
                        <div className="text-[10px] font-mono text-white/50 overflow-hidden">
                          const Button = () =&gt; {"{"}
                            return &lt;button&gt;Click&lt;/button&gt;
                          {"}"}
                        </div>
                      </div>
                      <div className="h-24 bg-white/5 rounded-md p-2 flex flex-col justify-between">
                        <div className="text-xs text-white/70">CSS Snippet</div>
                        <div className="text-[10px] font-mono text-white/50 overflow-hidden">
                          .container {"{"} display: flex; {"}"}
                        </div>
                      </div>
                      <div className="h-24 bg-white/5 rounded-md p-2 flex flex-col justify-between">
                        <div className="text-xs text-white/70">API Endpoint</div>
                        <div className="text-[10px] font-mono text-white/50 overflow-hidden">
                          GET /api/users/:id
                        </div>
                      </div>
                      <div className="h-24 bg-white/5 rounded-md p-2 flex flex-col justify-between">
                        <div className="text-xs text-white/70">SQL Query</div>
                        <div className="text-[10px] font-mono text-white/50 overflow-hidden">
                          SELECT * FROM users
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Animation layer */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ 
                x: ['-100%', '100%']
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0.5
              }}
            />
          </div>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute -bottom-6 -right-6 w-24 h-24 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl -z-10"
            animate={{ 
              rotate: 10,
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute -top-4 -left-4 w-16 h-16 rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl -z-10"
            animate={{ 
              rotate: -5,
              scale: [1, 1.03, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturePreview;
