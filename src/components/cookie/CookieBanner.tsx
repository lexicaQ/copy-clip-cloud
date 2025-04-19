
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Info, Settings, Check, Cookie } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { 
  AlertDialog, 
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false
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
      description: "These cookies are necessary for the basic functionality of the website and cannot be disabled.",
      required: true,
      icon: Shield
    },
    {
      id: "analytics",
      title: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website.",
      icon: Info
    },
    {
      id: "marketing",
      title: "Marketing Cookies",
      description: "Enable personalized advertising and marketing.",
      icon: Settings
    }
  ];

  const handleAcceptAll = () => {
    const preferences = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setCookiePreferences(preferences);
    savePreferences(preferences, "all");
    setShowDialog(false);
  };

  const handleSavePreferences = () => {
    savePreferences(cookiePreferences, "custom");
    setShowDialog(false);
  };

  const savePreferences = (preferences: typeof cookiePreferences, type: "all" | "custom") => {
    localStorage.setItem("cookie-consent", type);
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences));
    localStorage.setItem("cookie-consent-timestamp", new Date().toString());
    setShowBanner(false);
    toast.success("Cookie preferences saved successfully");
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
            className="fixed bottom-0 left-0 right-0 z-50 p-6 backdrop-blur-xl bg-black/90 border-t border-white/10"
          >
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start space-x-4 flex-1">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-medium text-white mb-2">Cookie Settings</h2>
                  <p className="text-base text-gray-300 max-w-2xl">
                    We use cookies to enhance your browsing experience and provide you with the best possible service.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 w-full md:w-auto">
                <Button
                  variant="outline"
                  onClick={() => setShowDialog(true)}
                  className="bg-white/5 border-white/20 hover:bg-white/10 hover:text-white flex-1 md:flex-none px-6"
                >
                  Preferences
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  className="bg-white text-black hover:bg-white/90 flex-1 md:flex-none px-6"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent className="md:max-w-2xl bg-black/95 text-white border border-white/10 backdrop-blur-xl">
          <AlertDialogHeader className="space-y-4">
            <AlertDialogTitle className="text-2xl flex items-center gap-3">
              <Cookie className="w-6 h-6" />
              Cookie Preferences
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300 text-base">
              Manage your cookie preferences below. Essential cookies are required for basic website functionality.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="mt-6 space-y-6">
            <div className="space-y-4">
              {cookieTypes.map((type) => {
                const Icon = type.icon;
                const isEnabled = cookiePreferences[type.id as keyof typeof cookiePreferences];
                
                return (
                  <motion.div
                    key={type.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-6 rounded-xl transition-all ${
                      isEnabled
                        ? "bg-white/10"
                        : "bg-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isEnabled ? "bg-white/20" : "bg-white/10"
                        }`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-lg">{type.title}</span>
                      </div>
                      <Switch
                        checked={isEnabled}
                        onCheckedChange={(checked) => {
                          if (!type.required) {
                            setCookiePreferences((prev) => ({
                              ...prev,
                              [type.id]: checked,
                            }));
                          }
                        }}
                        disabled={type.required}
                        className={`${type.required ? "opacity-60" : ""} data-[state=checked]:bg-white data-[state=unchecked]:bg-white/20`}
                      />
                    </div>
                    <p className="text-base text-gray-300 ml-14">{type.description}</p>
                    {type.required && (
                      <div className="ml-14 mt-3 text-sm text-white/60 flex items-center">
                        <Info className="h-4 w-4 mr-2" />
                        <span>Required for basic functionality</span>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="text-lg font-medium mb-3">More Information</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                For detailed information about how we use cookies and your data, please visit our{' '}
                <Link to="/privacy" className="text-white underline decoration-white/30 hover:decoration-white">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>

          <AlertDialogFooter className="mt-8">
            <div className="w-full flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                onClick={handleSavePreferences}
                className="flex-1 bg-transparent border-white/20 hover:bg-white/10 hover:text-white"
              >
                <Check className="h-4 w-4 mr-2" />
                Save Preferences
              </Button>
              <Button
                onClick={handleAcceptAll}
                className="flex-1 bg-white text-black hover:bg-white/90"
              >
                Accept All
              </Button>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CookieBanner;
