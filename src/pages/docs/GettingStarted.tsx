
import React from "react";
import { motion } from "framer-motion";
import DocLayout from "@/components/docs/DocLayout";
import { Zap, Download, Settings, Layers, Search, FileText, ArrowRight } from "lucide-react";

const GettingStarted = () => {
  return (
    <DocLayout 
      title="Getting Started" 
      description="Learn how to install and set up CopyClipCloud on your device"
      icon={Zap}
    >
      <div className="space-y-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white">
              <span>1</span>
            </div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Download className="w-5 h-5" /> Installation
            </h2>
          </div>
          
          <div className="ml-11">
            <p className="text-gray-300 mb-6">
              Installing CopyClipCloud is a simple process that only takes a few minutes. Follow these steps to get started:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="glass-panel p-4">
                <h3 className="font-medium mb-2">1. Download the installer</h3>
                <p className="text-sm text-gray-400 mb-3">
                  Visit our download page and select the version compatible with your operating system.
                </p>
                <motion.button
                  className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-white/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Download for macOS
                </motion.button>
              </div>
              
              <div className="glass-panel p-4">
                <h3 className="font-medium mb-2">2. Run the installer</h3>
                <p className="text-sm text-gray-400">
                  Open the downloaded file and follow the on-screen instructions to complete the installation process.
                </p>
              </div>
              
              <div className="glass-panel p-4">
                <h3 className="font-medium mb-2">3. Launch CopyClipCloud</h3>
                <p className="text-sm text-gray-400">
                  After installation is complete, launch the application from your Applications folder or Start menu.
                </p>
              </div>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="flex items-center text-sm font-medium mb-2">
                <FileText className="w-4 h-4 mr-2" /> System Requirements
              </h4>
              <ul className="text-xs text-gray-400 space-y-1 ml-6 list-disc">
                <li>macOS 15 or later</li>
                <li>Minimum 4GB RAM</li>
                <li>100MB free disk space</li>
                <li>Internet connection for cloud features</li>
              </ul>
            </div>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white">
              <span>2</span>
            </div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Settings className="w-5 h-5" /> Initial Setup
            </h2>
          </div>
          
          <div className="ml-11">
            <p className="text-gray-300 mb-6">
              After installing CopyClipCloud, you'll need to configure a few settings to customize your experience.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="glass-panel p-4">
                <h3 className="font-medium mb-2">1. Create an account</h3>
                <p className="text-sm text-gray-400">
                  Sign up for a CopyClipCloud account to enable cloud synchronization and access your clipboard from any device.
                </p>
              </div>
              
              <div className="glass-panel p-4">
                <h3 className="font-medium mb-2">2. Configure preferences</h3>
                <p className="text-sm text-gray-400">
                  Open the settings panel to customize clipboard history retention, encryption options, and keyboard shortcuts.
                </p>
              </div>
              
              <div className="glass-panel p-4">
                <h3 className="font-medium mb-2">3. Enable cloud sync</h3>
                <p className="text-sm text-gray-400">
                  Turn on cloud synchronization to automatically back up and sync your clipboard across all your devices.
                </p>
              </div>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="flex items-center text-sm font-medium mb-2">
                <FileText className="w-4 h-4 mr-2" /> Quick Tip
              </h4>
              <p className="text-xs text-gray-400">
                For the best experience, we recommend setting CopyClipCloud to launch automatically at startup to ensure continuous clipboard monitoring and access.
              </p>
            </div>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white">
              <span>3</span>
            </div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Layers className="w-5 h-5" /> Basic Usage
            </h2>
          </div>
          
          <div className="ml-11">
            <p className="text-gray-300 mb-6">
              Learn the essential commands and features to start using CopyClipCloud effectively.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="glass-panel p-4">
                <h3 className="font-medium mb-2">Accessing clipboard history</h3>
                <p className="text-sm text-gray-400">
                  Press <kbd className="px-2 py-1 bg-white/10 rounded">⌘+Shift+V</kbd> to open the clipboard history panel, then select an item to paste it.
                </p>
              </div>
              
              <div className="glass-panel p-4">
                <h3 className="font-medium mb-2">Pinning important items</h3>
                <p className="text-sm text-gray-400">
                  Hover over any clipboard item and click the pin icon to keep it at the top of your history for easy access.
                </p>
              </div>
              
              <div className="glass-panel p-4">
                <h3 className="font-medium mb-2">Organizing with categories</h3>
                <p className="text-sm text-gray-400">
                  Right-click on any clipboard item to assign it to a category or create a new organizational category.
                </p>
              </div>
              
              <div className="glass-panel p-4">
                <h3 className="font-medium mb-2">Quick search</h3>
                <p className="text-sm text-gray-400">
                  Use the search bar in the clipboard panel or press <kbd className="px-2 py-1 bg-white/10 rounded">⌘+F</kbd> to quickly find specific clipboard items.
                </p>
              </div>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <h4 className="flex items-center text-sm font-medium mb-2">
                <Search className="w-4 h-4 mr-2" /> Pro Tip
              </h4>
              <p className="text-xs text-gray-400">
                You can use advanced search operators like "text:", "date:", and "type:" to filter your clipboard history more precisely.
              </p>
            </div>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white">
              <span>4</span>
            </div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Search className="w-5 h-5" /> Next Steps
            </h2>
          </div>
          
          <div className="ml-11">
            <p className="text-gray-300 mb-6">
              Now that you've set up CopyClipCloud and learned the basics, explore these resources to get the most out of the application:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <motion.a
                href="/docs/keyboard-shortcuts"
                className="glass-panel p-4 hover:bg-white/5 transition-colors"
                whileHover={{ y: -5 }}
              >
                <h3 className="font-medium mb-2 flex items-center justify-between">
                  Keyboard Shortcuts
                  <ArrowRight className="w-4 h-4" />
                </h3>
                <p className="text-sm text-gray-400">
                  Learn all keyboard shortcuts to boost productivity
                </p>
              </motion.a>
              
              <motion.a
                href="/docs/core-features"
                className="glass-panel p-4 hover:bg-white/5 transition-colors"
                whileHover={{ y: -5 }}
              >
                <h3 className="font-medium mb-2 flex items-center justify-between">
                  Core Features
                  <ArrowRight className="w-4 h-4" />
                </h3>
                <p className="text-sm text-gray-400">
                  Explore the full range of CopyClipCloud features
                </p>
              </motion.a>
              
              <motion.a
                href="/docs/cloud-sync"
                className="glass-panel p-4 hover:bg-white/5 transition-colors"
                whileHover={{ y: -5 }}
              >
                <h3 className="font-medium mb-2 flex items-center justify-between">
                  Cloud Sync
                  <ArrowRight className="w-4 h-4" />
                </h3>
                <p className="text-sm text-gray-400">
                  Set up synchronization across multiple devices
                </p>
              </motion.a>
              
              <motion.a
                href="/docs/advanced-usage"
                className="glass-panel p-4 hover:bg-white/5 transition-colors"
                whileHover={{ y: -5 }}
              >
                <h3 className="font-medium mb-2 flex items-center justify-between">
                  Advanced Usage
                  <ArrowRight className="w-4 h-4" />
                </h3>
                <p className="text-sm text-gray-400">
                  Take your clipboard management to the next level
                </p>
              </motion.a>
              
              <motion.a
                href="/tutorials"
                className="glass-panel p-4 hover:bg-white/5 transition-colors"
                whileHover={{ y: -5 }}
              >
                <h3 className="font-medium mb-2 flex items-center justify-between">
                  Video Tutorials
                  <ArrowRight className="w-4 h-4" />
                </h3>
                <p className="text-sm text-gray-400">
                  Watch guides and tutorials for visual learning
                </p>
              </motion.a>
              
              <motion.a
                href="/support"
                className="glass-panel p-4 hover:bg-white/5 transition-colors"
                whileHover={{ y: -5 }}
              >
                <h3 className="font-medium mb-2 flex items-center justify-between">
                  Help & Support
                  <ArrowRight className="w-4 h-4" />
                </h3>
                <p className="text-sm text-gray-400">
                  Contact our support team if you need assistance
                </p>
              </motion.a>
            </div>
          </div>
        </motion.section>
      </div>
    </DocLayout>
  );
};

export default GettingStarted;
