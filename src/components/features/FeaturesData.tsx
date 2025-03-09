
import { Cloud, Shield, Zap, Search, Sparkles, Code, Settings, Clock, Users, Link, Globe, Lock, AlertTriangle, Mail, LucideIcon } from "lucide-react";

type FeatureCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  detailedDescription?: string;
  benefits?: string[];
  comingSoon?: boolean;
};

type ShowcaseFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
  isReversed?: boolean;
  benefits?: string[];
  metrics?: {
    value: string;
    label: string;
  }[];
};

export const featureCards: FeatureCard[] = [
  {
    title: "Intelligent Sync",
    description: "Seamlessly synchronize your clipboard across all Apple devices with real-time updates and conflict resolution.",
    icon: Cloud,
    color: "from-blue-500/20 to-blue-600/10",
    detailedDescription: "Our cloud-based synchronization engine ensures your clipboard data is instantly available on all your devices. Changes sync in milliseconds, even with poor connectivity.",
    benefits: [
      "Real-time synchronization across all devices",
      "Works offline with automatic sync when reconnected",
      "Intelligent conflict resolution for simultaneous edits"
    ]
  },
  {
    title: "Military-Grade Encryption",
    description: "Your data is protected with end-to-end encryption, ensuring complete privacy and security at all times.",
    icon: Shield,
    color: "from-green-500/20 to-green-600/10",
    detailedDescription: "We use AES-256 encryption to protect your clipboard data at rest and in transit. Only your authorized devices can decrypt and access your information.",
    benefits: [
      "End-to-end encryption using AES-256",
      "Zero-knowledge architecture - we can't read your data",
      "Local-only decryption keys that never leave your device"
    ]
  },
  {
    title: "Lightning Fast",
    description: "Experience instant clipboard operations with our optimized performance engine, even with large files.",
    icon: Zap,
    color: "from-yellow-500/20 to-yellow-600/10",
    detailedDescription: "Our native performance engine processes clipboard operations in milliseconds. Even large files and images are handled with optimal efficiency.",
    benefits: [
      "Processes complex clipboard operations in milliseconds",
      "Optimized memory usage for large file handling",
      "Background processing that never slows down your device"
    ]
  },
  {
    title: "Smart Search",
    description: "Find any copied item instantly with our AI-powered search that understands context and content.",
    icon: Search,
    color: "from-purple-500/20 to-purple-600/10",
    detailedDescription: "Our context-aware search engine understands what you're looking for, even if you don't remember the exact text. It recognizes patterns and learns from your search behavior.",
    benefits: [
      "Natural language search capabilities",
      "Semantic understanding of content meaning",
      "Quick-find shortcuts with keyboard commands"
    ]
  },
  {
    title: "AI Organization",
    description: "Let our AI automatically organize your clipboard items into smart categories and suggestions.",
    icon: Sparkles,
    color: "from-pink-500/20 to-pink-600/10",
    detailedDescription: "Our machine learning algorithms analyze your clipboard usage patterns to automatically categorize and prioritize content. The system gets smarter the more you use it.",
    benefits: [
      "Automatic categorization of clipboard content",
      "Personalized suggestions based on usage patterns",
      "Smart collections that update automatically"
    ]
  },
  {
    title: "Code Snippets",
    description: "Special handling for code with syntax highlighting and automatic language detection.",
    icon: Code,
    color: "from-red-500/20 to-red-600/10",
    detailedDescription: "CopyClipCloud automatically detects code in your clipboard and applies proper formatting with syntax highlighting for over 100 programming languages.",
    benefits: [
      "Automatic language detection for proper formatting",
      "Syntax highlighting for over 100 programming languages",
      "Code-specific search and filtering options"
    ]
  },
  {
    title: "Custom Rules",
    description: "Create powerful automation rules to handle specific types of clipboard content.",
    icon: Settings,
    color: "from-indigo-500/20 to-indigo-600/10",
    detailedDescription: "Define custom rules to automatically process, format, or route clipboard content based on patterns and content types. Create workflows that save you time and reduce errors.",
    benefits: [
      "Automatic text formatting based on content type",
      "Custom actions triggered by specific patterns",
      "Workflow automation for repeated tasks"
    ],
    comingSoon: true
  },
  {
    title: "History Timeline",
    description: "Access your complete clipboard history with our intuitive timeline interface.",
    icon: Clock,
    color: "from-orange-500/20 to-orange-600/10",
    detailedDescription: "Browse through your clipboard history chronologically or by categories. History entries are searchable and can be organized into collections for future reference.",
    benefits: [
      "Unlimited clipboard history (Pro & Enterprise)",
      "Time-based browsing with visual timeline",
      "One-click restoration of any past clipboard item"
    ]
  },
  {
    title: "Team Collaboration",
    description: "Share clipboard items with team members securely with fine-grained access controls.",
    icon: Users,
    color: "from-teal-500/20 to-teal-600/10",
    detailedDescription: "Collaborate with teammates by sharing clipboard items or collections. Set permissions to control who can view, edit, or re-share your content.",
    benefits: [
      "Secure sharing with team members",
      "Granular permission controls for shared content",
      "Activity tracking for shared clipboard items"
    ],
    comingSoon: true
  }
];

