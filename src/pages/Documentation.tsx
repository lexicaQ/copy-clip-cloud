import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, Book, Code, Shield, Zap, Search } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import DocLayout from "./docs/DocLayout";
import { Button } from "@/components/ui/button";

const DocumentationCard = ({ 
  title, 
  description, 
  icon: Icon, 
  link 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  link: string;
}) => {
  return (
    <Link to={link} className="block group">
      <motion.div 
        className="glass-panel p-6 rounded-xl border border-white/10 backdrop-blur-md hover:bg-white/5 transition-colors"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-white/10 flex-shrink-0">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            <div className="flex items-center text-sm text-white/70 group-hover:text-white transition-colors">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const Documentation = () => {
  return (
    <DocLayout 
      title="Documentation" 
      icon={BookOpen}
      showSidebar={false}
      description="Explore our comprehensive guides and documentation"
    >
      <div className="space-y-8">
        <p className="text-lg text-gray-300">
          Welcome to the CopyClipCloud documentation. Here you'll find comprehensive guides and documentation to help you start working with our platform as quickly as possible.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DocumentationCard
            title="Getting Started"
            description="Learn the basics of CopyClipCloud and get up and running quickly"
            icon={Book}
            link="/docs/getting-started"
          />
          
          <DocumentationCard
            title="Core Features"
            description="Explore the main features and capabilities of the platform"
            icon={Zap}
            link="/docs/core-features"
          />
          
          <DocumentationCard
            title="Smart Organization"
            description="Learn how to use AI-powered organization features"
            icon={Search}
            link="/docs/smart-organization"
          />
          
          <DocumentationCard
            title="Developer API"
            description="Integrate CopyClipCloud with your applications"
            icon={Code}
            link="/docs/api-documentation"
          />
          
          <DocumentationCard
            title="Security Guide"
            description="Understand our security features and best practices"
            icon={Shield}
            link="/docs/security"
          />
          
          <DocumentationCard
            title="Advanced Usage"
            description="Take your clipboard management to the next level"
            icon={Zap}
            link="/docs/advanced-usage"
          />
        </div>
        
        <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
          <p className="text-gray-400 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <Button variant="outline" className="bg-white/5 hover:bg-white/10">
            Contact Support
          </Button>
        </div>
      </div>
    </DocLayout>
  );
};

export default Documentation;
