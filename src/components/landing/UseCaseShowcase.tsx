
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Presentation, Layout, FileText, Users, Laptop } from "lucide-react";

interface UseCaseCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const UseCaseCard = ({ icon: Icon, title, description, index }: UseCaseCardProps) => {
  return (
    <motion.div
      className="glass-panel p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index }}
      whileHover={{ 
        y: -5, 
        backgroundColor: "rgba(255, 255, 255, 0.07)",
        transition: { duration: 0.2 }
      }}
    >
      <div className="bg-white/5 p-3 rounded-xl w-fit mb-4">
        <Icon className="w-6 h-6" />
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 mb-4 text-sm">{description}</p>
      
      <motion.button 
        className="flex items-center text-sm text-white/70 hover:text-white gap-1 group"
        whileHover={{ x: 3 }}
      >
        Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  );
};

const UseCaseShowcase = () => {
  const useCases = [
    {
      icon: Code,
      title: "Developers",
      description: "Store and reuse code snippets, API keys, and terminal commands across all your development environments."
    },
    {
      icon: Presentation,
      title: "Marketers",
      description: "Save and organize marketing copy, hashtags, and social media templates for quick access."
    },
    {
      icon: Layout,
      title: "Designers",
      description: "Keep color codes, design patterns, and asset links at your fingertips across all your design tools."
    },
    {
      icon: FileText,
      title: "Writers",
      description: "Organize research, quotes, and text snippets in one place, accessible wherever you write."
    },
    {
      icon: Users,
      title: "Teams",
      description: "Share important information, templates, and resources with your team members securely."
    },
    {
      icon: Laptop,
      title: "Remote Workers",
      description: "Maintain a seamless workflow between home and office with synchronized clipboard content."
    }
  ];

  return (
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
          Who Uses CopyClipCloud
        </motion.h2>
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Discover how professionals across different industries boost their productivity
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {useCases.map((useCase, index) => (
          <UseCaseCard 
            key={index}
            icon={useCase.icon}
            title={useCase.title}
            description={useCase.description}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default UseCaseShowcase;
