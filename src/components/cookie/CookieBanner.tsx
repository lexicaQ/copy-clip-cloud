
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Info, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false
  });
  
  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", "custom");
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences));
    localStorage.setItem("cookie-consent-timestamp", new Date().toString());
    setIsVisible(false);
    toast.success("Cookie preferences saved!");
  };

  const handleAcceptAll = () => {
    setPreferences({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    });
    localStorage.setItem("cookie-consent", "all");
    localStorage.setItem("cookie-preferences", JSON.stringify({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    }));
    localStorage.setItem("cookie-consent-timestamp", new Date().toString());
    setIsVisible(false);
    toast.success("Cookie preferences saved!");
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        className="fixed bottom-0 inset-x-0 z-50"
      >
        <div className="max-w-3xl mx-auto p-4">
          <div className="bg-black/95 backdrop-blur-md text-white rounded-2xl shadow-xl border border-white/10">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="w-5 h-5" />
                <h3 className="text-lg font-semibold">Cookie Settings</h3>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-gray-300">
                  We use cookies to enhance your browsing experience and provide personalized content. 
                  Please select your preferences below.
                </p>

                {showDetails ? (
                  <div className="space-y-4 mt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Essential Cookies</p>
                        <p className="text-sm text-gray-400">Required for the website to function properly</p>
                      </div>
                      <input 
                        type="checkbox" 
                        checked={preferences.essential} 
                        disabled 
                        className="rounded bg-white/10 disabled:opacity-50"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Analytics Cookies</p>
                        <p className="text-sm text-gray-400">Help us understand how you use our website</p>
                      </div>
                      <input 
                        type="checkbox" 
                        checked={preferences.analytics} 
                        onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                        className="rounded bg-white/10"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Marketing Cookies</p>
                        <p className="text-sm text-gray-400">Used to deliver personalized advertisements</p>
                      </div>
                      <input 
                        type="checkbox" 
                        checked={preferences.marketing} 
                        onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                        className="rounded bg-white/10"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Functional Cookies</p>
                        <p className="text-sm text-gray-400">Enable advanced website features</p>
                      </div>
                      <input 
                        type="checkbox" 
                        checked={preferences.functional} 
                        onChange={(e) => setPreferences(prev => ({ ...prev, functional: e.target.checked }))}
                        className="rounded bg-white/10"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-6 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      <span>End-to-end encrypted</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Info className="w-4 h-4" />
                      <span>GDPR Compliant</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2 text-sm">
                  <Link to="/cookies" className="text-white underline hover:text-gray-200 transition-colors">
                    Cookie Policy
                  </Link>
                  <span className="text-gray-400">•</span>
                  <button 
                    onClick={() => setShowDetails(!showDetails)}
                    className="text-white underline hover:text-gray-200 transition-colors"
                  >
                    {showDetails ? "Hide Details" : "Show Details"}
                  </button>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-4">
                <motion.button
                  onClick={handleSavePreferences}
                  className="px-6 py-2.5 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Save Preferences
                </motion.button>
                <motion.button
                  onClick={handleAcceptAll}
                  className="px-6 py-2.5 bg-white text-black rounded-xl font-medium hover:bg-gray-100 transition-colors"
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
    </AnimatePresence>
  );
};

export default CookieBanner;
