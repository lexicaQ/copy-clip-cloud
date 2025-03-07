
import React from "react";
import { motion } from "framer-motion";
import { LifeBuoy, MessageCircle, Mail, Phone, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ModernBackground from "@/components/landing/ModernBackground";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <ModernBackground />
      <Header />
      
      <div className="pt-32 pb-24 px-4 max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="h-20 w-20 rounded-2xl glass-panel flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <LifeBuoy className="w-10 h-10" />
          </motion.div>
          
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Support Center</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have questions or need help? We're here for you. Find the answers you need or contact our team.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="glass-panel p-8 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5, borderColor: "rgba(255, 255, 255, 0.2)" }}
          >
            <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-medium mb-2">Live Chat</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Chat with our support team in real-time for immediate assistance.
            </p>
            <button className="w-full py-3 bg-white/10 rounded-xl hover:bg-white/15 transition-all border border-white/20 text-sm font-medium">
              Start Chat
            </button>
          </motion.div>
          
          <motion.div 
            className="glass-panel p-8 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5, borderColor: "rgba(255, 255, 255, 0.2)" }}
          >
            <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-medium mb-2">Email Support</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Email our team for detailed support. We respond within 24 hours.
            </p>
            <button className="w-full py-3 bg-white/10 rounded-xl hover:bg-white/15 transition-all border border-white/20 text-sm font-medium">
              Send Email
            </button>
          </motion.div>
          
          <motion.div 
            className="glass-panel p-8 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5, borderColor: "rgba(255, 255, 255, 0.2)" }}
          >
            <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-medium mb-2">Phone Support</h3>
            <p className="text-gray-400 mb-6 text-sm">
              For premium users, get direct phone support from our specialists.
            </p>
            <button className="w-full py-3 bg-white/10 rounded-xl hover:bg-white/15 transition-all border border-white/20 text-sm font-medium">
              Call Support
            </button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center mb-6">
              <Clock className="w-5 h-5 mr-2" />
              <h2 className="text-xl font-semibold">Support Hours</h2>
            </div>
            
            <div className="glass-panel p-6 rounded-xl mb-6">
              <div className="flex justify-between mb-3 pb-3 border-b border-white/10">
                <span className="text-gray-300">Monday - Friday</span>
                <span className="font-medium">9:00 AM - 8:00 PM EST</span>
              </div>
              <div className="flex justify-between mb-3 pb-3 border-b border-white/10">
                <span className="text-gray-300">Saturday</span>
                <span className="font-medium">10:00 AM - 6:00 PM EST</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Sunday</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
            
            <div className="glass-panel p-6 rounded-xl">
              <h3 className="font-medium mb-4">Emergency Support</h3>
              <p className="text-sm text-gray-400 mb-4">
                Premium users have access to 24/7 emergency support for critical issues. 
              </p>
              <a href="/pricing" className="text-sm flex items-center text-white/80 hover:text-white">
                Upgrade to Premium <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <MessageCircle className="w-5 h-5 mr-2" />
              <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
            </div>
            
            <div className="glass-panel p-6 rounded-xl">
              <Accordion type="single" collapsible className="border-white/10">
                <AccordionItem value="item-1" className="border-white/10">
                  <AccordionTrigger className="text-left">How do I sync across multiple devices?</AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    To sync across devices, sign in with the same account on each device. Your clipboard history will automatically sync when connected to the internet.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-white/10">
                  <AccordionTrigger className="text-left">Is my clipboard data secure?</AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    Yes, all clipboard data is encrypted with AES-256 encryption before leaving your device. We use a zero-knowledge architecture, meaning we cannot access your data.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border-white/10">
                  <AccordionTrigger className="text-left">Can I recover deleted clipboard items?</AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    Premium users can recover deleted items from the trash for up to 30 days. Free users have a 7-day recovery window.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border-white/10">
                  <AccordionTrigger className="text-left">How many devices can I connect?</AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    Free users can connect up to 2 devices. Premium users have unlimited device connections.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border-white/10">
                  <AccordionTrigger className="text-left">How do I upgrade to Premium?</AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    Visit the Pricing page and select the Premium plan that best fits your needs. You can upgrade from within the app or on our website.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="mt-6 text-center">
                <a href="/faq" className="text-sm flex items-center justify-center text-white/80 hover:text-white">
                  View all FAQs <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Support;
