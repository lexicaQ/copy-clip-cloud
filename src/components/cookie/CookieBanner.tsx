
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-4xl"
      >
        <div className="relative overflow-hidden glass-panel backdrop-blur-lg shadow-2xl rounded-xl border border-white/10">
          <div className="relative p-6">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Lock, title: "Security" },
                  { icon: Shield, title: "Privacy" },
                  { icon: Settings, title: "Preferences" },
                  { icon: Info, title: "Information" }
                ].map(({ icon: Icon, title }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.1 }
                    }}
                    className="flex flex-col items-center"
                  >
                    <div className="p-2 rounded-lg bg-white/10">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-gray-400 mt-1">{title}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">We Value Your Privacy</h3>
              <p className="text-sm text-gray-300">
                We use cookies to enhance your browsing experience and analyze site traffic. 
                By clicking "Accept", you consent to our use of cookies as described in our{" "}
                <Link to="/cookies" className="text-white underline hover:text-gray-200">
                  Cookie Policy
                </Link>.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <motion.button
                onClick={handleAcceptAll}
                className="px-6 py-2 rounded-lg bg-white text-black hover:bg-white/90 transition-colors"
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
