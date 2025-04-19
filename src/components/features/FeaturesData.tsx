
import { Cloud, Shield, Zap, Search, Sparkles, Code, Settings, Clock, Users } from "lucide-react";

export const featureCards = [
  {
    title: "Intelligent Sync",
    description: "Seamlessly synchronize your clipboard across all Apple devices with real-time updates and conflict resolution.",
    icon: Cloud,
    color: "from-blue-500/10 to-blue-600/5",
    link: "/features/universal-clipboard"
  },
  {
    title: "Military-Grade Encryption",
    description: "Your data is protected with end-to-end encryption, ensuring complete privacy and security at all times.",
    icon: Shield,
    color: "from-green-500/10 to-green-600/5",
    link: "/features/end-to-end-encryption"
  },
  {
    title: "Lightning Fast",
    description: "Experience instant clipboard operations with our optimized performance engine, even with large files.",
    icon: Zap,
    color: "from-yellow-500/10 to-yellow-600/5",
    comingSoon: true
  },
  {
    title: "Smart Search",
    description: "Find any copied item instantly with our AI-powered search that understands context and content.",
    icon: Search,
    color: "from-purple-500/10 to-purple-600/5",
    comingSoon: true
  },
  {
    title: "AI Organization",
    description: "Let our AI automatically organize your clipboard items into smart categories and suggestions.",
    icon: Sparkles,
    color: "from-pink-500/10 to-pink-600/5",
    link: "/features/smart-organization"
  },
  {
    title: "Code Snippets",
    description: "Special handling for code with syntax highlighting and automatic language detection.",
    icon: Code,
    color: "from-red-500/10 to-red-600/5",
    comingSoon: true
  },
  {
    title: "Custom Rules",
    description: "Create powerful automation rules to handle specific types of clipboard content.",
    icon: Settings,
    color: "from-indigo-500/10 to-indigo-600/5",
    comingSoon: true
  },
  {
    title: "History Timeline",
    description: "Access your complete clipboard history with our intuitive timeline interface.",
    icon: Clock,
    color: "from-orange-500/10 to-orange-600/5",
    comingSoon: true
  },
  {
    title: "Team Collaboration",
    description: "Share clipboard items with team members securely with fine-grained access controls.",
    icon: Users,
    color: "from-teal-500/10 to-teal-600/5",
    comingSoon: true
  }
];

export const showcaseFeatures = [
  {
    title: "Universal Clipboard",
    description: "Copy on one device, paste on another. Our synchronization technology ensures your clipboard is instantly available across all your devices. Whether you're working on your MacBook, iPad, or iPhone, your clipboard follows you everywhere, making cross-device workflows seamless and efficient.",
    icon: Cloud,
    link: "/features/universal-clipboard"
  },
  {
    title: "Smart Organization",
    description: "Never lose track of important copied content again. CopyClipCloud's AI automatically categorizes your clipboard items, creating smart collections for code snippets, addresses, URLs, and more. The intelligent system learns from your usage patterns to suggest and prioritize the content you need most.",
    icon: Sparkles,
    isReversed: true,
    link: "/features/smart-organization"
  },
  {
    title: "End-to-End Encryption",
    description: "Your clipboard often contains sensitive information. That's why we've implemented military-grade end-to-end encryption for all your data. Only your devices have the keys to decrypt your content, ensuring complete privacy and security even when syncing across multiple devices.",
    icon: Shield,
    link: "/features/end-to-end-encryption"
  }
];
