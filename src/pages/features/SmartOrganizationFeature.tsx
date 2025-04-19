
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Sparkles, 
  LayoutGrid, 
  FileCheck, 
  Brain,
  Tag, 
  Zap, 
  Check,
  ArrowRight
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import { Button } from "@/components/ui/button";

const FeatureItem = ({ icon: Icon, title, description }: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
}) => {
  return (
    <motion.div
      className="p-8 rounded-xl bg-white/5 border border-white/10"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-start gap-6">
        <div className="p-3 rounded-lg bg-white/10 shrink-0">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const BenefitCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <motion.div
      className="p-6 rounded-xl bg-white/5 border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Check className="w-8 h-8 mb-4 text-pink-400" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const UseCaseItem = ({ title, description }: { title: string; description: string }) => {
  return (
    <motion.div
      className="p-6 rounded-xl bg-white/5 border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const SmartOrganizationFeature = () => {
  return (
    <div className="min-h-screen bg-background">
      <SharedBackground />
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        {/* Back button with improved styling */}
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
          <BenefitCard
            title="Automatic Categorization"
            description="Content is instantly sorted into relevant categories based on type and context"
          />
          <BenefitCard
            title="Smart Suggestions"
            description="Receive intelligent recommendations based on your usage patterns"
          />
          <BenefitCard
            title="Contextual Awareness"
            description="AI understands the relationship between different clipboard items"
          />
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
            <FeatureItem
              icon={Brain}
              title="Neural Processing"
              description="Our AI analyzes the content, format, and context of each clipboard item using advanced neural networks."
            />
            <FeatureItem
              icon={LayoutGrid}
              title="Intelligent Grouping"
              description="Similar content is automatically grouped together, creating intuitive collections for easy access."
            />
            <FeatureItem
              icon={Tag}
              title="Auto-Tagging"
              description="Keywords and metadata are automatically generated to enhance searchability and organization."
            />
            <FeatureItem
              icon={Zap}
              title="Adaptive Learning"
              description="The system improves over time by learning from your usage patterns and preferences."
            />
          </div>
        </motion.div>

        {/* Interactive Visualization */}
        <motion.div 
          className="mb-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">See Smart Organization in Action</h2>
          
          <div className="relative aspect-video max-w-4xl mx-auto bg-white/5 rounded-xl border border-white/10 p-8 overflow-hidden">
            {/* Central AI node */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 20px rgba(255, 255, 255, 0.1)",
                  "0 0 40px rgba(255, 255, 255, 0.2)",
                  "0 0 20px rgba(255, 255, 255, 0.1)"
                ]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="bg-white/10 backdrop-blur-xl p-4 rounded-full">
                <Brain className="w-12 h-12 text-pink-400/80" />
              </div>
            </motion.div>
            
            {/* Connection lines */}
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <motion.div
                key={angle}
                className="absolute top-1/2 left-1/2 h-px bg-gradient-to-r from-white/30 to-transparent"
                style={{ 
                  width: "40%",
                  transformOrigin: "left center",
                  transform: `rotate(${angle}deg) translateY(-50%)`
                }}
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                  width: ["30%", "40%", "30%"]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: angle / 360
                }}
              />
            ))}
            
            {/* Content nodes */}
            {[
              { icon: FileCheck, label: "Documents", angle: 0, distance: 0.38 },
              { icon: Check, label: "Tasks", angle: 60, distance: 0.38 },
              { icon: Tag, label: "Keywords", angle: 120, distance: 0.38 },
              { icon: LayoutGrid, label: "Categories", angle: 180, distance: 0.38 },
              { icon: Zap, label: "Actions", angle: 240, distance: 0.38 },
              { icon: Sparkles, label: "Smart Items", angle: 300, distance: 0.38 }
            ].map((node, index) => {
              const radians = (node.angle * Math.PI) / 180;
              const x = 50 + node.distance * Math.cos(radians) * 100;
              const y = 50 + node.distance * Math.sin(radians) * 100;
              
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
            
            {/* Data particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-pink-400/40"
                initial={{ 
                  x: "50%", 
                  y: "50%",
                  opacity: 0
                }}
                animate={{
                  x: `${50 + (Math.random() * 80 - 40)}%`,
                  y: `${50 + (Math.random() * 80 - 40)}%`,
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "easeInOut"
                }}
              />
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
            <UseCaseItem
              title="Research & Writing"
              description="Automatically organize research materials, quotes, and references into themed collections."
            />
            <UseCaseItem
              title="Development & Coding"
              description="Keep code snippets organized by language, project, or functionality with smart categorization."
            />
            <UseCaseItem
              title="Design & Creative Work"
              description="Group color schemes, design elements, and inspiration materials intelligently."
            />
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
          <Button 
            size="lg"
            className="bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 backdrop-blur-xl border border-white/10"
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

export default SmartOrganizationFeature;
