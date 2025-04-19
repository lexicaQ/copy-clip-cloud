
import React from "react";
import { motion } from "framer-motion";
import { BarChart, PieChart, TrendingUp, Shield, Users, ArrowRight, Check } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import { ComingSoon } from "@/components/ui/coming-soon";

const BusinessCase = () => {
  const features = [
    {
      icon: BarChart,
      title: "Data-Driven Decisions",
      description: "Store, organize, and access crucial business data points, statistics, and KPIs across your entire organization with smart categorization."
    },
    {
      icon: TrendingUp,
      title: "Growth Metrics",
      description: "Track and share important growth metrics and performance indicators with your team for better alignment and faster decision-making."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamlessly share important information across teams without additional software. Improve coordination and eliminate information silos."
    },
    {
      icon: Shield,
      title: "Secure Information Sharing",
      description: "Share sensitive business information securely with end-to-end encryption and granular access controls for different team members."
    }
  ];

  const useCases = [
    {
      title: "Executive Decision Making",
      description: "Executives can quickly access and reference critical business metrics, competitive analyses, and market research when making strategic decisions.",
      points: [
        "Instant access to KPIs across departments",
        "Historical data trends at your fingertips",
        "Competitive intelligence readily available",
        "Market research insights organized by project"
      ]
    },
    {
      title: "Sales and Client Management",
      description: "Sales teams can efficiently manage client information, proposal details, pricing models, and communication snippets for consistent messaging.",
      points: [
        "Client contact information always accessible",
        "Proposal templates organized by client type",
        "Pricing models and quotes easy to reference",
        "Consistent messaging across customer touchpoints"
      ]
    }
  ];

  const testimonials = [
    {
      name: "James Wilson",
      role: "COO at GrowthTech Inc.",
      quote: "CopyClipCloud has streamlined how our executive team shares and accesses critical business information. The time savings alone have been substantial.",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
      name: "Emma Rodriguez",
      role: "Sales Director, Enterprise Solutions",
      quote: "My sales team uses CopyClipCloud daily to maintain consistent messaging and accurate information across all client communications. It's been transformative.",
      avatar: "https://i.pravatar.cc/150?img=23"
    }
  ];

  const stats = [
    { label: "Time Saved", value: "37%", description: "Average productivity improvement" },
    { label: "Information Sharing", value: "63%", description: "Increase in data accessibility" },
    { label: "Decision Speed", value: "46%", description: "Faster strategic decisions" },
    { label: "ROI", value: "329%", description: "Average return on investment" }
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
              Business Intelligence
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Streamline information sharing, decision-making, and team collaboration
              with intelligent clipboard management designed for business professionals.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <button className="btn-modern inline-flex items-center gap-2 bg-white text-black hover:bg-opacity-90">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </button>
              
              <button className="px-6 py-3 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/5 transition-all flex items-center gap-2">
                Schedule Demo <Users className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass-panel p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-gradient">{stat.value}</div>
                  <h3 className="font-medium mb-1">{stat.label}</h3>
                  <p className="text-xs text-gray-400">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Main Features */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Business-Critical Features</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Tools designed to enhance decision-making and information sharing
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

          {/* Use Cases */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Business Use Cases</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                See how different business functions leverage CopyClipCloud
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="glass-panel p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  
                  <div className="space-y-3">
                    {useCase.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 p-0.5 rounded-full bg-white/10 flex-shrink-0">
                          <Check className="w-4 h-4 text-white/70" />
                        </div>
                        <p className="text-gray-300">{point}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Data Visualization */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Business Intelligence Dashboard</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Visualize how CopyClipCloud integrates with your business workflow
              </p>
            </div>
            
            <div className="glass-panel p-8 overflow-hidden">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Business Performance</h4>
                        <div className="text-xs text-white/50">Last 30 days</div>
                      </div>
                      <div className="aspect-[16/9] bg-black/20 rounded-lg border border-white/5 p-4 flex items-center justify-center">
                        <div className="w-full h-full flex flex-col">
                          <div className="flex justify-between mb-2">
                            <div className="text-xs text-white/50">Revenue</div>
                            <div className="text-xs font-medium text-white/70">+12.4%</div>
                          </div>
                          {/* Simulated chart bars */}
                          <div className="flex-1 flex items-end gap-1">
                            {[35, 45, 30, 60, 75, 50, 65, 40, 55, 70, 85, 60].map((height, i) => (
                              <motion.div 
                                key={i} 
                                className="flex-1 bg-white/20 rounded-t"
                                initial={{ height: 0 }}
                                whileInView={{ height: `${height}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.5 }}
                              ></motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/20 rounded-lg border border-white/5 p-4">
                        <div className="text-sm mb-1">Customer Acquisition</div>
                        <div className="text-2xl font-bold">1,245</div>
                        <div className="text-xs text-green-400">+18% vs previous period</div>
                      </div>
                      <div className="bg-black/20 rounded-lg border border-white/5 p-4">
                        <div className="text-sm mb-1">Average Deal Size</div>
                        <div className="text-2xl font-bold">$6,850</div>
                        <div className="text-xs text-green-400">+5% vs previous period</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-black/20 rounded-lg border border-white/5 p-4 h-full">
                      <h4 className="font-medium mb-4">Revenue Breakdown</h4>
                      <div className="relative aspect-square flex items-center justify-center mb-6">
                        {/* Simulated pie chart */}
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <motion.circle 
                            cx="50" cy="50" r="40" 
                            fill="transparent" 
                            stroke="rgba(255,255,255,0.1)" 
                            strokeWidth="20"
                          />
                          <motion.path
                            d="M50,50 L50,10 A40,40 0 0,1 83.6,38.2 z"
                            fill="rgba(255,255,255,0.2)"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                          />
                          <motion.path
                            d="M50,50 L83.6,38.2 A40,40 0 0,1 66.1,83.6 z"
                            fill="rgba(255,255,255,0.3)"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                          />
                          <motion.path
                            d="M50,50 L66.1,83.6 A40,40 0 0,1 16.4,61.8 z"
                            fill="rgba(255,255,255,0.4)"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                          />
                          <motion.path
                            d="M50,50 L16.4,61.8 A40,40 0 0,1 16.4,38.2 z"
                            fill="rgba(255,255,255,0.5)"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                          />
                          <motion.path
                            d="M50,50 L16.4,38.2 A40,40 0 0,1 50,10 z"
                            fill="rgba(255,255,255,0.6)"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                          />
                        </svg>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <div className="w-3 h-3 bg-white/20 mr-2"></div>
                          <div className="flex-1">Product A</div>
                          <div>35%</div>
                        </div>
                        <div className="flex items-center text-sm">
                          <div className="w-3 h-3 bg-white/30 mr-2"></div>
                          <div className="flex-1">Product B</div>
                          <div>25%</div>
                        </div>
                        <div className="flex items-center text-sm">
                          <div className="w-3 h-3 bg-white/40 mr-2"></div>
                          <div className="flex-1">Product C</div>
                          <div>20%</div>
                        </div>
                        <div className="flex items-center text-sm">
                          <div className="w-3 h-3 bg-white/50 mr-2"></div>
                          <div className="flex-1">Product D</div>
                          <div>15%</div>
                        </div>
                        <div className="flex items-center text-sm">
                          <div className="w-3 h-3 bg-white/60 mr-2"></div>
                          <div className="flex-1">Other</div>
                          <div>5%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              <h2 className="text-3xl font-bold mb-4">Business Testimonials</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Hear from business leaders who have transformed their operations
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
                New features designed specifically for business users
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "AI-Powered Insights", description: "Get intelligent business recommendations based on your data" },
                { title: "Enterprise Dashboard", description: "Centralized management for large organizations" },
                { title: "Advanced Security Controls", description: "Granular permissions and compliance features" }
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
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business Operations?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join thousands of businesses that have improved their productivity with CopyClipCloud.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-modern inline-flex items-center gap-2 bg-white text-black hover:bg-opacity-90">
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-3 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/5 transition-all">
                  Request Pricing
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

export default BusinessCase;
