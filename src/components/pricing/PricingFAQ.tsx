
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const PricingFAQ = () => {
  const faqs = [
    {
      question: "How does the free plan work?",
      answer: "Our free Basic plan includes all essential features for personal use, including basic clipboard history, single device sync, and standard encryption. It's completely free to use with no time limitations."
    },
    {
      question: "Can I upgrade or downgrade my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll immediately get access to the new features. When downgrading, your current plan will remain active until the end of your billing period."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Google Pay. For Enterprise plans, we also offer invoice-based payments."
    },
    {
      question: "Is my payment information secure?",
      answer: "Absolutely. We use industry-standard encryption and never store your complete credit card information on our servers. All payments are processed through secure payment processors."
    },
    {
      question: "What happens when my trial ends?",
      answer: "When your trial period ends, your account will automatically revert to the Basic plan unless you choose to upgrade. You won't lose any data, but premium features will no longer be available."
    },
    {
      question: "Do you offer discounts for students or non-profits?",
      answer: "Yes, we offer special pricing for educational institutions, students, and non-profit organizations. Please contact our sales team for more information about eligibility and discounts."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, we offer a 30-day money-back guarantee for all our paid plans. If you're not completely satisfied with our service, you can request a full refund within 30 days of your initial purchase."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have questions about our pricing plans? Find answers to common questions below.
        </p>
      </motion.div>

      <motion.div
        className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10 last:border-b-0">
              <AccordionTrigger className="text-left px-6 py-4 hover:bg-white/5 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
      
      <motion.div 
        className="text-center mt-8 text-sm text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        Still have questions? <a href="/contact" className="text-white underline hover:text-white/80">Contact our sales team</a>
      </motion.div>
    </div>
  );
};

export default PricingFAQ;
