
import React, { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import DocSidebar from "@/components/docs/DocSidebar";

interface DocLayoutProps {
  title: string;
  icon: React.ElementType;
  description?: string;
  backLink?: string;
  backText?: string;
  children: ReactNode;
}

const DocLayout: React.FC<DocLayoutProps> = ({ 
  title, 
  icon: Icon, 
  description,
  backLink = "/docs", 
  backText = "Back to Documentation", 
  children 
}) => {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex flex-col lg:flex-row pt-24 pb-24">
        <DocSidebar />
        
        <main className="flex-1 px-4 lg:px-8 max-w-4xl mx-auto lg:ml-64 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 pt-10 lg:pt-0"
          >
            <Link 
              to={backLink} 
              className="inline-flex items-center text-sm text-white/70 hover:text-white mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {backText}
            </Link>
            
            <div className="glass-panel p-8 mb-8">
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
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default DocLayout;
