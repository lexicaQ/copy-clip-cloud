
import React from "react";
import { motion } from "framer-motion";
import { Code, FileCode, Terminal, GitBranch } from "lucide-react";

const DeveloperCase = () => {
  const features = [
    {
      icon: Code,
      title: "Smart Code Snippets",
      description: "Automatically format and organize your code snippets with syntax highlighting"
    },
    {
      icon: Terminal,
      title: "Command History",
      description: "Keep track of your most used terminal commands across sessions"
    },
    {
      icon: FileCode,
      title: "API Documentation",
      description: "Store and organize API endpoints and documentation"
    },
    {
      icon: GitBranch,
      title: "Git Commands",
      description: "Quick access to your frequently used git commands"
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
            Built for Developers
          </motion.h1>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Streamline your development workflow with powerful clipboard management
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

        {/* Code Preview Section */}
        <motion.div 
          className="glass-panel p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Smart Code Organization</h3>
            <p className="text-gray-400">
              Your code snippets are automatically categorized and syntax-highlighted
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-sm text-white/70 mb-2">React Component</div>
              <pre className="text-sm text-white/90 font-mono overflow-x-auto">
                {`const Button = ({ children }) => (
  <button className="btn">
    {children}
  </button>
);`}
              </pre>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-sm text-white/70 mb-2">API Endpoint</div>
              <pre className="text-sm text-white/90 font-mono overflow-x-auto">
                {`GET /api/users/:id
Authorization: Bearer token
Content-Type: application/json`}
              </pre>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DeveloperCase;
