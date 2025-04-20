
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Cookie, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();
  
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
    security: false
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const cookieTypes = [
    {
      id: "essential",
      title: "Essential Cookies",
      description: "Required for basic site functionality",
      required: true,
      icon: Shield
    },
    {
      id: "security",
      title: "Security Cookies",
      description: "Enhance site security and prevent fraud",
      icon: Lock
    },
    {
      id: "functional",
      title: "Functional Cookies",
      description: "Remember your preferences and settings",
      icon: Cookie
    },
    {
      id: "analytics",
      title: "Analytics Cookies",
      description: "Help us understand how you use our site",
      icon: Shield
    }
  ];

  const handleAcceptAll = () => {
    const allPreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
      security: true
    };
    
    setCookiePreferences(allPreferences);
    savePreferences(allPreferences, "all");
  };

  const handleSavePreferences = () => {
    savePreferences(cookiePreferences, "custom");
  };

  const savePreferences = (preferences: typeof cookiePreferences, type: "all" | "custom") => {
    localStorage.setItem("cookie-consent", type);
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences));
    localStorage.setItem("cookie-consent-timestamp", new Date().toString());
    setShowBanner(false);
    setShowDialog(false);
    toast.success("Cookie preferences saved successfully");
  };

  const handlePrivacyClick = () => {
    setShowDialog(false);
    setShowBanner(false);
    navigate("/privacy");
  };

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xl mx-auto"
          >
            <div className="glass-panel border border-white/10 bg-black/40 backdrop-blur-xl rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h2 className="text-base font-medium mb-2">Cookie Settings</h2>
                  <p className="text-sm text-gray-300 mb-3">
                    We use cookies to enhance your experience. View our{" "}
                    <button onClick={handlePrivacyClick} className="text-white underline hover:text-white/80">
                      Privacy Policy
                    </button>{" "}
                    for details.
                  </p>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setShowDialog(true)}
                      className="bg-white/5 border-white/10 hover:bg-white/10 text-sm px-3 py-1.5 h-auto"
                    >
                      Customize
                    </Button>
                    <Button
                      onClick={handleAcceptAll}
                      className="bg-white text-black hover:bg-white/90 text-sm px-3 py-1.5 h-auto"
                    >
                      Accept All
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-xl bg-black/95 text-white border border-white/10 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-2">
              <Cookie className="w-5 h-5" />
              Cookie Settings
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 my-4">
            {cookieTypes.map((type) => {
              const Icon = type.icon;
              const isEnabled = cookiePreferences[type.id as keyof typeof cookiePreferences];
              
              return (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`p-3 rounded-lg transition-all ${
                    isEnabled ? "bg-white/10" : "bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isEnabled ? "bg-white/20" : "bg-white/10"
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{type.title}</h3>
                        <p className="text-xs text-gray-400">{type.description}</p>
                      </div>
                    </div>
                    <Switch
                      checked={isEnabled}
                      onCheckedChange={(checked) => {
                        if (!type.required) {
                          setCookiePreferences(prev => ({
                            ...prev,
                            [type.id]: checked,
                          }));
                        }
                      }}
                      disabled={type.required}
                      className={`${type.required ? "opacity-60" : ""}`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <DialogFooter className="sm:justify-between">
            <Button
              variant="outline"
              onClick={handlePrivacyClick}
              className="bg-transparent border-white/20 hover:bg-white/10"
            >
              Privacy Policy
            </Button>
            <div className="flex gap-2">
              <Button
                onClick={handleSavePreferences}
                className="bg-white text-black hover:bg-white/90"
              >
                Save Preferences
              </Button>
              <Button
                onClick={handleAcceptAll}
                className="bg-white text-black hover:bg-white/90"
              >
                Accept All
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieBanner;
