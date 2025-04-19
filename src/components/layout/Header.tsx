
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Clipboard, Shield, FileText, Download, MessageSquare, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useFileDownload } from "@/hooks/useFileDownload";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { handleDownload } = useFileDownload();
  
  // Enhanced scroll detection with smoother transition trigger
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-black/80 border-b border-white/10 shadow-lg' 
            : 'py-5 bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo with enhanced hover animation */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 overflow-hidden group-hover:border-white/40 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              }}
              whileHover={{ 
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Clipboard className="w-5 h-5 text-white" />
            </motion.div>
            <motion.span 
              className="font-bold text-white text-lg tracking-tight"
              whileHover={{ letterSpacing: "0.02em" }}
              transition={{ duration: 0.3 }}
            >
              CopyClipCloud
            </motion.span>
          </Link>
          
          {/* Desktop navigation with modern hover effects */}
          <nav className="hidden md:flex items-center space-x-10">
            <NavLink to="/" icon={Home}>Home</NavLink>
            <NavLink to="/features" icon={FileText}>Features</NavLink>
            <NavLink to="/pricing" icon={FileText}>Pricing</NavLink>
            <NavLink to="/about" icon={Clipboard}>About</NavLink>
            <NavLink to="/contact" icon={MessageSquare}>Contact</NavLink>
            
            {/* Improved dropdown using shadcn components */}
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.button 
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    Support
                    <motion.span 
                      className="ml-1.5 inline-block"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 0 }}
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                      </svg>
                    </motion.span>
                  </motion.button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-56 py-2 rounded-xl border border-white/10 backdrop-blur-xl"
                  style={{ background: "rgba(0, 0, 0, 0.95)" }}
                >
                  <DropdownMenuItem asChild className="px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5">
                    <Link to="/support" className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>Support Center</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5">
                    <Link to="/privacy" className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      <span>Privacy</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
          
          {/* Enhanced download button */}
          <div className="hidden md:flex items-center">
            <motion.button 
              onClick={handleDownload}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-full relative overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                border: "1px solid rgba(255, 255, 255, 0.2)"
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
              
              <Download className="w-4 h-4 text-white relative z-10" />
              <span className="font-medium text-white relative z-10">Download</span>
            </motion.button>
          </div>
          
          {/* Mobile menu button with animation */}
          <motion.button 
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>
      
      {/* Enhanced mobile menu with animations */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md pt-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 pt-8">
              <div className="space-y-2">
                <MobileNavLink to="/" icon={Home}>Home</MobileNavLink>
                <MobileNavLink to="/features" icon={FileText}>Features</MobileNavLink>
                <MobileNavLink to="/pricing" icon={FileText}>Pricing</MobileNavLink>
                <MobileNavLink to="/about" icon={Clipboard}>About</MobileNavLink>
                <MobileNavLink to="/contact" icon={MessageSquare}>Contact</MobileNavLink>
                
                <div className="pt-4 mt-4 border-t border-white/10">
                  <p className="text-gray-400 mb-3 text-sm font-medium pl-2">Support</p>
                  <div className="space-y-2 pl-2">
                    <MobileNavLink to="/support" icon={MessageSquare}>Support Center</MobileNavLink>
                    <MobileNavLink to="/privacy" icon={Shield}>Privacy</MobileNavLink>
                  </div>
                </div>
                
                <div className="pt-6 mt-6 border-t border-white/10">
                  <motion.button 
                    onClick={handleDownload}
                    className="w-full py-3.5 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center space-x-2 text-white font-medium"
                    whileTap={{ scale: 0.97 }}
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Now</span>
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

// Enhanced NavLink component with smoother animations
const NavLink = ({ children, to, icon: Icon }: { children: React.ReactNode; to: string; icon: React.ElementType }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className="relative group flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
    >
      <Icon className="w-4 h-4 mr-1 group-hover:rotate-3 transition-transform duration-300" />
      <span className="relative">
        {children}
        <motion.span 
          className="absolute inset-x-0 -bottom-1 h-px bg-white origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </span>
      {isActive && (
        <motion.div 
          layoutId="navbar-indicator"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/60 rounded-full"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Link>
  );
};

// Enhanced DropdownLink component
const DropdownLink = ({ children, to, icon: Icon }: { children: React.ReactNode; to: string; icon: React.ElementType }) => (
  <Link 
    to={to} 
    className="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all"
  >
    <Icon className="w-4 h-4 mr-2" />
    <motion.span whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
      {children}
    </motion.span>
  </Link>
);

// Enhanced MobileNavLink component with better animations
const MobileNavLink = ({ children, to, icon: Icon }: { children: React.ReactNode; to: string; icon: React.ElementType }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Link 
        to={to} 
        className={`flex items-center space-x-3 text-base p-2 rounded-xl transition-all ${
          isActive 
            ? 'bg-white/10 text-white' 
            : 'text-gray-300 hover:bg-white/5 hover:text-white'
        }`}
      >
        <motion.div 
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            isActive ? 'bg-white/10' : 'bg-white/5'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon className="w-5 h-5" />
        </motion.div>
        <span>{children}</span>
      </Link>
    </motion.div>
  );
};

export default Header;
