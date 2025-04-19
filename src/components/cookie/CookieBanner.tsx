
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Info, Shield, CheckCheck } from "lucide-react";
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
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Cookie className="h-5 w-5" />
            Cookie Settings
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="privacy" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="privacy">Privacy Settings</TabsTrigger>
            <TabsTrigger value="details">Cookie Details</TabsTrigger>
            <TabsTrigger value="policy">Our Policy</TabsTrigger>
          </TabsList>

          <TabsContent value="privacy" className="space-y-4 mt-4">
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your browsing experience and provide personalized content.
              Please select your preferences below.
            </p>

            <div className="space-y-4">
              {cookieTypes.map((type) => (
                <div key={type.id} className="flex items-center justify-between p-4 rounded-lg bg-card border">
                  <div className="space-y-1">
                    <div className="font-medium">{type.title}</div>
                    <div className="text-sm text-muted-foreground">{type.description}</div>
                  </div>
                  <div className="ml-4">
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
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="details" className="space-y-4 mt-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  How We Use Cookies
                </h3>
                <p className="text-sm text-muted-foreground">
                  Cookies are small text files stored on your device that help us improve your experience.
                  We use different types of cookies for various purposes.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Cookie Duration
                </h3>
                <p className="text-sm text-muted-foreground">
                  Session cookies last until you close your browser. Persistent cookies remain on your device
                  for a set period or until manually deleted.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium flex items-center gap-2">
                  <CheckCheck className="h-4 w-4" />
                  Your Control
                </h3>
                <p className="text-sm text-muted-foreground">
                  You can modify your cookie preferences at any time through our cookie settings panel.
                  Essential cookies cannot be disabled as they are required for basic site functionality.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="policy" className="space-y-4 mt-4">
            <p className="text-sm text-muted-foreground">
              Our cookie policy explains in detail how we use cookies, what data we collect, and how we ensure your privacy.
              You can find our complete cookie policy and other related information below.
            </p>
            <div className="space-y-2">
              <Link
                to="/cookies"
                className="text-sm text-primary hover:underline block"
              >
                Cookie Policy
              </Link>
              <Link
                to="/privacy"
                className="text-sm text-primary hover:underline block"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-primary hover:underline block"
              >
                Terms of Service
              </Link>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-3 mt-6">
          <Button
            variant="outline"
            onClick={handleSavePreferences}
          >
            Save Preferences
          </Button>
          <Button
            onClick={handleAcceptAll}
          >
            Accept All
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieBanner;
