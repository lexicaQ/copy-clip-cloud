
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  BarChart3, 
  Send, 
  Settings, 
  Info, 
  X, 
  Check, 
  Cookie, 
  ExternalLink
} from "lucide-react";
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
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [activeTab, setActiveTab] = useState("preferences");
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  // Check if cookie consent already exists
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Cookie types configuration
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
      icon: BarChart3
    },
    {
      id: "marketing",
      title: "Marketing Cookies",
      description: "Enable personalized advertising and marketing.",
      icon: Send
    },
    {
      id: "functional",
      title: "Functional Cookies",
      description: "Improve website functionality and personalization.",
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

  const openSettings = () => {
    setShowDialog(true);
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
            className="fixed bottom-0 left-0 right-0 z-50 p-6 backdrop-blur-lg bg-black/90 border-t border-white/10"
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start space-x-4 flex-1">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-medium text-white mb-2">Cookie Settings</h2>
                  <p className="text-base text-gray-300 max-w-2xl">
                    We use cookies to enhance your browsing experience, personalize content, and provide you with the best experience on our website.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 w-full md:w-auto">
                <Button
                  variant="outline"
                  onClick={openSettings}
                  className="bg-white/5 border-white/20 hover:bg-white/10 hover:text-white flex-1 md:flex-none px-6"
                >
                  Customize
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
              Customize your cookie preferences or accept all cookies for an optimal website experience.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <Tabs defaultValue="preferences" value={activeTab} onValueChange={setActiveTab} className="mt-6">
            <TabsList className="bg-white/5 border border-white/10 w-full grid grid-cols-3">
              <TabsTrigger value="preferences">Settings</TabsTrigger>
              <TabsTrigger value="info">Information</TabsTrigger>
              <TabsTrigger value="policy">Privacy</TabsTrigger>
            </TabsList>

            <TabsContent value="preferences" className="mt-6 space-y-6">
              <div className="space-y-4">
                {cookieTypes.map((type) => {
                  const Icon = type.icon;
                  const isEnabled = cookiePreferences[type.id as keyof typeof cookiePreferences];
                  
                  return (
                    <div
                      key={type.id}
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
                          <span>These cookies cannot be disabled</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="info" className="mt-6 space-y-6">
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="font-medium text-xl mb-3 flex items-center">
                  <Cookie className="h-5 w-5 mr-3" />
                  What are Cookies?
                </h3>
                <p className="text-base text-gray-300">
                  Cookies are small text files stored on your device that help us improve our services and deliver them effectively. They are used for technical functions, analytics, and personalization.
                </p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="font-medium text-xl mb-3 flex items-center">
                  <Shield className="h-5 w-5 mr-3" />
                  How We Protect Your Data
                </h3>
                <p className="text-base text-gray-300">
                  We take data protection seriously and ensure all cookies are processed securely. For more information, please refer to our <Link to="/privacy" className="text-white underline decoration-white/30 hover:decoration-white">Privacy Policy</Link>.
                </p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="font-medium text-xl mb-3 flex items-center">
                  <Settings className="h-5 w-5 mr-3" />
                  Cookie Duration
                </h3>
                <div className="text-base text-gray-300 space-y-2">
                  <p>Essential Cookies: Session duration up to 24 hours</p>
                  <p>Functional Cookies: Up to 1 year to store your preferences</p>
                  <p>Analytics Cookies: Expire after 2 years</p>
                  <p>Marketing Cookies: Vary by provider, up to 2 years</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="policy" className="mt-6">
              <div className="space-y-6">
                <p className="text-base text-gray-300">
                  Learn more about our privacy policies:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Link
                    to="/cookies"
                    className="block p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <h4 className="font-medium text-lg flex items-center gap-2 mb-2">
                      <Cookie className="h-5 w-5" />
                      Cookie Policy
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </h4>
                    <p className="text-sm text-gray-400">
                      How we use cookies
                    </p>
                  </Link>
                  
                  <Link
                    to="/privacy"
                    className="block p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <h4 className="font-medium text-lg flex items-center gap-2 mb-2">
                      <Shield className="h-5 w-5" />
                      Privacy Policy
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </h4>
                    <p className="text-sm text-gray-400">
                      Protection of your data
                    </p>
                  </Link>

                  <Link
                    to="/terms"
                    className="block p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <h4 className="font-medium text-lg flex items-center gap-2 mb-2">
                      <Info className="h-5 w-5" />
                      Terms of Service
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </h4>
                    <p className="text-sm text-gray-400">
                      Our terms & conditions
                    </p>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <AlertDialogFooter className="mt-8 gap-4 sm:gap-0">
            <div className="w-full flex flex-col sm:flex-row gap-4 sm:justify-between">
              <ToggleGroup 
                type="single" 
                variant="outline" 
                value={activeTab} 
                onValueChange={(value) => value && setActiveTab(value)}
                className="justify-start"
              >
                <ToggleGroupItem value="preferences" className="data-[state=on]:bg-white/20">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </ToggleGroupItem>
                <ToggleGroupItem value="info" className="data-[state=on]:bg-white/20">
                  <Info className="h-4 w-4 mr-2" />
                  Info
                </ToggleGroupItem>
                <ToggleGroupItem value="policy" className="data-[state=on]:bg-white/20">
                  <Shield className="h-4 w-4 mr-2" />
                  Privacy
                </ToggleGroupItem>
              </ToggleGroup>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={handleSavePreferences}
                  className="flex-1 sm:flex-none bg-transparent border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <Check className="h-4 w-4 mr-2" />
                  Save Preferences
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-none bg-white text-black hover:bg-white/90"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CookieBanner;
