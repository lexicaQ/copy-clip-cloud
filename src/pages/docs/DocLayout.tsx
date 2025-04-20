
import React, { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import DocSidebar from "@/components/docs/DocSidebar";
import SharedBackground from "@/components/layout/SharedBackground";
import { SidebarInset } from "@/components/ui/sidebar";

interface DocLayoutProps {
  title: string;
  icon: React.ElementType;
  description?: string;
  backLink?: string;
  backText?: string;
  children: ReactNode;
  showSidebar?: boolean;
}

const DocLayout: React.FC<DocLayoutProps> = ({ 
  title, 
  icon: Icon, 
  description,
  backLink = "/docs", 
  backText = "Back to Documentation", 
  children,
  showSidebar = true
}) => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <SharedBackground />
      <Header />
      
      <div className="container mx-auto px-4 pt-24 pb-24 flex">
        {/* Left sidebar - only show on documentation pages */}
        {showSidebar && (
          <div className="w-64 flex-shrink-0">
            <DocSidebar />
          </div>
        )}

        {/* Main content */}
        <SidebarInset className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 pt-6 px-6 max-w-4xl mx-auto"
          >
            <Link 
              to={backLink} 
              className="inline-flex items-center text-sm text-white/70 hover:text-white mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {backText}
            </Link>
            
            <div className="glass-panel p-8 mb-8 backdrop-blur-md border border-white/10 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-white/10 mr-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">{title}</h1>
                  {description && (
                    <p className="text-gray-400 mt-1">{description}</p>
                  )}
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none">
                {children}
              </div>
            </div>
          </motion.div>
        </SidebarInset>
      </div>
      
      <Footer />
    </div>
  );
};

export default DocLayout;
