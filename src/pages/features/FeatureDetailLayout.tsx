
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface FeatureDetailLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  icon: React.ElementType;
}

const FeatureDetailLayout = ({ title, subtitle, children, icon: Icon }: FeatureDetailLayoutProps) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-32">
        <Link to="/features" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Features
        </Link>
        
        <motion.div 
          className="mb-16 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <Icon className="w-12 h-12" />
          </div>
          
          <div>
            <h1 className="text-4xl font-bold mb-3">{title}</h1>
            <p className="text-gray-400 text-lg max-w-2xl">{subtitle}</p>
          </div>
        </motion.div>
        
        <div className="space-y-24">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeatureDetailLayout;
