
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Copy, Settings, Folder, Image, Link, Code, FileText, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FeaturePreview = () => {
  const [activeCategory, setActiveCategory] = useState("Code Snippets");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { toast } = useToast();

  const categories = [
    "Recent Items",
    "Code Snippets",
    "Text Notes",
    "Images",
    "Links",
    "Documents"
  ];

  const snippets = {
    "Code Snippets": [
      { id: "react1", title: "React Component", content: "const Button = () => {\n  return <button>Click</button>\n}" },
      { id: "css1", title: "CSS Snippet", content: ".container {\n  display: flex;\n  justify-content: center;\n}" },
      { id: "api1", title: "API Endpoint", content: "GET /api/users/:id" },
      { id: "sql1", title: "SQL Query", content: "SELECT * FROM users\nWHERE status = 'active'" }
    ],
    "Text Notes": [
      { id: "note1", title: "Meeting Notes", content: "Discuss project timeline and milestones" },
      { id: "note2", title: "Ideas", content: "Add dark mode toggle to the dashboard" }
    ],
    "Images": [
      { id: "img1", title: "Logo Design", content: "[Image: logo-v2.png]" },
      { id: "img2", title: "Header Banner", content: "[Image: header-banner.jpg]" }
    ],
    "Links": [
      { id: "link1", title: "Documentation", content: "https://docs.example.com/api" },
      { id: "link2", title: "GitHub Repo", content: "https://github.com/username/project" }
    ],
    "Documents": [
      { id: "doc1", title: "Project Proposal", content: "[Document: project-proposal.pdf]" },
      { id: "doc2", title: "User Research", content: "[Document: user-research.docx]" }
    ],
    "Recent Items": [
      { id: "recent1", title: "API Key", content: "sk_test_12345abcdef" },
      { id: "recent2", title: "Command", content: "docker-compose up -d" }
    ]
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "Code Snippets": return Code;
      case "Text Notes": return FileText;
      case "Images": return Image;
      case "Links": return Link;
      case "Documents": return Folder;
      case "Recent Items": return Clock;
      default: return FileText;
    }
  };

  const handleCopyItem = (id: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    toast({
      title: "Copied to clipboard",
      description: "Content has been copied to your clipboard",
      duration: 2000,
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <motion.div 
      className="py-24 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
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
            {/* Enhanced Interactive UI Preview */}
            <div className="absolute inset-0 p-4">
              <div className="w-full h-full rounded-lg border border-white/10 overflow-hidden flex flex-col">
                {/* UI Header */}
                <div className="h-10 border-b border-white/10 flex items-center px-4 gap-3">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  </div>
                  <div className="flex-1 text-xs text-white/50 text-center">CopyClipCloud</div>
                  <div className="flex items-center gap-2">
                    <motion.div 
                      className="w-6 h-6 rounded-full flex items-center justify-center bg-white/10 cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Settings className="w-3 h-3 text-white/70" />
                    </motion.div>
                  </div>
                </div>
                
                {/* Enhanced Content Preview */}
                <div className="flex-1 flex">
                  {/* Interactive Categories Sidebar */}
                  <div className="w-1/4 border-r border-white/10 p-3 space-y-2">
                    {categories.map((category, i) => {
                      const CategoryIcon = getCategoryIcon(category);
                      return (
                        <motion.div 
                          key={i} 
                          className={`h-8 rounded-md flex items-center px-2 text-xs cursor-pointer transition-all duration-300 ${activeCategory === category ? 'bg-white/10 text-white' : 'text-white/50 hover:bg-white/5'}`}
                          onClick={() => setActiveCategory(category)}
                          whileHover={{ x: 2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <CategoryIcon className="w-3 h-3 mr-2 text-white/70" />
                          {category}
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  {/* Interactive Main Content Area */}
                  <div className="flex-1 p-3">
                    <div className="mb-3 flex justify-between items-center">
                      <div className="text-xs text-white/70 font-medium">{activeCategory}</div>
                      <div className="text-xs text-white/50">{snippets[activeCategory as keyof typeof snippets].length} items</div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {snippets[activeCategory as keyof typeof snippets].map((item, index) => (
                        <motion.div 
                          key={index}
                          className="h-auto min-h-24 bg-white/5 rounded-md p-2 flex flex-col justify-between relative group cursor-pointer"
                          whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="text-xs text-white/70 mb-1 flex justify-between items-center">
                            <span>{item.title}</span>
                            <motion.button
                              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-full hover:bg-white/10"
                              onClick={() => handleCopyItem(item.id, item.content)}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              {copiedId === item.id ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3 text-white/70" />}
                            </motion.button>
                          </div>
                          <div className="text-[10px] font-mono text-white/50 overflow-hidden whitespace-pre-wrap">
                            {item.content}
                          </div>
                        </motion.div>
                      ))}
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
