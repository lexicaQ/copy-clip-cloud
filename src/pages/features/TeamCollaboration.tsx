
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, ArrowRight, Check, Share2, Lock, UserPlus, BarChart } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import { Button } from "@/components/ui/button";

const TeamCollaboration = () => {
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
            <Users className="w-10 h-10" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Team Collaboration
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Share clipboard items with team members securely with fine-grained access controls,
            enabling seamless collaboration while maintaining security.
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
              title: "Secure Sharing",
              description: "Share clipboard content with teammates while maintaining end-to-end encryption"
            },
            {
              title: "Access Controls",
              description: "Set granular permissions for shared content with role-based access"
            },
            {
              title: "Real-time Updates",
              description: "Instantly sync shared clipboard items across your entire team"
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Check className="w-8 h-8 mb-4 text-teal-400" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Collaboration Features */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Collaboration Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: Share2,
                title: "Team Clipboard",
                description: "Create shared clipboard collections that your entire team can access, use, and contribute to."
              },
              {
                icon: Lock,
                title: "Security Controls",
                description: "Implement fine-grained access controls and sharing permissions for sensitive information."
              },
              {
                icon: UserPlus,
                title: "Team Management",
                description: "Easily add, remove, and manage team members with role-based permissions."
              },
              {
                icon: BarChart,
                title: "Activity Tracking",
                description: "Monitor usage analytics and access logs for shared clipboard content."
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

        {/* Team Sharing Preview */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Team Sharing Preview</h2>
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="mb-6 border-b border-white/10 pb-4 flex justify-between items-center">
                <h3 className="text-lg font-medium">Shared Collections</h3>
                <Button variant="outline" size="sm">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add Team Member
                </Button>
              </div>
              
              {/* Shared Collections Demo */}
              <div className="space-y-6">
                {/* Collection Items */}
                <div className="group p-5 rounded-lg bg-white/10 hover:bg-white/15 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center mr-3">
                        <Users className="w-5 h-5 text-teal-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Design Assets</h4>
                        <p className="text-xs text-gray-400">12 items • Updated 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500/30 border border-white/20 flex items-center justify-center text-xs">JD</div>
                      <div className="w-6 h-6 rounded-full bg-purple-500/30 border border-white/20 flex items-center justify-center text-xs">MK</div>
                      <div className="w-6 h-6 rounded-full bg-orange-500/30 border border-white/20 flex items-center justify-center text-xs">+3</div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 rounded-full bg-white/10 text-xs">View Only</span>
                      <span className="px-2 py-1 rounded-full bg-white/10 text-xs">External Sharing Off</span>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="group p-5 rounded-lg bg-white/10 hover:bg-white/15 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
                        <Lock className="w-5 h-5 text-indigo-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Project Codebase</h4>
                        <p className="text-xs text-gray-400">47 items • Updated 30 min ago</p>
                      </div>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-green-500/30 border border-white/20 flex items-center justify-center text-xs">TS</div>
                      <div className="w-6 h-6 rounded-full bg-yellow-500/30 border border-white/20 flex items-center justify-center text-xs">RJ</div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Full Access</span>
                      <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Dev Team Only</span>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm">
                  Team collaboration features are currently in development and will be available in an upcoming release.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Collaboration Use Cases</h2>
          <div className="space-y-6">
            {[
              {
                title: "Design Teams",
                description: "Share design assets, color palettes, and mockup feedback seamlessly across the design team."
              },
              {
                title: "Development Teams",
                description: "Distribute code snippets, configuration samples, and API references with proper access controls."
              },
              {
                title: "Marketing Teams",
                description: "Collaborate on copy, campaign materials, and content assets with version tracking."
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-white/5 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
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
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-3xl font-bold mb-6">Enhance Your Team's Productivity</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our waitlist to be notified when team collaboration features are released.
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

export default TeamCollaboration;
