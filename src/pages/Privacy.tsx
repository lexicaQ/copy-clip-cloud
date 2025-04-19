
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Eye, Lock, Database, FileCheck, Key } from "lucide-react";

const PrivacyFeature = ({ title, description, icon: Icon }) => (
  <motion.div
    className="glass-panel p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <div className="flex items-start space-x-4">
      <div className="p-2 rounded-xl bg-white/10 flex items-center justify-center">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  </motion.div>
);

const Privacy = () => {
  return (
    <div className="relative min-h-screen">
      <Header />

      <main className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Ihre Privatsphäre ist uns wichtig</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Wir haben CopyClipCloud von Grund auf mit strikten Datenschutzprinzipien entwickelt. Erfahren Sie, wie wir Ihre Daten schützen.
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Datenschutz-Grundsätze</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PrivacyFeature
              title="Ende-zu-Ende Verschlüsselung"
              description="Alle Ihre Daten werden vor der Übertragung direkt auf Ihrem Gerät verschlüsselt. Niemand kann darauf zugreifen, nicht einmal wir."
              icon={Lock}
            />
            <PrivacyFeature
              title="Keine Datensammlung"
              description="Wir sammeln keine persönlichen Daten, die nicht für die Funktionalität der App erforderlich sind. Keine versteckten Tracker."
              icon={Eye}
            />
            <PrivacyFeature
              title="Lokale Verarbeitung"
              description="Ihre Daten werden primär auf Ihrem Gerät verarbeitet. Cloud-Synchronisierung ist optional und immer verschlüsselt."
              icon={Database}
            />
            <PrivacyFeature
              title="Transparenz"
              description="Unser Datenschutz ist transparent und in klarer Sprache verfasst. Wir erklären genau, was mit Ihren Daten geschieht."
              icon={FileCheck}
            />
          </div>
        </motion.div>

        <motion.div
          className="glass-panel p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Datenschutzerklärung</h2>
          <div className="space-y-6 text-gray-300">
            <p>
              <strong>Effektiv ab:</strong> 1. April 2023
            </p>
            <p>
              Bei CopyClipCloud respektieren wir Ihre Privatsphäre und verstehen die Wichtigkeit des Schutzes der Daten, die Sie uns anvertrauen. Diese Datenschutzerklärung beschreibt, wie wir Ihre Daten sammeln, nutzen und offenlegen.
            </p>
            <p>
              <strong>Welche Daten wir sammeln:</strong> Wir sammeln nur die Daten, die für die Funktionsweise unserer App notwendig sind. Dazu gehören Kontoinformationen (E-Mail, Name) für die Kontoverwaltung und Ihre verschlüsselten Clip-Daten, wenn Sie die Cloud-Synchronisierung aktivieren.
            </p>
            <p>
              <strong>Wie wir Ihre Daten nutzen:</strong> Wir verwenden Ihre Daten ausschließlich für die Bereitstellung, Wartung und Verbesserung unserer Services. Ihre Clip-Daten werden nur für die Synchronisierung zwischen Ihren eigenen Geräten verwendet.
            </p>
            <p>
              <strong>Datensicherheit:</strong> Wir setzen modernste Sicherheitsmaßnahmen ein, um Ihre Daten zu schützen. Alle sensiblen Daten werden mit Ende-zu-Ende-Verschlüsselung gesichert.
            </p>
            <p>
              <strong>Ihre Rechte:</strong> Sie haben das Recht, auf Ihre Daten zuzugreifen, sie zu korrigieren oder zu löschen. Sie können Ihr Konto jederzeit schließen und alle Ihre Daten werden von unseren Servern entfernt.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-white/10 mb-4">
            <Shield className="w-6 h-6 mr-2" />
            <span>Sicherheit durch Design</span>
          </div>
          <h2 className="text-2xl font-bold mb-4">Fragen zum Datenschutz?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Wenn Sie Fragen zu unserem Umgang mit Ihren Daten haben, kontaktieren Sie uns jederzeit.
            Wir sind transparent und offen für Ihre Anliegen.
          </p>
          <a 
            href="/contact" 
            className="px-6 py-3 bg-white text-black rounded-full inline-flex items-center hover:bg-opacity-90 transition-all"
          >
            <Key className="w-4 h-4 mr-2" />
            Kontakt aufnehmen
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
