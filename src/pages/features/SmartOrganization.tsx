
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  ArrowRight, 
  Brain,
  Tag, 
  LayoutGrid, 
  FileText,
  Shield,
  Code,
  Clock,
  Search,
  Filter,
  Zap,
  Check,
  Folder,
  CircleDot,
  SquareDot
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import { Button } from "@/components/ui/button";

// Reusable section header component
const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-gray-400 max-w-3xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

// Feature card component
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5 }}
      className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm h-full"
    >
      <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/8 mb-6 border border-white/10">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

// Smart rule card component
const SmartRuleCard = ({ folder, index }: { 
  folder: { 
    name: string; 
    icon: React.ElementType; 
    rules: string[];
    color?: string;
  };
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const Icon = folder.icon;
  
  return (
    <motion.div 
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      className="glass-panel bg-gradient-to-r from-black/30 to-black/10 p-8 rounded-lg border border-white/8 transition-all duration-300 hover:border-white/15"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/8 to-white/4 flex items-center justify-center shrink-0 border border-white/10">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-xl mb-4">{folder.name}</h4>
          <div className="bg-black/20 p-6 rounded-lg border border-white/5">
            <h5 className="text-sm uppercase tracking-wider mb-4 text-white/70 flex items-center">
              <Filter className="w-3.5 h-3.5 mr-2 text-white/60" />
              Smart Classification Rules
            </h5>
            <ul className="space-y-4 text-sm text-gray-400">
              {folder.rules.map((rule, ruleIndex) => (
                <li key={ruleIndex} className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white/8 text-xs flex items-center justify-center mr-3 border border-white/10">
                    {ruleIndex + 1}
                  </div>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Interactive visualization component
const BrainVisualization = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Node data with exact positions for perfect line alignment
  const nodes = [
    { icon: FileText, label: "Documents", angle: 0, distance: 0.38 },
    { icon: Tag, label: "Keywords", angle: 60, distance: 0.38 },
    { icon: Clock, label: "Timeline", angle: 120, distance: 0.38 },
    { icon: Search, label: "Search", angle: 180, distance: 0.38 },
    { icon: Folder, label: "Folders", angle: 240, distance: 0.38 },
    { icon: LayoutGrid, label: "Categories", angle: 300, distance: 0.38 }
  ];

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6 }}
      className="relative aspect-[5/3] max-w-5xl mx-auto glass-panel border border-white/10 rounded-xl overflow-hidden"
    >
      {/* Grid background pattern */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 pointer-events-none">
        {Array.from({ length: 32 }).map((_, i) => (
          <div key={i} className="border-[0.5px] border-white/5"></div>
        ))}
      </div>

      {/* Central brain */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        animate={{ 
          scale: [1, 1.05, 1],
          filter: [
            'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))',
            'drop-shadow(0 0 30px rgba(255, 255, 255, 0.15))',
            'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))'
          ]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-28 h-28 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 flex items-center justify-center shadow-2xl">
          <Brain className="w-14 h-14 text-white" />
        </div>
      </motion.div>

      {/* Connecting Lines - EXACT POSITIONING */}
      {nodes.map((node, index) => {
        const radians = (node.angle * Math.PI) / 180;
        const innerX = Math.cos(radians) * 0.1;
        const innerY = Math.sin(radians) * 0.1;
        const outerX = Math.cos(radians) * node.distance;
        const outerY = Math.sin(radians) * node.distance;
        
        return (
          <motion.div
            key={`line-${index}`}
            className="absolute top-1/2 left-1/2 w-1 h-1"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              background: [
                'rgba(255,255,255,0.1)',
                'rgba(255,255,255,0.2)',
                'rgba(255,255,255,0.1)'
              ]
            }}
            transition={{ 
              duration: 3,
              delay: 0.2 + index * 0.1,
              ease: "easeInOut",
              repeat: Infinity
            }}
          >
            <svg
              className="absolute top-0 left-0 w-full h-full"
              style={{ 
                width: '100%', 
                height: '100%', 
                transform: 'scale(80)', 
                transformOrigin: 'center'
              }}
            >
              <line
                x1={innerX + 0.5}
                y1={innerY + 0.5}
                x2={outerX + 0.5}
                y2={outerY + 0.5}
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="0.01"
              />
            </svg>
          </motion.div>
        );
      })}

      {/* Nodes precisely positioned at the ends of lines */}
      {nodes.map((node, index) => {
        const radians = (node.angle * Math.PI) / 180;
        const x = 50 + Math.cos(radians) * node.distance * 100;
        const y = 50 + Math.sin(radians) * node.distance * 100;
        const Icon = node.icon;
        
        return (
          <motion.div
            key={`node-${index}`}
            className="absolute flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
            style={{ 
              left: `${x}%`,
              top: `${y}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1
            }}
            transition={{ 
              duration: 0.5, 
              delay: 0.5 + index * 0.1
            }}
          >
            <motion.div 
              className="p-3 rounded-full bg-white/10 backdrop-blur-md mb-2 border border-white/10"
              animate={{ 
                y: [0, -5, 0],
                boxShadow: [
                  '0 0 0 rgba(255, 255, 255, 0.1)',
                  '0 0 10px rgba(255, 255, 255, 0.2)',
                  '0 0 0 rgba(255, 255, 255, 0.1)'
                ]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                delay: index * 0.5,
                ease: "easeInOut"
              }}
            >
              <Icon className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xs text-white/70 backdrop-blur-sm px-2 py-1 rounded-full bg-black/20">
              {node.label}
            </span>
          </motion.div>
        );
      })}

      {/* Ambient particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-white/20 backdrop-blur-sm"
          initial={{ 
            x: '50%', 
            y: '50%',
            opacity: 0
          }}
          animate={{
            x: `${30 + Math.random() * 40}%`,
            y: `${30 + Math.random() * 40}%`,
            opacity: [0, 0.6, 0],
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

      {/* Corner details */}
      <div className="absolute top-0 left-0 w-20 h-20">
        <div className="absolute top-6 left-6 w-14 h-px bg-white/15"></div>
        <div className="absolute top-6 left-6 w-px h-14 bg-white/15"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-20 h-20">
        <div className="absolute bottom-6 right-6 w-14 h-px bg-white/15"></div>
        <div className="absolute bottom-6 right-6 w-px h-14 bg-white/15"></div>
      </div>
    </motion.div>
  );
};

const SmartOrganization = () => {
  const smartFolderRules = [
    {
      name: "Code Snippets",
      icon: Code,
      rules: [
        "Contains programming language syntax",
        "Has function definitions or method declarations",
        "Includes code comments and documentation",
        "Contains variable assignments or declarations"
      ]
    },
    {
      name: "Meeting Notes",
      icon: FileText,
      rules: [
        "Contains date and time markers",
        "Has names of participants or attendees",
        "Includes action items and task assignments",
        "Features decision points or conclusions"
      ]
    },
    {
      name: "Secured Content",
      icon: Shield,
      rules: [
        "Contains confidential information markers",
        "Includes authentication credentials",
        "Has encrypted content signatures",
        "Features compliance-related information"
      ]
    }
  ];

  const keyFeatures = [
    {
      icon: Brain,
      title: "Neural Processing",
      description: "Our AI analyzes content using advanced neural networks to understand context and meaning beyond simple keywords."
    },
    {
      icon: Tag,
      title: "Automatic Tagging",
      description: "Content is intelligently tagged based on type, subject, importance, and other relevant attributes."
    },
    {
      icon: LayoutGrid,
      title: "Smart Categories",
      description: "Similar items are automatically grouped together, creating intuitive collections for enhanced productivity."
    },
    {
      icon: Clock,
      title: "Time-Based Organization",
      description: "Content is automatically organized chronologically with intelligent grouping by time periods."
    }
  ];

  const useCases = [
    {
      title: "For Developers",
      description: "Keep code snippets organized by language, framework, and functionality with dynamic categorization."
    },
    {
      title: "For Researchers",
      description: "Automatically organize research materials, citations, and references into themed collections."
    },
    {
      title: "For Content Creators",
      description: "Group design elements, notes, and draft content with intelligent context-aware organization."
    }
  ];

  const techniques = [
    {
      title: "Color Coding",
      icon: CircleDot,
      details: [
        "Visual organization by category",
        "Priority indication through color",
        "Project-specific color schemes",
        "Customizable color assignments"
      ]
    },
    {
      title: "Smart Structure",
      icon: SquareDot,
      details: [
        "Hierarchical organization",
        "Context-based grouping",
        "Relationship mapping",
        "Nested categorization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-white">
      <SharedBackground />
      <Header />
      
      <main className="container px-4 mx-auto pt-32 pb-32">
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
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-28 h-28 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 backdrop-blur-xl">
            <Folder className="w-14 h-14 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
            Smart Organization
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let our AI automatically organize your clipboard content into intelligent categories,
            making content management effortless and intuitive.
          </p>
        </motion.div>

        {/* Key Benefits */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {keyFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>

        {/* Interactive Visualization */}
        <div className="mb-32">
          <SectionHeader 
            title="How Smart Organization Works"
            subtitle="Our intelligent system uses neural networks to analyze, categorize, and organize your content"
          />
          
          <BrainVisualization />
        </div>

        {/* Smart Folders Section */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <SectionHeader title="Smart Folders" />
          
          <div className="space-y-8">
            {smartFolderRules.map((folder, index) => (
              <SmartRuleCard 
                key={index} 
                folder={folder} 
                index={index} 
              />
            ))}
          </div>
        </motion.div>
        
        {/* Organization Techniques */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <SectionHeader title="Organization Techniques" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techniques.map((technique, index) => {
              const Icon = technique.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-panel p-8 border border-white/8 rounded-xl"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-white/8 flex items-center justify-center mr-4 border border-white/10">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{technique.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {technique.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40 mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div 
          className="mb-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <SectionHeader title="Smart Organization in Action" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm"
              >
                <div className="h-16 flex items-center">
                  <h3 className="text-xl font-semibold">{useCase.title}</h3>
                </div>
                <p className="text-gray-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pro Tips Section */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <SectionHeader title="Smart Organization Tips" />
          
          <div className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-xl border border-white/10">
            <div className="space-y-6">
              <div className="bg-black/20 rounded-lg p-6 border border-white/5">
                <h4 className="text-lg font-medium mb-3 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-white" />
                  Combine Organization Methods
                </h4>
                <p className="text-gray-400">
                  Use smart folders for broad categories, tags for specific attributes, and color coding for visual priority indicators.
                </p>
              </div>
              
              <div className="bg-black/20 rounded-lg p-6 border border-white/5">
                <h4 className="text-lg font-medium mb-3 flex items-center">
                  <Check className="w-5 h-5 mr-2 text-white" />
                  Review & Refine
                </h4>
                <p className="text-gray-400">
                  Periodically review your organizational system and refine rules to better match your evolving workflow.
                </p>
              </div>
              
              <div className="bg-black/20 rounded-lg p-6 border border-white/5">
                <h4 className="text-lg font-medium mb-3 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-white" />
                  Use Time-Based Organization
                </h4>
                <p className="text-gray-400">
                  Take advantage of chronological organization by using timeline views to track progress and changes over time.
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
          transition={{ delay: 0.7 }}
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
