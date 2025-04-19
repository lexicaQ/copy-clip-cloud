
import React from "react";
import { motion } from "framer-motion";
import { PenTool, Palette, Layers, Image, ArrowRight, Check } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import { ComingSoon } from "@/components/ui/coming-soon";

const DesignerCase = () => {
  const features = [
    {
      icon: PenTool,
      title: "Vector Tools",
      description: "Store commonly used vector paths and design elements across projects for quick access. Organize your design elements by project, type, or custom categories."
    },
    {
      icon: Palette,
      title: "Color Palettes",
      description: "Organize and access your brand colors and custom palettes with ease. Save complete color schemes and access them instantly across design applications."
    },
    {
      icon: Layers,
      title: "Layer Styles",
      description: "Save and reuse layer styles and effects across design files. Maintain consistency in your designs by leveraging saved styles across your entire workflow."
    },
    {
      icon: Image,
      title: "Asset Library",
      description: "Keep track of design assets, icons, and images in one place. Access your frequently used assets instantly without digging through folders or cloud storage."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "UI/UX Designer at DesignCraft",
      quote: "CopyClipCloud has completely transformed how I manage my design resources. I can seamlessly copy elements between Figma, Photoshop, and Illustrator without any hassle.",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    {
      name: "Michael Chen",
      role: "Graphic Designer, Freelance",
      quote: "The smart categorization of design assets has saved me countless hours. I can't imagine going back to my old workflow after using CopyClipCloud.",
      avatar: "https://i.pravatar.cc/150?img=11"
    }
  ];

  const workflows = [
    {
      title: "Brand Identity Projects",
      description: "Save and organize logo variations, color palettes, typography settings, and brand guidelines in one place.",
      steps: [
        "Copy logo variations from Illustrator",
        "Store typography settings from InDesign",
        "Save color codes from anywhere",
        "Access everything seamlessly across applications"
      ]
    },
    {
      title: "UI Design Workflow",
      description: "Maintain consistency across screens by keeping UI components, design tokens, and prototyping elements readily available.",
      steps: [
        "Save commonly used UI components",
        "Organize design tokens by project",
        "Share resources with team members",
        "Maintain design consistency across platforms"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SharedBackground />
      
      <main className="pt-24 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-white/30"></div>
              <span className="text-white/70 text-sm uppercase tracking-wider">Use Case</span>
              <div className="h-px w-8 bg-white/30"></div>
            </div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Designed for Creatives
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Enhance your creative workflow with intelligent design clipboard management.
              Organize, access, and reuse design elements across all your tools.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <button className="btn-modern inline-flex items-center gap-2 bg-white text-black hover:bg-opacity-90">
                Try For Free <ArrowRight className="w-4 h-4" />
              </button>
              
              <button className="px-6 py-3 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/5 transition-all flex items-center gap-2">
                Watch Demo <Image className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>

          {/* Main Features */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Design Workflow Enhancement</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Tools specifically designed to streamline the creative process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass-panel p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="p-4 rounded-xl bg-white/5 flex-shrink-0">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Showcase */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Interactive Design Management</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                See how CopyClipCloud organizes your design elements
              </p>
            </div>
            
            <div className="glass-panel p-8 rounded-xl overflow-hidden">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Smart Design Organization</h3>
                <p className="text-gray-400">
                  Your design elements are intelligently organized and immediately accessible
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 rounded-lg p-6">
                  <div className="text-sm text-white/70 mb-4 font-medium">Color Palette Organization</div>
                  <div className="border border-white/10 rounded-lg p-5 bg-black/30">
                    <div className="mb-4">
                      <div className="text-xs text-white/50 mb-2">Project: E-commerce Redesign</div>
                      <div className="flex flex-wrap gap-3">
                        {["#FF5252", "#4CAF50", "#2196F3", "#FFC107", "#9C27B0", "#607D8B"].map((color, i) => (
                          <motion.div 
                            key={i} 
                            className="flex flex-col items-center"
                            whileHover={{ y: -2 }}
                          >
                            <div className="w-10 h-10 rounded-full border border-white/10" style={{ backgroundColor: color }}></div>
                            <span className="text-xs text-white/70 mt-1">{color}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-white/50 mb-2">Project: Mobile App</div>
                      <div className="flex flex-wrap gap-3">
                        {["#3F51B5", "#00BCD4", "#009688", "#673AB7", "#FFEB3B", "#FF9800"].map((color, i) => (
                          <motion.div 
                            key={i} 
                            className="flex flex-col items-center"
                            whileHover={{ y: -2 }}
                          >
                            <div className="w-10 h-10 rounded-full border border-white/10" style={{ backgroundColor: color }}></div>
                            <span className="text-xs text-white/70 mt-1">{color}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6">
                  <div className="text-sm text-white/70 mb-4 font-medium">Asset Management</div>
                  <div className="border border-white/10 rounded-lg p-5 bg-black/30">
                    <div className="mb-4">
                      <div className="text-xs text-white/50 mb-2">Recently Copied Assets</div>
                      <div className="grid grid-cols-4 gap-2">
                        {[1, 2, 3, 4].map((i) => (
                          <motion.div 
                            key={i}
                            className="aspect-square bg-white/10 rounded-md flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-white/20 to-white/5"></div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-white/50 mb-2">Typography Settings</div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                          <span>Heading Font</span>
                          <span className="text-white/70">Montserrat Bold, 32px</span>
                        </div>
                        <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                          <span>Body Font</span>
                          <span className="text-white/70">Inter Regular, 16px</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Button Text</span>
                          <span className="text-white/70">Inter SemiBold, 14px</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Workflow Examples */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Design Workflows</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Discover how CopyClipCloud integrates with your existing design processes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {workflows.map((workflow, index) => (
                <motion.div
                  key={index}
                  className="glass-panel p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-3">{workflow.title}</h3>
                  <p className="text-gray-300 mb-6">{workflow.description}</p>
                  
                  <div className="space-y-3">
                    {workflow.steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 p-0.5 rounded-full bg-white/10 flex-shrink-0">
                          <Check className="w-4 h-4 text-white/70" />
                        </div>
                        <p className="text-gray-300">{step}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Designer Testimonials</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Hear from designers who have transformed their workflows
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="glass-panel p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                    </div>
                    
                    <div className="mt-auto flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Features */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                New features designed specifically for creative professionals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Design Version History", description: "Track changes to your design elements over time" },
                { title: "AI Design Suggestions", description: "Get intelligent recommendations based on your design patterns" },
                { title: "Team Collaboration", description: "Share design resources with your team seamlessly" }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="glass-panel p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="mb-4 flex justify-center">
                    <ComingSoon />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel p-10 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Revolutionize Your Design Workflow?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join thousands of designers who have transformed their productivity with CopyClipCloud.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-modern inline-flex items-center gap-2 bg-white text-black hover:bg-opacity-90">
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-3 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/5 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DesignerCase;
