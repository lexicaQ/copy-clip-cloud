
import React from "react";
import { motion } from "framer-motion";
import AppFeatures from "@/components/landing/AppFeatures";
import DownloadButton from "@/components/landing/DownloadButton";
import AppTitle from "@/components/landing/AppTitle";
import TestimonialCarousel from "@/components/landing/TestimonialCarousel";
import AppStats from "@/components/landing/AppStats";
import AppFAQ from "@/components/landing/AppFAQ";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Sparkles, Zap } from "lucide-react";
import BackgroundEffects from "@/components/landing/BackgroundEffects";
import EnhancedBackground from "@/components/landing/EnhancedBackground";
import ValueProposition from "@/components/landing/ValueProposition";
import AppWalkthrough from "@/components/landing/AppWalkthrough";
import UserExamples from "@/components/landing/UserExamples";
import FeaturePreview from "@/components/landing/FeaturePreview";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      
      {/* Enhanced background effects */}
      <BackgroundEffects />
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 pt-20 pb-24"
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

        {/* Value Proposition with animation */}
        <motion.div 
          className="mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <ValueProposition />
        </motion.div>

        {/* Feature Preview */}
        <motion.div 
          className="mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <FeaturePreview />
        </motion.div>

        {/* Key Features Grid */}
        <motion.div 
          className="mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <AppFeatures />
        </motion.div>

        {/* App Walkthrough */}
        <motion.div 
          className="mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <AppWalkthrough />
        </motion.div>

        {/* User Examples */}
        <motion.div 
          className="mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <UserExamples />
        </motion.div>

        {/* Statistics Dashboard */}
        <motion.div 
          className="mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <AppStats />
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <TestimonialCarousel />
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          className="mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <AppFAQ />
        </motion.div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default Index;
