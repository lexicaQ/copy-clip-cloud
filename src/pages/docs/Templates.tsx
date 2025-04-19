
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DocLayout from "./DocLayout";
import { 
  FileText, 
  Code, 
  Plus, 
  Pencil, 
  Star, 
  DollarSign, 
  Clock,
  Tag,
  Folder,
  Share2
} from "lucide-react";

const Templates = () => {
  const templateExamples = [
    {
      name: "Email Signature",
      code: `Best regards,\n\nJohn Doe\nProduct Manager\nCopyClipCloud\nEmail: john@copyclipcloud.com\nPhone: (123) 456-7890\n\n[[date]]`,
      category: "Communication",
      icon: FileText
    },
    {
      name: "Code Snippet",
      code: `function [[functionName]](params) {\n  // TODO: Implement function\n  return result;\n}`,
      category: "Development",
      icon: Code
    },
    {
      name: "Meeting Notes",
      code: `# Meeting: [[meeting_title]]\n# Date: [[date]]\n# Attendees: [[attendees]]\n\n## Agenda\n- \n\n## Notes\n- \n\n## Action Items\n- [ ] `,
      category: "Productivity",
      icon: FileText
    }
  ];

  return (
    <DocLayout title="Templates & Snippets" icon={FileText}>
      <div className="glass-panel p-8 mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Creating Reusable Text Templates</h2>
          
          <p className="text-gray-300 mb-6">
            Templates in CopyClipCloud allow you to create and manage reusable text snippets that speed up your workflow
            and ensure consistency across your communications and documents.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {["Create", "Use", "Organize"].map((action, index) => (
              <motion.div
                key={action}
                className="glass-panel bg-white/5 p-6 rounded-lg border border-white/10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-600/30 flex items-center justify-center mb-4">
                  {index === 0 ? (
                    <Plus className="w-5 h-5 text-indigo-300" />
                  ) : index === 1 ? (
                    <Pencil className="w-5 h-5 text-indigo-300" />
                  ) : (
                    <Folder className="w-5 h-5 text-indigo-300" />
                  )}
                </div>
                <h3 className="text-lg font-medium mb-2">{action} Templates</h3>
                <p className="text-gray-400 text-sm">
                  {index === 0
                    ? "Design custom templates with variables for dynamic content"
                    : index === 1
                    ? "Insert templates with keyboard shortcuts or from menu"
                    : "Categorize and tag templates for easy discovery"}
                </p>
              </motion.div>
            ))}
          </div>
          
          <h3 className="text-xl font-medium mb-4">Dynamic Variables</h3>
          <p className="text-gray-300 mb-4">
            Enhance your templates with dynamic variables that automatically update when inserted:
          </p>
          
          <div className="glass-panel bg-black/20 p-6 mb-8 rounded-lg border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-md font-medium flex items-center mb-2">
                  <Clock className="w-4 h-4 mr-2 text-indigo-300" />
                  Time & Date Variables
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><code className="bg-black/30 px-1.5 py-0.5 rounded">[[date]]</code> - Current date (04/19/2025)</li>
                  <li><code className="bg-black/30 px-1.5 py-0.5 rounded">[[time]]</code> - Current time (15:30)</li>
                  <li><code className="bg-black/30 px-1.5 py-0.5 rounded">[[day]]</code> - Current day (Saturday)</li>
                  <li><code className="bg-black/30 px-1.5 py-0.5 rounded">[[month]]</code> - Current month (April)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-md font-medium flex items-center mb-2">
                  <Tag className="w-4 h-4 mr-2 text-indigo-300" />
                  Custom Variables
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><code className="bg-black/30 px-1.5 py-0.5 rounded">[[name]]</code> - Your name from profile</li>
                  <li><code className="bg-black/30 px-1.5 py-0.5 rounded">[[email]]</code> - Your email address</li>
                  <li><code className="bg-black/30 px-1.5 py-0.5 rounded">[[custom_field]]</code> - Any custom defined field</li>
                  <li><code className="bg-black/30 px-1.5 py-0.5 rounded">[[prompt:question]]</code> - Prompts for input</li>
                </ul>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-medium mb-4">Template Examples</h3>
          <p className="text-gray-300 mb-6">
            Here are some useful template examples to get you started:
          </p>
          
          <div className="space-y-6 mb-8">
            {templateExamples.map((template, index) => (
              <motion.div 
                key={index} 
                className="glass-panel bg-white/5 p-6 rounded-lg border border-white/10"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-600/20 flex items-center justify-center mr-3">
                      <template.icon className="w-4 h-4 text-indigo-300" />
                    </div>
                    <div>
                      <h4 className="font-medium">{template.name}</h4>
                      <span className="text-xs text-gray-500">{template.category}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-1.5 rounded-full bg-black/20 hover:bg-black/40 transition-colors">
                      <Star className="w-3.5 h-3.5 text-yellow-400" />
                    </button>
                    <button className="p-1.5 rounded-full bg-black/20 hover:bg-black/40 transition-colors">
                      <Share2 className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </div>
                </div>
                <div className="bg-black/30 p-3 rounded font-mono text-xs text-gray-300 overflow-x-auto whitespace-pre-wrap">
                  {template.code}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/10 to-indigo-600/10 p-6 rounded-lg border border-white/10">
            <h3 className="flex items-center text-lg font-medium mb-3">
              <Star className="w-5 h-5 mr-2 text-yellow-400" />
              Pro Features
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/20 rounded-lg p-4">
                <h4 className="flex items-center text-md font-medium mb-2">
                  <DollarSign className="w-4 h-4 mr-2 text-green-400" />
                  Template Marketplace
                </h4>
                <p className="text-sm text-gray-400">
                  Browse and download pre-built templates created by professionals for various industries and use cases.
                </p>
              </div>
              
              <div className="bg-black/20 rounded-lg p-4">
                <h4 className="flex items-center text-md font-medium mb-2">
                  <Share2 className="w-4 h-4 mr-2 text-blue-400" />
                  Team Sharing
                </h4>
                <p className="text-sm text-gray-400">
                  Share template libraries with your team to ensure consistency in communications and documentation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/docs/core-features" className="glass-panel p-6 hover:bg-white/5 transition-colors">
          <div className="flex items-center mb-3">
            <FileText className="w-5 h-5 mr-2" />
            <h3 className="text-lg font-medium">Core Features</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Explore other core features of CopyClipCloud
          </p>
        </Link>
        
        <Link to="/docs/advanced-usage" className="glass-panel p-6 hover:bg-white/5 transition-colors">
          <div className="flex items-center mb-3">
            <Code className="w-5 h-5 mr-2" />
            <h3 className="text-lg font-medium">Advanced Usage</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Take your template usage to the next level
          </p>
        </Link>
      </div>
    </DocLayout>
  );
};

export default Templates;
