
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
import { Shield, Sparkles, Zap, Cloud, Users, ArrowRight, Award, CheckCircle } from "lucide-react";
import InteractiveBackground from "@/components/landing/InteractiveBackground";
import UseCaseShowcase from "@/components/landing/UseCaseShowcase";
import ValueProposition from "@/components/landing/ValueProposition";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <InteractiveBackground />

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
              { icon: Sparkles, title: "AI Powered", desc: "Smart organization" },
              { icon: Shield, title: "Encrypted", desc: "End-to-end security" },
              { icon: Zap, title: "Lightning Fast", desc: "Optimized performance" }
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

        {/* NEW: Value Proposition Section */}
        <ValueProposition />

        {/* Features Grid */}
        <AppFeatures />
        
        {/* NEW: Use Case Showcase */}
        <UseCaseShowcase />

        {/* How It Works */}
        <div className="mt-24">
          <HowItWorks />
        </div>
        
        {/* Stats Dashboard */}
        <div className="mt-24">
          <AppStats />
        </div>
        
        {/* NEW: Why Choose Us Section */}
        <motion.div
          className="mt-24 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 -z-10">
            <div className="w-full h-full bg-white/5 rounded-3xl blur-xl opacity-30"></div>
          </div>
          
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gradient"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Choose CopyClipCloud
            </motion.h2>
            <motion.p 
              className="text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Experience the perfect blend of power and simplicity with features designed for professionals
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            {[
              {
                icon: Shield,
                title: "Privacy First",
                description: "Your data is encrypted and never shared with third parties. We take your privacy seriously."
              },
              {
                icon: Cloud,
                title: "Seamless Sync",
                description: "Work across all your devices with real-time synchronization of your clipboard data."
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Share clipboard items with your team and collaborate on projects effortlessly."
              },
              {
                icon: Zap,
                title: "Instant Access",
                description: "Retrieve any clipboard item instantly with powerful search and filtering."
              },
              {
                icon: CheckCircle,
                title: "Reliable & Stable",
                description: "Built with reliability in mind, ensuring your clipboard is always available when you need it."
              },
              {
                icon: Award,
                title: "Award-Winning Design",
                description: "Intuitive interface that has won multiple design awards for its usability."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="glass-panel p-6 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.07)" }}
              >
                <div className="mb-4 p-3 rounded-xl bg-white/5 w-fit">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/features">
              <Button variant="outline" className="rounded-full px-8 py-6 h-auto">
                Explore All Features <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
        
        {/* NEW: Quick Feature Comparison */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gradient"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              How We Compare
            </motion.h2>
            <motion.p 
              className="text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              See why professionals choose CopyClipCloud over traditional clipboard managers
            </motion.p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ComparisonTable />
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/pricing">
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 h-auto">
                View Pricing <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        
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
