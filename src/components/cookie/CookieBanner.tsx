
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
      title: "Erforderliche Cookies",
      description: "Diese Cookies sind für die Grundfunktionen der Website unerlässlich und können nicht deaktiviert werden.",
      required: true,
      icon: Shield
    },
    {
      id: "analytics",
      title: "Analyse Cookies",
      description: "Helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.",
      icon: BarChart3
    },
    {
      id: "marketing",
      title: "Marketing Cookies",
      description: "Ermöglichen personalisierte Werbung und Marketing.",
      icon: Send
    },
    {
      id: "functional",
      title: "Funktionale Cookies",
      description: "Verbessern die Funktionalität und Personalisierung der Website.",
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
    toast.success("Cookie-Einstellungen erfolgreich gespeichert");
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
            className="fixed bottom-0 left-0 right-0 z-50 p-4 backdrop-blur-lg bg-black/80 border-t border-white/10"
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Cookie className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-medium">Cookie-Einstellungen</h2>
                  <p className="text-sm text-gray-300 max-w-2xl">
                    Wir verwenden Cookies, um Ihre Browsing-Erfahrung zu verbessern, Inhalte zu personalisieren und Ihnen das beste Erlebnis auf unserer Website zu bieten.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 w-full md:w-auto">
                <Button
                  variant="outline"
                  onClick={openSettings}
                  className="bg-transparent border-white/20 hover:bg-white/10 hover:text-white flex-1 md:flex-none"
                >
                  Einstellungen
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  className="bg-white text-black hover:bg-white/90 flex-1 md:flex-none"
                >
                  Alle akzeptieren
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent className="md:max-w-2xl bg-black/95 text-white border border-white/10 backdrop-blur-xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl flex items-center gap-2">
              <Cookie className="w-5 h-5" />
              Cookie-Einstellungen
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300 text-base">
              Passen Sie Ihre Cookie-Präferenzen an oder akzeptieren Sie alle Cookies für ein optimales Website-Erlebnis.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <Tabs defaultValue="preferences" value={activeTab} onValueChange={setActiveTab} className="mt-4">
            <TabsList className="bg-white/5 border border-white/10 w-full grid grid-cols-3">
              <TabsTrigger value="preferences">Einstellungen</TabsTrigger>
              <TabsTrigger value="info">Informationen</TabsTrigger>
              <TabsTrigger value="policy">Datenschutz</TabsTrigger>
            </TabsList>

            <TabsContent value="preferences" className="mt-4 space-y-5">
              <div className="space-y-4">
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
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <Icon className="h-4 w-4" />
                          </div>
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
                          className={type.required ? "opacity-60" : ""}
                        />
                      </div>
                      <p className="text-sm text-gray-400 ml-11">{type.description}</p>
                      {type.required && (
                        <div className="ml-11 mt-2 text-xs text-white/60 flex items-center">
                          <Info className="h-3 w-3 mr-1" />
                          <span>Diese Cookies können nicht deaktiviert werden</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="info" className="mt-4 space-y-5">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="font-medium mb-2 flex items-center">
                  <Cookie className="h-4 w-4 mr-2" />
                  Was sind Cookies?
                </h3>
                <p className="text-sm text-gray-400">
                  Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden und uns helfen, unsere Dienste zu verbessern und bereitzustellen. Sie werden für technische Funktionen, Analysen und Personalisierung verwendet.
                </p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="font-medium mb-2 flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Wie wir Ihre Daten schützen
                </h3>
                <p className="text-sm text-gray-400">
                  Wir nehmen den Datenschutz ernst und stellen sicher, dass alle Cookies sicher verarbeitet werden. Weitere Informationen finden Sie in unserer <Link to="/privacy" className="text-white underline decoration-white/30 hover:decoration-white">Datenschutzrichtlinie</Link>.
                </p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="font-medium mb-2 flex items-center">
                  <Settings className="h-4 w-4 mr-2" />
                  Cookie-Dauer
                </h3>
                <p className="text-sm text-gray-400">
                  Erforderliche Cookies: Für die Dauer Ihrer Sitzung bis zu 24 Stunden<br />
                  Funktionale Cookies: Bis zu 1 Jahr zur Speicherung Ihrer Einstellungen<br />
                  Analyse-Cookies: Laufen nach 2 Jahren ab<br />
                  Marketing-Cookies: Variieren je nach Anbieter, können bis zu 2 Jahre bestehen
                </p>
              </div>
            </TabsContent>

            <TabsContent value="policy" className="mt-4">
              <div className="space-y-4">
                <p className="text-sm text-gray-400">
                  Erfahren Sie mehr über unsere Datenschutzrichtlinien:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Link
                    to="/cookies"
                    className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <h4 className="font-medium flex items-center gap-2 mb-1">
                      <Cookie className="h-4 w-4" />
                      Cookie-Richtlinie
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </h4>
                    <p className="text-sm text-gray-400">
                      Wie wir Cookies verwenden
                    </p>
                  </Link>
                  
                  <Link
                    to="/privacy"
                    className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <h4 className="font-medium flex items-center gap-2 mb-1">
                      <Shield className="h-4 w-4" />
                      Datenschutzrichtlinie
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </h4>
                    <p className="text-sm text-gray-400">
                      Schutz Ihrer Daten
                    </p>
                  </Link>

                  <Link
                    to="/terms"
                    className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <h4 className="font-medium flex items-center gap-2 mb-1">
                      <Info className="h-4 w-4" />
                      Nutzungsbedingungen
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </h4>
                    <p className="text-sm text-gray-400">
                      Unsere AGBs
                    </p>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <AlertDialogFooter className="mt-6 gap-3 sm:gap-0">
            <div className="w-full flex flex-col sm:flex-row gap-3 sm:justify-between">
              <ToggleGroup 
                type="single" 
                variant="outline" 
                value={activeTab} 
                onValueChange={(value) => value && setActiveTab(value)}
                className="justify-start"
              >
                <ToggleGroupItem value="preferences">
                  <Settings className="h-3.5 w-3.5 mr-1" />
                  Einstellungen
                </ToggleGroupItem>
                <ToggleGroupItem value="info">
                  <Info className="h-3.5 w-3.5 mr-1" />
                  Info
                </ToggleGroupItem>
                <ToggleGroupItem value="policy">
                  <Shield className="h-3.5 w-3.5 mr-1" />
                  Richtlinien
                </ToggleGroupItem>
              </ToggleGroup>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={handleSavePreferences}
                  className="flex-1 sm:flex-none bg-transparent border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <Check className="h-4 w-4 mr-1" />
                  Auswahl speichern
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-none bg-white text-black hover:bg-white/90"
                >
                  Alle akzeptieren
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
