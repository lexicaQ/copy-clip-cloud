
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import { 
  MessageSquare, 
  Mail, 
  FileText, 
  Headphones, 
  BookOpen, 
  Video,
  Clock,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { ComingSoon } from "@/components/ui/coming-soon";
import { Button } from "@/components/ui/button";

const SupportOption = ({ title, description, icon: Icon, link, linkText, comingSoon = false }) => (
  <motion.div
    className="glass-panel p-6 hover:bg-white/5 transition-all duration-300 relative overflow-visible"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    {comingSoon && (
      <div className="absolute -top-3 -right-3 z-10">
        <ComingSoon />
      </div>
    )}
    <div className="flex items-start space-x-4">
      <div className="p-3 rounded-xl bg-white/10 flex items-center justify-center">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <Link 
          to={link} 
          className={`text-sm inline-flex items-center font-medium text-white hover:underline ${
            comingSoon ? 'pointer-events-none opacity-70' : ''
          }`}
        >
          {linkText} <span className="ml-1">→</span>
        </Link>
      </div>
    </div>
  </motion.div>
);

const Support = () => {
  const popularQuestions = [
    {
      question: "How do I synchronize CopyClipCloud across multiple devices?",
      answer: "To synchronize CopyClipCloud across multiple devices, install the app on all devices and sign in with the same account. Enable cloud synchronization in the settings of each device. Your clipboard data will automatically be synchronized across all devices."
    },
    {
      question: "Is CopyClipCloud compatible with older macOS versions?",
      answer: "CopyClipCloud is optimized for macOS 15 and higher. On older versions, some features may be limited or not function properly. We recommend upgrading to at least macOS 15 to fully utilize all features."
    },
    {
      question: "How can I create a backup of my clipboard data?",
      answer: "CopyClipCloud offers an integrated backup feature. Go to Settings > Backup & Export and select 'Create Backup'. You can choose to save the backup locally or upload it to the cloud. Backups can be restored at any time through the same menu option."
    },
    {
      question: "Why aren't some images being saved correctly?",
      answer: "With certain image formats or very large images, compatibility issues may occur. CopyClipCloud supports the most common image formats (PNG, JPEG, GIF, WEBP) with a maximum size of 50MB. If problems arise, try converting the image to another format or reducing its size."
    }
  ];
  
  return (
    <div className="relative min-h-screen bg-background">
      <SharedBackground />
      <Header />

      <main className="pt-32 pb-24 px-4 max-w-7xl mx-auto relative">
        {/* Overlapping Coming Soon badge in the top left */}
        <div className="absolute -left-2 -top-2 z-10">
          <ComingSoon />
        </div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">We're Here for You</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Find answers, get help, and share your feedback with us.
            Our support team is at your service.
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">How Can We Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SupportOption 
              title="Get in Touch"
              description="Have a specific problem? Contact our support team directly."
              icon={MessageSquare}
              link="/contact"
              linkText="Send Message"
            />
            <SupportOption 
              title="Email Support"
              description="Send us a detailed description of your concern via email."
              icon={Mail}
              link="mailto:support@copyclipcloud.com"
              linkText="Send Email"
            />
            <SupportOption 
              title="Browse FAQs"
              description="Find quick answers to frequently asked questions in our knowledge base."
              icon={FileText}
              link="/faq"
              linkText="Go to FAQs"
            />
            <SupportOption 
              title="Live Chat"
              description="Chat in real-time with our support team for immediate assistance."
              icon={Headphones}
              link="#live-chat"
              linkText="Start Chat"
              comingSoon={true}
            />
            <SupportOption 
              title="Documentation"
              description="Browse our comprehensive documentation for detailed instructions."
              icon={BookOpen}
              link="/docs"
              linkText="View Documentation"
            />
            <SupportOption 
              title="Video Tutorials"
              description="Watch our video guides to optimally use CopyClipCloud."
              icon={Video}
              link="/tutorials"
              linkText="Watch Videos"
              comingSoon={true}
            />
          </div>
        </motion.div>

        <motion.div
          className="mb-16 glass-panel p-8 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div>
            <Accordion type="single" collapsible className="divide-y divide-white/10">
              {popularQuestions.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b-0 last:border-0">
                  <AccordionTrigger className="py-5 px-6 text-left hover:no-underline group">
                    <span className="text-lg font-medium group-hover:text-white transition-colors">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-0 text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, staggerChildren: 0.1 }}
        >
          <motion.div 
            className="glass-panel p-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-medium">Support Hours</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              All times are in CET/CEST.
            </p>
          </motion.div>

          <motion.div 
            className="glass-panel p-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-medium">Community</h3>
            </div>
            <p className="mb-4 text-gray-300">
              Join our community to share tips, ask questions, and connect with other users.
            </p>
            <div className="flex flex-wrap gap-3">
              <motion.a 
                href="#forum" 
                className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Forum
              </motion.a>
              <motion.a 
                href="#discord" 
                className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discord
              </motion.a>
              <motion.a 
                href="#reddit" 
                className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reddit
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center glass-panel p-8 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Give Feedback</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Your opinion matters to us. Let us know how we can improve CopyClipCloud.
          </p>
          <Button asChild>
            <Link to="/contact">Send Feedback</Link>
          </Button>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
