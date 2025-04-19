
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';

const GettingStartedHelp = () => {
  const guides = [
    { title: 'Installation Guide', description: 'Step-by-step instructions to install CopyClipCloud on your device' },
    { title: 'First-time Setup', description: 'Configure your initial settings and preferences' },
    { title: 'Understanding the Interface', description: 'Navigate and use the main features of the application' },
    { title: 'Basic Clipboard Operations', description: 'Learn how to copy, paste, and manage your clipboard items' }
  ];

  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-white/10 mb-6">
            <FileText className="w-5 h-5 mr-2" />
            <span>Getting Started</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your <span className="text-gradient">CopyClipCloud</span> Journey Begins
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Learn the basics, set up your workspace, and start enhancing your productivity.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {guides.map((guide, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 hover:bg-white/5 transition-all duration-300"
            >
              <h3 className="text-xl font-medium mb-3">{guide.title}</h3>
              <p className="text-gray-400 mb-4">{guide.description}</p>
              <Link 
                to="#" 
                className="text-white hover:underline inline-flex items-center"
              >
                Read Guide <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default GettingStartedHelp;
