
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Clipboard, Shield, FileText, Download, MessageSquare, Home, ChevronDown } from "lucide-react";
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-lg' 
            : 'py-5 bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between relative">
          {/* Enhanced logo with more interactive animation */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center border border-white/20 overflow-hidden group-hover:border-white/40 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 25px rgba(255,255,255,0.2)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Clipboard className="w-5 h-5 text-white group-hover:text-white/90" />
              
              {/* Enhanced shine effect on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                animate={{ 
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            </motion.div>
            <motion.span 
              className="font-bold text-white text-lg tracking-tight"
              whileHover={{ letterSpacing: "0.03em" }}
              transition={{ duration: 0.3 }}
            >
              CopyClipCloud
            </motion.span>
          </Link>
          
          {/* Enhanced navigation with more interactive effects */}
          <nav className="hidden md:flex items-center space-x-10">
            <NavLink to="/" icon={Home}>Home</NavLink>
            <NavLink to="/features" icon={FileText}>Features</NavLink>
            <NavLink to="/pricing" icon={FileText}>Pricing</NavLink>
            <NavLink to="/about" icon={Clipboard}>About</NavLink>
            <NavLink to="/contact" icon={MessageSquare}>Contact</NavLink>
            
            <div className="relative group">
              <button className="flex items-center text-gray-300 hover:text-white transition-colors nav-link-hover">
                Support
                <motion.div
                  className="ml-1.5 inline-block"
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </button>
              
              {/* Enhanced dropdown with smoother animations */}
              <div className="absolute right-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                <motion.div 
                  className="py-3 glass-panel backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <DropdownLink to="/support" icon={MessageSquare}>Support Center</DropdownLink>
                  <DropdownLink to="/privacy" icon={Shield}>Privacy</DropdownLink>
                  <DropdownLink to="/tutorials" icon={FileText}>Tutorials</DropdownLink>
                </motion.div>
              </div>
            </div>
          </nav>
          
          {/* Enhanced download button */}
          <div className="hidden md:flex items-center">
            <motion.button 
              onClick={handleDownload}
              className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-white/90 to-white/80 text-black rounded-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all border border-white/80 relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download className="w-4 h-4" />
              <span className="font-medium">Download</span>
              
              {/* Enhanced shimmer effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-transparent opacity-0"
                animate={{ 
                  x: ['-100%', '100%'],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 1.8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 2.5
                }}
              />

              {/* Button border animation */}
              <motion.div
                className="absolute inset-0 border border-white/0 rounded-lg"
                animate={{
                  borderColor: ["rgba(255,255,255,0.2)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.2)"],
                  boxShadow: [
                    "0 0 0 rgba(255,255,255,0)",
                    "0 0 10px rgba(255,255,255,0.3)",
                    "0 0 0 rgba(255,255,255,0)"
                  ]
                }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            </motion.button>
          </div>
          
          {/* Enhanced mobile menu button */}
          <motion.button 
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg glass-panel text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </motion.header>
      
      {/* Enhanced mobile menu with better animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg mt-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
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
                    <MobileNavLink to="/tutorials" icon={FileText}>Tutorials</MobileNavLink>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
                  <motion.button 
                    onClick={handleDownload}
                    className="w-full bg-white text-black py-3 rounded-lg flex items-center justify-center space-x-2 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Now</span>
                    
                    {/* Add shimmer effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-transparent opacity-0"
                      animate={{ 
                        x: ['-100%', '100%'],
                        opacity: [0, 0.5, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    />
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
  const isActive = location.pathname === to || (to.includes('#') && location.pathname + to.substring(to.indexOf('#')) === to);
  
  return (
    <Link 
      to={to} 
      className={`relative flex items-center space-x-1 text-gray-300 hover:text-white transition-colors group nav-link-hover ${isActive ? 'text-white' : ''}`}
    >
      <Icon className="w-4 h-4 mr-1 group-hover:rotate-3 transition-transform duration-300" />
      <span>{children}</span>
      {isActive && (
        <motion.div 
          layoutId="navbar-indicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white/60 to-white rounded-full transform translate-y-2"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Link>
  );
};

const DropdownLink = ({ children, to, icon: Icon }: { children: React.ReactNode; to: string; icon: React.ElementType }) => (
  <Link 
    to={to} 
    className="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors group"
  >
    <motion.div
      className="w-4 h-4 mr-2 text-white/70 group-hover:text-white"
      whileHover={{ rotate: 5, scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      <Icon className="w-4 h-4" />
    </motion.div>
    <span>{children}</span>
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
      <motion.div 
        className={`w-10 h-10 rounded-xl flex items-center justify-center ${isActive ? 'bg-white/20' : 'bg-white/10'}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon className="w-5 h-5" />
      </motion.div>
      <span>{children}</span>
    </Link>
  );
};

export default Header;
