
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Code, FileCode, FileText } from "lucide-react";

const AdvancedUsage = () => {
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
              <Code className="w-5 h-5" />
            </div>
            <h1 className="text-3xl font-bold">Advanced Usage</h1>
          </div>
          
          <div className="glass-panel p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Advanced Features & Techniques</h2>
            
            <p className="text-gray-300 mb-6">
              Take your CopyClipCloud experience to the next level with these advanced features and techniques. 
              These tools are designed for power users who want to maximize their productivity and customize their workflow.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-3">Regular Expressions</h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    CopyClipCloud supports powerful regular expression (regex) search and filtering:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Enable regex search in Preferences {"->"} Search {"->"} Enable Regular Expressions</li>
                    <li>Use standard regex syntax in the search field (e.g., <code className="bg-black/30 px-1 rounded">\d+</code> to find numbers)</li>
                    <li>Create smart filters with regex to automatically organize clipboard items</li>
                    <li>Use capture groups to extract specific information from clipboard text</li>
                  </ul>
                  <div className="mt-4 p-4 bg-black/30 rounded font-mono text-sm">
                    <p className="text-white mb-2">// Example: Smart filter for email addresses</p>
                    <p className="text-white">[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]&#123;2,&#125;</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Custom Actions</h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    Create custom actions to transform or process clipboard content:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                    <li>Go to Preferences {"->"} Actions {"->"} Create New Action</li>
                    <li>Name your action and choose a trigger (keyboard shortcut, automatic, or manual)</li>
                    <li>Define the transformation using JavaScript or predefined functions</li>
                    <li>Set conditions for when the action should be applied</li>
                  </ol>
                  <div className="mt-4 p-4 bg-black/30 rounded font-mono text-sm">
                    <p className="text-white mb-2">// Example: Convert selected text to uppercase</p>
                    <p className="text-white">return input.toUpperCase();</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Workflows & Automation</h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    Combine multiple actions into powerful workflows:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Chain multiple actions together to create complex transformations</li>
                    <li>Integrate with macOS Shortcuts for system-wide automation</li>
                    <li>Create conditional workflows that adapt based on clipboard content</li>
                    <li>Schedule automated clipboard operations</li>
                    <li>Export and import workflows to share with colleagues</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">API Integration</h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    Integrate CopyClipCloud with external tools and services:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Connect to REST APIs to process clipboard data</li>
                    <li>Send clipboard content to web services for translation, conversion, or analysis</li>
                    <li>Retrieve data from external sources and insert it into your clipboard</li>
                    <li>Automate data entry tasks by integrating with form-filling services</li>
                  </ul>
                  <Link to="/docs/api-documentation" className="inline-flex items-center text-white hover:underline mt-4">
                    <FileCode className="w-4 h-4 mr-2" />
                    View Full API Documentation
                  </Link>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Browser Extensions</h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    Enhance your web browsing experience with CopyClipCloud browser extensions:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Install the extension for Chrome, Firefox, or Safari</li>
                    <li>Capture structured data from web pages directly to CopyClipCloud</li>
                    <li>Create templates from web form data</li>
                    <li>Use smart extraction to identify and save key information</li>
                    <li>Quickly save all links or images from a webpage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/docs/getting-started" className="glass-panel p-6 hover:bg-white/5 transition-colors">
              <div className="flex items-center mb-3">
                <FileText className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-medium">Getting Started</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Return to the getting started guide
              </p>
            </Link>
            
            <Link to="/docs/api-documentation" className="glass-panel p-6 hover:bg-white/5 transition-colors">
              <div className="flex items-center mb-3">
                <FileCode className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-medium">API Documentation</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Explore the CopyClipCloud API documentation
              </p>
            </Link>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdvancedUsage;
