
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, FlaskConical, FileText, Database } from "lucide-react";

const ScienceCase = () => {
  const features = [
    {
      icon: FileText,
      title: "Research Citations",
      description: "Store and organize citations and references from scientific literature"
    },
    {
      icon: FlaskConical,
      title: "Experiment Data",
      description: "Keep track of experimental parameters and results"
    },
    {
      icon: Database,
      title: "Statistical Analysis",
      description: "Save snippets of statistical analyses and data interpretations"
    },
    {
      icon: BookOpen,
      title: "Literature Excerpts",
      description: "Organize important quotes and excerpts from scientific papers"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-24 px-4 md:px-6">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl font-bold mb-4 text-gradient"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Scientific Research
          </motion.h1>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Organize your research data and literature with intelligent clipboard management
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-panel p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Science Preview Section */}
        <motion.div 
          className="glass-panel p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Research Data Organization</h3>
            <p className="text-gray-400">
              Access your research materials and data seamlessly across devices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-sm text-white/70 mb-2">Literature Citation</div>
              <pre className="text-sm text-white/90 font-mono overflow-x-auto">
                {`Smith, J., et al. (2024). "The Impact of AI on 
Modern Research Methodologies." Journal of 
Scientific Innovation, 42(3), 256-270.
DOI: 10.1234/jsi.2024.42.3.256`}
              </pre>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-sm text-white/70 mb-2">Experiment Results</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                  <span>Control Group (n=50)</span>
                  <span className="text-white/70">Mean: 23.4, SD: 4.2</span>
                </div>
                <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                  <span>Experimental Group A (n=48)</span>
                  <span className="text-white/70">Mean: 28.7, SD: 3.9</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Experimental Group B (n=52)</span>
                  <span className="text-white/70">Mean: 31.2, SD: 4.5</span>
                </div>
                <div className="mt-2 text-sm text-green-400">
                  p-value: 0.0032 (statistically significant)
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScienceCase;
