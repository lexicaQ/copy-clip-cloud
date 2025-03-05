
import React from "react";
import { motion } from "framer-motion";
import { 
  Clipboard, Cloud, Shield, Search, Zap, Code, Image, 
  FileText, Smartphone, Layers, Clock, Tag, Sparkles
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InteractiveBackground from "@/components/landing/InteractiveBackground";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <InteractiveBackground />
      <Header />
      
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-3"
          >
            <div className="glass-panel p-3 rounded-xl inline-flex">
              <Clipboard className="w-6 h-6 text-white" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl font-bold mb-6"
          >
            Powerful Features for <span className="text-gradient">Modern Workflows</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Discover how CopyClipCloud transforms your clipboard experience with these incredible features
          </motion.p>
        </motion.div>
        
        {/* Hero Feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass-panel p-10 rounded-3xl mb-20 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-white/10">
                  <Cloud className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white/70 font-medium">Universal Sync</h3>
              </div>
              
              <h2 className="text-3xl font-bold">Seamless Synchronization Across All Your Devices</h2>
              
              <p className="text-gray-400 leading-relaxed">
                CopyClipCloud ensures your clipboard is always up-to-date across all your Apple devices. Copy on your Mac and paste on your iPhone or iPad instantly. The synchronization happens in real-time, with no delays or conflicts.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Real-time syncing between all connected devices",
                  "No setup required - works automatically",
                  "Conflict resolution for simultaneous edits",
                  "Offline support with synchronization when back online"
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mt-1 mr-3">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="w-full md:w-1/2 relative">
              <div className="glass-panel p-5 rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Seamless synchronization" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent rounded-2xl pointer-events-none"></div>
                
                <div className="absolute -top-5 -right-5">
                  <div className="glass-panel p-3 rounded-full border border-white/20 shadow-lg">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <div className="absolute -bottom-5 -left-5">
                  <div className="glass-panel p-3 rounded-full border border-white/20 shadow-lg">
                    <Cloud className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Rich Media Support",
                description: "Store and manage text, images, files, and formatted content with intelligent organization.",
                icon: Image,
                delay: 0.1
              },
              {
                title: "End-to-End Encryption",
                description: "Military-grade encryption ensures your clipboard data stays private and secure at all times.",
                icon: Shield,
                delay: 0.2
              },
              {
                title: "Intelligent Search",
                description: "Quickly find any item in your clipboard history with powerful search and filtering options.",
                icon: Search,
                delay: 0.3
              },
              {
                title: "Code Snippet Detection",
                description: "Automatic language detection and syntax highlighting for code snippets.",
                icon: Code,
                delay: 0.4
              },
              {
                title: "Smart Categories",
                description: "AI-powered organization automatically sorts your clipboard items into relevant categories.",
                icon: Tag,
                delay: 0.5
              },
              {
                title: "Timeline History",
                description: "Browse through your clipboard history with an intuitive timeline view and quick access.",
                icon: Clock,
                delay: 0.6
              },
              {
                title: "Custom Templates",
                description: "Create reusable templates for frequently used text snippets and content structures.",
                icon: FileText,
                delay: 0.7
              },
              {
                title: "Mobile Integration",
                description: "Seamless integration with iOS and iPadOS for a consistent experience across all devices.",
                icon: Smartphone,
                delay: 0.8
              },
              {
                title: "Multi-format Support",
                description: "Preserve formatting when copying content between different applications and platforms.",
                icon: Layers,
                delay: 0.9
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="glass-panel rounded-xl p-6 hover:border-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: feature.delay, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4 p-3 bg-white/10 rounded-lg w-fit">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        
        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">See CopyClipCloud in Action</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Watch how easy it is to manage your clipboard across all your devices
            </p>
          </div>
          
          <div className="relative aspect-video glass-panel rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <motion.button
                className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/40"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <div className="ml-1 w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent"></div>
                </div>
              </motion.button>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="CopyClipCloud Demo" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        
        {/* Installation Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quick Installation Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get up and running with CopyClipCloud in just a few simple steps
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            {[
              {
                title: "Download",
                description: "Download CopyClipCloud from our website",
                icon: Cloud,
                step: 1
              },
              {
                title: "Install",
                description: "Run the installer and follow the instructions",
                icon: Zap,
                step: 2
              },
              {
                title: "Set Up",
                description: "Sign in with your Apple ID to enable sync",
                icon: Sparkles,
                step: 3
              },
              {
                title: "Use",
                description: "Start copying and access your clipboard anywhere",
                icon: Clipboard,
                step: 4
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="flex-1 glass-panel p-6 rounded-xl relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -right-4 -top-4 w-20 h-20 rounded-full bg-white/5"></div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass-panel p-10 rounded-3xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Join thousands of professionals who have already upgraded their clipboard experience with CopyClipCloud
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="/download"
              className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Now
            </motion.a>
            <motion.a
              href="/pricing"
              className="px-8 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all border border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Pricing
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Features;
