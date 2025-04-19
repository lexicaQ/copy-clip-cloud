
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, FileText, UserCheck, BarChart4 } from "lucide-react";

const BusinessCase = () => {
  const features = [
    {
      icon: FileText,
      title: "Document Snippets",
      description: "Save and organize important parts of business documents and reports"
    },
    {
      icon: UserCheck,
      title: "Contact Information",
      description: "Quick access to frequently used contact details and information"
    },
    {
      icon: BarChart4,
      title: "Sales Data",
      description: "Store key metrics and sales figures for quick reference in meetings"
    },
    {
      icon: Briefcase,
      title: "Meeting Notes",
      description: "Organize action items and important points from business meetings"
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
            Business Efficiency
          </motion.h1>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Streamline your business communication with intelligent information management
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

        {/* Business Preview Section */}
        <motion.div 
          className="glass-panel p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Business Data Organization</h3>
            <p className="text-gray-400">
              Keep your important business information organized and accessible anytime
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-sm text-white/70 mb-2">Quarterly Sales Data</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Q1 2025</span>
                  <span className="text-green-400">$1,245,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Q2 2025</span>
                  <span className="text-green-400">$1,380,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Q3 2025</span>
                  <span className="text-green-400">$1,420,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Q4 2025 (Projected)</span>
                  <span className="text-blue-400">$1,500,000</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-sm text-white/70 mb-2">Key Contacts</div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                  <span>Jane Smith, CEO</span>
                  <span className="text-white/70">j.smith@example.com</span>
                </div>
                <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                  <span>Mark Johnson, CFO</span>
                  <span className="text-white/70">m.johnson@example.com</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Sarah Williams, CMO</span>
                  <span className="text-white/70">s.williams@example.com</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BusinessCase;
