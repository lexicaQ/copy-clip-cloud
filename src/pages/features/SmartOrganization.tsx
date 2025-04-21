
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Zap, 
  Brain, 
  FileBox, 
  Tag, 
  LayoutGrid, 
  Folder,
  FileText,
  Shield,
  Code
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import { Button } from "@/components/ui/button";

const SmartOrganization = () => {
  return (
    <div className="min-h-screen bg-background">
      <SharedBackground />
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-28">
        {/* Back button */}
        <div className="mb-12">
          <Button 
            variant="ghost" 
            asChild
            className="hover:bg-white/5 transition-colors"
          >
            <Link to="/features" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
              <ArrowLeft className="w-4 h-4" />
              Back to Features
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 backdrop-blur-xl">
            <Folder className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
            Smart Organization
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let our AI automatically organize your clipboard items into intelligent categories,
            making content management effortless and intuitive.
          </p>
        </motion.div>

        {/* Key Benefits */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {[
            {
              title: "Automatic Categorization",
              description: "Content is instantly sorted into relevant categories based on type and context",
              icon: LayoutGrid
            },
            {
              title: "Smart Suggestions",
              description: "Receive intelligent recommendations based on your usage patterns",
              icon: Sparkles
            },
            {
              title: "Contextual Awareness",
              description: "AI understands the relationship between different clipboard items",
              icon: Brain
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/10 mb-6">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Visualization */}
        <motion.div
          className="mb-24 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            How Smart Organization Works
          </h2>
          
          <div className="relative aspect-video max-w-4xl mx-auto glass-panel p-8 overflow-hidden border border-white/10">
            {/* Central Brain */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              animate={{ 
                scale: [1, 1.1, 1],
                filter: [
                  'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))',
                  'drop-shadow(0 0 40px rgba(255, 255, 255, 0.2))',
                  'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))'
                ]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="bg-white/10 backdrop-blur-xl p-6 rounded-full border border-white/20">
                <Brain className="w-16 h-16 text-white" />
              </div>
            </motion.div>

            {/* Connecting Lines */}
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <motion.div
                key={angle}
                className="absolute top-1/2 left-1/2 h-0.5"
                style={{ 
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.2) 0%, transparent 100%)',
                  width: "40%",
                  transformOrigin: "left center",
                  transform: `rotate(${angle}deg) translateY(-50%)`
                }}
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: angle / 360
                }}
              />
            ))}

            {/* Icon Nodes precisely on the lines */}
            {[
              { icon: FileText, label: "Documents", angle: 0 },
              { icon: Check, label: "Tasks", angle: 60 },
              { icon: Tag, label: "Keywords", angle: 120 },
              { icon: LayoutGrid, label: "Categories", angle: 180 },
              { icon: Zap, label: "Actions", angle: 240 },
              { icon: Sparkles, label: "Smart Items", angle: 300 }
            ].map((node, index) => {
              const radians = (node.angle * Math.PI) / 180;
              const distance = 0.4; // Consistent distance from center
              const x = 50 + distance * Math.cos(radians) * 100;
              const y = 50 + distance * Math.sin(radians) * 100;
              
              return (
                <motion.div
                  key={index}
                  className="absolute flex flex-col items-center justify-center"
                  style={{ 
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)"
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    scale: { duration: 0.5, delay: 0.8 + index * 0.1 },
                    y: { 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.5
                    }
                  }}
                >
                  <div className="p-3 rounded-lg bg-white/10 backdrop-blur-md mb-2">
                    <node.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs text-white/70">{node.label}</span>
                </motion.div>
              );
            })}

            {/* Ambient Particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-white/20 backdrop-blur-sm"
                initial={{ 
                  x: "50%", 
                  y: "50%",
                  opacity: 0
                }}
                animate={{
                  x: `${50 + (Math.random() * 80 - 40)}%`,
                  y: `${50 + (Math.random() * 80 - 40)}%`,
                  opacity: [0, 0.8, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Grid Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-20 h-20">
                <div className="absolute top-6 left-6 w-12 h-px bg-white/15"></div>
                <div className="absolute top-6 left-6 w-px h-12 bg-white/15"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-20 h-20">
                <div className="absolute bottom-6 right-6 w-12 h-px bg-white/15"></div>
                <div className="absolute bottom-6 right-6 w-px h-12 bg-white/15"></div>
              </div>
            </div>
          </div>

          {/* Feature Cards below visualization */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Brain, title: "Neural Processing", description: "Analyzes content using advanced AI" },
              { icon: Tag, title: "Auto-Tagging", description: "Generates keywords automatically" },
              { icon: LayoutGrid, title: "Smart Grouping", description: "Creates intuitive collections" },
              { icon: Zap, title: "Adaptive Learning", description: "Improves based on your usage" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (index * 0.1) }}
              >
                <feature.icon className="w-8 h-8 mb-4 text-white" />
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Smart Folders Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Smart Folders
          </h2>
          
          <div className="space-y-6">
            {[
              {
                name: "Code Snippets",
                icon: Code,
                rules: [
                  "Contains code syntax (function, class, const, etc.)",
                  "Has programming language identifiers",
                  "Contains code formatting patterns"
                ]
              },
              {
                name: "Meeting Notes",
                icon: FileText,
                rules: [
                  "Contains dates and times",
                  "Has participant names",
                  "Contains action items or follow-ups"
                ]
              },
              {
                name: "Security Content",
                icon: Shield,
                rules: [
                  "Contains sensitive information",
                  "Has encrypted content",
                  "Contains security-related keywords"
                ]
              }
            ].map((folder, index) => (
              <motion.div 
                key={index} 
                className="glass-panel bg-gradient-to-r from-black/30 to-black/10 p-8 rounded-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
              >
                <div className="flex items-start md:items-center md:flex-row flex-col">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mr-6 mb-4 md:mb-0">
                    <folder.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-xl mb-4">{folder.name}</h4>
                    <div className="bg-black/20 p-6 rounded-lg">
                      <h5 className="text-sm font-medium mb-4 text-white/80">Smart Rules</h5>
                      <ul className="space-y-3 text-sm text-gray-400">
                        {folder.rules.map((rule, ruleIndex) => (
                          <li key={ruleIndex} className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-white/10 text-xs flex items-center justify-center mr-3">{ruleIndex + 1}</div>
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
                
        {/* Use Cases */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Smart Organization in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "For Developers",
                description: "Keep code snippets organized by language, framework, and functionality with smart categorization.",
                icon: Code
              },
              {
                title: "For Researchers",
                description: "Automatically organize research materials, quotes, and references into themed collections.",
                icon: FileText
              },
              {
                title: "For Designers",
                description: "Group color schemes, design elements, and inspiration materials intelligently.",
                icon: LayoutGrid
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/10 mb-6">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
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
          transition={{ delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            Experience Smart Organization
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let AI handle the organization so you can focus on what matters most - your work and creativity.
          </p>
          <Button 
            size="lg"
            className="bg-white text-black hover:bg-white/90 transition-colors"
          >
            Try It Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SmartOrganization;
