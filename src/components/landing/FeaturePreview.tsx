
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Copy, Settings, Folder, Image, Link, Code, FileText, Clock, Pin, PinOff, X, Search, ChevronDown, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FeaturePreview = () => {
  const [activeCategory, setActiveCategory] = useState("Code Snippets");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [pinnedItems, setPinnedItems] = useState<string[]>([]);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState<{id: string, content: string, title: string, category: string} | null>(null);
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
      { id: "note1", title: "Meeting Notes", content: "Discuss project timeline and milestones for Q2. Need to finalize resource allocation and deliverables by Friday." },
      { id: "note2", title: "Ideas", content: "Add dark mode toggle to the dashboard. Implement new notification system. Redesign the user profile page." }
    ],
    "Images": [
      { id: "img1", title: "Logo Design", content: "logo-v2.png", isImage: true },
      { id: "img2", title: "Header Banner", content: "header-banner.jpg", isImage: true }
    ],
    "Links": [
      { id: "link1", title: "Documentation", content: "https://docs.example.com/api" },
      { id: "link2", title: "GitHub Repo", content: "https://github.com/username/project" }
    ],
    "Documents": [
      { id: "doc1", title: "Project Proposal", content: "project-proposal.pdf", isDocument: true },
      { id: "doc2", title: "User Research", content: "user-research.docx", isDocument: true }
    ],
    "Recent Items": [
      { id: "recent1", title: "API Key", content: "sk_test_12345abcdef" },
      { id: "recent2", title: "Command", content: "docker-compose up -d" }
    ]
  };

  const allItems = Object.entries(snippets).flatMap(([category, items]) => 
    items.map(item => ({ ...item, category }))
  );

  const filteredItems = searchTerm 
    ? allItems.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : snippets[activeCategory as keyof typeof snippets];

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

  const togglePinItem = (id: string) => {
    setPinnedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id) 
        : [...prev, id]
    );
    
    toast({
      title: pinnedItems.includes(id) ? "Item unpinned" : "Item pinned",
      description: pinnedItems.includes(id) ? "Item removed from pinned items" : "Item added to pinned items",
      duration: 2000,
    });
  };

  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };

  const renderItemPreview = (item: any) => {
    if (item.isImage) {
      return (
        <div className="bg-white/5 rounded-md p-2 h-full">
          <div className="aspect-video bg-white/10 rounded flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20">
              <Image className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-white/50" />
              <div className="absolute bottom-2 left-2 text-[8px] text-white/60 font-medium">{item.content}</div>
            </div>
          </div>
          <div className="mt-2 text-[10px] font-medium text-white/70">Preview of {item.title}</div>
        </div>
      );
    }
    
    if (item.isDocument) {
      return (
        <div className="bg-white/5 rounded-md p-2 h-full">
          <div className="aspect-[3/4] bg-white/10 rounded flex flex-col items-center justify-center overflow-hidden">
            <FileText className="w-12 h-12 text-white/30 mb-2" />
            <div className="text-[10px] text-white/60 font-medium">{item.content}</div>
            <div className="w-3/4 h-1 bg-white/10 rounded-full mt-4"></div>
            <div className="w-2/3 h-1 bg-white/10 rounded-full mt-2"></div>
            <div className="w-4/5 h-1 bg-white/10 rounded-full mt-2"></div>
          </div>
          <div className="mt-2 text-[10px] font-medium text-white/70">Preview of {item.title}</div>
        </div>
      );
    }
    
    return (
      <div className="bg-white/5 rounded-md p-2 h-full overflow-auto">
        <pre className="text-[10px] font-mono text-white/70 whitespace-pre-wrap">
          {item.content}
        </pre>
      </div>
    );
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
          <div className="aspect-auto min-h-[500px] rounded-xl overflow-hidden backdrop-blur-lg bg-white/[0.03] border border-white/10 shadow-xl relative">
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
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${settingsOpen ? 'bg-white/20' : 'bg-white/10'} cursor-pointer`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={toggleSettings}
                    >
                      <Settings className="w-3 h-3 text-white/70" />
                    </motion.div>
                  </div>
                </div>
                
                {/* Enhanced Content Preview */}
                <div className="flex-1 flex relative">
                  {/* Settings Panel (Absolute positioned) */}
                  {settingsOpen && (
                    <motion.div 
                      className="absolute top-0 right-0 w-64 h-full bg-black/50 backdrop-blur-md border-l border-white/10 z-20 p-3"
                      initial={{ x: 64, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 64, opacity: 0 }}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xs font-medium text-white/80">Settings</h3>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={toggleSettings}
                          className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center"
                        >
                          <X className="w-3 h-3 text-white/70" />
                        </motion.button>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="text-[10px] text-white/50 block mb-1">Theme</label>
                          <select className="w-full bg-white/5 border border-white/10 rounded text-[10px] p-1.5 text-white/70">
                            <option>Dark</option>
                            <option>Light</option>
                            <option>System</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="text-[10px] text-white/50 block mb-1">Sort items by</label>
                          <select className="w-full bg-white/5 border border-white/10 rounded text-[10px] p-1.5 text-white/70">
                            <option>Recent first</option>
                            <option>Alphabetical</option>
                            <option>Most used</option>
                          </select>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-white/50">Show preview</span>
                          <div className="w-8 h-4 bg-white/10 rounded-full flex items-center px-0.5 cursor-pointer">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-white/50">Auto-categorize</span>
                          <div className="w-8 h-4 bg-purple-500/50 rounded-full flex items-center justify-end px-0.5 cursor-pointer">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="pt-2">
                          <button className="w-full bg-white/10 hover:bg-white/15 text-[10px] text-white/70 py-1.5 rounded text-center transition-colors">
                            Reset all settings
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Item Detail View (Conditional render) */}
                  {selectedItem ? (
                    <motion.div 
                      className="absolute inset-0 flex flex-col z-10 bg-black/50 backdrop-blur-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="flex items-center justify-between p-3 border-b border-white/10">
                        <button 
                          className="flex items-center text-[10px] text-white/70 gap-1.5"
                          onClick={() => setSelectedItem(null)}
                        >
                          <ArrowRight className="w-3 h-3 rotate-180" />
                          Back
                        </button>
                        <div className="text-[10px] text-white/70">{selectedItem.title}</div>
                        <div className="flex gap-2">
                          <motion.button
                            className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleCopyItem(selectedItem.id, selectedItem.content)}
                          >
                            {copiedId === selectedItem.id ? 
                              <Check className="w-2.5 h-2.5 text-green-400" /> : 
                              <Copy className="w-2.5 h-2.5 text-white/70" />
                            }
                          </motion.button>
                          <motion.button
                            className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => togglePinItem(selectedItem.id)}
                          >
                            {pinnedItems.includes(selectedItem.id) ? 
                              <PinOff className="w-2.5 h-2.5 text-white/70" /> : 
                              <Pin className="w-2.5 h-2.5 text-white/70" />
                            }
                          </motion.button>
                        </div>
                      </div>
                      <div className="flex-1 p-4 overflow-auto">
                        <div className="h-full">
                          {renderItemPreview(selectedItem)}
                        </div>
                      </div>
                      <div className="border-t border-white/10 p-2">
                        <div className="flex justify-between items-center">
                          <div className="text-[10px] text-white/50">
                            Category: <span className="text-white/70">{selectedItem.category}</span>
                          </div>
                          <div className="text-[10px] text-white/50">
                            Added: <span className="text-white/70">Today</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                  
                  {/* Interactive Categories Sidebar */}
                  <div className="w-1/4 border-r border-white/10 p-3 space-y-2">
                    <div className="flex items-center h-6 mb-3">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full h-full bg-white/5 rounded border border-white/10 text-[10px] text-white/70 px-2 py-1 focus:outline-none focus:border-white/20"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <Search className="w-3 h-3 text-white/50 -ml-5" />
                    </div>
                    
                    <div className="mb-3">
                      <div className="text-[10px] font-medium text-white/60 uppercase tracking-wider mb-1">Categories</div>
                      {categories.map((category, i) => {
                        const CategoryIcon = getCategoryIcon(category);
                        return (
                          <motion.div 
                            key={i} 
                            className={`h-7 rounded-md flex items-center px-2 text-[10px] cursor-pointer transition-all duration-300 ${activeCategory === category && !searchTerm ? 'bg-white/10 text-white' : 'text-white/50 hover:bg-white/5'}`}
                            onClick={() => {
                              setActiveCategory(category);
                              setSearchTerm("");
                            }}
                            whileHover={{ x: 2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <CategoryIcon className="w-3 h-3 mr-2 text-white/70" />
                            {category}
                          </motion.div>
                        );
                      })}
                    </div>
                    
                    {pinnedItems.length > 0 && (
                      <div>
                        <div className="text-[10px] font-medium text-white/60 uppercase tracking-wider mb-1">Pinned</div>
                        {allItems.filter(item => pinnedItems.includes(item.id)).map((item, index) => {
                          const ItemIcon = getCategoryIcon(item.category);
                          return (
                            <motion.div 
                              key={index} 
                              className="h-7 rounded-md flex items-center px-2 text-[10px] cursor-pointer transition-all duration-300 text-white/70 hover:bg-white/5"
                              onClick={() => setSelectedItem(item)}
                              whileHover={{ x: 2 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <ItemIcon className="w-2.5 h-2.5 mr-2 text-white/70" />
                              <span className="truncate flex-1">{item.title}</span>
                              <Pin className="w-2.5 h-2.5 text-white/50" />
                            </motion.div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  
                  {/* Interactive Main Content Area */}
                  <div className="flex-1 p-3 flex flex-col">
                    <div className="mb-3 flex justify-between items-center">
                      <div className="text-xs text-white/70 font-medium">
                        {searchTerm ? 'Search Results' : activeCategory}
                      </div>
                      <div className="text-xs text-white/50">
                        {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 overflow-y-auto flex-1">
                      {filteredItems.map((item, index) => (
                        <motion.div 
                          key={index}
                          className="h-auto min-h-24 bg-white/5 rounded-md p-2 flex flex-col justify-between relative group cursor-pointer"
                          whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => setSelectedItem({...item, category: searchTerm ? item.category : activeCategory})}
                        >
                          <div className="text-xs text-white/70 mb-1 flex justify-between items-center">
                            <span className="truncate mr-1">{item.title}</span>
                            <div className="flex gap-1">
                              <motion.button
                                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-full hover:bg-white/10"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  togglePinItem(item.id);
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                {pinnedItems.includes(item.id) ? (
                                  <PinOff className="w-3 h-3 text-white/70" />
                                ) : (
                                  <Pin className="w-3 h-3 text-white/70" />
                                )}
                              </motion.button>
                              <motion.button
                                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-full hover:bg-white/10"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCopyItem(item.id, item.content);
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                {copiedId === item.id ? (
                                  <Check className="w-3 h-3 text-green-400" />
                                ) : (
                                  <Copy className="w-3 h-3 text-white/70" />
                                )}
                              </motion.button>
                            </div>
                          </div>
                          
                          <div className="text-[10px] font-mono text-white/50 overflow-hidden whitespace-pre-wrap max-h-20">
                            {item.isImage ? (
                              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 aspect-video rounded flex items-center justify-center">
                                <Image className="w-6 h-6 text-white/30" />
                              </div>
                            ) : item.isDocument ? (
                              <div className="flex items-center">
                                <FileText className="w-5 h-5 text-white/30 mr-1" />
                                <span>{item.content}</span>
                              </div>
                            ) : (
                              item.content
                            )}
                          </div>
                          
                          {pinnedItems.includes(item.id) && (
                            <div className="absolute top-1 right-1 w-3 h-3 flex items-center justify-center">
                              <Pin className="w-2.5 h-2.5 text-white/50" />
                            </div>
                          )}
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
