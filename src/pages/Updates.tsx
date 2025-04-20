import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useFileDownload } from "@/hooks/useFileDownload";
import { 
  Calendar, 
  Clock, 
  Download, 
  ArrowRight,
  Sparkles,
  Bug,
  Rocket,
  HelpCircle,
  Wrench,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";

const updatesList = [
  {
    version: "3.5.0",
    date: "April 15, 2023",
    major: true,
    description: "Introducing AI-powered organization and enhanced security features",
    changes: [
      { type: "feature", title: "AI Clipboard Organization", description: "Automatically categorize and organize clipboard items using machine learning" },
      { type: "feature", title: "End-to-End Encryption", description: "Military-grade encryption for all your clipboard data" },
      { type: "feature", title: "Multi-device Sync", description: "Seamless synchronization across all your Apple devices" },
      { type: "improvement", title: "Performance Optimization", description: "50% faster clipboard operations and reduced memory usage" },
      { type: "fix", title: "Image Handling Fix", description: "Fixed an issue with large image files not copying correctly" },
      { type: "fix", title: "Theme Switching Bug", description: "Resolved a bug where theme preferences weren't being saved" }
    ]
  },
  {
    version: "3.4.2",
    date: "March 22, 2023",
    major: false,
    description: "Bug fixes and performance improvements",
    changes: [
      { type: "fix", title: "Memory Leak Fix", description: "Addressed a memory leak that occurred during extended usage" },
      { type: "fix", title: "Search Indexing Bug", description: "Fixed an issue with search not properly indexing new clipboard items" },
      { type: "improvement", title: "Startup Time", description: "Reduced application startup time by 30%" },
      { type: "improvement", title: "Battery Usage", description: "Optimized background processes to reduce battery consumption" }
    ]
  },
  {
    version: "3.4.0",
    date: "February 10, 2023",
    major: true,
    description: "New template system and enhanced search capabilities",
    changes: [
      { type: "feature", title: "Clipboard Templates", description: "Create and use templates for frequently used content" },
      { type: "feature", title: "Advanced Search", description: "Full-text search with filtering by type, date, and tags" },
      { type: "feature", title: "Dark Mode Improvements", description: "Enhanced dark mode with new contrast options" },
      { type: "improvement", title: "Keyboard Shortcut Editor", description: "Redesigned keyboard shortcut customization interface" },
      { type: "fix", title: "Notification Center", description: "Fixed notifications not appearing in macOS Notification Center" }
    ]
  },
  {
    version: "3.3.1",
    date: "January 15, 2023",
    major: false,
    description: "Minor bug fixes and improvements",
    changes: [
      { type: "fix", title: "Pasteboard Access", description: "Fixed an issue with macOS permissions for clipboard access" },
      { type: "fix", title: "iCloud Sync Delay", description: "Resolved synchronization delays with iCloud" },
      { type: "improvement", title: "UI Refinements", description: "Small visual improvements and consistency fixes" }
    ]
  }
];

const ChangelogItem = ({ change }) => {
  const icons = {
    feature: <Sparkles className="w-4 h-4" />,
    improvement: <Rocket className="w-4 h-4" />,
    fix: <Wrench className="w-4 h-4" />
  };
  
  const colors = {
    feature: "bg-purple-500/20 text-purple-300",
    improvement: "bg-blue-500/20 text-blue-300",
    fix: "bg-green-500/20 text-green-300"
  };
  
  return (
    <div className="flex items-start py-3">
      <div className={`p-1.5 rounded-lg ${colors[change.type]} mr-3 mt-0.5`}>
        {icons[change.type]}
      </div>
      <div>
        <h4 className="font-medium text-white">{change.title}</h4>
        <p className="text-gray-400 text-sm">{change.description}</p>
      </div>
    </div>
  );
};

const UpdateCard = ({ update, index }) => {
  const { handleDownload, downloading } = useFileDownload();

  return (
    <motion.div
      className="glass-panel overflow-hidden border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="px-6 py-5 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <div className="flex items-center mb-2">
            <h3 className="text-xl font-medium mr-3">Version {update.version}</h3>
            {update.major && (
              <span className="text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full px-2.5 py-1">
                Major Release
              </span>
            )}
          </div>
          <p className="text-gray-400 text-sm">{update.description}</p>
        </div>
        <div className="flex items-center mt-3 sm:mt-0 space-x-4">
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar className="w-4 h-4 mr-1.5" />
            <span>{update.date}</span>
          </div>
          <Button 
            variant="ghost"
            size="sm"
            disabled={downloading}
            onClick={() => handleDownload()}
            className="text-white hover:bg-white/10"
          >
            <Download className="w-4 h-4 mr-1.5" />
            Download
          </Button>
        </div>
      </div>
      
      <div className="px-6 py-4">
        <div className="divide-y divide-white/5">
          {update.changes.map((change, idx) => (
            <ChangelogItem key={idx} change={change} />
          ))}
        </div>
      </div>
      
      <div className="px-6 py-3 bg-white/5 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link 
            to={`/docs/release-guide#${update.version}`}
            className="text-sm text-white hover:underline flex items-center"
          >
            <FileText className="w-4 h-4 mr-1.5" />
            Release Guide
          </Link>
          <Link 
            to={`#details-${update.version}`}
            className="text-sm text-white hover:underline flex items-center"
          >
            Full Release Notes
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>
        
        <div className="flex space-x-3">
          <Link 
            to={`#known-issues-${update.version}`}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Known Issues
          </Link>
          <Link 
            to={`#help-${update.version}`}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Get Help
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Updates = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Release Notes & Updates</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Stay informed about the latest improvements, features, and bug fixes in CopyClipCloud.
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="text-2xl font-bold">Latest Updates</h2>
            
            <div className="flex items-center mt-4 md:mt-0 space-x-4">
              <a 
                href="/download" 
                className="flex items-center space-x-2 px-4 py-2 bg-white text-black rounded-full hover:bg-opacity-90 transition-all text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Get Latest Version</span>
              </a>
              
              <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/15 transition-all text-sm">
                <HelpCircle className="w-4 h-4" />
                <span>Release Guide</span>
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            {updatesList.map((update, index) => (
              <UpdateCard key={index} update={update} index={index} />
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <button className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full hover:bg-white/15 transition-all border border-white/20">
              <span className="mr-2">Load More Updates</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        <motion.div
          className="glass-panel p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">Beta Program</h2>
          <p className="text-gray-400 mb-6">
            Join our beta program to get early access to new features and help us improve CopyClipCloud.
            Beta versions are released every 2-3 weeks with the latest improvements and experimental features.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="/download" 
              className="px-6 py-3 bg-white text-black rounded-full inline-flex items-center hover:bg-opacity-90 transition-all"
            >
              Join Beta Program
            </a>
            
            <a 
              href="/support" 
              className="px-6 py-3 bg-white/10 rounded-full inline-flex items-center hover:bg-white/20 transition-all"
            >
              Learn More
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
          <h2 className="text-2xl font-bold mb-4">Get Notified</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive notifications about new updates and features.
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

export default Updates;
