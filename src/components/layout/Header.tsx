
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Clipboard, Shield, FileText, Download, MessageSquare, Home, Sparkles, Users, Settings } from "lucide-react";
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
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' 
            : 'py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="w-10 h-10 rounded-full glass-panel flex items-center justify-center border border-white/20 overflow-hidden group-hover:border-white/40 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Clipboard className="w-5 h-5 text-white" />
              
              {/* Glow effect */}
              <motion.div 
                className="absolute inset-0 bg-white/20 blur-xl"
                animate={{ 
                  opacity: [0, 0.5, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
            <motion.span 
              className="font-bold text-white text-lg tracking-tight"
              whileHover={{ letterSpacing: "0.05em" }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              CopyClipCloud
            </motion.span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" icon={Home}>Home</NavLink>
            <NavLink to="/features" icon={Sparkles}>Features</NavLink>
            <NavLink to="/pricing" icon={FileText}>Pricing</NavLink>
            <NavLink to="/about" icon={Users}>About</NavLink>
            <NavLink to="/contact" icon={MessageSquare}>Contact</NavLink>
            
            <div className="relative group">
              <motion.button 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Settings className="w-4 h-4 mr-1.5" />
                Support
                <motion.span 
                  className="ml-1.5 inline-block"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: group => group ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  style={{ transformOrigin: "center" }}
                >
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.span>
              </motion.button>
              <div className="absolute right-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                <motion.div 
                  className="py-3 glass-panel backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
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
              className="relative flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-white to-gray-200 text-black rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all border border-white/80 overflow-hidden"
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Button highlight effect */}
              <motion.div 
                className="absolute inset-0 bg-white/30"
                initial={{ x: "-100%", opacity: 0.5 }}
                animate={{ x: "200%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              
              <Download className="w-4 h-4" />
              <span className="font-medium relative z-10">Download</span>
            </motion.button>
          </div>
          
          <motion.button 
            className="md:hidden text-white p-1 rounded-lg bg-white/5 backdrop-blur-md border border-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </motion.header>
      
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
                <MobileNavLink to="/features" icon={Sparkles}>Features</MobileNavLink>
                <MobileNavLink to="/pricing" icon={FileText}>Pricing</MobileNavLink>
                <MobileNavLink to="/about" icon={Users}>About</MobileNavLink>
                <MobileNavLink to="/contact" icon={MessageSquare}>Contact</MobileNavLink>
                
                <div className="pt-4 border-t border-white/10">
                  <p className="text-gray-400 mb-4 text-sm">Support</p>
                  <div className="space-y-4 pl-4">
                    <MobileNavLink to="/support" icon={MessageSquare}>Support Center</MobileNavLink>
                    <MobileNavLink to="/privacy" icon={Shield}>Privacy</MobileNavLink>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
                  <motion.button 
                    onClick={handleDownload}
                    className="w-full bg-white text-black py-3 rounded-lg flex items-center justify-center space-x-2 overflow-hidden relative"
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Button highlight effect */}
                    <motion.div 
                      className="absolute inset-0 bg-white/30"
                      initial={{ x: "-100%", opacity: 0.5 }}
                      animate={{ x: "200%" }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                    
                    <Download className="w-5 h-5" />
                    <span className="relative z-10">Download Now</span>
                  </motion.button>
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
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`relative flex items-center space-x-1 text-gray-300 hover:text-white transition-colors group ${isActive ? 'text-white' : ''}`}
    >
      <motion.div
        whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.2 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-4 h-4 mr-1" />
      </motion.div>
      <span>{children}</span>
      {isActive && (
        <motion.div 
          layoutId="navbar-indicator"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      
      {/* Hover indicator */}
      {!isActive && (
        <motion.div 
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/50 rounded-full scale-x-0 origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
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
      
      {/* Active indicator */}
      {isActive && (
        <motion.div 
          layoutId="mobile-nav-indicator"
          className="ml-auto w-1.5 h-8 bg-white/20 rounded-full"
        />
      )}
    </Link>
  );
};

export default Header;
