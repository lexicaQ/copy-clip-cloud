import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  HelpCircle, 
  Search, 
  MessageSquare, 
  Book,
  Video,
  Mail,
  FileText,
  Clock,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { Link } from 'react-router-dom';

const helpCategories = [
  {
    title: "Getting Started",
    icon: FileText,
    description: "New to CopyClipCloud? Learn the basics to get up and running quickly.",
    articles: [
      "Installation guide",
      "First-time setup",
      "Understanding the interface",
      "Basic clipboard operations"
    ],
    linkText: "View Getting Started guides",
    link: "/help/getting-started"
  },
  {
    title: "Features & How-tos",
    icon: Book,
    description: "Explore detailed guides on all CopyClipCloud features and capabilities.",
    articles: [
      "Using templates",
      "Cloud synchronization",
      "Security features",
      "Smart organization"
    ],
    linkText: "Browse feature guides"
  },
  {
    title: "Video Tutorials",
    icon: Video,
    description: "Visual learner? Watch our step-by-step video tutorials.",
    articles: [
      "Complete beginner's guide",
      "Advanced features walkthrough",
      "Tips & tricks for power users",
      "Integration tutorials"
    ],
    linkText: "Watch tutorials"
  },
  {
    title: "Troubleshooting",
    icon: HelpCircle,
    description: "Solve common issues and find answers to frequent questions.",
    articles: [
      "Sync not working",
      "Missing clipboard items",
      "Performance optimization",
      "Error messages explained"
    ],
    linkText: "See troubleshooting guides"
  }
];

const popularQuestions = [
  {
    question: "How do I sync my clipboard across devices?",
    answer: "To sync your clipboard across devices, first ensure you're signed in with the same account on all devices. Then, go to Settings > Sync and toggle 'Enable Cloud Sync'. Your clipboard history will automatically synchronize between all your connected devices."
  },
  {
    question: "Why can't I see my images in clipboard history?",
    answer: "If images aren't appearing in your clipboard history, check that image saving is enabled in Settings > Clipboard > Content Types. Also, verify that the images aren't exceeding the maximum size limit (50MB by default)."
  },
  {
    question: "How secure is my clipboard data?",
    answer: "Your clipboard data is protected with end-to-end encryption. This means that only your devices can decrypt and read the data - not even we can access it. You can further enhance security by enabling password protection in Settings > Security."
  },
  {
    question: "Can I use CopyClipCloud offline?",
    answer: "Yes, CopyClipCloud works fully offline. Your clipboard history is stored locally on your device. When you reconnect to the internet, any changes will sync to your other devices if cloud synchronization is enabled."
  },
  {
    question: "How do I create and use templates?",
    answer: "To create a template, select an item in your clipboard history, click the '⋮' menu, and select 'Save as Template'. Give it a name and optional tags. To use a template, click the Templates tab, select your template, and click 'Copy to Clipboard'."
  }
];

const HelpCategoryCard = ({ category, index }) => (
  <motion.div
    className="glass-panel p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <div className="flex items-center mb-4">
      <div className="p-2 rounded-lg bg-white/10 mr-3">
        <category.icon className="w-5 h-5" />
      </div>
      <h3 className="text-xl font-medium">{category.title}</h3>
    </div>
    
    <p className="text-gray-400 text-sm mb-4">{category.description}</p>
    
    <div className="space-y-2 mb-6">
      {category.articles.map((article, idx) => (
        <a 
          key={idx}
          href={`#${article.toLowerCase().replace(/\s+/g, '-')}`}
          className="flex items-center text-sm hover:text-white transition-colors text-gray-300"
        >
          <FileText className="w-4 h-4 mr-2" />
          {article}
        </a>
      ))}
    </div>
    
    <a 
      href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
      className="text-white hover:underline inline-flex items-center text-sm"
    >
      {category.linkText} <ArrowRight className="w-3.5 h-3.5 ml-1" />
    </a>
  </motion.div>
);

const QuestionAccordion = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <motion.div
      className="border-b border-white/10 last:border-0"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <button
        className="w-full text-left py-4 flex items-start justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-start">
          <MessageSquare className="w-5 h-5 mr-3 mt-0.5" />
          <span className="font-medium">{question}</span>
        </div>
        <div className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <p className="text-gray-400 pl-8 pr-4">{answer}</p>
      </div>
    </motion.div>
  );
};

const Help = () => {
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
            <span>Help Center</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">How Can We Help?</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Find answers, learn about features, and get help troubleshooting common issues.
          </p>
          
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search for help..." 
                className="w-full px-5 py-4 bg-white/10 rounded-full pl-12 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-white text-black rounded-full text-sm">
                Search
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Help Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {helpCategories.map((category, index) => (
              <HelpCategoryCard key={index} category={category} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="glass-panel overflow-hidden mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center mb-2">
              <MessageSquare className="w-5 h-5 mr-2" />
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            </div>
            <p className="text-gray-400 text-sm">Quick answers to the most common questions</p>
          </div>
          
          <div>
            {popularQuestions.map((item, index) => (
              <QuestionAccordion 
                key={index} 
                question={item.question} 
                answer={item.answer}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="glass-panel p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-lg bg-white/10 mr-3">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium">Contact Support</h3>
            </div>
            
            <p className="text-gray-400 text-sm mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            
            <a 
              href="/contact"
              className="px-6 py-3 bg-white text-black rounded-full inline-flex items-center hover:bg-opacity-90 transition-all w-full justify-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Support
            </a>
          </motion.div>
          
          <motion.div
            className="glass-panel p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-lg bg-white/10 mr-3">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium">Support Hours</h3>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM CET</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Saturday:</span>
                <span>10:00 AM - 3:00 PM CET</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Typical response time: <span className="text-white">24 hours</span>
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="glass-panel p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-lg bg-white/10 mr-3">
                <ExternalLink className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium">Additional Resources</h3>
            </div>
            
            <ul className="space-y-3">
              <li>
                <a 
                  href="/tutorials"
                  className="flex items-center text-white hover:underline"
                >
                  <Video className="w-4 h-4 mr-2" />
                  <span>Video Tutorials</span>
                </a>
              </li>
              <li>
                <a 
                  href="/documentation"
                  className="flex items-center text-white hover:underline"
                >
                  <Book className="w-4 h-4 mr-2" />
                  <span>Documentation</span>
                </a>
              </li>
              <li>
                <a 
                  href="/blog"
                  className="flex items-center text-white hover:underline"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  <span>Blog Articles</span>
                </a>
              </li>
              <li>
                <a 
                  href="/status"
                  className="flex items-center text-white hover:underline"
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  <span>System Status</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Submit a Ticket</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Still need help? Fill out our support form and we'll get back to you as soon as possible.
          </p>
          <a 
            href="/contact" 
            className="px-6 py-3 bg-white text-black rounded-full inline-flex items-center hover:bg-opacity-90 transition-all"
          >
            Submit a Support Ticket
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Help;
