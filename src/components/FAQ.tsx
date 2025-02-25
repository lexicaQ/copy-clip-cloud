
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What makes CopyClipCloud different?",
    answer: "CopyClipCloud combines intelligent organization with seamless sync across all your Apple devices, featuring military-grade encryption and smart categorization powered by AI."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use end-to-end encryption, ensuring your clipboard data never leaves your device without being fully encrypted. Your privacy is our top priority."
  },
  {
    question: "Which macOS versions are supported?",
    answer: "CopyClipCloud is optimized for macOS 15 and later versions, ensuring the best performance and compatibility with the latest Apple technologies."
  },
  {
    question: "Can I try before buying?",
    answer: "Yes! Download our free trial version to experience all features for 14 days, no credit card required."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4 }}
      className="mt-16 w-full max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="glass-panel overflow-hidden"
            initial={false}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <span className="font-medium">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-4 pb-4 text-gray-400"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQ;
