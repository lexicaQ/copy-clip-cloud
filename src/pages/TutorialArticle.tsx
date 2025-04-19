
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArticleView from "@/components/docs/ArticleView";
import { Loader2 } from "lucide-react";

// Mock tutorial data
const tutorialData = {
  "1": {
    title: "Getting Started with CopyClipCloud",
    category: "Beginner",
    content: (
      <>
        <h2 id="introduction">Introduction</h2>
        <p>
          Welcome to CopyClipCloud! This tutorial will guide you through the basics of using our powerful clipboard management tool. 
          By the end of this guide, you'll understand how to efficiently track your clipboard history, organize items, and access them across devices.
        </p>
        
        <h2 id="prerequisites">Prerequisites</h2>
        <ul>
          <li>A compatible device (macOS, Windows, iOS, or Android)</li>
          <li>Active internet connection for cloud sync features</li>
          <li>CopyClipCloud application installed on your device</li>
        </ul>
        
        <h2 id="step-by-step">Step-by-Step Guide</h2>
        <h3>1. Installation</h3>
        <p>
          Download CopyClipCloud from our website or the appropriate app store for your device.
          Run the installer and follow the on-screen instructions to complete the setup process.
        </p>
        
        <h3>2. Initial Configuration</h3>
        <p>
          Launch CopyClipCloud and create a new account or sign in with an existing one.
          Grant the necessary permissions for the app to access your clipboard.
          Configure your preferred hotkeys for quick access.
        </p>
        
        <h3>3. Using the Basic Features</h3>
        <p>
          Every time you copy something, CopyClipCloud automatically saves it to your history.
          Access your clipboard history using the system tray icon or the configured hotkey.
          Click on any item in your history to paste it again.
        </p>
        
        <h2 id="tips">Tips & Best Practices</h2>
        <ul>
          <li>Use folders to organize related clipboard items</li>
          <li>Set up sync to access your clipboard across all your devices</li>
          <li>Use the search feature to quickly find specific items</li>
          <li>Configure automatic cleanup of older clipboard items</li>
        </ul>
        
        <h2 id="troubleshooting">Troubleshooting</h2>
        <h3>Common Issues</h3>
        <p>
          If CopyClipCloud isn't capturing clipboard items, check that you've granted the proper permissions.
          For sync issues, verify your internet connection and account status.
          Restart the application if you encounter any unexpected behavior.
        </p>
      </>
    ),
    author: "Sarah Johnson",
    date: "May 12, 2023",
    readTime: "5 min read",
    relatedLinks: [
      { title: "Advanced Organization Techniques", url: "/tutorials/2" },
      { title: "Syncing Across Multiple Devices", url: "/tutorials/3" },
      { title: "Keyboard Shortcuts Mastery", url: "/tutorials/5" }
    ]
  },
  "2": {
    title: "Advanced Organization Techniques",
    category: "Advanced",
    content: (
      <>
        <h2 id="introduction">Introduction</h2>
        <p>
          Once you've mastered the basics of CopyClipCloud, it's time to explore the advanced organization features.
          This tutorial will show you how to use folders, tags, and smart groups to keep your clipboard history perfectly organized.
        </p>
        
        <h2 id="prerequisites">Prerequisites</h2>
        <ul>
          <li>CopyClipCloud installed and configured</li>
          <li>Basic familiarity with the application</li>
          <li>At least 10 items in your clipboard history</li>
        </ul>
        
        <h2 id="step-by-step">Step-by-Step Guide</h2>
        <h3>1. Creating and Managing Folders</h3>
        <p>
          In the CopyClipCloud interface, click on the "Folders" section in the sidebar.
          Click "New Folder" and give it a descriptive name.
          Drag and drop clipboard items into your folders to organize them.
        </p>
        
        <h3>2. Using Tags for Flexible Organization</h3>
        <p>
          Right-click on any clipboard item and select "Add Tags".
          Create new tags or select from existing ones.
          Use the tags filter in the sidebar to quickly find related items.
        </p>
        
        <h3>3. Setting Up Smart Groups</h3>
        <p>
          Click on "Smart Groups" in the sidebar and select "Create New Smart Group".
          Define rules for automatic organization (e.g., "all images copied from Photoshop").
          Items matching your criteria will automatically appear in the smart group.
        </p>
        
        <h2 id="tips">Tips & Best Practices</h2>
        <ul>
          <li>Use consistent naming conventions for folders and tags</li>
          <li>Create project-specific folders for complex work</li>
          <li>Use color coding to visually distinguish between different categories</li>
          <li>Review and clean up your organization system monthly</li>
        </ul>
        
        <h2 id="troubleshooting">Troubleshooting</h2>
        <h3>Common Issues</h3>
        <p>
          If items aren't sorting correctly in smart groups, review and refine your filter criteria.
          For performance issues with large folder structures, consider archiving older content.
          Use the search function to locate misplaced items.
        </p>
      </>
    ),
    author: "Alex Chen",
    date: "June 3, 2023",
    readTime: "12 min read",
    relatedLinks: [
      { title: "Getting Started with CopyClipCloud", url: "/tutorials/1" },
      { title: "Working with Images and Rich Media", url: "/tutorials/6" }
    ]
  },
  "masterclass": {
    title: "Master Class: From Beginner to Pro",
    category: "Comprehensive",
    content: (
      <>
        <h2 id="introduction">Introduction to the Master Class</h2>
        <p>
          Welcome to the CopyClipCloud Master Class! This comprehensive guide will take you from a complete beginner to a power user.
          We'll cover everything from basic setup to advanced automation techniques and integration with your workflow.
        </p>
        
        <h2 id="prerequisites">Before You Begin</h2>
        <p>
          This master class assumes you have CopyClipCloud installed but requires no prior experience with the application.
          We'll start from the very beginning and progressively build your knowledge.
        </p>
        
        <h2 id="step-by-step">The Complete Learning Path</h2>
        <h3>Module 1: Foundation</h3>
        <p>
          We'll start with installation, account setup, and learning the basic interface.
          You'll learn how clipboard history works and how to access your recent items.
          By the end of this module, you'll be comfortable with the core functionality.
        </p>
        
        <h3>Module 2: Organization Mastery</h3>
        <p>
          Building on the basics, we'll explore the organizational tools in depth.
          You'll learn advanced folder structures, tagging strategies, and smart groups.
          We'll cover best practices for keeping even the most active clipboard history manageable.
        </p>
        
        <h3>Module 3: Cross-Device Workflow</h3>
        <p>
          This module focuses on cloud synchronization between all your devices.
          You'll learn how to configure, troubleshoot, and optimize the sync process.
          We'll cover strategies for maintaining a consistent experience across platforms.
        </p>
        
        <h3>Module 4: Security and Privacy</h3>
        <p>
          Protecting your sensitive clipboard data is crucial.
          Learn how to use encryption, password protection, and secure sharing.
          We'll cover privacy settings and best practices for handling confidential information.
        </p>
        
        <h3>Module 5: Automation and Integration</h3>
        <p>
          In this advanced module, you'll learn how to integrate CopyClipCloud with other applications.
          Create custom actions, templates, and automation rules.
          Build powerful workflows that save time and reduce repetitive tasks.
        </p>
        
        <h2 id="tips">Pro User Strategies</h2>
        <p>
          Once you've completed all modules, these advanced strategies will help you achieve expert status:
        </p>
        <ul>
          <li>Create context-aware clipboard actions based on the active application</li>
          <li>Design a personal template library for repeated text patterns</li>
          <li>Set up automated backup and archiving systems</li>
          <li>Customize keyboard shortcuts for maximum efficiency</li>
        </ul>
        
        <h2 id="troubleshooting">Complete Troubleshooting Guide</h2>
        <p>
          This comprehensive troubleshooting section covers solutions to every common issue:
        </p>
        <ul>
          <li>Diagnosing and fixing sync problems</li>
          <li>Resolving performance issues with large clipboard histories</li>
          <li>Recovering from data corruption or loss</li>
          <li>Fixing integration issues with other applications</li>
        </ul>
      </>
    ),
    author: "Daniel Kim",
    date: "April 2023",
    readTime: "45 min course",
    relatedLinks: [
      { title: "Getting Started with CopyClipCloud", url: "/tutorials/1" },
      { title: "Advanced Organization Techniques", url: "/tutorials/2" },
      { title: "Encryption and Security Features", url: "/tutorials/4" }
    ]
  }
};

const TutorialArticle = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [tutorial, setTutorial] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Simulate fetching tutorial data
    setLoading(true);
    
    setTimeout(() => {
      if (id && tutorialData[id]) {
        setTutorial(tutorialData[id]);
        setError("");
      } else {
        setError("Tutorial not found");
      }
      setLoading(false);
    }, 800);
  }, [id]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="w-8 h-8 animate-spin" />
            <span className="ml-3">Loading tutorial...</span>
          </div>
        ) : error ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Tutorial Not Found</h2>
            <p className="text-gray-400 mb-6">We couldn't find the tutorial you're looking for.</p>
            <Link 
              to="/tutorials" 
              className="px-6 py-3 bg-white text-black rounded-full inline-flex items-center"
            >
              Back to Tutorials
            </Link>
          </div>
        ) : tutorial && (
          <ArticleView
            title={tutorial.title}
            content={tutorial.content}
            category={tutorial.category}
            author={tutorial.author}
            date={tutorial.date}
            readTime={tutorial.readTime}
            backLink="/tutorials"
            backText="Back to Tutorials"
            relatedLinks={tutorial.relatedLinks}
          />
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default TutorialArticle;
