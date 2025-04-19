
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Shield, Key, Lock, Cloud, FileText, Settings } from "lucide-react";

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
            <h1 className="text-3xl font-bold">Cloud Sync & Security</h1>
          </div>
          
          <div className="glass-panel p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Secure Cloud Synchronization</h2>
            
            <p className="text-gray-300 mb-6">
              CopyClipCloud offers seamless and secure synchronization across all your Apple devices.
              Our advanced encryption ensures your clipboard data remains private while enabling productivity from anywhere.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-3">End-to-End Encryption</h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    Your clipboard data is protected with industry-leading encryption:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>AES-256 encryption for all clipboard data</li>
                    <li>End-to-end encryption ensures data can only be decrypted on your devices</li>
                    <li>Zero-knowledge architecture means we never have access to your unencrypted data</li>
                    <li>Optional password protection adds an additional layer of security</li>
                  </ul>
                  <div className="mt-4 p-4 bg-black/30 rounded">
                    <div className="flex items-center mb-2">
                      <Shield className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-green-400 font-medium">Security Advantage</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Even in the unlikely event of a server breach, your clipboard data remains secure and unreadable without your encryption keys.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Device Sync Configuration</h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    Set up and manage synchronization across your devices:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                    <li>Go to Preferences {"->"} Cloud Sync {"->"} Enable Sync</li>
                    <li>Sign in with your Apple ID or create a CopyClipCloud account</li>
                    <li>Choose which clipboard data types to sync (text, images, files, etc.)</li>
                    <li>Set synchronization frequency and conditions</li>
                  </ol>
                  <div className="mt-4 bg-black/30 rounded p-4">
                    <div className="flex items-center mb-2">
                      <Settings className="w-4 h-4 text-blue-400 mr-2" />
                      <span className="text-blue-400 font-medium">Pro Tip</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      For optimal performance, enable "Smart Sync" which automatically prioritizes frequently used items.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Privacy Controls</h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    Take control of what gets synced and stored:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Create exclusion rules for sensitive data types</li>
                    <li>Set automatic expiration times for synced clipboard items</li>
                    <li>Designate "local-only" clipboard categories that never sync to the cloud</li>
                    <li>View and manage sync history and connected devices</li>
                    <li>Remote wipe option for lost or compromised devices</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Conflict Resolution</h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    Handle synchronization conflicts intelligently:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Automatic merging of non-conflicting clipboard changes</li>
                    <li>Smart conflict detection for simultaneous edits</li>
                    <li>Visual diff tools for manual conflict resolution</li>
                    <li>Version history for recovering previous clipboard states</li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    Conflict resolution settings can be customized in Preferences {"->"} Cloud Sync {"->"} Conflict Resolution.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Secure Sharing</h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    Share clipboard items securely with colleagues and friends:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Generate encrypted share links that expire after use or time</li>
                    <li>Password-protect shared clipboard items</li>
                    <li>Set permissions for recipients (view-only, edit, etc.)</li>
                    <li>Track access logs for shared items</li>
                  </ul>
                  <div className="mt-4 bg-black/30 rounded p-4">
                    <div className="flex items-center mb-2">
                      <Lock className="w-4 h-4 text-purple-400 mr-2" />
                      <span className="text-purple-400 font-medium">Security Note</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      All shared items use separate encryption keys from your main clipboard data, ensuring your primary encryption is never compromised.
                    </p>
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
            
            <Link to="/docs/core-features" className="glass-panel p-6 hover:bg-white/5 transition-colors">
              <div className="flex items-center mb-3">
                <Key className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-medium">Core Features</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Explore CopyClipCloud's essential capabilities
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
