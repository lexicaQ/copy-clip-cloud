
import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, FileText, Eye, CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ModernBackground from "@/components/landing/ModernBackground";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <ModernBackground />
      <Header />
      
      <div className="pt-32 pb-24 px-4 max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="h-20 w-20 rounded-2xl glass-panel flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Shield className="w-10 h-10" />
          </motion.div>
          
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Privacy & Security</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Your data is valuable. Learn how we protect your privacy and keep your clipboard data secure.
          </p>
        </motion.div>
        
        <div className="space-y-12">
          <motion.div 
            className="glass-panel p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center mr-4">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">End-to-End Encryption</h2>
                <p className="text-gray-400">
                  CopyClipCloud uses military-grade AES-256 encryption to protect your clipboard data. Your information is encrypted on your device before being synced to the cloud, ensuring that only you can access your data.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="glass-panel p-6 rounded-xl bg-white/5">
                <h3 className="font-medium mb-2">Local Encryption</h3>
                <p className="text-sm text-gray-400">All data is encrypted locally on your device before being transmitted.</p>
              </div>
              <div className="glass-panel p-6 rounded-xl bg-white/5">
                <h3 className="font-medium mb-2">Zero Knowledge</h3>
                <p className="text-sm text-gray-400">We cannot access your clipboard data. Only you hold the encryption keys.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-panel p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center mr-4">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Our Privacy Commitment</h2>
                <p className="text-gray-400">
                  We believe your clipboard data belongs to you. We don't sell your data, we don't track your usage, and we don't serve ads. Our business model is straightforward: we provide a premium service that you pay for.
                </p>
              </div>
            </div>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3 text-white" />
                <p className="text-gray-300">No third-party analytics or tracking</p>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3 text-white" />
                <p className="text-gray-300">No data sharing with advertisers</p>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3 text-white" />
                <p className="text-gray-300">Minimal data collection - only what's needed to provide the service</p>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3 text-white" />
                <p className="text-gray-300">Option to delete all your data at any time</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-panel p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center mr-4">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Privacy Policy</h2>
                <p className="text-gray-400">
                  Our privacy policy is written in plain language and clearly outlines how we handle your data. We believe in transparency and want you to understand exactly what data we collect and why.
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              <button className="px-6 py-3 bg-white/10 rounded-xl hover:bg-white/15 transition-all border border-white/20 text-sm font-medium">
                Read our full Privacy Policy
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;
