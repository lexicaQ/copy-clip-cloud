
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Key, FileText, Search, Tag, Cloud } from "lucide-react";

const CoreFeatures = () => {
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
              <Key className="w-5 h-5" />
            </div>
            <h1 className="text-3xl font-bold">Core Features</h1>
          </div>
          
          <div className="glass-panel p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Essential CopyClipCloud Features</h2>
            
            <p className="text-gray-300 mb-6">
              CopyClipCloud offers a comprehensive set of core features designed to transform how you work with clipboard content.
              This guide covers the essential functionality that makes CopyClipCloud a powerful productivity tool.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-3 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Clipboard History
                </h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    CopyClipCloud maintains a comprehensive history of everything you copy, giving you easy access to your past clipboard items:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Access up to 1,000 recent clipboard items (configurable)</li>
                    <li>View all types of content: text, images, files, code snippets, and more</li>
                    <li>Pin important items to keep them at the top of your history</li>
                    <li>Quick-copy any past item with a single click</li>
                    <li>View detailed metadata including copy date, source application, and size</li>
                  </ul>
                  <div className="mt-4">
                    <p className="text-gray-400 text-sm">
                      To access your clipboard history, press ⌘⇧V (default shortcut) or click the CopyClipCloud menu bar icon.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 flex items-center">
                  <Tag className="w-5 h-5 mr-2" />
                  Smart Organization
                </h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    Keep your clipboard content organized with powerful organizational tools:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Create folders to categorize clipboard items</li>
                    <li>Add tags for flexible cross-folder organization</li>
                    <li>Set up smart folders with rules to automatically sort clipboard items</li>
                    <li>Group related items for projects or workflows</li>
                    <li>Use color coding for visual organization</li>
                  </ul>
                  <div className="mt-4 p-4 bg-black/30 rounded">
                    <h4 className="font-medium mb-2">Smart Folder Example</h4>
                    <div className="text-sm text-gray-400">
                      <p className="mb-1"><strong>Name:</strong> Code Snippets</p>
                      <p className="mb-1"><strong>Rules:</strong></p>
                      <ul className="list-disc pl-5 text-xs space-y-1">
                        <li>Content contains {"<"} or {"/>"}</li>
                        <li>OR Source application is "Visual Studio Code"</li>
                        <li>OR Content contains {"{}"} AND more than 3 lines</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 flex items-center">
                  <Search className="w-5 h-5 mr-2" />
                  Search & Filtering
                </h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    Find exactly what you need with powerful search capabilities:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Full-text search across all clipboard items</li>
                    <li>Filter by content type (text, image, file, etc.)</li>
                    <li>Filter by date range or specific date</li>
                    <li>Filter by source application</li>
                    <li>Advanced search with regular expressions</li>
                    <li>Save searches for quick access to frequently used filters</li>
                  </ul>
                  <div className="mt-4 bg-black/30 p-3 rounded text-sm">
                    <p className="text-white font-medium mb-1">Search Syntax Examples:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-gray-300">
                      <div><code>from:safari</code> - Items copied from Safari</div>
                      <div><code>type:image</code> - Only image items</div>
                      <div><code>after:2023-03-01</code> - Items after March 1</div>
                      <div><code>tag:work</code> - Items with "work" tag</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Templates & Snippets
                </h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    Save time by creating reusable text templates and snippets:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Create templates for frequently used text</li>
                    <li>Insert dynamic placeholders (date, time, custom variables)</li>
                    <li>Organize templates into categories</li>
                    <li>Assign keyboard shortcuts to frequently used templates</li>
                    <li>Share templates between devices</li>
                    <li>Import and export template collections</li>
                  </ul>
                  <div className="mt-4 p-4 bg-black/30 rounded">
                    <h4 className="font-medium mb-2">Example Template: Email Signature</h4>
                    <div className="text-sm text-gray-400">
                      <pre className="whitespace-pre-wrap">
{`Best regards,

John Doe
Product Manager
Email: john@example.com
Phone: (123) 456-7890
Date: {{date}}

This email is confidential and intended solely for the use of the individual to whom it is addressed.`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 flex items-center">
                  <Cloud className="w-5 h-5 mr-2" />
                  Cross-device Sync
                </h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    Keep your clipboard in sync across all your Apple devices:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Real-time synchronization between Mac, iPhone, and iPad</li>
                    <li>End-to-end encryption for complete privacy</li>
                    <li>Selective sync for specific content types</li>
                    <li>Bandwidth-optimized syncing for large items</li>
                    <li>Offline support with automatic sync when reconnected</li>
                    <li>Conflict resolution for simultaneous edits</li>
                  </ul>
                  <div className="mt-4">
                    <Link to="/docs/cloud-sync" className="text-white hover:underline inline-flex items-center">
                      <Cloud className="w-4 h-4 mr-1" />
                      Learn more about Cloud Sync configuration
                    </Link>
                  </div>
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
            
            <Link to="/docs/advanced-usage" className="glass-panel p-6 hover:bg-white/5 transition-colors">
              <div className="flex items-center mb-3">
                <FileText className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-medium">Advanced Usage</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Explore advanced features and techniques
              </p>
            </Link>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CoreFeatures;
