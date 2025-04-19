
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Settings, ArrowRight, Check, Workflow, Filter, Wand2, FileCog } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import { Button } from "@/components/ui/button";

const CustomRules = () => {
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
            <Settings className="w-10 h-10" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Custom Automation Rules
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Create powerful automation rules to handle specific types of clipboard content,
            streamlining your workflow with personalized automation.
          </p>
          
          <div className="mt-8 inline-block px-4 py-2 rounded-full bg-white/10 text-sm text-white/70 border border-white/10">
            Coming Soon
          </div>
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
              title: "Personalized Workflows",
              description: "Create custom rules that match your specific needs and workflows"
            },
            {
              title: "Content-Based Actions",
              description: "Trigger different actions based on the content type or pattern"
            },
            {
              title: "No-Code Rule Builder",
              description: "Intuitive interface for creating complex rules without programming"
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Check className="w-8 h-8 mb-4 text-indigo-400" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Rule Types */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Automation Possibilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: Workflow,
                title: "Action Sequences",
                description: "Create multi-step automation workflows that process clipboard content through several stages."
              },
              {
                icon: Filter,
                title: "Content Filters",
                description: "Set up rules to automatically filter, clean, or format specific types of content."
              },
              {
                icon: Wand2,
                title: "Smart Transformations",
                description: "Configure rules to transform content from one format to another (e.g., Markdown to HTML)."
              },
              {
                icon: FileCog,
                title: "Conditional Processing",
                description: "Define conditions that trigger different actions based on content patterns or metadata."
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

        {/* Rule Builder Preview */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Rule Builder Preview</h2>
          <div className="max-w-3xl mx-auto">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="mb-6 border-b border-white/10 pb-4">
                <h3 className="text-lg font-medium mb-2">Create New Automation Rule</h3>
                <p className="text-sm text-gray-400">Configure how CopyClipCloud should handle specific content</p>
              </div>
              
              <div className="space-y-5">
                <div>
                  <h4 className="text-sm font-medium mb-2">1. When clipboard contains:</h4>
                  <div className="flex gap-3">
                    <div className="bg-white/10 rounded-lg px-3 py-2 text-sm">URL</div>
                    <div className="bg-white/10 rounded-lg px-3 py-2 text-sm">Email</div>
                    <div className="bg-white/10 rounded-lg px-3 py-2 text-sm">Phone Number</div>
                    <div className="bg-white/10 rounded-lg px-3 py-2 text-sm">Custom Pattern...</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">2. Then perform these actions:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 text-sm">
                      <span className="text-indigo-400">1</span>
                      <span>Categorize as "Web Content"</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 text-sm">
                      <span className="text-indigo-400">2</span>
                      <span>Format URL (remove tracking parameters)</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 text-sm">
                      <span className="text-indigo-400">3</span>
                      <span>Add to "Research" collection</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">3. Rule options:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 rounded-lg px-3 py-2 text-sm">
                      Auto-apply to new content
                    </div>
                    <div className="bg-white/10 rounded-lg px-3 py-2 text-sm">
                      Notify when rule is triggered
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm mb-4">
                  The rule builder interface is currently in development and will be available soon.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Automate Your Workflow</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our waitlist to be notified when custom automation rules are available.
          </p>
          <Button className="inline-flex items-center gap-2" size="lg">
            Get Early Access
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CustomRules;
