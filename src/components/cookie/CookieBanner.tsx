
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Cookie, 
  Settings, 
  Info, 
  X,
  Check, 
  Link,
  ExternalLink 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [activeTab, setActiveTab] = useState("preferences");
  const navigate = useNavigate();
  
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
    personalization: false,
    security: false,
    social: false
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
      icon: Shield
    },
    {
      id: "functional",
      title: "Functional Cookies",
      description: "Remember your preferences and settings",
      icon: Settings
    },
    {
      id: "analytics",
      title: "Analytics Cookies",
      description: "Help us understand how you use our site",
      icon: Info
    },
    {
      id: "personalization",
      title: "Personalization",
      description: "Customize content based on your interests",
      icon: Cookie
    },
    {
      id: "marketing",
      title: "Marketing",
      description: "Help us deliver relevant advertisements",
      icon: Cookie
    },
    {
      id: "social",
      title: "Social Media",
      description: "Enable social sharing and interactions",
      icon: Link
    }
  ];

  const handleAcceptAll = () => {
    // Create a correctly typed preferences object from the cookieTypes
    const allPreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
      personalization: true,
      security: true,
      social: true
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
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl mx-auto"
          >
            <div className="glass-panel border border-white/10 bg-black/40 backdrop-blur-xl rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-medium mb-2">Cookie Settings</h2>
                  <p className="text-sm text-gray-300 mb-4">
                    We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                    View our <button onClick={handlePrivacyClick} className="text-white underline hover:text-white/80">Privacy Policy</button> for more information.
                  </p>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setShowDialog(true)}
                      className="bg-white/5 border-white/10 hover:bg-white/10"
                    >
                      Customize
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
        <DialogContent className="sm:max-w-2xl bg-black/95 text-white border border-white/10 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3">
              <Cookie className="w-6 h-6" />
              Cookie Preferences
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Customize your cookie preferences or accept all cookies for an optimal website experience.
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="preferences" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-white/5 border border-white/10 grid grid-cols-3">
              <TabsTrigger value="preferences">Settings</TabsTrigger>
              <TabsTrigger value="info">Information</TabsTrigger>
              <TabsTrigger value="policy">Privacy</TabsTrigger>
            </TabsList>

            <TabsContent value="preferences" className="space-y-4 mt-4">
              {cookieTypes.map((type) => {
                const Icon = type.icon;
                const isEnabled = cookiePreferences[type.id as keyof typeof cookiePreferences];
                
                return (
                  <div
                    key={type.id}
                    className={`p-4 rounded-xl transition-all ${
                      isEnabled ? "bg-white/10" : "bg-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isEnabled ? "bg-white/20" : "bg-white/10"
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-medium">{type.title}</h3>
                          <p className="text-sm text-gray-400">{type.description}</p>
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
                  </div>
                );
              })}
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

          <DialogFooter className="mt-6">
            <div className="w-full flex flex-col sm:flex-row gap-3 sm:justify-between">
              <ToggleGroup 
                type="single" 
                value={activeTab}
                onValueChange={(value) => value && setActiveTab(value)}
                className="justify-start"
              >
                <ToggleGroupItem value="preferences" className="data-[state=on]:bg-white/20">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </ToggleGroupItem>
                <ToggleGroupItem value="info" className="data-[state=on]:bg-white/20">
                  <Info className="w-4 h-4 mr-2" />
                  Info
                </ToggleGroupItem>
                <ToggleGroupItem value="policy" className="data-[state=on]:bg-white/20">
                  <Shield className="w-4 h-4 mr-2" />
                  Privacy
                </ToggleGroupItem>
              </ToggleGroup>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={handleSavePreferences}
                  className="flex-1 sm:flex-none bg-transparent border-white/20 hover:bg-white/10"
                >
                  <Check className="w-4 h-4 mr-2" />
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
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieBanner;
