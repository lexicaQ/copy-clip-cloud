
import { Cloud, Shield, Zap, Search, Sparkles, Code, Settings, Clock, Users, Globe, Lock, Database, Bell, Layers, PieChart, BarChart2, Share2, Cpu, Server, Coffee } from "lucide-react";

export const featureCards = [
  {
    title: "Intelligent Sync",
    description: "Seamlessly synchronize your clipboard across all Apple devices with real-time updates and conflict resolution. Your data is available instantly wherever you need it.",
    icon: Cloud,
    color: "from-blue-500/10 to-blue-600/5"
  },
  {
    title: "Military-Grade Encryption",
    description: "Your data is protected with AES-256 end-to-end encryption, ensuring complete privacy and security. Not even our servers can read your clipboard data.",
    icon: Shield,
    color: "from-green-500/10 to-green-600/5"
  },
  {
    title: "Lightning Fast",
    description: "Experience instant clipboard operations with our optimized performance engine that handles large files up to 50MB with no perceptible delay.",
    icon: Zap,
    color: "from-yellow-500/10 to-yellow-600/5"
  },
  {
    title: "Smart Search",
    description: "Find any copied item instantly with our AI-powered search that understands context, content type, and semantic meaning. Locate what you need in milliseconds.",
    icon: Search,
    color: "from-purple-500/10 to-purple-600/5"
  },
  {
    title: "AI Organization",
    description: "Let our machine learning algorithms automatically organize your clipboard items into smart categories, prioritizing what you're likely to need based on your usage patterns.",
    icon: Sparkles,
    color: "from-pink-500/10 to-pink-600/5"
  },
  {
    title: "Code Snippets",
    description: "Special handling for code with automatic syntax highlighting for over 100 programming languages, intelligent indentation, and version tracking.",
    icon: Code,
    color: "from-red-500/10 to-red-600/5"
  },
  {
    title: "Custom Rules",
    description: "Create powerful automation rules to handle specific types of clipboard content, including format conversion, text transformation, and conditional actions.",
    icon: Settings,
    color: "from-indigo-500/10 to-indigo-600/5"
  },
  {
    title: "History Timeline",
    description: "Access your complete clipboard history with our intuitive timeline interface. Jump back days, weeks, or months to find that important piece of information.",
    icon: Clock,
    color: "from-orange-500/10 to-orange-600/5"
  },
  {
    title: "Team Collaboration",
    description: "Share clipboard items with team members securely with fine-grained access controls. Perfect for distributed teams needing to share snippets, designs, or documentation.",
    icon: Users,
    color: "from-teal-500/10 to-teal-600/5"
  },
  {
    title: "Cross-Platform",
    description: "Seamlessly works across macOS, iOS, iPadOS, watchOS, and even Windows (beta). Your clipboard follows you everywhere, regardless of device or platform.",
    icon: Globe,
    color: "from-emerald-500/10 to-emerald-600/5"
  },
  {
    title: "Zero-Knowledge Privacy",
    description: "Our zero-knowledge architecture ensures your data remains private. We can't read your clipboard data, even if compelled by law enforcement.",
    icon: Lock,
    color: "from-cyan-500/10 to-cyan-600/5"
  },
  {
    title: "Offline Support",
    description: "Continue using CopyClipCloud even without internet access. Your data syncs when connection is restored, with smart conflict resolution.",
    icon: Database,
    color: "from-violet-500/10 to-violet-600/5"
  },
  {
    title: "Smart Notifications",
    description: "Get intelligent alerts when important patterns are detected in your clipboard, like passwords, private keys, or other sensitive information.",
    icon: Bell,
    color: "from-rose-500/10 to-rose-600/5"
  },
  {
    title: "Advanced Filters",
    description: "Filter your clipboard by content type, date, source application, device, and custom tags. Find exactly what you need with precision filtering.",
    icon: Layers,
    color: "from-amber-500/10 to-amber-600/5"
  },
  {
    title: "Usage Analytics",
    description: "Gain insights into your clipboard patterns with privacy-respecting analytics that never leave your device. Optimize your workflow with data-driven suggestions.",
    icon: PieChart,
    color: "from-lime-500/10 to-lime-600/5"
  },
  {
    title: "Productivity Reports",
    description: "Receive weekly productivity insights showing how CopyClipCloud has saved you time and improved your workflow efficiency.",
    icon: BarChart2,
    color: "from-fuchsia-500/10 to-fuchsia-600/5"
  },
  {
    title: "Content Distribution",
    description: "Share specific clipboard collections with clients or team members through secure, expiring links with optional password protection.",
    icon: Share2,
    color: "from-sky-500/10 to-sky-600/5"
  },
  {
    title: "AI-Powered Suggestions",
    description: "Receive intelligent suggestions based on your clipboard content, like formatting improvements, translation options, or related information.",
    icon: Cpu,
    color: "from-purple-500/10 to-purple-600/5"
  },
  {
    title: "Enterprise Controls",
    description: "Deploy across your organization with centralized management, security policies, and compliance controls for regulated industries.",
    icon: Server,
    color: "from-blue-500/10 to-blue-600/5"
  },
  {
    title: "Break Time Reminder",
    description: "Our wellness feature reminds you to take short breaks during intense work sessions, promoting better health and sustained productivity.",
    icon: Coffee,
    color: "from-amber-500/10 to-amber-600/5"
  }
];

