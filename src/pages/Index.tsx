
import React from "react";
import { motion } from "framer-motion";
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
import { Shield, Sparkles, Zap, ChevronDown } from "lucide-react";

const Index = () => {
  // Staggered animation variants for child elements
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced background effects */}
      <InteractiveBackground />

      {/* Header */}
      <Header />

      <motion.div 
        className="max-w-7xl mx-auto px-4 pt-32 pb-24"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="w-full max-w-4xl mx-auto text-center relative z-10"
        >
          {/* Logo and Badge */}
          <AppLogo />
          
          {/* Title and Description */}
          <AppTitle />

          {/* Enhanced feature highlights with improved animations */}
          <motion.div 
            className="mt-16 flex flex-wrap justify-center gap-5"
            variants={containerVariants}
          >
            {[
              { icon: Sparkles, title: "AI Powered", desc: "Smart organization with machine learning" },
              { icon: Shield, title: "End-to-End Encrypted", desc: "Military-grade security" },
              { icon: Zap, title: "Lightning Fast", desc: "Optimized native performance" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                className="glass-panel px-6 py-5 flex items-center gap-4 backdrop-blur-md"
                variants={itemVariants}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.3)",
                  backgroundColor: "rgba(255, 255, 255, 0.08)" 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="p-3 rounded-lg bg-white/10">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-white text-base">{feature.title}</p>
                  <p className="text-sm text-gray-400">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced download button section */}
          <motion.div 
            className="mt-16 relative"
            variants={itemVariants}
          >
            <DownloadButton />
            
            {/* Scroll indicator */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 mt-16 flex flex-col items-center text-white/50 scroll-indicator"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            variants={itemVariants}
            className="mt-32"
          >
            <AppFeatures />
          </motion.div>
          
          {/* How It Works */}
          <motion.div 
            className="mt-32"
            variants={itemVariants}
          >
            <HowItWorks />
          </motion.div>
          
          {/* Stats Dashboard */}
          <motion.div 
            className="mt-32"
            variants={itemVariants}
          >
            <AppStats />
          </motion.div>
          
          {/* Testimonials */}
          <motion.div 
            className="mt-32"
            variants={itemVariants}
          >
            <TestimonialCarousel />
          </motion.div>
          
          {/* FAQ Section */}
          <motion.div 
            className="mt-32"
            variants={itemVariants}
          >
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
