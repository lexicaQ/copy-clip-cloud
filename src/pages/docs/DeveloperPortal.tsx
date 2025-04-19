
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
  Clock,
  Trash2,
  Pencil,
  Eye,
  Lock 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

// Initial empty array for API Keys
const initialApiKeys: ApiKey[] = [];

const DeveloperPortal = () => {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>(initialApiKeys);
  const [showNewKeyModal, setShowNewKeyModal] = useState(false);
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState(false);
  const [showRestrictModal, setShowRestrictModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedKeyId, setSelectedKeyId] = useState<string | null>(null);
  
  const [newKeyName, setNewKeyName] = useState("");
  const [newKeyEnvironment, setNewKeyEnvironment] = useState<"production" | "development" | "test">("development");
  const [newKeyPermissions, setNewKeyPermissions] = useState<string[]>(["read", "write"]);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [newKeyCreated, setNewKeyCreated] = useState<ApiKey | null>(null);
  const [renameValue, setRenameValue] = useState("");

  const selectedKey = apiKeys.find(k => k.id === selectedKeyId) || null;

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

  // Function to regenerate key
  const handleRegenerateKey = () => {
    if (!selectedKeyId) return;
    
    setApiKeys(apiKeys.map(key => 
      key.id === selectedKeyId ? 
        { 
          ...key, 
          key: `cc_${key.environment === 'production' ? 'live' : 'test'}_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`,
          created: new Date().toISOString(),
          lastUsed: null
        } 
        : key
    ));
    
    setShowRegenerateConfirm(false);
    setSelectedKeyId(null);
  };

  // Function to delete key
  const handleDeleteKey = () => {
    if (!selectedKeyId) return;
    
    setApiKeys(apiKeys.filter(key => key.id !== selectedKeyId));
    setShowDeleteConfirm(false);
    setSelectedKeyId(null);
  };

  // Function to rename key
  const handleRenameKey = () => {
    if (!selectedKeyId || !renameValue.trim()) return;
    
    setApiKeys(apiKeys.map(key => 
      key.id === selectedKeyId ? 
        { ...key, name: renameValue } 
        : key
    ));
    
    setShowRenameModal(false);
    setSelectedKeyId(null);
    setRenameValue("");
  };

  // Open dropdown menu handlers
  const handleOpenMenu = (id: string, action: string) => {
    setSelectedKeyId(id);
    
    switch (action) {
      case 'details':
        setShowDetailsModal(true);
        break;
      case 'rename':
        const key = apiKeys.find(k => k.id === id);
        if (key) setRenameValue(key.name);
        setShowRenameModal(true);
        break;
      case 'restrict':
        setShowRestrictModal(true);
        break;
      case 'delete':
        setShowDeleteConfirm(true);
        break;
      case 'regenerate':
        setShowRegenerateConfirm(true);
        break;
      default:
        break;
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Never";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', 
      month: 'short', 
      day: 'numeric'
    });
  };

  // Empty state component
  const EmptyAPIKeysState = () => (
    <div className="glass-panel p-8 text-center">
      <div className="flex justify-center mb-4">
        <div className="p-4 rounded-full bg-white/5">
          <Key className="h-8 w-8 text-white/70" />
        </div>
      </div>
      <h3 className="text-xl font-medium mb-2">No API Keys Created</h3>
      <p className="text-white/70 mb-6 max-w-md mx-auto">
        API keys allow your applications to authenticate with our services.
        Create your first key to get started.
      </p>
      <Button 
        onClick={() => setShowNewKeyModal(true)}
        className="bg-white text-black hover:bg-gray-200 transition-colors"
      >
        <Plus className="w-4 h-4 mr-2" />
        Create API Key
      </Button>
    </div>
  );

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
              Create API Key
            </Button>
          </div>

          {/* API Keys Table or Empty State */}
          {apiKeys.length === 0 ? (
            <EmptyAPIKeysState />
          ) : (
            <div className="glass-panel p-6 overflow-hidden">
              <Table>
                <TableHeader className="bg-white/5">
                  <TableRow className="border-b border-white/10 hover:bg-transparent">
                    <TableHead className="text-white/70">Name</TableHead>
                    <TableHead className="text-white/70">Key</TableHead>
                    <TableHead className="text-white/70">Environment</TableHead>
                    <TableHead className="text-white/70">Created</TableHead>
                    <TableHead className="text-white/70">Status</TableHead>
                    <TableHead className="text-white/70">Usage</TableHead>
                    <TableHead className="text-white/70 text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {apiKeys.map((apiKey) => (
                    <TableRow key={apiKey.id} className="border-b border-white/10 hover:bg-white/5">
                      <TableCell>
                        <div className="font-medium">{apiKey.name}</div>
                        <div className="text-xs text-white/50 mt-1">
                          {apiKey.permissions.join(", ")}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <div className="font-mono text-white/80">
                            {apiKey.key.substring(0, 12)}...
                          </div>
                          <button 
                            onClick={() => handleCopyKey(apiKey.key)}
                            className="ml-2 p-1 text-white/50 hover:text-white transition-colors rounded-md hover:bg-white/10"
                            aria-label="Copy API key"
                          >
                            {copiedKey === apiKey.key ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          apiKey.environment === 'production' 
                            ? 'bg-white/10 text-white' 
                            : apiKey.environment === 'development'
                            ? 'bg-white/5 text-white/80'
                            : 'bg-white/5 text-white/60'
                        }`}>
                          {apiKey.environment}
                        </span>
                      </TableCell>
                      <TableCell className="text-white/70">
                        {formatDate(apiKey.created)}
                      </TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          apiKey.status === 'active' 
                            ? 'bg-white/10 text-white' 
                            : 'bg-white/5 text-white/60'
                        }`}>
                          {apiKey.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <div className="w-24 bg-white/10 rounded-full h-2 mr-2 overflow-hidden">
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
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8 p-0 text-white/70 hover:text-white hover:bg-white/10"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-black/90 backdrop-blur-lg border-white/10 text-white">
                            <DropdownMenuLabel>Options</DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-white/10" />
                            <DropdownMenuItem 
                              className="cursor-pointer hover:bg-white/10"
                              onClick={() => handleOpenMenu(apiKey.id, 'details')}
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              View details
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              className="cursor-pointer hover:bg-white/10"
                              onClick={() => handleOpenMenu(apiKey.id, 'rename')}
                            >
                              <Pencil className="w-4 h-4 mr-2" />
                              Rename key
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              className="cursor-pointer hover:bg-white/10"
                              onClick={() => handleOpenMenu(apiKey.id, 'restrict')}
                            >
                              <Lock className="w-4 h-4 mr-2" />
                              Restrict access
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              className="cursor-pointer hover:bg-white/10"
                              onClick={() => toggleKeyStatus(apiKey.id)}
                            >
                              {apiKey.status === 'active' ? (
                                <>
                                  <X className="w-4 h-4 mr-2" />
                                  Disable key
                                </>
                              ) : (
                                <>
                                  <Check className="w-4 h-4 mr-2" />
                                  Enable key
                                </>
                              )}
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-white/10" />
                            <DropdownMenuItem 
                              className="cursor-pointer hover:bg-white/10 text-white/80"
                              onClick={() => handleOpenMenu(apiKey.id, 'regenerate')}
                            >
                              <RefreshCw className="w-4 h-4 mr-2" />
                              Regenerate key
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              className="cursor-pointer hover:bg-red-500/20 text-red-400"
                              onClick={() => handleOpenMenu(apiKey.id, 'delete')}
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete key
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {/* Usage Statistics Section - Only show if API keys exist */}
          {apiKeys.length > 0 && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-white/60">Total API Requests</p>
                    <h3 className="text-2xl font-semibold mt-1">
                      {apiKeys.reduce((sum, key) => sum + key.usage.total, 0).toLocaleString()}
                    </h3>
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
          )}
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
                  Click the "Create API Key" button above to generate your first API key.
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
      <Dialog open={showNewKeyModal} onOpenChange={setShowNewKeyModal}>
        <DialogContent className="bg-black/90 backdrop-blur-lg border-white/10 text-white max-w-lg">
          <DialogHeader>
            <DialogTitle>Create New API Key</DialogTitle>
            <DialogDescription className="text-white/70">
              Create a new API key for your application to authenticate with our services.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div>
              <label className="block text-sm font-medium text-white/70 mb-1">Key Name</label>
              <input
                type="text"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                placeholder="My API Key"
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-white/30 text-white"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/70 mb-1">Environment</label>
              <select
                value={newKeyEnvironment}
                onChange={(e) => setNewKeyEnvironment(e.target.value as any)}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-white/30 text-white"
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
                  <div key={permission} className="flex items-center space-x-2">
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
                      className="h-4 w-4 border-white/30 bg-white/5 rounded focus:ring-white/30"
                    />
                    <label htmlFor={permission} className="text-sm text-white/70">
                      {permission.charAt(0).toUpperCase() + permission.slice(1).replace('_', ' ')}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <DialogClose asChild>
              <Button 
                variant="outline"
                className="border-white/30 text-white/70 hover:bg-white/5"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button 
              onClick={handleCreateKey}
              className="bg-white text-black hover:bg-gray-200 transition-colors"
              disabled={!newKeyName.trim()}
            >
              Create Key
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal for displaying newly created API key */}
      <Dialog open={newKeyCreated !== null} onOpenChange={() => setNewKeyCreated(null)}>
        <DialogContent className="bg-black/90 backdrop-blur-lg border-white/10 text-white max-w-lg">
          <DialogHeader>
            <DialogTitle>New API Key Created</DialogTitle>
            <DialogDescription className="text-white/70">
              Make sure to copy it now, you won't be able to see it again!
            </DialogDescription>
          </DialogHeader>
          
          {newKeyCreated && (
            <>
              <div className="bg-black/30 p-4 rounded-md my-4">
                <div className="font-mono text-sm bg-white/5 p-3 rounded-md flex items-center justify-between">
                  <span className="truncate text-white/90">{newKeyCreated.key}</span>
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
            </>
          )}
          
          <DialogFooter>
            <Button 
              onClick={() => setNewKeyCreated(null)}
              className="bg-white text-black hover:bg-gray-200 transition-colors"
            >
              I've Copied My Key
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal for renaming API key */}
      <Dialog open={showRenameModal} onOpenChange={setShowRenameModal}>
        <DialogContent className="bg-black/90 backdrop-blur-lg border-white/10 text-white max-w-md">
          <DialogHeader>
            <DialogTitle>Rename API Key</DialogTitle>
          </DialogHeader>
          
          <div className="py-4">
            <label className="block text-sm font-medium text-white/70 mb-1">New Name</label>
            <input
              type="text"
              value={renameValue}
              onChange={(e) => setRenameValue(e.target.value)}
              placeholder="My API Key"
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-white/30 text-white"
            />
          </div>
          
          <DialogFooter>
            <DialogClose asChild>
              <Button 
                variant="outline"
                className="border-white/30 text-white/70 hover:bg-white/5"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button 
              onClick={handleRenameKey}
              className="bg-white text-black hover:bg-gray-200 transition-colors"
              disabled={!renameValue.trim()}
            >
              Rename
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal for restricting API key access */}
      <Dialog open={showRestrictModal} onOpenChange={setShowRestrictModal}>
        <DialogContent className="bg-black/90 backdrop-blur-lg border-white/10 text-white max-w-lg">
          <DialogHeader>
            <DialogTitle>Restrict API Key Access</DialogTitle>
            <DialogDescription className="text-white/70">
              Limit where and how this API key can be used.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div>
              <label className="block text-sm font-medium text-white/70 mb-1">IP Whitelist (Optional)</label>
              <input
                type="text"
                placeholder="192.168.1.1, 10.0.0.1"
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-white/30 text-white"
              />
              <p className="text-xs text-white/50 mt-1">Comma-separated list of IP addresses</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/70 mb-1">Rate Limit (requests/minute)</label>
              <input
                type="number"
                placeholder="100"
                min="1"
                max="1000"
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-white/30 text-white"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/70 mb-1">Allowed Actions</label>
              <div className="space-y-2">
                {["read", "write", "delete", "admin"].map(action => (
                  <div key={action} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`restrict_${action}`}
                      defaultChecked={true}
                      className="h-4 w-4 border-white/30 bg-white/5 rounded focus:ring-white/30"
                    />
                    <label htmlFor={`restrict_${action}`} className="text-sm text-white/70">
                      {action.charAt(0).toUpperCase() + action.slice(1)}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <DialogClose asChild>
              <Button 
                variant="outline"
                className="border-white/30 text-white/70 hover:bg-white/5"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button 
              onClick={() => setShowRestrictModal(false)}
              className="bg-white text-black hover:bg-gray-200 transition-colors"
            >
              Save Restrictions
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal for viewing API key details */}
      <Dialog open={showDetailsModal} onOpenChange={setShowDetailsModal}>
        <DialogContent className="bg-black/90 backdrop-blur-lg border-white/10 text-white max-w-lg">
          <DialogHeader>
            <DialogTitle>API Key Details</DialogTitle>
          </DialogHeader>
          
          {selectedKey && (
            <div className="py-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-white/50 mb-1">Name</h4>
                  <p className="text-white">{selectedKey.name}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/50 mb-1">Environment</h4>
                  <p className="text-white capitalize">{selectedKey.environment}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/50 mb-1">Created</h4>
                  <p className="text-white">{formatDate(selectedKey.created)}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/50 mb-1">Last Used</h4>
                  <p className="text-white">{formatDate(selectedKey.lastUsed)}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/50 mb-1">Status</h4>
                  <p className="text-white capitalize">{selectedKey.status}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/50 mb-1">Rate Limit</h4>
                  <p className="text-white">{selectedKey.usage.limit} req/min</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-white/50 mb-1">Permissions</h4>
                <div className="flex flex-wrap gap-1 mt-1">
                  {selectedKey.permissions.map(permission => (
                    <span 
                      key={permission} 
                      className="px-2 py-1 bg-white/10 rounded-md text-xs text-white/90"
                    >
                      {permission.charAt(0).toUpperCase() + permission.slice(1).replace('_', ' ')}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-white/50 mb-1">Usage Statistics</h4>
                <div className="mt-2 p-3 bg-white/5 rounded-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white/70">Total Requests</span>
                    <span className="text-sm text-white">{selectedKey.usage.total.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white/70">Current Rate</span>
                    <span className="text-sm text-white">{selectedKey.usage.rate}/{selectedKey.usage.limit} req/min</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 mt-2 overflow-hidden">
                    <div 
                      className="bg-white h-full rounded-full" 
                      style={{ 
                        width: `${Math.min(100, (selectedKey.usage.rate / selectedKey.usage.limit) * 100)}%` 
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button 
              onClick={() => setShowDetailsModal(false)}
              className="bg-white text-black hover:bg-gray-200 transition-colors"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Confirmation for deleting API key */}
      <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <AlertDialogContent className="bg-black/90 backdrop-blur-lg border-white/10 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete API Key</AlertDialogTitle>
            <AlertDialogDescription className="text-white/70">
              This action cannot be undone. This will permanently delete the API key
              and all applications using it will lose access.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-white/30 text-white/70 hover:bg-white/5">Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDeleteKey}
              className="bg-red-500 text-white hover:bg-red-600 transition-colors"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Confirmation for regenerating API key */}
      <AlertDialog open={showRegenerateConfirm} onOpenChange={setShowRegenerateConfirm}>
        <AlertDialogContent className="bg-black/90 backdrop-blur-lg border-white/10 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Regenerate API Key</AlertDialogTitle>
            <AlertDialogDescription className="text-white/70">
              This will create a new key and invalidate the existing one. All applications
              using the current key will need to be updated.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-white/30 text-white/70 hover:bg-white/5">Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleRegenerateKey}
              className="bg-white text-black hover:bg-gray-200 transition-colors"
            >
              Regenerate
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DocLayout>
  );
};

export default DeveloperPortal;
