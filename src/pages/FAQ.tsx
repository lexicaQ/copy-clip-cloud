import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MessageSquare, FileText, Search, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const faqCategories = [
  {
    title: "General",
    questions: [
      {
        question: "What is CopyClipCloud?",
        answer: "CopyClipCloud is a sophisticated clipboard manager designed for macOS 15 and higher. It securely stores your clipboard history, allows for organization of copied items, and provides seamless synchronization across multiple devices. With features like smart categorization and search, CopyClipCloud enhances your productivity by giving you access to everything you've copied."
      },
      {
        question: "How do I get started with CopyClipCloud?",
        answer: "Getting started is simple: download the app from our website, install it on your device, and follow the quick setup guide. Once installed, CopyClipCloud will automatically start recording your clipboard activity. You can access your clipboard history through the menu bar icon or using the keyboard shortcut ⌘+Shift+V."
      },
      {
        question: "Is CopyClipCloud free to use?",
        answer: "CopyClipCloud offers a free basic plan that includes essential clipboard management features. For advanced features like cloud synchronization, templates, and unlimited history, we offer premium plans. Check our pricing page for detailed information on available plans and features."
      }
    ]
  },
  {
    title: "Features & Usage",
    questions: [
      {
        question: "How do I synchronize CopyClipCloud across multiple devices?",
        answer: "To synchronize CopyClipCloud across multiple devices, install the app on all devices and sign in with the same account. Enable cloud synchronization in the settings of each device. Your clipboard data will automatically be synchronized across all devices in real-time."
      },
      {
        question: "Can I organize my clipboard items into categories?",
        answer: "Yes, CopyClipCloud offers both automatic and manual categorization. The smart organization feature automatically categorizes items based on content type (text, code, links, images). You can also create custom categories and manually assign clipboard items to them for better organization."
      },
      {
        question: "How do I create and use templates?",
        answer: "To create a template, select an item in your clipboard history, click the '⋮' menu, and select 'Save as Template'. Give it a name and optional tags. To use a template, click the Templates tab, select your template, and click 'Copy to Clipboard'. Templates are perfect for frequently used text snippets, code blocks, or form responses."
      },
      {
        question: "Can I search through my clipboard history?",
        answer: "Yes, CopyClipCloud offers powerful search functionality. You can search through your entire clipboard history using keywords, filter by date ranges, content type, or categories. The search feature supports regular expressions for advanced pattern matching."
      }
    ]
  },
  {
    title: "Security & Privacy",
    questions: [
      {
        question: "How secure is my clipboard data?",
        answer: "Your clipboard data is protected with end-to-end encryption. This means that only your devices can decrypt and read the data - not even we can access it. You can further enhance security by enabling password protection in Settings > Security."
      },
      {
        question: "Can I exclude sensitive applications from being recorded?",
        answer: "Yes, CopyClipCloud allows you to exclude specific applications from clipboard monitoring. Go to Settings > Privacy > Application Exclusions and add any applications you want to exclude. This is particularly useful for password managers or applications that handle sensitive information."
      },
      {
        question: "Does CopyClipCloud store my data on its servers?",
        answer: "By default, CopyClipCloud stores your clipboard history locally on your device. If you enable cloud synchronization (available in premium plans), your encrypted data is stored on our secure servers to enable cross-device synchronization. You can disable cloud storage at any time."
      }
    ]
  },
  {
    title: "Troubleshooting",
    questions: [
      {
        question: "Is CopyClipCloud compatible with older macOS versions?",
        answer: "CopyClipCloud is optimized for macOS 15 and higher. On older versions, some features may be limited or not function properly. We recommend upgrading to at least macOS 15 to fully utilize all features."
      },
      {
        question: "Why aren't some images being saved correctly?",
        answer: "With certain image formats or very large images, compatibility issues may occur. CopyClipCloud supports the most common image formats (PNG, JPEG, GIF, WEBP) with a maximum size of 50MB. If problems arise, try converting the image to another format or reducing its size."
      },
      {
        question: "How can I create a backup of my clipboard data?",
        answer: "CopyClipCloud offers an integrated backup feature. Go to Settings > Backup & Export and select 'Create Backup'. You can choose to save the backup locally or upload it to the cloud. Backups can be restored at any time through the same menu option."
      },
      {
        question: "The app is using too much memory. How can I optimize it?",
        answer: "If you notice high memory usage, try adjusting the history retention settings. Go to Settings > Preferences and reduce the 'Maximum history items' or enable 'Auto-clean history' with a shorter timeframe. You can also try clearing unused items from your history regularly."
      },
      {
        question: "Can I use CopyClipCloud offline?",
        answer: "Yes, CopyClipCloud works fully offline. Your clipboard history is stored locally on your device. When you reconnect to the internet, any changes will sync to your other devices if cloud synchronization is enabled."
      }
    ]
  }
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [expandedQuestions, setExpandedQuestions] = React.useState<Record<string, boolean>>({});

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setExpandedQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredCategories = searchQuery 
    ? faqCategories.map(category => ({
        ...category,
        questions: category.questions.filter(
          q => q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
               q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.questions.length > 0)
    : faqCategories;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative min-h-screen">
      <Header />

      <main className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-white/10 mb-6">
            <HelpCircle className="w-5 h-5 mr-2" />
            <span>FAQ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about CopyClipCloud and learn how to get the most out of your experience.
          </p>
          
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search questions..." 
                className="w-full px-5 py-4 bg-white/10 rounded-full pl-12 focus:outline-none focus:ring-2 focus:ring-white/30"
                value={searchQuery}
                onChange={handleSearch}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              {searchQuery && (
                <button 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white" 
                  onClick={() => setSearchQuery("")}
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {filteredCategories.length === 0 ? (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-2xl font-medium mb-2">No results found</h3>
              <p className="text-gray-400">
                We couldn't find any questions matching your search. Try different keywords or browse all categories.
              </p>
            </motion.div>
          ) : (
            filteredCategories.map((category, categoryIndex) => (
              <motion.div 
                key={category.title}
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <motion.h2 
                  className="text-2xl font-bold mb-6 flex items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm">{categoryIndex + 1}</span>
                  </span>
                  {category.title}
                </motion.h2>
                
                <div className="glass-panel divide-y divide-white/10 overflow-hidden">
                  {category.questions.map((q, questionIndex) => {
                    const isExpanded = expandedQuestions[`${categoryIndex}-${questionIndex}`];
                    return (
                      <motion.div 
                        key={questionIndex}
                        className="overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: questionIndex * 0.05 }}
                      >
                        <button 
                          className="w-full px-6 py-5 flex items-start justify-between text-left hover:bg-white/5 transition-colors"
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        >
                          <div className="flex items-start">
                            <MessageSquare className="w-5 h-5 mr-3 mt-1 text-white/70" />
                            <span className="font-medium text-lg">{q.question}</span>
                          </div>
                          <div className="ml-4 pt-1">
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-white/70" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-white/70" />
                            )}
                          </div>
                        </button>
                        
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-6 pb-5"
                            >
                              <div className="pl-8 text-gray-300 leading-relaxed">{q.answer}</div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))
          )}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            If you couldn't find the answer you were looking for, our support team is ready to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-white text-black rounded-full inline-flex items-center hover:bg-opacity-90 transition-all"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Contact Support
            </Link>
            <Link 
              to="/documentation" 
              className="px-6 py-3 bg-white/10 rounded-full inline-flex items-center hover:bg-white/20 transition-all"
            >
              <FileText className="w-4 h-4 mr-2" />
              View Documentation
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
