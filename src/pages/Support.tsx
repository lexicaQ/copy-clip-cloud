
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  MessageSquare, 
  Mail, 
  FileQuestion, 
  Headphones, 
  BookOpen, 
  Video,
  Clock,
  Users
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SupportOption = ({ title, description, icon: Icon, link, linkText }) => (
  <motion.div
    className="glass-panel p-6 hover:bg-white/5 transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <div className="flex items-start space-x-4">
      <div className="p-3 rounded-xl bg-white/10 flex items-center justify-center">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <a 
          href={link} 
          className="text-sm inline-flex items-center font-medium text-white hover:underline"
        >
          {linkText} <span className="ml-1">→</span>
        </a>
      </div>
    </div>
  </motion.div>
);

const Support = () => {
  const popularQuestions = [
    {
      question: "Wie synchronisiere ich CopyClipCloud über mehrere Geräte?",
      answer: "Um CopyClipCloud über mehrere Geräte zu synchronisieren, installieren Sie die App auf allen Geräten und melden Sie sich mit demselben Konto an. Aktivieren Sie die Cloud-Synchronisierung in den Einstellungen jedes Geräts. Ihre Clipboard-Daten werden automatisch über alle Geräte hinweg synchronisiert."
    },
    {
      question: "Ist CopyClipCloud mit älteren macOS-Versionen kompatibel?",
      answer: "CopyClipCloud ist optimiert für macOS 15 und höher. Auf älteren Versionen können einige Funktionen eingeschränkt sein oder nicht richtig funktionieren. Wir empfehlen ein Upgrade auf mindestens macOS 15, um alle Funktionen vollständig nutzen zu können."
    },
    {
      question: "Wie kann ich ein Backup meiner Clipboard-Daten erstellen?",
      answer: "CopyClipCloud bietet eine integrierte Backup-Funktion. Gehen Sie zu Einstellungen > Backup & Export und wählen Sie 'Backup erstellen'. Sie können wählen, ob Sie das Backup lokal speichern oder in die Cloud hochladen möchten. Backups können jederzeit über die gleiche Menüoption wiederhergestellt werden."
    },
    {
      question: "Warum werden manche Bilder nicht richtig gespeichert?",
      answer: "Bei bestimmten Bildformaten oder sehr großen Bildern kann es zu Kompatibilitätsproblemen kommen. CopyClipCloud unterstützt die gängigsten Bildformate (PNG, JPEG, GIF, WEBP) mit einer maximalen Größe von 50MB. Wenn Probleme auftreten, versuchen Sie, das Bild in ein anderes Format zu konvertieren oder seine Größe zu reduzieren."
    }
  ];
  
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
            <span className="text-gradient">Wir sind für Sie da</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Finden Sie Antworten, erhalten Sie Hilfe und teilen Sie Ihr Feedback mit uns.
            Unser Supportteam steht Ihnen zur Verfügung.
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Wie können wir helfen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SupportOption 
              title="Kontakt aufnehmen"
              description="Haben Sie ein spezifisches Problem? Kontaktieren Sie unser Support-Team direkt."
              icon={MessageSquare}
              link="/contact"
              linkText="Nachricht senden"
            />
            <SupportOption 
              title="Email Support"
              description="Senden Sie uns eine detaillierte Beschreibung Ihres Anliegens per E-Mail."
              icon={Mail}
              link="mailto:support@copyclipcloud.com"
              linkText="E-Mail senden"
            />
            <SupportOption 
              title="FAQ durchsuchen"
              description="Finden Sie schnelle Antworten auf häufig gestellte Fragen in unserer Wissensdatenbank."
              icon={FileQuestion}
              link="/features#faq"
              linkText="Zu den FAQs"
            />
            <SupportOption 
              title="Live-Chat"
              description="Chatten Sie in Echtzeit mit unserem Support-Team für sofortige Hilfe."
              icon={Headphones}
              link="#live-chat"
              linkText="Chat starten"
            />
            <SupportOption 
              title="Dokumentation"
              description="Durchsuchen Sie unsere ausführliche Dokumentation für detaillierte Anleitungen."
              icon={BookOpen}
              link="/features"
              linkText="Dokumentation ansehen"
            />
            <SupportOption 
              title="Video-Tutorials"
              description="Sehen Sie sich unsere Video-Anleitungen an, um CopyClipCloud optimal zu nutzen."
              icon={Video}
              link="/features"
              linkText="Videos ansehen"
            />
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Häufige Fragen</h2>
          <div className="glass-panel">
            <Accordion type="single" collapsible className="divide-y divide-white/10">
              {popularQuestions.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b-0 last:border-0">
                  <AccordionTrigger className="py-5 px-6 text-left hover:no-underline group">
                    <span className="text-lg font-medium group-hover:text-white transition-colors">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-0 text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, staggerChildren: 0.1 }}
        >
          <motion.div 
            className="glass-panel p-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-medium">Support-Zeiten</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between">
                <span>Montag - Freitag:</span>
                <span>9:00 - 18:00 Uhr</span>
              </li>
              <li className="flex justify-between">
                <span>Samstag:</span>
                <span>10:00 - 15:00 Uhr</span>
              </li>
              <li className="flex justify-between">
                <span>Sonntag:</span>
                <span>Geschlossen</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              Alle Zeiten sind in MEZ/MESZ angegeben.
            </p>
          </motion.div>

          <motion.div 
            className="glass-panel p-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-medium">Community</h3>
            </div>
            <p className="mb-4 text-gray-300">
              Treten Sie unserer Community bei, um Tipps zu teilen, Fragen zu stellen und 
              mit anderen Nutzern in Kontakt zu treten.
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="#forum" 
                className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                Forum
              </a>
              <a 
                href="#discord" 
                className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                Discord
              </a>
              <a 
                href="#reddit" 
                className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                Reddit
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Feedback geben</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Ihre Meinung ist uns wichtig. Teilen Sie uns mit, wie wir CopyClipCloud verbessern können.
          </p>
          <a 
            href="/contact" 
            className="px-6 py-3 bg-white text-black rounded-full inline-flex items-center hover:bg-opacity-90 transition-all"
          >
            Feedback senden
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
