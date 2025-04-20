
import React from "react";
import { motion } from "framer-motion";
import { Presentation, Calculator, Users, ArrowRight, ChartBar } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";

const BusinessCase = () => {
  const features = [
    {
      icon: Presentation, // Changed from PresentationChart to Presentation
      title: "Presentation Content",
      description: "Keep your presentation content organized and accessible across all devices. Store and retrieve important slides and talking points instantly."
    },
    {
      icon: Calculator,
      title: "Financial Data",
      description: "Securely store and access financial data snippets, calculations, and market insights for quick reference during meetings."
    },
    {
      icon: ChartBar,
      title: "Business Analytics",
      description: "Track and organize key performance indicators, metrics, and business analytics data in one secure location."
    },
    {
      icon: Users,
      title: "Contact Management",
      description: "Maintain a structured database of important business contacts, meeting notes, and follow-up items."
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
              Business Efficiency
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Streamline your business workflows with intelligent clipboard management.
              Access critical business information instantly across all your devices.
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="glass-panel p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-xl bg-white/5">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Demo Section */}
          <motion.div 
            className="glass-panel p-8 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">Business Tools Integration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Meeting Notes Template</h3>
                <pre className="text-sm text-white/90 font-mono overflow-x-auto bg-black/20 p-4 rounded">
                  {`Meeting: [Title]
Date: [Date]
Participants: [Names]
Key Points:
1. [Point 1]
2. [Point 2]
Action Items:
- [ ] Task 1
- [ ] Task 2`}
                </pre>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Financial Report Snippet</h3>
                <pre className="text-sm text-white/90 font-mono overflow-x-auto bg-black/20 p-4 rounded">
                  {`Q4 Revenue: $1.2M
YoY Growth: 25%
Key Metrics:
- CAC: $150
- LTV: $2,500
- Churn: 2.3%`}
                </pre>
              </div>
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
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business Workflow?</h2>
              <p className="text-gray-300 mb-8">
                Join thousands of businesses that have enhanced their productivity with CopyClipCloud.
              </p>
              <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-opacity-90 transition-all inline-flex items-center gap-2">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessCase;
