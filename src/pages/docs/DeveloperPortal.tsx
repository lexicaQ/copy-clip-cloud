
import React, { useState } from "react";
import { motion } from "framer-motion";
import DocLayout from "./DocLayout";
import DocCodeBlock from "@/components/docs/DocCodeBlock";
import { 
  Key, 
  Plus, 
  MoreHorizontal, 
  Copy, 
  Bell, 
  AlertTriangle, 
  Check, 
  X, 
  RefreshCw,
  Shield,
  Clock 
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Types for API Keys
interface ApiKey {
  id: string;
  name: string;
  key: string;
  created: string;
  lastUsed: string | null;
  status: "active" | "inactive";
  environment: "production" | "development" | "test";
  permissions: string[];
  usage: {
    total: number;
    rate: number;
    limit: number;
  };
}

// Mock data for API Keys
const mockApiKeys: ApiKey[] = [
  {
    id: "key_1a2b3c4d5e6f",
    name: "Production API Key",
    key: "cc_live_AbCdEfGhIjKlMnOpQrStUvWxYz1234567890",
    created: "2023-08-15T10:30:00Z",
    lastUsed: "2023-09-01T15:45:23Z",
    status: "active",
    environment: "production",
    permissions: ["read", "write", "manage_templates"],
    usage: {
      total: 12845,
      rate: 32,
      limit: 100
    }
  },
  {
    id: "key_7g8h9i0j1k2l",
    name: "Development Testing",
    key: "cc_test_ZyXwVuTsRqPoNmLkJiHgFeDcBa0987654321",
    created: "2023-07-22T08:15:30Z",
    lastUsed: "2023-08-30T12:10:15Z",
    status: "active",
    environment: "development",
    permissions: ["read", "write", "manage_templates", "admin"],
    usage: {
      total: 4562,
      rate: 15,
      limit: 100
    }
  },
  {
    id: "key_3m4n5o6p7q8r",
    name: "Test Environment",
    key: "cc_test_AbCdEfGhIjKlMnOpQrStUvWxYz0987654321",
    created: "2023-09-05T14:20:10Z",
    lastUsed: null,
    status: "inactive",
    environment: "test",
    permissions: ["read", "write"],
    usage: {
      total: 0,
      rate: 0,
      limit: 50
    }
  }
];

const DeveloperPortal = () => {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>(mockApiKeys);
  const [showNewKeyModal, setShowNewKeyModal] = useState(false);
  const [newKeyName, setNewKeyName] = useState("");
  const [newKeyEnvironment, setNewKeyEnvironment] = useState<"production" | "development" | "test">("development");
  const [newKeyPermissions, setNewKeyPermissions] = useState<string[]>(["read", "write"]);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [newKeyCreated, setNewKeyCreated] = useState<ApiKey | null>(null);

  // Function to handle copying API key
  const handleCopyKey = (key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Function to create a new API key
  const handleCreateKey = () => {
    if (!newKeyName.trim()) return;
    
    const newKey: ApiKey = {
      id: `key_${Math.random().toString(36).substring(2, 15)}`,
      name: newKeyName,
      key: `cc_${newKeyEnvironment === 'production' ? 'live' : 'test'}_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`,
      created: new Date().toISOString(),
      lastUsed: null,
      status: "active",
      environment: newKeyEnvironment,
      permissions: newKeyPermissions,
      usage: {
        total: 0,
        rate: 0,
        limit: newKeyEnvironment === 'production' ? 100 : 50
      }
    };
    
    setApiKeys([...apiKeys, newKey]);
    setNewKeyCreated(newKey);
    setNewKeyName("");
    setNewKeyEnvironment("development");
    setNewKeyPermissions(["read", "write"]);
    setShowNewKeyModal(false);
  };

  // Function to toggle key status
  const toggleKeyStatus = (id: string) => {
    setApiKeys(apiKeys.map(key => 
      key.id === id ? 
        { ...key, status: key.status === 'active' ? 'inactive' : 'active' } 
        : key
    ));
  };

  // Function to revoke key
  const regenerateKey = (id: string) => {
    setApiKeys(apiKeys.map(key => 
      key.id === id ? 
        { 
          ...key, 
          key: `cc_${key.environment === 'production' ? 'live' : 'test'}_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`,
          created: new Date().toISOString(),
          lastUsed: null
        } 
        : key
    ));
  };

  return (
    <DocLayout 
      title="Developer Portal" 
      icon={Key}
      description="Manage your API keys and access settings"
    >
      <div className="space-y-8">
        {/* API Key Management Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">API Keys</h2>
            <Button 
              onClick={() => setShowNewKeyModal(true)}
              className="bg-white text-black hover:bg-gray-200 transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create New Key
            </Button>
          </div>

          {/* API Keys Table */}
          <div className="glass-panel p-0 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-white/10 bg-white/5">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">Key</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">Environment</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">Created</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-white/70">Usage</th>
                    <th className="px-6 py-4 text-right text-sm font-medium text-white/70">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {apiKeys.map((apiKey) => (
                    <tr key={apiKey.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-sm">
                        <div className="font-medium">{apiKey.name}</div>
                        <div className="text-xs text-white/50 mt-1">
                          {apiKey.permissions.join(", ")}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center">
                          <div className="font-mono">
                            {apiKey.key.substring(0, 12)}...
                          </div>
                          <button 
                            onClick={() => handleCopyKey(apiKey.key)}
                            className="ml-2 p-1 text-white/50 hover:text-white transition-colors rounded-md hover:bg-white/10"
                          >
                            {copiedKey === apiKey.key ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          apiKey.environment === 'production' 
                            ? 'bg-white/10 text-white' 
                            : apiKey.environment === 'development'
                            ? 'bg-white/5 text-white/80'
                            : 'bg-white/5 text-white/60'
                        }`}>
                          {apiKey.environment}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-white/70">
                        {new Date(apiKey.created).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          apiKey.status === 'active' 
                            ? 'bg-white/10 text-white' 
                            : 'bg-white/5 text-white/60'
                        }`}>
                          {apiKey.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center">
                          <div className="w-full bg-white/10 rounded-full h-2 mr-2 overflow-hidden">
                            <div 
                              className="bg-white h-full rounded-full" 
                              style={{ 
                                width: `${Math.min(100, (apiKey.usage.rate / apiKey.usage.limit) * 100)}%` 
                              }}
                            />
                          </div>
                          <span className="text-xs text-white/70">
                            {apiKey.usage.rate}/{apiKey.usage.limit}
                          </span>
                        </div>
                        <div className="text-xs text-white/50 mt-1">
                          Total: {apiKey.usage.total} requests
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={() => toggleKeyStatus(apiKey.id)}
                            className="p-1.5 text-white/70 hover:text-white transition-colors rounded-md hover:bg-white/10"
                            title={apiKey.status === 'active' ? 'Deactivate' : 'Activate'}
                          >
                            {apiKey.status === 'active' ? (
                              <X className="w-4 h-4" />
                            ) : (
                              <Check className="w-4 h-4" />
                            )}
                          </button>
                          <button
                            onClick={() => regenerateKey(apiKey.id)}
                            className="p-1.5 text-white/70 hover:text-white transition-colors rounded-md hover:bg-white/10"
                            title="Regenerate"
                          >
                            <RefreshCw className="w-4 h-4" />
                          </button>
                          <button
                            className="p-1.5 text-white/70 hover:text-white transition-colors rounded-md hover:bg-white/10"
                            title="More options"
                          >
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Usage Statistics Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-white/60">Total API Requests</p>
                  <h3 className="text-2xl font-semibold mt-1">17,407</h3>
                </div>
                <div className="p-2 bg-white/5 rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full bg-white/10 rounded-full h-2 mb-1 overflow-hidden">
                  <div className="bg-white h-full rounded-full" style={{ width: '65%' }} />
                </div>
                <div className="flex justify-between text-xs text-white/50">
                  <span>Last 30 days</span>
                  <span>+23% from previous</span>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-white/60">Average Response Time</p>
                  <h3 className="text-2xl font-semibold mt-1">87ms</h3>
                </div>
                <div className="p-2 bg-white/5 rounded-lg">
                  <RefreshCw className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full bg-white/10 rounded-full h-2 mb-1 overflow-hidden">
                  <div className="bg-white h-full rounded-full" style={{ width: '20%' }} />
                </div>
                <div className="flex justify-between text-xs text-white/50">
                  <span>Last 30 days</span>
                  <span>-12% from previous</span>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-white/60">Success Rate</p>
                  <h3 className="text-2xl font-semibold mt-1">99.7%</h3>
                </div>
                <div className="p-2 bg-white/5 rounded-lg">
                  <Shield className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full bg-white/10 rounded-full h-2 mb-1 overflow-hidden">
                  <div className="bg-white h-full rounded-full" style={{ width: '99%' }} />
                </div>
                <div className="flex justify-between text-xs text-white/50">
                  <span>Last 30 days</span>
                  <span>+0.3% from previous</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* API Key Requirements Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">Authentication Requirements</h2>
          <div className="glass-panel p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">API Key Authentication</h3>
                <p className="text-white/70 mb-4">
                  All API requests require authentication using your API key. Include the key in the request header:
                </p>
                <DocCodeBlock 
                  code={`Authorization: Bearer YOUR_API_KEY`} 
                  language="bash"
                />
                <div className="mt-4 flex items-center text-sm bg-white/5 p-3 rounded-lg">
                  <AlertTriangle className="w-4 h-4 mr-2 text-white/70" />
                  <span className="text-white/70">
                    Never expose your API keys in client-side code. Always make API calls from your server.
                  </span>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Rate Limits</h3>
                <p className="text-white/70 mb-4">
                  API calls are subject to rate limiting to ensure service stability:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-white/70">
                  <li>Production keys: 100 requests per minute</li>
                  <li>Development keys: 50 requests per minute</li>
                  <li>Test keys: 50 requests per minute</li>
                </ul>
                <p className="text-white/70 mt-4">
                  Rate limit headers are included in all API responses:
                </p>
                <DocCodeBlock 
                  code={`X-RateLimit-Limit: 100
X-RateLimit-Remaining: 98
X-RateLimit-Reset: 1621784382`} 
                  language="bash"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* API Key Best Practices */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">Security Best Practices</h2>
          <div className="glass-panel p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-center text-lg font-medium">
                  <Shield className="w-5 h-5 mr-2" />
                  <h3>Store Securely</h3>
                </div>
                <p className="text-white/70">
                  Never hardcode API keys in your application code. Use environment variables or secure secrets management.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-lg font-medium">
                  <Key className="w-5 h-5 mr-2" />
                  <h3>Rotate Regularly</h3>
                </div>
                <p className="text-white/70">
                  Regenerate your API keys periodically, especially for production systems. We recommend every 90 days.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-lg font-medium">
                  <Bell className="w-5 h-5 mr-2" />
                  <h3>Monitor Usage</h3>
                </div>
                <p className="text-white/70">
                  Regularly review your API key usage and set up alerts for unusual patterns that might indicate compromise.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Quick Start Guide */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
          <div className="glass-panel p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">1. Create an API Key</h3>
                <p className="text-white/70 mb-4">
                  Click the "Create New Key" button above to generate your first API key.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">2. Make Your First Request</h3>
                <p className="text-white/70 mb-4">
                  Use your new API key to make a request to our API:
                </p>
                <DocCodeBlock 
                  code={`curl -X GET "https://api.copyclipcloud.com/v1/clipboard" \\
  -H "Authorization: Bearer YOUR_API_KEY"`} 
                  language="bash"
                  title="cURL"
                />
                
                <DocCodeBlock 
                  code={`// Using fetch with JavaScript
const fetchClipboardItems = async () => {
  const response = await fetch('https://api.copyclipcloud.com/v1/clipboard', {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  });
  
  const data = await response.json();
  return data;
};`} 
                  language="javascript"
                  title="JavaScript"
                  className="mt-4"
                />

                <DocCodeBlock 
                  code={`# Using requests with Python
import requests

def fetch_clipboard_items():
    headers = {
        'Authorization': 'Bearer YOUR_API_KEY'
    }
    
    response = requests.get('https://api.copyclipcloud.com/v1/clipboard', headers=headers)
    return response.json()`} 
                  language="python"
                  title="Python"
                  className="mt-4"
                />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">3. Explore the Documentation</h3>
                <p className="text-white/70 mb-4">
                  Check out our <a href="/docs/api-documentation" className="text-white underline hover:no-underline">API Documentation</a> for detailed information on all available endpoints and features.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Modal for creating new API key */}
      {showNewKeyModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="glass-panel p-6 max-w-lg w-full"
          >
            <h2 className="text-xl font-bold mb-4">Create New API Key</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-1">Key Name</label>
                <input
                  type="text"
                  value={newKeyName}
                  onChange={(e) => setNewKeyName(e.target.value)}
                  placeholder="My API Key"
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-white/30"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white/70 mb-1">Environment</label>
                <select
                  value={newKeyEnvironment}
                  onChange={(e) => setNewKeyEnvironment(e.target.value as any)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-white/30"
                >
                  <option value="production">Production</option>
                  <option value="development">Development</option>
                  <option value="test">Test</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white/70 mb-1">Permissions</label>
                <div className="grid grid-cols-2 gap-2">
                  {["read", "write", "manage_templates", "admin"].map(permission => (
                    <div key={permission} className="flex items-center">
                      <input
                        type="checkbox"
                        id={permission}
                        checked={newKeyPermissions.includes(permission)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setNewKeyPermissions([...newKeyPermissions, permission]);
                          } else {
                            setNewKeyPermissions(newKeyPermissions.filter(p => p !== permission));
                          }
                        }}
                        className="h-4 w-4 border-white/30 focus:ring-white/30"
                      />
                      <label htmlFor={permission} className="ml-2 text-sm text-white/70">
                        {permission.charAt(0).toUpperCase() + permission.slice(1).replace('_', ' ')}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <Button 
                onClick={() => setShowNewKeyModal(false)}
                variant="outline"
                className="border-white/30 text-white/70 hover:bg-white/5"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleCreateKey}
                className="bg-white text-black hover:bg-gray-200 transition-colors"
                disabled={!newKeyName.trim()}
              >
                Create Key
              </Button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Modal for displaying newly created API key */}
      {newKeyCreated && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="glass-panel p-6 max-w-lg w-full"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">New API Key Created</h2>
              <Button 
                onClick={() => setNewKeyCreated(null)}
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-black/30 p-4 rounded-md mb-4">
              <div className="mb-2 text-sm text-white/70">
                Your API key has been created. Make sure to copy it now, you won't be able to see it again!
              </div>
              <div className="font-mono text-sm bg-white/5 p-3 rounded-md flex items-center justify-between">
                <span className="truncate">{newKeyCreated.key}</span>
                <button 
                  onClick={() => handleCopyKey(newKeyCreated.key)}
                  className="ml-2 p-1 text-white/70 hover:text-white transition-colors flex-shrink-0"
                >
                  {copiedKey === newKeyCreated.key ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
            
            <div className="flex items-center text-sm bg-white/5 p-3 rounded-lg mb-6">
              <AlertTriangle className="w-4 h-4 mr-2 text-white/70 flex-shrink-0" />
              <span className="text-white/70">
                Store this API key securely! For security reasons, we won't show it again. If you lose it, you'll need to generate a new one.
              </span>
            </div>
            
            <div className="flex justify-end">
              <Button 
                onClick={() => setNewKeyCreated(null)}
                className="bg-white text-black hover:bg-gray-200 transition-colors"
              >
                I've Copied My Key
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </DocLayout>
  );
};

export default DeveloperPortal;
