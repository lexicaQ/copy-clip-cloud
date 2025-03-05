
import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Phone, Send, Clock, Check } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InteractiveBackground from "@/components/landing/InteractiveBackground";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <InteractiveBackground />
      <Header />
      
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Have questions about CopyClipCloud? Reach out to our team for support, feedback, or inquiries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div 
              className="glass-panel p-8 rounded-2xl border border-white/20 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40"
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 h-36 resize-none"
                    placeholder="Your message"
                  />
                </div>
                
                <div className="flex items-center">
                  <input id="terms" type="checkbox" className="w-4 h-4 bg-white/5 border border-white/20 rounded" />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
                    I agree to the processing of my personal data as described in the Privacy Policy
                  </label>
                </div>
                
                <div>
                  <button type="submit" className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3 bg-white text-black rounded-lg hover:bg-opacity-90 transition-all font-medium">
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </motion.div>
            
            <motion.div 
              className="glass-panel p-8 rounded-2xl border border-white/20 shadow-lg flex flex-col justify-between"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <ul className="space-y-6 mb-10">
                  <ContactItem 
                    icon={Mail} 
                    title="Email Us" 
                    content="support@copyclipcloud.com"
                    link="mailto:support@copyclipcloud.com"
                  />
                  <ContactItem 
                    icon={Phone} 
                    title="Call Us" 
                    content="+1 (555) 123-4567"
                    link="tel:+15551234567"
                  />
                  <ContactItem 
                    icon={MapPin} 
                    title="Visit Us" 
                    content="123 Tech Street, San Francisco, CA 94107"
                    link="https://maps.google.com"
                  />
                  <ContactItem 
                    icon={Clock} 
                    title="Working Hours" 
                    content="Monday - Friday: 9AM - 6PM PST"
                  />
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Our Support Commitment</h3>
                <div className="space-y-3">
                  <SupportPoint text="Response within 24 hours" />
                  <SupportPoint text="Dedicated support team" />
                  <SupportPoint text="Comprehensive documentation" />
                  <SupportPoint text="Regular product updates" />
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="glass-panel p-8 rounded-2xl border border-white/20 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FaqItem 
                question="How quickly can I expect a response?" 
                answer="We aim to respond to all inquiries within 24 hours during business days. Premium support customers receive priority response times."
              />
              <FaqItem 
                question="Do you offer phone support?" 
                answer="Yes, phone support is available for business and enterprise customers. Individual users can schedule a call through our support portal."
              />
              <FaqItem 
                question="How can I report a bug?" 
                answer="You can report bugs through our support form or by sending an email to bugs@copyclipcloud.com with detailed information about the issue."
              />
              <FaqItem 
                question="Can I request a feature?" 
                answer="Absolutely! We welcome feature requests through our feedback form. Many of our best features have come from user suggestions."
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

const ContactItem = ({ 
  icon: Icon, title, content, link 
}: { 
  icon: React.ElementType; 
  title: string; 
  content: string; 
  link?: string 
}) => {
  const ContentComponent = link ? 'a' : 'div';
  const contentProps = link ? { href: link, target: link.startsWith('http') ? '_blank' : undefined, rel: link.startsWith('http') ? 'noopener noreferrer' : undefined } : {};
  
  return (
    <li className="flex items-start">
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <ContentComponent 
          {...contentProps}
          className={`text-gray-400 ${link ? 'hover:text-white transition-colors' : ''}`}
        >
          {content}
        </ContentComponent>
      </div>
    </li>
  );
};

const SupportPoint = ({ text }: { text: string }) => (
  <div className="flex items-center">
    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-3">
      <Check className="w-3 h-3" />
    </div>
    <span className="text-gray-300 text-sm">{text}</span>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="bg-white/5 border border-white/10 rounded-lg p-5">
    <h3 className="font-medium text-white mb-2 flex items-start">
      <MessageSquare className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
      <span>{question}</span>
    </h3>
    <p className="text-gray-400 text-sm">{answer}</p>
  </div>
);

export default Contact;
