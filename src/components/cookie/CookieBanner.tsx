
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Info, 
  Settings, 
  Check, 
  Cookie, 
  X,
  Link as LinkIcon,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [activeTab, setActiveTab] = useState("preferences");
  const [openCategory, setOpenCategory] = useState<string | null>(null);
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
    // Check if we have consent stored
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a slight delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences if they exist
      const savedPreferences = localStorage.getItem("cookie-preferences");
      if (savedPreferences) {
        try {
          setCookiePreferences(JSON.parse(savedPreferences));
        } catch (e) {
          console.error("Could not parse saved cookie preferences");
        }
      }
    }
  }, []);

  const cookieTypes = [
    {
      id: "essential",
      title: "Essenzielle Cookies",
      description: "Diese Cookies sind für die grundlegende Funktionalität der Website notwendig und können nicht deaktiviert werden.",
      required: true,
      icon: Shield,
      details: "Ermöglichen grundlegende Funktionen wie Seitennavigation und Zugriff auf sichere Bereiche der Website. Die Website kann ohne diese Cookies nicht richtig funktionieren."
    },
    {
      id: "functional",
      title: "Funktionale Cookies",
      description: "Ermöglichen erweiterte Funktionen und Personalisierung.",
      icon: Settings,
      details: "Diese Cookies ermöglichen verbesserte Funktionalität und Personalisierung, wie Live-Chats, Videos und die Speicherung Ihrer Anmeldedetails oder Spracheinstellungen."
    },
    {
      id: "analytics",
      title: "Analytische Cookies",
      description: "Helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.",
      icon: Info,
      details: "Diese Cookies sammeln anonymisierte Informationen, die uns helfen zu verstehen, wie unsere Website genutzt wird und wie wir sie verbessern können."
    },
    {
      id: "marketing",
      title: "Marketing Cookies",
      description: "Ermöglichen personalisierte Werbung und Marketing.",
      icon: Settings,
      details: "Diese Cookies werden verwendet, um Besucher auf Websites zu verfolgen. Dadurch können wir relevante und ansprechende Anzeigen anbieten und die Wirksamkeit unserer Kampagnen messen."
    },
    {
      id: "personalization",
      title: "Personalisierungs-Cookies",
      description: "Passen Ihre Erfahrung an Ihre Interessen an.",
      icon: Settings,
      details: "Diese Cookies helfen dabei, Inhalte basierend auf Ihren Interessen anzupassen und Ihnen eine personalisiertere Erfahrung zu bieten."
    },
    {
      id: "security",
      title: "Sicherheits-Cookies",
      description: "Schützen Sie und unsere Website vor Sicherheitsbedrohungen.",
      icon: Shield,
      details: "Diese Cookies helfen dabei, betrügerische Aktivitäten zu erkennen und zu verhindern sowie die Sicherheit der Website und Ihrer Daten zu gewährleisten."
    },
    {
      id: "social",
      title: "Social Media Cookies",
      description: "Verbinden die Website mit Ihren sozialen Netzwerken.",
      icon: Settings,
      details: "Diese Cookies ermöglichen die Integration mit sozialen Medienplattformen, damit Sie Inhalte direkt teilen können oder sich über Ihre Social-Media-Konten anmelden können."
    }
  ];

  const toggleCategoryOpen = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  const handleAcceptAll = () => {
    // Create a new object with all cookie types set to true
    const allAccepted = Object.fromEntries(
      Object.keys(cookiePreferences).map(key => [key, true])
    );
    setCookiePreferences(allAccepted as typeof cookiePreferences);
    savePreferences(allAccepted as typeof cookiePreferences, "all");
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

  const handlePrivacyClick = () => {
    setShowDialog(false);  // Close the cookie dialog
    setShowBanner(false);  // Hide the banner
    navigate("/privacy");  // Navigate to the privacy page
  };

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-4 left-0 right-0 z-50 mx-auto max-w-5xl px-4"
          >
            <div className="backdrop-blur-xl bg-black/75 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-white mb-1.5">Cookie-Einstellungen</h2>
                    <p className="text-sm text-gray-300 max-w-2xl">
                      Wir verwenden Cookies, um Ihr Browsing-Erlebnis zu verbessern und Ihnen den bestmöglichen Service zu bieten. 
                      Einige sind essenziell für die Funktion der Website, während andere uns helfen, Ihre Erfahrung zu personalisieren.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 w-full md:w-auto">
                  <Button
                    variant="outline"
                    onClick={() => setShowDialog(true)}
                    className="bg-white/5 border-white/20 hover:bg-white/10 hover:text-white text-white/90 text-sm flex-1 md:flex-none px-5"
                  >
                    Einstellungen
                  </Button>
                  <Button
                    onClick={handleAcceptAll}
                    className="bg-white text-black hover:bg-white/90 text-sm flex-1 md:flex-none px-5"
                  >
                    Alle akzeptieren
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent className="md:max-w-2xl bg-black/90 text-white border border-white/10 backdrop-blur-xl p-0 overflow-hidden">
          <div className="flex flex-col h-full max-h-[85vh]">
            <AlertDialogHeader className="p-6 border-b border-white/10">
              <AlertDialogTitle className="text-2xl flex items-center gap-3">
                <Cookie className="w-6 h-6" />
                Cookie-Einstellungen
              </AlertDialogTitle>
              <AlertDialogDescription className="text-gray-300 text-base">
                Verwalten Sie Ihre Cookie-Einstellungen unten. Essenzielle Cookies sind für die grundlegende Funktionalität der Website erforderlich.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="flex-1 overflow-hidden flex flex-col"
            >
              <div className="border-b border-white/10">
                <TabsList className="w-full bg-transparent h-auto p-0">
                  <div className="flex w-full overflow-x-auto scrollbar-none">
                    <TabsTrigger 
                      value="preferences" 
                      className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-white py-3 px-4 text-white/70 data-[state=active]:text-white data-[state=active]:bg-white/5"
                    >
                      Einstellungen
                    </TabsTrigger>
                    <TabsTrigger 
                      value="info" 
                      className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-white py-3 px-4 text-white/70 data-[state=active]:text-white data-[state=active]:bg-white/5"
                    >
                      Informationen
                    </TabsTrigger>
                  </div>
                </TabsList>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                <TabsContent value="preferences" className="mt-0 space-y-5 h-full">
                  <div className="space-y-4">
                    {cookieTypes.map((type) => {
                      const Icon = type.icon;
                      const isEnabled = cookiePreferences[type.id as keyof typeof cookiePreferences];
                      const isOpen = openCategory === type.id;
                      
                      return (
                        <div
                          key={type.id}
                          className={`rounded-xl transition-all border ${
                            isEnabled
                              ? "border-white/15 bg-white/10"
                              : "border-white/5 bg-white/5"
                          }`}
                        >
                          <div className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                                  isEnabled ? "bg-white/20" : "bg-white/10"
                                }`}>
                                  <Icon className="h-4 w-4" />
                                </div>
                                <div>
                                  <h3 className="font-medium">{type.title}</h3>
                                  <p className="text-sm text-gray-400 mt-0.5">{type.description}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Collapsible open={isOpen} onOpenChange={() => toggleCategoryOpen(type.id)}>
                                  <CollapsibleTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 text-white/70"
                                    >
                                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                    </Button>
                                  </CollapsibleTrigger>
                                </Collapsible>
                                
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
                            </div>
                            
                            <Collapsible open={isOpen}>
                              <CollapsibleContent className="mt-3 pt-3 border-t border-white/10">
                                <div className="text-sm text-gray-300 space-y-2">
                                  <p>{type.details}</p>
                                  {type.required && (
                                    <div className="text-sm text-white/60 flex items-center mt-2">
                                      <Info className="h-3.5 w-3.5 mr-2" />
                                      <span>Erforderlich für die grundlegende Funktionalität</span>
                                    </div>
                                  )}
                                </div>
                              </CollapsibleContent>
                            </Collapsible>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </TabsContent>

                <TabsContent value="info" className="mt-0 h-full">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Was sind Cookies?</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Cookies sind kleine Textdateien, die auf Ihrem Computer oder Mobilgerät gespeichert werden, wenn Sie eine Website besuchen. Sie werden weithin verwendet, um Websites effizienter funktionieren zu lassen und den Websitebesitzern Informationen zu liefern.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Wie verwenden wir Cookies?</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Wir verwenden verschiedene Arten von Cookies, um Ihre Erfahrung auf unserer Website zu verbessern, die Leistung und Funktionalität unserer Dienste zu messen und zu verbessern, und um relevante Werbung anzuzeigen.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Ihre Kontrolle</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Sie können Ihre Cookie-Einstellungen jederzeit anpassen. Bitte beachten Sie jedoch, dass das Blockieren einiger Arten von Cookies die Funktionalität unserer Website beeinträchtigen und Ihre Nutzererfahrung einschränken kann.
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                      <h3 className="text-lg font-medium mb-3 flex items-center">
                        <Info className="w-5 h-5 mr-2 text-white/70" />
                        Weitere Informationen
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Für detaillierte Informationen darüber, wie wir Cookies und Ihre Daten verwenden, besuchen Sie bitte unsere{' '}
                        <button
                          onClick={handlePrivacyClick}
                          className="text-white underline decoration-white/30 hover:decoration-white inline-flex items-center gap-1"
                        >
                          Datenschutzerklärung
                          <LinkIcon className="w-3.5 h-3.5" />
                        </button>.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>

            <AlertDialogFooter className="p-6 border-t border-white/10">
              <div className="w-full flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  onClick={handleSavePreferences}
                  className="flex-1 bg-transparent border-white/20 hover:bg-white/10 hover:text-white text-white"
                >
                  <Check className="h-4 w-4 mr-2" />
                  Auswahl speichern
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-white text-black hover:bg-white/90"
                >
                  Alle akzeptieren
                </Button>
              </div>
            </AlertDialogFooter>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CookieBanner;
