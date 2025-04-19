
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BookOpen, ChevronRight, FileText, Home } from "lucide-react";

interface DocLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  icon?: React.ElementType;
}

const DocLayout = ({ children, title, description, icon: Icon = BookOpen }: DocLayoutProps) => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Breadcrumbs */}
          <nav className="mb-6 flex items-center text-sm text-gray-400">
            <Link to="/" className="flex items-center hover:text-white transition-colors">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/docs" className="hover:text-white transition-colors">Documentation</Link>
            {pathSegments.length > 1 && (
              <>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-white">{title}</span>
              </>
            )}
          </nav>
          
          {/* Title header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-white/10">
              <Icon className="w-6 h-6" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">
              {title}
            </h1>
          </div>
          
          {description && (
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
        
        {/* Content */}
        <div className="glass-panel p-8 md:p-10">
          {children}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DocLayout;
