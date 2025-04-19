
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DownloadButton from "@/components/landing/DownloadButton";
import { 
  Download, 
  Apple, 
  FileCheck, 
  Lock, 
  Cpu, 
  HardDrive,
  ShieldCheck,
  Server
} from "lucide-react";

const SystemRequirement = ({ icon: Icon, title, description }) => (
  <div className="flex items-start">
    <div className="p-2 rounded-lg bg-white/10 mr-3 mt-1">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h4 className="font-medium text-white">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  </div>
);

const DownloadOption = ({ title, description, icon: Icon, primary = false, coming = false, beta = false }) => (
  <motion.div
    className={`glass-panel p-6 ${primary ? 'border-2 border-white/30' : ''} ${coming ? 'opacity-70' : ''}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <div className="flex items-center mb-4">
      <div className={`p-2 rounded-lg ${primary ? 'bg-white/20' : 'bg-white/10'} mr-3`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-xl font-medium">{title}</h3>
        {primary && !coming && !beta && (
          <span className="text-xs bg-white/20 rounded-full px-2 py-0.5 ml-2">
            Recommended
          </span>
        )}
        {beta && (
          <span className="text-xs bg-blue-500/30 text-blue-300 rounded-full px-2 py-0.5 ml-2">
            Beta
          </span>
        )}
        {coming && (
          <span className="text-xs bg-purple-500/30 text-purple-300 rounded-full px-2 py-0.5 ml-2">
            Coming Soon
          </span>
        )}
      </div>
    </div>
    
    <p className="text-gray-400 text-sm mb-6">{description}</p>
    
    {coming ? (
      <button 
        disabled
        className="w-full px-6 py-3 bg-white/10 text-gray-300 rounded-full flex items-center justify-center cursor-not-allowed"
      >
        <span>Coming Soon</span>
      </button>
    ) : beta ? (
      <a 
        href="#beta-download"
        className="w-full px-6 py-3 bg-blue-500/20 text-white rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-all"
      >
        <Download className="w-4 h-4 mr-2" />
        <span>Download Beta</span>
      </a>
    ) : primary ? (
      <div className="flex flex-col space-y-4">
        <DownloadButton />
        <p className="text-xs text-center text-gray-500">
          Version 3.5.0 • Released April 15, 2023
        </p>
      </div>
    ) : (
      <a 
        href="#download-stable"
        className="w-full px-6 py-3 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
      >
        <Download className="w-4 h-4 mr-2" />
        <span>Download</span>
      </a>
    )}
  </motion.div>
);

const Download = () => {
  return (
    <div className="relative min-h-screen">
      <Header />

      <main className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Download CopyClipCloud</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Get started with the most powerful clipboard manager for your devices.
            Choose the version that's right for you.
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Available Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DownloadOption 
              title="macOS"
              description="The complete experience optimized for Mac with full feature support and native integration."
              icon={Apple}
              primary={true}
            />
            <DownloadOption 
              title="iOS"
              description="Take your clipboard history with you on your iPhone with our mobile-optimized interface."
              icon={Apple}
            />
            <DownloadOption 
              title="iPadOS"
              description="Enhanced for iPad with support for keyboard shortcuts and Apple Pencil."
              icon={Apple}
            />
            <DownloadOption 
              title="Windows"
              description="Coming soon to Windows with cross-platform syncing capabilities."
              icon={Download}
              coming={true}
            />
            <DownloadOption 
              title="Linux"
              description="Linux support coming in late 2024. Join the waitlist for early access."
              icon={Server}
              coming={true}
            />
            <DownloadOption 
              title="Beta Channel"
              description="Get early access to new features and help us improve with your feedback."
              icon={Download}
              beta={true}
            />
          </div>
        </motion.div>

        <motion.div
          className="glass-panel p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">System Requirements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <h3 className="text-xl font-medium mb-4">macOS</h3>
              <SystemRequirement 
                icon={Apple}
                title="Operating System"
                description="macOS 11.0 (Big Sur) or later"
              />
              <SystemRequirement 
                icon={Cpu}
                title="Processor"
                description="Intel Core i5 or Apple Silicon"
              />
              <SystemRequirement 
                icon={HardDrive}
                title="Storage"
                description="200 MB of available space"
              />
              <SystemRequirement 
                icon={Lock}
                title="Internet Connection"
                description="Required for cloud synchronization features"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-medium mb-4">iOS / iPadOS</h3>
              <SystemRequirement 
                icon={Apple}
                title="Operating System"
                description="iOS 14.0 or iPadOS 14.0 or later"
              />
              <SystemRequirement 
                icon={Cpu}
                title="Device"
                description="iPhone 8 or newer, iPad (6th generation) or newer"
              />
              <SystemRequirement 
                icon={HardDrive}
                title="Storage"
                description="100 MB of available space"
              />
              <SystemRequirement 
                icon={Lock}
                title="Apple ID"
                description="Required for App Store download and iCloud sync"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="glass-panel p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-white/10 mr-3">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium">Previous Versions</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Need an older version of CopyClipCloud? We maintain archives of previous releases.
            </p>
            <a 
              href="#previous-versions"
              className="inline-flex items-center text-white hover:underline"
            >
              Browse version history <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </motion.div>

          <motion.div
            className="glass-panel p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-white/10 mr-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium">Verify Downloads</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Verify the authenticity of your downloads using our checksums and digital signatures.
            </p>
            <a 
              href="#verify-downloads"
              className="inline-flex items-center text-white hover:underline"
            >
              Learn how to verify <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Having trouble with your download or installation? Our support team is here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/support" 
              className="px-6 py-3 bg-white text-black rounded-full inline-flex items-center hover:bg-opacity-90 transition-all"
            >
              Get Support
            </a>
            <a 
              href="/tutorials" 
              className="px-6 py-3 bg-white/10 rounded-full inline-flex items-center hover:bg-white/20 transition-all"
            >
              Installation Guide
            </a>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Download;
