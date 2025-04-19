import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import InteractiveBackground from "@/components/landing/InteractiveBackground";
import FeatureCard from "@/components/features/FeatureCard";
import FeatureShowcase from "@/components/features/FeatureShowcase";
import FeatureHero from "@/components/features/FeatureHero";
import FeatureCallToAction from "@/components/features/FeatureCallToAction";
import { featureCards, showcaseFeatures } from "@/components/features/FeaturesData";
import { ComingSoon } from "@/components/ui/coming-soon";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <SharedBackground />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-32 pb-16">
          <FeatureHero />
        </div>

        {/* Showcase Features Section with improved spacing */}
        <div className="space-y-32 mb-32">
          {showcaseFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <FeatureShowcase
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                isReversed={feature.isReversed}
                delay={index * 0.1}
              />
              
              {/* Decorative elements */}
              <div className="absolute inset-0 pointer-events-none">
                {index % 2 === 0 ? (
                  <div className="absolute -right-4 top-1/2 w-24 h-px bg-white/10 transform -translate-y-1/2 hidden lg:block" />
                ) : (
                  <div className="absolute -left-4 top-1/2 w-24 h-px bg-white/10 transform -translate-y-1/2 hidden lg:block" />
                )}
              </div>
              
              {/* Coming soon badge */}
              {index % 2 === 1 && (
                <ComingSoon className="absolute -top-4 right-0 lg:right-auto lg:-left-16" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Feature Cards Section */}
        <div className="py-16">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gradient">All Features</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  color={feature.color}
                  comingSoon={index % 3 === 2}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="py-16">
          <FeatureCallToAction />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Features;
