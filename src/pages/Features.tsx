
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import FeatureCard from "@/components/features/FeatureCard";
import FeatureShowcase from "@/components/features/FeatureShowcase";
import FeatureHero from "@/components/features/FeatureHero";
import FeatureCallToAction from "@/components/features/FeatureCallToAction";
import { featureCards, showcaseFeatures } from "@/components/features/FeaturesData";
import { ComingSoon } from "@/components/ui/coming-soon";
import { ArrowRight } from "lucide-react";

const Features = () => {
  // Updated feature page links
  const getFeatureLink = (title: string) => {
    const titleToPath: Record<string, string> = {
      "Universal Clipboard": "/features/universal-clipboard",
      "Smart Organization": "/features/smart-organization",
      "Smart Search": "/features/smart-search",
      "Templates": "/features/templates",
      "End-to-End Encryption": "/features/end-to-end-encryption",
      "Lightning Fast": "/features/lightning-fast",
      "Cloud Sync": "/features/copy-clip-cloud",
      "History Timeline": "/features/history-timeline",
      "Code Snippets": "/features/code-snippets",
      "Team Collaboration": "/features/team-collaboration",
      "Custom Rules": "/features/custom-rules"
    };
    
    return titleToPath[title] || "#";
  };

  return (
    <div className="min-h-screen bg-background">
      <SharedBackground />
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-32 pb-16">
          <FeatureHero />
        </div>

        {/* Showcase Features Section with improved spacing and links to feature pages */}
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
              <Link 
                to={getFeatureLink(feature.title)} 
                className="block group"
              >
                <FeatureShowcase
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  isReversed={feature.isReversed}
                  delay={index * 0.1}
                />
                
                {/* "Learn more" text with arrow for clear linkability */}
                <div className={`mt-6 flex items-center justify-${feature.isReversed ? 'end' : 'start'}`}>
                  <motion.div 
                    className="inline-flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Learn more about {feature.title}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>
              </Link>
              
              {/* Decorative elements */}
              <div className="absolute inset-0 pointer-events-none">
                {index % 2 === 0 ? (
                  <div className="absolute -right-4 top-1/2 w-24 h-px bg-white/10 transform -translate-y-1/2 hidden lg:block" />
                ) : (
                  <div className="absolute -left-4 top-1/2 w-24 h-px bg-white/10 transform -translate-y-1/2 hidden lg:block" />
                )}
              </div>
              
              {/* Coming soon badge for features that aren't fully implemented yet */}
              {getFeatureLink(feature.title) === "#" && (
                <ComingSoon className="absolute -top-4 right-0 lg:right-auto lg:-left-16" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Feature Cards Section with links to individual feature pages */}
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
            {featureCards.map((feature, index) => {
              const hasPage = getFeatureLink(feature.title) !== "#";
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Link 
                    to={getFeatureLink(feature.title)} 
                    className={`block ${!hasPage ? 'pointer-events-none' : ''}`}
                  >
                    <FeatureCard
                      title={feature.title}
                      description={feature.description}
                      icon={feature.icon}
                      color={feature.color}
                      comingSoon={!hasPage || feature.comingSoon}
                    />
                  </Link>
                </motion.div>
              );
            })}
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
