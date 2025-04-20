import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronRight,
  Sparkles
} from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import { Button } from "@/components/ui/button";
import { ComingSoon } from "@/components/ui/coming-soon";

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
  comingSoon?: boolean;
}

const documentationLinks: DocumentItem[] = [
  { 
    title: "Getting Started", 
    description: "Begin your journey with CopyClipCloud installation and setup",
    category: "getting-started", 
    href: "/docs/getting-started", 
    icon: Book,
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
    title: "API Explorer", 
    description: "Interactive tool to test and explore our API endpoints",
    category: "api", 
    href: "/docs/api-explorer", 
    icon: Code,
    comingSoon: true
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
    title: "Developer Portal", 
    description: "Access developer resources and manage API keys",
    category: "api", 
    href: "/docs/developer-portal", 
    icon: Bookmark,
    comingSoon: true 
  },
  { 
    title: "All Articles", 
    description: "Browse the complete collection of documentation articles",
    category: "all", 
    href: "/docs/all-articles", 
    icon: FileText 
  },
];

// Document card component with improved styling
const DocumentCard = ({ item }: { item: DocumentItem }) => {
  const Icon = item.icon;
  
  return (
    <motion.div
      className="glass-panel p-6 hover:bg-white/5 transition-colors duration-300 h-full flex flex-col relative overflow-visible shadow-lg border border-white/10"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
    >
      {item.comingSoon && (
        <div className="absolute -top-3 -right-3 z-10">
          <ComingSoon />
        </div>
      )}
      <Link 
        to={item.comingSoon ? "#" : item.href} 
        className={`flex flex-col h-full ${item.comingSoon ? 'pointer-events-none' : ''}`}
      >
        <div className="flex items-start space-x-4 mb-4">
          <div className="p-3 rounded-xl bg-white/10 flex-shrink-0">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg font-medium text-white">{item.title}</h3>
              {item.isNew && (
                <span className="px-1.5 py-0.5 bg-white/10 text-white text-xs rounded">New</span>
              )}
              {item.isPopular && (
                <span className="px-1.5 py-0.5 bg-white/10 text-white text-xs rounded">Popular</span>
              )}
            </div>
            <p className="text-sm text-gray-400 mt-2 line-clamp-2">{item.description}</p>
          </div>
        </div>
        <div className="mt-auto pt-3 flex items-center text-sm text-white/70 hover:text-white transition-colors group">
          <span>Read more</span>
          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  );
};

// Category section component to improve structure
const CategorySection = ({ title, items }: { title: string, items: DocumentItem[] }) => {
  return (
    <div className="mb-16 last:mb-0">
      <h2 className="text-2xl font-bold mb-8 text-center">
        <span className="text-gradient">{title}</span>
        <div className="h-1 w-16 bg-white/20 mx-auto mt-2"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((link, index) => (
          <DocumentCard key={index} item={link} />
        ))}
      </div>
    </div>
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
      
      <main className="pt-32 pb-24 container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Documentation</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive guides and resources to get the most out of CopyClipCloud.
          </p>
        </motion.div>

        <motion.div
          className="mb-16 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="glass-panel p-8 rounded-xl backdrop-blur-xl border border-white/10 shadow-lg">
            <div className="relative mb-8 max-w-2xl mx-auto">
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
            
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id 
                      ? 'bg-white text-black' 
                      : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              {selectedCategory === "all" ? (
                <motion.div
                  key="all-categories"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-16">
                    <CategorySection 
                      title="Getting Started" 
                      items={documentationLinks.filter(link => link.category === "getting-started")} 
                    />
                    
                    <CategorySection 
                      title="Core Features" 
                      items={documentationLinks.filter(link => link.category === "core-features")} 
                    />
                    
                    <CategorySection 
                      title="Advanced Usage" 
                      items={documentationLinks.filter(link => link.category === "advanced")} 
                    />
                    
                    <CategorySection 
                      title="API & SDK" 
                      items={documentationLinks.filter(link => link.category === "api")} 
                    />
                    
                    <CategorySection 
                      title="Security" 
                      items={documentationLinks.filter(link => link.category === "security")} 
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="filtered-category"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredLinks.map((link, index) => (
                    <DocumentCard key={index} item={link} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            
            {filteredLinks.length === 0 && (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
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
                    toast.success("Filters reset");
                  }}
                >
                  Reset filters
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>
        
        <motion.div
          className="glass-panel p-8 rounded-xl text-center mt-12 border border-white/10 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-5 h-5 mr-2 text-white/70" />
            <h2 className="text-2xl font-bold">Need More Help?</h2>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is ready to assist you with any questions or issues.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="outline">
              <Link to="/support">Contact Support</Link>
            </Button>
            <Button asChild variant="default">
              <Link to="/docs/all-articles">View All Articles</Link>
            </Button>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
