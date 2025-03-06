
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  Clipboard, 
  ChevronDown, 
  Lock, 
  Award, 
  Heart, 
  Download, 
  Sparkles, 
  BookOpen, 
  MessageSquare,
  Cloud,
  Code,
  HelpCircle,
  LifeBuoy,
  FileText,
  Github,
  Twitter
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useFileDownload } from "@/hooks/useFileDownload";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();
  const { handleDownload } = useFileDownload();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsResourcesOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-black/90 backdrop-blur-lg border-b border-white/10' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="w-10 h-10 rounded-full glass-panel flex items-center justify-center border border-white/20 overflow-hidden group-hover:border-white/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Clipboard className="w-5 h-5 text-white" />
            </motion.div>
            <span className="font-bold text-white text-lg tracking-tight">CopyClipCloud</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/tutorials">Tutorials</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            
            <div className="relative group" onMouseEnter={() => setIsResourcesOpen(true)} onMouseLeave={() => setIsResourcesOpen(false)}>
              <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                Resources <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div 
                    className="absolute right-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="py-3 glass-panel backdrop-blur-xl border border-white/10 rounded-xl shadow-xl overflow-hidden">
                      <div className="px-4 py-2 mb-2 border-b border-white/10">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase">Resources</h4>
                      </div>
                      <DropdownLink to="/blog" icon={BookOpen}>Blog</DropdownLink>
                      <DropdownLink to="/tutorials" icon={Sparkles}>Tutorials</DropdownLink>
                      <DropdownLink to="/faq" icon={MessageSquare}>FAQ</DropdownLink>
                      <DropdownLink to="/documentation" icon={FileText}>Documentation</DropdownLink>
                      <div className="px-4 py-2 mt-2 mb-2 border-t border-white/10">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase">Community</h4>
                      </div>
                      <DropdownLink to="/support" icon={LifeBuoy}>Support</DropdownLink>
                      <DropdownExternalLink href="https://github.com" icon={Github}>GitHub</DropdownExternalLink>
                      <DropdownExternalLink href="https://twitter.com" icon={Twitter}>Twitter</DropdownExternalLink>
                    </div>
                    {/* Decorative floating elements in the dropdown */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-white/5"></div>
                    <div className="absolute top-1/2 left-1/3 w-4 h-4 rounded-full bg-white/5"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
          
          <div className="hidden md:flex items-center">
            <motion.button
              onClick={handleDownload}
              className="flex items-center space-x-2 px-5 py-2.5 bg-white text-black rounded-full hover:bg-opacity-90 transition-all relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <Download className="w-4 h-4" />
              <span className="font-medium">Download</span>
            </motion.button>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm mt-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4 pt-8">
              <div className="space-y-6">
                <MobileNavLink to="/features" icon={Award}>Features</MobileNavLink>
                <MobileNavLink to="/pricing" icon={Heart}>Pricing</MobileNavLink>
                <MobileNavLink to="/tutorials" icon={Sparkles}>Tutorials</MobileNavLink>
                <MobileNavLink to="/about" icon={Clipboard}>About</MobileNavLink>
                <MobileNavLink to="/contact" icon={Lock}>Contact</MobileNavLink>
                
                <div className="pt-4 border-t border-white/10">
                  <p className="text-gray-400 mb-4 text-sm">Resources</p>
                  <div className="space-y-4 pl-4">
                    <MobileNavLink to="/blog" icon={BookOpen}>Blog</MobileNavLink>
                    <MobileNavLink to="/documentation" icon={FileText}>Documentation</MobileNavLink>
                    <MobileNavLink to="/faq" icon={HelpCircle}>FAQ</MobileNavLink>
                    <MobileNavLink to="/support" icon={LifeBuoy}>Support</MobileNavLink>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
                  <button 
                    onClick={handleDownload}
                    className="w-full bg-white text-black py-3 rounded-lg flex items-center justify-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Now</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLink = ({ children, to }: { children: React.ReactNode; to: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`relative text-gray-300 hover:text-white transition-colors ${isActive ? 'text-white' : ''}`}
    >
      {children}
      {isActive && (
        <motion.div 
          layoutId="navbar-indicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full transform translate-y-2"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Link>
  );
};

const DropdownLink = ({ children, to, icon: Icon }: { children: React.ReactNode; to: string; icon: React.ElementType }) => (
  <Link 
    to={to} 
    className="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
  >
    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mr-3">
      <Icon className="w-4 h-4" />
    </div>
    <span>{children}</span>
  </Link>
);

const DropdownExternalLink = ({ children, href, icon: Icon }: { children: React.ReactNode; href: string; icon: React.ElementType }) => (
  <a 
    href={href}
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
  >
    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mr-3">
      <Icon className="w-4 h-4" />
    </div>
    <span>{children}</span>
  </a>
);

const MobileNavLink = ({ children, to, icon: Icon }: { children: React.ReactNode; to: string; icon: React.ElementType }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`flex items-center space-x-3 text-lg px-2 py-2 rounded-xl ${isActive ? 'bg-white/10' : ''}`}
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isActive ? 'bg-white/20' : 'bg-white/10'}`}>
        <Icon className="w-5 h-5" />
      </div>
      <span>{children}</span>
    </Link>
  );
};

export default Header;
