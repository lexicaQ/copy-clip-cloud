
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
import { ComingSoon } from "@/components/ui/coming-soon";

const Features = () => {
  // Set some features as "coming soon" for demonstration
  const enhancedFeatureCards = featureCards.map((feature, index) => ({
    ...feature,
    comingSoon: index % 3 === 2 // Every third feature will be marked as coming soon
  }));

  return (
    <div className="min-h-screen bg-background">
      {/* Simplified background with only white/black colors */}
      <div className="fixed inset-0 bg-black z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
      
      <Header />
      
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto relative z-10">
        <FeatureHero />

        {/* Improved Feature Showcase Section with modern styling */}
        <div className="mb-40">
          {showcaseFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative ${index !== 0 ? 'mt-40' : ''}`}
            >
              <FeatureShowcase
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                isReversed={feature.isReversed}
                delay={index * 0.1}
              />
              
              {/* Improved minimalist connecting elements */}
              {index % 2 === 0 && (
                <div className="absolute -right-4 top-1/2 w-24 h-px bg-white/10 transform -translate-y-1/2 hidden lg:block" />
              )}
              {index % 2 === 1 && (
                <div className="absolute -left-4 top-1/2 w-24 h-px bg-white/10 transform -translate-y-1/2 hidden lg:block" />
              )}
              
              {/* Coming soon badge for selected features */}
              {index % 2 === 1 && (
                <ComingSoon className="absolute top-0 right-0 lg:right-auto lg:-left-16 transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.h2 
          className="text-3xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">All Features</span>
        </motion.h2>
        
        {/* Improved grid layout with better spacing and animations */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-40">
          {enhancedFeatureCards.map((feature, index) => {
            // Create varied card sizes for metro style
            const isWide = index % 3 === 0;
            const isTall = index % 4 === 0;
            
            return (
              <motion.div
                key={index}
                className={`
                  ${isWide ? 'md:col-span-6' : 'md:col-span-4'} 
                  ${isTall ? 'row-span-2' : 'row-span-1'}
                `}
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
                  comingSoon={feature.comingSoon}
                />
              </motion.div>
            );
          })}
        </div>

        <FeatureCallToAction />
      </div>
      
      <Footer />
    </div>
  );
};

export default Features;
