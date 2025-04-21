
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Brain, 
  Sparkles, 
  ArrowRight, 
  Check, 
  FileText,
  FolderOpen,
  Tag,
  Clock,
  Search,
  Zap,
  MessageSquare,
  Filter
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import { Button } from "@/components/ui/button";

const SmartOrganization = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SharedBackground />
      <Header />
      
      <main className="relative z-10">
        {/* Back button */}
        <div className="container mx-auto px-4 pt-32 pb-8">
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

        {/* Hero Section with Neural Network Visualization */}
        <motion.section
          className="container mx-auto px-4 pb-24 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-8 border border-white/10">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
              
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                AI-Powered Smart Organization
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Let our intelligent AI analyze, categorize, and organize your clipboard items automatically,
                making content management effortless and intuitive, while adapting to your unique workflow.
              </motion.p>
            </motion.div>

            {/* Neural Network Visualization */}
            <motion.div 
              className="relative h-[400px] mb-24 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Brain in the center */}
              <motion.div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1,
                  type: "spring",
                  stiffness: 100 
                }}
              >
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/20 backdrop-blur-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  <Brain className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              {/* Connecting lines and nodes */}
              {[
                { icon: FileText, label: "Documents", position: { top: "20%", left: "15%" }, delay: 1.1 },
                { icon: FolderOpen, label: "Folders", position: { top: "70%", left: "20%" }, delay: 1.2 },
                { icon: Tag, label: "Tags", position: { top: "25%", left: "80%" }, delay: 1.3 },
                { icon: Clock, label: "History", position: { top: "65%", left: "75%" }, delay: 1.4 },
                { icon: MessageSquare, label: "Messages", position: { top: "10%", left: "45%" }, delay: 1.5 },
                { icon: Search, label: "Search", position: { top: "80%", left: "45%" }, delay: 1.6 }
              ].map((item, index) => (
                <React.Fragment key={index}>
                  {/* Connection line */}
                  <motion.div 
                    className="absolute left-1/2 top-1/2 h-px bg-gradient-to-r from-white/5 via-white/20 to-white/5 -translate-x-1/2 -translate-y-1/2 origin-left"
                    style={{
                      width: "40%",
                      transform: `translate(-50%, -50%) rotate(${index * 60}deg)`,
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                  />
                  
                  {/* Node */}
                  <motion.div 
                    className="absolute flex flex-col items-center"
                    style={item.position}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: item.delay,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center mb-2 shadow-lg">
                      <item.icon className="w-6 h-6 text-white/80" />
                    </div>
                    <span className="text-sm text-white/60 font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                      {item.label}
                    </span>
                  </motion.div>
                </React.Fragment>
              ))}
              
              {/* Floating dots */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={`dot-${i}`}
                  className="absolute w-1.5 h-1.5 rounded-full bg-white/30"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 0.7, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    delay: Math.random() * 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              ))}
              
              {/* Pulse effect around brain */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`pulse-${i}`}
                  className="absolute left-1/2 top-1/2 rounded-full border border-white/10 -translate-x-1/2 -translate-y-1/2"
                  initial={{ width: 80, height: 80, opacity: 0.5 }}
                  animate={{
                    width: [80, 200],
                    height: [80, 200],
                    opacity: [0.3, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 1,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Key Benefits Section */}
        <section className="py-24 bg-white/[0.02]">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                Smart Organization Benefits
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Simplify your workflow with intelligent organization that adapts to your needs
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Automatic Categorization",
                  description: "Content is instantly sorted into relevant categories based on type and context",
                  icon: Filter
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
                  className="p-8 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm overflow-hidden relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ translateY: -5 }}
                >
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                  </div>
                  
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden opacity-30">
                    <div className="absolute top-6 right-6 w-10 h-px bg-white/20"></div>
                    <div className="absolute top-6 right-6 w-px h-10 bg-white/20"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                How Smart Organization Works
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our intelligent system works behind the scenes to organize your content
              </p>
            </motion.div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  {
                    icon: Brain,
                    title: "Neural Processing",
                    description: "Our AI analyzes the content, format, and context of each clipboard item using advanced neural networks."
                  },
                  {
                    icon: FileText,
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
                    className="p-8 rounded-xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="p-4 rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/10 shrink-0">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Connecting line in the middle */}
              <motion.div 
                className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2 hidden md:block"
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 bg-white/[0.02]">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                Smart Organization in Action
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See how AI-powered organization enhances different workflows
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              {[
                {
                  title: "Research & Writing",
                  description: "Automatically organize research materials, quotes, and references into themed collections for seamless academic or creative writing workflows.",
                  tags: ["Academic", "Content Creation", "Journalism"]
                },
                {
                  title: "Development & Coding",
                  description: "Keep code snippets organized by language, project, or functionality with smart categorization that understands programming syntax and context.",
                  tags: ["Programming", "Web Development", "System Architecture"]
                },
                {
                  title: "Design & Creative Work",
                  description: "Group color schemes, design elements, and inspiration materials intelligently, maintaining creative consistency across projects.",
                  tags: ["UX/UI", "Graphic Design", "Brand Identity"]
                }
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  className="mb-8 p-8 rounded-xl bg-white/[0.03] border border-white/10 relative group overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ translateY: -5 }}
                >
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{useCase.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {useCase.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden opacity-30">
                    <div className="absolute top-6 left-6 w-10 h-px bg-white/20"></div>
                    <div className="absolute top-6 left-6 w-px h-10 bg-white/20"></div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 overflow-hidden opacity-30">
                    <div className="absolute bottom-6 right-6 w-10 h-px bg-white/20"></div>
                    <div className="absolute bottom-6 right-6 w-px h-10 bg-white/20"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                Experience Smart Organization
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Let AI handle the organization so you can focus on what matters most—your work and creativity.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button 
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  Try It Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`cta-effect-${i}`}
                  className="absolute rounded-full border border-white/5"
                  style={{
                    width: `${200 + i * 100}px`,
                    height: `${200 + i * 100}px`,
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ opacity: 0.1 }}
                  animate={{
                    opacity: [0.1, 0.2, 0.1],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SmartOrganization;
