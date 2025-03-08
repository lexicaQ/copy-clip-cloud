
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
  // Enhanced staggered animation variants with smoother transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Slightly increased for more distinct staggering
        delayChildren: 0.1,    // Small delay before children animations start
        ease: "easeOut"       // Smoother easing
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 25 }, // Slightly increased y offset for more visible motion
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7, // Slightly increased duration
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smoother motion
        type: "spring",  // Changed to spring for more natural movement
        stiffness: 100,  // Lower stiffness for smoother spring
        damping: 15     // Adjusted damping for subtle bounce
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
        className="max-w-7xl mx-auto px-4 pt-36 pb-24" // Slightly increased top padding
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
            className="mt-20 flex flex-wrap justify-center gap-6" // Increased gap between cards and margin-top
            variants={containerVariants}
          >
            {[
              { icon: Sparkles, title: "AI Powered", desc: "Smart organization with machine learning" },
              { icon: Shield, title: "End-to-End Encrypted", desc: "Military-grade security" },
              { icon: Zap, title: "Lightning Fast", desc: "Optimized native performance" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                className="glass-panel px-7 py-6 flex items-center gap-5 backdrop-blur-md border border-white/10" // Increased padding and gap
                variants={itemVariants}
                whileHover={{ 
                  y: -6, // Slightly increased hover lift
                  boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.4)", // Deeper shadow for better depth
                  backgroundColor: "rgba(255, 255, 255, 0.1)",  // Slightly lighter background on hover
                  borderColor: "rgba(255, 255, 255, 0.2)"       // Lighter border on hover
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 15,
                  backgroundColor: { duration: 0.2 },
                  borderColor: { duration: 0.2 }
                }}
              >
                <div className="p-3 rounded-lg bg-white/15 shadow-inner"> {/* Enhanced icon container */}
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-white text-base">{feature.title}</p>
                  <p className="text-sm text-gray-300">{feature.desc}</p> {/* Slightly lighter text color */}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced download button section */}
          <motion.div 
            className="mt-20 relative" // Increased margin-top
            variants={itemVariants}
          >
            <DownloadButton />
            
            {/* Enhanced scroll indicator with smoother animation */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 mt-20 flex flex-col items-center text-white/60 scroll-indicator" // Increased margin-top and opacity
              animate={{ 
                y: [0, 12, 0], // Increased range of movement
                opacity: [0.6, 0.8, 0.6] // Added opacity animation for breathing effect
              }}
              transition={{ 
                duration: 2.5, // Slightly slower for more elegant motion
                repeat: Infinity, 
                ease: "easeInOut"
              }}
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>

          {/* Features Grid with enhanced spacing */}
          <motion.div 
            variants={itemVariants}
            className="mt-40" // Increased section spacing
          >
            <AppFeatures />
          </motion.div>
          
          {/* How It Works with enhanced spacing */}
          <motion.div 
            className="mt-40" // Increased section spacing
            variants={itemVariants}
          >
            <HowItWorks />
          </motion.div>
          
          {/* Stats Dashboard with enhanced spacing */}
          <motion.div 
            className="mt-40" // Increased section spacing
            variants={itemVariants}
          >
            <AppStats />
          </motion.div>
          
          {/* Testimonials with enhanced spacing */}
          <motion.div 
            className="mt-40" // Increased section spacing
            variants={itemVariants}
          >
            <TestimonialCarousel />
          </motion.div>
          
          {/* FAQ Section with enhanced spacing */}
          <motion.div 
            className="mt-40" // Increased section spacing
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
