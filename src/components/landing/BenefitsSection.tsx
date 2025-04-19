
import React from "react";
import { motion } from "framer-motion";
import { Clipboard, Timer, Share, Lock, Rocket, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Timer,
      title: "Save Time",
      description: "Stop retyping the same information. Access your clipboard history instantly with powerful search.",
      link: "/features/time-saving"
    },
    {
      icon: Share,
      title: "Seamless Sharing",
      description: "Share clipboard content with team members securely without switching applications.",
      link: "/features/sharing"
    },
    {
      icon: Lock,
      title: "Enhanced Security",
      description: "End-to-end encryption ensures your sensitive clipboard data stays protected.",
      link: "/features/security"
    },
    {
      icon: Clipboard,
      title: "Content Organization",
      description: "AI-powered categorization keeps your clipboard items neatly organized.",
      link: "/features/organization"
    },
    {
      icon: Rocket,
      title: "Boost Productivity",
      description: "Smart templates and keyboard shortcuts accelerate your workflow.",
      link: "/features/productivity"
    },
    {
      icon: Zap,
      title: "Distraction-Free Work",
      description: "Focus on your work with a clean, minimal interface designed for professionals.",
      link: "/features/focus"
    },
  ];

  return (
    <motion.div 
      className="mt-32 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-black to-black/40 rounded-3xl opacity-30 blur-xl"></div>
      </div>
      
      <div className="text-center mb-12">
        <motion.h2 
          className="text-3xl font-bold mb-4 text-gradient"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Benefits of CopyClipCloud
        </motion.h2>
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Experience tangible productivity gains with our advanced clipboard management
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="backdrop-blur-xl bg-black/40 border border-white/10 p-6 rounded-xl hover:bg-black/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="p-3 bg-black/30 rounded-lg w-fit mb-4">
              <benefit.icon className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
            <p className="text-gray-400 mb-4 text-sm">{benefit.description}</p>
            
            <Link to={benefit.link} className="flex items-center text-sm text-white/70 hover:text-white group">
              Learn more <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BenefitsSection;
