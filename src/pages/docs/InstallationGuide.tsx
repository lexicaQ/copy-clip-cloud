
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Terminal, MonitorSmartphone, CheckCircle, AlertCircle, Code, Copy } from "lucide-react";
import { toast } from "sonner";

const InstallationGuide = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Command copied to clipboard");
  };

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
            <span className="text-gradient">Installation Guide</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Follow these steps to install CopyClipCloud on your device
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="glass-panel p-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">System Requirements</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-white mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">macOS 15 or later</h3>
                  <p className="text-gray-400 text-sm">CopyClipCloud is optimized for the latest macOS version</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-white mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Minimum 4GB RAM</h3>
                  <p className="text-gray-400 text-sm">For optimal performance</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-white mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">500MB free disk space</h3>
                  <p className="text-gray-400 text-sm">Required for the application and local data storage</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-white mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Internet connection</h3>
                  <p className="text-gray-400 text-sm">Required for cloud synchronization features</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-panel p-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">Installation Steps</h2>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Download the Installer</h3>
                  <p className="text-gray-400 mb-4">
                    Download the latest version of CopyClipCloud from our official website.
                  </p>
                  <Link
                    to="/download"
                    className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg hover:bg-opacity-90 transition-all"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Now
                  </Link>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Run the Installer</h3>
                  <p className="text-gray-400 mb-4">
                    Locate the downloaded file and double-click to run it. Follow the on-screen instructions.
                  </p>
                  <div className="bg-black/40 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Terminal className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="text-sm text-gray-400">Terminal</span>
                      </div>
                      <button 
                        className="text-gray-400 hover:text-white transition-colors"
                        onClick={() => copyToClipboard("sudo chmod +x CopyClipCloud.dmg && open CopyClipCloud.dmg")}
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                    <code className="text-gray-300 text-sm">sudo chmod +x CopyClipCloud.dmg && open CopyClipCloud.dmg</code>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Drag to Applications</h3>
                  <p className="text-gray-400 mb-4">
                    When the installer opens, drag the CopyClipCloud icon to the Applications folder.
                  </p>
                  <div className="flex items-center justify-center bg-black/30 p-6 rounded-lg">
                    <MonitorSmartphone className="w-20 h-20 text-gray-400" />
                    <div className="text-white ml-4 mr-4">→</div>
                    <div className="w-20 h-20 rounded-lg bg-white/5 flex items-center justify-center">
                      <Code className="w-10 h-10 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Launch the Application</h3>
                  <p className="text-gray-400 mb-4">
                    Open the Applications folder and double-click on CopyClipCloud to launch it.
                  </p>
                  <div className="bg-black/40 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Terminal className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="text-sm text-gray-400">Terminal</span>
                      </div>
                      <button 
                        className="text-gray-400 hover:text-white transition-colors"
                        onClick={() => copyToClipboard("open -a CopyClipCloud")}
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                    <code className="text-gray-300 text-sm">open -a CopyClipCloud</code>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-panel p-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6">Troubleshooting</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-white mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">"App cannot be opened" message</h3>
                  <p className="text-gray-400 mb-2">
                    If you see a message saying the app cannot be opened because it is from an unidentified developer:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-400 text-sm">
                    <li>Open System Preferences</li>
                    <li>Go to Security & Privacy</li>
                    <li>Click the "Open Anyway" button next to the message about CopyClipCloud</li>
                  </ol>
                </div>
              </div>
              
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-white mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Missing permissions</h3>
                  <p className="text-gray-400 mb-2">
                    CopyClipCloud needs permission to access your clipboard. If you didn't grant this during setup:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-400 text-sm">
                    <li>Open System Preferences</li>
                    <li>Go to Security & Privacy → Privacy → Accessibility</li>
                    <li>Click the lock icon to make changes</li>
                    <li>Check the box next to CopyClipCloud</li>
                  </ol>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center">
            <Link
              to="/docs/quick-start-tutorial"
              className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg hover:bg-opacity-90 transition-all"
            >
              Next: Quick Start Tutorial
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InstallationGuide;
