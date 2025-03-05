
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clipboard, Github, Twitter, Instagram, Facebook, Mail, ArrowRight, Heart, ExternalLink, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/20 pt-20 pb-10 relative overflow-hidden">
      {/* Enhanced background effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border border-white/20 shadow-lg">
                  <Clipboard className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-white text-xl tracking-tight">CopyClipCloud</span>
              </div>
              <p className="text-gray-400 text-base leading-relaxed max-w-lg">
                Experience the next generation clipboard manager with military-grade encryption and seamless sync across all your Apple devices. Boost your productivity with intelligent organization.
              </p>
              <div className="flex space-x-5 pt-2">
                <SocialLink icon={Twitter} href="https://twitter.com" label="Twitter" />
                <SocialLink icon={Github} href="https://github.com" label="GitHub" />
                <SocialLink icon={Instagram} href="https://instagram.com" label="Instagram" />
                <SocialLink icon={Facebook} href="https://facebook.com" label="Facebook" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="font-medium text-white text-lg">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>support@copyclipcloud.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>123 Innovation Street, San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-medium text-white text-lg mb-5">Product</h4>
            <ul className="space-y-3">
              <FooterLink to="/features">Features</FooterLink>
              <FooterLink to="/pricing">Pricing</FooterLink>
              <FooterLink to="/download">Download</FooterLink>
              <FooterLink to="/updates">Updates</FooterLink>
              <FooterLink to="/roadmap">Roadmap</FooterLink>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-medium text-white text-lg mb-5">Company</h4>
            <ul className="space-y-3">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/press">Press</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/partners">Partners</FooterLink>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="font-medium text-white text-lg mb-5">Resources</h4>
            <ul className="space-y-3">
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/help">Help Center</FooterLink>
              <FooterLink to="/docs">Documentation</FooterLink>
              <FooterLink to="/tutorials">Tutorials</FooterLink>
              <FooterLink to="/status">System Status</FooterLink>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10 glass-panel p-6 rounded-xl"
        >
          <div className="text-center max-w-xl mx-auto space-y-4">
            <h4 className="text-white font-medium">Subscribe to our newsletter</h4>
            <p className="text-gray-400 text-sm">Get the latest updates, tutorials and special offers directly to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
              />
              <button className="px-6 py-2.5 bg-white text-black font-medium rounded-lg hover:bg-opacity-90 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 mt-10 pt-8"
        >
          <div className="text-gray-500 text-sm mb-4 md:mb-0 order-2 md:order-1">
            © {currentYear} CopyClipCloud. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0 order-1 md:order-2">
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm flex items-center">
              <span>Terms</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm flex items-center">
              <span>Privacy</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white text-sm flex items-center">
              <span>Cookies</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </Link>
            <span className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-3 h-3 mx-1 text-white animate-pulse" /> in San Francisco
            </span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

const SocialLink = ({
  icon: Icon,
  href,
  label
}: {
  icon: React.ElementType;
  href: string;
  label: string;
}) => (
  <motion.a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/5 hover:border-white/20 shadow-lg" 
    whileHover={{ scale: 1.1 }} 
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

const FooterLink = ({
  children,
  to
}: {
  children: React.ReactNode;
  to: string;
}) => (
  <li>
    <Link 
      to={to} 
      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
    >
      <span className="group-hover:translate-x-1 transition-transform duration-300">{children}</span>
      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
    </Link>
  </li>
);

export default Footer;
