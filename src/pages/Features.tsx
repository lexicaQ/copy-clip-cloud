
import React from "react";
import { motion } from "framer-motion";
import { Cloud, Shield, Zap, Search, Sparkles, Code, Settings, Clock, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InteractiveBackground from "@/components/landing/InteractiveBackground";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay?: number;
}

const FeatureCard = ({ title, description, icon: Icon, delay = 0 }: FeatureCardProps) => (
  <motion.div
    className="glass-panel p-8 relative overflow-hidden group hover:border-white/20"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const Features = () => {
  const features = [
    {
      title: "Intelligent Sync",
      description: "Seamlessly synchronize your clipboard across all Apple devices with real-time updates and conflict resolution.",
      icon: Cloud
    },
    {
      title: "Military-Grade Encryption",
      description: "Your data is protected with end-to-end encryption, ensuring complete privacy and security at all times.",
      icon: Shield
    },
    {
      title: "Lightning Fast",
      description: "Experience instant clipboard operations with our optimized performance engine, even with large files.",
      icon: Zap
    },
    {
      title: "Smart Search",
      description: "Find any copied item instantly with our AI-powered search that understands context and content.",
      icon: Search
    },
    {
      title: "AI Organization",
      description: "Let our AI automatically organize your clipboard items into smart categories and suggestions.",
      icon: Sparkles
    },
    {
      title: "Code Snippets",
      description: "Special handling for code with syntax highlighting and automatic language detection.",
      icon: Code
    },
    {
      title: "Custom Rules",
      description: "Create powerful automation rules to handle specific types of clipboard content.",
      icon: Settings
    },
    {
      title: "History Timeline",
      description: "Access your complete clipboard history with our intuitive timeline interface.",
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <InteractiveBackground />
      <Header />
      
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Advanced Features</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of clipboard management with our powerful features designed for professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Workflow?</h2>
          <button className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-opacity-90 transition-all">
            Download Now
          </button>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Features;
