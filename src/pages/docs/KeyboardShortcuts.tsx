
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Keyboard, Command } from "lucide-react";

const KeyboardShortcuts = () => {
  const shortcuts = [
    {
      key: "⌘⇧V",
      description: "Open clipboard history"
    },
    {
      key: "⌘⇧F",
      description: "Search clipboard history"
    },
    {
      key: "⌘⇧P",
      description: "Pin/unpin selected item"
    },
    {
      key: "⌘⇧D",
      description: "Delete selected item"
    },
    {
      key: "⌘⇧C",
      description: "Clear clipboard history"
    },
    {
      key: "⌘⇧T",
      description: "Create template from selection"
    },
    {
      key: "⌘↑",
      description: "Navigate to previous item"
    },
    {
      key: "⌘↓",
      description: "Navigate to next item"
    },
    {
      key: "⌘1-9",
      description: "Quick select items 1-9"
    },
    {
      key: "⌘⇧1-9",
      description: "Assign item to quick slot 1-9"
    },
    {
      key: "⌘,",
      description: "Open preferences"
    },
    {
      key: "⌘⌥C",
      description: "Copy as plain text"
    },
    {
      key: "⌘⌥V",
      description: "Paste as plain text"
    },
    {
      key: "⌘⇧M",
      description: "Toggle merge mode"
    },
    {
      key: "⌘⇧S",
      description: "Sync clipboard now"
    },
  ];

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
              <Keyboard className="w-5 h-5" />
            </div>
            <h1 className="text-3xl font-bold">Keyboard Shortcuts</h1>
          </div>
          
          <div className="glass-panel p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Mastering CopyClipCloud Shortcuts</h2>
            
            <p className="text-gray-300 mb-6">
              CopyClipCloud offers a comprehensive set of keyboard shortcuts to help you work more efficiently. 
              Memorizing these shortcuts will significantly boost your productivity and reduce the time spent managing your clipboard.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {shortcuts.map((shortcut, index) => (
                <div key={index} className="glass-panel bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Command className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-gray-300">{shortcut.description}</span>
                    </div>
                    <div className="bg-white/10 px-3 py-1 rounded font-mono text-sm">
                      {shortcut.key}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-medium mb-4">Custom Shortcuts</h3>
            <p className="text-gray-300 mb-6">
              You can customize any of these keyboard shortcuts to better fit your workflow:
            </p>
            
            <ol className="list-decimal pl-5 space-y-2 text-gray-300 mb-6">
              <li>Open CopyClipCloud Preferences (⌘,)</li>
              <li>Navigate to the Shortcuts tab</li>
              <li>Find the shortcut you want to change</li>
              <li>Click on the current shortcut and press your desired key combination</li>
              <li>Click Apply to save your changes</li>
            </ol>
            
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h4 className="flex items-center text-lg font-medium mb-3">
                <Command className="w-5 h-5 mr-2" />
                Pro Tip
              </h4>
              <p className="text-gray-300">
                For maximum efficiency, try to create a logical pattern in your custom shortcuts. 
                For example, you might use ⌘⇧ plus the first letter of the action (e.g., ⌘⇧P for Pin).
                This makes shortcuts easier to remember and faster to execute.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/docs/getting-started" className="glass-panel p-6 hover:bg-white/5 transition-colors">
              <div className="flex items-center mb-3">
                <Command className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-medium">Getting Started</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Return to the getting started guide
              </p>
            </Link>
            
            <Link to="/docs/advanced-usage" className="glass-panel p-6 hover:bg-white/5 transition-colors">
              <div className="flex items-center mb-3">
                <Command className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-medium">Advanced Usage</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Learn advanced techniques and workflows
              </p>
            </Link>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default KeyboardShortcuts;
