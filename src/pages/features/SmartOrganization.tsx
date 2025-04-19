
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, ArrowRight, Check, Zap, Brain, FileBox, Tag } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import { Button } from "@/components/ui/button";

const SmartOrganization = () => {
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
            <Sparkles className="w-10 h-10" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered Smart Organization
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let our AI automatically organize your clipboard items into smart categories and suggestions,
            making content management effortless and intuitive.
          </p>
        </motion.div>

        {/* Key Benefits */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {[
            {
              title: "Automatic Categorization",
              description: "Content is instantly sorted into relevant categories based on type and context"
            },
            {
              title: "Smart Suggestions",
              description: "Receive intelligent recommendations based on your usage patterns"
            },
            {
              title: "Contextual Awareness",
              description: "AI understands the relationship between different clipboard items"
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Check className="w-8 h-8 mb-4 text-pink-400" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* How It Works */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">How Smart Organization Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: Brain,
                title: "Neural Processing",
                description: "Our AI analyzes the content, format, and context of each clipboard item using advanced neural networks."
              },
              {
                icon: FileBox,
                title: "Intelligent Grouping",
                description: "Similar content is automatically grouped together, creating intuitive collections for easy access."
              },
              {
                icon: Tag,
                title: "Auto-Tagging",
                description: "Keywords and metadata are automatically generated to enhance searchability and organization."
              },
              {
                icon: Zap,
                title: "Adaptive Learning",
                description: "The system improves over time by learning from your usage patterns and preferences."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl bg-white/5 border border-white/10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-lg bg-white/10 shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Smart Organization in Action</h2>
          <div className="space-y-8">
            {[
              {
                title: "Research & Writing",
                description: "Automatically organize research materials, quotes, and references into themed collections."
              },
              {
                title: "Development & Coding",
                description: "Keep code snippets organized by language, project, or functionality with smart categorization."
              },
              {
                title: "Design & Creative Work",
                description: "Group color schemes, design elements, and inspiration materials intelligently."
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-white/5 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Experience Smart Organization</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let AI handle the organization so you can focus on what matters most - your work and creativity.
          </p>
          <Button className="inline-flex items-center gap-2" size="lg">
            Try It Now
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SmartOrganization;
