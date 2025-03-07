
import React from "react";
import { motion } from "framer-motion";
import AppFeatures from "@/components/landing/AppFeatures";
import AppLogo from "@/components/landing/AppLogo";
import DownloadButton from "@/components/landing/DownloadButton";
import AppTitle from "@/components/landing/AppTitle";
import ModernBackground from "@/components/landing/ModernBackground";
import TestimonialCarousel from "@/components/landing/TestimonialCarousel";
import AppStats from "@/components/landing/AppStats";
import AppFAQ from "@/components/landing/AppFAQ";
import HowItWorks from "@/components/landing/HowItWorks";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Sparkles, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background effects */}
      <ModernBackground />

      {/* Header */}
      <Header />

      <motion.div 
        className="max-w-7xl mx-auto px-4 pt-32 pb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl mx-auto text-center relative z-10"
        >
          {/* Logo and Badge */}
          <AppLogo />
          
          {/* Title and Description */}
          <AppTitle />

          {/* Top Feature Highlights */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { icon: Sparkles, title: "AI Powered", desc: "Smart organization" },
              { icon: Shield, title: "Encrypted", desc: "End-to-end security" },
              { icon: Zap, title: "Lightning Fast", desc: "Optimized performance" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                className="glass-panel px-6 py-4 flex items-center gap-3 backdrop-blur-md hover:bg-white/5 transition-all duration-300 hover:border-white/20 group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (i * 0.1) }}
                whileHover={{ y: -5 }}
              >
                <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/15 transition-all duration-300">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-white">{feature.title}</p>
                  <p className="text-xs text-gray-400">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Download Button - added more spacing */}
          <div className="mt-12">
            <DownloadButton />
          </div>

          {/* Features Grid */}
          <AppFeatures />
          
          {/* How It Works */}
          <div className="mt-24">
            <HowItWorks />
          </div>
          
          {/* Stats Dashboard */}
          <div className="mt-24">
            <AppStats />
          </div>
          
          {/* Testimonials */}
          <div>
            <TestimonialCarousel />
          </div>
          
          {/* FAQ Section */}
          <div>
            <AppFAQ />
          </div>
        </motion.div>
      </motion.div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
