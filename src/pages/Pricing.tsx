
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Shield, Cloud, Star, AlertCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InteractiveBackground from "@/components/landing/InteractiveBackground";

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
}

const PricingCard = ({ plan, isAnnual }: { plan: PricingPlan; isAnnual: boolean }) => {
  const monthlyPrice = parseInt(plan.price);
  const annualPrice = Math.floor(monthlyPrice * 10);
  
  return (
    <motion.div
      className={`glass-panel p-8 relative ${
        plan.highlight ? 'border-white/20' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {plan.highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="flex items-center justify-center h-16 mb-6">
        <plan.icon className="w-8 h-8" />
      </div>
      
      <h3 className="text-xl font-bold text-center mb-2">{plan.name}</h3>
      <p className="text-gray-400 text-center mb-6 h-12">{plan.description}</p>
      
      <div className="text-center mb-8">
        <div className="text-4xl font-bold mb-2">
          ${isAnnual ? annualPrice : monthlyPrice}
        </div>
        <div className="text-sm text-gray-400">
          per {isAnnual ? 'year' : 'month'}
        </div>
        {isAnnual && (
          <div className="text-sm text-emerald-500 mt-2">
            Save ${monthlyPrice * 2} annually
          </div>
        )}
      </div>
      
      <button className={`w-full py-3 rounded-lg mb-8 transition-all ${
        plan.highlight
          ? 'bg-white text-black hover:bg-opacity-90'
          : 'bg-white/10 hover:bg-white/20'
      }`}>
        Get Started
      </button>
      
      <div className="space-y-4">
        {plan.features.map((feature, index) => (
          <div
            key={index}
            className={`flex items-start ${
              feature.included ? 'text-white' : 'text-gray-500'
            }`}
          >
            <Check className={`w-5 h-5 mr-3 mt-0.5 ${
              feature.included ? 'opacity-100' : 'opacity-50'
            }`} />
            <span className={feature.highlight ? 'font-medium' : ''}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>
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
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Simple, Transparent Pricing</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your needs with our straightforward pricing options.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-lg transition-all ${
                !isAnnual ? 'bg-white text-black' : 'bg-white/10'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-lg transition-all ${
                isAnnual ? 'bg-white text-black' : 'bg-white/10'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-emerald-500 text-white px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              isAnnual={isAnnual}
            />
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="glass-panel p-6 flex items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <AlertCircle className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium mb-2">Money-back Guarantee</h3>
              <p className="text-gray-400 text-sm">
                Try CopyClipCloud risk-free. If you're not satisfied within the first 30 days, 
                we'll refund your payment. No questions asked.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Pricing;
