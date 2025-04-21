
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  CircleCheck,
  LayoutGrid,
  Tag,
  Zap,
  FileCheck,
  Check,
  Sparkles,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import { Button } from "@/components/ui/button";

const AnimatedSection = ({ children, delay = 0 }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="mb-20 max-w-7xl mx-auto px-6"
  >
    {children}
  </motion.section>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="flex flex-col items-center bg-white/5 border border-white/10 rounded-xl p-8 text-center backdrop-blur-md shadow-md hover:bg-white/10 transition-colors cursor-default"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="p-4 rounded-full bg-white/10 mb-4 inline-flex items-center justify-center">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-300 max-w-xs">{description}</p>
  </motion.div>
);

const BenefitCard = ({ title, description }) => (
  <motion.div
    className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-start gap-4 shadow backdrop-blur-md hover:bg-white/10 transition-colors"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <Check className="w-7 h-7 text-white mt-1 flex-shrink-0" />
    <div>
      <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  </motion.div>
);

const UseCaseCard = ({ title, description }) => (
  <motion.div
    className="bg-white/5 border border-white/10 rounded-xl p-6 shadow backdrop-blur-md hover:bg-white/10 transition-colors"
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const RadialIcon = ({ icon: Icon, label, angle, distance }) => {
  const radians = (angle * Math.PI) / 180;
  const x = 50 + distance * Math.cos(radians) * 100;
  const y = 50 + distance * Math.sin(radians) * 100;
  return (
    <motion.div
      className="absolute flex flex-col items-center justify-center pointer-events-none select-none"
      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
      viewport={{ once: true }}
      transition={{
        scale: { duration: 0.6, delay: angle / 60 },
        y: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: angle / 100 },
      }}
    >
      <div className="p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 mb-1">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <span className="text-xs text-white/80">{label}</span>
    </motion.div>
  );
};

const SmartOrganizationFeature = () => {
  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      <SharedBackground />
      <Header />

      <main className="flex-grow container mx-auto py-24">
        <AnimatedSection delay={0}>
          <Button
            variant="ghost"
            asChild
            className="hover:bg-white/5 transition-colors"
          >
            <Link
              to="/features"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Features
            </Link>
          </Button>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="text-center max-w-4xl mx-auto">
            <div className="mx-auto mb-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl w-28 h-28 flex items-center justify-center">
              <Sparkles className="w-14 h-14 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-b from-white to-white/70 bg-clip-text mb-6">
              AI-Powered Smart Organization
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Seamlessly organize your clipboard content with cutting-edge AI
              technology. Auto-categorize, tag, and manage your data with
              intelligent insights and dynamic visualization.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <BenefitCard
              title="Automatic Categorization"
              description="Content is instantly sorted into relevant categories based on type and context."
            />
            <BenefitCard
              title="Smart Suggestions"
              description="Receive intelligent recommendations tailored to your usage patterns."
            />
            <BenefitCard
              title="Contextual Awareness"
              description="AI understands relationships between different clipboard items to provide insight."
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How Smart Organization Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <FeatureCard
              icon={Brain}
              title="Neural Processing"
              description="Our AI analyzes content, format, and context of clipboard items with advanced neural networks."
            />
            <FeatureCard
              icon={LayoutGrid}
              title="Intelligent Grouping"
              description="Automatically groups similar content creating intuitive collections for quick access."
            />
            <FeatureCard
              icon={Tag}
              title="Auto-Tagging"
              description="Generates keywords and metadata to enhance searchability and organization."
            />
            <FeatureCard
              icon={Zap}
              title="Adaptive Learning"
              description="System learns from your preferences and usage patterns to improve continuously."
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="relative max-w-4xl mx-auto aspect-video p-10 glass-panel border border-white/10 rounded-xl overflow-visible">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              animate={{
                scale: [1, 1.15, 1],
                filter: [
                  "drop-shadow(0 0 15px rgba(255, 255, 255, 0.15))",
                  "drop-shadow(0 0 30px rgba(255, 255, 255, 0.25))",
                  "drop-shadow(0 0 15px rgba(255, 255, 255, 0.15))",
                ],
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <div className="bg-white/15 rounded-full p-5 border border-white/20 backdrop-blur-sm">
                <Brain className="w-20 h-20 text-white" />
              </div>
            </motion.div>

            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <motion.div
                key={angle}
                className="absolute top-1/2 left-1/2 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, transparent 100%)",
                  width: "40%",
                  transformOrigin: "left center",
                  transform: `rotate(${angle}deg) translateY(-50%)`,
                }}
                animate={{
                  opacity: [0.3, 0.85, 0.3],
                  width: ["30%", "40%", "30%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: angle / 360,
                }}
              />
            ))}

            {[
              {
                icon: FileCheck,
                label: "Documents",
                angle: 0,
                distance: 0.37,
              },
              {
                icon: Check,
                label: "Tasks",
                angle: 60,
                distance: 0.37,
              },
              {
                icon: Tag,
                label: "Keywords",
                angle: 120,
                distance: 0.37,
              },
              {
                icon: LayoutGrid,
                label: "Categories",
                angle: 180,
                distance: 0.37,
              },
              {
                icon: Zap,
                label: "Actions",
                angle: 240,
                distance: 0.37,
              },
              {
                icon: Sparkles,
                label: "Smart Items",
                angle: 300,
                distance: 0.37,
              },
            ].map((node, index) => (
              <RadialIcon
                key={index}
                icon={node.icon}
                label={node.label}
                angle={node.angle}
                distance={node.distance}
              />
            ))}

            {[...Array(14)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-white/20 backdrop-blur-sm"
                initial={{ x: "50%", y: "50%", opacity: 0 }}
                animate={{
                  x: `${50 + (Math.random() * 70 - 35)}%`,
                  y: `${50 + (Math.random() * 70 - 35)}%`,
                  opacity: [0, 0.8, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Real-World Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <UseCaseCard
              title="Research & Writing"
              description="Organize research notes, quotes, and references into thoughtfully grouped collections."
            />
            <UseCaseCard
              title="Development & Coding"
              description="Keep code snippets sorted by language, project, or function for rapid access."
            />
            <UseCaseCard
              title="Design & Creative Work"
              description="Group design assets, color palettes, and inspirations dynamically and intuitively."
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text mb-6">
              Experience the Future of Clipboard Management
            </h2>
            <p className="text-gray-300 mb-10">
              Let AI take the effort out of organizing your clipboard, so you
              can focus on what matters most — creativity, productivity, and
              flow.
            </p>
            <Button
              size="lg"
              className="bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 transition-colors inline-flex items-center gap-2 mx-auto"
            >
              Try It Now <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
};

export default SmartOrganizationFeature;
