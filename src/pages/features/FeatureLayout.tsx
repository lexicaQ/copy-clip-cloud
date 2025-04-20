
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

interface FeatureLayoutProps {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  children: ReactNode;
  callToAction?: {
    text: string;
    link: string;
  };
  backLink?: string;
}

const FeatureLayout: React.FC<FeatureLayoutProps> = ({
  title,
  subtitle,
  icon: Icon,
  children,
  callToAction,
  backLink = "/features"
}) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
        <motion.div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <Header />
      
      <main className="pt-32 pb-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Link 
            to={backLink} 
            className="inline-flex items-center text-sm text-white/70 hover:text-white mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Features
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">{title}</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              {subtitle}
            </p>
          </motion.div>
          
          {children}
          
          {callToAction && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mt-20"
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 h-auto text-lg font-medium"
              >
                <Link to={callToAction.link}>{callToAction.text}</Link>
              </Button>
            </motion.div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FeatureLayout;
