
import React from "react";
import { motion } from "framer-motion";
import AppFeatures from "@/components/landing/AppFeatures";
import AppLogo from "@/components/landing/AppLogo";
import DownloadButton from "@/components/landing/DownloadButton";
import AppTitle from "@/components/landing/AppTitle";
import BackgroundEffects from "@/components/landing/BackgroundEffects";
import AppTestimonials from "@/components/landing/AppTestimonials";
import AppStats from "@/components/landing/AppStats";
import AppFAQ from "@/components/landing/AppFAQ";
import HowItWorks from "@/components/landing/HowItWorks";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background effects */}
      <BackgroundEffects />

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

          {/* Download Button */}
          <DownloadButton />

          {/* Features Grid */}
          <AppFeatures />
          
          {/* Stats Dashboard */}
          <AppStats />
          
          {/* How It Works */}
          <HowItWorks />
          
          {/* Testimonials */}
          <AppTestimonials />
          
          {/* FAQ Section */}
          <AppFAQ />
        </motion.div>
      </motion.div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
