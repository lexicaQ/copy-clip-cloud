
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Search, Filter, CheckCircle, ArrowLeft, Tag, Shield, Zap, Info, Settings, User } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: React.ElementType;
}

const categories = [
  { id: "all", label: "All" },
  { id: "general", label: "General" },
  { id: "security", label: "Security" },
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing" },
  { id: "compatibility", label: "Compatibility" },
  { id: "account", label: "Account" },
];

const faqs: FAQ[] = [
  {
    id: "what-is",
    question: "What is CopyClipCloud?",
    answer: "CopyClipCloud is a modern clipboard manager that synchronizes your clipboard across all your Apple devices. With intelligent organization and encryption, the app stores text, images, and files for quick access.",
    category: "general",
    icon: Info
  },
  {
    id: "data-security",
    question: "Is my data secure?",
    answer: "Absolutely. We use end-to-end encryption to protect your data. No one, not even our team, can access your clipboard contents. All data is locally encrypted before being synchronized.",
    category: "security",
    icon: Shield
  },
  {
    id: "devices",
    question: "Which devices are supported?",
    answer: "CopyClipCloud currently supports all Apple devices with macOS 15 or newer. Support for iOS, iPadOS, and other platforms is in development. We're also actively working on versions for Windows and Linux.",
    category: "compatibility",
    icon: Settings
  },
  {
    id: "pricing",
    question: "How much does CopyClipCloud cost?",
    answer: "CopyClipCloud is free to use with basic features. For power users, we offer a premium subscription with advanced features like unlimited history and prioritized support. Subscriptions start at $4.99/month with discounts for annual subscriptions.",
    category: "pricing",
    icon: Tag
  },
  {
    id: "getting-started",
    question: "How do I get started?",
    answer: "Simply download CopyClipCloud from our website, install it on your Mac, and you're ready to go. The app will guide you through setting up cloud synchronization. Initial setup takes less than 60 seconds.",
    category: "general",
    icon: Zap
  },
  {
    id: "offline",
    question: "Can I use CopyClipCloud offline?",
    answer: "Yes, CopyClipCloud works offline for basic clipboard management. Cloud synchronization requires an internet connection, but your history will automatically sync once you're back online.",
    category: "features",
    icon: Info
  },
  {
    id: "organization",
    question: "How does the organization system work?",
    answer: "CopyClipCloud uses AI to automatically categorize your clipboard items. You can also create your own categories, tags, and favorites for quick access. The smart search function helps you find exactly what you need.",
    category: "features",
    icon: Zap
  },
  {
    id: "sensitive-info",
    question: "What happens with sensitive information?",
    answer: "CopyClipCloud automatically detects when you copy sensitive information like passwords or credit card numbers. These are encrypted with an additional layer of security and can be set to automatically expire after a certain time.",
    category: "security",
    icon: Shield
  },
  {
    id: "account-creation",
    question: "Do I need to create an account?",
    answer: "Yes, to use cloud synchronization features, you'll need to create a CopyClipCloud account. This account manages your encrypted data across devices. The basic features can be used without an account, but you'll miss out on synchronization capabilities.",
    category: "account",
    icon: User
  },
  {
    id: "shortcuts",
    question: "Are there keyboard shortcuts?",
    answer: "CopyClipCloud offers extensive keyboard shortcut customization. By default, you can access your clipboard history with Cmd+Shift+V and configure preferred shortcuts for other actions in the settings menu.",
    category: "features",
    icon: Settings
  }
];

const FaqPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredFaqs, setFilteredFaqs] = useState<FAQ[]>(faqs);
  const [highlightedText, setHighlightedText] = useState<Record<string, string>>({});

  useEffect(() => {
    // Filter FAQs based on search term and category
    const filtered = faqs.filter(faq => {
      const matchesSearch = searchTerm === "" || 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
        
      const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredFaqs(filtered);
    
    // Highlight search term in text if there is a search term
    if (searchTerm) {
      const highlighted: Record<string, string> = {};
      
      filtered.forEach(faq => {
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        highlighted[faq.id] = faq.answer.replace(regex, '<span class="bg-white/20 text-white">$1</span>');
      });
      
      setHighlightedText(highlighted);
    } else {
      setHighlightedText({});
    }
  }, [searchTerm, activeCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6"
          >
            <HelpCircle className="w-10 h-10" />
          </motion.div>
          
          <Link to="/support" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Support
          </Link>
          
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about CopyClipCloud. If you can't find what you're looking for, 
            feel free to contact our support team.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="pl-12 pr-4 py-4 w-full rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:ring-0 focus:outline-none transition-colors"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-white"
                onClick={() => setSearchTerm("")}
              >
                <HelpCircle className="h-5 w-5" />
              </button>
            )}
          </div>
          
          <motion.div 
            className="flex flex-wrap gap-2 mb-8 justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  activeCategory === category.id 
                    ? 'bg-white text-black font-medium' 
                    : 'bg-white/5 hover:bg-white/10 text-gray-300'
                }`}
                onClick={() => setActiveCategory(category.id)}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
          
          <div className="mb-4 flex items-center text-sm text-gray-400">
            <Filter className="w-4 h-4 mr-2" />
            <span>
              {filteredFaqs.length} {filteredFaqs.length === 1 ? 'result' : 'results'} 
              {searchTerm && <> for "<span className="text-white">{searchTerm}</span>"</>}
              {activeCategory !== "all" && <> in <span className="text-white capitalize">{activeCategory}</span></>}
            </span>
          </div>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {filteredFaqs.length > 0 ? (
              <motion.div 
                className="glass-panel rounded-xl overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Accordion type="single" collapsible className="divide-y divide-white/10">
                  {filteredFaqs.map((faq, index) => {
                    const Icon = faq.icon;
                    return (
                      <motion.div
                        key={faq.id}
                        variants={itemVariants}
                      >
                        <AccordionItem value={faq.id} className="border-b-0 last:border-0">
                          <AccordionTrigger className="py-5 px-6 text-left hover:no-underline group">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mr-4 group-hover:bg-white/10 transition-colors">
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <span className="text-lg font-medium group-hover:text-white transition-colors">{faq.question}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-5 pt-0 text-gray-300">
                            <div className="pl-14">
                              {highlightedText[faq.id] ? (
                                <div dangerouslySetInnerHTML={{ __html: highlightedText[faq.id] }} />
                              ) : (
                                <p>{faq.answer}</p>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    );
                  })}
                </Accordion>
              </motion.div>
            ) : (
              <motion.div 
                className="glass-panel p-12 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <CheckCircle className="w-16 h-16 mx-auto mb-6 text-white/30" />
                  <h3 className="text-2xl font-medium mb-3">No results found</h3>
                  <p className="text-gray-400 mb-6">
                    Try adjusting your search or filter to find what you're looking for
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm("");
                      setActiveCategory("all");
                    }}
                  >
                    Reset filters
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        <motion.div
          className="max-w-4xl mx-auto mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <p className="text-gray-400 mb-6">
            Our support team is always ready to assist you with any questions or concerns.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg hover:bg-opacity-90 transition-all"
          >
            Contact Support
          </Link>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FaqPage;
