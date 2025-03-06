
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InteractiveBackground from "@/components/landing/InteractiveBackground";
import FeatureCard from "@/components/features/FeatureCard";
import FeatureShowcase from "@/components/features/FeatureShowcase";
import FeatureHero from "@/components/features/FeatureHero";
import FeatureCallToAction from "@/components/features/FeatureCallToAction";
import { featureCards, showcaseFeatures } from "@/components/features/FeaturesData";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <InteractiveBackground />
      <Header />
      
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto relative z-10">
        <FeatureHero />

        {/* Feature Showcase Section */}
        <div className="mb-32">
          {showcaseFeatures.map((feature, index) => (
            <FeatureShowcase
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              isReversed={feature.isReversed}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gradient">All Features</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCards.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 0.1}
              color={feature.color}
            />
          ))}
        </div>

        <FeatureCallToAction />
      </div>
      
      <Footer />
    </div>
  );
};

export default Features;
