
import React from "react";
import { motion } from "framer-motion";
import AppFeatures from "@/components/landing/AppFeatures";
import AppLogo from "@/components/landing/AppLogo";
import DownloadButton from "@/components/landing/DownloadButton";
import AppTitle from "@/components/landing/AppTitle";
import BackgroundEffects from "@/components/landing/BackgroundEffects";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Background effects */}
      <BackgroundEffects />

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
      </motion.div>
    </div>
  );
};

export default Index;
