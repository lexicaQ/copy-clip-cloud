
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Shield, Settings, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
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
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        className="fixed bottom-0 inset-x-0 z-50"
      >
        <div className="max-w-4xl mx-auto p-4">
          <div className="bg-white text-black rounded-lg shadow-xl p-6">
            <div className="flex flex-wrap gap-4 mb-4">
              {[
                { icon: Lock, title: "Security" },
                { icon: Shield, title: "Privacy" },
                { icon: Settings, title: "Preferences" },
                { icon: Info, title: "Information" }
              ].map(({ icon: Icon, title }, index) => (
                <div key={title} className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-black/5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{title}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold">We Value Your Privacy</h3>
              <p className="text-sm text-gray-600">
                We use cookies to enhance your browsing experience and analyze site traffic. 
                By clicking "Accept", you consent to our use of cookies as described in our{" "}
                <Link to="/cookies" className="text-black underline hover:text-gray-800">
                  Cookie Policy
                </Link>.
              </p>
            </div>

            <div className="mt-4 flex justify-end">
              <motion.button
                onClick={handleAcceptAll}
                className="px-6 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Accept
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
