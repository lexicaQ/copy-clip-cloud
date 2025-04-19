
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Code, ArrowRight, Check, Braces, FileCode, Terminal, Copy } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import { Button } from "@/components/ui/button";

const CodeSnippets = () => {
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
            <Code className="w-10 h-10" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced Code Snippet Management
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Special handling for code with syntax highlighting and automatic language detection,
            designed to make developers more productive.
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
              title: "Syntax Highlighting",
              description: "Automatic syntax highlighting for over 100 programming languages"
            },
            {
              title: "Language Detection",
              description: "AI-powered language detection identifies the programming language automatically"
            },
            {
              title: "Format Preservation",
              description: "Maintains indentation, line breaks, and code structure perfectly"
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Check className="w-8 h-8 mb-4 text-red-400" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Code Editor Preview */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Code-Specific Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: Braces,
                title: "Smart Indentation",
                description: "Automatically preserves code structure and formatting, ensuring your snippets remain readable and functional."
              },
              {
                icon: FileCode,
                title: "Snippet Organization",
                description: "Group code by project, language, or functionality with intelligent categorization."
              },
              {
                icon: Terminal,
                title: "Execute & Test",
                description: "Run and test your code snippets in a secure sandbox environment (coming in future updates)."
              },
              {
                icon: Copy,
                title: "Format-Aware Pasting",
                description: "Paste code into IDEs and text editors with perfect formatting preserved."
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

        {/* Code Snippet Demo */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Preview</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#1E1E1E] rounded-xl overflow-hidden border border-white/10">
              <div className="flex items-center px-4 py-2 bg-[#252526] border-b border-white/10">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-gray-400">example.js</div>
              </div>
              
              <div className="p-6 font-mono text-sm text-gray-300 overflow-x-auto">
                <pre className="language-javascript">
                  <code>
                    <span className="text-[#569CD6]">function</span> <span className="text-[#DCDCAA]">calculateFibonacci</span><span className="text-white">(</span><span className="text-[#9CDCFE]">n</span><span className="text-white">) {"{"}</span>
                    <br/>&nbsp;&nbsp;<span className="text-[#C586C0]">if</span> <span className="text-white">(n {"<="} 1) {"{"}
                    </span>
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">return</span> <span className="text-white">n;</span>
                    <br/>&nbsp;&nbsp;<span className="text-white">{"}"}</span>
                    <br/>&nbsp;&nbsp;<span className="text-[#C586C0]">return</span> <span className="text-[#DCDCAA]">calculateFibonacci</span><span className="text-white">(n - 1) + </span><span className="text-[#DCDCAA]">calculateFibonacci</span><span className="text-white">(n - 2);</span>
                    <br/><span className="text-white">{"}"}</span>
                    <br/>
                    <br/><span className="text-[#6A9955]">// Example usage</span>
                    <br/><span className="text-[#569CD6]">const</span> <span className="text-[#4FC1FF]">result</span> <span className="text-white">= </span><span className="text-[#DCDCAA]">calculateFibonacci</span><span className="text-white">(10);</span>
                    <br/><span className="text-[#DCDCAA]">console</span><span className="text-white">.</span><span className="text-[#DCDCAA]">log</span><span className="text-white">(result); </span><span className="text-[#6A9955]">// Output: 55</span>
                  </code>
                </pre>
              </div>
            </div>
            
            <div className="mt-8 p-4 rounded-lg bg-white/5 border border-white/10 text-center">
              <p className="text-gray-400 text-sm">
                This feature is coming soon. When released, you'll be able to store, organize, and reuse code snippets with full syntax highlighting and intelligent management.
              </p>
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
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Be the first to know when our advanced code snippet management feature is released.
          </p>
          <Button className="inline-flex items-center gap-2" size="lg">
            Join Waitlist
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CodeSnippets;
