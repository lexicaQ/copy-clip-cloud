
import React from "react";
import { motion } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Was ist CopyClipCloud?",
      answer: "CopyClipCloud ist eine fortschrittliche Zwischenablage-Management-App, die deine kopierten Inhalte über alle Apple-Geräte synchronisiert, organisiert und schützt."
    },
    {
      question: "Funktioniert CopyClipCloud auf allen Apple-Geräten?",
      answer: "Ja, CopyClipCloud ist vollständig kompatibel mit Mac, iPhone und iPad, und bietet eine nahtlose Synchronisierung zwischen allen Geräten."
    },
    {
      question: "Wie sicher sind meine kopierten Daten?",
      answer: "Deine Daten sind durch militärische End-zu-End-Verschlüsselung geschützt. Niemand außer dir kann auf deine kopierten Inhalte zugreifen."
    },
    {
      question: "Kann ich sensible Daten besonders schützen?",
      answer: "Absolut! Du kannst bestimmte Clips mit zusätzlichem Passwortschutz versehen oder automatisch ablaufen lassen."
    },
    {
      question: "Gibt es eine Begrenzung für die Anzahl der gespeicherten Clips?",
      answer: "Nein, CopyClipCloud bietet unbegrenzten Verlauf für all deine kopierten Inhalte, vom einfachen Text bis hin zu Bildern und Dateien."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-20 w-full max-w-4xl mx-auto"
    >
      <div className="text-center mb-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <HelpCircle className="w-6 h-6 text-blue-400" />
          <h2 className="text-3xl font-bold text-gradient-primary">Häufig gestellte Fragen</h2>
        </motion.div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Alles, was du über CopyClipCloud wissen musst. Hast du weitere Fragen? Kontaktiere uns!
        </p>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-lg rounded-xl p-1"
      >
        <div className="glass-panel rounded-lg overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10 last:border-none">
                <AccordionTrigger className="py-5 px-6 text-left text-gradient hover:no-underline hover:text-gradient-primary transition-all group">
                  <span className="flex items-center gap-3 font-semibold text-lg">
                    {faq.question}
                  </span>
                  <div className="shrink-0 transition-transform">
                    <Plus className="h-5 w-5 text-blue-400 group-data-[state=open]:hidden" />
                    <Minus className="h-5 w-5 text-purple-400 group-data-[state=closed]:hidden" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-0 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FaqSection;
