
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

const FAQSection = ({ items }: FAQSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 w-full">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="overflow-hidden glass-panel"
          initial={false}
          animate={{ 
            backgroundColor: activeIndex === index ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)'
          }}
          whileHover={{ 
            backgroundColor: activeIndex === index ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.08)'
          }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full p-4 flex items-center justify-between text-left"
          >
            <motion.span 
              className="font-medium"
              animate={{ 
                color: activeIndex === index ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)'
              }}
            >
              {item.question}
            </motion.span>
            <motion.div
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="p-4 pt-0 text-gray-400 text-left">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQSection;
