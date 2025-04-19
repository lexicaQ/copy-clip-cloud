
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  BookOpen, 
  Search, 
  FileText,
  Code,
  Settings,
  Key,
  Zap,
  Shield,
  MessageSquare,
  ArrowRight,
  HelpCircle,
  ExternalLink,
  Tag,
  Cloud,
  Keyboard,
  Folder
} from "lucide-react";

const docCategories = [
  { 
    title: "Getting Started", 
    icon: Zap,
    articles: [
      { name: "Installation Guide", link: "/docs/getting-started" },
      { name: "Quick Start Tutorial", link: "/docs/getting-started" },
      { name: "User Interface Overview", link: "/docs/getting-started" },
      { name: "Key Concepts", link: "/docs/getting-started" },
      { name: "Keyboard Shortcuts", link: "/docs/keyboard-shortcuts" }
    ],
    route: "/docs/getting-started"
  },
  { 
    title: "Core Features", 
    icon: Key,
    articles: [
      { name: "Clipboard History", link: "/docs/core-features" },
      { name: "Smart Organization", link: "/docs/smart-organization" },
      { name: "Search & Filtering", link: "/docs/search-filtering" },
      { name: "Templates & Snippets", link: "/docs/templates" },
      { name: "Cross-device Sync", link: "/docs/cloud-sync" }
    ],
    route: "/docs/core-features"
  },
  { 
    title: "Advanced Usage", 
    icon: Code,
    articles: [
      { name: "Regular Expressions", link: "/docs/advanced-usage" },
      { name: "Custom Actions", link: "/docs/advanced-usage" },
      { name: "Workflows & Automation", link: "/docs/advanced-usage" },
      { name: "API Documentation", link: "/docs/api-documentation" },
      { name: "Browser Extensions", link: "/docs/advanced-usage" }
    ],
    route: "/docs/advanced-usage"
  },
  { 
    title: "Security & Privacy", 
    icon: Shield,
    articles: [
      { name: "Encryption Features", link: "/docs/cloud-sync" },
      { name: "Password Protection", link: "/docs/cloud-sync" },
      { name: "Secure Sharing", link: "/docs/cloud-sync" },
      { name: "Data Backup", link: "/docs/cloud-sync" },
      { name: "Privacy Controls", link: "/docs/cloud-sync" }
    ],
    route: "/docs/cloud-sync"
  },
  { 
    title: "Configuration", 
    icon: Settings,
    articles: [
      { name: "Preferences & Settings", link: "/docs/core-features" },
      { name: "Customizing Appearance", link: "/docs/core-features" },
      { name: "Integration Setup", link: "/docs/core-features" },
      { name: "Cloud Sync Configuration", link: "/docs/cloud-sync" },
      { name: "Device Management", link: "/docs/cloud-sync" }
    ],
    route: "/docs/core-features"
  },
  { 
    title: "Troubleshooting", 
    icon: HelpCircle,
    articles: [
      { name: "Common Issues", link: "/docs/cloud-sync" },
      { name: "Performance Optimization", link: "/docs/cloud-sync" },
      { name: "Error Messages", link: "/docs/cloud-sync" },
      { name: "Diagnostics", link: "/docs/cloud-sync" },
      { name: "Contact Support", link: "/support" }
    ],
    route: "/docs/cloud-sync"
  }
];

const popularArticles = [
  {
    title: "How to sync clipboard across devices",
    route: "/docs/cloud-sync"
  },
  {
    title: "Setting up end-to-end encryption",
    route: "/docs/cloud-sync"
  },
  {
    title: "Creating and using templates",
    route: "/docs/templates"
  },
  {
    title: "Configuring smart categorization rules",
    route: "/docs/smart-organization"
  },
  {
    title: "Customizing keyboard shortcuts",
    route: "/docs/keyboard-shortcuts"
  },
  {
    title: "Managing multiple clipboard histories",
    route: "/docs/advanced-usage"
  }
];

const DocCategoryCard = ({ category, index }) => (
  <motion.div
    className="glass-panel p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
  >
    <div className="flex items-center mb-4">
      <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-600/20 border border-white/5 mr-3">
        <category.icon className="w-5 h-5 text-indigo-300" />
      </div>
      <h3 className="text-xl font-medium">{category.title}</h3>
    </div>
    
    <ul className="space-y-2 mb-4">
      {category.articles.map((article, idx) => (
        <li key={idx} className="text-gray-400 hover:text-white transition-colors">
          <Link to={article.link} className="flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            <span>{article.name}</span>
          </Link>
        </li>
      ))}
    </ul>
    
    <Link 
      to={category.route}
      className="text-white hover:underline inline-flex items-center text-sm"
    >
      View All <ArrowRight className="w-3.5 h-3.5 ml-1" />
    </Link>
  </motion.div>
);

