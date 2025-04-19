
import React from "react";
import DocLayout from "./DocLayout";
import { AlertTriangle, CheckCircle, Info } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TroubleshootingGuide = () => {
  return (
    <DocLayout title="Troubleshooting Guide" icon={AlertTriangle} backLink="/docs" backText="Back to Documentation">
      <div className="space-y-6">
        <p className="text-gray-400">
          Solutions for common issues and questions about CopyClipCloud.
        </p>

        <div className="my-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
              Common Issues
            </h2>
            
            <div className="border border-white/10 rounded-lg divide-y divide-white/10">
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Sync Not Working</h3>
                <p className="text-gray-400 mb-4">
                  If your clipboard is not syncing between devices, try these steps:
                </p>
                <ol className="list-decimal list-inside text-gray-400 space-y-2">
                  <li>Ensure you're signed in to the same account on all devices</li>
                  <li>Check your internet connection</li>
                  <li>Verify that sync is enabled in settings</li>
                  <li>Restart the application on both devices</li>
                  <li>Check if you've reached the device limit for your plan</li>
                </ol>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Application Not Starting</h3>
                <p className="text-gray-400 mb-4">
                  If the application fails to start, try these solutions:
                </p>
                <ol className="list-decimal list-inside text-gray-400 space-y-2">
                  <li>Restart your computer</li>
                  <li>Reinstall the application</li>
                  <li>Check if your operating system is supported</li>
                  <li>Verify that your antivirus is not blocking the application</li>
                </ol>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Items Missing from History</h3>
                <p className="text-gray-400 mb-4">
                  If items are disappearing from your clipboard history:
                </p>
                <ol className="list-decimal list-inside text-gray-400 space-y-2">
                  <li>Check if you've reached your history limit (Basic plan: 50 items)</li>
                  <li>Verify if automatic cleanup settings are enabled</li>
                  <li>Check if items have reached their retention period</li>
                  <li>Ensure you haven't manually deleted the items</li>
                </ol>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Info className="w-6 h-6 text-blue-500" />
              Performance Optimization
            </h2>
            
            <div className="bg-black/20 border border-white/10 rounded-lg p-4 space-y-4">
              <h3 className="text-lg font-medium">Reducing Memory Usage</h3>
              <p className="text-gray-400">
                If the application is using too much memory, try these settings:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Limit maximum clipboard history items in Settings {'->'} Performance</li>
                <li>Disable thumbnail generation for large images</li>
                <li>Use text-only mode for very large text snippets</li>
                <li>Enable automatic cleanup of old items</li>
              </ul>
            </div>
            
            <div className="bg-black/20 border border-white/10 rounded-lg p-4 space-y-4">
              <h3 className="text-lg font-medium">Battery Usage</h3>
              <p className="text-gray-400">
                To optimize battery life on mobile devices:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Reduce sync frequency in Settings {'->'} Sync</li>
                <li>Enable battery-saving mode</li>
                <li>Limit background processes</li>
                <li>Use WiFi instead of cellular data when possible</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-500" />
              Security Recommendations
            </h2>
            
            <div className="bg-black/20 border border-white/10 rounded-lg p-4 space-y-4">
              <h3 className="text-lg font-medium">Protecting Sensitive Data</h3>
              <p className="text-gray-400">
                To ensure your sensitive clipboard data remains secure:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Enable end-to-end encryption in Security settings</li>
                <li>Use the secure clipboard feature for passwords and sensitive data</li>
                <li>Set up automatic deletion for sensitive items</li>
                <li>Enable two-factor authentication for your account</li>
                <li>Regularly review connected devices and revoke access for unused ones</li>
              </ul>
            </div>
          </div>
          
          <Accordion type="single" collapsible className="w-full border border-white/10 rounded-lg">
            <AccordionItem value="item-1" className="border-b border-white/10">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  <span>Internet Connection Issues</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 text-gray-400">
                <p className="mb-3">If you're experiencing connectivity problems:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Check your WiFi or cellular connection</li>
                  <li>Try connecting to a different network</li>
                  <li>Verify our service status at status.copyclipcloud.com</li>
                  <li>Restart your router if problems persist</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-white/10">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  <span>Permission Errors</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 text-gray-400">
                <p className="mb-3">If you're seeing permission errors:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Check clipboard access permissions in your OS settings</li>
                  <li>Restart the application after granting permissions</li>
                  <li>On macOS, ensure accessibility permissions are enabled</li>
                  <li>On Windows, try running the app as administrator</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="bg-black/20 border border-white/10 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Still Need Help?</h2>
            <p className="text-gray-400 mb-4">
              If you're still experiencing issues after trying these solutions, please contact our support team:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-white text-black hover:bg-white/90 transition-colors">
                Contact Support
              </a>
              <a href="/faq" className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-white/20 hover:bg-white/5 transition-colors">
                View FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </DocLayout>
  );
};

export default TroubleshootingGuide;
