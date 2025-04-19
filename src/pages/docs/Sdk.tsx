
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Code, FileCode, Download } from "lucide-react";

const Sdk = () => {
  const sdkList = [
    {
      language: "JavaScript",
      description: "Official SDK for Node.js and browser applications",
      features: ["Universal JavaScript support", "Promise-based API", "TypeScript typings", "Full API coverage"],
      installation: "npm install copyclipcloud-sdk",
      version: "1.2.3",
      license: "MIT"
    },
    {
      language: "Python",
      description: "Official Python SDK for CopyClipCloud",
      features: ["Python 3.6+ support", "Async/await compatibility", "Detailed documentation", "CLI integration"],
      installation: "pip install copyclipcloud",
      version: "0.9.8",
      license: "MIT"
    },
    {
      language: "Swift",
      description: "Native SDK for iOS, iPadOS, and macOS applications",
      features: ["SwiftUI integration", "Clipboard monitoring", "Background sync", "Concurrency support"],
      installation: "Swift Package Manager: github.com/copyclipcloud/swift-sdk",
      version: "2.0.1",
      license: "MIT"
    },
    {
      language: "Ruby",
      description: "Ruby gem for CopyClipCloud integration",
      features: ["Rails integration", "OAuth support", "Comprehensive error handling", "Webhook support"],
      installation: "gem install copyclipcloud",
      version: "0.5.2",
      license: "MIT"
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
              <Code className="w-5 h-5" />
            </div>
            <h1 className="text-3xl font-bold">SDK & Libraries</h1>
          </div>
          
          <div className="glass-panel p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">CopyClipCloud Developer Tools</h2>
            
            <p className="text-gray-300 mb-6">
              Integrate CopyClipCloud into your applications with our official Software Development Kits (SDKs) and libraries.
              These tools provide easy-to-use interfaces for interacting with the CopyClipCloud API in your preferred programming language.
            </p>
            
            <div className="space-y-8">
              {sdkList.map((sdk, index) => (
                <div key={index} className="glass-panel bg-white/5 p-6">
                  <h3 className="text-xl font-medium mb-3">{sdk.language} SDK</h3>
                  <p className="text-gray-300 mb-4">{sdk.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-sm text-gray-400 mb-2">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                      {sdk.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-medium text-sm text-gray-400 mb-1">Installation</h4>
                      <div className="bg-black/30 p-2 rounded text-sm font-mono">
                        {sdk.installation}
                      </div>
                    </div>
                    <div className="flex space-x-6">
                      <div>
                        <h4 className="font-medium text-sm text-gray-400 mb-1">Version</h4>
                        <div className="text-gray-300 text-sm">{sdk.version}</div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm text-gray-400 mb-1">License</h4>
                        <div className="text-gray-300 text-sm">{sdk.license}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={`#${sdk.language.toLowerCase()}-documentation`}
                      className="inline-flex items-center text-sm bg-white/10 hover:bg-white/20 transition-colors px-3 py-1.5 rounded-md"
                    >
                      <FileCode className="w-4 h-4 mr-2" />
                      Documentation
                    </a>
                    <a 
                      href={`#download-${sdk.language.toLowerCase()}`}
                      className="inline-flex items-center text-sm bg-white/10 hover:bg-white/20 transition-colors px-3 py-1.5 rounded-md"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-panel p-8 mb-8">
            <h3 className="text-xl font-medium mb-6">Sample Code</h3>
            
            <div className="bg-black/30 p-4 rounded font-mono text-sm mb-6">
              <div className="flex items-center mb-2">
                <span className="text-blue-400 mr-2">// JavaScript example - Get clipboard history</span>
              </div>
              <pre className="text-white overflow-x-auto">
{`import { CopyClipCloud } from 'copyclipcloud-sdk';

const client = new CopyClipCloud({
  apiKey: 'YOUR_API_KEY'
});

async function getRecentClipboardItems() {
  try {
    const { items } = await client.clipboard.list({
      limit: 10,
      sort: 'createdAt:desc'
    });
    
    console.log(\`Found \${items.length} recent clipboard items\`);
    return items;
  } catch (error) {
    console.error('Error fetching clipboard items:', error);
  }
}`}
              </pre>
            </div>
            
            <div className="bg-black/30 p-4 rounded font-mono text-sm">
              <div className="flex items-center mb-2">
                <span className="text-green-400 mr-2">// Swift example - Add to clipboard</span>
              </div>
              <pre className="text-white overflow-x-auto">
{`import CopyClipCloudSDK

let client = CopyClipCloud(apiKey: "YOUR_API_KEY")

func addToClipboard(content: String) {
    client.clipboard.add(
        content: content,
        format: .text,
        tags: ["imported", "swift"]
    ) { result in
        switch result {
        case .success(let item):
            print("Added item with ID: \\(item.id)")
        case .failure(let error):
            print("Error adding to clipboard: \\(error)")
        }
    }
}`}
              </pre>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/docs/api-documentation" className="glass-panel p-6 hover:bg-white/5 transition-colors">
              <div className="flex items-center mb-3">
                <FileCode className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-medium">API Documentation</h3>
              </div>
              <p className="text-gray-400 text-sm">
                View the complete API reference
              </p>
            </Link>
            
            <Link to="/docs/integration-guides" className="glass-panel p-6 hover:bg-white/5 transition-colors">
              <div className="flex items-center mb-3">
                <Code className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-medium">Integration Guides</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Step-by-step guides for integrating CopyClipCloud
              </p>
            </Link>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sdk;
