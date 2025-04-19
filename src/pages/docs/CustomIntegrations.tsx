
import React from "react";
import DocLayout from "./DocLayout";
import { Code, FileCode, ArrowRight } from "lucide-react";

const CustomIntegrations = () => {
  return (
    <DocLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Custom Integrations</h1>
        <p className="text-gray-400">
          Learn how to integrate CopyClipCloud with your existing workflow and applications.
        </p>

        <div className="my-8 space-y-6">
          <h2 className="text-2xl font-semibold">API Overview</h2>
          <p className="text-gray-400">
            CopyClipCloud offers a comprehensive API that allows you to integrate our clipboard management
            functionality into your own applications and workflows. This documentation provides detailed
            information about available endpoints, authentication, and example use cases.
          </p>

          <div className="bg-black/20 border border-white/10 rounded-lg p-4 space-y-4">
            <h3 className="text-xl font-medium">Authentication</h3>
            <p className="text-gray-400">
              All API requests require authentication using an API key. You can generate an API key in your account settings.
            </p>
            <div className="bg-black p-4 rounded-md text-sm overflow-auto">
              <pre><code>
{`// Example API request with authentication
fetch('https://api.copyclipcloud.com/v1/clipboard', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})`}
              </code></pre>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8">Command Line Interface</h2>
          <p className="text-gray-400">
            Our CLI tool allows you to interact with your clipboard history directly from your terminal.
          </p>
          <div className="bg-black/20 border border-white/10 rounded-lg p-4 space-y-4">
            <h3 className="text-xl font-medium">Installation</h3>
            <div className="bg-black p-4 rounded-md text-sm overflow-auto">
              <pre><code>npm install -g copyclipcloud-cli</code></pre>
            </div>

            <h3 className="text-xl font-medium">Basic Usage</h3>
            <div className="bg-black p-4 rounded-md text-sm overflow-auto">
              <pre><code>
{`# Get the latest clipboard item
ccc get

# Save a text to clipboard
ccc save "Text to save"

# List recent items
ccc list --limit 5`}
              </code></pre>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8">Integration Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-black/20 border border-white/10 rounded-lg p-6 hover:bg-black/30 transition-colors">
              <FileCode className="w-10 h-10 mb-4" />
              <h3 className="text-lg font-medium mb-2">Slack Integration</h3>
              <p className="text-gray-400 text-sm mb-4">
                Connect CopyClipCloud with Slack to share clipboard items directly with your team.
              </p>
              <a href="#" className="text-white text-sm flex items-center gap-1 group">
                View Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="bg-black/20 border border-white/10 rounded-lg p-6 hover:bg-black/30 transition-colors">
              <Code className="w-10 h-10 mb-4" />
              <h3 className="text-lg font-medium mb-2">VSCode Extension</h3>
              <p className="text-gray-400 text-sm mb-4">
                Access your clipboard history directly within Visual Studio Code.
              </p>
              <a href="#" className="text-white text-sm flex items-center gap-1 group">
                View Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8">Rate Limits</h2>
          <p className="text-gray-400">
            To ensure service stability, API requests are subject to rate limiting. The limits vary based on your subscription plan:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400 mt-4">
            <li><strong>Basic plan:</strong> 60 requests per hour</li>
            <li><strong>Pro plan:</strong> 1,000 requests per hour</li>
            <li><strong>Enterprise plan:</strong> 10,000 requests per hour</li>
          </ul>
        </div>
      </div>
    </DocLayout>
  );
};

export default CustomIntegrations;
