import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, ArrowRight, Check, Tags, Filter, Zap, Code } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";

const SmartOrganization = () => {
  const [activeTab, setActiveTab] = useState("categories");
  
  return (
    <div className="min-h-screen bg-background">
      <SharedBackground />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            to="/features" 
            className="inline-flex items-center text-sm text-white/70 hover:text-white mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Features
          </Link>
          
          <div className="glass-panel p-8 rounded-xl mb-12">
            <div className="flex items-center mb-8">
              <div className="p-4 rounded-xl bg-white/10 mr-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white">Smart Organization</h1>
                <p className="text-gray-400 mt-2 text-lg">AI-powered clipboard management</p>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed">
                Never lose track of important copied content again. CopyClipCloud's AI automatically categorizes your clipboard items, creating smart collections for code snippets, addresses, URLs, and more. The intelligent system learns from your usage patterns to suggest and prioritize the content you need most.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Feature tabs */}
        <div className="mb-12">
          <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
            {[
              { id: "categories", label: "Smart Categories" },
              { id: "tagging", label: "Intelligent Tagging" },
              { id: "filters", label: "Advanced Filters" },
              { id: "learning", label: "Personalized Learning" }
            ].map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-3 rounded-lg whitespace-nowrap transition-colors ${
                  activeTab === tab.id 
                    ? "bg-white/10 text-white" 
                    : "bg-white/5 text-white/70 hover:bg-white/8"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 rounded-xl"
          >
            {activeTab === "categories" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gradient">Smart Categories</h2>
                  <p className="text-gray-300 mb-6">
                    Our AI identifies the type of content you copy and automatically organizes it into the right category:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Code snippets with language detection",
                      "URLs with website metadata",
                      "Text notes with auto-summarization",
                      "Images with visual recognition",
                      "Addresses with map integration",
                      "Contact information with vCard support"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 relative overflow-hidden">
                  <h3 className="text-lg font-medium mb-4">Smart Categories in Action</h3>
                  
                  {/* Animated visualization */}
                  <div className="relative h-80">
                    {[
                      { type: "Code", color: "bg-blue-500/20", x: "10%", y: "20%", scale: 1.1 },
                      { type: "URL", color: "bg-green-500/20", x: "60%", y: "15%", scale: 0.9 },
                      { type: "Text", color: "bg-yellow-500/20", x: "30%", y: "40%", scale: 1 },
                      { type: "Image", color: "bg-purple-500/20", x: "70%", y: "60%", scale: 1.2 },
                      { type: "Address", color: "bg-red-500/20", x: "20%", y: "70%", scale: 0.8 }
                    ].map((category, index) => (
                      <motion.div
                        key={index}
                        className={`absolute w-24 h-24 ${category.color} rounded-lg border border-white/10 flex items-center justify-center text-white`}
                        style={{ left: category.x, top: category.y }}
                        animate={{ 
                          scale: [category.scale, category.scale * 1.1, category.scale],
                          rotate: [0, 5, 0, -5, 0]
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 8 + index, 
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                      >
                        {category.type}
                      </motion.div>
                    ))}
                    
                    <motion.div
                      className="absolute left-1/2 top-1/2 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(255, 255, 255, 0.1)",
                          "0 0 0 20px rgba(255, 255, 255, 0)",
                          "0 0 0 0 rgba(255, 255, 255, 0.1)"
                        ]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2
                      }}
                    >
                      <Sparkles className="w-8 h-8 text-white/70" />
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "tagging" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gradient">Intelligent Tagging</h2>
                  <p className="text-gray-300 mb-6">
                    CopyClipCloud analyzes your clipboard content and suggests relevant tags automatically:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Content-aware tag suggestions",
                      "Contextual project linking",
                      "Document type recognition",
                      "Programming language detection",
                      "Custom tagging rules",
                      "Tag hierarchy and organization"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 relative overflow-hidden">
                  <h3 className="text-lg font-medium mb-4">Tagging Demonstration</h3>
                  
                  <div className="space-y-4">
                    {[
                      { content: "function calculateTotal(items) { return items.reduce((sum, item) => sum + item.price, 0); }", tags: ["JavaScript", "Function", "Calculation"] },
                      { content: "123 Main Street, Anytown, CA 94538", tags: ["Address", "Location", "Personal"] },
                      { content: "Meeting with design team on Thursday at 3pm", tags: ["Meeting", "Calendar", "Design"] }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="bg-white/5 rounded-lg p-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                      >
                        <div className="font-mono text-sm text-white/70 mb-3 truncate">
                          {item.content}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Tags className="w-4 h-4 text-white/50 mr-1" />
                          {item.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tagIndex}
                              className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: index * 0.2 + tagIndex * 0.1 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                          <motion.span
                            className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-white/80 flex items-center"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.2 + item.tags.length * 0.1 }}
                          >
                            <Sparkles className="w-3 h-3 mr-1" />
                            Add tag
                          </motion.span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "filters" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gradient">Advanced Filters</h2>
                  <p className="text-gray-300 mb-6">
                    Find exactly what you need with powerful filtering capabilities:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Filter by content type (code, text, image, etc.)",
                      "Search by date and time ranges",
                      "Filter by source application",
                      "Combine multiple filter criteria",
                      "Save custom filter presets",
                      "Natural language search queries"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 relative overflow-hidden">
                  <h3 className="text-lg font-medium mb-4">Filter Interface</h3>
                  
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-white/10 w-full rounded-lg p-2 flex items-center">
                        <Filter className="w-4 h-4 text-white/50 mr-2" />
                        <div className="text-sm text-white/70">Search and filter clipboard items...</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {[
                        { label: "Last 7 days", icon: null },
                        { label: "Code only", icon: Code },
                        { label: "From VS Code", icon: null }
                      ].map((filter, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center bg-purple-500/20 text-white rounded-full px-3 py-1 text-xs"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {filter.icon && <filter.icon className="w-3 h-3 mr-1" />}
                          {filter.label}
                          <motion.div 
                            className="ml-1 w-3 h-3 rounded-full bg-white/20 flex items-center justify-center cursor-pointer"
                            whileHover={{ scale: 1.2, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                          >
                            <span className="text-[8px]">×</span>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      {[
                        { title: "React Component", timestamp: "Today, 2:45 PM", app: "VS Code" },
                        { title: "API Endpoint", timestamp: "Yesterday", app: "Chrome" },
                        { title: "Function Example", timestamp: "3 days ago", app: "VS Code" }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex justify-between items-center p-2 rounded bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <div className="text-sm text-white/80">{item.title}</div>
                          <div className="text-xs text-white/50 flex items-center">
                            <span className="mr-3">{item.timestamp}</span>
                            <span>{item.app}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "learning" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gradient">Personalized Learning</h2>
                  <p className="text-gray-300 mb-6">
                    The more you use CopyClipCloud, the smarter it gets at organizing your content:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Adapts to your usage patterns over time",
                      "Prioritizes frequently used content types",
                      "Learns relationships between content and projects",
                      "Suggests context-aware actions based on content",
                      "Personalizes organization schemes to your workflow",
                      "Improves recognition accuracy with use"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 relative overflow-hidden">
                  <h3 className="text-lg font-medium mb-4">Adaptive Learning Visualization</h3>
                  
                  <div className="relative h-80 flex items-center justify-center">
                    <motion.div
                      className="absolute w-40 h-40 rounded-full border border-white/10 flex items-center justify-center"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 360],
                        borderColor: [
                          "rgba(255, 255, 255, 0.1)",
                          "rgba(255, 255, 255, 0.2)",
                          "rgba(255, 255, 255, 0.1)"
                        ]
                      }}
                      transition={{ 
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    <motion.div
                      className="absolute w-80 h-80 rounded-full border border-white/5 flex items-center justify-center"
                      animate={{ 
                        rotate: [360, 0],
                        borderColor: [
                          "rgba(255, 255, 255, 0.05)",
                          "rgba(255, 255, 255, 0.1)",
                          "rgba(255, 255, 255, 0.05)"
                        ]
                      }}
                      transition={{ 
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    <motion.div
                      className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center z-10"
                      animate={{ 
                        boxShadow: [
                          "0 0 20px 0 rgba(147, 51, 234, 0.3)",
                          "0 0 40px 0 rgba(147, 51, 234, 0.6)",
                          "0 0 20px 0 rgba(147, 51, 234, 0.3)"
                        ]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Zap className="w-10 h-10 text-purple-400" />
                    </motion.div>
                    
                    {[...Array(5)].map((_, index) => (
                      <motion.div
                        key={index}
                        className="absolute w-3 h-3 rounded-full bg-purple-500/50"
                        initial={{ 
                          x: 0, 
                          y: 0, 
                          scale: 0 
                        }}
                        animate={{ 
                          x: Math.sin(index * 1.3) * 120,
                          y: Math.cos(index * 1.3) * 120,
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.6,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="glass-panel p-8 rounded-xl text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-gradient">Experience Smart Organization</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let AI do the organizing for you. Download CopyClipCloud today and discover how intelligent clipboard management can transform your workflow.
          </p>
          <Link 
            to="/download"
            className="btn-modern inline-flex items-center gap-2 text-lg px-8 py-3"
          >
            Download Now <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SmartOrganization;
