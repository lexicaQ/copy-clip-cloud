
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Info, Shield, CheckCheck, FileText, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

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
      required: true
    },
    {
      id: "analytics",
      title: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website to improve the user experience."
    },
    {
      id: "marketing",
      title: "Marketing Cookies",
      description: "Enable personalized advertisements and marketing communications."
    },
    {
      id: "functional",
      title: "Functional Cookies",
      description: "Enhance website functionality and personalization."
    }
  ];

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div 
          className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="backdrop-blur-xl bg-black/80 border border-white/10 rounded-t-xl shadow-lg overflow-hidden">
              {/* Banner Header */}
              <div className="border-b border-white/10 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cookie className="h-5 w-5 text-white" />
                  <h2 className="text-lg font-medium text-white">Privacy Preferences</h2>
                </div>
                <Tabs defaultValue={activeTab} className="w-auto" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="bg-black/40 border border-white/10">
                    <TabsTrigger value="privacy" className="data-[state=active]:bg-white/10">Privacy</TabsTrigger>
                    <TabsTrigger value="details" className="data-[state=active]:bg-white/10">Details</TabsTrigger>
                    <TabsTrigger value="policy" className="data-[state=active]:bg-white/10">Policy</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Banner Content */}
              <div className="p-4">
                <TabsContent value="privacy" className="mt-0 space-y-4">
                  <div className="flex items-center space-x-2 text-white/90">
                    <Lock className="h-4 w-4" />
                    <p className="text-sm">Control how your data is used across our website.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-2">
                    {cookieTypes.map((type) => (
                      <div 
                        key={type.id} 
                        className="bg-black/40 border border-white/10 rounded-lg p-3 transition-colors hover:bg-black/50"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-medium text-white flex items-center text-sm">
                            {type.id === "essential" && <Shield className="h-4 w-4 mr-2 text-emerald-400" />}
                            {type.id === "analytics" && <Info className="h-4 w-4 mr-2 text-blue-400" />}
                            {type.id === "marketing" && <Cookie className="h-4 w-4 mr-2 text-amber-400" />}
                            {type.id === "functional" && <CheckCheck className="h-4 w-4 mr-2 text-violet-400" />}
                            {type.title}
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={cookiePreferences[type.id as keyof typeof cookiePreferences]}
                              onChange={(e) => {
                                if (!type.required) {
                                  setCookiePreferences(prev => ({
                                    ...prev,
                                    [type.id]: e.target.checked
                                  }));
                                }
                              }}
                              disabled={type.required}
                              className="sr-only peer"
                            />
                            <div className={`w-9 h-5 rounded-full peer ${type.required ? 'bg-emerald-600/80' : 'bg-gray-700'} peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600`}></div>
                          </label>
                        </div>
                        <div className="text-xs text-white/60">{type.description}</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="details" className="mt-0 space-y-4">
                  <div className="text-sm text-white/80 mb-3">
                    We use different types of cookies to optimize your experience on our website.
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-black/40 border border-white/10 p-3 rounded-lg">
                      <p className="text-sm font-medium text-white mb-1">Session Cookies</p>
                      <p className="text-xs text-white/60">
                        Temporary cookies that expire when you close your browser. They enable websites to recognize you as you navigate between pages.
                      </p>
                    </div>
                    <div className="bg-black/40 border border-white/10 p-3 rounded-lg">
                      <p className="text-sm font-medium text-white mb-1">Persistent Cookies</p>
                      <p className="text-xs text-white/60">
                        These remain on your device until they expire or you delete them. They enable websites to remember your preferences for your next visit.
                      </p>
                    </div>
                    <div className="bg-black/40 border border-white/10 p-3 rounded-lg">
                      <p className="text-sm font-medium text-white mb-1">First-Party Cookies</p>
                      <p className="text-xs text-white/60">
                        Set directly by our website to enable core functionality and remember your preferences.
                      </p>
                    </div>
                    <div className="bg-black/40 border border-white/10 p-3 rounded-lg">
                      <p className="text-sm font-medium text-white mb-1">Third-Party Cookies</p>
                      <p className="text-xs text-white/60">
                        Set by other domains (like analytics or advertising partners) to enable features such as traffic analysis and personalized advertising.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="policy" className="mt-0 space-y-4">
                  <div className="text-sm text-white/80 mb-3">
                    Read our detailed policies to learn more about how we handle your data:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Link to="/cookies" className="bg-black/40 border border-white/10 p-3 rounded-lg hover:bg-black/60 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <Cookie className="h-4 w-4" />
                        <span className="font-medium text-white text-sm">Cookie Policy</span>
                      </div>
                      <p className="text-xs text-white/60">
                        Comprehensive details about how we use cookies on our website.
                      </p>
                    </Link>
                    <Link to="/privacy" className="bg-black/40 border border-white/10 p-3 rounded-lg hover:bg-black/60 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <Shield className="h-4 w-4" />
                        <span className="font-medium text-white text-sm">Privacy Policy</span>
                      </div>
                      <p className="text-xs text-white/60">
                        How we collect, use, and protect your personal information.
                      </p>
                    </Link>
                    <Link to="/terms" className="bg-black/40 border border-white/10 p-3 rounded-lg hover:bg-black/60 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <FileText className="h-4 w-4" />
                        <span className="font-medium text-white text-sm">Terms of Service</span>
                      </div>
                      <p className="text-xs text-white/60">
                        The terms that govern your use of our website and services.
                      </p>
                    </Link>
                    <Link to="/acceptable-use" className="bg-black/40 border border-white/10 p-3 rounded-lg hover:bg-black/60 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCheck className="h-4 w-4" />
                        <span className="font-medium text-white text-sm">Acceptable Use Policy</span>
                      </div>
                      <p className="text-xs text-white/60">
                        Guidelines for appropriate use of our services.
                      </p>
                    </Link>
                  </div>
                </TabsContent>
              </div>

              {/* Banner Footer */}
              <div className="border-t border-white/10 p-4 flex flex-col sm:flex-row justify-end gap-3 bg-black/40">
                {activeTab === "privacy" && (
                  <>
                    <Button
                      variant="outline"
                      onClick={handleSavePreferences}
                      className="border-white/20 hover:bg-white/10 hover:text-white order-1"
                    >
                      Save Preferences
                    </Button>
                    <Button
                      onClick={handleAcceptAll}
                      className="bg-blue-600 hover:bg-blue-700 text-white order-2"
                    >
                      Accept All
                    </Button>
                  </>
                )}
                
                {activeTab !== "privacy" && (
                  <Button
                    variant="outline"
                    onClick={() => setActiveTab("privacy")}
                    className="border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    Back to Settings
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
