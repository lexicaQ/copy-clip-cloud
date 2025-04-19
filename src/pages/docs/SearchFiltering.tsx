
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DocLayout from "./DocLayout";
import { 
  Search, 
  FileText, 
  Filter,
  Code,
  Zap,
  BookmarkPlus,
  Database,
  ArrowRight,
  Tag,
  Calendar,
  Clock,
  Stars,
  Star,
  Key,
  Settings
} from "lucide-react";

const SearchFiltering = () => {
  const advancedSearchExamples = [
    {
      query: "from:slack before:2025-04-01",
      description: "Find Slack content from before April 2025",
      highlightColor: "blue"
    },
    {
      query: "type:image tag:screenshot",
      description: "Find screenshots in your clipboard history",
      highlightColor: "green"
    },
    {
      query: "regex:/\\b\\w+@\\w+\\.\\w{2,}\\b/",
      description: "Find email addresses using regex pattern",
      highlightColor: "purple"
    },
    {
      query: "code:function AND javascript NOT test",
      description: "Find JavaScript functions, excluding tests",
      highlightColor: "orange"
    }
  ];

  return (
    <DocLayout title="Search & Filtering" icon={Search}>
      <div className="glass-panel p-8 mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Powerful Search Capabilities</h2>
          
          <p className="text-gray-300 mb-6">
            CopyClipCloud offers comprehensive search tools to help you quickly find exactly what you need
            in your clipboard history, no matter how extensive it is.
          </p>
          
          <div className="relative mb-10">
            <motion.div
              className="glass-panel bg-gradient-to-r from-black/40 to-black/20 p-6 rounded-lg border border-white/10 relative z-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 flex items-center bg-black/30 rounded-full px-4 py-3 border border-white/10">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input 
                  type="text" 
                  className="bg-transparent border-none outline-none text-white placeholder-gray-500 flex-1"
                  placeholder="meeting notes tag:work before:today"
                />
                <div className="flex space-x-2 ml-2">
                  <button className="p-1.5 rounded-full hover:bg-white/10 transition-colors">
                    <Filter className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="p-1.5 rounded-full hover:bg-white/10 transition-colors">
                    <Code className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-black/20 rounded p-3">
                  <div className="flex items-center mb-1.5">
                    <Calendar className="w-4 h-4 mr-1.5 text-blue-400" />
                    <span className="text-sm font-medium text-gray-300">Date Range</span>
                  </div>
                  <div className="flex space-x-2 text-xs">
                    <button className="px-2 py-1 bg-blue-500/20 rounded text-blue-300 border border-blue-500/30">Today</button>
                    <button className="px-2 py-1 bg-black/30 rounded text-gray-400 border border-white/5 hover:bg-black/40">This Week</button>
                    <button className="px-2 py-1 bg-black/30 rounded text-gray-400 border border-white/5 hover:bg-black/40">Custom</button>
                  </div>
                </div>
                
                <div className="bg-black/20 rounded p-3">
                  <div className="flex items-center mb-1.5">
                    <FileText className="w-4 h-4 mr-1.5 text-green-400" />
                    <span className="text-sm font-medium text-gray-300">Content Type</span>
                  </div>
                  <div className="flex space-x-2 text-xs">
                    <button className="px-2 py-1 bg-green-500/20 rounded text-green-300 border border-green-500/30">All</button>
                    <button className="px-2 py-1 bg-black/30 rounded text-gray-400 border border-white/5 hover:bg-black/40">Text</button>
                    <button className="px-2 py-1 bg-black/30 rounded text-gray-400 border border-white/5 hover:bg-black/40">Image</button>
                  </div>
                </div>
                
                <div className="bg-black/20 rounded p-3">
                  <div className="flex items-center mb-1.5">
                    <Tag className="w-4 h-4 mr-1.5 text-purple-400" />
                    <span className="text-sm font-medium text-gray-300">Tags</span>
                  </div>
                  <div className="flex space-x-2 text-xs">
                    <button className="px-2 py-1 bg-purple-500/20 rounded text-purple-300 border border-purple-500/30">Work</button>
                    <button className="px-2 py-1 bg-black/30 rounded text-gray-400 border border-white/5 hover:bg-black/40">Personal</button>
                    <button className="px-2 py-1 bg-black/30 rounded text-gray-400 border border-white/5 hover:bg-black/40">+Add</button>
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-gray-500">
                Pro Tip: Combine filters using AND, OR, NOT operators for complex searches
              </div>
            </motion.div>
            
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
          </div>
          
          <h3 className="text-xl font-medium mb-4">Advanced Search Syntax</h3>
          <p className="text-gray-300 mb-6">
            Master these search operators to quickly find anything in your clipboard history:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="glass-panel bg-white/5 p-5 rounded-lg border border-white/10">
              <h4 className="flex items-center text-md font-medium mb-3">
                <Filter className="w-4 h-4 mr-2 text-blue-400" />
                Filter Operators
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-300">
                  <code className="bg-black/30 px-1.5 py-0.5 rounded">from:app</code> - Items from specific application
                </li>
                <li className="text-gray-300">
                  <code className="bg-black/30 px-1.5 py-0.5 rounded">type:format</code> - Filter by content type (text, image, etc.)
                </li>
                <li className="text-gray-300">
                  <code className="bg-black/30 px-1.5 py-0.5 rounded">tag:name</code> - Items with specific tag
                </li>
                <li className="text-gray-300">
                  <code className="bg-black/30 px-1.5 py-0.5 rounded">before:date</code> / <code className="bg-black/30 px-1.5 py-0.5 rounded">after:date</code> - Date filters
                </li>
                <li className="text-gray-300">
                  <code className="bg-black/30 px-1.5 py-0.5 rounded">size:&gt;1mb</code> - Filter by content size
                </li>
              </ul>
            </div>
            
            <div className="glass-panel bg-white/5 p-5 rounded-lg border border-white/10">
              <h4 className="flex items-center text-md font-medium mb-3">
                <Code className="w-4 h-4 mr-2 text-purple-400" />
                Search Modifiers
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-300">
                  <code className="bg-black/30 px-1.5 py-0.5 rounded">"exact phrase"</code> - Search for exact phrase
                </li>
                <li className="text-gray-300">
                  <code className="bg-black/30 px-1.5 py-0.5 rounded">term1 AND term2</code> - Both terms must be present
                </li>
                <li className="text-gray-300">
                  <code className="bg-black/30 px-1.5 py-0.5 rounded">term1 OR term2</code> - Either term can be present
                </li>
                <li className="text-gray-300">
                  <code className="bg-black/30 px-1.5 py-0.5 rounded">NOT term</code> - Exclude results with this term
                </li>
                <li className="text-gray-300">
                  <code className="bg-black/30 px-1.5 py-0.5 rounded">regex:/pattern/</code> - Regular expression search
                </li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-medium mb-4">Example Searches</h3>
          <p className="text-gray-300 mb-6">
            Try these advanced search examples to see the power of CopyClipCloud's search capabilities:
          </p>
          
          <div className="space-y-4 mb-8">
            {advancedSearchExamples.map((example, index) => (
              <motion.div 
                key={index} 
                className="flex items-center bg-gradient-to-r from-black/30 to-black/10 p-4 rounded-lg border border-white/10"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className={`min-w-32 bg-black/40 p-2 rounded mr-4 border border-${example.highlightColor}-500/30`}>
                  <code className={`text-${example.highlightColor}-400 text-sm`}>{example.query}</code>
                </div>
                <span className="text-gray-300 text-sm">{example.description}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="glass-panel bg-white/5 p-6 rounded-lg border border-white/10">
              <h3 className="flex items-center text-lg font-medium mb-3">
                <BookmarkPlus className="w-5 h-5 mr-2 text-amber-400" />
                Saved Searches
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                Save complex searches for quick access:
              </p>
              <ul className="space-y-3 text-sm">
                <li className="bg-black/20 rounded p-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-3.5 h-3.5 text-amber-400 mr-1.5" />
                    <span className="text-gray-300">Work Emails This Week</span>
                  </div>
                  <code className="text-xs text-gray-500">type:email tag:work after:monday</code>
                </li>
                <li className="bg-black/20 rounded p-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-3.5 h-3.5 text-amber-400 mr-1.5" />
                    <span className="text-gray-300">Project X Code Snippets</span>
                  </div>
                  <code className="text-xs text-gray-500">tag:projectx type:code</code>
                </li>
              </ul>
            </div>
            
            <div className="glass-panel bg-white/5 p-6 rounded-lg border border-white/10">
              <h3 className="flex items-center text-lg font-medium mb-3">
                <Database className="w-5 h-5 mr-2 text-green-400" />
                Search History
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                Quickly access your recent searches:
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="w-3.5 h-3.5 text-gray-500 mr-1.5" />
                    <span>quarterly report draft</span>
                  </div>
                  <span className="text-xs text-gray-500">2h ago</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="w-3.5 h-3.5 text-gray-500 mr-1.5" />
                    <span>from:slack after:yesterday</span>
                  </div>
                  <span className="text-xs text-gray-500">5h ago</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="w-3.5 h-3.5 text-gray-500 mr-1.5" />
                    <span>type:image tag:screenshot</span>
                  </div>
                  <span className="text-xs text-gray-500">1d ago</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-600/10 p-6 rounded-lg border border-white/10">
            <h3 className="flex items-center text-lg font-medium mb-4">
              <Zap className="w-5 h-5 mr-2 text-yellow-400" />
              Search & Filter Tips
            </h3>
            
            <div className="space-y-4">
              <div className="bg-black/20 rounded-lg p-4">
                <h4 className="text-md font-medium mb-2">Keyboard Navigation</h4>
                <p className="text-sm text-gray-400">
                  Press <code className="bg-black/30 px-1.5 py-0.5 rounded">⌘F</code> to focus the search box from anywhere, and use arrow keys to navigate results.
                </p>
              </div>
              
              <div className="bg-black/20 rounded-lg p-4">
                <h4 className="text-md font-medium mb-2">Combination Searches</h4>
                <p className="text-sm text-gray-400">
                  Combine text search with filters for the most powerful queries, like <code className="bg-black/30 px-1.5 py-0.5 rounded">meeting notes tag:work after:yesterday</code>
                </p>
              </div>
              
              <div className="bg-black/20 rounded-lg p-4">
                <h4 className="text-md font-medium mb-2">Voice Search</h4>
                <p className="text-sm text-gray-400">
                  Enable voice search in preferences to quickly search by speaking. Activate with <code className="bg-black/30 px-1.5 py-0.5 rounded">⌘⇧V</code> then press the microphone icon.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/docs/smart-organization" className="glass-panel p-6 hover:bg-white/5 transition-colors">
          <div className="flex items-center mb-3">
            <Tag className="w-5 h-5 mr-2" />
            <h3 className="text-lg font-medium">Smart Organization</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Learn about organizing your clipboard content
          </p>
        </Link>
        
        <Link to="/docs/core-features" className="glass-panel p-6 hover:bg-white/5 transition-colors">
          <div className="flex items-center mb-3">
            <Key className="w-5 h-5 mr-2" />
            <h3 className="text-lg font-medium">Core Features</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Explore other essential CopyClipCloud features
          </p>
        </Link>
      </div>
    </DocLayout>
  );
};

export default SearchFiltering;
