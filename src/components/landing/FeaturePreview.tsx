
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Check, 
  Copy, 
  Settings, 
  Folder, 
  Image, 
  Link, 
  Code, 
  FileText, 
  Clock, 
  Pin, 
  PinOff, 
  X, 
  Search, 
  ChevronDown, 
  Eye, 
  EyeOff,
  Download,
  Share,
  Edit,
  Trash
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const FeaturePreview = () => {
  const [activeCategory, setActiveCategory] = useState("Code Snippets");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [pinnedItems, setPinnedItems] = useState<string[]>([]);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState<{id: string, content: string, title: string, category: string, isImage?: boolean, isDocument?: boolean} | null>(null);
  const [previewDialogOpen, setPreviewDialogOpen] = useState(false);
  const [settingsDialogOpen, setSettingsDialogOpen] = useState(false);
  const { toast } = useToast();

  const categories = [
    "Recent Items",
    "Code Snippets",
    "Text Notes",
    "Images",
    "Links",
    "Documents",
    "Personal",
    "Work",
    "Archive"
  ];

  const snippets = {
    "Code Snippets": [
      { id: "react1", title: "React Component", content: "const Button = () => {\n  return <button>Click</button>\n}" },
      { id: "css1", title: "CSS Snippet", content: ".container {\n  display: flex;\n  justify-content: center;\n}" },
      { id: "api1", title: "API Endpoint", content: "GET /api/users/:id" },
      { id: "sql1", title: "SQL Query", content: "SELECT * FROM users\nWHERE status = 'active'" },
      { id: "js1", title: "JavaScript Function", content: "function calculateTotal(items) {\n  return items.reduce((sum, item) => sum + item.price, 0);\n}" },
      { id: "ts1", title: "TypeScript Interface", content: "interface User {\n  id: string;\n  name: string;\n  email: string;\n  role: 'admin' | 'user';\n}" }
    ],
    "Text Notes": [
      { id: "note1", title: "Meeting Notes", content: "Discuss project timeline and milestones for Q2. Need to finalize resource allocation and deliverables by Friday." },
      { id: "note2", title: "Ideas", content: "Add dark mode toggle to the dashboard. Implement new notification system. Redesign the user profile page." },
      { id: "note3", title: "Shopping List", content: "Milk, Eggs, Bread, Coffee, Apples, Pasta, Tomato Sauce" },
      { id: "note4", title: "Book Recommendations", content: "1. Atomic Habits by James Clear\n2. Deep Work by Cal Newport\n3. The Design of Everyday Things by Don Norman" }
    ],
    "Images": [
      { id: "img1", title: "Logo Design", content: "/placeholder.svg", isImage: true },
      { id: "img2", title: "Header Banner", content: "/placeholder.svg", isImage: true },
      { id: "img3", title: "Profile Photo", content: "/placeholder.svg", isImage: true },
      { id: "img4", title: "Product Mockup", content: "/placeholder.svg", isImage: true },
      { id: "img5", title: "Website Wireframe", content: "/placeholder.svg", isImage: true }
    ],
    "Links": [
      { id: "link1", title: "Documentation", content: "https://docs.example.com/api" },
      { id: "link2", title: "GitHub Repo", content: "https://github.com/username/project" },
      { id: "link3", title: "Design Inspiration", content: "https://dribbble.com/shots/popular" },
      { id: "link4", title: "Tutorial Video", content: "https://youtube.com/watch?v=example" },
      { id: "link5", title: "Color Palette Tool", content: "https://coolors.co/generate" }
    ],
    "Documents": [
      { id: "doc1", title: "Project Proposal", content: "project-proposal.pdf", isDocument: true },
      { id: "doc2", title: "User Research", content: "user-research.docx", isDocument: true },
      { id: "doc3", title: "Marketing Plan", content: "marketing-q3.pdf", isDocument: true },
      { id: "doc4", title: "Financial Report", content: "finance-2024.xlsx", isDocument: true },
      { id: "doc5", title: "Legal Contract", content: "service-agreement.pdf", isDocument: true }
    ],
    "Recent Items": [
      { id: "recent1", title: "API Key", content: "sk_test_12345abcdef" },
      { id: "recent2", title: "Command", content: "docker-compose up -d" },
      { id: "recent3", title: "Login Credentials", content: "admin / Temp123!" },
      { id: "recent4", title: "Meeting Link", content: "https://meet.example.com/team-standup" }
    ],
    "Personal": [
      { id: "personal1", title: "Vacation Ideas", content: "1. Japan - Cherry blossom season\n2. Italy - Rome, Florence, Venice\n3. New Zealand - Hiking and nature" },
      { id: "personal2", title: "Gift Ideas", content: "Mom: Cooking class subscription\nDad: Vintage vinyl records\nSister: Art prints" },
      { id: "personal3", title: "Home Renovation", content: "Kitchen remodel: $15,000-20,000\nBathroom update: $8,000-10,000\nNew furniture: $3,000" }
    ],
    "Work": [
      { id: "work1", title: "Client Meeting Notes", content: "Acme Corp wants to redesign their website. Budget: $15,000. Timeline: 8 weeks." },
      { id: "work2", title: "Project Deadlines", content: "Design mockups: May 15\nFrontend development: June 10\nBackend integration: June 25\nTesting: July 5" },
      { id: "work3", title: "Team Goals Q2", content: "1. Launch mobile app version\n2. Reduce bug backlog by 50%\n3. Improve test coverage to 80%" }
    ],
    "Archive": [
      { id: "archive1", title: "Old Notes", content: "Legacy system documentation from 2020 project." },
      { id: "archive2", title: "Previous Logo", content: "/placeholder.svg", isImage: true },
      { id: "archive3", title: "2023 Tax Documents", content: "tax-return-2023.pdf", isDocument: true }
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
      case "Personal": return User;
      case "Work": return Briefcase;
      case "Archive": return Archive;
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

  const openPreviewDialog = (item: any) => {
    setSelectedItem(item);
    setPreviewDialogOpen(true);
  };

  const openSettingsDialog = (item: any) => {
    setSelectedItem(item);
    setSettingsDialogOpen(true);
  };

  const renderItemPreview = (item: any) => {
    if (item.isImage) {
      return (
        <div className="bg-white/5 rounded-md p-2 h-full">
          <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded flex items-center justify-center overflow-hidden">
            <img 
              src={item.content} 
              alt={item.title} 
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </div>
          <div className="mt-2 text-[10px] font-medium text-white/70">Preview of {item.title}</div>
        </div>
      );
    }
    
    if (item.isDocument) {
      const getDocumentIcon = (filename: string) => {
        const extension = filename.split('.').pop()?.toLowerCase();
        switch(extension) {
          case 'pdf': return <FileText className="w-12 h-12 text-red-400/50" />;
          case 'docx': 
          case 'doc': return <FileText className="w-12 h-12 text-blue-400/50" />;
          case 'xlsx': 
          case 'xls': return <FileText className="w-12 h-12 text-green-400/50" />;
          case 'pptx': 
          case 'ppt': return <FileText className="w-12 h-12 text-orange-400/50" />;
          default: return <FileText className="w-12 h-12 text-white/30" />;
        }
      };
      
      return (
        <div className="bg-white/5 rounded-md p-2 h-full">
          <div className="aspect-[3/4] bg-white/10 rounded flex flex-col items-center justify-center overflow-hidden">
            {getDocumentIcon(item.content)}
            <div className="text-[10px] text-white/60 font-medium mt-2">{item.content}</div>
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

  const renderDetailedPreview = (item: any) => {
    if (item.isImage) {
      return (
        <div className="bg-white/5 rounded-md p-4 flex flex-col items-center justify-center">
          <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg overflow-hidden max-w-full max-h-[400px]">
            <img 
              src={item.content} 
              alt={item.title} 
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </div>
          <div className="mt-4 text-sm font-medium text-white/70 w-full">
            <div className="flex justify-between mb-2">
              <span>Filename:</span>
              <span className="text-white">{item.content.split('/').pop()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Type:</span>
              <span className="text-white">Image</span>
            </div>
            <div className="flex justify-between">
              <span>Added:</span>
              <span className="text-white">Today</span>
            </div>
          </div>
        </div>
      );
    }
    
    if (item.isDocument) {
      const getDocumentIcon = (filename: string) => {
        const extension = filename.split('.').pop()?.toLowerCase();
        switch(extension) {
          case 'pdf': return <FileText className="w-20 h-20 text-red-400/50" />;
          case 'docx': 
          case 'doc': return <FileText className="w-20 h-20 text-blue-400/50" />;
          case 'xlsx': 
          case 'xls': return <FileText className="w-20 h-20 text-green-400/50" />;
          case 'pptx': 
          case 'ppt': return <FileText className="w-20 h-20 text-orange-400/50" />;
          default: return <FileText className="w-20 h-20 text-white/30" />;
        }
      };
      
      return (
        <div className="bg-white/5 rounded-md p-4 flex flex-col items-center">
          <div className="aspect-[3/4] w-48 bg-white/10 rounded-lg flex flex-col items-center justify-center overflow-hidden border border-white/10">
            {getDocumentIcon(item.content)}
            <div className="text-sm text-white/60 font-medium mt-3">{item.content}</div>
            <div className="w-3/4 h-1 bg-white/10 rounded-full mt-6"></div>
            <div className="w-2/3 h-1 bg-white/10 rounded-full mt-3"></div>
            <div className="w-4/5 h-1 bg-white/10 rounded-full mt-3"></div>
          </div>
          <div className="mt-4 text-sm font-medium text-white/70 w-full">
            <div className="flex justify-between mb-2">
              <span>Filename:</span>
              <span className="text-white">{item.content}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Type:</span>
              <span className="text-white">{item.content.split('.').pop()?.toUpperCase()}</span>
            </div>
            <div className="flex justify-between">
              <span>Added:</span>
              <span className="text-white">Today</span>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="bg-white/5 rounded-md p-4 h-full">
        <div className="max-h-[400px] overflow-auto rounded-md bg-black/30 p-4 font-mono text-white/90 whitespace-pre-wrap text-sm border border-white/10">
          {item.content}
        </div>
        <div className="mt-4 text-sm font-medium text-white/70">
          <div className="flex justify-between mb-2">
            <span>Type:</span>
            <span className="text-white">
              {item.category === "Code Snippets" ? "Code" : 
               item.category === "Links" ? "URL" : "Text"}
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Characters:</span>
            <span className="text-white">{item.content.length}</span>
          </div>
          <div className="flex justify-between">
            <span>Added:</span>
            <span className="text-white">Today</span>
          </div>
        </div>
      </div>
    );
  };

  // Import missing icons
  const User = (props: any) => (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );

  const Briefcase = (props: any) => (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );

  const Archive = (props: any) => (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="5" x="2" y="3" rx="1" />
      <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
      <path d="M10 12h4" />
    </svg>
  );

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
                  <div className="w-1/5 border-r border-white/10 p-2 space-y-1.5">
                    <div className="flex items-center h-6 mb-2">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full h-full bg-white/5 rounded border border-white/10 text-[8px] text-white/70 px-2 py-1 focus:outline-none focus:border-white/20"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <Search className="w-2.5 h-2.5 text-white/50 -ml-4" />
                    </div>
                    
                    <div className="mb-2">
                      <div className="text-[8px] font-medium text-white/60 uppercase tracking-wider mb-1 pl-1">Categories</div>
                      <div className="max-h-[300px] overflow-y-auto pr-1 space-y-0.5">
                        {categories.map((category, i) => {
                          const CategoryIcon = getCategoryIcon(category);
                          return (
                            <motion.div 
                              key={i} 
                              className={`h-6 rounded-md flex items-center px-2 text-[8px] cursor-pointer transition-all duration-300 ${activeCategory === category && !searchTerm ? 'bg-white/10 text-white' : 'text-white/50 hover:bg-white/5'}`}
                              onClick={() => {
                                setActiveCategory(category);
                                setSearchTerm("");
                              }}
                              whileHover={{ x: 2 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <CategoryIcon className="w-2.5 h-2.5 mr-1.5 text-white/70" />
                              {category}
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                    
                    {pinnedItems.length > 0 && (
                      <div>
                        <div className="text-[8px] font-medium text-white/60 uppercase tracking-wider mb-1 pl-1">Pinned</div>
                        <div className="max-h-[120px] overflow-y-auto pr-1 space-y-0.5">
                          {allItems.filter(item => pinnedItems.includes(item.id)).map((item, index) => {
                            const ItemIcon = getCategoryIcon(item.category);
                            return (
                              <motion.div 
                                key={index} 
                                className="h-6 rounded-md flex items-center px-2 text-[8px] cursor-pointer transition-all duration-300 text-white/70 hover:bg-white/5"
                                onClick={() => setSelectedItem(item)}
                                whileHover={{ x: 2 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <ItemIcon className="w-2 h-2 mr-1.5 text-white/70" />
                                <span className="truncate flex-1">{item.title}</span>
                                <Pin className="w-2 h-2 text-white/50" />
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Interactive Main Content Area */}
                  <div className="flex-1 p-2 flex flex-col">
                    <div className="mb-2 flex justify-between items-center">
                      <div className="text-xs text-white/70 font-medium">
                        {searchTerm ? 'Search Results' : activeCategory}
                      </div>
                      <div className="text-[9px] text-white/50">
                        {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 overflow-y-auto flex-1">
                      {filteredItems.map((item, index) => (
                        <motion.div 
                          key={index}
                          className="h-auto min-h-20 bg-white/5 hover:bg-white/8 rounded-md p-1.5 flex flex-col justify-between relative group cursor-pointer border border-white/5 hover:border-white/10 transition-colors"
                          whileHover={{ scale: 1.02 }}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <div 
                            className="text-[9px] text-white/70 mb-1 flex justify-between items-center"
                            onClick={() => openPreviewDialog(item)}
                          >
                            <span className="truncate mr-1 font-medium">{item.title}</span>
                            <div className="flex gap-0.5">
                              <motion.button
                                className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 rounded-full hover:bg-white/10"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  togglePinItem(item.id);
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                {pinnedItems.includes(item.id) ? (
                                  <PinOff className="w-2 h-2 text-white/70" />
                                ) : (
                                  <Pin className="w-2 h-2 text-white/70" />
                                )}
                              </motion.button>
                              <motion.button
                                className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 rounded-full hover:bg-white/10"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCopyItem(item.id, item.content);
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                {copiedId === item.id ? (
                                  <Check className="w-2 h-2 text-green-400" />
                                ) : (
                                  <Copy className="w-2 h-2 text-white/70" />
                                )}
                              </motion.button>
                              <motion.button
                                className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 rounded-full hover:bg-white/10"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openSettingsDialog(item);
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Settings className="w-2 h-2 text-white/70" />
                              </motion.button>
                            </div>
                          </div>
                          
                          <div 
                            className="flex-1 min-h-12 flex items-center justify-center rounded-md overflow-hidden bg-white/5"
                            onClick={() => openPreviewDialog(item)}
                          >
                            {item.isImage ? (
                              <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center aspect-video">
                                <img 
                                  src={item.content} 
                                  alt={item.title}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = "/placeholder.svg";
                                  }}
                                />
                              </div>
                            ) : item.isDocument ? (
                              <div className="w-full h-full p-2 flex flex-col items-center justify-center">
                                {(() => {
                                  const extension = item.content.split('.').pop()?.toLowerCase();
                                  switch(extension) {
                                    case 'pdf': return <FileText className="w-6 h-6 text-red-400/50" />;
                                    case 'docx': 
                                    case 'doc': return <FileText className="w-6 h-6 text-blue-400/50" />;
                                    case 'xlsx': 
                                    case 'xls': return <FileText className="w-6 h-6 text-green-400/50" />;
                                    case 'pptx': 
                                    case 'ppt': return <FileText className="w-6 h-6 text-orange-400/50" />;
                                    default: return <FileText className="w-6 h-6 text-white/30" />;
                                  }
                                })()}
                                <span className="text-[8px] text-white/50 mt-1 truncate max-w-full">{item.content}</span>
                              </div>
                            ) : item.category === "Links" ? (
                              <div className="w-full h-full p-2 flex flex-col items-center justify-center">
                                <Link className="w-6 h-6 text-purple-400/50" />
                                <span className="text-[8px] text-white/50 mt-1 truncate max-w-full">{item.content}</span>
                              </div>
                            ) : (
                              <div className="text-[8px] font-mono text-white/60 p-1.5 overflow-hidden max-h-full line-clamp-4">
                                {item.content}
                              </div>
                            )}
                          </div>
                          
                          <div className="mt-1 flex justify-between items-center">
                            <div className="text-[7px] text-white/40">
                              {new Date().toLocaleDateString()}
                            </div>
                            <div className="flex gap-0.5">
                              {pinnedItems.includes(item.id) && (
                                <Pin className="w-2 h-2 text-white/40" />
                              )}
                              <div className="w-1.5 h-1.5 rounded-full bg-green-400/50"></div>
                            </div>
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

      {/* Preview Dialog */}
      <Dialog open={previewDialogOpen} onOpenChange={setPreviewDialogOpen}>
        <DialogContent className="sm:max-w-[600px] bg-zinc-900/95 border-white/10">
          <DialogHeader>
            <DialogTitle className="text-white">{selectedItem?.title}</DialogTitle>
            <DialogDescription className="text-white/60">
              {selectedItem?.category}
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            {selectedItem && renderDetailedPreview(selectedItem)}
          </div>
          
          <DialogFooter className="flex justify-between items-center">
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white/5 border-white/10 hover:bg-white/10 text-white"
                onClick={() => handleCopyItem(selectedItem?.id || '', selectedItem?.content || '')}
              >
                {copiedId === selectedItem?.id ? 
                  <Check className="w-4 h-4 mr-2" /> : 
                  <Copy className="w-4 h-4 mr-2" />
                }
                Copy
              </Button>
              
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white/5 border-white/10 hover:bg-white/10 text-white"
                onClick={() => togglePinItem(selectedItem?.id || '')}
              >
                {pinnedItems.includes(selectedItem?.id || '') ? 
                  <PinOff className="w-4 h-4 mr-2" /> : 
                  <Pin className="w-4 h-4 mr-2" />
                }
                {pinnedItems.includes(selectedItem?.id || '') ? 'Unpin' : 'Pin'}
              </Button>
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
              className="bg-white/5 border-white/10 hover:bg-white/10 text-white"
              onClick={() => {
                setPreviewDialogOpen(false);
                openSettingsDialog(selectedItem);
              }}
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Settings Dialog */}
      <Dialog open={settingsDialogOpen} onOpenChange={setSettingsDialogOpen}>
        <DialogContent className="sm:max-w-[500px] bg-zinc-900/95 border-white/10">
          <DialogHeader>
            <DialogTitle className="text-white">Item Settings</DialogTitle>
            <DialogDescription className="text-white/60">
              Configure and manage this clipboard item
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4 space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-white/70">Title</label>
              <input 
                type="text" 
                value={selectedItem?.title} 
                className="w-full bg-white/5 border border-white/10 rounded-md py-2 px-3 text-white/90 text-sm focus:outline-none focus:ring-2 focus:ring-white/20"
                readOnly
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-white/70">Category</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-md py-2 px-3 text-white/90 text-sm focus:outline-none focus:ring-2 focus:ring-white/20">
                {categories.map((category) => (
                  <option key={category} value={category} selected={category === selectedItem?.category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-white/70">Tags</label>
              <input 
                type="text" 
                placeholder="Add tags separated by commas" 
                className="w-full bg-white/5 border border-white/10 rounded-md py-2 px-3 text-white/90 text-sm focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            
            <div className="space-y-1">
              <h3 className="text-sm text-white/70">Options</h3>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 bg-white/5 rounded-md p-2">
                  <input type="checkbox" id="auto-delete" className="h-4 w-4 accent-purple-500" />
                  <label htmlFor="auto-delete" className="text-xs text-white/70">Auto-delete after 30 days</label>
                </div>
                
                <div className="flex items-center gap-2 bg-white/5 rounded-md p-2">
                  <input type="checkbox" id="read-only" className="h-4 w-4 accent-purple-500" />
                  <label htmlFor="read-only" className="text-xs text-white/70">Set as read-only</label>
                </div>
                
                <div className="flex items-center gap-2 bg-white/5 rounded-md p-2">
                  <input type="checkbox" id="encrypt" className="h-4 w-4 accent-purple-500" checked />
                  <label htmlFor="encrypt" className="text-xs text-white/70">Encrypt content</label>
                </div>
                
                <div className="flex items-center gap-2 bg-white/5 rounded-md p-2">
                  <input type="checkbox" id="sync" className="h-4 w-4 accent-purple-500" checked />
                  <label htmlFor="sync" className="text-xs text-white/70">Sync across devices</label>
                </div>
              </div>
            </div>
          </div>
          
          <DialogFooter className="flex justify-between items-center">
            <Button 
              variant="destructive" 
              size="sm"
              className="bg-red-500/20 hover:bg-red-500/30 text-white border-none"
            >
              <Trash className="w-4 h-4 mr-2" />
              Delete Item
            </Button>
            
            <div className="flex gap-2">
              <Button 
                variant="secondary" 
                size="sm"
                onClick={() => setSettingsDialogOpen(false)}
              >
                Cancel
              </Button>
              
              <Button 
                variant="default" 
                size="sm"
                onClick={() => {
                  setSettingsDialogOpen(false);
                  toast({
                    title: "Settings updated",
                    description: "Your changes have been saved",
                    duration: 2000,
                  });
                }}
              >
                Save Changes
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default FeaturePreview;
