
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Info, HelpCircle, ShieldCheck, Settings, Tag, Zap, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What is CopyClipCloud?",
    answer: "CopyClipCloud is a next-generation clipboard manager that synchronizes your copied content across all your Apple devices. It stores text, images, and files with intelligent organization features, making it easy to access your clipboard history anywhere.",
    icon: Info
  },
  {
    question: "Is my clipboard data secure?",
    answer: "Absolutely. We use military-grade end-to-end encryption to ensure your clipboard data remains private and secure. No one, not even our team, can access your clipboard content. All data is encrypted locally before being synchronized to our servers.",
    icon: ShieldCheck
  },
  {
    question: "Which devices are supported?",
    answer: "CopyClipCloud currently supports all Apple devices running macOS 15 or later. Support for iOS, iPadOS, and other platforms is coming soon. We're actively developing versions for Windows and Linux to ensure cross-platform compatibility.",
    icon: Settings
  },
  {
    question: "How much does CopyClipCloud cost?",
    answer: "CopyClipCloud is free to download and use with basic features. For power users, we offer a premium plan with advanced features such as unlimited clipboard history, priority support, and more. Subscription plans start at $4.99/month with discounts available for annual subscriptions.",
    icon: Tag
  },
  {
    question: "How do I get started?",
    answer: "Simply download CopyClipCloud from our website, install it on your Mac, and you're ready to go. The app will guide you through a simple setup process to enable cloud sync across your devices. The initial setup takes less than 60 seconds.",
    icon: Zap
  },
  {
    question: "Can I use CopyClipCloud offline?",
    answer: "Yes, CopyClipCloud works offline for basic clipboard management. Cloud synchronization features require an internet connection, but your clipboard history will automatically sync once you're back online. All your clipboard data is stored locally for offline access.",
    icon: HelpCircle
  },
  {
    question: "How does the organization system work?",
    answer: "CopyClipCloud uses AI to automatically categorize your clipboard items. You can also create custom categories, tags, and favorites for quick access. Our smart search function helps you find exactly what you need, when you need it.",
    icon: Info
  },
  {
    question: "What happens to sensitive information I copy?",
    answer: "CopyClipCloud automatically detects when you copy sensitive information like passwords or credit card numbers. These items are specially encrypted with an additional layer of security and can be set to auto-expire after a certain time period.",
    icon: ShieldCheck
  }
];

const AppFAQ = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  
  const handleItemClick = (value: string) => {
    setExpandedItem(expandedItem === value ? null : value);
  };

  return (
    <motion.div 
      className="mt-24 pt-10 border-t border-white/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-3xl font-bold text-center mb-2 relative"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">Frequently Asked Questions</span>
        <div className="h-1 w-16 bg-white/20 mx-auto mt-2"></div>
      </motion.h2>
      
      <motion.p 
        className="text-gray-400 text-center mb-10 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        Everything you need to know about CopyClipCloud
      </motion.p>

      <div className="max-w-3xl mx-auto">
        <motion.div 
          className="glass-panel divide-y divide-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="divide-y divide-white/10" value={expandedItem || ""} onValueChange={handleItemClick}>
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const itemValue = `item-${index}`;
              
              return (
                <AccordionItem key={index} value={itemValue} className="border-b-0 last:border-0">
                  <AccordionTrigger className="py-6 px-6 text-left hover:no-underline group">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-white/20 transition-colors">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg font-medium group-hover:text-white transition-colors">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0 text-gray-400">
                    <div className="pl-11">
                      {faq.answer}
                      <motion.button 
                        className="mt-4 flex items-center text-sm text-white/70 hover:text-white transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </motion.button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AppFAQ;
