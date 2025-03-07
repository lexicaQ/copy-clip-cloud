
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, ZapOff } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InteractiveBackground from "@/components/landing/InteractiveBackground";
import FeatureCard from "@/components/features/FeatureCard";
import FeatureShowcase from "@/components/features/FeatureShowcase";
import FeatureHero from "@/components/features/FeatureHero";
import FeatureCallToAction from "@/components/features/FeatureCallToAction";
import { featureCards, showcaseFeatures } from "@/components/features/FeaturesData";
import { ComingSoon } from "@/components/ui/coming-soon";
import { AnimatedBadge } from "@/components/ui/animated-badge";

const Features = () => {
  // Set some features as "coming soon" for demonstration
  const enhancedFeatureCards = featureCards.map((feature, index) => ({
    ...feature,
    comingSoon: index % 3 === 2 // Every third feature will be marked as coming soon
  }));

  const [activeCategory, setActiveCategory] = useState<'all' | 'ai' | 'security' | 'performance'>('all');

  // Filter cards based on active category
  const filteredCards = activeCategory === 'all' 
    ? enhancedFeatureCards 
    : enhancedFeatureCards.filter((card, index) => {
        if (activeCategory === 'ai' && (index === 4 || index === 2)) return true;
        if (activeCategory === 'security' && (index === 1 || index === 6)) return true;
        if (activeCategory === 'performance' && (index === 2 || index === 7)) return true;
        return false;
      });

  return (
    <div className="min-h-screen bg-background">
      <InteractiveBackground />
      <Header />
      
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto relative z-10">
        <FeatureHero />

        {/* Interactive category filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <CategoryButton 
            active={activeCategory === 'all'} 
            onClick={() => setActiveCategory('all')}
          >
            All Features
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'ai'} 
            onClick={() => setActiveCategory('ai')}
          >
            AI & Intelligence
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'security'} 
            onClick={() => setActiveCategory('security')}
          >
            Security & Privacy
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'performance'} 
            onClick={() => setActiveCategory('performance')}
          >
            Performance
          </CategoryButton>
        </motion.div>

        {/* Metro-style Feature Showcase Section with improved layout */}
        <div className="mb-40">
          {showcaseFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative ${index !== 0 ? 'mt-48' : ''}`}
            >
              <FeatureShowcase
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                isReversed={feature.isReversed}
                delay={index * 0.1}
              />
              
              {/* Decorative elements for metro styling */}
              {index % 2 === 0 && (
                <motion.div 
                  className="absolute -right-4 top-1/2 w-24 h-1 bg-white/10 transform -translate-y-1/2 hidden lg:block"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              )}
              {index % 2 === 1 && (
                <motion.div 
                  className="absolute -left-4 top-1/2 w-24 h-1 bg-white/10 transform -translate-y-1/2 hidden lg:block"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              )}
              
              {/* Coming soon badge for selected features */}
              {index % 2 === 1 && (
                <ComingSoon className="absolute top-0 right-0 lg:right-auto lg:-left-16 transform -translate-y-1/2" />
              )}
              
              {/* Feature metrics visualization for first feature */}
              {index === 0 && (
                <motion.div
                  className="mt-16 p-6 rounded-xl backdrop-blur-lg bg-white/[0.03] border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart3 className="w-5 h-5" />
                    <h3 className="text-lg font-medium">Sync Performance Metrics</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <MetricCard 
                      label="Sync Speed" 
                      value="4.8x" 
                      description="Faster than competitors"
                      percentage={92}
                    />
                    <MetricCard 
                      label="Battery Impact" 
                      value="76%" 
                      description="Less than traditional methods"
                      percentage={76}
                    />
                    <MetricCard 
                      label="Reliability" 
                      value="99.9%" 
                      description="Uptime across devices"
                      percentage={99}
                    />
                  </div>
                </motion.div>
              )}
              
              {/* Feature user quote for second feature */}
              {index === 1 && (
                <motion.div
                  className="mt-16 p-6 rounded-xl backdrop-blur-lg bg-white/[0.03] border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-white/10 mb-4 overflow-hidden border-2 border-white/20"
                      whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.3)" }}
                    >
                      <img 
                        src="https://randomuser.me/api/portraits/women/44.jpg" 
                        alt="User profile" 
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <p className="text-lg italic text-gray-300 mb-4">
                      "The AI organization has completely transformed how I manage my workflow. 
                      It's like having a personal assistant who knows exactly what I need before I do."
                    </p>
                    <p className="font-medium">Sarah L.</p>
                    <p className="text-sm text-gray-400">Product Designer, Adobe</p>
                  </div>
                </motion.div>
              )}
              
              {/* Feature compatibility chart for third feature */}
              {index === 2 && (
                <motion.div
                  className="mt-16 p-6 rounded-xl backdrop-blur-lg bg-white/[0.03] border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-6">
                    <Shield className="w-5 h-5" />
                    <h3 className="text-lg font-medium">Security Protocol Comparison</h3>
                  </div>
                  
                  <div className="space-y-4 mb-2">
                    <ComparisonRow 
                      feature="End-to-end Encryption" 
                      competitors={[true, false, false]} 
                    />
                    <ComparisonRow 
                      feature="Zero-knowledge Architecture" 
                      competitors={[true, false, false]} 
                    />
                    <ComparisonRow 
                      feature="Biometric Authentication" 
                      competitors={[true, true, false]} 
                    />
                    <ComparisonRow 
                      feature="Customizable Retention" 
                      competitors={[true, false, true]} 
                    />
                  </div>
                  
                  <div className="flex text-xs text-gray-400 justify-between border-t border-white/10 pt-4">
                    <span>CopyClipCloud</span>
                    <span>Competitor A</span>
                    <span>Competitor B</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">
            <span className="text-gradient">All Features</span>
          </h2>
          <div className="h-px flex-grow bg-gradient-to-r from-white/20 to-transparent"></div>
          <AnimatedBadge 
            text={`${filteredCards.length} Features`} 
            icon={<BarChart3 className="w-3 h-3" />} 
          />
        </motion.div>
        
        {/* Empty state when filters return no results */}
        {filteredCards.length === 0 && (
          <motion.div 
            className="flex flex-col items-center justify-center py-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ZapOff className="w-16 h-16 text-white/20 mb-4" />
            <h3 className="text-xl font-medium mb-2">No features found</h3>
            <p className="text-gray-400 max-w-md">
              No features match your current filter criteria. Try selecting a different category.
            </p>
          </motion.div>
        )}
        
        {/* Metro-style grid layout for feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-40">
          {filteredCards.map((feature, index) => {
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

// Helper components for the enhanced features page
const CategoryButton = ({ 
  children, 
  active, 
  onClick 
}: { 
  children: React.ReactNode; 
  active: boolean; 
  onClick: () => void;
}) => (
  <motion.button
    className={`px-4 py-2 rounded-full backdrop-blur-md border transition-all ${
      active 
        ? 'bg-white text-black border-white' 
        : 'bg-white/5 text-white border-white/20 hover:bg-white/10'
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    layout
  >
    {children}
  </motion.button>
);

const MetricCard = ({ 
  label, 
  value, 
  description, 
  percentage 
}: { 
  label: string; 
  value: string; 
  description: string;
  percentage: number;
}) => (
  <motion.div 
    className="bg-white/5 border border-white/10 p-4 rounded-lg"
    whileHover={{ scale: 1.02 }}
  >
    <h4 className="text-sm text-gray-400 mb-1">{label}</h4>
    <div className="flex items-baseline mb-2">
      <span className="text-3xl font-bold mr-1">{value}</span>
      <span className="text-sm text-gray-400">{description}</span>
    </div>
    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div 
        className="h-full bg-white/70 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      />
    </div>
  </motion.div>
);

const ComparisonRow = ({ 
  feature, 
  competitors 
}: { 
  feature: string; 
  competitors: boolean[];
}) => (
  <div className="grid grid-cols-4 gap-2 items-center">
    <div className="text-sm">{feature}</div>
    {[true, ...competitors].map((supported, index) => (
      <div key={index} className="flex justify-center">
        {supported ? (
          <motion.div 
            className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center"
            whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.2)" }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
        ) : (
          <motion.div 
            className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/40"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.div>
        )}
      </div>
    ))}
  </div>
);

export default Features;
