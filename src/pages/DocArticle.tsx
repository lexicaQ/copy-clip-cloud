
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArticleView from "@/components/docs/ArticleView";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

// Mock documentation data
const docData = {
  "getting-started": {
    "installation-guide": {
      title: "Installation Guide",
      category: "Getting Started",
      content: (
        <>
          <h2 id="introduction">Introduction</h2>
          <p>
            This guide will walk you through the process of installing CopyClipCloud on various platforms.
            CopyClipCloud is available for macOS, Windows, iOS, and Android, with a consistent experience across all devices.
          </p>
          
          <h2 id="prerequisites">System Requirements</h2>
          <h3>For macOS:</h3>
          <ul>
            <li>macOS 10.14 Mojave or later</li>
            <li>At least 4GB of RAM</li>
            <li>100MB of available storage</li>
          </ul>
          
          <h3>For Windows:</h3>
          <ul>
            <li>Windows 10 or later</li>
            <li>At least 4GB of RAM</li>
            <li>100MB of available storage</li>
          </ul>
          
          <h3>For Mobile Devices:</h3>
          <ul>
            <li>iOS 14 or later / Android 8.0 or later</li>
            <li>50MB of available storage</li>
          </ul>
          
          <h2 id="step-by-step">Installation Steps</h2>
          <h3>macOS Installation</h3>
          <ol>
            <li>Download the latest version from our website or the Mac App Store</li>
            <li>Open the downloaded .dmg file</li>
            <li>Drag CopyClipCloud to your Applications folder</li>
            <li>Launch CopyClipCloud from your Applications folder</li>
            <li>If prompted, allow the app to access your clipboard</li>
          </ol>
          
          <h3>Windows Installation</h3>
          <ol>
            <li>Download the installer from our website</li>
            <li>Run the .exe file and follow the installation wizard</li>
            <li>Choose your preferred installation location</li>
            <li>Complete the installation and launch CopyClipCloud</li>
            <li>Grant the necessary permissions when prompted</li>
          </ol>
          
          <h3>Mobile Installation</h3>
          <ol>
            <li>Open the App Store (iOS) or Google Play Store (Android)</li>
            <li>Search for "CopyClipCloud"</li>
            <li>Tap "Install" or "Get"</li>
            <li>Once installed, open the app and follow the setup instructions</li>
          </ol>
          
          <h2 id="tips">Installation Tips</h2>
          <ul>
            <li>For the best experience, install CopyClipCloud on all your devices</li>
            <li>Enable "Launch at startup" for seamless clipboard management</li>
            <li>If you encounter permission issues, check your system's security settings</li>
          </ul>
          
          <h2 id="troubleshooting">Troubleshooting Installation Issues</h2>
          <h3>Common Problems and Solutions</h3>
          <p>
            <strong>Installation fails on macOS:</strong> Check that you're allowing apps from identified developers in Security & Privacy settings.
          </p>
          <p>
            <strong>App won't start after installation:</strong> Try restarting your device and launching the app again.
          </p>
          <p>
            <strong>Missing permissions:</strong> Open your system settings and ensure CopyClipCloud has the necessary permissions to access your clipboard.
          </p>
        </>
      ),
      author: "Technical Team",
      date: "Updated April 2023",
      readTime: "4 min read",
      relatedLinks: [
        { title: "Quick Start Tutorial", url: "/docs/getting-started/quick-start" },
        { title: "User Interface Overview", url: "/docs/getting-started/interface-overview" }
      ]
    },
    "quick-start": {
      title: "Quick Start Tutorial",
      category: "Getting Started",
      content: (
        <>
          <h2 id="introduction">Getting Started Quickly</h2>
          <p>
            This quick start guide will help you get up and running with CopyClipCloud in just a few minutes.
            By following these steps, you'll be able to start using the essential features right away.
          </p>
          
          <h2 id="prerequisites">Before You Begin</h2>
          <p>Make sure you have:</p>
          <ul>
            <li>CopyClipCloud installed on your device</li>
            <li>An internet connection (for account creation and sync)</li>
          </ul>
          
          <h2 id="step-by-step">Quick Setup in 5 Steps</h2>
          <h3>1. Create Your Account</h3>
          <p>
            Launch CopyClipCloud and click "Create Account"
            Enter your email address and create a secure password
            Verify your email address by clicking the link sent to your inbox
          </p>
          
          <h3>2. Configure Basic Settings</h3>
          <p>
            Once signed in, open the Preferences panel (⚙️ icon)
            In the General tab, enable "Launch at startup"
            In the History tab, set your preferred clipboard history size
          </p>
          
          <h3>3. Enable Cloud Sync</h3>
          <p>
            Go to the Sync tab in Preferences
            Toggle "Enable Cloud Sync"
            Choose which content types you want to sync (text, images, files)
          </p>
          
          <h3>4. Learn Essential Keyboard Shortcuts</h3>
          <p>
            Open clipboard history: Cmd+Shift+V (Mac) or Ctrl+Shift+V (Windows)
            Paste from history: Select an item using arrow keys, then press Enter
            Search history: Cmd+Shift+F (Mac) or Ctrl+Shift+F (Windows)
          </p>
          
          <h3>5. Make Your First Copy and Paste</h3>
          <p>
            Copy some text from any application
            Open CopyClipCloud using the keyboard shortcut
            You'll see your copied item in the history
            Click on it to paste it again
          </p>
          
          <h2 id="tips">Quick Tips</h2>
          <ul>
            <li>Pin frequently used items by clicking the pin icon</li>
            <li>Use the search function to find specific items quickly</li>
            <li>Right-click on items for additional options</li>
          </ul>
          
          <h2 id="troubleshooting">Quick Troubleshooting</h2>
          <p>
            <strong>Can't see copied items?</strong> Check that CopyClipCloud has the necessary permissions in your system settings.
          </p>
          <p>
            <strong>Sync not working?</strong> Verify your internet connection and account status in the app.
          </p>
        </>
      ),
      author: "User Experience Team",
      date: "Updated March 2023",
      readTime: "3 min read",
      relatedLinks: [
        { title: "Installation Guide", url: "/docs/getting-started/installation-guide" },
        { title: "Key Concepts", url: "/docs/getting-started/key-concepts" }
      ]
    }
  },
  "security": {
    "encryption-features": {
      title: "Encryption Features",
      category: "Security & Privacy",
      content: (
        <>
          <h2 id="introduction">Introduction to CopyClipCloud Encryption</h2>
          <p>
            CopyClipCloud takes your data security seriously. This guide explains the encryption features
            built into the application to protect your sensitive clipboard data.
          </p>
          
          <h2 id="prerequisites">Security Basics</h2>
          <p>
            Understanding these concepts will help you make the most of CopyClipCloud's security features:
          </p>
          <ul>
            <li>End-to-end encryption: Data is encrypted before leaving your device and can only be decrypted by your authorized devices</li>
            <li>Zero-knowledge architecture: We have no ability to access your encrypted data</li>
            <li>Local vs. cloud storage: How your settings affect where data is stored</li>
          </ul>
          
          <h2 id="step-by-step">CopyClipCloud Encryption Features</h2>
          <h3>1. End-to-End Encryption</h3>
          <p>
            All data synchronized between your devices is protected with end-to-end encryption.
            This means that only your devices, with your encryption keys, can decrypt and read the data.
            Neither CopyClipCloud servers nor any third parties can access your clipboard contents.
          </p>
          
          <h3>2. Local Encryption</h3>
          <p>
            Even data stored locally on your device is encrypted using AES-256, an industry-standard
            encryption algorithm. This protects your clipboard history if your device is lost or stolen.
          </p>
          
          <h3>3. Password Protection</h3>
          <p>
            You can enable an additional layer of security by setting up password protection.
            When enabled, you'll need to enter your password to access the clipboard history.
            This is particularly useful for shared or public computers.
          </p>
          
          <h3>4. Secure Item Sharing</h3>
          <p>
            When you share clipboard items with others, CopyClipCloud creates secure, time-limited links
            with optional password protection. These links automatically expire after a set period.
          </p>
          
          <h2 id="tips">Security Best Practices</h2>
          <ul>
            <li>Use a strong, unique password for your CopyClipCloud account</li>
            <li>Enable two-factor authentication for additional security</li>
            <li>Regularly review and clear sensitive items from your clipboard history</li>
            <li>Set up automatic pruning of older clipboard items</li>
            <li>Configure content filters to prevent certain types of data from being stored</li>
          </ul>
          
          <h2 id="troubleshooting">Troubleshooting Security Features</h2>
          <h3>Common Issues</h3>
          <p>
            <strong>Lost encryption password:</strong> If you lose your encryption password, you won't be able to recover your encrypted data. Consider using a password manager.
          </p>
          <p>
            <strong>Sync issues with encryption enabled:</strong> If you're experiencing sync problems with encryption enabled, try refreshing your encryption keys in Settings {">"} Security {">"} Advanced.
          </p>
          <p>
            <strong>Two-factor authentication problems:</strong> If you can't access your 2FA device, use one of your backup codes or contact support.
          </p>
        </>
      ),
      author: "Security Team",
      date: "Updated February 2023",
      readTime: "6 min read",
      relatedLinks: [
        { title: "Password Protection", url: "/docs/security/password-protection" },
        { title: "Privacy Controls", url: "/docs/security/privacy-controls" }
      ]
    }
  }
};

const DocArticle = () => {
  const { category, slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Simulate fetching article data
    setLoading(true);
    
    setTimeout(() => {
      if (category && slug && docData[category] && docData[category][slug]) {
        setArticle(docData[category][slug]);
        setError("");
      } else {
        setError("Article not found");
      }
      setLoading(false);
    }, 800);
  }, [category, slug]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="w-8 h-8 animate-spin" />
            <span className="ml-3">Loading article...</span>
          </div>
        ) : error ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
            <p className="text-gray-400 mb-6">We couldn't find the documentation article you're looking for.</p>
            <Link 
              to="/docs" 
              className="px-6 py-3 bg-white text-black rounded-full inline-flex items-center"
            >
              Back to Documentation
            </Link>
          </div>
        ) : article && (
          <ArticleView
            title={article.title}
            content={article.content}
            category={article.category}
            author={article.author}
            date={article.date}
            readTime={article.readTime}
            backLink="/docs"
            backText="Back to Documentation"
            relatedLinks={article.relatedLinks}
          />
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default DocArticle;
