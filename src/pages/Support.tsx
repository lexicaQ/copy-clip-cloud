
import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, MessageCircle, Video, Users, ArrowRight, Mail, ExternalLink, Tag } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const Support = () => {
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
            <span>Support</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Need help with CopyClipCloud?</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're here to help you get the most out of your clipboard manager.
            Choose from the options below to get the support you need.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <motion.div
            className="glass-panel p-8 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="p-3 bg-white/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <HelpCircle className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-400 mb-6 flex-grow">
              Browse our collection of frequently asked questions to find quick answers to common questions.
            </p>
            <Link 
              to="/faq" 
              className="inline-flex items-center text-white hover:underline"
            >
              Go to FAQ <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>
          
          <motion.div
            className="glass-panel p-8 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="p-3 bg-white/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <MessageCircle className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Live Chat Support</h2>
            <p className="text-gray-400 mb-6 flex-grow">
              Connect with our support team in real-time for immediate assistance with your questions.
            </p>
            
            <div className="relative">
              <Link 
                to="#" 
                className="inline-flex items-center text-white hover:underline opacity-50 pointer-events-none"
              >
                Start Chat <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <div className="absolute -top-3 -left-3">
                <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/20">
                  Coming Soon
                </span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="glass-panel p-8 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="p-3 bg-white/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Video className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Video Tutorials</h2>
            <p className="text-gray-400 mb-6 flex-grow">
              Watch step-by-step video guides to learn how to use all the features of CopyClipCloud.
            </p>
            
            <div className="relative">
              <Link 
                to="#" 
                className="inline-flex items-center text-white hover:underline opacity-50 pointer-events-none"
              >
                Watch Tutorials <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <div className="absolute -top-3 -left-3">
                <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/20">
                  Coming Soon
                </span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="glass-panel p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-lg bg-white/10 mr-3">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Contact Support</h2>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-3xl">
            Can't find what you're looking for? Our dedicated support team is ready to help.
            Send us a message and we'll get back to you as soon as possible.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-start p-4 bg-white/5 rounded-lg">
              <Tag className="w-6 h-6 mr-3 text-gray-400 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Technical Support</h3>
                <p className="text-sm text-gray-400">
                  For issues with the application, technical difficulties, or bug reports.
                </p>
                <a 
                  href="mailto:support@copyclipcloud.com" 
                  className="text-white text-sm inline-flex items-center mt-2 hover:underline"
                >
                  support@copyclipcloud.com <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
            
            <div className="flex items-start p-4 bg-white/5 rounded-lg">
              <Tag className="w-6 h-6 mr-3 text-gray-400 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Billing & Account</h3>
                <p className="text-sm text-gray-400">
                  For questions about your subscription, payments, or account management.
                </p>
                <a 
                  href="mailto:billing@copyclipcloud.com" 
                  className="text-white text-sm inline-flex items-center mt-2 hover:underline"
                >
                  billing@copyclipcloud.com <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
          
          <Link
            to="/contact"
            className="px-6 py-3 bg-white text-black rounded-lg inline-flex items-center hover:bg-opacity-90 transition-all"
          >
            Contact Us
          </Link>
        </motion.div>
        
        <motion.div
          className="glass-panel p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-lg bg-white/10 mr-3">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Community</h2>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-3xl">
            Join our community of CopyClipCloud users to share tips, ask questions, and connect with other users.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="#discord"
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
              <span>Discord Server</span>
            </a>
            
            <a 
              href="#forum"
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>Community Forum</span>
            </a>
            
            <a 
              href="#twitter"
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              <span>Twitter</span>
            </a>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;