const PopularArticle = ({ title, route, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
  >
    <Link
      to={route}
      className="flex items-center p-3 hover:bg-white/5 rounded-lg transition-colors"
    >
      <FileText className="w-5 h-5 mr-3 text-gray-400" />
      <span>{title}</span>
    </Link>
  </motion.div>
);

const Documentation = () => {
  return (
    <div className="relative min-h-screen">
      <Header />

      <main className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-white/10 mb-6">
            <BookOpen className="w-5 h-5 mr-2" />
            <span>Documentation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Knowledge Base</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Find comprehensive guides and documentation to help you get the most out of CopyClipCloud.
          </p>
          
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search documentation..." 
                className="w-full px-5 py-4 bg-white/10 rounded-full pl-12 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Documentation Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {docCategories.map((category, index) => (
              <DocCategoryCard key={index} category={category} index={index} />
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="lg:col-span-2 glass-panel p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-600/20 border border-white/5 mr-3">
                <Zap className="w-5 h-5 text-indigo-300" />
              </div>
              <h3 className="text-xl font-medium">Getting Started Guide</h3>
            </div>
            
            <p className="text-gray-400 mb-6">
              New to CopyClipCloud? Follow this comprehensive guide to get up and running quickly and learn the essential features.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-600/20 flex items-center justify-center mr-3">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-medium">Installation</h4>
                  <p className="text-sm text-gray-400">Download and install CopyClipCloud on your device</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-600/20 flex items-center justify-center mr-3">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-medium">Initial Setup</h4>
                  <p className="text-sm text-gray-400">Configure your preferences and enable cloud sync</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-600/20 flex items-center justify-center mr-3">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-medium">Basic Usage</h4>
                  <p className="text-sm text-gray-400">Learn how to copy, paste, and access your clipboard history</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-600/20 flex items-center justify-center mr-3">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-medium">Advanced Features</h4>
                  <p className="text-sm text-gray-400">Discover templates, smart organization, and search</p>
                </div>
              </div>
            </div>
            
            <Link 
              to="/docs/getting-started"
              className="px-6 py-3 bg-white text-black rounded-full inline-flex items-center hover:bg-opacity-90 transition-all"
            >
              View Full Guide
            </Link>
          </motion.div>
          
          <motion.div
            className="glass-panel p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-600/20 border border-white/5 mr-3">
                <FileText className="w-5 h-5 text-indigo-300" />
              </div>
              <h3 className="text-xl font-medium">Popular Articles</h3>
            </div>
            
            <div className="divide-y divide-white/10">
              {popularArticles.map((article, index) => (
                <PopularArticle key={index} title={article.title} route={article.route} index={index} />
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/10">
              <Link 
                to="/docs/all-articles"
                className="text-white hover:underline inline-flex items-center text-sm"
              >
                Browse All Articles <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="glass-panel p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-600/20 border border-white/5 mr-3">
              <Code className="w-5 h-5 text-indigo-300" />
            </div>
            <h2 className="text-2xl font-bold">Developer Resources</h2>
          </div>
          
          <p className="text-gray-400 mb-6">
            Building on top of CopyClipCloud? Access our developer documentation, API references, and integration guides.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Link 
              to="/docs/api-documentation"
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors flex items-center"
            >
              <ExternalLink className="w-5 h-5 mr-3" />
              <span>API Documentation</span>
            </Link>
            
            <Link 
              to="/docs/sdk"
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors flex items-center"
            >
              <ExternalLink className="w-5 h-5 mr-3" />
              <span>SDK & Libraries</span>
            </Link>
            
            <Link 
              to="/docs/integration-guides"
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors flex items-center"
            >
              <ExternalLink className="w-5 h-5 mr-3" />
              <span>Integration Guides</span>
            </Link>
          </div>
          
          <Link 
            to="/partners"
            className="inline-flex items-center text-white hover:underline"
          >
            Learn about our Partner Program <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for in our documentation?
            Our support team is ready to assist you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/support" 
              className="px-6 py-3 bg-white text-black rounded-full inline-flex items-center hover:bg-opacity-90 transition-all"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Contact Support
            </Link>
            <Link 
              to="/tutorials" 
              className="px-6 py-3 bg-white/10 rounded-full inline-flex items-center hover:bg-white/20 transition-all"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              View Tutorials
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Documentation;
