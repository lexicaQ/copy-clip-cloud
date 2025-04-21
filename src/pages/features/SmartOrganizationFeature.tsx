
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Sparkles,
  LayoutGrid,
  FileCheck,
  Brain,
  Tag,
  Zap,
  Check,
  ArrowRight
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import { Button } from "@/components/ui/button";

// Simple black & white benefit cards
const BenefitCard = ({ title, description }: { title: string; description: string }) => (
  <motion.div
    className="p-6 rounded-xl bg-white border border-black/10 shadow-md flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <Check className="w-8 h-8 mb-4 text-black" />
    <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </motion.div>
);

const FeatureItem = ({
  icon: Icon,
  title,
  description
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <motion.div
    className="p-7 rounded-xl bg-white border border-black/10 shadow flex items-center gap-5"
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35 }}
  >
    <div className="p-3 rounded-lg bg-black flex items-center justify-center">
      <Icon className="w-7 h-7 text-white" />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

// DATA for six external icons
const nodes = [
  { icon: FileCheck, label: "Docs" },
  { icon: Check, label: "Tasks" },
  { icon: Tag, label: "Tags" },
  { icon: LayoutGrid, label: "Groups" },
  { icon: Zap, label: "Actions" },
  { icon: Sparkles, label: "Smart" }
];

const SmartOrganizationFeature = () => {
  // Angles for circle layout (6 evenly spaced)
  const RADIUS = 155;
  const CENTER = 210;
  const iconsPos = Array.from({ length: 6 }).map((_, i) => {
    const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
    return {
      x: CENTER + RADIUS * Math.cos(angle),
      y: CENTER + RADIUS * Math.sin(angle)
    };
  });

  return (
    <div className="min-h-screen bg-white text-black">
      <SharedBackground />
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="mb-12">
          <Button
            variant="ghost"
            asChild
            className="hover:bg-black/5 transition-colors text-black"
          >
            <Link to="/features" className="inline-flex items-center gap-2 text-gray-600 hover:text-black">
              <ArrowLeft className="w-4 h-4" />
              Back to Features
            </Link>
          </Button>
        </div>

        {/* Modern Section Title, B&W Minimal */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 rounded-3xl bg-white border border-black/10 flex items-center justify-center mx-auto mb-8 shadow">
            <Sparkles className="w-12 h-12 text-black" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-b from-black to-gray-700 bg-clip-text text-transparent">
            Smart Organization
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Let AI organize your clipboard into perfectly categorized groups, making your workflow smarter and more effortless.
          </p>
        </motion.div>

        {/* Three Modernized B&W Benefit Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <BenefitCard
            title="Automatic Categorization"
            description="Content is instantly sorted into relevant categories based on type and context."
          />
          <BenefitCard
            title="Smart Suggestions"
            description="Intelligent recommendations keep your workflow moving efficiently."
          />
          <BenefitCard
            title="Contextual Awareness"
            description="Our AI understands connections between your clipboard items."
          />
        </motion.div>

        {/* Redesigned Modern Black/White Illustration */}
        <div className="relative w-[420px] h-[420px] mx-auto mb-16 glass-panel bg-white border border-black/10 shadow-lg flex items-center justify-center">
          {/* Connecting lines */}
          <svg
            width="420"
            height="420"
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 1 }}
          >
            {iconsPos.map((pos, idx) => (
              <line
                key={idx}
                x1={CENTER}
                y1={CENTER}
                x2={pos.x}
                y2={pos.y}
                stroke="#000"
                strokeWidth="2"
                opacity="0.15"
              />
            ))}
          </svg>
          {/* Outer Icons as Dots */}
          {iconsPos.map((pos, idx) => {
            const Icon = nodes[idx].icon;
            return (
              <div
                key={idx}
                className="absolute flex flex-col items-center"
                style={{
                  left: pos.x - 28,
                  top: pos.y - 28,
                  zIndex: 2
                }}
              >
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-md border-4 border-white">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="mt-2 text-xs text-black font-medium">{nodes[idx].label}</span>
              </div>
            );
          })}
          {/* Center Brain Icon */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full border-8 border-white w-32 h-32 flex items-center justify-center shadow-xl"
            style={{ zIndex: 10 }}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Brain className="w-16 h-16 text-white" />
          </motion.div>
        </div>

        {/* Smart Features Section */}
        <motion.div className="mb-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-black via-gray-900 to-gray-600 bg-clip-text text-transparent">
            How Smart Organization Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureItem
              icon={Brain}
              title="Neural Processing"
              description="Our AI analyzes the content, format, and context of each clipboard item."
            />
            <FeatureItem
              icon={LayoutGrid}
              title="Intelligent Grouping"
              description="Similar items are grouped together for faster retrieval."
            />
            <FeatureItem
              icon={Tag}
              title="Auto-Tagging"
              description="AI generates relevant tags for every clipboard entry."
            />
            <FeatureItem
              icon={Zap}
              title="Adaptive Learning"
              description="System improves as it learns your workflow patterns."
            />
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div className="mb-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            Smart Organization in Action
          </h2>
          <div className="space-y-8">
            <BenefitCard
              title="Research & Writing"
              description="Organize research materials and references into themed groups automatically."
            />
            <BenefitCard
              title="Development & Coding"
              description="AI sorts code snippets by language, project, or functionality."
            />
            <BenefitCard
              title="Design & Creative Work"
              description="Design assets and inspiration are grouped for you, no manual effort required."
            />
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-5 bg-gradient-to-r from-black via-gray-900 to-gray-600 bg-clip-text text-transparent">
            Experience Smart Organization
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Let CopyClipCloud handle your organization so you can focus on what truly matters.
          </p>
          <Button
            size="lg"
            className="bg-black hover:bg-gray-800 text-white border border-black/10 shadow"
          >
            Try It Now <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default SmartOrganizationFeature;

