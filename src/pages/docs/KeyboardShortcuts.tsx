
import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Keyboard, Search, Copy, Command, Check } from "lucide-react";
import { toast } from "sonner";

const KeyboardShortcuts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const shortcutCategories = [
    {
      id: "general",
      title: "General",
      shortcuts: [
        { id: "open-app", keys: ["⌘", "Space"], description: "Open application" },
        { id: "close-app", keys: ["⌘", "Q"], description: "Quit application" },
        { id: "preferences", keys: ["⌘", ","], description: "Open preferences" },
        { id: "help", keys: ["⌘", "?"], description: "Show help" }
      ]
    },
    {
      id: "clipboard",
      title: "Clipboard Management",
      shortcuts: [
        { id: "show-history", keys: ["⌥", "⌘", "V"], description: "Show clipboard history" },
        { id: "clear-history", keys: ["⌥", "⌘", "X"], description: "Clear clipboard history" },
        { id: "pin-item", keys: ["⌘", "P"], description: "Pin current clipboard item" },
        { id: "delete-item", keys: ["⌫"], description: "Delete selected item" }
      ]
    },
    {
      id: "navigation",
      title: "Navigation",
      shortcuts: [
        { id: "next-item", keys: ["↓"], description: "Next clipboard item" },
        { id: "prev-item", keys: ["↑"], description: "Previous clipboard item" },
        { id: "next-page", keys: ["⌘", "→"], description: "Next page of items" },
        { id: "prev-page", keys: ["⌘", "←"], description: "Previous page of items" }
      ]
    },
    {
      id: "formatting",
      title: "Text Formatting",
      shortcuts: [
        { id: "plain-text", keys: ["⌘", "⇧", "T"], description: "Paste as plain text" },
        { id: "strip-format", keys: ["⌘", "⇧", "V"], description: "Paste and strip formatting" },
        { id: "format-bold", keys: ["⌘", "B"], description: "Format selected text as bold" },
        { id: "format-italic", keys: ["⌘", "I"], description: "Format selected text as italic" }
      ]
    },
    {
      id: "organization",
      title: "Organization",
      shortcuts: [
        { id: "new-folder", keys: ["⌘", "N"], description: "Create new folder" },
        { id: "add-tag", keys: ["⌘", "T"], description: "Add tag to selection" },
        { id: "move-item", keys: ["⌘", "M"], description: "Move selected item to folder" },
        { id: "rename", keys: ["⌘", "R"], description: "Rename selected item or folder" }
      ]
    }
  ];

  const copyShortcut = (id: string, shortcut: string[]) => {
    navigator.clipboard.writeText(shortcut.join(" + "));
    setCopiedId(id);
    toast.success("Shortcut copied to clipboard");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredCategories = searchTerm 
    ? shortcutCategories.map(category => ({
        ...category,
        shortcuts: category.shortcuts.filter(
          shortcut => 
            shortcut.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            shortcut.keys.some(key => key.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      })).filter(category => category.shortcuts.length > 0)
    : shortcutCategories;

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
            <span className="text-gradient">Keyboard Shortcuts</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Master CopyClipCloud with these time-saving keyboard shortcuts
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="pl-12 pr-4 py-4 w-full rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:ring-0 focus:outline-none transition-colors"
              placeholder="Search keyboard shortcuts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>
          
          <div className="space-y-8">
            {filteredCategories.map((category, index) => (
              <motion.div 
                key={category.id}
                className="glass-panel p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                <div className="flex items-center mb-6">
                  <Keyboard className="w-5 h-5 mr-2" />
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.shortcuts.map((shortcut) => (
                    <div 
                      key={shortcut.id}
                      className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <div className="flex items-center">
                        <Command className="w-4 h-4 text-gray-400 mr-3" />
                        <span>{shortcut.description}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center mr-3">
                          {shortcut.keys.map((key, keyIndex) => (
                            <React.Fragment key={key + keyIndex}>
                              <span className="inline-block px-3 py-1.5 bg-white/10 rounded-md text-sm font-mono">
                                {key}
                              </span>
                              {keyIndex < shortcut.keys.length - 1 && (
                                <span className="mx-1 text-gray-400">+</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                        <button 
                          className="p-1.5 rounded-md hover:bg-white/10 transition-colors"
                          onClick={() => copyShortcut(shortcut.id, shortcut.keys)}
                        >
                          {copiedId === shortcut.id ? (
                            <Check className="w-4 h-4 text-white" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredCategories.length === 0 && (
            <motion.div 
              className="glass-panel p-12 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 rounded-full bg-white/5 mx-auto mb-6 flex items-center justify-center">
                <Keyboard className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-2xl font-medium mb-3">No shortcuts found</h3>
              <p className="text-gray-400 mb-6">
                We couldn't find any shortcuts matching your search
              </p>
              <button 
                onClick={() => setSearchTerm("")}
                className="px-6 py-3 bg-white/10 rounded-lg inline-flex items-center hover:bg-white/20 transition-all"
              >
                Show all shortcuts
              </button>
            </motion.div>
          )}
          
          <motion.div 
            className="glass-panel p-6 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-xl font-bold mb-4">Customizing Shortcuts</h2>
            <p className="text-gray-400 mb-4">
              You can customize any of these shortcuts in the CopyClipCloud preferences menu:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-400">
              <li>Open CopyClipCloud</li>
              <li>Press <span className="inline-block px-2 py-0.5 bg-white/10 rounded-md text-sm font-mono mx-1">⌘</span> + <span className="inline-block px-2 py-0.5 bg-white/10 rounded-md text-sm font-mono mx-1">,</span> to open Preferences</li>
              <li>Select the "Keyboard" tab</li>
              <li>Find the shortcut you want to customize and click "Edit"</li>
              <li>Press your desired key combination</li>
              <li>Click "Save" to apply your changes</li>
            </ol>
          </motion.div>
          
          <div className="flex justify-center mt-10">
            <Link
              to="/docs/user-interface-overview"
              className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg hover:bg-opacity-90 transition-all"
            >
              Next: User Interface Overview
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default KeyboardShortcuts;
