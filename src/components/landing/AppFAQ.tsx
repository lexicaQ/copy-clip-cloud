
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Info, HelpCircle, ShieldCheck, Settings, Tag, Zap, FileText, Server, Database, Code } from "lucide-react";

const faqs = [
  {
    question: "What is CopyClipCloud?",
    answer: "CopyClipCloud is a next-generation clipboard manager that synchronizes your copied content across all your Apple devices. It stores text, images, and files with intelligent organization features, making it easy to access your clipboard history anywhere.",
    icon: Info,
    category: "general"
  },
  {
    question: "Is my clipboard data secure?",
    answer: "Absolutely. We use military-grade end-to-end encryption to ensure your clipboard data remains private and secure. No one, not even our team, can access your clipboard content. All data is encrypted locally before being synchronized to our servers.",
    icon: ShieldCheck,
    category: "security"
  },
  {
    question: "Which devices are supported?",
    answer: "CopyClipCloud currently supports all Apple devices running macOS 15 or later. Support for iOS, iPadOS, and other platforms is coming soon. We're actively developing versions for Windows and Linux to ensure cross-platform compatibility.",
    icon: Settings,
    category: "compatibility"
  },
  {
    question: "How much does CopyClipCloud cost?",
    answer: "CopyClipCloud is free to download and use with basic features. For power users, we offer a premium plan with advanced features such as unlimited clipboard history, priority support, and more. Subscription plans start at $4.99/month with discounts available for annual subscriptions.",
    icon: Tag,
    category: "pricing"
  },
  {
    question: "How do I get started?",
    answer: "Simply download CopyClipCloud from our website, install it on your Mac, and you're ready to go. The app will guide you through a simple setup process to enable cloud sync across your devices. The initial setup takes less than 60 seconds.",
    icon: Zap,
    category: "installation"
  },
  {
    question: "Can I use CopyClipCloud offline?",
    answer: "Yes, CopyClipCloud works offline for basic clipboard management. Cloud synchronization features require an internet connection, but your clipboard history will automatically sync once you're back online. All your clipboard data is stored locally for offline access.",
    icon: HelpCircle,
    category: "usage"
  },
  {
    question: "How does the organization system work?",
    answer: "CopyClipCloud uses AI to automatically categorize your clipboard items. You can also create custom categories, tags, and favorites for quick access. Our smart search function helps you find exactly what you need, when you need it.",
    icon: Database,
    category: "features"
  },
  {
    question: "What happens to sensitive information I copy?",
    answer: "CopyClipCloud automatically detects when you copy sensitive information like passwords or credit card numbers. These items are specially encrypted with an additional layer of security and can be set to auto-expire after a certain time period.",
    icon: ShieldCheck,
    category: "security"
  },
  {
    question: "Can I customize keyboard shortcuts?",
    answer: "Yes, CopyClipCloud offers fully customizable keyboard shortcuts for all major actions. You can set up your preferred shortcuts in the app settings, allowing you to access your clipboard history and perform actions without leaving your current application.",
    icon: Code,
    category: "features"
  },
  {
    question: "How does syncing work between devices?",
    answer: "CopyClipCloud uses a secure cloud service to sync your clipboard history between devices. The sync is fast and happens in the background without any action required. All data is end-to-end encrypted during transmission and storage.",
    icon: Server,
    category: "features"
  },
  {
    question: "Is there a limit to how many items I can store?",
    answer: "The free version allows storing up to 100 recent clipboard items. Premium subscribers get unlimited clipboard history storage. All plans support items up to 50MB in size, including text, images, and files.",
    icon: FileText,
    category: "pricing"
  },
  {
    question: "Can I export my clipboard history?",
    answer: "Yes, CopyClipCloud allows you to export your clipboard history in various formats including plain text, JSON, and CSV. This feature is useful for backing up or transferring your data to other devices or applications.",
    icon: FileText,
    category: "features"
  }
];

const AppFAQ = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = [
    { id: "all", name: "All Questions" },
    { id: "general", name: "General" },
    { id: "features", name: "Features" },
    { id: "security", name: "Security" },
    { id: "pricing", name: "Pricing" },
    { id: "compatibility", name: "Compatibility" },
    { id: "installation", name: "Installation" },
    { id: "usage", name: "Usage" }
  ];

  const filteredFaqs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <motion.div 
      className="mt-24 pt-16 border-t border-white/10 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-white/5 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-white/5 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <motion.h2 
        className="text-4xl font-bold text-center mb-4 relative"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">Frequently Asked Questions</span>
        <motion.div 
          className="h-1 w-24 bg-gradient-to-r from-white/10 via-white/40 to-white/10 mx-auto mt-3"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        ></motion.div>
      </motion.h2>
      
      <motion.p 
        className="text-gray-400 text-center mb-10 max-w-xl mx-auto text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        Everything you need to know about CopyClipCloud. Can't find what you're looking for?{" "}
        <a href="/contact" className="text-white underline underline-offset-4 hover:text-white/80 transition-colors">Contact us</a>.
      </motion.p>

      {/* Category Filters */}
      <div className="max-w-3xl mx-auto mb-10">
        <motion.div 
          className="flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div 
          className="glass-panel divide-y divide-white/10 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="divide-y divide-white/10">
            {filteredFaqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem value={`item-${index}`} className="border-b-0 last:border-0">
                    <AccordionTrigger className="py-6 px-6 text-left hover:no-underline group [&[data-state=open]]:bg-white/5">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-lg font-medium group-hover:text-white transition-colors">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-8 pt-2 text-gray-300">
                      <div className="pl-14">
                        {faq.answer}
                        <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                          <span className="text-sm text-gray-500">Category: {faq.category.charAt(0).toUpperCase() + faq.category.slice(1)}</span>
                          <div className="flex space-x-2">
                            <button className="text-sm text-white hover:underline focus:outline-none">Helpful</button>
                            <span className="text-gray-500">|</span>
                            <button className="text-sm text-white hover:underline focus:outline-none">Share</button>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </motion.div>
        
        {/* Contact section at the bottom of FAQ */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AppFAQ;
