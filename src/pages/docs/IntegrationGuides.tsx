
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Code, ExternalLink, FileText } from "lucide-react";

const IntegrationGuides = () => {
  const integrations = [
    {
      title: "macOS Applications",
      description: "Integrate CopyClipCloud with native macOS applications",
      steps: [
        "Set up the Swift SDK",
        "Implement clipboard monitoring",
        "Handle user authorization",
        "Add sync capabilities",
        "Implement error handling"
      ],
      difficulty: "Intermediate",
      time: "2-3 hours"
    },
    {
      title: "Web Applications",
      description: "Add CopyClipCloud functionality to web applications",
      steps: [
        "Install the JavaScript SDK",
        "Configure API authentication",
        "Implement clipboard access",
        "Add UI components",
        "Handle browser permissions"
      ],
      difficulty: "Beginner",
      time: "1-2 hours"
    },
    {
      title: "Command Line Tools",
      description: "Build CLI utilities that leverage CopyClipCloud",
      steps: [
        "Set up Python SDK",
        "Create command structure",
        "Implement clipboard operations",
        "Add user configuration",
        "Package for distribution"
      ],
      difficulty: "Intermediate",
      time: "2-4 hours"
    },
    {
      title: "Third-Party Services",
      description: "Connect CopyClipCloud to other productivity tools",
      steps: [
        "Set up OAuth authentication",
        "Implement webhook handlers",
        "Create data transformation logic",
        "Set up sync scheduling",
        "Add user preferences"
      ],
      difficulty: "Advanced",
      time: "4-6 hours"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            to="/docs" 
            className="inline-flex items-center text-sm text-white/70 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Documentation
          </Link>
          
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-lg bg-white/10 mr-3">
              <ExternalLink className="w-5 h-5" />
            </div>
            <h1 className="text-3xl font-bold">Integration Guides</h1>
          </div>
          
          <div className="glass-panel p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Building with CopyClipCloud</h2>
            
            <p className="text-gray-300 mb-8">
              These step-by-step guides will help you integrate CopyClipCloud functionality into different types of applications and services.
              Each guide provides detailed instructions, code samples, and best practices to ensure a smooth integration process.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {integrations.map((integration, index) => (
                <Link 
                  key={index} 
                  to={`#${integration.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="glass-panel bg-white/5 p-6 hover:bg-white/10 transition-duration-300"
                >
                  <h3 className="text-xl font-medium mb-2">{integration.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{integration.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <div className="flex items-center mr-4">
                      <span className="mr-1">Difficulty:</span>
                      <span className={`font-medium ${
                        integration.difficulty === "Beginner" ? "text-green-400" : 
                        integration.difficulty === "Intermediate" ? "text-yellow-400" : "text-red-400"
                      }`}>{integration.difficulty}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-1">Time:</span>
                      <span className="font-medium text-white">{integration.time}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1 mb-4">
                    {integration.steps.map((step, idx) => (
                      <div key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2"></span>
                        {step}
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-white text-sm font-medium hover:underline inline-flex items-center mt-2">
                    View Guide
                    <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4">Web Application Integration Example</h3>
              
              <div className="bg-black/30 p-4 rounded-lg font-mono text-sm mb-6">
                <pre className="text-white overflow-x-auto">
{`// 1. Install the SDK
npm install copyclipcloud-sdk

// 2. Initialize the client
import { CopyClipCloud } from 'copyclipcloud-sdk';

const client = new CopyClipCloud({
  apiKey: 'YOUR_API_KEY',
  // Optional configuration
  timeout: 10000,
  retries: 3
});

// 3. Implement clipboard monitoring
function startClipboardMonitoring() {
  // Add event listener for clipboard changes
  document.addEventListener('copy', async (event) => {
    // Get selected text
    const selection = document.getSelection().toString();
    
    if (selection) {
      try {
        // Save to CopyClipCloud
        await client.clipboard.add({
          content: selection,
          source: window.location.href,
          format: 'text'
        });
        console.log('Saved selection to CopyClipCloud');
      } catch (error) {
        console.error('Error saving to CopyClipCloud:', error);
      }
    }
  });
}`}
                </pre>
              </div>
              
              <p className="text-gray-300 mb-4">
                This example shows how to integrate CopyClipCloud with a web application to monitor and capture text selections.
                The complete guide includes additional steps for:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-6">
                <li>Adding UI components to display clipboard history</li>
                <li>Implementing user authentication</li>
                <li>Handling browser permissions</li>
                <li>Managing offline functionality</li>
                <li>Adding keyboard shortcuts</li>
              </ul>
              
              <div className="flex items-center">
                <Link to="#full-web-guide" className="inline-flex items-center px-4 py-2 bg-white text-black rounded-md font-medium">
                  <FileText className="w-4 h-4 mr-2" />
                  Read Full Web Integration Guide
                </Link>
              </div>
            </div>
            
            <h3 className="text-xl font-medium mb-4">Common Integration Patterns</h3>
            <div className="glass-panel bg-white/5 p-6">
              <p className="text-gray-300 mb-4">
                These patterns are useful across different types of integrations:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Clipboard Monitoring</h4>
                  <p className="text-gray-400 text-sm">
                    Implement clipboard change detection and automatic syncing across applications
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">User Authentication</h4>
                  <p className="text-gray-400 text-sm">
                    Set up secure authentication flows for accessing clipboard data
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Conflict Resolution</h4>
                  <p className="text-gray-400 text-sm">
                    Handle synchronization conflicts when multiple devices update the same clipboard items
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Data Transformation</h4>
                  <p className="text-gray-400 text-sm">
                    Process clipboard data for different formats and applications
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/docs/sdk" className="glass-panel p-6 hover:bg-white/5 transition-colors">
              <div className="flex items-center mb-3">
                <Code className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-medium">SDK & Libraries</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Return to SDK documentation
              </p>
            </Link>
            
            <Link to="/docs/api-documentation" className="glass-panel p-6 hover:bg-white/5 transition-colors">
              <div className="flex items-center mb-3">
                <Code className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-medium">API Documentation</h3>
              </div>
              <p className="text-gray-400 text-sm">
                View the complete API reference
              </p>
            </Link>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default IntegrationGuides;
