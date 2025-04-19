
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Menu } from "lucide-react";
import DocSidebar from "@/components/docs/DocSidebar";
import { Button } from "@/components/ui/button";

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
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center"
          >
            <Link 
              to={backLink} 
              className="inline-flex items-center text-sm text-white/70 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {backText}
            </Link>
          </motion.div>
          
          <div className="lg:flex">
            <DocSidebar />
            
            {/* Mobile sidebar toggle */}
            <div className="block lg:hidden mb-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full flex items-center justify-center"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu className="w-4 h-4 mr-2" />
                {sidebarOpen ? "Hide" : "Show"} Table of Contents
              </Button>
              
              {sidebarOpen && (
                <div className="mt-4 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 p-4">
                  <DocSidebar />
                </div>
              )}
            </div>
            
            <motion.div 
              className="flex-1 max-w-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
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
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocLayout;
