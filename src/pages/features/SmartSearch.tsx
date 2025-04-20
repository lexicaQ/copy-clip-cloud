
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, ArrowRight, Check, Zap, Filter, History, Brain, Sparkles } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import { Button } from "@/components/ui/button";

const SmartSearch = () => {
  return (
    <div className="min-h-screen bg-background">
      <SharedBackground />
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            to="/features" 
            className="inline-flex items-center text-sm text-white/70 hover:text-white mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Features
          </Link>
          
          <div className="glass-panel p-8 rounded-xl mb-12 backdrop-blur-xl">
            <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8">
              <div className="flex-shrink-0">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10">
                  <Search className="w-16 h-16 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-3">AI-Powered Smart Search</h1>
                <p className="text-xl text-gray-300">Find anything instantly with context-aware search</p>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed">
                Find any copied item instantly with our AI-powered search that understands context and content, 
                making your clipboard history truly accessible. CopyClipCloud's Smart Search uses advanced natural 
                language processing to find what you need, even when you can't remember the exact text.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Hero Visual */}
        <motion.div
          className="mb-20 relative glass-panel overflow-hidden rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 z-0"></div>
          <div className="p-8 md:p-12 lg:p-16 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <motion.h2 
                  className="text-3xl font-bold mb-6 text-gradient"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Search Beyond Keywords
                </motion.h2>
                <motion.p 
                  className="text-gray-300 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Traditional clipboard managers only let you search for exact text. CopyClipCloud's Smart Search understands the meaning behind your content, allowing you to search by concepts, topics, and natural language queries.
                </motion.p>
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {[
                    "Find content by describing what you're looking for",
                    "Search across text, code, images, and files",
                    "Use natural language to filter results",
                    "Get intelligent suggestions as you type",
                    "Search by time periods, apps, or content type"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="p-1 rounded-full bg-white/10 mr-3 mt-1">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
              
              <div className="w-full md:w-1/2">
                {/* Interactive Search Demo */}
                <motion.div
                  className="glass-panel rounded-xl border border-white/20 shadow-2xl overflow-hidden"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="p-4 border-b border-white/10 bg-white/5 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-white/20 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="mx-auto text-sm text-white/60">CopyClipCloud Search</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="relative mb-6">
                      <input
                        type="text"
                        placeholder="Search your clipboard history..."
                        defaultValue="meeting notes from yesterday"
                        className="w-full px-4 py-3 pl-10 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      
                      <motion.div 
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        <Brain className="w-4 h-4 text-purple-400" />
                      </motion.div>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        {
                          title: "Meeting Notes - Product Team",
                          content: "Discussed new feature priorities for Q3. Action items: Sarah to prepare mockups...",
                          time: "Yesterday, 2:30 PM",
                          type: "Text",
                          app: "Notes"
                        },
                        {
                          title: "Project Timeline Discussion",
                          content: "Team agreed to push back the launch by two weeks to polish the UI/UX...",
                          time: "Yesterday, 11:15 AM",
                          type: "Text",
                          app: "Slack"
                        },
                        {
                          title: "Client Meeting Summary",
                          content: "Client approved new design direction. Need to update roadmap to reflect changes...",
                          time: "Yesterday, 4:45 PM",
                          type: "Text",
                          app: "Word"
                        }
                      ].map((result, index) => (
                        <motion.div
                          key={index}
                          className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                          whileHover={{ x: 5 }}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-medium text-white">{result.title}</h3>
                            <span className="text-xs text-white/50">{result.time}</span>
                          </div>
                          <p className="text-sm text-gray-400 mb-2 line-clamp-2">{result.content}</p>
                          <div className="flex items-center text-xs text-white/50">
                            <span className="px-2 py-0.5 bg-white/10 rounded mr-2">{result.type}</span>
                            <span>From: {result.app}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="text-center mt-3 text-xs text-white/50">3 results found</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Key Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "Contextual Understanding",
                description: "The AI understands concepts and meaning, not just keywords. Search by describing what you're looking for, even if you don't remember the exact text."
              },
              {
                icon: Filter,
                title: "Smart Filters",
                description: "Filter by content type, time period, source application, or any combination of criteria using natural language commands."
              },
              {
                icon: History,
                title: "Temporal Search",
                description: "Find content based on when you copied it with queries like 'show me code I copied last week' or 'find meeting notes from yesterday'."
              },
              {
                icon: Sparkles,
                title: "Semantic Matching",
                description: "Smart Search understands synonyms and related concepts, returning relevant results even when your search terms don't exactly match the content."
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized search algorithm delivers results instantly, even across thousands of clipboard items spanning months of history."
              },
              {
                icon: Search,
                title: "Multi-Format Support",
                description: "Search across text, code, URLs, and even the text content within images thanks to built-in OCR technology."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="glass-panel p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Search Demo Section */}
        <motion.div 
          className="mb-20 glass-panel p-8 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Try Smart Search</h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Type your search query..."
                className="w-full px-4 py-3 pl-10 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <motion.div
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Brain className="w-5 h-5 text-purple-400" />
              </motion.div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Example searches:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Find all code snippets from last week",
                    "Show me recent URLs about React",
                    "Find my meeting notes from yesterday",
                    "Show images I copied from Figma",
                    "Find email addresses I copied recently",
                    "Text I copied from the news article about AI",
                    "Find the schedule I copied last month",
                    "Show me Python code about data analysis"
                  ].map((example, index) => (
                    <motion.div 
                      key={index} 
                      className="p-3 bg-white/5 rounded-lg hover:bg-white/10 cursor-pointer transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center">
                        <Search className="w-3.5 h-3.5 text-white/50 mr-2" />
                        <span className="text-sm text-gray-300">{example}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center mb-3">
                  <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
                  <h3 className="text-sm font-medium">Smart Search Tips</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start">
                    <div className="w-1 h-1 rounded-full bg-white/50 mt-2 mr-2"></div>
                    <span>Use natural language like "find emails I copied last week" instead of keywords</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1 h-1 rounded-full bg-white/50 mt-2 mr-2"></div>
                    <span>Specify time periods with terms like "yesterday," "last month," or "two weeks ago"</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1 h-1 rounded-full bg-white/50 mt-2 mr-2"></div>
                    <span>Include the application name to find content copied from specific apps</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* User Feedback Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-10 text-center text-gradient">User Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "I used to waste so much time scrolling through my clipboard history. Smart Search has completely changed that - I just describe what I'm looking for and it finds it instantly.",
                author: "David R.",
                role: "Content Creator",
                rating: 5
              },
              {
                quote: "The contextual search is extraordinary. I can search for 'that React code from last Tuesday' and it actually finds it!",
                author: "Priya S.",
                role: "Frontend Developer",
                rating: 5
              },
              {
                quote: "As a researcher, I copy hundreds of snippets daily. Being able to search by concepts rather than exact text has been revolutionary for my workflow.",
                author: "Thomas L.",
                role: "Academic Researcher",
                rating: 4
              },
              {
                quote: "The natural language search feels magical. It's like having a smart assistant that always knows where I put things.",
                author: "Emma J.",
                role: "Project Manager",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="glass-panel p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`} 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-12 rounded-xl text-center bg-gradient-to-br from-purple-500/5 to-blue-500/5"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Experience Smarter Search
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Upgrade to smart search and never lose track of your clipboard history again. Find anything, anytime, with natural language queries.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button 
              asChild
              size="lg"
              className="bg-white text-black hover:bg-white/90"
            >
              <Link to="/download">
                Get Started <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
            >
              <Link to="/features">
                Explore More Features
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SmartSearch;
