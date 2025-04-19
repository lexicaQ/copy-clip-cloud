
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Info, Shield, CheckCheck, FileText, Lock, Cookie } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false
  });
  const [activeTab, setActiveTab] = useState("privacy");

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const preferences = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setCookiePreferences(preferences);
    savePreferences(preferences, "all");
  };

  const handleSavePreferences = () => {
    savePreferences(cookiePreferences, "custom");
  };

  const savePreferences = (preferences: typeof cookiePreferences, type: "all" | "custom") => {
    localStorage.setItem("cookie-consent", type);
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences));
    localStorage.setItem("cookie-consent-timestamp", new Date().toString());
    setShowBanner(false);
    toast.success("Cookie preferences saved successfully");
  };

  const cookieTypes = [
    {
      id: "essential",
      title: "Essential Cookies",
      description: "Required for the website to function properly. These cannot be disabled.",
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
      description: "Enable personalized advertisements and marketing.",
      icon: Cookie
    },
    {
      id: "functional",
      title: "Functional Cookies",
      description: "Enhance website functionality and personalization.",
      icon: CheckCheck
    }
  ];

  if (!showBanner) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/90 backdrop-blur-xl border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start space-x-4 flex-1">
            <div className="p-2 rounded-lg bg-white/10">
              <Cookie className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium">Cookie Preferences</h3>
              <p className="text-sm text-gray-400 max-w-2xl">
                We use cookies to enhance your browsing experience and analyze our traffic. Please select your preferences below.
                <button 
                  onClick={() => setActiveTab("details")}
                  className="text-white underline decoration-white/30 hover:decoration-white ml-1"
                >
                  Learn more
                </button>
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <Button
              variant="outline"
              onClick={handleSavePreferences}
              className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white w-full sm:w-auto"
            >
              Save Preferences
            </Button>
            <Button
              onClick={handleAcceptAll}
              className="bg-white text-black hover:bg-white/90 w-full sm:w-auto"
            >
              Accept All
            </Button>
          </div>
        </div>

        <div className="mt-6">
          <Tabs defaultValue="privacy" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-white/5 border border-white/10">
              <TabsTrigger value="privacy">Privacy Settings</TabsTrigger>
              <TabsTrigger value="details">Cookie Details</TabsTrigger>
              <TabsTrigger value="policy">Our Policy</TabsTrigger>
            </TabsList>

            <TabsContent value="privacy" className="mt-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {cookieTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <div
                      key={type.id}
                      className={`p-4 rounded-lg transition-all ${
                        cookiePreferences[type.id as keyof typeof cookiePreferences]
                          ? "bg-white/10"
                          : "bg-white/5"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Icon className="h-4 w-4" />
                          <span className="font-medium">{type.title}</span>
                        </div>
                        <Switch
                          checked={cookiePreferences[type.id as keyof typeof cookiePreferences]}
                          onCheckedChange={(checked) => {
                            if (!type.required) {
                              setCookiePreferences((prev) => ({
                                ...prev,
                                [type.id]: checked,
                              }));
                            }
                          }}
                          disabled={type.required}
                        />
                      </div>
                      <p className="text-sm text-gray-400 ml-6">{type.description}</p>
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="details" className="mt-4">
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Cookie className="h-4 w-4" />
                    What are Cookies?
                  </h4>
                  <p className="text-sm text-gray-400">
                    Cookies are small text files stored on your device that help us provide and improve our services.
                    They're used for technical functionality, analytics, and personalization.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    How We Protect Your Privacy
                  </h4>
                  <p className="text-sm text-gray-400">
                    We take data protection seriously and ensure all cookies are securely processed.
                    Learn more in our {" "}
                    <Link to="/privacy" className="text-white underline decoration-white/30 hover:decoration-white">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="policy" className="mt-4">
              <div className="space-y-4">
                <p className="text-sm text-gray-400">
                  Our Cookie Policy explains in detail how we use cookies and similar technologies.
                  Read our full policies:
                </p>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <Link
                    to="/cookies"
                    className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <h4 className="font-medium flex items-center gap-2 mb-1">
                      <Cookie className="h-4 w-4" />
                      Cookie Policy
                    </h4>
                    <p className="text-sm text-gray-400">
                      Detailed information about our use of cookies
                    </p>
                  </Link>
                  
                  <Link
                    to="/privacy"
                    className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <h4 className="font-medium flex items-center gap-2 mb-1">
                      <Shield className="h-4 w-4" />
                      Privacy Policy
                    </h4>
                    <p className="text-sm text-gray-400">
                      How we protect and process your data
                    </p>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieBanner;
