
import React from "react";
import { motion } from "framer-motion";
import { Cloud, Clipboard, Shield, Zap, Layers, Clock, Eye, Lock, Sparkles } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
}

const Feature = ({ title, description, icon: Icon, delay }: FeatureProps) => (
  <motion.div 
    className="glass-panel p-6 hover:bg-white/10 transition-all duration-300 cursor-default group relative overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -5 }}
  >
    <div className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl group-hover:scale-150 transition-all duration-700" />
    
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-lg glass-panel flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
        <Icon className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" />
      </div>
      
      <h3 className="text-lg font-semibold mb-2 group-hover:text-gradient-primary transition-all duration-300">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </motion.div>
);

// Erweiterte Feature-Liste
const features = [
  {
    title: "Universelle Zwischenablage",
    description: "Kopiere auf einem Gerät, füge auf einem anderen ein. Synchronisiere nahtlos über alle deine Mac-Geräte.",
    icon: Cloud
  },
  {
    title: "Rich Media Unterstützung",
    description: "Speichere und verwalte Text, Bilder, Dateien und mehr in deinem Verlauf mit intelligenter Organisation.",
    icon: Clipboard
  },
  {
    title: "Sicher & Privat",
    description: "End-to-End-Verschlüsselung stellt sicher, dass deine Daten stets privat und geschützt bleiben.",
    icon: Shield
  },
  {
    title: "Blitzschnelle Suche",
    description: "Finde sofort was du brauchst mit unserer leistungsstarken Suchfunktion und intelligenten Filtern.",
    icon: Zap
  },
  {
    title: "Organisierte Kategorien",
    description: "Halte deine Clips mit benutzerdefinierten Kategorien und intelligenten Regeln automatisch organisiert.",
    icon: Layers
  },
  {
    title: "Verlaufsverwaltung",
    description: "Greife auf deine komplette Kopierhistorie zu und stelle einfach frühere Einträge wieder her.",
    icon: Clock
  },
  {
    title: "Vorschaumodus",
    description: "Sieh dir Inhalte an, bevor du sie einfügst, mit unserer erweiterten Vorschaufunktion für alle Medientypen.",
    icon: Eye
  },
  {
    title: "Passwortgeschützte Clips",
    description: "Schütze sensible Informationen mit zusätzlichen Sicherheitsebenen für bestimmte Einträge.",
    icon: Lock
  },
  {
    title: "KI-Vorschläge",
    description: "Nutze KI-gestützte Empfehlungen, die dir die relevantesten Clips zum richtigen Zeitpunkt anbieten.",
    icon: Sparkles
  },
];

const AppFeatures = () => {
  return (
    <div className="space-y-10 mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold mb-4">Warum CopyClipCloud?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Unsere fortschrittliche Zwischenablage-Verwaltungslösung revolutioniert die Art und Weise, wie du mit deinen Geräten arbeitest.</p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        {features.map((feature, index) => (
          <Feature 
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            delay={1 + (index * 0.1)}
          />
        ))}
      </motion.div>
      
      <motion.div
        className="mt-16 p-8 glass-panel rounded-xl relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-4">Bereit für das nächste Level?</h3>
          <p className="text-gray-400 mb-6">Lade CopyClipCloud jetzt herunter und erlebe eine völlig neue Art der Produktivität auf deinen Apple-Geräten.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="glass-panel px-5 py-3 rounded-lg flex items-center space-x-2 bg-white/5">
              <Zap className="w-5 h-5 text-blue-400" />
              <span>30x schnellere Synchronisierung</span>
            </div>
            
            <div className="glass-panel px-5 py-3 rounded-lg flex items-center space-x-2 bg-white/5">
              <Clock className="w-5 h-5 text-purple-400" />
              <span>Unbegrenzter Verlauf</span>
            </div>
            
            <div className="glass-panel px-5 py-3 rounded-lg flex items-center space-x-2 bg-white/5">
              <Lock className="w-5 h-5 text-green-400" />
              <span>Militärische Verschlüsselung</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppFeatures;
