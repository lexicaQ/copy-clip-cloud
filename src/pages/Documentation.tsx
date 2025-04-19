
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Bookmark,
  Code, 
  FileText, 
  Key, 
  Search, 
  Shield, 
  LayoutGrid, 
  Cloud, 
  LayoutTemplate, 
  BrainCircuit, 
  Filter,
  Book,
  Copy,
  ChevronRight
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import { Button } from "@/components/ui/button";

// Document categories
const categories = [
  { id: "all", name: "All" },
  { id: "getting-started", name: "Getting Started" },
  { id: "core-features", name: "Core Features" },
  { id: "advanced", name: "Advanced Usage" },
  { id: "api", name: "API & SDK" },
  { id: "security", name: "Security" }
];

// Document data structure
interface DocumentItem {
  title: string;
  description: string;
  category: string;
  icon: React.ElementType;
  href: string;
  isNew?: boolean;
  isPopular?: boolean;
}

const documentationLinks: DocumentItem[] = [
  { 
    title: "Getting Started", 
    description: "Begin your journey with CopyClipCloud installation and setup",
    category: "getting-started", 
    href: "/docs/getting-started", 
    icon: Code,
    isPopular: true
  },
  { 
    title: "Core Features", 
    description: "Discover the fundamental capabilities of CopyClipCloud",
    category: "core-features", 
    href: "/docs/core-features", 
    icon: LayoutGrid 
  },
  { 
    title: "Cloud Sync", 
    description: "Seamlessly synchronize your clipboard across all your devices",
    category: "core-features", 
    href: "/docs/cloud-sync", 
    icon: Cloud,
    isNew: true
  },
  { 
    title: "Templates", 
    description: "Create and use reusable text templates for improved productivity",
    category: "core-features", 
    href: "/docs/templates", 
    icon: LayoutTemplate 
  },
  { 
    title: "Smart Organization", 
    description: "Let AI organize your clipboard items automatically",
    category: "core-features", 
    href: "/docs/smart-organization", 
    icon: BrainCircuit,
    isPopular: true
  },
  { 
    title: "Search & Filtering", 
    description: "Find what you need quickly with powerful search tools",
    category: "core-features", 
    href: "/docs/search-filtering", 
    icon: Filter 
  },
  { 
    title: "Keyboard Shortcuts", 
    description: "Boost your productivity with time-saving keyboard shortcuts",
    category: "advanced", 
    href: "/docs/keyboard-shortcuts", 
    icon: Key 
  },
  { 
    title: "Security", 
    description: "Understand how we protect your sensitive clipboard data",
    category: "security", 
    href: "/docs/security", 
    icon: Shield 
  },
  { 
    title: "Advanced Usage", 
    description: "Take your clipboard management to the next level",
    category: "advanced", 
    href: "/docs/advanced-usage", 
    icon: Bookmark 
  },
  { 
    title: "API Documentation", 
    description: "Integrate CopyClipCloud with your own applications",
    category: "api", 
    href: "/docs/api-documentation", 
    icon: FileText,
    isNew: true
  },
  { 
    title: "SDK", 
    description: "Use our Software Development Kit for seamless integration",
    category: "api", 
    href: "/docs/sdk", 
    icon: Code 
  },
  { 
    title: "Integration Guides", 
    description: "Connect CopyClipCloud with other tools and services",
    category: "api", 
    href: "/docs/integration-guides", 
    icon: Code 
  },
  { 
    title: "All Articles", 
    description: "Browse the complete collection of documentation articles",
    category: "all", 
    href: "/docs/all-articles", 
    icon: FileText 
  },
];

// CodeExample component with copy button
const CodeExample = ({ code, language = "javascript" }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="relative bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 my-6">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <span className="text-xs text-white/60">{language}</span>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-xs h-8 px-2 hover:bg-white/10"
          onClick={handleCopy}
        >
          <Copy className="w-3.5 h-3.5 mr-1.5" />
          {copied ? "Copied!" : "Copy code"}
        </Button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono text-white/90">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// Document card component
const DocumentCard = ({ item }: { item: DocumentItem }) => {
  const Icon = item.icon;
  
  return (
    <motion.div
      className="glass-panel p-5 hover:bg-white/5 transition-colors duration-300 h-full flex flex-col"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={item.href} className="flex flex-col h-full">
        <div className="flex items-start space-x-3 mb-3">
          <div className="p-2.5 rounded-xl bg-white/10 flex-shrink-0">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium text-white">{item.title}</h3>
              {item.isNew && (
                <span className="px-1.5 py-0.5 bg-white/10 text-white text-xs rounded">New</span>
              )}
              {item.isPopular && (
                <span className="px-1.5 py-0.5 bg-white/10 text-white text-xs rounded">Popular</span>
              )}
            </div>
            <p className="text-sm text-gray-400 mt-1 line-clamp-2">{item.description}</p>
          </div>
        </div>
        <div className="mt-auto pt-3 flex items-center text-sm text-white/70 hover:text-white transition-colors">
          <span>Read more</span>
          <ChevronRight className="w-4 h-4 ml-1" />
        </div>
      </Link>
    </motion.div>
  );
};

const Documentation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredLinks, setFilteredLinks] = useState(documentationLinks);

  useEffect(() => {
    const results = documentationLinks.filter(link => {
      const matchesSearch = link.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          link.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || link.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredLinks(results);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <SharedBackground />
      <Header />
      
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Documentation</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive guides and resources to get the most out of CopyClipCloud.
          </p>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full px-6 py-3 rounded-full bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none backdrop-blur-sm transition-colors text-white placeholder-gray-400"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            <div className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id 
                    ? 'bg-white text-black' 
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {selectedCategory === "all" && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {documentationLinks
                  .filter(link => link.category === "getting-started")
                  .map((link, index) => (
                    <DocumentCard key={index} item={link} />
                  ))}
              </div>
              
              <h2 className="text-2xl font-bold mb-6 mt-12">Core Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {documentationLinks
                  .filter(link => link.category === "core-features")
                  .map((link, index) => (
                    <DocumentCard key={index} item={link} />
                  ))}
              </div>
              
              <h2 className="text-2xl font-bold mb-6 mt-12">Advanced Usage</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {documentationLinks
                  .filter(link => link.category === "advanced")
                  .map((link, index) => (
                    <DocumentCard key={index} item={link} />
                  ))}
              </div>
              
              <h2 className="text-2xl font-bold mb-6 mt-12">API & SDK</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {documentationLinks
                  .filter(link => link.category === "api")
                  .map((link, index) => (
                    <DocumentCard key={index} item={link} />
                  ))}
              </div>
              
              <h2 className="text-2xl font-bold mb-6 mt-12">Security</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {documentationLinks
                  .filter(link => link.category === "security")
                  .map((link, index) => (
                    <DocumentCard key={index} item={link} />
                  ))}
              </div>
            </div>
          )}
          
          {selectedCategory !== "all" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLinks.map((link, index) => (
                <DocumentCard key={index} item={link} />
              ))}
            </div>
          )}
          
          {filteredLinks.length === 0 && (
            <div className="text-center py-16">
              <FileText className="w-12 h-12 mx-auto text-white/20 mb-4" />
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                We couldn't find any articles matching your search. Try using different keywords or browse all articles.
              </p>
              <Button 
                variant="outline" 
                className="mt-6"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                Reset filters
              </Button>
            </div>
          )}
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Documentation;
