import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clipboard, Github, Twitter, Instagram, Facebook, Mail, ArrowRight, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg glass-panel flex items-center justify-center">
                <Clipboard className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">CopyClipCloud</span>
            </div>
            <p className="text-gray-400 text-sm">
              The next generation clipboard manager with military-grade encryption and seamless sync across all your Apple devices.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialLink icon={Twitter} href="https://twitter.com" />
              <SocialLink icon={Github} href="https://github.com" />
              <SocialLink icon={Instagram} href="https://instagram.com" />
              <SocialLink icon={Facebook} href="https://facebook.com" />
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <FooterLink to="/features">Features</FooterLink>
              <FooterLink to="/pricing">Pricing</FooterLink>
              <FooterLink to="/download">Download</FooterLink>
              <FooterLink to="/updates">Updates</FooterLink>
              <FooterLink to="/roadmap">Roadmap</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/press">Press</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/partners">Partners</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/help">Help Center</FooterLink>
              <FooterLink to="/docs">Documentation</FooterLink>
              <FooterLink to="/tutorials">Tutorials</FooterLink>
              <FooterLink to="/status">System Status</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="glass-panel p-6 rounded-xl mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Stay updated with our newsletter</h3>
              <p className="text-gray-400 text-sm">Get the latest news, updates and tips delivered directly to your inbox.</p>
            </div>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border border-white/20 px-4 py-2 rounded-l-lg focus:outline-none focus:border-white/40 text-white w-full md:w-64"
              />
              <button className="bg-white text-black px-4 py-2 rounded-r-lg hover:bg-opacity-90 transition-all flex items-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} CopyClipCloud. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center space-x-6">
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white text-sm">Cookies</Link>
            <span className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-3 h-3 mx-1 text-white" /> in San Francisco
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon: Icon, href }: { icon: React.ElementType; href: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
  >
    <Icon className="w-4 h-4" />
  </a>
);

const FooterLink = ({ children, to }: { children: React.ReactNode; to: string }) => (
  <li>
    <Link to={to} className="text-gray-400 hover:text-white transition-colors text-sm">
      {children}
    </Link>
  </li>
);

export default Footer;
