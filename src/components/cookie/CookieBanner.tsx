
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Shield, Cookie } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);
  
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
                  By clicking "Accept", you agree to our{" "}
                  <Link to="/cookies" className="text-white underline hover:text-gray-200 transition-colors">
                    Cookie Policy
                  </Link>.
                </p>

                <div className="flex items-center gap-6 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>End-to-end encrypted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>GDPR Compliant</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
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
