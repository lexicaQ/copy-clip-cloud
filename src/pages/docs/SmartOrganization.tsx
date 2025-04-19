
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DocLayout from "./DocLayout";
import { 
  Tag, 
  FolderOpen, 
  Search,
  ArrowRight,
  Clock,
  Filter,
  Zap,
  Palette,
  Folder,
  Code,
  FileText,
  Settings
} from "lucide-react";

const SmartOrganization = () => {
  const smartFolderRules = [
    {
      name: "Code Snippets",
      rules: [
        "Content contains code syntax",
        "Source application is VS Code or similar IDE",
        "Tagged with 'code' or 'development'"
      ],
      icon: Code
    },
    {
      name: "Personal Emails",
      rules: [
        "Content contains @gmail.com, @outlook.com, etc.",
        "Not from work applications",
        "Does not contain company terminology"
      ],
      icon: FileText
    },
    {
      name: "Meeting Notes",
      rules: [
        "Content contains 'meeting', 'agenda', 'minutes'",
        "Source application is note-taking app",
        "Created during work hours (9am-5pm)"
      ],
      icon: Clock
    }
  ];

  return (
    <DocLayout title="Smart Organization" icon={Folder}>
      <div className="glass-panel p-8 mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Organizing Your Clipboard History</h2>
          
          <p className="text-gray-300 mb-6">
            CopyClipCloud's smart organization features help you keep your clipboard content organized, 
            easily accessible, and manageable, even with thousands of clipboard items.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <motion.div
              className="glass-panel bg-white/5 p-6 rounded-lg border border-white/10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-4">
                <FolderOpen className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-lg font-medium mb-3">Smart Folders</h3>
              <p className="text-gray-400 mb-4">
                Create intelligent folders that automatically organize your clipboard items based on content, source, date, and more.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-blue-400" />
                  Rules-based organization
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-blue-400" />
                  Content-type filtering
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-blue-400" />
                  Source application detection
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="glass-panel bg-white/5 p-6 rounded-lg border border-white/10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center mb-4">
                <Tag className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="text-lg font-medium mb-3">Tagging System</h3>
              <p className="text-gray-400 mb-4">
                Create a flexible organization system with custom tags that can be applied to any clipboard item.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-indigo-400" />
                  Multiple tags per item
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-indigo-400" />
                  Automatic tag suggestions
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-indigo-400" />
                  Tag-based searching and filtering
                </li>
              </ul>
            </motion.div>
          </div>
          
          <h3 className="text-xl font-medium mb-4">Creating Smart Folders</h3>
          <p className="text-gray-300 mb-6">
            Smart folders automatically organize your clipboard items based on customizable rules:
          </p>
          
          <div className="space-y-6 mb-8">
            {smartFolderRules.map((folder, index) => (
              <motion.div 
                key={index} 
                className="glass-panel bg-gradient-to-r from-black/30 to-black/10 p-6 rounded-lg border border-white/10"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-600/20 flex items-center justify-center mr-4 mt-1">
                    <folder.icon className="w-5 h-5 text-indigo-300" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-lg mb-2">{folder.name}</h4>
                    <div className="bg-black/20 p-4 rounded-lg">
                      <h5 className="text-sm font-medium mb-2 flex items-center">
                        <Filter className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
                        Rules Configuration
                      </h5>
                      <ul className="space-y-2 text-sm text-gray-400">
                        {folder.rules.map((rule, ruleIndex) => (
                          <li key={ruleIndex} className="flex items-center">
                            <span className="w-5 h-5 rounded-full bg-black/30 text-xs flex items-center justify-center mr-2">{ruleIndex + 1}</span>
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="glass-panel bg-white/5 p-6 rounded-lg border border-white/10">
              <h3 className="flex items-center text-lg font-medium mb-3">
                <Palette className="w-5 h-5 mr-2 text-pink-400" />
                Color Coding
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                Visually organize your clipboard with customizable color coding:
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center p-2 rounded bg-black/20">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm text-gray-300">Work</span>
                </div>
                <div className="flex items-center p-2 rounded bg-black/20">
                  <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm text-gray-300">Personal</span>
                </div>
                <div className="flex items-center p-2 rounded bg-black/20">
                  <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                  <span className="text-sm text-gray-300">Urgent</span>
                </div>
                <div className="flex items-center p-2 rounded bg-black/20">
                  <div className="w-4 h-4 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-sm text-gray-300">Project X</span>
                </div>
              </div>
            </div>
            
            <div className="glass-panel bg-white/5 p-6 rounded-lg border border-white/10">
              <h3 className="flex items-center text-lg font-medium mb-3">
                <Clock className="w-5 h-5 mr-2 text-amber-400" />
                Time-Based Organization
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                Organize clipboard items by when they were created or used:
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-amber-400" />
                  Today, Yesterday, This Week, This Month
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-amber-400" />
                  Working Hours vs. Personal Time
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-amber-400" />
                  Custom date ranges for projects
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-6 rounded-lg border border-white/10">
            <h3 className="flex items-center text-lg font-medium mb-4">
              <Zap className="w-5 h-5 mr-2 text-yellow-400" />
              Smart Organization Tips
            </h3>
            
            <div className="space-y-4">
              <div className="bg-black/20 rounded-lg p-4">
                <h4 className="text-md font-medium mb-2">Combine Organization Methods</h4>
                <p className="text-sm text-gray-400">
                  Use smart folders for broad categories, tags for specific attributes, and color coding for visual priority indicators.
                </p>
              </div>
              
              <div className="bg-black/20 rounded-lg p-4">
                <h4 className="text-md font-medium mb-2">Review & Refine</h4>
                <p className="text-sm text-gray-400">
                  Periodically review your organizational system and refine rules to better match your evolving workflow.
                </p>
              </div>
              
              <div className="bg-black/20 rounded-lg p-4">
                <h4 className="text-md font-medium mb-2">Use Keyboard Shortcuts</h4>
                <p className="text-sm text-gray-400">
                  Learn the keyboard shortcuts for tagging (⌘T) and organizing (⌘O) to quickly manage items as you work.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/docs/keyboard-shortcuts" className="glass-panel p-6 hover:bg-white/5 transition-colors">
          <div className="flex items-center mb-3">
            <Settings className="w-5 h-5 mr-2" />
            <h3 className="text-lg font-medium">Keyboard Shortcuts</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Learn shortcuts for faster organization
          </p>
        </Link>
        
        <Link to="/docs/search-filtering" className="glass-panel p-6 hover:bg-white/5 transition-colors">
          <div className="flex items-center mb-3">
            <Search className="w-5 h-5 mr-2" />
            <h3 className="text-lg font-medium">Search & Filtering</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Find exactly what you need in your clipboard
          </p>
        </Link>
      </div>
    </DocLayout>
  );
};

export default SmartOrganization;
