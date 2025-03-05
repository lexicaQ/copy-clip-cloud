
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

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background effects */}
      <BackgroundEffects />

      <div className="container mx-auto px-4 pt-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl mx-auto text-center space-y-8 relative z-10"
        >
          {/* Logo and Badge */}
          <AppLogo />
          
          {/* Title and Description */}
          <AppTitle />

          {/* Download Button */}
          <DownloadButton />

          {/* Features Grid */}
          <AppFeatures />
          
          {/* How It Works */}
          <HowItWorks />
          
          {/* Statistics */}
          <AppStats />
          
          {/* Testimonials */}
          <AppTestimonials />
          
          {/* FAQ Section */}
          <AppFAQ />
          
          {/* Footer */}
          <motion.div 
            className="mt-24 text-center text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>© 2023 CopyClipCloud. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
