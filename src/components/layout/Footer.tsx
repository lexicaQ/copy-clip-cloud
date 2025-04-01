
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clipboard, Github, Twitter, Instagram, Facebook, Mail, ArrowRight, Heart, ExternalLink, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px]"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border border-white/20 bg-gradient-to-br from-black to-gray-900">
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
              className="glass-panel p-6 rounded-xl border border-white/10 mt-8"
            >
              <h4 className="font-medium text-white mb-4">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  <a href="mailto:info@copyclipcloud.com">info@copyclipcloud.com</a>
                </div>
                <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  <a href="tel:+15551234567">+1 (555) 123-4567</a>
                </div>
                <div className="flex items-start text-gray-400 hover:text-white transition-colors">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-400" />
                  <span>1234 Innovation Drive, San Francisco, CA 94107</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div>
            <h4 className="font-medium text-white text-lg mb-5 border-b border-white/10 pb-2">Product</h4>
            <ul className="space-y-3">
              <FooterLink to="/features">Features</FooterLink>
              <FooterLink to="/pricing">Pricing</FooterLink>
              <FooterLink to="/download">Download</FooterLink>
              <FooterLink to="/updates">Updates</FooterLink>
              <FooterLink to="/roadmap">Roadmap</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white text-lg mb-5 border-b border-white/10 pb-2">Company</h4>
            <ul className="space-y-3">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/press">Press</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/partners">Partners</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white text-lg mb-5 border-b border-white/10 pb-2">Resources</h4>
            <ul className="space-y-3">
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/help">Help Center</FooterLink>
              <FooterLink to="/docs">Documentation</FooterLink>
              <FooterLink to="/tutorials">Tutorials</FooterLink>
              <FooterLink to="/status">System Status</FooterLink>
            </ul>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-panel p-6 rounded-xl border border-white/10 mb-12 text-center"
        >
          <p className="text-gray-300 flex items-center justify-center">
            <Heart className="w-5 h-5 mr-2 text-red-500" />
            <span>Made with love for productivity enthusiasts worldwide</span>
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
          <div className="text-gray-500 text-sm mb-4 md:mb-0 order-2 md:order-1">
            © {currentYear} CopyClipCloud. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0 order-1 md:order-2">
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm flex items-center group">
              <span>Terms</span>
              <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm flex items-center group">
              <span>Privacy</span>
              <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white text-sm flex items-center group">
              <span>Cookies</span>
              <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </div>
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
    className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/5 hover:border-white/20" 
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
  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
    <Link to={to} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
      <span className="group-hover:text-blue-400 transition-colors duration-300">{children}</span>
      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all group-hover:text-blue-400" />
    </Link>
  </motion.li>
);

export default Footer;
