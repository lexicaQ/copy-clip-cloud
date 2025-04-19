
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Info, Shield, CheckCheck, FileText, Lock, Cookie, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
    <Dialog open={showBanner} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-[650px] p-0 overflow-hidden border border-white/20 bg-black/90 backdrop-blur-xl">
        <div className="bg-gradient-to-b from-white/10 to-transparent p-6 pb-4">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Cookie className="h-5 w-5" />
              Privacy Preferences Center
            </DialogTitle>
          </DialogHeader>
        </div>

        <Tabs defaultValue="privacy" className="w-full" value={activeTab} onValueChange={setActiveTab}>
          <div className="px-6">
            <TabsList className="grid w-full grid-cols-3 rounded-lg bg-white/5 p-1">
              <TabsTrigger value="privacy" className="rounded-md">Privacy Settings</TabsTrigger>
              <TabsTrigger value="details" className="rounded-md">Cookie Details</TabsTrigger>
              <TabsTrigger value="policy" className="rounded-md">Our Policy</TabsTrigger>
            </TabsList>
          </div>

          <div className="px-6 py-4 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            <TabsContent value="privacy" className="space-y-4 mt-2">
              <div className="flex items-center space-x-2 text-white/90">
                <Lock className="h-4 w-4" />
                <p className="text-sm">We value your privacy and offer you control over how your data is used.</p>
              </div>
              <p className="text-sm text-white/70">
                We use cookies to enhance your browsing experience, provide personalized content, and analyze our website traffic. 
                Please select your cookie preferences below.
              </p>

              <div className="space-y-3 mt-4">
                {cookieTypes.map((type) => (
                  <div 
                    key={type.id} 
                    className="flex items-center justify-between p-4 rounded-lg transition-colors"
                    style={{
                      background: cookiePreferences[type.id as keyof typeof cookiePreferences] 
                        ? 'linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))' 
                        : 'rgba(255,255,255,0.05)'
                    }}
                  >
                    <div className="space-y-1">
                      <div className="font-medium text-white flex items-center">
                        {type.id === "essential" && <Shield className="h-4 w-4 mr-2 text-emerald-400" />}
                        {type.id === "analytics" && <Info className="h-4 w-4 mr-2 text-blue-400" />}
                        {type.id === "marketing" && <Cookie className="h-4 w-4 mr-2 text-amber-400" />}
                        {type.id === "functional" && <CheckCheck className="h-4 w-4 mr-2 text-violet-400" />}
                        {type.title}
                      </div>
                      <div className="text-sm text-white/60">{type.description}</div>
                    </div>
                    <div className="ml-4">
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
                        <div className={`w-11 h-6 rounded-full peer ${type.required ? 'bg-emerald-600/80' : 'bg-gray-700'} peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600`}></div>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="details" className="space-y-4 mt-2">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2 text-white">
                    <Cookie className="h-4 w-4" />
                    Types of Cookies We Use
                  </h3>
                  <div className="space-y-3 mt-2">
                    <div className="bg-white/5 p-3 rounded-lg">
                      <p className="text-sm font-medium text-white mb-1">Session Cookies</p>
                      <p className="text-xs text-white/60">
                        These temporary cookies expire when you close your browser. They enable websites to recognize you as you navigate between pages.
                      </p>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg">
                      <p className="text-sm font-medium text-white mb-1">Persistent Cookies</p>
                      <p className="text-xs text-white/60">
                        These remain on your device until they expire or you delete them. They enable websites to remember your preferences for your next visit.
                      </p>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg">
                      <p className="text-sm font-medium text-white mb-1">First-Party Cookies</p>
                      <p className="text-xs text-white/60">
                        Set directly by our website to enable core functionality and remember your preferences.
                      </p>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg">
                      <p className="text-sm font-medium text-white mb-1">Third-Party Cookies</p>
                      <p className="text-xs text-white/60">
                        Set by other domains (like analytics or advertising partners) to enable features such as traffic analysis and personalized advertising.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2 text-white">
                    <Info className="h-4 w-4" />
                    How to Manage Cookies
                  </h3>
                  <p className="text-sm text-white/60">
                    In addition to the controls provided here, you can modify cookie settings in your browser. Most browsers allow you to block or delete cookies. Visit your browser's help section to learn more.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2 text-white">
                    <Shield className="h-4 w-4" />
                    Cookie Duration
                  </h3>
                  <p className="text-sm text-white/60">
                    Essential cookies typically last for your current session or up to 24 hours. Functional cookies may remain for up to 1 year to remember your preferences. Analytics cookies generally expire after 2 years. Marketing cookies vary based on the specific provider but may last up to 2 years.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="policy" className="space-y-4 mt-2">
              <p className="text-sm text-white/70">
                Our Cookie Policy explains in detail how we use cookies, what data we collect, and how we ensure your privacy. This policy is part of our wider commitment to transparency and data protection.
              </p>
              
              <div className="space-y-4 mt-4">
                <div className="bg-white/5 p-4 rounded-lg transition-all hover:bg-white/10">
                  <Link
                    to="/cookies"
                    className="text-sm text-white hover:underline block"
                    onClick={() => {
                      localStorage.setItem("viewed-policy", "true");
                      setShowBanner(false);
                    }}
                  >
                    <h4 className="font-medium flex items-center mb-1">
                      <Cookie className="h-4 w-4 mr-2" />
                      Cookie Policy
                    </h4>
                    <p className="text-xs text-white/60 ml-6">
                      Comprehensive details about how we use cookies on our website.
                    </p>
                  </Link>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg transition-all hover:bg-white/10">
                  <Link
                    to="/privacy"
                    className="text-sm text-white hover:underline block"
                    onClick={() => {
                      localStorage.setItem("viewed-policy", "true");
                      setShowBanner(false);
                    }}
                  >
                    <h4 className="font-medium flex items-center mb-1">
                      <Shield className="h-4 w-4 mr-2" />
                      Privacy Policy
                    </h4>
                    <p className="text-xs text-white/60 ml-6">
                      How we collect, use, and protect your personal information.
                    </p>
                  </Link>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg transition-all hover:bg-white/10">
                  <Link
                    to="/terms"
                    className="text-sm text-white hover:underline block"
                    onClick={() => {
                      localStorage.setItem("viewed-policy", "true");
                      setShowBanner(false);
                    }}
                  >
                    <h4 className="font-medium flex items-center mb-1">
                      <FileText className="h-4 w-4 mr-2" />
                      Terms of Service
                    </h4>
                    <p className="text-xs text-white/60 ml-6">
                      The terms that govern your use of our website and services.
                    </p>
                  </Link>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg transition-all hover:bg-white/10">
                  <Link
                    to="/acceptable-use"
                    className="text-sm text-white hover:underline block"
                    onClick={() => {
                      localStorage.setItem("viewed-policy", "true");
                      setShowBanner(false);
                    }}
                  >
                    <h4 className="font-medium flex items-center mb-1">
                      <CheckCheck className="h-4 w-4 mr-2" />
                      Acceptable Use Policy
                    </h4>
                    <p className="text-xs text-white/60 ml-6">
                      Guidelines for appropriate use of our services.
                    </p>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </div>

          <div className="bg-white/5 p-4 border-t border-white/10 flex flex-col sm:flex-row justify-end gap-3">
            {activeTab === "privacy" && (
              <>
                <Button
                  variant="outline"
                  onClick={handleSavePreferences}
                  className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white sm:order-1"
                >
                  Save Preferences
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  className="bg-blue-600 hover:bg-blue-700 text-white sm:order-2"
                >
                  Accept All
                </Button>
              </>
            )}
            
            {activeTab !== "privacy" && (
              <div className="flex justify-end w-full">
                <Button
                  variant="outline"
                  onClick={() => setActiveTab("privacy")}
                  className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  Back to Settings
                </Button>
              </div>
            )}
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default CookieBanner;
