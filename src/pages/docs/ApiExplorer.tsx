
import React, { useState } from "react";
import { motion } from "framer-motion";
import DocLayout from "./DocLayout";
import DocCodeBlock from "@/components/docs/DocCodeBlock";
import { 
  Code, 
  PlayCircle, 
  Save, 
  DownloadCloud, 
  Copy, 
  Check,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Endpoint {
  id: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description: string;
  parameters?: {
    name: string;
    type: string;
    required: boolean;
    description: string;
  }[];
  requestBody?: {
    type: string;
    properties: {
      name: string;
      type: string;
      required: boolean;
      description: string;
    }[];
  };
  responses: {
    status: number;
    description: string;
    example: string;
  }[];
}

const endpoints: Endpoint[] = [
  {
    id: "get-clipboard",
    method: "GET",
    path: "/api/v1/clipboard",
    description: "Retrieves clipboard history items with pagination and filtering options",
    parameters: [
      {
        name: "limit",
        type: "integer",
        required: false,
        description: "Number of items to return (default: 20, max: 100)"
      },
      {
        name: "offset",
        type: "integer",
        required: false,
        description: "Number of items to skip (default: 0)"
      },
      {
        name: "search",
        type: "string",
        required: false,
        description: "Search term to filter results"
      },
      {
        name: "type",
        type: "string",
        required: false,
        description: "Filter by content type (text, image, code, etc.)"
      }
    ],
    responses: [
      {
        status: 200,
        description: "Successful response with clipboard items",
        example: `{
  "items": [
    {
      "id": "cb_123456",
      "content": "Example clipboard content",
      "type": "text",
      "created_at": "2023-08-15T10:30:00Z",
      "tags": ["personal", "notes"],
      "pinned": false
    },
    {
      "id": "cb_789012",
      "content": "function example() { return true; }",
      "type": "code",
      "created_at": "2023-08-14T15:45:00Z",
      "language": "javascript",
      "tags": ["code", "javascript"],
      "pinned": true
    }
  ],
  "pagination": {
    "total": 156,
    "offset": 0,
    "limit": 20
  }
}`
      },
      {
        status: 401,
        description: "Unauthorized - Invalid or missing API key",
        example: `{
  "error": {
    "code": "unauthorized",
    "message": "Invalid or missing API key"
  }
}`
      }
    ]
  },
  {
    id: "post-clipboard",
    method: "POST",
    path: "/api/v1/clipboard",
    description: "Adds a new item to the clipboard",
    requestBody: {
      type: "object",
      properties: [
        {
          name: "content",
          type: "string",
          required: true,
          description: "The content to add to clipboard"
        },
        {
          name: "type",
          type: "string",
          required: false,
          description: "Type of content (text, code, image, etc.)"
        },
        {
          name: "tags",
          type: "array",
          required: false,
          description: "Array of tags to associate with the item"
        },
        {
          name: "pinned",
          type: "boolean",
          required: false,
          description: "Whether the item should be pinned"
        }
      ]
    },
    responses: [
      {
        status: 201,
        description: "Successfully created clipboard item",
        example: `{
  "id": "cb_345678",
  "content": "New clipboard content",
  "type": "text",
  "created_at": "2023-09-10T08:15:00Z",
  "tags": ["important"],
  "pinned": false
}`
      },
      {
        status: 400,
        description: "Bad request - Invalid or missing parameters",
        example: `{
  "error": {
    "code": "invalid_request",
    "message": "Content field is required"
  }
}`
      }
    ]
  },
  {
    id: "get-clipboard-id",
    method: "GET",
    path: "/api/v1/clipboard/{id}",
    description: "Retrieves a specific clipboard item by ID",
    parameters: [
      {
        name: "id",
        type: "string",
        required: true,
        description: "Unique identifier of the clipboard item"
      }
    ],
    responses: [
      {
        status: 200,
        description: "Successfully retrieved clipboard item",
        example: `{
  "id": "cb_123456",
  "content": "Example clipboard content",
  "type": "text",
  "created_at": "2023-08-15T10:30:00Z",
  "tags": ["personal", "notes"],
  "pinned": false
}`
      },
      {
        status: 404,
        description: "Not found - Clipboard item does not exist",
        example: `{
  "error": {
    "code": "not_found",
    "message": "Clipboard item with ID cb_123456 not found"
  }
}`
      }
    ]
  }
];

const languages = [
  { id: "curl", name: "cURL" },
  { id: "javascript", name: "JavaScript" },
  { id: "python", name: "Python" },
  { id: "go", name: "Go" },
  { id: "ruby", name: "Ruby" }
];

const ApiExplorer = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<Endpoint>(endpoints[0]);
  const [selectedLanguage, setSelectedLanguage] = useState("curl");
  const [apiKey, setApiKey] = useState("");
  const [parameters, setParameters] = useState<Record<string, string>>({});
  const [requestBody, setRequestBody] = useState<Record<string, any>>({});
  const [response, setResponse] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    parameters: true,
    requestBody: true,
    responses: true
  });
  const [copiedExample, setCopiedExample] = useState<string | null>(null);
  const [expandedEndpoints, setExpandedEndpoints] = useState<Record<string, boolean>>({});

  // Toggle expansion of endpoint details
  const toggleEndpointExpansion = (id: string) => {
    setExpandedEndpoints({
      ...expandedEndpoints,
      [id]: !expandedEndpoints[id]
    });
  };

  // Toggle section expansion
  const toggleSectionExpansion = (section: string) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  // Generate code snippets for the selected endpoint
  const generateCodeSnippet = (language: string) => {
    const endpoint = selectedEndpoint;
    const baseUrl = "https://api.copyclipcloud.com";
    const fullPath = baseUrl + endpoint.path;
    
    // For path params like /api/v1/resource/{id}
    let url = fullPath;
    if (endpoint.parameters) {
      endpoint.parameters.forEach(param => {
        if (param.name && parameters[param.name] && url.includes(`{${param.name}}`)) {
          url = url.replace(`{${param.name}}`, parameters[param.name]);
        }
      });
    }
    
    // Add query params for GET requests
    if (endpoint.method === "GET" && endpoint.parameters) {
      const queryParams = endpoint.parameters
        .filter(p => parameters[p.name] && !url.includes(`{${p.name}}`))
        .map(p => `${p.name}=${encodeURIComponent(parameters[p.name])}`)
        .join("&");
        
      if (queryParams) {
        url += `?${queryParams}`;
      }
    }
    
    const bodyJson = Object.keys(requestBody).length > 0 
      ? JSON.stringify(requestBody, null, 2) 
      : "";
    
    switch (language) {
      case "curl":
        return `curl -X ${endpoint.method} "${url}" \\
  -H "Authorization: Bearer ${apiKey || "YOUR_API_KEY"}" \\
  -H "Content-Type: application/json"${bodyJson ? ` \\
  -d '${bodyJson}'` : ""}`;
        
      case "javascript":
        return `// Using fetch API
const fetchData = async () => {
  const response = await fetch("${url}", {
    method: "${endpoint.method}",
    headers: {
      "Authorization": "Bearer ${apiKey || "YOUR_API_KEY"}",
      "Content-Type": "application/json"
    }${bodyJson ? `,
    body: JSON.stringify(${JSON.stringify(requestBody)})` : ""}
  });
  
  const data = await response.json();
  return data;
};`;
        
      case "python":
        return `import requests

url = "${url}"
headers = {
    "Authorization": "Bearer ${apiKey || "YOUR_API_KEY"}",
    "Content-Type": "application/json"
}${bodyJson ? `
payload = ${bodyJson}` : ""}

response = requests.${endpoint.method.toLowerCase()}(
    url,
    headers=headers${bodyJson ? `,
    json=payload` : ""}
)

data = response.json()
print(data)`;
        
      case "go":
        return `package main

import (
  "fmt"
  "net/http"
  "io/ioutil"
  "bytes"
  "encoding/json"
)

func main() {
  url := "${url}"
  method := "${endpoint.method}"${bodyJson ? `
  
  payload := ${bodyJson}
  jsonPayload, _ := json.Marshal(payload)` : ""}
  
  client := &http.Client{}
  req, _ := http.NewRequest(method, url, ${bodyJson ? `bytes.NewBuffer(jsonPayload)` : "nil"})
  
  req.Header.Add("Authorization", "Bearer ${apiKey || "YOUR_API_KEY"}")
  req.Header.Add("Content-Type", "application/json")
  
  resp, _ := client.Do(req)
  defer resp.Body.Close()
  
  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println(string(body))
}`;
        
      case "ruby":
        return `require 'uri'
require 'net/http'
require 'json'

url = URI("${url}")
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = (url.scheme == 'https')

request = Net::HTTP::${endpoint.method === "DELETE" ? "Delete" : endpoint.method.charAt(0) + endpoint.method.slice(1).toLowerCase()}.new(url)
request["Authorization"] = "Bearer ${apiKey || "YOUR_API_KEY"}"
request["Content-Type"] = "application/json"${bodyJson ? `
request.body = ${bodyJson}` : ""}

response = http.request(request)
puts response.read_body`;
        
      default:
        return "// Code snippet not available for this language";
    }
  };

  // Handle copying example code
  const handleCopyExample = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedExample(code);
    setTimeout(() => setCopiedExample(null), 2000);
  };

  // Simulate API call (in a real app this would call the actual API)
  const simulateApiCall = () => {
    // Get the matching example response based on selection
    const successResponse = selectedEndpoint.responses.find(r => r.status < 400);
    if (successResponse) {
      setResponse(successResponse.example);
    } else {
      setResponse('{"error": "No example response available"}');
    }
  };

  // Handle parameter change
  const handleParameterChange = (name: string, value: string) => {
    setParameters({
      ...parameters,
      [name]: value
    });
  };

  // Handle request body change
  const handleRequestBodyChange = (name: string, value: any) => {
    setRequestBody({
      ...requestBody,
      [name]: value
    });
  };

  return (
    <DocLayout 
      title="API Explorer" 
      icon={Code}
      description="Interactive exploration and testing tool for our API"
    >
      <div className="space-y-8">
        {/* API Explorer Header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="glass-panel p-6">
            <p className="text-white/70 mb-6">
              Use this interactive tool to explore our API endpoints, view documentation, and test API requests.
              Select an endpoint from the list, customize parameters, and execute test requests to see responses.
            </p>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-white/70 mb-1">API Key</label>
              <input
                type="text"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your API key for testing"
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-white/30"
              />
              <p className="text-xs text-white/50 mt-1">
                Your API key is only used in the browser and not stored anywhere.
              </p>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-white/70 mb-1">Code Language</label>
              <div className="flex flex-wrap gap-2">
                {languages.map(lang => (
                  <button
                    key={lang.id}
                    onClick={() => setSelectedLanguage(lang.id)}
                    className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                      selectedLanguage === lang.id ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20 text-white/80'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Endpoints and Explorer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Endpoints List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h2 className="text-xl font-bold mb-4">Endpoints</h2>
            <div className="glass-panel p-0 overflow-hidden">
              <div className="divide-y divide-white/10">
                {endpoints.map(endpoint => (
                  <div key={endpoint.id} className="flex flex-col">
                    <button
                      onClick={() => {
                        setSelectedEndpoint(endpoint);
                        setParameters({});
                        setRequestBody({});
                        setResponse(null);
                      }}
                      className={`flex items-center justify-between px-4 py-3 w-full text-left hover:bg-white/5 transition-colors ${
                        selectedEndpoint.id === endpoint.id ? 'bg-white/10' : ''
                      }`}
                    >
                      <div className="flex items-center">
                        <span className={`inline-block w-16 text-xs font-medium px-2.5 py-1 rounded-full text-center ${
                          endpoint.method === 'GET' ? 'bg-white/10 text-white' :
                          endpoint.method === 'POST' ? 'bg-white/10 text-white' :
                          endpoint.method === 'PUT' ? 'bg-white/10 text-white' :
                          'bg-white/10 text-white'
                        }`}>
                          {endpoint.method}
                        </span>
                        <span className="ml-3 font-mono text-sm truncate">
                          {endpoint.path}
                        </span>
                      </div>
                      <button 
                        className="ml-2 text-white/50 hover:text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleEndpointExpansion(endpoint.id);
                        }}
                      >
                        {expandedEndpoints[endpoint.id] ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                    </button>
                    
                    {expandedEndpoints[endpoint.id] && (
                      <div className="px-4 py-3 bg-white/5 text-sm text-white/70">
                        {endpoint.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* API Explorer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">API Explorer</h2>
              <Button
                onClick={simulateApiCall}
                className="bg-white text-black hover:bg-gray-200 transition-colors"
              >
                <PlayCircle className="w-4 h-4 mr-2" />
                Execute Request
              </Button>
            </div>

            {/* Selected Endpoint Details */}
            <div className="glass-panel p-6 mb-6">
              <div className="flex items-center mb-4">
                <span className={`inline-block w-16 text-xs font-medium px-2.5 py-1 rounded-full text-center ${
                  selectedEndpoint.method === 'GET' ? 'bg-white/10 text-white' :
                  selectedEndpoint.method === 'POST' ? 'bg-white/10 text-white' :
                  selectedEndpoint.method === 'PUT' ? 'bg-white/10 text-white' :
                  'bg-white/10 text-white'
                }`}>
                  {selectedEndpoint.method}
                </span>
                <span className="ml-3 font-mono text-lg">
                  {selectedEndpoint.path}
                </span>
              </div>
              
              <p className="text-white/70 mb-6">
                {selectedEndpoint.description}
              </p>
              
              {/* Parameters Section */}
              {selectedEndpoint.parameters && selectedEndpoint.parameters.length > 0 && (
                <div className="mb-6">
                  <button 
                    onClick={() => toggleSectionExpansion('parameters')}
                    className="flex items-center justify-between w-full text-left mb-3"
                  >
                    <h3 className="text-lg font-medium">Parameters</h3>
                    {expandedSections.parameters ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </button>
                  
                  {expandedSections.parameters && (
                    <div className="space-y-4">
                      {selectedEndpoint.parameters.map(param => (
                        <div key={param.name}>
                          <label className="flex items-center text-sm font-medium text-white/70 mb-1">
                            {param.name}
                            {param.required && <span className="text-red-400 ml-1">*</span>}
                            <span className="ml-2 text-xs text-white/50">({param.type})</span>
                          </label>
                          <input
                            type="text"
                            value={parameters[param.name] || ''}
                            onChange={(e) => handleParameterChange(param.name, e.target.value)}
                            placeholder={param.description}
                            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-white/30"
                          />
                          <p className="text-xs text-white/50 mt-1">{param.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
              
              {/* Request Body Section */}
              {selectedEndpoint.requestBody && (
                <div className="mb-6">
                  <button 
                    onClick={() => toggleSectionExpansion('requestBody')}
                    className="flex items-center justify-between w-full text-left mb-3"
                  >
                    <h3 className="text-lg font-medium">Request Body</h3>
                    {expandedSections.requestBody ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </button>
                  
                  {expandedSections.requestBody && (
                    <div className="space-y-4">
                      {selectedEndpoint.requestBody.properties.map(prop => (
                        <div key={prop.name}>
                          <label className="flex items-center text-sm font-medium text-white/70 mb-1">
                            {prop.name}
                            {prop.required && <span className="text-red-400 ml-1">*</span>}
                            <span className="ml-2 text-xs text-white/50">({prop.type})</span>
                          </label>
                          {prop.type === "boolean" ? (
                            <select
                              value={requestBody[prop.name] === true ? "true" : requestBody[prop.name] === false ? "false" : ""}
                              onChange={(e) => {
                                const value = e.target.value === "true" ? true : 
                                              e.target.value === "false" ? false : undefined;
                                handleRequestBodyChange(prop.name, value);
                              }}
                              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-white/30"
                            >
                              <option value="">Select value</option>
                              <option value="true">true</option>
                              <option value="false">false</option>
                            </select>
                          ) : prop.type === "array" ? (
                            <div>
                              <input
                                type="text"
                                value={Array.isArray(requestBody[prop.name]) ? requestBody[prop.name].join(", ") : ""}
                                onChange={(e) => {
                                  const value = e.target.value.split(",").map(item => item.trim()).filter(Boolean);
                                  handleRequestBodyChange(prop.name, value);
                                }}
                                placeholder="comma, separated, values"
                                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-white/30"
                              />
                            </div>
                          ) : (
                            <input
                              type="text"
                              value={requestBody[prop.name] || ""}
                              onChange={(e) => handleRequestBodyChange(prop.name, e.target.value)}
                              placeholder={prop.description}
                              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-white/30"
                            />
                          )}
                          <p className="text-xs text-white/50 mt-1">{prop.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
              
              {/* Responses Section */}
              <div>
                <button 
                  onClick={() => toggleSectionExpansion('responses')}
                  className="flex items-center justify-between w-full text-left mb-3"
                >
                  <h3 className="text-lg font-medium">Responses</h3>
                  {expandedSections.responses ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>
                
                {expandedSections.responses && (
                  <div className="space-y-4">
                    {selectedEndpoint.responses.map(response => (
                      <div key={response.status} className="glass-panel p-4 bg-black/30 border-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <span className={`inline-block w-16 text-xs font-medium px-2.5 py-1 rounded-full text-center ${
                              response.status < 300 ? 'bg-white/10 text-white' :
                              response.status < 400 ? 'bg-white/10 text-white' :
                              'bg-white/10 text-white'
                            }`}>
                              {response.status}
                            </span>
                            <span className="ml-3 text-sm text-white/70">
                              {response.description}
                            </span>
                          </div>
                          <button 
                            onClick={() => handleCopyExample(response.example)}
                            className="text-white/50 hover:text-white transition-colors"
                            title="Copy example"
                          >
                            {copiedExample === response.example ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                        <DocCodeBlock 
                          code={response.example} 
                          language="json"
                          className="mt-2"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Code Generation */}
            <div className="glass-panel p-6 mb-6">
              <h3 className="text-lg font-medium mb-4">Request Code</h3>
              <DocCodeBlock 
                code={generateCodeSnippet(selectedLanguage)} 
                language={selectedLanguage}
                title={languages.find(l => l.id === selectedLanguage)?.name || selectedLanguage}
              />
              <div className="flex justify-end mt-4 space-x-3">
                <Button 
                  variant="outline"
                  className="border-white/30 text-white/70 hover:bg-white/5 transition-colors"
                  onClick={() => {
                    navigator.clipboard.writeText(generateCodeSnippet(selectedLanguage));
                  }}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Code
                </Button>
                <Button 
                  variant="outline"
                  className="border-white/30 text-white/70 hover:bg-white/5 transition-colors"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save as Snippet
                </Button>
                <Button 
                  variant="outline"
                  className="border-white/30 text-white/70 hover:bg-white/5 transition-colors"
                >
                  <DownloadCloud className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>

            {/* Response Output */}
            {response && (
              <div className="glass-panel p-6">
                <h3 className="text-lg font-medium mb-4">Response</h3>
                <DocCodeBlock 
                  code={response} 
                  language="json"
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </DocLayout>
  );
};

export default ApiExplorer;
