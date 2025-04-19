
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Shield, Cloud, Star, ArrowRight, Download } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InteractiveBackground from "@/components/landing/InteractiveBackground";
import { ComingSoon } from "@/components/ui/coming-soon";
import DownloadButton from "@/components/landing/DownloadButton";

interface PlanFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  highlight?: boolean;
  icon: React.ElementType;
  isFree?: boolean;
}

// Improved card with more elegant animations
const PricingCard = ({ plan, isAnnual }: { plan: PricingPlan; isAnnual: boolean }) => {
  const monthlyPrice = parseInt(plan.price);
  const annualPrice = Math.floor(monthlyPrice * 10);
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div
      className={`${
        plan.highlight 
          ? 'bg-white/5 backdrop-blur-lg border border-white/20' 
          : 'glass-panel border border-white/10'
      } p-8 relative hover:translate-y-[-5px] transition-all duration-300 overflow-hidden rounded-xl`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Subtle background glow effect */}
      <motion.div 
        className="absolute inset-0 bg-white/5 rounded-xl z-0"
        animate={{ 
          opacity: hovered ? 0.2 : 0 
        }}
        transition={{ duration: 0.3 }}
      />
      
      {plan.highlight && (
        <motion.div 
          className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Most Popular
        </motion.div>
      )}
      
      <div className="flex items-center justify-center h-16 mb-6 relative">
        <motion.div 
          className="absolute inset-0 rounded-full bg-white/5 blur-xl opacity-50"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <plan.icon className={`w-10 h-10 ${plan.highlight ? 'text-white' : 'text-gray-300'} relative z-10`} />
      </div>
      
      <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
      <p className="text-gray-400 text-center mb-6 h-12">{plan.description}</p>
      
      <div className="text-center mb-8 relative">
        {isAnnual && (
          <motion.div 
            className="absolute -right-2 -top-2 bg-white/10 px-2 py-1 rounded-full text-xs"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Save 20%
          </motion.div>
        )}
        <div className="text-5xl font-bold mb-2 relative inline-flex">
          <span className="text-sm absolute top-2 left-[-12px]">$</span>
          {isAnnual ? annualPrice : monthlyPrice}
        </div>
        <div className="text-sm text-gray-400">
          per {isAnnual ? 'year' : 'month'}
        </div>
        {isAnnual && (
          <div className="text-sm text-white/70 mt-2">
            Save ${monthlyPrice * 2} annually
          </div>
        )}
      </div>
      
      <div className="relative mb-8">
        {plan.isFree ? (
          <DownloadButton variant="compact" />
        ) : (
          <motion.button 
            className={`w-full py-3 rounded-lg transition-all flex items-center justify-center gap-2 ${
              plan.highlight
                ? 'bg-white text-black hover:bg-opacity-90'
                : 'bg-white/10 hover:bg-white/20'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        )}
        
        {/* Add Coming Soon sticker to paid plans */}
        {!plan.isFree && (
          <ComingSoon variant="sticker" position="top-left" />
        )}
      </div>
      
      <div className="space-y-4">
        {plan.features.map((feature, index) => (
          <motion.div
            key={index}
            className={`flex items-start ${
              feature.included ? 'text-white' : 'text-gray-500'
            }`}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + (index * 0.05) }}
            viewport={{ once: true }}
          >
            <div className={`flex-shrink-0 w-5 h-5 mr-3 mt-0.5 flex items-center justify-center ${
              feature.included 
                ? plan.highlight ? 'text-black bg-white rounded-full' : 'text-white' 
                : 'text-gray-500'
            }`}>
              {feature.included ? <Check className="w-3 h-3" /> : "-"}
            </div>
            <span className={feature.highlight ? 'font-medium' : ''}>
              {feature.text}
            </span>
          </motion.div>
        ))}
      </div>
      
      {/* Add subtle border animation on hover */}
      <motion.div 
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={{
          boxShadow: hovered ? [
            "0 0 0 1px rgba(255, 255, 255, 0.1)",
            "0 0 0 2px rgba(255, 255, 255, 0.2)",
            "0 0 0 1px rgba(255, 255, 255, 0.1)"
          ] : "0 0 0 1px rgba(255, 255, 255, 0.1)"
        }}
        transition={{
          duration: 1.5,
          repeat: hovered ? Infinity : 0,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans: PricingPlan[] = [
    {
      name: "Basic",
      price: "0",
      description: "Essential features for personal use",
      icon: Cloud,
      isFree: true,
      features: [
        { text: "Basic clipboard history", included: true },
        { text: "Single device sync", included: true },
        { text: "Standard encryption", included: true },
        { text: "7-day history retention", included: true },
        { text: "Community support", included: true },
        { text: "AI organization", included: false },
        { text: "Custom rules", included: false },
        { text: "Priority support", included: false }
      ]
    },
    {
      name: "Pro",
      price: "4.99",
      description: "Advanced features for power users",
      icon: Zap,
      highlight: true,
      features: [
        { text: "Unlimited clipboard history", included: true, highlight: true },
        { text: "Multi-device sync", included: true, highlight: true },
        { text: "Military-grade encryption", included: true },
        { text: "30-day history retention", included: true },
        { text: "Priority email support", included: true },
        { text: "Basic AI organization", included: true },
        { text: "Limited custom rules", included: true },
        { text: "Advanced statistics", included: true }
      ]
    },
    {
      name: "Enterprise",
      price: "9.99",
      description: "Complete solution for teams",
      icon: Shield,
      features: [
        { text: "Everything in Pro, plus:", included: true },
        { text: "Team management", included: true, highlight: true },
        { text: "Advanced AI features", included: true, highlight: true },
        { text: "Unlimited history retention", included: true },
        { text: "24/7 priority support", included: true },
        { text: "Custom integration API", included: true },
        { text: "Advanced security features", included: true },
        { text: "Dedicated account manager", included: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <InteractiveBackground />
      <Header />
      
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="w-20 h-20 mx-auto rounded-full bg-white/5 backdrop-blur-lg flex items-center justify-center mb-6 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(255, 255, 255, 0.3)",
                  "0 0 0 10px rgba(255, 255, 255, 0)",
                  "0 0 0 0 rgba(255, 255, 255, 0)"
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            <Star className="w-10 h-10" />
          </motion.div>
          
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Simple, Transparent Pricing</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Choose the perfect plan for your needs with our straightforward pricing options.
          </p>
          
          <div className="inline-flex items-center p-1 rounded-full backdrop-blur-md bg-white/5 border border-white/10 mb-16">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                !isAnnual ? 'bg-white text-black' : ''
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                isAnnual ? 'bg-white text-black' : ''
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-white/30 text-white px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, staggerChildren: 0.1 }}
        >
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              isAnnual={isAnnual}
            />
          ))}
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 rounded-xl flex items-start gap-4">
            <div className="p-3 rounded-full bg-white/10">
              <Shield className="w-6 h-6 text-gray-300" />
            </div>
            <div>
              <h3 className="font-medium text-xl mb-2">Money-back Guarantee</h3>
              <p className="text-gray-400">
                Try CopyClipCloud risk-free. If you're not satisfied within the first 30 days, 
                we'll refund your payment. No questions asked.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Pricing;
