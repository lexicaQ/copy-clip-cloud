
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Cloud, Shield, Settings, HelpCircle } from "lucide-react";

const CloudSync = () => {
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
              <Cloud className="w-5 h-5" />
            </div>
            <h1 className="text-3xl font-bold">Cloud Synchronization</h1>
          </div>
          
          <div className="glass-panel p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Setting Up & Using Cloud Sync</h2>
            
            <p className="text-gray-300 mb-6">
              CopyClipCloud's synchronization feature allows you to access your clipboard history across all your devices.
              This guide explains how to set up, configure, and troubleshoot cloud synchronization.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-3">Getting Started with Sync</h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    To start using cloud synchronization, follow these steps:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                    <li>Create a CopyClipCloud account or sign in to your existing account</li>
                    <li>Open CopyClipCloud preferences (⌘,)</li>
                    <li>Navigate to the "Sync" tab</li>
                    <li>Toggle "Enable Cloud Sync" to ON</li>
                    <li>Choose which content types to sync (text, images, files, etc.)</li>
                    <li>Set sync frequency (real-time, hourly, or manual)</li>
                    <li>Click "Apply" to save your settings</li>
                  </ol>
                  <div className="mt-4 text-sm bg-white/10 p-3 rounded">
                    <p className="text-white font-medium flex items-center mb-2">
                      <HelpCircle className="w-4 h-4 mr-1" />
                      Note
                    </p>
                    <p className="text-gray-300">
                      Cloud sync requires a CopyClipCloud account. The free plan includes basic sync features, 
                      while premium plans offer additional storage and faster sync frequencies.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  Sync Configuration
                </h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    Customize your synchronization settings to match your workflow:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Content Types</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-gray-300 text-sm">
                        <div className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2"></span>
                          <span>Text (plain text, formatted text, code)</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2"></span>
                          <span>Images (JPG, PNG, GIF, SVG)</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2"></span>
                          <span>Files (PDFs, documents, archives)</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2"></span>
                          <span>Rich content (links, cards, snippets)</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Sync Frequency</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-gray-300 text-sm">
                        <div className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2"></span>
                          <span>Real-time (immediate sync)</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2"></span>
                          <span>Periodic (every 5, 15, 30, or 60 minutes)</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2"></span>
                          <span>Manual (sync only when requested)</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2"></span>
                          <span>Wi-Fi only (sync only on Wi-Fi networks)</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Size Limits</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-gray-300 text-sm">
                        <div className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2"></span>
                          <span>Maximum item size (default: 50MB)</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2"></span>
                          <span>Storage quota (varies by plan)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Security & Privacy
                </h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    CopyClipCloud takes the security of your data seriously:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li><strong>End-to-end encryption:</strong> All data is encrypted before leaving your device, ensuring that only you can access your clipboard content.</li>
                    <li><strong>Zero-knowledge architecture:</strong> We cannot access your clipboard data, even if requested by authorities.</li>
                    <li><strong>Local encryption key:</strong> Your encryption key is stored locally and never transmitted to our servers.</li>
                    <li><strong>Option to exclude sensitive content:</strong> Configure rules to prevent specific content from being synced.</li>
                    <li><strong>Automatic data cleanup:</strong> Set retention policies to automatically delete old clipboard items.</li>
                  </ul>
                  <div className="mt-4 bg-green-900/20 border border-green-700/30 p-4 rounded">
                    <h4 className="font-medium text-green-400 mb-2">Enhanced Security Options</h4>
                    <p className="text-gray-300 text-sm">
                      For additional security, you can enable these premium features:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm mt-2">
                      <li>Two-factor authentication for account access</li>
                      <li>Biometric verification before accessing synced content</li>
                      <li>Device authorization management</li>
                      <li>Custom encryption key management</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Troubleshooting Sync Issues</h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    If you encounter synchronization problems, try these common solutions:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Content Not Syncing</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                        <li>Verify that cloud sync is enabled in Preferences > Sync</li>
                        <li>Check your internet connection</li>
                        <li>Ensure the content type is enabled for syncing</li>
                        <li>Verify that the item size is within limits</li>
                        <li>Try initiating a manual sync (⌘⇧S)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Sync Conflicts</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                        <li>When conflicts occur, the most recent version is kept by default</li>
                        <li>Check the conflict resolution policy in Preferences > Sync > Advanced</li>
                        <li>Review conflict logs in Preferences > Sync > History</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Reset Sync</h4>
                      <p className="text-gray-300 text-sm mb-2">
                        If persistent issues occur, you can reset synchronization:
                      </p>
                      <ol className="list-decimal pl-5 space-y-1 text-gray-300 text-sm">
                        <li>Go to Preferences > Sync > Advanced</li>
                        <li>Click "Reset Sync"</li>
                        <li>Choose whether to keep local items, remote items, or merge both</li>
                        <li>Wait for the reset process to complete</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/docs/getting-started" className="glass-panel p-6 hover:bg-white/5 transition-colors">
              <div className="flex items-center mb-3">
                <Cloud className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-medium">Getting Started</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Return to the getting started guide
              </p>
            </Link>
            
            <Link to="/docs/core-features" className="glass-panel p-6 hover:bg-white/5 transition-colors">
              <div className="flex items-center mb-3">
                <Cloud className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-medium">Core Features</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Explore more CopyClipCloud features
              </p>
            </Link>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CloudSync;
