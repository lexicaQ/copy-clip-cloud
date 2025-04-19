
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, ArrowRight, Check, Lock, Key, FileCheck } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";

const EndToEndEncryption = () => {
  const [shieldRotation, setShieldRotation] = useState(0);
  
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
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white">End-to-End Encryption</h1>
                <p className="text-gray-400 mt-2 text-lg">Military-grade security for your data</p>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed">
                Your clipboard often contains sensitive information. That's why we've implemented military-grade end-to-end encryption for all your data. Only your devices have the keys to decrypt your content, ensuring complete privacy and security even when syncing across multiple devices.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Feature details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-gradient">How Our Encryption Works</h2>
            <p className="text-gray-300 mb-6">
              CopyClipCloud uses state-of-the-art encryption technology to ensure your clipboard data remains private:
            </p>
            <ul className="space-y-4">
              {[
                "AES-256 encryption for all clipboard content",
                "RSA-4096 for secure key exchange",
                "Zero-knowledge architecture",
                "Perfect forward secrecy",
                "Secure device authentication and authorization",
                "End-to-end encryption across all synchronized devices"
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
            className="glass-panel p-8 rounded-xl relative overflow-hidden"
            onHoverStart={() => setShieldRotation(360)}
            onHoverEnd={() => setShieldRotation(0)}
          >
            <h2 className="text-2xl font-bold mb-6 text-gradient">Security Visualization</h2>
            
            <div className="flex items-center justify-center h-64 relative">
              {/* Background security elements - improved positioning and containment */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(3)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="absolute rounded-full border border-green-500/20"
                    style={{ 
                      width: `${(index + 1) * 20}%`, 
                      height: `${(index + 1) * 20}%`,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                    animate={{ 
                      rotate: [0, 360],
                      borderColor: [
                        "rgba(74, 222, 128, 0.2)",
                        "rgba(74, 222, 128, 0.3)",
                        "rgba(74, 222, 128, 0.2)"
                      ]
                    }}
                    transition={{ 
                      duration: 20 + index * 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}
                
                {/* Binary code effect with improved positioning */}
                {[...Array(20)].map((_, index) => (
                  <motion.div
                    key={`binary-${index}`}
                    className="absolute text-[10px] font-mono text-green-500/30"
                    initial={{ 
                      x: Math.random() * 200 - 100, 
                      y: Math.random() * 200 - 100,
                      opacity: 0
                    }}
                    animate={{ 
                      opacity: [0, 0.7, 0],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                      ease: "easeInOut"
                    }}
                  >
                    {Math.random() > 0.5 ? "1" : "0"}
                  </motion.div>
                ))}
              </div>
              
              {/* Center shield with animation - improved centering */}
              <motion.div
                className="relative z-10 bg-white/5 w-24 h-24 rounded-full flex items-center justify-center"
                animate={{ 
                  boxShadow: [
                    "0 0 20px 0 rgba(74, 222, 128, 0.2)",
                    "0 0 40px 0 rgba(74, 222, 128, 0.4)",
                    "0 0 20px 0 rgba(74, 222, 128, 0.2)"
                  ],
                  rotate: shieldRotation
                }}
                transition={{ 
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 1.5,
                    ease: "easeInOut"
                  }
                }}
              >
                <Shield className="w-12 h-12 text-green-400" />
              </motion.div>
              
              {/* Animated encryption elements with improved positioning */}
              {[...Array(4)].map((_, index) => {
                // Calculate positions in a circle around center
                const angle = (index * Math.PI / 2) + (Math.PI / 4); // Offset by 45 degrees
                const xPos = Math.cos(angle) * 80; // Radius of 80px
                const yPos = Math.sin(angle) * 80;
                
                return (
                  <motion.div
                    key={`lock-${index}`}
                    className="absolute"
                    style={{ 
                      left: `calc(50% + ${xPos}px)`,
                      top: `calc(50% + ${yPos}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 1,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                      <Lock className="w-5 h-5 text-green-400/70" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="mt-6 text-center text-sm text-white/70">
              Your data is encrypted with AES-256, the same encryption standard used by governments and military organizations worldwide.
            </div>
          </motion.div>
        </div>
        
        {/* Security process illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-panel p-8 rounded-xl mb-20"
        >
          <h2 className="text-2xl font-bold mb-8 text-gradient text-center">The Encryption Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "1. Device Key Generation",
                description: "Each of your devices generates its own unique encryption keys that never leave the device.",
                icon: Key
              },
              {
                title: "2. Content Encryption",
                description: "When you copy something, it's immediately encrypted on your device before transmission.",
                icon: Lock
              },
              {
                title: "3. Secure Verification",
                description: "Your other devices securely verify and decrypt the content when you need to access it.",
                icon: FileCheck
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white/5 rounded-lg p-6 text-center relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.2 }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-medium mt-4 mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
                
                {index < 2 && (
                  <motion.div
                    className="absolute top-1/2 -right-4 w-8 h-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.2 }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <motion.div
                        className="h-0.5 bg-white/20 w-full"
                        animate={{ width: ["0%", "100%"] }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                      />
                      <div className="absolute right-0 w-2 h-2 border-t border-r border-white/20 transform rotate-45 -translate-y-1/2" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Security certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-panel p-8 rounded-xl mb-20"
        >
          <h2 className="text-2xl font-bold mb-6 text-gradient">Security Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "SOC 2 Type II Certified",
              "GDPR Compliant",
              "ISO 27001 Certified",
              "HIPAA Compliant"
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white/5 p-4 rounded-lg text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-white/80 font-medium">{cert}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="glass-panel p-8 rounded-xl text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-gradient">Secure Your Clipboard Today</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience peace of mind knowing your sensitive clipboard data is protected with military-grade encryption. Download CopyClipCloud now.
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

export default EndToEndEncryption;
