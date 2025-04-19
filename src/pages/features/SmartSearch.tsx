
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, ArrowRight, Check } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import { Button } from "@/components/ui/button";

const SmartSearch = () => {
  return (
    <div className="min-h-screen bg-background">
      <SharedBackground />
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        {/* Back button */}
        <div className="mb-12">
          <Button variant="ghost" asChild>
            <Link to="/features" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Features
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-8">
            <Search className="w-10 h-10" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered Smart Search
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Find any copied item instantly with our AI-powered search that understands 
            context and content, making your clipboard history truly accessible.
          </p>
        </motion.div>

        {/* Key Features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {[
            {
              title: "Contextual Search",
              description: "Search by meaning, not just exact matches"
            },
            {
              title: "Natural Language",
              description: "Use everyday language to find what you need"
            },
            {
              title: "Multi-format Support",
              description: "Search across text, code, and file contents"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Check className="w-8 h-8 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Search Demo */}
        <motion.div 
          className="mb-20 p-8 rounded-xl bg-white/5 border border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Try Smart Search</h2>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Type your search query..."
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-sm text-gray-400 mb-2">Example searches:</div>
                <div className="space-y-2">
                  {[
                    "Find all code snippets from last week",
                    "Show me recent URLs about React",
                    "Find my meeting notes from yesterday"
                  ].map((example, index) => (
                    <div key={index} className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Experience Smarter Search</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Upgrade to smart search and never lose track of your clipboard history again.
          </p>
          <Button className="inline-flex items-center gap-2" size="lg">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SmartSearch;
