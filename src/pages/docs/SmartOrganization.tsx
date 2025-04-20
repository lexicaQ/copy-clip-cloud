
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

// Define the smartFolderRules data that was missing
const smartFolderRules = [
  {
    name: "Code Snippets",
    icon: Code,
    rules: [
      "Contains code syntax (function, class, const, etc.)",
      "Has programming language identifiers",
      "Contains code formatting patterns"
    ]
  },
  {
    name: "Meeting Notes",
    icon: FileText,
    rules: [
      "Contains dates and times",
      "Has participant names",
      "Contains action items or follow-ups"
    ]
  },
  {
    name: "Contact Information",
    icon: Tag,
    rules: [
      "Contains email addresses",
      "Has phone numbers",
      "Contains social media handles"
    ]
  }
];

const SmartOrganization = () => {
  return (
    <DocLayout title="Smart Organization" icon={Folder}>
      <div className="glass-panel p-8 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 bg-white/5 rounded-xl" />
              <div className="relative w-full h-full rounded-xl bg-white/10 flex items-center justify-center">
                <Folder className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Smart Organization
            </h1>
            <p className="text-lg text-gray-400">
              Intelligent organization for your clipboard content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: FolderOpen,
                title: "Smart Folders",
                description: "Automatically categorize your content"
              },
              {
                icon: Tag,
                title: "Auto-Tagging",
                description: "AI-powered content classification"
              },
              {
                icon: Clock,
                title: "Time-Based Organization",
                description: "Chronological content management"
              },
              {
                icon: Search,
                title: "Smart Search",
                description: "Find content instantly"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <feature.icon className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
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
        </div>
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
