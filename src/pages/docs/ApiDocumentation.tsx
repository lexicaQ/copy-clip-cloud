
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DocLayout from "./DocLayout";
import DocCodeBlock from "@/components/docs/DocCodeBlock";
import { ArrowLeft, FileCode, Code, ExternalLink, ChevronDown, ChevronUp, CopyCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

// Types for language tabs
type CodeLanguage = "javascript" | "python" | "curl";

// Code examples for different languages
const codeExamples = {
  authentication: {
    javascript: `// Authenticate with API key
const fetchData = async () => {
  const response = await fetch('https://api.copyclipcloud.com/v1/clipboard', {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  });
  
  const data = await response.json();
  return data;
};`,
    python: `# Authenticate with API key
import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
}

response = requests.get('https://api.copyclipcloud.com/v1/clipboard', headers=headers)
data = response.json()`,
    curl: `# Authenticate with API key
curl -X GET "https://api.copyclipcloud.com/v1/clipboard" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
  },
  getClipboard: {
    javascript: `// Fetch clipboard history
async function getClipboardHistory() {
  const response = await fetch('https://api.copyclipcloud.com/v1/clipboard', {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  });
  
  const data = await response.json();
  return data.items;
}`,
    python: `# Fetch clipboard history
import requests

def get_clipboard_history():
    headers = {
        'Authorization': 'Bearer YOUR_API_KEY'
    }
    
    response = requests.get('https://api.copyclipcloud.com/v1/clipboard', headers=headers)
    data = response.json()
    return data['items']`,
    curl: `# Fetch clipboard history
curl -X GET "https://api.copyclipcloud.com/v1/clipboard" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
  },
  postClipboard: {
    javascript: `// Add item to clipboard
async function addToClipboard(content) {
  const response = await fetch('https://api.copyclipcloud.com/v1/clipboard', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: content,
      type: 'text',
      tags: ['important', 'work']
    })
  });
  
  const data = await response.json();
  return data;
}`,
    python: `# Add item to clipboard
import requests
import json

def add_to_clipboard(content):
    headers = {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
    
    payload = {
        'content': content,
        'type': 'text',
        'tags': ['important', 'work']
    }
    
    response = requests.post(
        'https://api.copyclipcloud.com/v1/clipboard',
        headers=headers,
        data=json.dumps(payload)
    )
    
    return response.json()`,
    curl: `# Add item to clipboard
curl -X POST "https://api.copyclipcloud.com/v1/clipboard" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "content": "Example content",
    "type": "text",
    "tags": ["important", "work"]
  }'`
  },
  updateClipboard: {
    javascript: `// Update clipboard item
async function updateClipboardItem(id, updates) {
  const response = await fetch(\`https://api.copyclipcloud.com/v1/clipboard/\${id}\`, {
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updates)
  });
  
  const data = await response.json();
  return data;
}`,
    python: `# Update clipboard item
import requests
import json

def update_clipboard_item(item_id, updates):
    headers = {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
    
    response = requests.put(
        f'https://api.copyclipcloud.com/v1/clipboard/{item_id}',
        headers=headers,
        data=json.dumps(updates)
    )
    
    return response.json()`,
    curl: `# Update clipboard item
curl -X PUT "https://api.copyclipcloud.com/v1/clipboard/ITEM_ID" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "tags": ["updated", "important"],
    "pinned": true
  }'`
  },
  deleteClipboard: {
    javascript: `// Delete clipboard item
async function deleteClipboardItem(id) {
  const response = await fetch(\`https://api.copyclipcloud.com/v1/clipboard/\${id}\`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  });
  
  return response.status === 204; // No content response
}`,
    python: `# Delete clipboard item
import requests

def delete_clipboard_item(item_id):
    headers = {
        'Authorization': 'Bearer YOUR_API_KEY'
    }
    
    response = requests.delete(
        f'https://api.copyclipcloud.com/v1/clipboard/{item_id}',
        headers=headers
    )
    
    return response.status_code == 204  # No content response`,
    curl: `# Delete clipboard item
curl -X DELETE "https://api.copyclipcloud.com/v1/clipboard/ITEM_ID" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
  },
  templatesExample: {
    javascript: `// Get all templates
async function getTemplates() {
  const response = await fetch('https://api.copyclipcloud.com/v1/templates', {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  });
  
  const data = await response.json();
  return data;
}`,
    python: `# Get all templates
import requests

def get_templates():
    headers = {
        'Authorization': 'Bearer YOUR_API_KEY'
    }
    
    response = requests.get('https://api.copyclipcloud.com/v1/templates', headers=headers)
    return response.json()`,
    curl: `# Get all templates
curl -X GET "https://api.copyclipcloud.com/v1/templates" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
  },
  syncExample: {
    javascript: `// Get sync status
async function getSyncStatus() {
  const response = await fetch('https://api.copyclipcloud.com/v1/sync/status', {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  });
  
  const data = await response.json();
  return data;
}`,
    python: `# Get sync status
import requests

def get_sync_status():
    headers = {
        'Authorization': 'Bearer YOUR_API_KEY'
    }
    
    response = requests.get('https://api.copyclipcloud.com/v1/sync/status', headers=headers)
    return response.json()`,
    curl: `# Get sync status
curl -X GET "https://api.copyclipcloud.com/v1/sync/status" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
  }
};

// Expandable section component
interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({ 
  title, 
  children, 
  defaultExpanded = false 
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="mb-8 border border-white/10 rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex justify-between items-center w-full p-4 bg-white/5 text-left"
      >
        <h3 className="text-xl font-medium">{title}</h3>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-white/70" />
        ) : (
          <ChevronDown className="w-5 h-5 text-white/70" />
        )}
      </button>
      
      {expanded && (
        <div className="p-4 bg-black/20">
          {children}
        </div>
      )}
    </div>
  );
};

// Code tabs component
interface CodeTabsProps {
  examples: Record<CodeLanguage, string>;
  defaultLanguage?: CodeLanguage;
}

const CodeTabs: React.FC<CodeTabsProps> = ({ 
  examples, 
  defaultLanguage = "javascript" 
}) => {
  const [language, setLanguage] = useState<CodeLanguage>(defaultLanguage);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(examples[language]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-8">
      <div className="flex border-b border-white/10">
        {(Object.keys(examples) as CodeLanguage[]).map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-4 py-2 text-sm ${
              language === lang 
                ? 'border-b-2 border-white text-white' 
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            {lang === "javascript" ? "JavaScript" : 
             lang === "python" ? "Python" : 
             lang === "curl" ? "cURL" : lang}
          </button>
        ))}
        <button
          onClick={handleCopy}
          className="ml-auto px-4 py-2 text-sm text-white/50 hover:text-white/80 flex items-center"
        >
          {copied ? (
            <>
              <CopyCheck className="w-4 h-4 mr-1" />
              Copied!
            </>
          ) : (
            <>
              <Code className="w-4 h-4 mr-1" />
              Copy
            </>
          )}
        </button>
      </div>
      <DocCodeBlock 
        code={examples[language]} 
        language={language} 
        showLineNumbers={true}
      />
    </div>
  );
};

const ApiDocumentation = () => {
  return (
    <DocLayout title="API Documentation" icon={FileCode}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-white/80 text-lg mb-8">
          The CopyClipCloud API allows developers to integrate clipboard functionality into their applications, 
          create custom workflows, and build extensions. This documentation provides complete reference information
          for all available endpoints and methods.
        </p>
        
        {/* Authentication Section */}
        <ExpandableSection title="Authentication" defaultExpanded={true}>
          <p className="text-white/70 mb-4">
            All API requests require authentication using an API key. Follow these steps to authenticate your requests:
          </p>
          
          <ol className="list-decimal pl-5 space-y-3 text-white/70 mb-6">
            <li>Generate an API key in your <Link to="/docs/developer-portal" className="text-white underline hover:no-underline">Developer Portal</Link></li>
            <li>Include the API key in the request header</li>
            <li>Use HTTPS for all API requests</li>
          </ol>
          
          <h4 className="text-lg font-medium mb-3">Authentication Header</h4>
          <div className="bg-black/30 p-4 rounded-lg font-mono text-sm mb-6">
            <p className="text-white">Authorization: Bearer your_api_key_here</p>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-medium mb-2">Authentication Example</h4>
            <CodeTabs examples={codeExamples.authentication} />
          </div>
          
          <div className="flex items-center p-4 border border-white/10 rounded-lg bg-white/5">
            <div className="mr-4 p-2 bg-white/10 rounded-full">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-medium">API Key Security</h4>
              <p className="text-white/70 text-sm">
                Never include your API key in client-side code. Always make API calls from your server.
              </p>
            </div>
          </div>
        </ExpandableSection>
        
        {/* Core Endpoints Section */}
        <ExpandableSection title="Core Endpoints" defaultExpanded={true}>
          <h3 className="text-xl font-medium mb-4">Clipboard Endpoints</h3>
          
          {/* GET /clipboard */}
          <div className="mb-8 p-6 bg-black/30 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="bg-white/10 text-white px-3 py-1 text-xs rounded-full font-medium mr-3">GET</span>
              <code className="font-mono text-lg">/api/v1/clipboard</code>
            </div>
            
            <p className="text-white/70 mb-4">
              Retrieves the clipboard history with pagination and filtering options.
            </p>
            
            <h4 className="text-lg font-medium mb-2">Query Parameters</h4>
            <table className="w-full mb-6">
              <thead className="border-b border-white/10">
                <tr>
                  <th className="text-left py-2 text-white/70 font-medium">Parameter</th>
                  <th className="text-left py-2 text-white/70 font-medium">Type</th>
                  <th className="text-left py-2 text-white/70 font-medium">Required</th>
                  <th className="text-left py-2 text-white/70 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="text-white/70 text-sm">
                <tr className="border-b border-white/5">
                  <td className="py-2">limit</td>
                  <td className="py-2">integer</td>
                  <td className="py-2">No</td>
                  <td className="py-2">Number of items to return (default: 20, max: 100)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2">offset</td>
                  <td className="py-2">integer</td>
                  <td className="py-2">No</td>
                  <td className="py-2">Number of items to skip (default: 0)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2">search</td>
                  <td className="py-2">string</td>
                  <td className="py-2">No</td>
                  <td className="py-2">Search term to filter results</td>
                </tr>
                <tr>
                  <td className="py-2">type</td>
                  <td className="py-2">string</td>
                  <td className="py-2">No</td>
                  <td className="py-2">Filter by content type (text, image, code, etc.)</td>
                </tr>
              </tbody>
            </table>
            
            <h4 className="text-lg font-medium mb-2">Example Request</h4>
            <CodeTabs examples={codeExamples.getClipboard} />
            
            <h4 className="text-lg font-medium mb-2">Response</h4>
            <DocCodeBlock 
              code={`{
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
}`}
              language="json"
            />
          </div>
          
          {/* POST /clipboard */}
          <div className="mb-8 p-6 bg-black/30 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="bg-white/10 text-white px-3 py-1 text-xs rounded-full font-medium mr-3">POST</span>
              <code className="font-mono text-lg">/api/v1/clipboard</code>
            </div>
            
            <p className="text-white/70 mb-4">
              Adds a new item to the clipboard.
            </p>
            
            <h4 className="text-lg font-medium mb-2">Request Body</h4>
            <table className="w-full mb-6">
              <thead className="border-b border-white/10">
                <tr>
                  <th className="text-left py-2 text-white/70 font-medium">Parameter</th>
                  <th className="text-left py-2 text-white/70 font-medium">Type</th>
                  <th className="text-left py-2 text-white/70 font-medium">Required</th>
                  <th className="text-left py-2 text-white/70 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="text-white/70 text-sm">
                <tr className="border-b border-white/5">
                  <td className="py-2">content</td>
                  <td className="py-2">string</td>
                  <td className="py-2">Yes</td>
                  <td className="py-2">The content to add to clipboard</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2">type</td>
                  <td className="py-2">string</td>
                  <td className="py-2">No</td>
                  <td className="py-2">Type of content (text, code, image, etc.)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2">tags</td>
                  <td className="py-2">array</td>
                  <td className="py-2">No</td>
                  <td className="py-2">Array of tags to associate with the item</td>
                </tr>
                <tr>
                  <td className="py-2">pinned</td>
                  <td className="py-2">boolean</td>
                  <td className="py-2">No</td>
                  <td className="py-2">Whether the item should be pinned</td>
                </tr>
              </tbody>
            </table>
            
            <h4 className="text-lg font-medium mb-2">Example Request</h4>
            <CodeTabs examples={codeExamples.postClipboard} />
            
            <h4 className="text-lg font-medium mb-2">Response</h4>
            <DocCodeBlock 
              code={`{
  "id": "cb_345678",
  "content": "Example content",
  "type": "text",
  "created_at": "2023-09-10T08:15:00Z",
  "tags": ["important", "work"],
  "pinned": false
}`}
              language="json"
            />
          </div>
          
          {/* PUT /clipboard/{id} */}
          <div className="mb-8 p-6 bg-black/30 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="bg-white/10 text-white px-3 py-1 text-xs rounded-full font-medium mr-3">PUT</span>
              <code className="font-mono text-lg">/api/v1/clipboard/{'{id}'}</code>
            </div>
            
            <p className="text-white/70 mb-4">
              Updates an existing clipboard item.
            </p>
            
            <h4 className="text-lg font-medium mb-2">Path Parameters</h4>
            <table className="w-full mb-6">
              <thead className="border-b border-white/10">
                <tr>
                  <th className="text-left py-2 text-white/70 font-medium">Parameter</th>
                  <th className="text-left py-2 text-white/70 font-medium">Type</th>
                  <th className="text-left py-2 text-white/70 font-medium">Required</th>
                  <th className="text-left py-2 text-white/70 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="text-white/70 text-sm">
                <tr>
                  <td className="py-2">id</td>
                  <td className="py-2">string</td>
                  <td className="py-2">Yes</td>
                  <td className="py-2">Unique identifier of the clipboard item</td>
                </tr>
              </tbody>
            </table>
            
            <h4 className="text-lg font-medium mb-2">Request Body</h4>
            <table className="w-full mb-6">
              <thead className="border-b border-white/10">
                <tr>
                  <th className="text-left py-2 text-white/70 font-medium">Parameter</th>
                  <th className="text-left py-2 text-white/70 font-medium">Type</th>
                  <th className="text-left py-2 text-white/70 font-medium">Required</th>
                  <th className="text-left py-2 text-white/70 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="text-white/70 text-sm">
                <tr className="border-b border-white/5">
                  <td className="py-2">content</td>
                  <td className="py-2">string</td>
                  <td className="py-2">No</td>
                  <td className="py-2">Updated content</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2">tags</td>
                  <td className="py-2">array</td>
                  <td className="py-2">No</td>
                  <td className="py-2">Updated array of tags</td>
                </tr>
                <tr>
                  <td className="py-2">pinned</td>
                  <td className="py-2">boolean</td>
                  <td className="py-2">No</td>
                  <td className="py-2">Whether the item should be pinned</td>
                </tr>
              </tbody>
            </table>
            
            <h4 className="text-lg font-medium mb-2">Example Request</h4>
            <CodeTabs examples={codeExamples.updateClipboard} />
            
            <h4 className="text-lg font-medium mb-2">Response</h4>
            <DocCodeBlock 
              code={`{
  "id": "cb_123456",
  "content": "Example clipboard content",
  "type": "text",
  "created_at": "2023-08-15T10:30:00Z",
  "updated_at": "2023-09-01T15:45:23Z",
  "tags": ["updated", "important"],
  "pinned": true
}`}
              language="json"
            />
          </div>
          
          {/* DELETE /clipboard/{id} */}
          <div className="mb-8 p-6 bg-black/30 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="bg-white/10 text-white px-3 py-1 text-xs rounded-full font-medium mr-3">DELETE</span>
              <code className="font-mono text-lg">/api/v1/clipboard/{'{id}'}</code>
            </div>
            
            <p className="text-white/70 mb-4">
              Deletes a clipboard item.
            </p>
            
            <h4 className="text-lg font-medium mb-2">Path Parameters</h4>
            <table className="w-full mb-6">
              <thead className="border-b border-white/10">
                <tr>
                  <th className="text-left py-2 text-white/70 font-medium">Parameter</th>
                  <th className="text-left py-2 text-white/70 font-medium">Type</th>
                  <th className="text-left py-2 text-white/70 font-medium">Required</th>
                  <th className="text-left py-2 text-white/70 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="text-white/70 text-sm">
                <tr>
                  <td className="py-2">id</td>
                  <td className="py-2">string</td>
                  <td className="py-2">Yes</td>
                  <td className="py-2">Unique identifier of the clipboard item</td>
                </tr>
              </tbody>
            </table>
            
            <h4 className="text-lg font-medium mb-2">Example Request</h4>
            <CodeTabs examples={codeExamples.deleteClipboard} />
            
            <h4 className="text-lg font-medium mb-2">Response</h4>
            <p className="text-white/70 mb-2">204 No Content - Success</p>
            <DocCodeBlock 
              code={`// No content returned`}
              language="text"
            />
          </div>
        </ExpandableSection>
        
        {/* Templates API */}
        <ExpandableSection title="Templates API">
          <p className="text-white/70 mb-6">
            Endpoints for managing clipboard templates.
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="p-4 border border-white/10 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="bg-white/10 text-white px-3 py-1 text-xs rounded-full font-medium mr-3">GET</span>
                <code className="font-mono">/api/v1/templates</code>
              </div>
              <p className="text-white/70 text-sm">Retrieves all templates</p>
            </div>
            
            <div className="p-4 border border-white/10 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="bg-white/10 text-white px-3 py-1 text-xs rounded-full font-medium mr-3">POST</span>
                <code className="font-mono">/api/v1/templates</code>
              </div>
              <p className="text-white/70 text-sm">Creates a new template</p>
            </div>
            
            <div className="p-4 border border-white/10 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="bg-white/10 text-white px-3 py-1 text-xs rounded-full font-medium mr-3">PUT</span>
                <code className="font-mono">/api/v1/templates/{'{id}'}</code>
              </div>
              <p className="text-white/70 text-sm">Updates an existing template</p>
            </div>
            
            <div className="p-4 border border-white/10 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="bg-white/10 text-white px-3 py-1 text-xs rounded-full font-medium mr-3">DELETE</span>
                <code className="font-mono">/api/v1/templates/{'{id}'}</code>
              </div>
              <p className="text-white/70 text-sm">Deletes a template</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2">Example Usage</h4>
          <CodeTabs examples={codeExamples.templatesExample} />
        </ExpandableSection>
        
        {/* Synchronization API */}
        <ExpandableSection title="Synchronization API">
          <p className="text-white/70 mb-6">
            Endpoints for managing cross-device synchronization.
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="p-4 border border-white/10 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="bg-white/10 text-white px-3 py-1 text-xs rounded-full font-medium mr-3">GET</span>
                <code className="font-mono">/api/v1/sync/status</code>
              </div>
              <p className="text-white/70 text-sm">Retrieves sync status</p>
            </div>
            
            <div className="p-4 border border-white/10 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="bg-white/10 text-white px-3 py-1 text-xs rounded-full font-medium mr-3">POST</span>
                <code className="font-mono">/api/v1/sync</code>
              </div>
              <p className="text-white/70 text-sm">Initiates a manual sync</p>
            </div>
            
            <div className="p-4 border border-white/10 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="bg-white/10 text-white px-3 py-1 text-xs rounded-full font-medium mr-3">GET</span>
                <code className="font-mono">/api/v1/devices</code>
              </div>
              <p className="text-white/70 text-sm">Lists all connected devices</p>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2">Example Usage</h4>
          <CodeTabs examples={codeExamples.syncExample} />
        </ExpandableSection>
        
        {/* Error Handling */}
        <ExpandableSection title="Error Handling">
          <p className="text-white/70 mb-6">
            The API uses standard HTTP response codes to indicate the success or failure of a request.
          </p>
          
          <table className="w-full mb-6">
            <thead className="border-b border-white/10">
              <tr>
                <th className="text-left py-2 text-white/70 font-medium">Status Code</th>
                <th className="text-left py-2 text-white/70 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-2">200 OK</td>
                <td className="py-2">Request succeeded</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2">201 Created</td>
                <td className="py-2">Resource created successfully</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2">204 No Content</td>
                <td className="py-2">Request succeeded with no response body</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2">400 Bad Request</td>
                <td className="py-2">Invalid request parameters</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2">401 Unauthorized</td>
                <td className="py-2">Authentication failed</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2">403 Forbidden</td>
                <td className="py-2">Authenticated but doesn't have permission</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2">404 Not Found</td>
                <td className="py-2">Resource not found</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2">429 Too Many Requests</td>
                <td className="py-2">Rate limit exceeded</td>
              </tr>
              <tr>
                <td className="py-2">500 Internal Server Error</td>
                <td className="py-2">Server error</td>
              </tr>
            </tbody>
          </table>
          
          <h4 className="text-lg font-medium mb-2">Error Response Format</h4>
          <DocCodeBlock 
            code={`{
  "error": {
    "code": "error_code",
    "message": "Human-readable error message",
    "details": {} // Optional additional details
  }
}`}
            language="json"
          />
          
          <h4 className="text-lg font-medium mt-6 mb-2">Common Error Codes</h4>
          <table className="w-full">
            <thead className="border-b border-white/10">
              <tr>
                <th className="text-left py-2 text-white/70 font-medium">Error Code</th>
                <th className="text-left py-2 text-white/70 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-2">unauthorized</td>
                <td className="py-2">Invalid or missing API key</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2">invalid_request</td>
                <td className="py-2">Invalid parameters or request body</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2">not_found</td>
                <td className="py-2">Requested resource not found</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2">rate_limit_exceeded</td>
                <td className="py-2">Too many requests</td>
              </tr>
              <tr>
                <td className="py-2">server_error</td>
                <td className="py-2">Unexpected server error</td>
              </tr>
            </tbody>
          </table>
        </ExpandableSection>
        
        {/* Rate Limiting */}
        <ExpandableSection title="Rate Limiting">
          <p className="text-white/70 mb-6">
            To ensure the stability of our service, API calls are subject to rate limiting. Rate limits vary based on your subscription plan.
          </p>
          
          <table className="w-full mb-6">
            <thead className="border-b border-white/10">
              <tr>
                <th className="text-left py-2 text-white/70 font-medium">Plan</th>
                <th className="text-left py-2 text-white/70 font-medium">Rate Limit</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-2">Free</td>
                <td className="py-2">100 requests/minute</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2">Pro</td>
                <td className="py-2">500 requests/minute</td>
              </tr>
              <tr>
                <td className="py-2">Enterprise</td>
                <td className="py-2">Custom limits</td>
              </tr>
            </tbody>
          </table>
          
          <h4 className="text-lg font-medium mb-2">Rate Limit Headers</h4>
          <p className="text-white/70 mb-4">
            API responses include headers with rate limiting information:
          </p>
          <DocCodeBlock 
            code={`X-RateLimit-Limit: 100
X-RateLimit-Remaining: 98
X-RateLimit-Reset: 1621784382`}
            language="text"
          />
          
          <div className="p-4 border border-white/10 rounded-lg mt-6">
            <h4 className="font-medium mb-2">Handling Rate Limits</h4>
            <p className="text-white/70 text-sm">
              When a rate limit is exceeded, the API will return a 429 Too Many Requests response. 
              Implement exponential backoff in your clients to handle rate limiting gracefully.
            </p>
          </div>
        </ExpandableSection>
        
        {/* Pagination */}
        <ExpandableSection title="Pagination">
          <p className="text-white/70 mb-6">
            List endpoints support pagination using the limit and offset parameters.
          </p>
          
          <h4 className="text-lg font-medium mb-2">Pagination Parameters</h4>
          <table className="w-full mb-6">
            <thead className="border-b border-white/10">
              <tr>
                <th className="text-left py-2 text-white/70 font-medium">Parameter</th>
                <th className="text-left py-2 text-white/70 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-2">limit</td>
                <td className="py-2">Number of items to return per page (default: 20, max: 100)</td>
              </tr>
              <tr>
                <td className="py-2">offset</td>
                <td className="py-2">Number of items to skip (for pagination)</td>
              </tr>
            </tbody>
          </table>
          
          <h4 className="text-lg font-medium mb-2">Pagination Response</h4>
          <p className="text-white/70 mb-4">
            Paginated responses include pagination metadata:
          </p>
          <DocCodeBlock 
            code={`{
  "items": [
    // Array of items
  ],
  "pagination": {
    "total": 156,   // Total number of items
    "offset": 20,   // Current offset
    "limit": 20     // Current limit
  }
}`}
            language="json"
          />
        </ExpandableSection>
        
        {/* Webhooks */}
        <ExpandableSection title="Webhooks">
          <p className="text-white/70 mb-6">
            Webhooks allow you to receive real-time notifications when specific events occur in your account.
          </p>
          
          <h4 className="text-lg font-medium mb-4">Available Events</h4>
          <table className="w-full mb-6">
            <thead className="border-b border-white/10">
              <tr>
                <th className="text-left py-2 text-white/70 font-medium">Event Type</th>
                <th className="text-left py-2 text-white/70 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-2">clipboard.item.created</td>
                <td className="py-2">A new clipboard item was created</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2">clipboard.item.updated</td>
                <td className="py-2">A clipboard item was updated</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2">clipboard.item.deleted</td>
                <td className="py-2">A clipboard item was deleted</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2">template.created</td>
                <td className="py-2">A new template was created</td>
              </tr>
              <tr>
                <td className="py-2">sync.completed</td>
                <td className="py-2">A sync operation has completed</td>
              </tr>
            </tbody>
          </table>
          
          <h4 className="text-lg font-medium mb-2">Webhook Payload Example</h4>
          <DocCodeBlock 
            code={`{
  "id": "evt_123456",
  "type": "clipboard.item.created",
  "created": "2023-09-10T08:15:00Z",
  "data": {
    "item": {
      "id": "cb_345678",
      "content": "New clipboard content",
      "type": "text",
      "created_at": "2023-09-10T08:15:00Z",
      "tags": ["important"],
      "pinned": false
    }
  }
}`}
            language="json"
          />
          
          <div className="flex items-center p-4 border border-white/10 rounded-lg mt-6 bg-white/5">
            <div className="mr-4 p-2 bg-white/10 rounded-full">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-medium">Webhook Security</h4>
              <p className="text-white/70 text-sm">
                All webhook payloads include a signature header for verification. Always verify webhook signatures to ensure they were sent by CopyClipCloud.
              </p>
            </div>
          </div>
        </ExpandableSection>
        
        {/* Versioning */}
        <ExpandableSection title="API Versioning">
          <p className="text-white/70 mb-6">
            The API uses versioned endpoints to ensure backward compatibility as we evolve the platform.
          </p>
          
          <h4 className="text-lg font-medium mb-2">Version Format</h4>
          <p className="text-white/70 mb-4">
            The version is included in the URL path:
          </p>
          <DocCodeBlock 
            code={`https://api.copyclipcloud.com/v1/clipboard`}
            language="text"
          />
          
          <h4 className="text-lg font-medium mb-2 mt-6">Version Lifecycle</h4>
          <table className="w-full">
            <thead className="border-b border-white/10">
              <tr>
                <th className="text-left py-2 text-white/70 font-medium">Status</th>
                <th className="text-left py-2 text-white/70 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-2">Current (v1)</td>
                <td className="py-2">Latest stable version, recommended for all new integrations</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2">Beta</td>
                <td className="py-2">Preview of upcoming features, may change without notice</td>
              </tr>
              <tr>
                <td className="py-2">Deprecated</td>
                <td className="py-2">Still available but will be removed in future</td>
              </tr>
            </tbody>
          </table>
          
          <div className="p-4 border border-white/10 rounded-lg mt-6">
            <h4 className="font-medium mb-2">Version Header</h4>
            <p className="text-white/70 text-sm">
              You can also specify the API version using the <code>X-API-Version</code> header.
              If both the URL path and header are specified, the URL path takes precedence.
            </p>
          </div>
        </ExpandableSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Link to="/docs/developer-portal" className="glass-panel p-6 hover:bg-white/5 transition-colors">
            <div className="flex items-center mb-3">
              <Key className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-medium">Developer Portal</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Manage your API keys and access settings
            </p>
          </Link>
          
          <Link to="/docs/api-explorer" className="glass-panel p-6 hover:bg-white/5 transition-colors">
            <div className="flex items-center mb-3">
              <Code className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-medium">API Explorer</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Interactive tool to test API endpoints
            </p>
          </Link>
        </div>
      </motion.div>
    </DocLayout>
  );
};

export default ApiDocumentation;
