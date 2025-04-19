
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Tag, Filter, Calendar, FileText, ChevronRight, Clock, BookOpen, Info } from "lucide-react";

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  description: string;
  tags: string[];
}

const articles: Article[] = [
  {
    id: "getting-started",
    title: "Getting Started with CopyClipCloud",
    category: "Beginner",
    date: "April 15, 2023",
    readTime: "5 min read",
    description: "Everything you need to know to get up and running with CopyClipCloud in just a few minutes.",
    tags: ["beginner", "installation", "setup"]
  },
  {
    id: "keyboard-shortcuts",
    title: "Master Keyboard Shortcuts",
    category: "Productivity",
    date: "May 3, 2023",
    readTime: "7 min read",
    description: "Boost your productivity with these essential keyboard shortcuts for CopyClipCloud.",
    tags: ["productivity", "shortcuts", "keyboard"]
  },
  {
    id: "cloud-sync",
    title: "Setting Up Cross-Device Synchronization",
    category: "Cloud Features",
    date: "May 12, 2023",
    readTime: "6 min read",
    description: "Learn how to sync your clipboard across all your devices seamlessly.",
    tags: ["cloud", "sync", "devices"]
  },
  {
    id: "organizing-clipboard",
    title: "Organizing Your Clipboard History",
    category: "Organization",
    date: "June 1, 2023",
    readTime: "8 min read",
    description: "Best practices for keeping your clipboard history organized and easily accessible.",
    tags: ["organization", "folders", "tags"]
  },
  {
    id: "text-formatting",
    title: "Advanced Text Formatting Options",
    category: "Advanced",
    date: "June 18, 2023",
    readTime: "10 min read",
    description: "Discover the powerful text formatting capabilities built into CopyClipCloud.",
    tags: ["formatting", "text", "advanced"]
  },
  {
    id: "templates",
    title: "Creating and Using Templates",
    category: "Productivity",
    date: "July 5, 2023",
    readTime: "9 min read",
    description: "Save time with reusable clipboard templates for frequently used content.",
    tags: ["templates", "productivity", "snippets"]
  },
  {
    id: "security-privacy",
    title: "Security and Privacy Features",
    category: "Security",
    date: "July 22, 2023",
    readTime: "7 min read",
    description: "Learn about the security features that keep your clipboard data safe and private.",
    tags: ["security", "privacy", "encryption"]
  },
  {
    id: "integration-guide",
    title: "Integrating with Third-Party Apps",
    category: "Integration",
    date: "August 10, 2023",
    readTime: "12 min read",
    description: "Connect CopyClipCloud with your favorite applications for a seamless workflow.",
    tags: ["integration", "workflow", "apps"]
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting Common Issues",
    category: "Support",
    date: "August 27, 2023",
    readTime: "8 min read",
    description: "Solutions to the most common problems users encounter with CopyClipCloud.",
    tags: ["troubleshooting", "support", "help"]
  },
  {
    id: "clipboard-history",
    title: "Managing Clipboard History",
    category: "Basic Features",
    date: "September 5, 2023",
    readTime: "6 min read",
    description: "Learn how to effectively manage and navigate your clipboard history.",
    tags: ["history", "basics", "management"]
  },
  {
    id: "image-handling",
    title: "Working with Images in CopyClipCloud",
    category: "Media",
    date: "September 18, 2023",
    readTime: "7 min read",
    description: "Tips and tricks for managing images in your clipboard history.",
    tags: ["images", "media", "graphics"]
  },
  {
    id: "backup-restore",
    title: "Backup and Restore Your Clipboard Data",
    category: "Data Management",
    date: "October 3, 2023",
    readTime: "5 min read",
    description: "Ensure your clipboard data is safe with proper backup and restore procedures.",
    tags: ["backup", "restore", "data"]
  }
];

const BrowseAllArticles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTag, setSelectedTag] = useState("");
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);
  
  // Get unique categories
  const categories = ["all", ...Array.from(new Set(articles.map(article => article.category)))];
  
  // Get unique tags
  const allTags = Array.from(new Set(articles.flatMap(article => article.tags)));
  
  useEffect(() => {
    // Filter articles based on search term, category, and tag
    let filtered = articles;
    
    if (searchTerm) {
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (selectedCategory !== "all") {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }
    
    if (selectedTag) {
      filtered = filtered.filter(article => article.tags.includes(selectedTag));
    }
    
    setFilteredArticles(filtered);
  }, [searchTerm, selectedCategory, selectedTag]);

  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/docs" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Documentation
          </Link>
          
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Documentation Articles</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Browse our comprehensive collection of guides and tutorials
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mb-10 flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="pl-12 pr-4 py-4 w-full rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:ring-0 focus:outline-none transition-colors"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex space-x-4">
              <div className="relative w-48">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Filter className="h-4 w-4 text-gray-400" />
                </div>
                <select
                  className="pl-12 pr-4 py-4 w-full rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:ring-0 focus:outline-none transition-colors appearance-none"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="relative w-48">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Tag className="h-4 w-4 text-gray-400" />
                </div>
                <select
                  className="pl-12 pr-4 py-4 w-full rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:ring-0 focus:outline-none transition-colors appearance-none"
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                >
                  <option value="">All Tags</option>
                  {allTags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
          
          <div className="mb-4 flex items-center text-sm text-gray-400">
            <Info className="w-4 h-4 mr-2" />
            <span>
              Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
              {searchTerm && <> matching "<span className="text-white">{searchTerm}</span>"</>}
              {selectedCategory !== "all" && <> in <span className="text-white">{selectedCategory}</span></>}
              {selectedTag && <> tagged <span className="text-white">{selectedTag}</span></>}
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  className="glass-panel overflow-hidden h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.05) }}
                >
                  <div className="p-6 flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 hover:text-white transition-colors">
                      <Link to={`/docs/${article.id}`}>{article.title}</Link>
                    </h2>
                    
                    <p className="text-gray-400 text-sm mb-6">
                      {article.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map(tag => (
                        <button
                          key={tag}
                          className="px-2 py-1 bg-white/5 rounded-md text-xs hover:bg-white/10 transition-colors"
                          onClick={() => setSelectedTag(tag)}
                        >
                          #{tag}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto border-t border-white/10 flex items-center justify-between p-4">
                    <div className="flex items-center text-gray-400 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                    
                    <Link
                      to={`/docs/${article.id}`}
                      className="text-white flex items-center text-sm hover:underline"
                    >
                      Read article <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="col-span-1 md:col-span-2 lg:col-span-3 glass-panel p-12 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 rounded-full bg-white/5 mx-auto mb-6 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-2xl font-medium mb-3">No articles found</h3>
                <p className="text-gray-400 mb-6">
                  We couldn't find any articles matching your search criteria
                </p>
                <button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setSelectedTag("");
                  }}
                  className="px-6 py-3 bg-white/10 rounded-lg inline-flex items-center hover:bg-white/20 transition-all"
                >
                  Reset filters
                </button>
              </motion.div>
            )}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-white text-black rounded-lg inline-flex items-center hover:bg-opacity-90 transition-all"
              >
                Contact Support
              </Link>
              <Link 
                to="/faq" 
                className="px-6 py-3 bg-white/10 rounded-lg inline-flex items-center hover:bg-white/20 transition-all"
              >
                Check FAQ
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BrowseAllArticles;
