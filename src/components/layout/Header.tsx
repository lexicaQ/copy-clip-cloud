
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Clipboard, Shield, FileText, Download, MessageSquare, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useFileDownload } from "@/hooks/useFileDownload";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { handleDownload } = useFileDownload();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-black/90 backdrop-blur-lg border-b border-white/10 shadow-lg' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="w-10 h-10 rounded-full glass-panel flex items-center justify-center border border-white/20 overflow-hidden group-hover:border-white/40 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Clipboard className="w-5 h-5 text-white" />
            </motion.div>
            <span className="font-bold text-white text-lg tracking-tight">CopyClipCloud</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-10">
            <NavLink to="/" icon={Home}>Home</NavLink>
            <NavLink to="/features" icon={FileText}>Features</NavLink>
            <NavLink to="/pricing" icon={FileText}>Pricing</NavLink>
            <NavLink to="/about" icon={Clipboard}>About</NavLink>
            <NavLink to="/contact" icon={MessageSquare}>Contact</NavLink>
            
            <div className="relative group">
              <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                Support
                <motion.span 
                  className="ml-1.5 inline-block"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  style={{ transformOrigin: "center" }}
                >
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.span>
              </button>
              <div className="absolute right-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                <motion.div 
                  className="py-3 glass-panel backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <DropdownLink to="/support" icon={MessageSquare}>Support Center</DropdownLink>
                  <DropdownLink to="/privacy" icon={Shield}>Privacy</DropdownLink>
                </motion.div>
              </div>
            </div>
          </nav>
          
          <div className="hidden md:flex items-center">
            <motion.button 
              onClick={handleDownload}
              className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-white to-gray-200 text-black rounded-full hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all border border-white/80"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
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
              <div className="space-y-4">
                <MobileNavLink to="/" icon={Home}>Home</MobileNavLink>
                <MobileNavLink to="/features" icon={FileText}>Features</MobileNavLink>
                <MobileNavLink to="/pricing" icon={FileText}>Pricing</MobileNavLink>
                <MobileNavLink to="/about" icon={Clipboard}>About</MobileNavLink>
                <MobileNavLink to="/contact" icon={MessageSquare}>Contact</MobileNavLink>
                
                <div className="pt-4 border-t border-white/10">
                  <p className="text-gray-400 mb-4 text-sm">Support</p>
                  <div className="space-y-4 pl-4">
                    <MobileNavLink to="/support" icon={MessageSquare}>Support Center</MobileNavLink>
                    <MobileNavLink to="/privacy" icon={Shield}>Privacy</MobileNavLink>
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

const NavLink = ({ children, to, icon: Icon }: { children: React.ReactNode; to: string; icon: React.ElementType }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to.includes('#') && location.pathname + to.substring(to.indexOf('#')) === to);
  
  return (
    <Link 
      to={to} 
      className={`relative flex items-center space-x-1 text-gray-300 hover:text-white transition-colors group ${isActive ? 'text-white' : ''}`}
    >
      <Icon className="w-4 h-4 mr-1 group-hover:rotate-3 transition-transform duration-300" />
      <span>{children}</span>
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
    <Icon className="w-4 h-4 mr-2" />
    {children}
  </Link>
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
