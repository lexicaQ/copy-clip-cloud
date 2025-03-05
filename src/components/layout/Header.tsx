
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Clipboard, ChevronDown, Lock, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-black/80 backdrop-blur-lg' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg glass-panel flex items-center justify-center">
              <Clipboard className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white text-lg tracking-tight">CopyClipCloud</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            
            <div className="relative group">
              <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                Resources <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute right-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                <div className="py-2 glass-panel backdrop-blur-xl border border-white/10 rounded-xl shadow-xl">
                  <DropdownLink to="/blog">Blog</DropdownLink>
                  <DropdownLink to="/tutorials">Tutorials</DropdownLink>
                  <DropdownLink to="/faq">FAQ</DropdownLink>
                  <DropdownLink to="/support">Support</DropdownLink>
                </div>
              </div>
            </div>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-gray-300 transition-colors">
              Sign In
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all">
              Download
            </button>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 bg-black mt-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4 pt-8">
              <div className="space-y-6">
                <MobileNavLink to="/features" icon={Award}>Features</MobileNavLink>
                <MobileNavLink to="/pricing" icon={Heart}>Pricing</MobileNavLink>
                <MobileNavLink to="/about" icon={Clipboard}>About</MobileNavLink>
                <MobileNavLink to="/contact" icon={Lock}>Contact</MobileNavLink>
                
                <div className="pt-4 border-t border-white/10">
                  <p className="text-gray-400 mb-4 text-sm">Resources</p>
                  <div className="space-y-4 pl-4">
                    <MobileNavLink to="/blog" icon={Award}>Blog</MobileNavLink>
                    <MobileNavLink to="/tutorials" icon={Award}>Tutorials</MobileNavLink>
                    <MobileNavLink to="/faq" icon={Award}>FAQ</MobileNavLink>
                    <MobileNavLink to="/support" icon={Award}>Support</MobileNavLink>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
                  <button className="w-full bg-white/10 text-white py-3 rounded-lg">
                    Sign In
                  </button>
                  <button className="w-full bg-white text-black py-3 rounded-lg">
                    Download
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

const NavLink = ({ children, to }: { children: React.ReactNode; to: string }) => (
  <Link to={to} className="text-gray-300 hover:text-white transition-colors">
    {children}
  </Link>
);

const DropdownLink = ({ children, to }: { children: React.ReactNode; to: string }) => (
  <Link to={to} className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
    {children}
  </Link>
);

const MobileNavLink = ({ children, to, icon: Icon }: { children: React.ReactNode; to: string; icon: React.ElementType }) => (
  <Link to={to} className="flex items-center space-x-3 text-lg">
    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
      <Icon className="w-5 h-5" />
    </div>
    <span>{children}</span>
  </Link>
);

export default Header;
