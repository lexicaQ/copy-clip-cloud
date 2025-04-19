
import React from "react";
import { motion } from "framer-motion";
import AppFeatures from "@/components/landing/AppFeatures";
import DownloadButton from "@/components/landing/DownloadButton";
import AppTitle from "@/components/landing/AppTitle";
import TestimonialCarousel from "@/components/landing/TestimonialCarousel";
import AppStats from "@/components/landing/AppStats";
import AppFAQ from "@/components/landing/AppFAQ";
import HowItWorks from "@/components/landing/HowItWorks";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Sparkles, Zap } from "lucide-react";
import HeroBackground from "@/components/landing/HeroBackground";
import EnhancedBackground from "@/components/landing/EnhancedBackground";
import ValueProposition from "@/components/landing/ValueProposition";
import AppWalkthrough from "@/components/landing/AppWalkthrough";
import UserExamples from "@/components/landing/UserExamples";
import FeaturePreview from "@/components/landing/FeaturePreview";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Header />

      <motion.div 
        className="max-w-7xl mx-auto px-4 pt-20 pb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Ersetzen des alten Hintergrunds durch den verbesserten Hintergrund */}
        <EnhancedBackground />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl mx-auto text-center relative z-10"
        >
          {/* Title and Description */}
          <AppTitle />

          {/* Download Button */}
          <div className="mt-12">
            <DownloadButton />
          </div>

          {/* Top Feature Highlights */}
          <motion.div 
            className="mt-16 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { icon: Sparkles, title: "KI gestützt", desc: "Intelligente Organisation" },
              { icon: Shield, title: "Verschlüsselt", desc: "Ende-zu-Ende Sicherheit" },
              { icon: Zap, title: "Blitzschnell", desc: "Optimierte Leistung" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                className="glass-panel px-6 py-4 flex items-center gap-3 backdrop-blur-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (i * 0.1) }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.3)" }}
              >
                <div className="p-2 rounded-lg bg-white/10">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-white">{feature.title}</p>
                  <p className="text-xs text-gray-400">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Neue Value Proposition-Sektion */}
        <div className="mt-24">
          <ValueProposition />
        </div>

        {/* Features Grid */}
        <div className="mt-12">
          <AppFeatures />
        </div>
        
        {/* Neue Feature Preview-Sektion */}
        <div className="mt-12">
          <FeaturePreview />
        </div>
        
        {/* How It Works - App-Walkthrough ersetzt durch neue Komponente */}
        <div className="mt-12">
          <AppWalkthrough />
        </div>
        
        {/* Neue User Examples-Sektion */}
        <div className="mt-12">
          <UserExamples />
        </div>
        
        {/* Stats Dashboard */}
        <div className="mt-24">
          <AppStats />
        </div>
        
        {/* Testimonials */}
        <div className="mt-24">
          <TestimonialCarousel />
        </div>
        
        {/* FAQ Section */}
        <div className="mt-24">
          <AppFAQ />
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default Index;
