
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Info, Lock, Shield, Check } from "lucide-react";
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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
      icon: Shield,
      tooltip: "These cookies are necessary for the website to function and cannot be switched off in our systems."
    },
    {
      id: "security",
      title: "Security Cookies",
      description: "Enhance site security and prevent fraud",
      icon: Lock,
      tooltip: "These cookies help detect and prevent security risks, protect user data, and ensure safe browsing."
    },
    {
      id: "functional",
      title: "Functional Cookies",
      description: "Remember your preferences and settings",
      icon: Cookie,
      tooltip: "These cookies enable the website to provide enhanced functionality and personalization based on your interactions."
    },
    {
      id: "analytics",
      title: "Analytics Cookies",
      description: "Help us understand how you use our site",
      icon: Check,
      tooltip: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site."
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
    <TooltipProvider>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[600px] max-w-[95vw]"
          >
            <div className="glass-panel border border-white/10 bg-black/40 backdrop-blur-xl rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-medium mb-3">Cookie Settings</h2>
                  <p className="text-base text-gray-300 mb-4">
                    We use cookies to enhance your experience. View our{" "}
                    <button onClick={handlePrivacyClick} className="text-white underline hover:text-white/80">
                      Privacy Policy
                    </button>{" "}
                    for details.
                  </p>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setShowDialog(true)}
                      className="bg-white/5 border-white/10 hover:bg-white/10"
                    >
                      Manage Preferences
                    </Button>
                    <Button
                      onClick={handleAcceptAll}
                      className="bg-white text-black hover:bg-white/90"
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
        <DialogContent className="sm:max-w-xl bg-black/95 text-white border border-white/10 backdrop-blur-xl shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-2">
              <Cookie className="w-5 h-5" />
              Cookie Preferences
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 my-4 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin">
            {cookieTypes.map((type, index) => {
              const Icon = type.icon;
              const isEnabled = cookiePreferences[type.id as keyof typeof cookiePreferences];
              
              return (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className={`p-4 rounded-lg border transition-all ${
                    isEnabled 
                      ? "bg-white/10 border-white/20" 
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        isEnabled ? "bg-white/20" : "bg-white/10"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{type.title}</h3>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="w-4 h-4 text-white/60 cursor-help hover:text-white/80 transition-colors" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-black/90 border border-white/20 text-white p-3 max-w-xs">
                              <p className="text-sm">{type.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
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
                className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
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
    </TooltipProvider>
  );
};

export default CookieBanner;
