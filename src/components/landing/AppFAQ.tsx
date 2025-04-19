
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Info, HelpCircle, ShieldCheck, Settings, Tag, Zap, Search, CheckCircle } from "lucide-react";

const faqs = [
  {
    question: "Was ist CopyClipCloud?",
    answer: "CopyClipCloud ist ein moderner Clipboard-Manager, der Ihre Zwischenablage über alle Apple-Geräte hinweg synchronisiert. Mit intelligenter Organisation und Verschlüsselung speichert die App Text, Bilder und Dateien für den schnellen Zugriff.",
    icon: Info,
    category: "allgemein"
  },
  {
    question: "Sind meine Daten sicher?",
    answer: "Absolut. Wir verwenden Ende-zu-Ende-Verschlüsselung, um Ihre Daten zu schützen. Niemand, nicht einmal unser Team, kann auf Ihre Zwischenablage-Inhalte zugreifen. Alle Daten werden lokal verschlüsselt, bevor sie synchronisiert werden.",
    icon: ShieldCheck,
    category: "sicherheit"
  },
  {
    question: "Welche Geräte werden unterstützt?",
    answer: "CopyClipCloud unterstützt aktuell alle Apple-Geräte mit macOS 15 oder neuer. Unterstützung für iOS, iPadOS und andere Plattformen ist in Entwicklung. Auch an Versionen für Windows und Linux wird aktiv gearbeitet.",
    icon: Settings,
    category: "kompatibilität"
  },
  {
    question: "Was kostet CopyClipCloud?",
    answer: "CopyClipCloud ist kostenlos mit Basisfunktionen nutzbar. Für Power-User bieten wir ein Premium-Abonnement mit erweiterten Funktionen wie unbegrenztem Verlauf und priorisiertem Support. Abos beginnen bei 4,99€/Monat mit Rabatten für Jahresabonnements.",
    icon: Tag,
    category: "preise"
  },
  {
    question: "Wie beginne ich?",
    answer: "Laden Sie einfach CopyClipCloud von unserer Website herunter, installieren Sie es auf Ihrem Mac, und schon kann es losgehen. Die App führt Sie durch die Einrichtung der Cloud-Synchronisation. Die Ersteinrichtung dauert weniger als 60 Sekunden.",
    icon: Zap,
    category: "nutzung"
  },
  {
    question: "Kann ich CopyClipCloud offline nutzen?",
    answer: "Ja, CopyClipCloud funktioniert offline für grundlegende Zwischenablage-Verwaltung. Die Cloud-Synchronisation benötigt eine Internetverbindung, aber Ihr Verlauf wird automatisch synchronisiert, sobald Sie wieder online sind.",
    icon: HelpCircle,
    category: "nutzung"
  },
  {
    question: "Wie funktioniert das Organisationssystem?",
    answer: "CopyClipCloud nutzt KI, um Ihre Zwischenablage-Elemente automatisch zu kategorisieren. Sie können auch eigene Kategorien, Tags und Favoriten für schnellen Zugriff erstellen. Die intelligente Suchfunktion hilft Ihnen, genau das zu finden, was Sie benötigen.",
    icon: Info,
    category: "funktionen"
  },
  {
    question: "Was passiert mit sensiblen Informationen?",
    answer: "CopyClipCloud erkennt automatisch, wenn Sie sensible Informationen wie Passwörter oder Kreditkartennummern kopieren. Diese werden mit einer zusätzlichen Sicherheitsebene verschlüsselt und können so eingestellt werden, dass sie nach einer bestimmten Zeit automatisch ablaufen.",
    icon: ShieldCheck,
    category: "sicherheit"
  }
];

const AppFAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("alle");
  
  const categories = [
    { id: "alle", label: "Alle" },
    { id: "allgemein", label: "Allgemein" },
    { id: "sicherheit", label: "Sicherheit" },
    { id: "funktionen", label: "Funktionen" },
    { id: "kompatibilität", label: "Kompatibilität" },
    { id: "preise", label: "Preise" },
    { id: "nutzung", label: "Nutzung" }
  ];
  
  // Filter FAQs based on search term and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = searchTerm === "" || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = activeCategory === "alle" || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div 
      className="mt-24 pt-16 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[800px] h-[500px] rounded-full bg-indigo-500/5 blur-[150px] opacity-30"></div>
      </div>
      
      {/* Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm mb-4"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <HelpCircle className="w-4 h-4 mr-2" />
          Häufig gestellte Fragen
        </motion.div>
        
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-3"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-gradient">Haben Sie Fragen?</span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Hier finden Sie Antworten auf die häufigsten Fragen zu CopyClipCloud
        </motion.p>
      </motion.div>
      
      {/* Search and filters */}
      <div className="max-w-3xl mx-auto mb-10">
        <motion.div 
          className="mb-6 relative"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="pl-10 pr-4 py-3 w-full rounded-xl glass-panel bg-white/5 border border-white/10 focus:border-white/30 focus:ring-0 focus:outline-none transition-colors"
            placeholder="Suchen Sie nach Fragen oder Stichworten..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white"
              onClick={() => setSearchTerm("")}
            >
              <HelpCircle className="h-5 w-5" />
            </button>
          )}
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                activeCategory === category.id 
                  ? 'bg-white text-black font-medium' 
                  : 'bg-white/5 hover:bg-white/10 text-gray-300'
              }`}
              onClick={() => setActiveCategory(category.id)}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (index * 0.05) }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* FAQ accordion */}
      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        viewport={{ once: true }}
      >
        {filteredFaqs.length > 0 ? (
          <motion.div className="glass-panel rounded-xl divide-y divide-white/10 overflow-hidden">
            <Accordion type="single" collapsible className="divide-y divide-white/10">
              {filteredFaqs.map((faq, index) => {
                const Icon = faq.icon;
                return (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border-b-0 last:border-0 overflow-hidden"
                  >
                    <AccordionTrigger className="py-5 px-6 text-left hover:no-underline group">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mr-4 group-hover:bg-white/10 transition-colors">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-lg font-medium group-hover:text-white transition-colors">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 pt-0 text-gray-400">
                      <div className="pl-14">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {faq.answer}
                        </motion.div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </motion.div>
        ) : (
          <motion.div 
            className="glass-panel p-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <CheckCircle className="w-12 h-12 mx-auto mb-4 text-white/30" />
            <p className="text-lg font-medium mb-2">Keine Ergebnisse gefunden</p>
            <p className="text-gray-400">
              Versuchen Sie es mit einem anderen Suchbegriff oder Filter
            </p>
          </motion.div>
        )}
      </motion.div>
      
      {/* Contact section */}
      <motion.div
        className="text-center mt-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-xl font-medium mb-2">Keine Antwort gefunden?</h3>
        <p className="text-gray-400 mb-6">
          Unser Support-Team steht Ihnen gerne zur Verfügung
        </p>
        <a 
          href="/contact" 
          className="px-6 py-3 glass-panel hover:bg-white/10 rounded-lg inline-flex items-center transition-colors"
        >
          <HelpCircle className="w-5 h-5 mr-2" />
          Kontakt aufnehmen
        </a>
      </motion.div>
    </motion.div>
  );
};

export default AppFAQ;
