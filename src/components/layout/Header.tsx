
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Clipboard, Shield, FileText, Download, MessageSquare, Home, Loader } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFileDownload } from "@/hooks/useFileDownload";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { handleDownload } = useFileDownload();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsLoading(false);
  }, [location.pathname]);

  const handleNavigation = (path: string) => {
    setIsLoading(true);
    setIsMenuOpen(false);
    navigate(path);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

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
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 overflow-hidden group-hover:border-white/40 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Clipboard className="w-5 h-5 text-white" />
            </motion.div>
            <motion.span 
              className="font-bold text-white text-lg tracking-tight"
              transition={{ duration: 0.3 }}
            >
              CopyClipCloud
            </motion.span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-10">
            <NavLink to="/" icon={Home} onClick={() => handleNavigation("/")}>Home</NavLink>
            <NavLink to="/features" icon={FileText} onClick={() => handleNavigation("/features")}>Features</NavLink>
            <NavLink to="/pricing" icon={FileText} onClick={() => handleNavigation("/pricing")}>Pricing</NavLink>
            <NavLink to="/about" icon={Clipboard} onClick={() => handleNavigation("/about")}>About</NavLink>
            <NavLink to="/contact" icon={MessageSquare} onClick={() => handleNavigation("/contact")}>Contact</NavLink>
            <NavLink to="/support" icon={MessageSquare} onClick={() => handleNavigation("/support")}>Support</NavLink>
          </nav>
          
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
      
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Loader className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                <MobileNavLink to="/" icon={Home} onClick={() => handleNavigation("/")}>Home</MobileNavLink>
                <MobileNavLink to="/features" icon={FileText} onClick={() => handleNavigation("/features")}>Features</MobileNavLink>
                <MobileNavLink to="/pricing" icon={FileText} onClick={() => handleNavigation("/pricing")}>Pricing</MobileNavLink>
                <MobileNavLink to="/about" icon={Clipboard} onClick={() => handleNavigation("/about")}>About</MobileNavLink>
                <MobileNavLink to="/contact" icon={MessageSquare} onClick={() => handleNavigation("/contact")}>Contact</MobileNavLink>
                <MobileNavLink to="/support" icon={MessageSquare} onClick={() => handleNavigation("/support")}>Support</MobileNavLink>
                
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

const NavLink = ({ children, to, icon: Icon, onClick }: { children: React.ReactNode; to: string; icon: React.ElementType; onClick?: () => void }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <button 
      onClick={onClick}
      className="relative group flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
    >
      <Icon className="w-4 h-4 mr-1 group-hover:rotate-3 transition-transform duration-300" />
      <span className="relative">
        {children}
        {!isActive && (
          <motion.span 
            className="absolute inset-x-0 -bottom-1 h-px bg-white/40 origin-left"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </span>
      {isActive && (
        <motion.div 
          layoutId="navbar-indicator"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </button>
  );
};

const MobileNavLink = ({ children, to, icon: Icon, onClick }: { children: React.ReactNode; to: string; icon: React.ElementType; onClick?: () => void }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <button 
        onClick={onClick}
        className={`flex items-center space-x-3 text-base p-2 rounded-xl transition-all w-full ${
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
      </button>
    </motion.div>
  );
};

export default Header;
