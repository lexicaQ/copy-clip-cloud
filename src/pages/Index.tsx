
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import AppFeatures from "@/components/landing/AppFeatures";
import AppLogo from "@/components/landing/AppLogo";
import DownloadButton from "@/components/landing/DownloadButton";
import AppTitle from "@/components/landing/AppTitle";
import InteractiveBackground from "@/components/landing/InteractiveBackground";
import TestimonialCarousel from "@/components/landing/TestimonialCarousel";
import AppStats from "@/components/landing/AppStats";
import AppFAQ from "@/components/landing/AppFAQ";
import HowItWorks from "@/components/landing/HowItWorks";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Sparkles, Zap, ArrowDown } from "lucide-react";

const Index = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start("visible");
  }, [controls]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background effects */}
      <InteractiveBackground />

      {/* Header */}
      <Header />

      <motion.div 
        className="max-w-7xl mx-auto px-4 pt-32 pb-24 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="w-full max-w-4xl mx-auto text-center"
        >
          {/* Logo and Badge */}
          <motion.div variants={itemVariants}>
            <AppLogo />
          </motion.div>
          
          {/* Title and Description */}
          <motion.div variants={itemVariants}>
            <AppTitle />
          </motion.div>

          {/* Top Feature Highlights */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-5"
            variants={itemVariants}
          >
            {[
              { icon: Sparkles, title: "AI Powered", desc: "Smart organization", color: "from-purple-500/20 to-purple-500/5" },
              { icon: Shield, title: "Encrypted", desc: "End-to-end security", color: "from-green-500/20 to-green-500/5" },
              { icon: Zap, title: "Lightning Fast", desc: "Optimized performance", color: "from-yellow-500/20 to-yellow-500/5" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                className={`glass-panel px-7 py-5 flex items-center gap-4 backdrop-blur-lg bg-gradient-to-br ${feature.color} hover:bg-white/5 transition-all duration-500 group`}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.3)",
                  transition: { type: "spring", stiffness: 500, damping: 15 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/15 transition-colors duration-500">
                  <feature.icon className="w-6 h-6 group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-white text-lg">{feature.title}</p>
                  <p className="text-sm text-gray-300">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="mt-16 mb-8 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.div 
              className="text-gray-400 text-sm mb-2"
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              Scroll to discover
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, 5, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="w-5 h-5 text-gray-400" />
            </motion.div>
          </motion.div>

          {/* Download Button - with enhanced design */}
          <motion.div 
            className="mt-12 relative"
            variants={itemVariants}
          >
            <div className="absolute -inset-10 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-blue-500/0 rounded-full blur-3xl opacity-20"></div>
            <DownloadButton />
          </motion.div>
          
          {/* Features Grid */}
          <motion.div 
            variants={itemVariants}
            className="mt-32 relative"
          >
            <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 rounded-full blur-3xl opacity-20 -z-10"></div>
            <AppFeatures />
          </motion.div>
          
          {/* How It Works */}
          <motion.div 
            className="mt-32 relative"
            variants={itemVariants}
          >
            <div className="absolute -inset-10 bg-gradient-to-r from-green-500/0 via-green-500/5 to-blue-500/0 rounded-full blur-3xl opacity-20 -z-10"></div>
            <HowItWorks />
          </motion.div>
          
          {/* Stats Dashboard */}
          <motion.div 
            className="mt-32 relative"
            variants={itemVariants}
          >
            <div className="absolute -inset-10 bg-gradient-to-r from-yellow-500/0 via-yellow-500/5 to-green-500/0 rounded-full blur-3xl opacity-20 -z-10"></div>
            <AppStats />
          </motion.div>
          
          {/* Testimonials */}
          <motion.div 
            className="mt-32 relative"
            variants={itemVariants}
          >
            <div className="absolute -inset-10 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-blue-500/0 rounded-full blur-3xl opacity-20 -z-10"></div>
            <TestimonialCarousel />
          </motion.div>
          
          {/* FAQ Section */}
          <motion.div 
            className="mt-32 relative"
            variants={itemVariants}
          >
            <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 rounded-full blur-3xl opacity-20 -z-10"></div>
            <AppFAQ />
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
