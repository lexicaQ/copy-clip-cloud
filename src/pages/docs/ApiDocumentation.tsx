
import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Code, Copy, Terminal, Check, ExternalLink, Search, FileJson, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ApiDocumentation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast.success("Code copied to clipboard");
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const codeExamples = [
    {
      language: "javascript",
      title: "List clipboard items",
      code: `const response = await fetch('https://api.copyclipcloud.com/v1/clipboard', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data.items);`
    },
    {
      language: "javascript",
      title: "Add a new item",
      code: `const response = await fetch('https://api.copyclipcloud.com/v1/clipboard', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    content: 'This is a new clipboard item',
    type: 'text',
    tags: ['api', 'example']
  })
});

const data = await response.json();
console.log(data.item);`
    },
    {
      language: "python",
      title: "Synchronize devices",
      code: `import requests

response = requests.post(
    'https://api.copyclipcloud.com/v1/sync',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'device_id': 'my-device-id',
        'force': True
    }
)

data = response.json()
print(data['status'])`
    }
  ];

  const apiEndpoints = [
    {
      name: "List clipboard items",
      endpoint: "GET /v1/clipboard",
      description: "Retrieves all clipboard items or filtered by query parameters",
      parameters: [
        { name: "limit", type: "integer", description: "Number of items to return (default: 50, max: 200)" },
        { name: "offset", type: "integer", description: "Pagination offset (default: 0)" },
        { name: "type", type: "string", description: "Filter by content type (text, image, file, etc.)" },
        { name: "search", type: "string", description: "Search term to filter items" },
        { name: "tag", type: "string", description: "Filter items by tag" },
      ]
    },
    {
      name: "Get item by ID",
      endpoint: "GET /v1/clipboard/:id",
      description: "Retrieves a specific clipboard item by its ID",
      parameters: [
        { name: "id", type: "string", description: "The ID of the clipboard item", required: true }
      ]
    },
    {
      name: "Create clipboard item",
      endpoint: "POST /v1/clipboard",
      description: "Creates a new clipboard item",
      parameters: [
        { name: "content", type: "string/base64", description: "The content of the clipboard item", required: true },
        { name: "type", type: "string", description: "The type of content (text, image, file, etc.)", required: true },
        { name: "tags", type: "array", description: "Array of tags to associate with the item" },
        { name: "folder_id", type: "string", description: "ID of the folder to place the item in" },
        { name: "expires_at", type: "timestamp", description: "When the item should expire (null for never)" }
      ]
    },
    {
      name: "Update clipboard item",
      endpoint: "PUT /v1/clipboard/:id",
      description: "Updates an existing clipboard item",
      parameters: [
        { name: "id", type: "string", description: "The ID of the clipboard item", required: true },
        { name: "content", type: "string/base64", description: "The updated content" },
        { name: "tags", type: "array", description: "Updated array of tags" },
        { name: "folder_id", type: "string", description: "Updated folder ID" },
        { name: "expires_at", type: "timestamp", description: "Updated expiration time" }
      ]
    },
    {
      name: "Delete clipboard item",
      endpoint: "DELETE /v1/clipboard/:id",
      description: "Deletes a clipboard item",
      parameters: [
        { name: "id", type: "string", description: "The ID of the clipboard item", required: true }
      ]
    },
    {
      name: "List folders",
      endpoint: "GET /v1/folders",
      description: "Retrieves all folders",
      parameters: []
    },
    {
      name: "Create folder",
      endpoint: "POST /v1/folders",
      description: "Creates a new folder",
      parameters: [
        { name: "name", type: "string", description: "Name of the folder", required: true },
        { name: "parent_id", type: "string", description: "ID of the parent folder (null for root)" },
        { name: "color", type: "string", description: "Color code for the folder" }
      ]
    },
    {
      name: "Trigger sync",
      endpoint: "POST /v1/sync",
      description: "Manually triggers synchronization across devices",
      parameters: [
        { name: "device_id", type: "string", description: "ID of the device initiating sync", required: true },
        { name: "force", type: "boolean", description: "Force full sync instead of incremental (default: false)" }
      ]
    }
  ];

  const filteredEndpoints = searchTerm 
    ? apiEndpoints.filter(endpoint => 
        endpoint.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        endpoint.endpoint.toLowerCase().includes(searchTerm.toLowerCase()) ||
        endpoint.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        endpoint.parameters.some(param => 
          param.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          param.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : apiEndpoints;

  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/docs" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Documentation
          </Link>
          
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">API Documentation</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Integrate CopyClipCloud with your applications and workflows
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="glass-panel p-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-lg bg-white/10 mr-3 flex-shrink-0">
                <Code className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold">Getting Started</h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              The CopyClipCloud API allows you to programmatically access and manage your clipboard data, create automations, 
              and integrate with your existing workflows. Follow these steps to get started:
            </p>
            
            <div className="space-y-6 mb-6">
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Get your API key</h3>
                  <p className="text-gray-400 mb-4">
                    Generate an API key from your CopyClipCloud account settings under Developer Options.
                  </p>
                  <div className="bg-black/40 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Terminal className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="text-sm text-gray-400">API Key</span>
                      </div>
                      <button 
                        className="text-gray-400 hover:text-white transition-colors"
                        onClick={() => copyToClipboard("YOUR_API_KEY", 999)}
                      >
                        {copiedIndex === 999 ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    <code className="text-gray-300 text-sm">YOUR_API_KEY</code>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Make your first API call</h3>
                  <p className="text-gray-400 mb-4">
                    Use your API key to authenticate requests to the API.
                  </p>
                  <div className="bg-black/40 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Terminal className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="text-sm text-gray-400">Example Request</span>
                      </div>
                      <button 
                        className="text-gray-400 hover:text-white transition-colors"
                        onClick={() => copyToClipboard(`curl -X GET "https://api.copyclipcloud.com/v1/clipboard" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`, 1000)}
                      >
                        {copiedIndex === 1000 ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    <code className="text-gray-300 text-sm whitespace-pre">{`curl -X GET "https://api.copyclipcloud.com/v1/clipboard" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}</code>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Use the SDK (optional)</h3>
                  <p className="text-gray-400 mb-4">
                    For easier integration, use our official SDK for your programming language.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="#javascript-sdk"
                      className="px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors flex items-center"
                    >
                      <span className="mr-2">JavaScript</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    
                    <a 
                      href="#python-sdk"
                      className="px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors flex items-center"
                    >
                      <span className="mr-2">Python</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    
                    <a 
                      href="#ruby-sdk"
                      className="px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors flex items-center"
                    >
                      <span className="mr-2">Ruby</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    
                    <a 
                      href="#go-sdk"
                      className="px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors flex items-center"
                    >
                      <span className="mr-2">Go</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg mb-6">
              <div className="flex items-center mb-2">
                <AlertCircle className="w-4 h-4 mr-2 text-white" />
                <h4 className="font-medium">API Rate Limits</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Free accounts: 60 requests per hour<br />
                Premium accounts: 1,000 requests per hour
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="pl-12 pr-4 py-4 w-full rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:ring-0 focus:outline-none transition-colors"
              placeholder="Search API endpoints..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>
          
          <Tabs defaultValue="endpoints" className="mb-10">
            <TabsList className="w-full bg-white/5 p-1">
              <TabsTrigger value="endpoints" className="flex-1">API Endpoints</TabsTrigger>
              <TabsTrigger value="examples" className="flex-1">Code Examples</TabsTrigger>
              <TabsTrigger value="authentication" className="flex-1">Authentication</TabsTrigger>
            </TabsList>
            
            <TabsContent value="endpoints" className="mt-6">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {filteredEndpoints.length > 0 ? (
                  filteredEndpoints.map((endpoint, index) => (
                    <motion.div 
                      key={endpoint.endpoint}
                      className="glass-panel p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">{endpoint.name}</h3>
                        <div className="mt-2 sm:mt-0">
                          <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-mono">
                            {endpoint.endpoint}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 mb-4">{endpoint.description}</p>
                      
                      {endpoint.parameters.length > 0 && (
                        <div>
                          <h4 className="font-medium mb-2">Parameters</h4>
                          <div className="bg-black/30 rounded-lg overflow-hidden">
                            <table className="w-full">
                              <thead>
                                <tr className="border-b border-white/10">
                                  <th className="text-left py-2 px-4 text-sm font-medium">Name</th>
                                  <th className="text-left py-2 px-4 text-sm font-medium">Type</th>
                                  <th className="text-left py-2 px-4 text-sm font-medium">Description</th>
                                  <th className="text-left py-2 px-4 text-sm font-medium">Required</th>
                                </tr>
                              </thead>
                              <tbody>
                                {endpoint.parameters.map((param) => (
                                  <tr key={param.name} className="border-b border-white/5 last:border-0">
                                    <td className="py-2 px-4 text-sm font-mono">{param.name}</td>
                                    <td className="py-2 px-4 text-sm">{param.type}</td>
                                    <td className="py-2 px-4 text-sm text-gray-400">{param.description}</td>
                                    <td className="py-2 px-4 text-sm">
                                      {param.required ? (
                                        <span className="text-white">Yes</span>
                                      ) : (
                                        <span className="text-gray-400">No</span>
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    className="glass-panel p-12 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-white/5 mx-auto mb-6 flex items-center justify-center">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-medium mb-3">No endpoints found</h3>
                    <p className="text-gray-400 mb-6">
                      We couldn't find any API endpoints matching your search
                    </p>
                    <button 
                      onClick={() => setSearchTerm("")}
                      className="px-6 py-3 bg-white/10 rounded-lg inline-flex items-center hover:bg-white/20 transition-all"
                    >
                      Show all endpoints
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="examples" className="mt-6">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {codeExamples.map((example, index) => (
                  <motion.div 
                    key={index}
                    className="glass-panel p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold">{example.title}</h3>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                        {example.language}
                      </span>
                    </div>
                    
                    <div className="bg-black/40 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <FileJson className="w-4 h-4 mr-2 text-gray-400" />
                          <span className="text-sm text-gray-400">{example.title}</span>
                        </div>
                        <button 
                          className="text-gray-400 hover:text-white transition-colors"
                          onClick={() => copyToClipboard(example.code, index)}
                        >
                          {copiedIndex === index ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      <pre className="overflow-x-auto">
                        <code className="text-gray-300 text-sm">{example.code}</code>
                      </pre>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="authentication" className="mt-6">
              <motion.div 
                className="glass-panel p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4">Authentication Methods</h3>
                
                <p className="text-gray-400 mb-6">
                  All API requests must be authenticated using one of the following methods:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">API Key Authentication (Recommended)</h4>
                    <p className="text-gray-400 mb-2">
                      Include your API key in the Authorization header of your requests:
                    </p>
                    <div className="bg-black/40 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Terminal className="w-4 h-4 mr-2 text-gray-400" />
                          <span className="text-sm text-gray-400">Header Example</span>
                        </div>
                        <button 
                          className="text-gray-400 hover:text-white transition-colors"
                          onClick={() => copyToClipboard(`Authorization: Bearer YOUR_API_KEY`, 1001)}
                        >
                          {copiedIndex === 1001 ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      <code className="text-gray-300 text-sm">Authorization: Bearer YOUR_API_KEY</code>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">OAuth 2.0 Authentication</h4>
                    <p className="text-gray-400 mb-2">
                      For third-party applications, use OAuth 2.0 to request access to a user's CopyClipCloud data:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-400 ml-4">
                      <li>Register your application in the CopyClipCloud Developer Portal</li>
                      <li>Implement OAuth 2.0 authorization code flow</li>
                      <li>Request the necessary scopes for your application</li>
                      <li>Use the access token in the Authorization header</li>
                    </ol>
                  </div>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg mt-6">
                  <div className="flex items-center mb-2">
                    <AlertCircle className="w-4 h-4 mr-2 text-white" />
                    <h4 className="font-medium">Security Best Practices</h4>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                    <li>Never share your API key or include it in client-side code</li>
                    <li>Use environment variables to store your API key</li>
                    <li>Implement IP restrictions for your API key in the Developer Portal</li>
                    <li>Regularly rotate your API keys</li>
                    <li>Only request the minimum OAuth scopes needed for your application</li>
                  </ul>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Need help with integration?</h3>
            <p className="text-gray-400 mb-6">
              Our developer support team is ready to assist you with your API integration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/docs/sdk-libraries"
                className="px-6 py-3 bg-white text-black rounded-lg inline-flex items-center hover:bg-opacity-90 transition-all"
              >
                SDK Documentation
              </a>
              <a 
                href="/contact"
                className="px-6 py-3 bg-white/10 rounded-lg inline-flex items-center hover:bg-white/20 transition-all"
              >
                Contact Developer Support
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApiDocumentation;
