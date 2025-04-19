
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Map, 
  Calendar, 
  CheckCircle, 
  Circle, 
  Clock, 
  AlertCircle,
  ArrowRight,
  Star
} from "lucide-react";

const roadmapItems = [
  {
    quarter: "Q2 2023",
    complete: true,
    features: [
      { name: "Advanced Clipboard History", description: "Search, filter, and organize past clipboard items", complete: true },
      { name: "Cross-device Syncing", description: "Seamlessly sync between Mac, iPhone, and iPad", complete: true },
      { name: "Basic Security Features", description: "Password protection and simple encryption", complete: true },
      { name: "Custom Hotkeys", description: "Personalize keyboard shortcuts for quick access", complete: true },
    ]
  },
  {
    quarter: "Q3 2023",
    complete: true,
    features: [
      { name: "Military-grade Encryption", description: "End-to-end encryption for maximum security", complete: true },
      { name: "Smart Organization", description: "AI-powered categorization of clipboard contents", complete: true },
      { name: "Markdown Support", description: "Preserve and edit formatting in text snippets", complete: true },
      { name: "Cloud Backup", description: "Secure cloud storage for clipboard history", complete: true },
    ]
  },
  {
    quarter: "Q4 2023",
    complete: true,
    features: [
      { name: "Template System", description: "Create and use templates for common clipboard items", complete: true },
      { name: "Rich Media Support", description: "Better handling of images, links, and formatted text", complete: true },
      { name: "Advanced Search", description: "Full-text search with filtering options", complete: true },
      { name: "Browser Extension", description: "Chrome and Safari extensions for web integration", complete: true },
    ]
  },
  {
    quarter: "Q1 2024",
    complete: false,
    features: [
      { name: "Collaboration Features", description: "Share clipboard contents with team members", complete: true },
      { name: "API Integration", description: "Connect with third-party services and apps", complete: true },
      { name: "Context-aware Suggestions", description: "Smart recommendations based on usage patterns", complete: false },
      { name: "Advanced Analytics", description: "Usage insights and productivity metrics", complete: false },
    ]
  },
  {
    quarter: "Q2 2024",
    complete: false,
    current: true,
    features: [
      { name: "AI-powered Writing Assistant", description: "Rephrase, summarize, and enhance clipboard text", complete: false },
      { name: "Windows Version", description: "Expand availability to Windows platform", complete: false },
      { name: "Advanced Permissions", description: "Granular control over shared clipboard items", complete: false },
      { name: "Workflow Automation", description: "Create custom workflows with clipboard data", complete: false },
    ]
  },
  {
    quarter: "Q3 2024",
    complete: false,
    features: [
      { name: "Data Transformation Tools", description: "Convert clipboard data between formats", complete: false },
      { name: "Enhanced Privacy Controls", description: "More options for securing sensitive data", complete: false },
      { name: "Linux Version", description: "Expand availability to Linux platform", complete: false },
      { name: "Universal Search", description: "Search across all devices and archives", complete: false },
    ]
  },
];

const RoadmapItem = ({ item, index }) => {
  return (
    <motion.div
      className={`glass-panel p-6 ${item.current ? 'border-2 border-white/30' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className={`p-2 rounded-lg ${item.complete ? 'bg-green-500/20' : item.current ? 'bg-blue-500/20' : 'bg-white/10'} mr-3`}>
            {item.complete ? (
              <CheckCircle className="w-5 h-5 text-green-400" />
            ) : item.current ? (
              <Clock className="w-5 h-5 text-blue-400" />
            ) : (
              <Circle className="w-5 h-5 text-gray-400" />
            )}
          </div>
          <h3 className="text-xl font-medium">{item.quarter}</h3>
        </div>
        
        {item.current && (
          <span className="text-xs font-medium bg-white/20 rounded-full px-2.5 py-1 backdrop-blur-sm">
            Current
          </span>
        )}
        
        {item.complete && (
          <span className="text-xs font-medium bg-green-500/20 text-green-400 rounded-full px-2.5 py-1 backdrop-blur-sm">
            Completed
          </span>
        )}
      </div>
      
      <div className="space-y-4 mt-4">
        {item.features.map((feature, i) => (
          <div key={i} className="flex items-start">
            {feature.complete ? (
              <CheckCircle className="w-4 h-4 text-green-400 mt-1 mr-3 flex-shrink-0" />
            ) : (
              <Circle className="w-4 h-4 text-gray-400 mt-1 mr-3 flex-shrink-0" />
            )}
            <div>
              <p className="font-medium">{feature.name}</p>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Roadmap = () => {
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
            <Map className="w-5 h-5 mr-2" />
            <span>Product Roadmap</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Our Journey Forward</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our development plans and upcoming features. 
            We're constantly evolving to bring you the best clipboard experience possible.
          </p>
        </motion.div>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roadmapItems.map((item, index) => (
              <RoadmapItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        <motion.div
          className="glass-panel p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-lg bg-white/10 mr-4">
              <Star className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Request a Feature</h2>
          </div>
          
          <p className="text-gray-400 mb-6">
            We value your input! If there's a feature you'd like to see in CopyClipCloud, let us know.
            Many of our best features come directly from user suggestions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="/contact" 
              className="px-6 py-3 bg-white text-black rounded-full inline-flex items-center hover:bg-opacity-90 transition-all"
            >
              Suggest a Feature <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            
            <a 
              href="/contact" 
              className="px-6 py-3 bg-white/10 rounded-full inline-flex items-center hover:bg-white/20 transition-all"
            >
              View Feature Requests
            </a>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to get notified about new releases and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 bg-white/10 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-opacity-90 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Roadmap;
