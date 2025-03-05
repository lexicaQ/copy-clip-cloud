
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is CopyClipCloud?",
    answer: "CopyClipCloud is a next-generation clipboard manager that synchronizes your copied content across all your Apple devices. It stores text, images, and files with intelligent organization features, making it easy to access your clipboard history anywhere."
  },
  {
    question: "Is my clipboard data secure?",
    answer: "Absolutely. We use end-to-end encryption to ensure your clipboard data remains private and secure. No one, not even our team, can access your clipboard content."
  },
  {
    question: "Which devices are supported?",
    answer: "CopyClipCloud currently supports all Apple devices running macOS 15 or later. Support for iOS, iPadOS, and other platforms is coming soon."
  },
  {
    question: "How much does CopyClipCloud cost?",
    answer: "CopyClipCloud is free to download and use with basic features. For power users, we offer a premium plan with advanced features such as unlimited clipboard history, priority support, and more."
  },
  {
    question: "How do I get started?",
    answer: "Simply download CopyClipCloud from our website, install it on your Mac, and you're ready to go. The app will guide you through a simple setup process to enable cloud sync across your devices."
  },
  {
    question: "Can I use CopyClipCloud offline?",
    answer: "Yes, CopyClipCloud works offline for basic clipboard management. Cloud synchronization features require an internet connection, but your clipboard history will automatically sync once you're back online."
  }
];

const AppFAQ = () => {
  return (
    <motion.div 
      className="mt-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-2xl font-bold text-center mb-2 text-gradient-gold"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
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
          className="glass-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="divide-y divide-white/10">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-0 last:border-0">
                <AccordionTrigger className="py-6 px-6 text-left hover:no-underline">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AppFAQ;
