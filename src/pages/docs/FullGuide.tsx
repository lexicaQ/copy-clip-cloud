
import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Check, ChevronDown, ChevronRight, Clipboard, Cloud, Key, Lock, BookMarked } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FullGuide = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [completedSections, setCompletedSections] = useState<string[]>([]);

  const toggleCompleted = (sectionId: string) => {
    if (completedSections.includes(sectionId)) {
      setCompletedSections(completedSections.filter(id => id !== sectionId));
    } else {
      setCompletedSections([...completedSections, sectionId]);
    }
  };

  const sections = [
    {
      id: "overview",
      title: "Overview",
      icon: BookOpen,
      content: (
        <div>
          <p className="text-gray-400 mb-4">
            CopyClipCloud is a powerful clipboard manager that enhances your productivity by keeping track of everything you copy, 
            organizing it intelligently, and making it available across all your devices. This guide will walk you through
            all aspects of the application from basic setup to advanced features.
          </p>
          <p className="text-gray-400 mb-4">
            Whether you're a casual user looking to keep track of copied items or a power user seeking to 
            automate clipboard workflows, CopyClipCloud has features designed for you.
          </p>
          <div className="bg-white/5 p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-2">What this guide covers:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>Setting up CopyClipCloud on your devices</li>
              <li>Navigating the user interface</li>
              <li>Managing your clipboard history</li>
              <li>Organizing with folders and tags</li>
              <li>Using templates and snippets</li>
              <li>Syncing across multiple devices</li>
              <li>Security features and privacy controls</li>
              <li>Advanced features and automation</li>
              <li>Troubleshooting common issues</li>
            </ul>
          </div>
          <p className="text-gray-400">
            Use the navigation on the left to jump to specific sections, or follow along sequentially for a complete onboarding experience.
          </p>
        </div>
      )
    },
    {
      id: "installation",
      title: "Installation & Setup",
      icon: Key,
      content: (
        <div>
          <h3 className="text-xl font-bold mb-4">Getting Started</h3>
          <p className="text-gray-400 mb-4">
            Installing CopyClipCloud is a straightforward process. The application is available for macOS, with iOS and other platform support coming soon.
          </p>
          
          <div className="space-y-6 mb-6">
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-bold">1</span>
              </div>
              <div>
                <h4 className="font-medium">Download the Installer</h4>
                <p className="text-sm text-gray-400 mb-2">Visit our website and download the latest version of CopyClipCloud.</p>
                <Link 
                  to="/download" 
                  className="text-sm text-white underline hover:text-gray-300 transition-colors"
                >
                  Go to download page
                </Link>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-bold">2</span>
              </div>
              <div>
                <h4 className="font-medium">Run the Installer</h4>
                <p className="text-sm text-gray-400">
                  Open the downloaded .dmg file and drag the CopyClipCloud icon to your Applications folder.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-bold">3</span>
              </div>
              <div>
                <h4 className="font-medium">Launch the Application</h4>
                <p className="text-sm text-gray-400">
                  Open CopyClipCloud from your Applications folder or using Spotlight (⌘ + Space).
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-bold">4</span>
              </div>
              <div>
                <h4 className="font-medium">Initial Configuration</h4>
                <p className="text-sm text-gray-400">
                  Follow the onboarding wizard to set up your account and configure basic preferences.
                </p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-4">System Requirements</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-400 mb-6">
            <li>macOS 15 or later</li>
            <li>Minimum 4GB RAM</li>
            <li>500MB free disk space</li>
            <li>Internet connection for cloud synchronization</li>
          </ul>
          
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Important Notes:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>You'll need to grant CopyClipCloud permission to access your clipboard</li>
              <li>For full functionality, enable "Launch at startup" during setup</li>
              <li>A free account provides basic features, while premium features require a subscription</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <Link 
              to="/docs/installation-guide" 
              className="text-white underline hover:text-gray-300 transition-colors"
            >
              View detailed installation guide →
            </Link>
          </div>
        </div>
      )
    },
    {
      id: "interface",
      title: "User Interface",
      icon: Clipboard,
      content: (
        <div>
          <h3 className="text-xl font-bold mb-4">Main Interface Elements</h3>
          <p className="text-gray-400 mb-6">
            CopyClipCloud features a clean, intuitive interface designed for quick access to your clipboard history.
          </p>
          
          <Accordion type="single" collapsible className="mb-6">
            <AccordionItem value="menubar" className="border-white/10">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mr-3">
                    <Clipboard className="w-4 h-4" />
                  </div>
                  <span>Menu Bar Icon</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pl-11">
                The main entry point to CopyClipCloud. Click the icon in your menu bar to access your clipboard history, 
                search for items, and quickly paste recent clips.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="history" className="border-white/10">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mr-3">
                    <BookMarked className="w-4 h-4" />
                  </div>
                  <span>Clipboard History</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pl-11">
                The core of the application, showing all your copied items in reverse chronological order. 
                Items are automatically categorized by type (text, image, file, etc.) and can be filtered or searched.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="sidebar" className="border-white/10">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mr-3">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  <span>Sidebar Navigation</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pl-11">
                Access different views and organize your clipboard content with folders, smart collections, and tags.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="search" className="border-white/10">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <span>Search & Filtering</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pl-11">
                Quickly find specific clipboard items using the search bar. Filter by content type, date, or custom tags.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <h3 className="text-xl font-bold mb-4">Clipboard Item Interactions</h3>
          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                <Check className="w-3 h-3" />
              </div>
              <div>
                <h4 className="font-medium">Clicking an item</h4>
                <p className="text-sm text-gray-400">Pastes the item at your current cursor position</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                <Check className="w-3 h-3" />
              </div>
              <div>
                <h4 className="font-medium">Right-clicking an item</h4>
                <p className="text-sm text-gray-400">Opens a context menu with additional options</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                <Check className="w-3 h-3" />
              </div>
              <div>
                <h4 className="font-medium">Hovering over an item</h4>
                <p className="text-sm text-gray-400">Shows a preview and quick action buttons</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                <Check className="w-3 h-3" />
              </div>
              <div>
                <h4 className="font-medium">Drag and drop</h4>
                <p className="text-sm text-gray-400">Move items between folders or into other applications</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Keyboard Navigation:</h4>
            <p className="text-sm text-gray-400 mb-3">
              CopyClipCloud is designed to be keyboard-friendly. Master these shortcuts to boost your productivity:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>⌘ + ⇧ + V: Open clipboard history</li>
              <li>↑/↓: Navigate between clipboard items</li>
              <li>Enter: Paste selected item</li>
              <li>⌘ + Delete: Remove selected item</li>
              <li>⌘ + F: Focus search field</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <Link 
              to="/docs/user-interface-overview" 
              className="text-white underline hover:text-gray-300 transition-colors"
            >
              View detailed interface guide →
            </Link>
          </div>
        </div>
      )
    },
    {
      id: "syncing",
      title: "Cloud Synchronization",
      icon: Cloud,
      content: (
        <div>
          <h3 className="text-xl font-bold mb-4">Setting Up Cloud Sync</h3>
          <p className="text-gray-400 mb-6">
            One of CopyClipCloud's most powerful features is the ability to synchronize your clipboard across all your devices.
          </p>
          
          <div className="space-y-6 mb-6">
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-bold">1</span>
              </div>
              <div>
                <h4 className="font-medium">Create a CopyClipCloud Account</h4>
                <p className="text-sm text-gray-400">
                  If you haven't already, create an account during the setup process or from the Settings menu.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-bold">2</span>
              </div>
              <div>
                <h4 className="font-medium">Enable Sync</h4>
                <p className="text-sm text-gray-400">
                  Go to Settings → Sync and toggle "Enable Cloud Synchronization" to on.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-bold">3</span>
              </div>
              <div>
                <h4 className="font-medium">Install on Other Devices</h4>
                <p className="text-sm text-gray-400">
                  Install CopyClipCloud on your other devices and sign in with the same account.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-bold">4</span>
              </div>
              <div>
                <h4 className="font-medium">Configure Sync Options</h4>
                <p className="text-sm text-gray-400">
                  Customize what gets synced (text, images, files) and sync frequency.
                </p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-4">How Sync Works</h3>
          <p className="text-gray-400 mb-4">
            CopyClipCloud uses a secure, encrypted synchronization system to keep your clipboard history consistent across devices:
          </p>
          
          <div className="bg-white/5 p-4 rounded-lg mb-6">
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>All data is encrypted on your device before being sent to our servers</li>
              <li>Only you can decrypt your clipboard data with your account credentials</li>
              <li>Sync happens automatically in the background as you copy new items</li>
              <li>Changes made on one device (like deleting or organizing items) propagate to all devices</li>
              <li>Conflict resolution ensures you don't lose data when making changes on multiple devices</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-bold mb-4">Sync Settings</h3>
          <p className="text-gray-400 mb-4">
            Customize your sync behavior in Settings → Sync:
          </p>
          
          <Accordion type="single" collapsible className="mb-6">
            <AccordionItem value="content" className="border-white/10">
              <AccordionTrigger className="hover:no-underline">
                <span>Content Types</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Choose which types of content to sync:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Text (always enabled)</li>
                  <li>Formatted text (RTF, HTML)</li>
                  <li>Images</li>
                  <li>Files</li>
                  <li>Code snippets</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="frequency" className="border-white/10">
              <AccordionTrigger className="hover:no-underline">
                <span>Sync Frequency</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Adjust how often synchronization occurs:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Real-time (immediate sync)</li>
                  <li>Every 5 minutes</li>
                  <li>Every 15 minutes</li>
                  <li>Every hour</li>
                  <li>Manual sync only</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="limits" className="border-white/10">
              <AccordionTrigger className="hover:no-underline">
                <span>Storage Limits</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <p>Free accounts include:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 mb-3">
                  <li>Up to 100 text items</li>
                  <li>Up to 20 images</li>
                  <li>Up to 10MB total file storage</li>
                </ul>
                <p>Premium accounts include:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Unlimited text items</li>
                  <li>Up to 1,000 images</li>
                  <li>Up to 1GB total file storage</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Troubleshooting Sync Issues:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>Ensure you're signed in with the same account on all devices</li>
              <li>Check your internet connection</li>
              <li>Try manually initiating a sync from Settings → Sync → Sync Now</li>
              <li>Verify that you haven't exceeded your storage limits</li>
              <li>If problems persist, try signing out and back in</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <Link 
              to="/docs/cross-device-sync" 
              className="text-white underline hover:text-gray-300 transition-colors"
            >
              View detailed sync documentation →
            </Link>
          </div>
        </div>
      )
    },
    {
      id: "security",
      title: "Security & Privacy",
      icon: Lock,
      content: (
        <div>
          <h3 className="text-xl font-bold mb-4">Security Features</h3>
          <p className="text-gray-400 mb-6">
            CopyClipCloud takes the security of your clipboard data seriously. We've implemented multiple layers of protection:
          </p>
          
          <div className="space-y-6 mb-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium">End-to-End Encryption</h4>
                <p className="text-sm text-gray-400">
                  All your clipboard data is encrypted on your device before being stored or synchronized.
                  We use industry-standard AES-256 encryption to ensure your data remains private.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Secure Authentication</h4>
                <p className="text-sm text-gray-400">
                  Multi-factor authentication options protect your account access.
                  Support for biometric authentication on compatible devices adds an extra layer of security.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Local-Only Mode</h4>
                <p className="text-sm text-gray-400">
                  For maximum privacy, you can choose to store all data locally without cloud synchronization.
                  This ensures your clipboard data never leaves your device.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Automatic Expiration</h4>
                <p className="text-sm text-gray-400">
                  Configure automatic deletion of sensitive clipboard items after a specified time period.
                  This helps reduce the risk of unauthorized access to sensitive information.
                </p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-4">Privacy Controls</h3>
          <p className="text-gray-400 mb-4">
            CopyClipCloud puts you in control of your data:
          </p>
          
          <Accordion type="single" collapsible className="mb-6">
            <AccordionItem value="exclusions" className="border-white/10">
              <AccordionTrigger className="hover:no-underline">
                <span>Exclusion Rules</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <p className="mb-2">Configure rules to prevent certain types of content from being saved:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Clipboard content from specific applications (e.g., password managers)</li>
                  <li>Text matching specific patterns (e.g., credit card numbers, passwords)</li>
                  <li>Content copied from websites with specific domains</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="sensitive" className="border-white/10">
              <AccordionTrigger className="hover:no-underline">
                <span>Sensitive Content Protection</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <p className="mb-2">Additional protections for sensitive information:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Mask sensitive content in the preview (e.g., show ••••• instead of actual text)</li>
                  <li>Require authentication before viewing or pasting certain items</li>
                  <li>Auto-tag content that appears to contain sensitive information</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="data" className="border-white/10">
              <AccordionTrigger className="hover:no-underline">
                <span>Data Management</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <p className="mb-2">Take control of your clipboard data:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Export your clipboard history in various formats</li>
                  <li>Delete individual items or bulk-delete based on criteria</li>
                  <li>Completely purge all cloud data</li>
                  <li>Request account deletion with all associated data</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Our Privacy Commitment:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>We never access or analyze your clipboard content</li>
              <li>We do not sell or share your data with third parties</li>
              <li>We only collect minimal diagnostic information to improve the service</li>
              <li>You can opt out of all analytics and telemetry</li>
              <li>We comply with GDPR, CCPA, and other privacy regulations</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <Link 
              to="/docs/security-privacy" 
              className="text-white underline hover:text-gray-300 transition-colors"
            >
              View detailed security documentation →
            </Link>
          </div>
        </div>
      )
    }
  ];

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
            <span className="text-gradient">Complete User Guide</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive guide to using CopyClipCloud
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div 
              className="lg:w-1/4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="glass-panel p-4 sticky top-24">
                <h3 className="text-lg font-bold mb-4">Guide Sections</h3>
                <div className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center ${
                        activeSection === section.id ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5'
                      } transition-colors`}
                      onClick={() => setActiveSection(section.id)}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <section.icon className="w-4 h-4 mr-2" />
                          <span>{section.title}</span>
                        </div>
                        
                        <button 
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            completedSections.includes(section.id) 
                              ? 'bg-white text-black' 
                              : 'bg-white/10'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCompleted(section.id);
                          }}
                        >
                          {completedSections.includes(section.id) && (
                            <Check className="w-3 h-3" />
                          )}
                        </button>
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-white">{completedSections.length}/{sections.length}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                    <div 
                      className="h-full bg-white rounded-full"
                      style={{ width: `${(completedSections.length / sections.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-3/4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="glass-panel p-8">
                {sections.map((section) => (
                  <div 
                    key={section.id} 
                    className={activeSection === section.id ? 'block' : 'hidden'}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                        <section.icon className="w-6 h-6" />
                      </div>
                      <h2 className="text-3xl font-bold">{section.title}</h2>
                    </div>
                    
                    {section.content}
                    
                    <div className="flex justify-between items-center mt-10 pt-6 border-t border-white/10">
                      <button
                        className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        onClick={() => {
                          const currentIndex = sections.findIndex(s => s.id === activeSection);
                          if (currentIndex > 0) {
                            setActiveSection(sections[currentIndex - 1].id);
                          }
                        }}
                        disabled={sections.findIndex(s => s.id === activeSection) === 0}
                      >
                        <div className="flex items-center">
                          <ChevronLeft className="w-4 h-4 mr-2" />
                          <span>Previous</span>
                        </div>
                      </button>
                      
                      <button
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          completedSections.includes(section.id)
                            ? 'bg-white/10 text-gray-300 hover:bg-white/15'
                            : 'bg-white text-black hover:bg-opacity-90'
                        }`}
                        onClick={() => toggleCompleted(section.id)}
                      >
                        {completedSections.includes(section.id) ? 'Mark as Incomplete' : 'Mark as Complete'}
                      </button>
                      
                      <button
                        className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        onClick={() => {
                          const currentIndex = sections.findIndex(s => s.id === activeSection);
                          if (currentIndex < sections.length - 1) {
                            setActiveSection(sections[currentIndex + 1].id);
                          }
                        }}
                        disabled={sections.findIndex(s => s.id === activeSection) === sections.length - 1}
                      >
                        <div className="flex items-center">
                          <span>Next</span>
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </div>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FullGuide;

function ChevronLeft(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <path d="m15 18-6-6 6-6"/>
    </svg>
  );
}