export const showcaseFeatures: ShowcaseFeature[] = [
  {
    title: "Universal Clipboard",
    description: "Copy on one device, paste on another. Our synchronization technology ensures your clipboard is instantly available across all your devices. Whether you're working on your MacBook, iPad, or iPhone, your clipboard follows you everywhere, making cross-device workflows seamless and efficient.",
    icon: Cloud,
    benefits: [
      "Instant synchronization across devices",
      "Works seamlessly with Apple Continuity",
      "Handles text, images, files, and rich media"
    ],
    metrics: [
      { value: "0.3s", label: "Average sync time" },
      { value: "99.9%", label: "Reliability" },
      { value: "Unlimited", label: "Device connections" }
    ]
  },
  {
    title: "Smart Organization",
    description: "Never lose track of important copied content again. CopyClipCloud's AI automatically categorizes your clipboard items, creating smart collections for code snippets, addresses, URLs, and more. The intelligent system learns from your usage patterns to suggest and prioritize the content you need most.",
    icon: Sparkles,
    isReversed: true,
    benefits: [
      "Automatic content categorization",
      "AI-powered suggestions and prioritization",
      "Custom collections with smart filtering"
    ],
    metrics: [
      { value: "95%", label: "Categorization accuracy" },
      { value: "50%", label: "Time saved finding content" },
      { value: "10x", label: "Productivity boost" }
    ]
  },
  {
    title: "End-to-End Encryption",
    description: "Your clipboard often contains sensitive information. That's why we've implemented military-grade end-to-end encryption for all your data. Only your devices have the keys to decrypt your content, ensuring complete privacy and security even when syncing across multiple devices.",
    icon: Shield,
    benefits: [
      "AES-256 encryption standard",
      "Zero-knowledge architecture",
      "Local-only encryption keys"
    ],
    metrics: [
      { value: "256-bit", label: "Encryption strength" },
      { value: "0", label: "Data breaches" },
      { value: "SOC 2", label: "Security compliance" }
    ]
  }
];

// Additional feature sections for detailed pages
export const securityFeatures = [
  {
    title: "End-to-End Encryption",
    description: "All data encrypted at the device level",
    icon: Lock
  },
  {
    title: "Secure Sharing",
    description: "Share clipboard items with end-to-end encryption",
    icon: Link
  },
  {
    title: "Privacy Controls",
    description: "Granular privacy settings for all content",
    icon: AlertTriangle
  }
];

export const collaborationFeatures = [
  {
    title: "Team Workspaces",
    description: "Dedicated spaces for team clipboard sharing",
    icon: Users
  },
  {
    title: "Global Access",
    description: "Access from anywhere with web interface",
    icon: Globe
  },
  {
    title: "Notifications",
    description: "Real-time alerts for important clipboard events",
    icon: Mail
  }
];