export const showcaseFeatures = [
  {
    title: "Universal Clipboard",
    description: "Copy on one device, paste on another. Our synchronization technology ensures your clipboard is instantly available across all your devices. Whether you're working on your MacBook, iPad, or iPhone, your clipboard follows you everywhere, making cross-device workflows seamless and efficient.",
    icon: Cloud
  },
  {
    title: "Smart Organization",
    description: "Never lose track of important copied content again. CopyClipCloud's AI automatically categorizes your clipboard items, creating smart collections for code snippets, addresses, URLs, and more. The intelligent system learns from your usage patterns to suggest and prioritize the content you need most.",
    icon: Sparkles,
    isReversed: true
  },
  {
    title: "End-to-End Encryption",
    description: "Your clipboard often contains sensitive information. That's why we've implemented military-grade end-to-end encryption for all your data. Only your devices have the keys to decrypt your content, ensuring complete privacy and security even when syncing across multiple devices.",
    icon: Shield
  },
  {
    title: "Developer Toolkit",
    description: "For developers, CopyClipCloud is an essential productivity tool. With language-specific syntax highlighting, code formatting, diff comparison, and integration with popular IDEs like VS Code and JetBrains, you'll spend less time formatting and more time coding.",
    icon: Code,
    isReversed: true
  },
  {
    title: "Team Collaboration",
    description: "Share clipboard collections with team members while maintaining granular access controls. Perfect for design teams sharing assets, developers exchanging code snippets, or researchers collating information. All with the same encryption and privacy guarantees as your personal clipboard.",
    icon: Users
  }
];

export const usageMetrics = [
  { label: "Average Items Copied Daily", value: "142" },
  { label: "Time Saved Per User (Weekly)", value: "3.4 hours" },
  { label: "Satisfaction Rating", value: "4.8/5" },
  { label: "Enterprise Adoption", value: "10,000+" },
  { label: "Total Clipboard Items Synced", value: "1.2B+" }
];

export const deviceSupport = [
  { name: "macOS", version: "10.15+" },
  { name: "iOS", version: "14.0+" },
  { name: "iPadOS", version: "14.0+" },
  { name: "watchOS", version: "7.0+" },
  { name: "Windows", version: "10+ (Beta)" },
  { name: "Android", version: "Coming Q3 2023" },
  { name: "Linux", version: "Coming Q4 2023" },
  { name: "Web App", version: "Available Now" }
];

