
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie, Lock, Check, Info } from "lucide-react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookie-consent");
    
    if (!cookieConsent) {
      // Delay showing the banner for a better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    localStorage.setItem("cookie-consent-timestamp", new Date().toString());
    setIsVisible(false);
  };
  
  const handleAcceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    localStorage.setItem("cookie-consent-timestamp", new Date().toString());
    setIsVisible(false);
  };
  
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
          className="fixed bottom-4 left-4 right-4 z-50 max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden glass-panel backdrop-blur-lg shadow-2xl border border-white/10 rounded-xl">
            {/* Animated background effect */}
            <motion.div 
              className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full filter blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            
            <div className="relative p-6 sm:p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <motion.div 
                    className="p-2 rounded-lg bg-white/10 mr-3"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Cookie className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold">Cookie Preferences</h3>
                </div>
                <button 
                  onClick={() => setIsVisible(false)} 
                  className="p-1 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-3xl">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                By clicking "Accept All", you consent to our use of cookies. 
              </p>
              
              <AnimatePresence mode="wait">
                {showDetails ? (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="p-1 rounded-md bg-white/10 mr-2">
                            <Lock className="w-4 h-4" />
                          </div>
                          <h4 className="font-medium">Essential Cookies</h4>
                        </div>
                        <p className="text-sm text-gray-400">
                          These cookies are necessary for the website to function properly and cannot be disabled.
                        </p>
                      </div>
                      
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="p-1 rounded-md bg-white/10 mr-2">
                            <Check className="w-4 h-4" />
                          </div>
                          <h4 className="font-medium">Analytics Cookies</h4>
                        </div>
                        <p className="text-sm text-gray-400">
                          Help us understand how visitors interact with our website to improve user experience.
                        </p>
                      </div>
                      
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="p-1 rounded-md bg-white/10 mr-2">
                            <Info className="w-4 h-4" />
                          </div>
                          <h4 className="font-medium">Marketing Cookies</h4>
                        </div>
                        <p className="text-sm text-gray-400">
                          Used to track visitors across websites to display relevant advertisements.
                        </p>
                      </div>
                      
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="p-1 rounded-md bg-white/10 mr-2">
                            <Info className="w-4 h-4" />
                          </div>
                          <h4 className="font-medium">Functional Cookies</h4>
                        </div>
                        <p className="text-sm text-gray-400">
                          Enable personalized website features and remember your preferences.
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-400">
                      <Link to="/cookies" className="text-white underline">Cookie Policy</Link> | 
                      <Link to="/privacy" className="text-white underline ml-2">Privacy Policy</Link>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
              
              <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
                <button
                  onClick={toggleDetails}
                  className="text-sm text-white/80 hover:text-white underline"
                >
                  {showDetails ? "Hide details" : "Customize preferences"}
                </button>
                
                <div className="flex flex-wrap justify-center sm:justify-end gap-3">
                  <motion.button
                    onClick={handleAcceptEssential}
                    className="px-5 py-2.5 bg-white/10 rounded-lg hover:bg-white/15 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Accept Essential
                  </motion.button>
                  
                  <motion.button
                    onClick={handleAcceptAll}
                    className="px-5 py-2.5 bg-white text-black rounded-lg hover:bg-white/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Accept All
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
