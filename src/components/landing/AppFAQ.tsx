
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How does clipboard syncing work across devices?",
    answer: "CopyClipCloud uses secure cloud synchronization to automatically sync your clipboard across all your connected devices. When you copy something on one device, it's instantly available on all your other devices. The sync happens in real-time when you're connected to the internet, and will update as soon as you're back online if you were temporarily disconnected."
  },
  {
    question: "Is my clipboard data secure?",
    answer: "Absolutely. We use military-grade AES-256 encryption to protect your clipboard data. Everything is encrypted on your device before being transmitted, ensuring that only you can access your data. We employ a zero-knowledge architecture, meaning we cannot access your clipboard data even if we wanted to."
  },
  {
    question: "How many devices can I connect to my account?",
    answer: "Free users can connect up to 2 devices to their account. Premium users enjoy unlimited device connections, making it perfect for professionals who work across multiple devices and platforms."
  },
  {
    question: "Can I organize my clipboard history?",
    answer: "Yes! CopyClipCloud offers powerful organization tools including folders, tags, and smart collections. You can categorize items, mark favorites, and even setup automatic sorting rules based on content type, source application, or custom criteria."
  },
  {
    question: "What types of content can I store in my clipboard?",
    answer: "CopyClipCloud supports virtually all types of clipboard content including plain text, formatted text (RTF), images, files, code snippets (with syntax highlighting), links, and more. Premium users also get advanced support for larger files and extended storage capacity."
  }
];

const AppFAQ = () => {
  return (
    <motion.div 
      className="mt-32 pt-20 border-t border-white/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-gradient">Frequently Asked Questions</span>
          <div className="h-1 w-16 bg-white/20 mx-auto mt-4"></div>
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Everything you need to know about CopyClipCloud
        </motion.p>
      </motion.div>
      
      <div className="max-w-3xl mx-auto px-4">
        <Accordion type="single" collapsible className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AccordionItem 
                value={`item-${index}`} 
                className="border-none"
              >
                <div className="glass-panel rounded-xl overflow-hidden transition-all duration-300 hover:border-white/20 group">
                  <AccordionTrigger className="px-8 py-6 text-left text-lg font-medium flex w-full">
                    {faq.question}
                    <PlusCircle className="w-5 h-5 ml-2 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 pt-0 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </div>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 mb-6">
            Still have questions? We're here to help.
          </p>
          <Link
            to="/support"
            className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full hover:bg-white/15 transition-all border border-white/20 text-sm font-medium"
          >
            Contact Support
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AppFAQ;
