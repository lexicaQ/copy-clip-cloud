
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, FileText, Search, Clock, X, Filter } from "lucide-react";
import DocSidebar from "@/components/docs/DocSidebar";

const AllArticles = () => {
  const categories = [
    "All", "Getting Started", "Core Features", "Advanced Usage", "Security", "API & SDK", "Troubleshooting"
  ];
  
  const articles = [
    {
      title: "Installation Guide",
      category: "Getting Started",
      description: "Learn how to install CopyClipCloud on your Mac",
      updated: "April 15, 2023",
      readTime: "5 min",
      path: "/docs/getting-started"
    },
    {
      title: "Quick Start Tutorial",
      category: "Getting Started",
      description: "Get up and running with CopyClipCloud in minutes",
      updated: "April 12, 2023",
      readTime: "8 min",
      path: "/docs/getting-started"
    },
    {
      title: "Release Guide",
      category: "Getting Started",
      description: "Stay up to date with the latest features and improvements",
      updated: "April 18, 2023",
      readTime: "4 min",
      path: "/docs/release-guide"
    },
    {
      title: "User Interface Overview",
      category: "Getting Started",
      description: "Learn about the CopyClipCloud interface and features",
      updated: "April 10, 2023",
      readTime: "6 min",
      path: "/docs/getting-started"
    },
    {
      title: "Key Concepts",
      category: "Getting Started",
      description: "Understand the core concepts behind CopyClipCloud",
      updated: "April 8, 2023",
      readTime: "7 min",
      path: "/docs/getting-started"
    },
    {
      title: "Keyboard Shortcuts",
      category: "Getting Started",
      description: "Master all keyboard shortcuts for efficient usage",
      updated: "April 5, 2023",
      readTime: "4 min",
      path: "/docs/keyboard-shortcuts"
    },
    {
      title: "Clipboard History",
      category: "Core Features",
      description: "Learn how to manage and navigate your clipboard history",
      updated: "March 28, 2023",
      readTime: "5 min",
      path: "/docs/core-features"
    },
    {
      title: "Smart Organization",
      category: "Core Features",
      description: "Organize your clipboard items with folders and tags",
      updated: "March 25, 2023",
      readTime: "6 min",
      path: "/docs/core-features"
    },
    {
      title: "Search & Filtering",
      category: "Core Features",
      description: "Find clipboard items quickly with advanced search",
      updated: "March 22, 2023",
      readTime: "5 min",
      path: "/docs/core-features"
    },
    {
      title: "Templates & Snippets",
      category: "Core Features",
      description: "Create and use reusable text templates",
      updated: "March 20, 2023",
      readTime: "7 min",
      path: "/docs/core-features"
    },
    {
      title: "Cross-device Sync",
      category: "Core Features",
      description: "Sync your clipboard across Mac, iPhone, and iPad",
      updated: "March 18, 2023",
      readTime: "6 min",
      path: "/docs/cloud-sync"
    },
    {
      title: "Regular Expressions",
      category: "Advanced Usage",
      description: "Use regex for powerful clipboard filtering and search",
      updated: "March 15, 2023",
      readTime: "9 min",
      path: "/docs/advanced-usage"
    },
    {
      title: "Custom Actions",
      category: "Advanced Usage",
      description: "Create actions to transform clipboard content",
      updated: "March 12, 2023",
      readTime: "8 min",
      path: "/docs/advanced-usage"
    },
    {
      title: "Workflows & Automation",
      category: "Advanced Usage",
      description: "Build complex workflows with CopyClipCloud",
      updated: "March 10, 2023",
      readTime: "10 min",
      path: "/docs/advanced-usage"
    },
    {
      title: "API Documentation",
      category: "API & SDK",
      description: "Integrate with the CopyClipCloud API",
      updated: "March 8, 2023",
      readTime: "12 min",
      path: "/docs/api-documentation"
    },
    {
      title: "Browser Extensions",
      category: "API & SDK",
      description: "Enhance your browser with CopyClipCloud extensions",
      updated: "March 5, 2023",
      readTime: "6 min",
      path: "/docs/advanced-usage"
    },
    {
      title: "End-to-End Encryption",
      category: "Security",
      description: "Learn about our robust encryption for protecting your data",
      updated: "March 3, 2023",
      readTime: "7 min",
      path: "/features/end-to-end-encryption"
    }
  ];
  
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex flex-col lg:flex-row pt-24 pb-24 relative max-w-[90rem] mx-auto">
        {/* Left sidebar */}
        <div className="order-2 lg:order-1 lg:w-64 flex-shrink-0">
          <div className="fixed left-0 top-24 h-[calc(100vh-96px)] w-64 hidden lg:block overflow-auto z-10 border-r border-white/10 bg-background/95 backdrop-blur-sm">
            <DocSidebar />
          </div>
          
          {/* Mobile sidebar */}
          <div className="lg:hidden mb-6 px-4">
            <DocSidebar />
          </div>
        </div>
        
        {/* Main content */}
        <main className="flex-1 px-4 lg:px-12 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 pt-10 lg:pt-4 max-w-4xl mx-auto"
          >
            <Link 
              to="/docs" 
              className="inline-flex items-center text-sm text-white/70 hover:text-white mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Documentation
            </Link>
            
            <div className="glass-panel p-8 mb-8 backdrop-blur-md border border-white/10 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-white/10 mr-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-white">All Documentation Articles</h1>
              </div>
              
              <div className="mb-8">
                <div className="relative mb-6">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full px-5 py-3 bg-white/10 rounded-full pl-12 focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  {searchQuery && (
                    <button 
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      onClick={() => setSearchQuery("")}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                        selectedCategory === category 
                          ? 'bg-white text-black' 
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <Filter className="w-4 h-4 mr-2" />
                  Showing {filteredArticles.length} of {articles.length} articles
                </div>
              </div>
              
              <div className="space-y-4">
                {filteredArticles.map((article, index) => (
                  <Link 
                    key={index}
                    to={article.path}
                    className="glass-panel p-5 block hover:bg-white/5 transition-colors border border-white/5 rounded-lg"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="text-xs font-medium text-white/70 bg-white/10 inline-block px-2 py-0.5 rounded mb-2">
                          {article.category}
                        </div>
                        <h3 className="text-lg font-medium mb-1">{article.title}</h3>
                        <p className="text-gray-400 text-sm">{article.description}</p>
                      </div>
                      <div className="flex items-center mt-3 md:mt-0">
                        <div className="text-xs text-gray-400 flex items-center mr-4">
                          <Clock className="w-3.5 h-3.5 mr-1" />
                          {article.readTime}
                        </div>
                        <div className="text-xs text-gray-400">
                          Updated: {article.updated}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No articles found</h3>
                  <p className="text-gray-400">
                    Try adjusting your search or category filter
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default AllArticles;
