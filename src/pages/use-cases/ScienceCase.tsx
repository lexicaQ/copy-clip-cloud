
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, FlaskConical, FileText, Database, ArrowRight, Check, Brain, ChartBar, AtomIcon } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import { ComingSoon } from "@/components/ui/coming-soon";
import DocCodeBlock from "@/components/docs/DocCodeBlock";

const ScienceCase = () => {
  const features = [
    {
      icon: FileText,
      title: "Research Citations",
      description: "Store and organize citations and references from scientific literature with automatic formatting for different citation styles (APA, MLA, Chicago, etc.)."
    },
    {
      icon: FlaskConical,
      title: "Experiment Data",
      description: "Keep track of experimental parameters, results, and observations across multiple research projects with intelligent categorization."
    },
    {
      icon: Database,
      title: "Statistical Analysis",
      description: "Save snippets of statistical analyses, data interpretations, and visualization code for reuse across your research workflow."
    },
    {
      icon: BookOpen,
      title: "Literature Excerpts",
      description: "Organize important quotes, findings, and excerpts from scientific papers with automatic source attribution and context preservation."
    }
  ];

  const workflows = [
    {
      title: "Literature Review Process",
      description: "Streamline your literature review process by organizing key information from multiple sources.",
      points: [
        "Save and categorize relevant citations",
        "Extract key findings with source context",
        "Organize papers by research question",
        "Generate formatted bibliography instantly"
      ]
    },
    {
      title: "Experimental Documentation",
      description: "Document your experimental methods, protocols, and results efficiently across multiple research projects.",
      points: [
        "Record experimental parameters consistently",
        "Copy and organize measurement data",
        "Document observations with timestamps",
        "Share protocols securely with collaborators"
      ]
    }
  ];

  const researchSnippets = {
    citation: `Smith, J., et al. (2024). "The Impact of AI on 
Modern Research Methodologies." Journal of 
Scientific Innovation, 42(3), 256-270.
DOI: 10.1234/jsi.2024.42.3.256`,
    
    rCode: `# Linear regression analysis
model <- lm(response ~ treatment + covariate, data = experiment_data)
summary(model)

# Calculate confidence intervals
confint(model, level = 0.95)`,
    
    pythonSnippet: `import numpy as np
import matplotlib.pyplot as plt
from scipy import stats

# Generate sample data
x = np.random.normal(0, 1, 1000)
y = 2 * x + np.random.normal(0, 2, 1000)

# Calculate correlation
r, p = stats.pearsonr(x, y)
print(f"Correlation: {r:.4f}, p-value: {p:.4f}")`,
    
    experimentData: `# Experimental Conditions
Temperature: 37°C ± 0.5°C
Pressure: 1 atm
pH: 7.4
Incubation time: 24h

# Treatment Groups
Control (n=24): standard medium
Treatment A (n=24): medium + compound X (10 μM)
Treatment B (n=24): medium + compound Y (10 μM)
Treatment C (n=24): medium + compounds X & Y (10 μM each)`
  };

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
              Enhance your research workflow with intelligent management of scientific
              literature, experimental data, and analytical code.
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
                Watch Demo <FlaskConical className="w-4 h-4" />
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
              <h2 className="text-3xl font-bold mb-4">Research Workflow Enhancement</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Tools designed specifically for scientific research processes
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

          {/* Research Data Organization */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Research Data Organization</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                See how CopyClipCloud intelligently organizes your research materials
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                className="glass-panel p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">Literature Citations</h3>
                <DocCodeBlock
                  code={researchSnippets.citation}
                  language="text"
                  title="Citation Example"
                  showLineNumbers={false}
                />
                
                <div className="mt-6">
                  <h4 className="text-lg font-medium mb-3">Citation Features</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-0.5 rounded-full bg-white/10 flex-shrink-0">
                        <Check className="w-4 h-4 text-white/70" />
                      </div>
                      <p className="text-gray-300">Automatic format detection (APA, MLA, Chicago)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-0.5 rounded-full bg-white/10 flex-shrink-0">
                        <Check className="w-4 h-4 text-white/70" />
                      </div>
                      <p className="text-gray-300">One-click format conversion between styles</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-0.5 rounded-full bg-white/10 flex-shrink-0">
                        <Check className="w-4 h-4 text-white/70" />
                      </div>
                      <p className="text-gray-300">DOI extraction and validation</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="glass-panel p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4">Statistical Code</h3>
                <DocCodeBlock
                  code={researchSnippets.rCode}
                  language="r"
                  title="R Statistical Analysis"
                  showLineNumbers={true}
                />
                
                <div className="mt-6">
                  <h4 className="text-lg font-medium mb-3">Code Management Features</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-0.5 rounded-full bg-white/10 flex-shrink-0">
                        <Check className="w-4 h-4 text-white/70" />
                      </div>
                      <p className="text-gray-300">Language-specific syntax highlighting</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-0.5 rounded-full bg-white/10 flex-shrink-0">
                        <Check className="w-4 h-4 text-white/70" />
                      </div>
                      <p className="text-gray-300">Code snippet categorization by analysis type</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-0.5 rounded-full bg-white/10 flex-shrink-0">
                        <Check className="w-4 h-4 text-white/70" />
                      </div>
                      <p className="text-gray-300">Searchable by function or package names</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="glass-panel p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4">Experimental Data</h3>
                <DocCodeBlock
                  code={researchSnippets.experimentData}
                  language="text"
                  title="Experimental Protocol"
                  showLineNumbers={false}
                />
                
                <div className="mt-6">
                  <h4 className="text-lg font-medium mb-3">Experiment Tracking Features</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-0.5 rounded-full bg-white/10 flex-shrink-0">
                        <Check className="w-4 h-4 text-white/70" />
                      </div>
                      <p className="text-gray-300">Automatic experiment parameter extraction</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-0.5 rounded-full bg-white/10 flex-shrink-0">
                        <Check className="w-4 h-4 text-white/70" />
                      </div>
                      <p className="text-gray-300">Protocol version tracking</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-0.5 rounded-full bg-white/10 flex-shrink-0">
                        <Check className="w-4 h-4 text-white/70" />
                      </div>
                      <p className="text-gray-300">Treatment group organization</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="glass-panel p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4">Python Analysis</h3>
                <DocCodeBlock
                  code={researchSnippets.pythonSnippet}
                  language="python"
                  title="Python Data Analysis"
                  showLineNumbers={true}
                />
                
                <div className="mt-6">
                  <h4 className="text-lg font-medium mb-3">Python Integration Features</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-0.5 rounded-full bg-white/10 flex-shrink-0">
                        <Check className="w-4 h-4 text-white/70" />
                      </div>
                      <p className="text-gray-300">Import detection for package suggestions</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-0.5 rounded-full bg-white/10 flex-shrink-0">
                        <Check className="w-4 h-4 text-white/70" />
                      </div>
                      <p className="text-gray-300">Visualization code organization</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-0.5 rounded-full bg-white/10 flex-shrink-0">
                        <Check className="w-4 h-4 text-white/70" />
                      </div>
                      <p className="text-gray-300">Data analysis snippet libraries</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Research Workflows */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Research Workflows</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                See how CopyClipCloud integrates into your research processes
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
                    {workflow.points.map((point, i) => (
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

          {/* Research Disciplines */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">For All Research Disciplines</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Supporting researchers across diverse scientific fields
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  icon: FlaskConical, 
                  title: "Life Sciences", 
                  description: "Organize protocols, sequence data, and experimental results" 
                },
                { 
                  icon: AtomIcon, 
                  title: "Physical Sciences", 
                  description: "Track measurements, equations, and computational models" 
                },
                { 
                  icon: Brain, 
                  title: "Social Sciences", 
                  description: "Manage study designs, survey data, and statistical analyses" 
                },
                { 
                  icon: ChartBar, 
                  title: "Data Science", 
                  description: "Organize code snippets, visualizations, and analysis workflows" 
                },
                { 
                  icon: Database, 
                  title: "Computational Research", 
                  description: "Store algorithms, simulations, and computational parameters" 
                },
                { 
                  icon: BookOpen, 
                  title: "Academic Writing", 
                  description: "Manage citations, references, and literature excerpts" 
                }
              ].map((discipline, i) => (
                <motion.div
                  key={i}
                  className="glass-panel p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-xl bg-white/5 mb-4">
                      <discipline.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{discipline.title}</h3>
                    <p className="text-gray-400">{discipline.description}</p>
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
                New features designed specifically for scientific researchers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Reference Management Integration", description: "Direct integration with Zotero, Mendeley, and EndNote" },
                { title: "Data Visualization Templates", description: "Pre-configured visualization code for common research plot types" },
                { title: "Collaborative Research Notes", description: "Share and collaborate on research materials with team members" }
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
              <h2 className="text-3xl font-bold mb-6">Enhance Your Research Workflow</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join thousands of researchers who have optimized their workflow with CopyClipCloud.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-modern inline-flex items-center gap-2 bg-white text-black hover:bg-opacity-90">
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-3 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/5 transition-all">
                  Academic Discount
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

export default ScienceCase;
