import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Clipboard, ArrowRight, Check, Cloud, Laptop, Smartphone } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import { Button } from "@/components/ui/button";

const CopyClipCloud = () => {
  return (
    <div className="min-h-screen bg-background">
      <SharedBackground />
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="mb-12">
          <Button variant="ghost" asChild>
            <Link to="/features" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Features
            </Link>
          </Button>
        </div>

        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-32 h-32 mx-auto mb-8">
            <motion.div 
              className="absolute inset-0 bg-white/5 rounded-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative w-full h-full rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Clipboard className="w-16 h-16" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            CopyClipCloud
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Synchronize your clipboard seamlessly across all your devices with our cloud-powered solution.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto mb-20 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="aspect-[16/9] rounded-xl overflow-hidden relative glass-panel p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                className="absolute left-1/4 transform -translate-x-1/2"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="glass-panel p-4">
                  <Laptop className="w-16 h-16 text-white/80" />
                </div>
              </motion.div>

              <motion.div
                className="relative"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="glass-panel p-6 bg-white/5">
                  <Cloud className="w-20 h-20 text-white" />
                </div>
                
                {[0, 120, 240].map((degree) => (
                  <motion.div
                    key={degree}
                    className="absolute top-1/2 left-1/2 h-px bg-gradient-to-r from-white/20 to-transparent w-32 origin-left"
                    style={{ transform: `rotate(${degree}deg)` }}
                    animate={{
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: degree / 360
                    }}
                  />
                ))}
              </motion.div>

              <motion.div
                className="absolute right-1/4 transform translate-x-1/2"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="glass-panel p-4">
                  <Smartphone className="w-16 h-16 text-white/80" />
                </div>
              </motion.div>
            </div>

            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/40 rounded-full"
                initial={{ 
                  x: Math.random() * 100 - 50 + "%", 
                  y: Math.random() * 100 + "%"
                }}
                animate={{
                  x: [
                    Math.random() * 100 - 50 + "%",
                    Math.random() * 100 - 50 + "%"
                  ],
                  y: [
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%"
                  ],
                  opacity: [0.2, 0.8, 0.2]
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {[
            {
              title: "Cross-Device Sync",
              description: "Instantly sync your clipboard across all your devices"
            },
            {
              title: "Secure Storage",
              description: "End-to-end encryption keeps your data safe"
            },
            {
              title: "Smart History",
              description: "Access your clipboard history with smart categorization"
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="glass-panel p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Check className="w-8 h-8 mb-4 text-white/80" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button 
            size="lg"
            className="bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 backdrop-blur-xl border border-white/10"
          >
            Try CopyClipCloud Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CopyClipCloud;
