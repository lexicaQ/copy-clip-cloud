
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Cookie } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

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
        className="fixed bottom-4 inset-x-4 md:inset-x-auto md:bottom-4 md:right-4 md:left-auto z-50"
      >
        <div className="md:max-w-md w-full">
          <div className="bg-black/80 backdrop-blur-md text-white rounded-xl shadow-xl border border-white/10">
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <Cookie className="w-4 h-4" />
                <h3 className="text-sm font-medium">Cookie Settings</h3>
              </div>

              <p className="text-xs text-gray-300 mb-4">
                We use cookies to enhance your experience. By continuing, you agree to our{" "}
                <Link to="/cookies" className="text-white underline hover:text-gray-200">
                  Cookie Policy
                </Link>
                .
              </p>

              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs bg-transparent border-white/20 hover:bg-white/10 text-white"
                  onClick={() => setIsVisible(false)}
                >
                  Decline
                </Button>
                <Button
                  size="sm"
                  className="text-xs bg-white text-black hover:bg-white/90"
                  onClick={handleAcceptAll}
                >
                  <Check className="w-3 h-3 mr-1" />
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
