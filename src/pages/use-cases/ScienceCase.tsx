
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, FileText, Database, Calculator, ArrowRight, ChartBar } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";

const ScienceCase = () => {
  const features = [
    {
      icon: FileText,
      title: "Literature References",
      description: "Organize research papers, citations, and key findings in a structured, easily accessible format."
    },
    {
      icon: Database,
      title: "Research Data",
      description: "Store and categorize experimental data, observations, and analytical results across multiple studies."
    },
    {
      icon: Calculator,
      title: "Statistical Analysis",
      description: "Keep track of statistical formulas, results, and data analysis workflows in one secure location."
    },
    {
      icon: ChartBar,
      title: "Visualization Data",
      description: "Maintain comprehensive data visualization parameters and chart configurations for consistency."
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
              Scientific Research
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Enhance your research workflow with intelligent organization of scientific data.
              Access and manage research materials efficiently across all your devices.
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
            <h2 className="text-2xl font-bold mb-6">Research Tools Integration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Citation Format</h3>
                <pre className="text-sm text-white/90 font-mono overflow-x-auto bg-black/20 p-4 rounded">
                  {`@article{smith2023quantum,
  title={Quantum Computing Applications},
  author={Smith, J. and Johnson, M.},
  journal={Science Advances},
  volume={8},
  number={4},
  year={2023}
}`}
                </pre>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Data Analysis Script</h3>
                <pre className="text-sm text-white/90 font-mono overflow-x-auto bg-black/20 p-4 rounded">
                  {`# Statistical Analysis
import numpy as np
from scipy import stats

# Calculate p-value
t_stat, p_val = stats.ttest_ind(
    group1_data, 
    group2_data
)`}
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
              <h2 className="text-3xl font-bold mb-6">Enhance Your Research Workflow</h2>
              <p className="text-gray-300 mb-8">
                Join researchers worldwide who use CopyClipCloud to organize their scientific work.
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

export default ScienceCase;
