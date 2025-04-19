
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Book, FileText, Code, Search, Command, Cloud, Boxes, Layout, Settings, AlertTriangle, Workflow, Laptop, SquareCode } from "lucide-react";

const DocCard = ({ title, description, icon: Icon, link }: { title: string; description: string; icon: React.ElementType; link: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={link}>
        <div className="h-full border border-white/10 bg-black/20 backdrop-blur-md rounded-lg p-6 hover:bg-black/30 transition-all">
          <div className="mb-4 p-2 w-12 h-12 flex items-center justify-center bg-white/5 rounded-lg">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
          
          <div className="mt-4 flex items-center text-sm text-white/70 group">
            <span>Read more</span>
            <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Documentation = () => {
  const documentationSections = [
    {
      title: "Getting Started",
      description: "Learn the basics of CopyClipCloud and how to set it up on your devices.",
      icon: Book,
      link: "/docs/getting-started"
    },
    {
      title: "Core Features",
      description: "Explore the main features that make CopyClipCloud powerful and easy to use.",
      icon: FileText,
      link: "/docs/core-features"
    },
    {
      title: "Keyboard Shortcuts",
      description: "Master the keyboard shortcuts to boost your productivity.",
      icon: Command,
      link: "/docs/keyboard-shortcuts"
    },
    {
      title: "Cloud Sync",
      description: "Learn how to sync your clipboard across all your devices.",
      icon: Cloud,
      link: "/docs/cloud-sync"
    },
    {
      title: "Smart Organization",
      description: "Discover how AI helps organize your clipboard content automatically.",
      icon: Boxes,
      link: "/docs/smart-organization"
    },
    {
      title: "Search & Filtering",
      description: "Find exactly what you need with powerful search and filtering options.",
      icon: Search,
      link: "/docs/search-filtering"
    },
    {
      title: "Templates",
      description: "Create and use templates for frequently used content.",
      icon: Layout,
      link: "/docs/templates"
    },
    {
      title: "Advanced Usage",
      description: "Take your clipboard management to the next level with advanced techniques.",
      icon: Settings,
      link: "/docs/advanced-usage"
    },
    {
      title: "API Documentation",
      description: "Integrate CopyClipCloud with your own applications using our API.",
      icon: Code,
      link: "/docs/api-documentation"
    },
    {
      title: "SDK Integration",
      description: "Develop applications that work with CopyClipCloud using our SDK.",
      icon: SquareCode,
      link: "/docs/sdk"
    },
    {
      title: "Troubleshooting",
      description: "Solve common issues and find answers to frequently asked questions.",
      icon: AlertTriangle,
      link: "/docs/troubleshooting"
    },
    {
      title: "Custom Integrations",
      description: "Connect CopyClipCloud with other tools and services for seamless workflows.",
      icon: Workflow,
      link: "/docs/custom-integrations"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Documentation</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about using CopyClipCloud effectively.
          </p>
        </motion.div>
        
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentationSections.map((section, index) => (
              <DocCard
                key={index}
                title={section.title}
                description={section.description}
                icon={section.icon}
                link={section.link}
              />
            ))}
          </div>
        </div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            If you can't find what you're looking for in our documentation, we're here to help.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-6 py-3 rounded-lg bg-white text-black hover:bg-white/90 transition-all">
              Contact Support
            </Link>
            <Link to="/faq" className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition-all">
              Visit FAQ
            </Link>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Documentation;
