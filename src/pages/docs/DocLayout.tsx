
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";

interface DocLayoutProps {
  title: string;
  icon: React.ElementType;
  backLink?: string;
  backText?: string;
  children: ReactNode;
}

const DocLayout = ({ 
  title, 
  icon: Icon, 
  backLink = "/docs", 
  backText = "Back to Documentation", 
  children 
}: DocLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            to={backLink} 
            className="inline-flex items-center text-sm text-white/70 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {backText}
          </Link>
          
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-600/20 border border-white/5 mr-3">
              <Icon className="w-5 h-5 text-indigo-300" />
            </div>
            <h1 className="text-3xl font-bold">{title}</h1>
          </div>
          
          {children}
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocLayout;
