
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, ArrowRight, Check, History, Calendar, Search, Archive } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import { Button } from "@/components/ui/button";

const HistoryTimeline = () => {
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
            <Clock className="w-10 h-10" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            History Timeline
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Access your complete clipboard history with our intuitive timeline interface,
            making it easy to find and reuse previously copied content.
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
              title: "Complete History",
              description: "Access your entire clipboard history organized chronologically"
            },
            {
              title: "Visual Timeline",
              description: "Intuitive visual interface for browsing past clipboard items"
            },
            {
              title: "Quick Recovery",
              description: "Instantly find and recover previously copied content"
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Check className="w-8 h-8 mb-4 text-orange-400" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Features */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Timeline Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: History,
                title: "Chronological View",
                description: "Browse your clipboard history in a clean, chronological timeline organized by day, week, or month."
              },
              {
                icon: Calendar,
                title: "Date Navigation",
                description: "Quickly jump to specific dates to find content you copied in the past."
              },
              {
                icon: Search,
                title: "Advanced Filtering",
                description: "Filter timeline items by content type, source application, or custom tags."
              },
              {
                icon: Archive,
                title: "Smart Archiving",
                description: "Automatically archive less frequently used items while keeping important content readily accessible."
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

        {/* Timeline Preview */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Timeline Preview</h2>
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="mb-6 border-b border-white/10 pb-4 flex justify-between items-center">
                <h3 className="text-lg font-medium">Clipboard History</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Today</Button>
                  <Button variant="outline" size="sm">This Week</Button>
                  <Button variant="outline" size="sm">All Time</Button>
                </div>
              </div>
              
              {/* Timeline Demo */}
              <div className="space-y-6">
                {/* Today Group */}
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Today</h4>
                  <div className="space-y-3">
                    {/* Timeline Items */}
                    <div className="group p-4 rounded-lg bg-white/10 hover:bg-white/15 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                          <span className="text-sm font-medium">Text</span>
                        </div>
                        <span className="text-xs text-gray-500">10:45 AM</span>
                      </div>
                      <p className="text-sm text-gray-300 line-clamp-2">Meeting with the design team scheduled for tomorrow at 2 PM to discuss the new feature implementation...</p>
                    </div>
                    
                    <div className="group p-4 rounded-lg bg-white/10 hover:bg-white/15 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                          <span className="text-sm font-medium">Code</span>
                        </div>
                        <span className="text-xs text-gray-500">9:23 AM</span>
                      </div>
                      <p className="text-sm text-gray-300 line-clamp-2 font-mono">const getUser = async (id) => { try { const response = await api.get(`/users/${id}`); return response.data; } catch (err) { console.error(err); } };</p>
                    </div>
                  </div>
                </div>
                
                {/* Yesterday Group */}
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Yesterday</h4>
                  <div className="space-y-3">
                    <div className="group p-4 rounded-lg bg-white/10 hover:bg-white/15 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                          <span className="text-sm font-medium">URL</span>
                        </div>
                        <span className="text-xs text-gray-500">5:17 PM</span>
                      </div>
                      <p className="text-sm text-gray-300 line-clamp-2">https://example.com/resources/design-patterns</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm">
                  The timeline interface is currently in development and will be available in the next release.
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
          <h2 className="text-3xl font-bold mb-6">Never Lose Track of Your Content</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our waitlist to be among the first to experience our intuitive history timeline.
          </p>
          <Button className="inline-flex items-center gap-2" size="lg">
            Stay Updated
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HistoryTimeline;
