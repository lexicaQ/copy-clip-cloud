
import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
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
      <InteractiveBackground />
      <Header />
      
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto relative z-10">
        <FeatureHero />

        {/* Enhanced Metro-style Feature Showcase Section with 3D effects */}
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
              
              {/* Enhanced decorative elements for metro styling */}
              {index % 2 === 0 && (
                <motion.div 
                  className="absolute -right-4 top-1/2 w-24 h-1 bg-white/10 transform -translate-y-1/2 hidden lg:block"
                  animate={{
                    width: ["0px", "96px", "0px"],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
              {index % 2 === 1 && (
                <motion.div 
                  className="absolute -left-4 top-1/2 w-24 h-1 bg-white/10 transform -translate-y-1/2 hidden lg:block"
                  animate={{
                    width: ["0px", "96px", "0px"],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              )}
              
              {/* Enhanced coming soon badge for selected features */}
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
          <span className="text-gradient">All Features</span>
        </motion.h2>
        
        {/* Enhanced Metro-style grid layout for feature cards */}
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
                style={{ 
                  perspective: "1000px"
                }}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  color={feature.color}
                  comingSoon={feature.comingSoon}
                  delay={index * 0.05}
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
