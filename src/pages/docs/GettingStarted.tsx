
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, FileText, Book, BookOpen } from "lucide-react";

const GettingStarted = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            to="/docs" 
            className="inline-flex items-center text-sm text-white/70 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Documentation
          </Link>
          
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-lg bg-white/10 mr-3">
              <BookOpen className="w-5 h-5" />
            </div>
            <h1 className="text-3xl font-bold">Getting Started Guide</h1>
          </div>
          
          <div className="glass-panel p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Welcome to CopyClipCloud</h2>
            
            <p className="text-gray-300 mb-6">
              This comprehensive guide will help you get started with CopyClipCloud, a powerful clipboard manager designed to enhance your productivity and streamline your workflow. Follow these steps to set up and start using CopyClipCloud effectively.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-3">1. Installation</h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    To install CopyClipCloud on your Mac, follow these simple steps:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                    <li>Visit the <Link to="/download" className="text-white hover:underline">download page</Link> or click the Download button on our homepage.</li>
                    <li>Once the download is complete, locate the .dmg file in your Downloads folder.</li>
                    <li>Double-click the .dmg file to open it.</li>
                    <li>Drag the CopyClipCloud icon to your Applications folder.</li>
                    <li>Launch CopyClipCloud from your Applications folder or Launchpad.</li>
                    <li>When prompted, grant the necessary permissions for CopyClipCloud to access your clipboard.</li>
                  </ol>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">2. Initial Setup</h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    After installing CopyClipCloud, you'll need to configure some basic settings:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                    <li>Launch CopyClipCloud and navigate to the Preferences (⌘,).</li>
                    <li>Set your preferred keyboard shortcut for accessing the clipboard history (default is ⌘⇧V).</li>
                    <li>Choose how many clipboard items you want to store (default is 100).</li>
                    <li>Set up cloud synchronization by signing in with your CopyClipCloud account or creating a new one.</li>
                    <li>Configure content filters to automatically exclude sensitive information if needed.</li>
                  </ol>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">3. Basic Usage</h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    Here's how to use the basic functions of CopyClipCloud:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li><strong>Copy:</strong> Use the standard copy command (⌘C) in any application. CopyClipCloud automatically saves everything you copy.</li>
                    <li><strong>Access History:</strong> Press your configured shortcut (default ⌘⇧V) to access your clipboard history.</li>
                    <li><strong>Paste:</strong> Select an item from your clipboard history and press Enter to paste it, or click on the item.</li>
                    <li><strong>Search:</strong> Use the search field to quickly find specific clipboard items.</li>
                    <li><strong>Pin Important Items:</strong> Click the pin icon next to any clipboard item to keep it at the top of your history.</li>
                    <li><strong>Delete Items:</strong> Hover over an item and click the trash icon to remove it from your history.</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">4. Advanced Features</h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    Explore these advanced features to get the most out of CopyClipCloud:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li><strong>Templates:</strong> Create and use templates for frequently used text snippets.</li>
                    <li><strong>Smart Folders:</strong> Organize your clipboard items into custom categories.</li>
                    <li><strong>Cross-Device Sync:</strong> Access your clipboard history on all your devices.</li>
                    <li><strong>Text Transformation:</strong> Convert text formats (case, formatting, etc.) on the fly.</li>
                    <li><strong>Keyboard Navigation:</strong> Use arrow keys and shortcuts to navigate your clipboard history.</li>
                  </ul>
                  <p className="mt-4 text-gray-300">
                    For more advanced features, check our <Link to="/docs/advanced-usage" className="text-white hover:underline">Advanced Usage</Link> guide.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/docs/keyboard-shortcuts" className="glass-panel p-6 hover:bg-white/5 transition-colors">
              <div className="flex items-center mb-3">
                <FileText className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-medium">Keyboard Shortcuts</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Learn all the keyboard shortcuts to boost your productivity
              </p>
            </Link>
            
            <Link to="/docs/cloud-sync" className="glass-panel p-6 hover:bg-white/5 transition-colors">
              <div className="flex items-center mb-3">
                <FileText className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-medium">Cloud Synchronization</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Set up and configure cloud synchronization across your devices
              </p>
            </Link>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GettingStarted;
