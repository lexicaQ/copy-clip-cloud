
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie, Lock, FileText, Settings, Info, CheckCheck, Shield, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

type CookieType = "essential" | "analytics" | "marketing" | "functional";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always required
    analytics: false,
    marketing: false,
    functional: false
  });
  
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [showPrivacyDetails, setShowPrivacyDetails] = useState(false);
  
  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", "custom");
    localStorage.setItem("cookie-preferences", JSON.stringify(cookiePreferences));
    localStorage.setItem("cookie-consent-timestamp", new Date().toString());
    setIsVisible(false);
    toast.success("Your cookie preferences have been saved!");
  };
  
  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    localStorage.setItem("cookie-preferences", JSON.stringify({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    }));
    localStorage.setItem("cookie-consent-timestamp", new Date().toString());
    setIsVisible(false);
    toast.success("All cookies accepted!");
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookie-consent", "essential-only");
    localStorage.setItem("cookie-preferences", JSON.stringify({
      essential: true, // Always required
      analytics: false,
      marketing: false,
      functional: false
    }));
    localStorage.setItem("cookie-consent-timestamp", new Date().toString());
    setIsVisible(false);
    toast.success("Non-essential cookies rejected!");
  };

  const toggleCookieType = (type: CookieType) => {
    if (type === 'essential') return; // Essential cookies can't be disabled
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-4xl"
      >
        <div className="relative overflow-hidden glass-panel backdrop-blur-lg shadow-2xl rounded-xl border border-white/10">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10"
            animate={{ 
              x: ['-100%', '100%'],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "linear" 
            }}
          />
          
          <div className="relative p-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <motion.div 
                  className="p-2 rounded-lg bg-white/10"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Cookie className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold">Cookie Preferences</h3>
                  <p className="text-sm text-gray-400">Customize your cookie settings</p>
                </div>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!showAdvancedOptions ? (
              <div className="mb-6">
                <p className="text-sm text-gray-300 mb-4">
                  We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content. 
                  By clicking "Accept All", you consent to our use of cookies as described in our {" "}
                  <Link to="/cookies" className="text-white underline hover:text-gray-200">Cookie Policy</Link>.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <motion.button
                    onClick={handleRejectAll}
                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition-colors flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Reject All
                  </motion.button>
                  
                  <motion.button
                    onClick={handleAcceptAll}
                    className="px-4 py-2 rounded-lg bg-white text-black hover:bg-white/90 transition-colors flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Accept All
                  </motion.button>
                </div>

                <motion.button
                  onClick={() => setShowAdvancedOptions(true)}
                  className="w-full text-center text-sm text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.01 }}
                >
                  Customize settings
                </motion.button>
              </div>
            ) : (
              <div className="space-y-4 mb-6">
                {[
                  {
                    type: 'essential' as CookieType,
                    icon: Lock,
                    title: 'Essential Cookies',
                    description: 'Required for the website to function properly',
                    required: true
                  },
                  {
                    type: 'analytics' as CookieType,
                    icon: FileText,
                    title: 'Analytics Cookies',
                    description: 'Help us understand how visitors interact with our website'
                  },
                  {
                    type: 'marketing' as CookieType,
                    icon: AlertCircle,
                    title: 'Marketing Cookies',
                    description: 'Used for personalized advertisements and marketing purposes'
                  },
                  {
                    type: 'functional' as CookieType,
                    icon: Settings,
                    title: 'Functional Cookies',
                    description: 'Enable advanced features and personalization'
                  }
                ].map(({ type, icon: Icon, title, description, required }) => (
                  <motion.div
                    key={type}
                    className={`p-4 rounded-lg ${
                      cookiePreferences[type] ? 'bg-white/10' : 'bg-white/5'
                    } transition-colors ${required ? 'cursor-default' : 'cursor-pointer'}`}
                    onClick={() => !required && toggleCookieType(type)}
                    whileHover={{ scale: required ? 1 : 1.005 }}
                    whileTap={{ scale: required ? 1 : 0.995 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-white/10">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{title}</h4>
                          {required ? (
                            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Required</span>
                          ) : (
                            <div 
                              className={`w-10 h-6 rounded-full transition-colors ${
                                cookiePreferences[type] ? 'bg-white/30' : 'bg-white/10'
                              }`}
                            >
                              <motion.div 
                                className="w-4 h-4 bg-white rounded-full m-1"
                                animate={{ x: cookiePreferences[type] ? 16 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                              />
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-400 mt-1">{description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                <motion.button
                  onClick={() => setShowPrivacyDetails(!showPrivacyDetails)}
                  className="w-full p-2 text-center text-sm text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.01 }}
                >
                  {showPrivacyDetails ? "Hide details" : "Show privacy policy details"}
                </motion.button>

                {showPrivacyDetails && (
                  <motion.div 
                    className="p-4 rounded-lg bg-white/5 text-sm text-gray-400 leading-relaxed"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="font-medium text-white mb-2">How We Use Your Data</h4>
                    <p className="mb-2">
                      The cookies we use help us understand how our website is being used,
                      remember your preferences, and provide you with relevant advertising.
                      Your data may be processed by third-party service providers.
                    </p>
                    <p>
                      For more information about how we protect your privacy, please read our{" "}
                      <Link to="/privacy" className="text-white underline hover:text-gray-200">Privacy Policy</Link>{" "}
                      and{" "}
                      <Link to="/cookies" className="text-white underline hover:text-gray-200">Cookie Policy</Link>.
                    </p>
                  </motion.div>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-between border-t border-white/10 pt-4">
              <div className="text-sm text-gray-400">
                <Link to="/privacy" className="text-white underline hover:text-gray-200">Privacy Policy</Link>
                {" | "}
                <Link to="/cookies" className="text-white underline hover:text-gray-200">Cookie Policy</Link>
              </div>
              
              {showAdvancedOptions && (
                <div className="flex gap-3">
                  <motion.button
                    onClick={() => setShowAdvancedOptions(false)}
                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Back
                  </motion.button>
                  
                  <motion.button
                    onClick={handleSavePreferences}
                    className="px-4 py-2 rounded-lg bg-white text-black hover:bg-white/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Save Preferences
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
