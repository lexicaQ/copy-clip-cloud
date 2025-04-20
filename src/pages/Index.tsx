
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
import { Shield, Sparkles, Zap, Check, Code, Users, ArrowRight } from "lucide-react";
import SharedBackground from "@/components/layout/SharedBackground";
import ValueProposition from "@/components/landing/ValueProposition";
import AppWalkthrough from "@/components/landing/AppWalkthrough";
import UserExamples from "@/components/landing/UserExamples";
import FeaturePreview from "@/components/landing/FeaturePreview";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      
      {/* Use shared background component */}
      <SharedBackground />
      
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

          {/* Download Button mit verbessertem Style */}
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
              { icon: Sparkles, title: "AI Powered", desc: "Intelligent Organization", link: "/features/smart-organization" },
              { icon: Shield, title: "Encrypted", desc: "End-to-End Security", link: "/features/end-to-end-encryption" },
              { icon: Zap, title: "Lightning Fast", desc: "Optimized Performance", link: "/features/lightning-fast" }
            ].map((feature, i) => (
              <Link to={feature.link} key={i}>
                <motion.div 
                  className="glass-panel px-6 py-4 flex items-center gap-3 backdrop-blur-md hover:bg-white/5 transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-2 rounded-lg bg-white/10">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-white">{feature.title}</p>
                    <p className="text-xs text-gray-400">{feature.desc}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Feature Highlights */}
        <motion.div 
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {[
            { icon: Sparkles, title: "AI Powered", desc: "Intelligent Organization", highlight: "Neural processing for smart content management", link: "/features/smart-organization" },
            { icon: Shield, title: "Encrypted", desc: "End-to-End Security", highlight: "Military-grade encryption protocols", link: "/features/end-to-end-encryption" },
            { icon: Zap, title: "Lightning Fast", desc: "Optimized Performance", highlight: "Instant sync across all devices", link: "/features/lightning-fast" }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              className="glass-panel p-8 backdrop-blur-md flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (i * 0.1) }}
              whileHover={{ y: -5 }}
            >
              <div className="p-4 rounded-2xl bg-white/10 mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 mb-4">{feature.desc}</p>
              <p className="text-sm text-gray-500">{feature.highlight}</p>
              <Button 
                className="mt-4 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 backdrop-blur-xl border border-white/10"
                asChild
              >
                <Link to={feature.link}>
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Value Proposition with increased spacing */}
        <motion.div className="mt-40">
          <ValueProposition />
        </motion.div>

        {/* New Section: Key Benefits */}
        <motion.div 
          className="mt-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-16 text-gradient">Why Choose Our Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: Code,
                title: "Developer Friendly",
                description: "Built with modern technologies and extensive API support for seamless integration.",
                link: "/docs/api-documentation"
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Real-time synchronization and sharing features for effective team coordination.",
                link: "/features/universal-clipboard"
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                className="glass-panel p-8"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-lg bg-white/10">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                    <Link to={benefit.link}>
                      <Button 
                        variant="ghost" 
                        className="mt-4 px-0 hover:bg-transparent hover:text-white text-white/70"
                      >
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
          className="mt-40" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <AppFeatures />
        </motion.div>

        {/* App Walkthrough with increased spacing */}
        <motion.div 
          className="mt-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <AppWalkthrough />
        </motion.div>

        {/* User Examples */}
        <motion.div 
          className="mt-40" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <UserExamples />
        </motion.div>

        {/* Statistics Dashboard with improved contrast */}
        <motion.div 
          className="mt-40" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <AppStats />
        </motion.div>

        {/* Testimonials with better readability */}
        <motion.div 
          className="mt-40" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <TestimonialCarousel />
        </motion.div>

        {/* FAQ Section with improved typography */}
        <motion.div 
          className="mt-40"
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
