
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clipboard, Github, Twitter, Instagram, Facebook, Mail, ArrowRight, Heart, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      {/* Background dots */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border border-white/20">
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
            
            
          </div>
          
          <div>
            <h4 className="font-medium text-white text-lg mb-5">Product</h4>
            <ul className="space-y-3">
              <FooterLink to="/features">Features</FooterLink>
              <FooterLink to="/pricing">Pricing</FooterLink>
              <FooterLink to="/download">Download</FooterLink>
              <FooterLink to="/updates">Updates</FooterLink>
              <FooterLink to="/roadmap">Roadmap</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white text-lg mb-5">Company</h4>
            <ul className="space-y-3">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/press">Press</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/partners">Partners</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white text-lg mb-5">Resources</h4>
            <ul className="space-y-3">
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/help">Help Center</FooterLink>
              <FooterLink to="/docs">Documentation</FooterLink>
              <FooterLink to="/tutorials">Tutorials</FooterLink>
              <FooterLink to="/status">System Status</FooterLink>
            </ul>
          </div>
        </div>
        
        
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
          <div className="text-gray-500 text-sm mb-4 md:mb-0 order-2 md:order-1">
            © {currentYear} CopyClipCloud. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0 order-1 md:order-2">
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white text-sm">
              Cookies
            </Link>
            <Link to="/acceptable-use" className="text-gray-400 hover:text-white text-sm">
              Acceptable Use
            </Link>
            <Link to="/data-processing" className="text-gray-400 hover:text-white text-sm">
              Data Processing
            </Link>
          </div>
        </div>
      </div>
    </footer>;
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
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 relative overflow-hidden group border border-white/5 hover:border-white/20"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    <Icon className="w-5 h-5 relative z-10" />
    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
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
      className="text-gray-400 transition-all duration-300 group flex items-center hover:text-white relative"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-white/60 to-transparent group-hover:w-full transition-all duration-300 ease-out" />
      </span>
      <ArrowRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
    </Link>
  </li>
);

export default Footer;
