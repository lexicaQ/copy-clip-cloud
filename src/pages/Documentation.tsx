
import React, { useState } from "react";
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
  Book
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DocLayout from "./docs/DocLayout";
import SharedBackground from "@/components/layout/SharedBackground";

const Documentation = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const documentationLinks = [
    { title: "Getting Started", href: "/docs/getting-started", icon: Code },
    { title: "Core Features", href: "/docs/core-features", icon: LayoutGrid },
    { title: "Cloud Sync", href: "/docs/cloud-sync", icon: Cloud },
    { title: "Templates", href: "/docs/templates", icon: LayoutTemplate },
    { title: "Smart Organization", href: "/docs/smart-organization", icon: BrainCircuit },
    { title: "Search & Filtering", href: "/docs/search-filtering", icon: Filter },
    { title: "Keyboard Shortcuts", href: "/docs/keyboard-shortcuts", icon: Key },
    { title: "Security", href: "/docs/security", icon: Shield },
    { title: "Advanced Usage", href: "/docs/advanced-usage", icon: Bookmark },
    { title: "API Documentation", href: "/docs/api-documentation", icon: FileText },
    { title: "SDK", href: "/docs/sdk", icon: Code },
    { title: "Integration Guides", href: "/docs/integration-guides", icon: Code },
    { title: "All Articles", href: "/docs/all-articles", icon: FileText },
  ];

  const filteredLinks = documentationLinks.filter(link =>
    link.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render directly without DocLayout component
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
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full px-6 py-3 rounded-full bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none backdrop-blur-sm transition-colors text-white placeholder-gray-400"
              onChange={handleSearchChange}
            />
            <div className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delay: 0.3 }}
        >
          {filteredLinks.map((link) => (
            <motion.div
              key={link.href}
              className="glass-panel p-5 hover:bg-white/5 transition-colors duration-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link to={link.href} className="flex items-center space-x-3">
                <div className="p-3 rounded-xl bg-white/10">
                  <link.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium">{link.title}</h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Documentation;
