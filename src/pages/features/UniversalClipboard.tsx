import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Cloud, ArrowRight, Check, Smartphone, Laptop, Computer } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";

const UniversalClipboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <SharedBackground />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            to="/features" 
            className="inline-flex items-center text-sm text-white/70 hover:text-white mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Features
          </Link>
          
          <div className="glass-panel p-8 rounded-xl mb-12">
            <div className="flex items-center mb-8">
              <div className="p-4 rounded-xl bg-white/10 mr-6">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white">Universal Clipboard</h1>
                <p className="text-gray-400 mt-2 text-lg">Seamlessly sync your clipboard across all devices</p>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed">
                Copy on one device, paste on another. Our synchronization technology ensures your clipboard is instantly available across all your devices. Whether you're working on your MacBook, iPad, or iPhone, your clipboard follows you everywhere, making cross-device workflows seamless and efficient.
              </p>
            </div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-gradient">How It Works</h2>
            <p className="text-gray-300 mb-6">
              Universal Clipboard uses secure cloud synchronization to keep your clipboard contents available on all your devices in real-time:
            </p>
            <ul className="space-y-4">
              {[
                "Copy text, images, or files on any device",
                "Data is instantly encrypted and uploaded to the cloud",
                "All connected devices are notified of new clipboard content",
                "Paste on any device with perfect fidelity",
                "Works across platforms and operating systems"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-6 text-gradient">Supported Devices</h2>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Smartphone, name: "Mobile", description: "iOS & Android" },
                { icon: Laptop, name: "Laptop", description: "macOS & Windows" },
                { icon: Computer, name: "Desktop", description: "All platforms" }
              ].map((device, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/5 p-4 rounded-lg text-center flex flex-col items-center"
                  whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3">
                    <device.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-medium text-white">{device.name}</h3>
                  <p className="text-sm text-gray-400">{device.description}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-gray-400 mt-6 text-sm">
              Seamlessly works across multiple operating systems and platforms, with native integrations for optimal performance.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-panel p-8 rounded-xl mb-20"
        >
          <h2 className="text-2xl font-bold mb-6 text-gradient">Interactive Demonstration</h2>
          <div className="aspect-video bg-white/5 rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Cloud className="w-16 h-16 text-white/20 mx-auto mb-4" />
                <p className="text-white/50">Interactive demo video</p>
              </div>
            </div>
            
            <motion.div 
              className="absolute w-64 h-40 bg-white/5 border border-white/10 rounded-lg overflow-hidden shadow-lg"
              animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              style={{ left: "15%", top: "20%" }}
            >
              <div className="h-5 bg-white/10 flex items-center px-2">
                <div className="w-2 h-2 rounded-full bg-white/30 mr-1"></div>
                <div className="w-2 h-2 rounded-full bg-white/30 mr-1"></div>
                <div className="w-2 h-2 rounded-full bg-white/30"></div>
              </div>
              <div className="p-2 text-[10px] text-white/60 font-mono">
                const greeting = "Hello World!";
                <motion.div 
                  className="bg-purple-500/30 rounded text-white/80 px-1 inline-block mt-1"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  console.log(greeting);
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute w-32 h-56 bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg"
              animate={{ y: [5, -5, 5], rotate: [1, -1, 1] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              style={{ right: "20%", top: "25%" }}
            >
              <div className="h-3 bg-white/10 flex justify-center items-center">
                <div className="w-10 h-1 rounded-full bg-white/30"></div>
              </div>
              <div className="p-2 pt-4 text-[8px] text-white/60 font-mono flex justify-center">
                <motion.div 
                  className="bg-purple-500/30 rounded text-white/80 px-1 inline-block"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                >
                  console.log(greeting);
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute flex items-center justify-center"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5] 
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <Cloud className="w-12 h-12 text-purple-500/30" />
            </motion.div>
            
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border border-purple-500/20"
                initial={{ scale: 0.2, opacity: 0.8 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3, 
                  delay: i * 0.5,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-panel p-8 rounded-xl mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gradient">What Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: "Universal Clipboard has been a game-changer for my workflow. Moving content between my devices is now completely seamless.",
                author: "Sarah L., Product Designer"
              },
              {
                quote: "I used to email myself text and images all the time. With Universal Clipboard, that's a thing of the past. It just works.",
                author: "Michael T., Software Developer"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">{testimonial.quote}</p>
                <p className="text-sm text-gray-400">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="glass-panel p-8 rounded-xl text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-gradient">Ready to try Universal Clipboard?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the convenience of having your clipboard available everywhere. Download CopyClipCloud today and transform your cross-device workflow.
          </p>
          <Link 
            to="/download"
            className="btn-modern inline-flex items-center gap-2 text-lg px-8 py-3"
          >
            Download Now <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UniversalClipboard;
