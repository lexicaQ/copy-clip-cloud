
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, FileCode, Code, ExternalLink } from "lucide-react";

const ApiDocumentation = () => {
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
              <FileCode className="w-5 h-5" />
            </div>
            <h1 className="text-3xl font-bold">API Documentation</h1>
          </div>
          
          <div className="glass-panel p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">CopyClipCloud API Reference</h2>
            
            <p className="text-gray-300 mb-6">
              The CopyClipCloud API allows developers to integrate clipboard functionality into their applications, 
              create custom workflows, and build extensions. This documentation provides complete reference information
              for all available endpoints and methods.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-3">Authentication</h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    All API requests require authentication using an API key:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                    <li>Generate an API key in your CopyClipCloud account settings</li>
                    <li>Include the API key in the request header</li>
                    <li>Use HTTPS for all API requests</li>
                  </ol>
                  <div className="mt-4 p-4 bg-black/30 rounded font-mono text-sm">
                    <p className="text-white">Authorization: Bearer your_api_key_here</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Core Endpoints</h3>
                <div className="glass-panel bg-white/5 p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <span className="bg-green-600 text-white px-2 py-0.5 text-xs rounded mr-2">GET</span>
                        /api/v1/clipboard
                      </h4>
                      <p className="text-gray-300 text-sm mb-2">Retrieves the clipboard history</p>
                      <div className="text-xs text-gray-400">
                        Parameters: limit, offset, search, sort
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <span className="bg-blue-600 text-white px-2 py-0.5 text-xs rounded mr-2">POST</span>
                        /api/v1/clipboard
                      </h4>
                      <p className="text-gray-300 text-sm mb-2">Adds a new item to the clipboard</p>
                      <div className="text-xs text-gray-400">
                        Request body: content, format, tags
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <span className="bg-yellow-600 text-white px-2 py-0.5 text-xs rounded mr-2">PUT</span>
                        /api/v1/clipboard/{'{id}'}
                      </h4>
                      <p className="text-gray-300 text-sm mb-2">Updates an existing clipboard item</p>
                      <div className="text-xs text-gray-400">
                        Path parameter: id
                        <br />
                        Request body: content, format, tags, pinned
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <span className="bg-red-600 text-white px-2 py-0.5 text-xs rounded mr-2">DELETE</span>
                        /api/v1/clipboard/{'{id}'}
                      </h4>
                      <p className="text-gray-300 text-sm mb-2">Deletes a clipboard item</p>
                      <div className="text-xs text-gray-400">
                        Path parameter: id
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Templates API</h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    Endpoints for managing clipboard templates:
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <span className="bg-green-600 text-white px-2 py-0.5 text-xs rounded mr-2">GET</span>
                        /api/v1/templates
                      </h4>
                      <p className="text-gray-300 text-sm">Retrieves all templates</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <span className="bg-blue-600 text-white px-2 py-0.5 text-xs rounded mr-2">POST</span>
                        /api/v1/templates
                      </h4>
                      <p className="text-gray-300 text-sm">Creates a new template</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <span className="bg-yellow-600 text-white px-2 py-0.5 text-xs rounded mr-2">PUT</span>
                        /api/v1/templates/{'{id}'}
                      </h4>
                      <p className="text-gray-300 text-sm">Updates an existing template</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <span className="bg-red-600 text-white px-2 py-0.5 text-xs rounded mr-2">DELETE</span>
                        /api/v1/templates/{'{id}'}
                      </h4>
                      <p className="text-gray-300 text-sm">Deletes a template</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Synchronization API</h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    Endpoints for managing cross-device synchronization:
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <span className="bg-green-600 text-white px-2 py-0.5 text-xs rounded mr-2">GET</span>
                        /api/v1/sync/status
                      </h4>
                      <p className="text-gray-300 text-sm">Retrieves sync status</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <span className="bg-blue-600 text-white px-2 py-0.5 text-xs rounded mr-2">POST</span>
                        /api/v1/sync
                      </h4>
                      <p className="text-gray-300 text-sm">Initiates a manual sync</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <span className="bg-green-600 text-white px-2 py-0.5 text-xs rounded mr-2">GET</span>
                        /api/v1/devices
                      </h4>
                      <p className="text-gray-300 text-sm">Lists all connected devices</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Code Examples</h3>
                <div className="glass-panel bg-white/5 p-6">
                  <p className="text-gray-300 mb-4">
                    Example implementations in various programming languages:
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">JavaScript</h4>
                    <div className="bg-black/30 p-4 rounded font-mono text-sm">
                      <pre className="text-white overflow-x-auto">
{`// Fetch clipboard history
async function getClipboardHistory() {
  const response = await fetch('https://api.copyclipcloud.com/v1/clipboard', {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  });
  
  const data = await response.json();
  return data.items;
}`}
                      </pre>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Swift</h4>
                    <div className="bg-black/30 p-4 rounded font-mono text-sm">
                      <pre className="text-white overflow-x-auto">
{`// Add item to clipboard
func addToClipboard(content: String) {
    guard let url = URL(string: "https://api.copyclipcloud.com/v1/clipboard") else { return }
    
    var request = URLRequest(url: url)
    request.httpMethod = "POST"
    request.addValue("Bearer YOUR_API_KEY", forHTTPHeaderField: "Authorization")
    request.addValue("application/json", forHTTPHeaderField: "Content-Type")
    
    let body: [String: Any] = ["content": content, "format": "text"]
    request.httpBody = try? JSONSerialization.data(withJSONObject: body)
    
    URLSession.shared.dataTask(with: request) { data, response, error in
        // Handle response
    }.resume()
}`}
                      </pre>
                    </div>
                  </div>
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
                Explore official SDKs for various programming languages
              </p>
            </Link>
            
            <Link to="/docs/advanced-usage" className="glass-panel p-6 hover:bg-white/5 transition-colors">
              <div className="flex items-center mb-3">
                <ExternalLink className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-medium">Advanced Usage</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Return to advanced usage documentation
              </p>
            </Link>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApiDocumentation;
