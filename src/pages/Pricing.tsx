
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Cloud, Star, Check, Info } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import PricingCard from "@/components/pricing/PricingCard";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans: PricingPlan[] = [
    {
      name: "Basic",
      price: isAnnual ? "0" : "0",
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
      price: isAnnual ? "49.99" : "4.99",
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
      price: isAnnual ? "99.99" : "9.99",
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
      <SharedBackground />
      <Header />
      
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="w-20 h-20 mx-auto rounded-full border border-white/20 bg-white/5 backdrop-blur-lg flex items-center justify-center mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Star className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-5xl font-bold mb-6 text-white">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Choose the perfect plan for your needs with our straightforward pricing options.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`transition-colors ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-white"
            />
            <span className={`transition-colors ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
              <span className="ml-2 text-xs bg-white text-black px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </span>
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
              {...plan}
              price={isAnnual ? (parseFloat(plan.price) * 10).toString() : plan.price}
              isAnnual={isAnnual}
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Compare Plans</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find the perfect plan for your needs. Compare features and benefits to make an informed decision.
            </p>
          </div>
          <ComparisonTable />
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 rounded-xl flex items-start gap-4">
            <div className="p-3 rounded-full bg-white/10">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-xl mb-2 text-white">Money-back Guarantee</h3>
              <p className="text-gray-400">
                Try CopyClipCloud risk-free. If you're not satisfied within the first 30 days, 
                we'll refund your payment. No questions asked.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto mt-10 grid gap-6">
            <FaqItem 
              question="Can I switch plans at any time?"
              answer="Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will be applied immediately, and we'll prorate any charges or credits."
            />
            <FaqItem 
              question="Is my data secure?"
              answer="Absolutely. We use military-grade encryption to protect your data. Your clipboard contents are encrypted both during transmission and at rest on our servers."
            />
            <FaqItem 
              question="How does the annual billing work?"
              answer="With annual billing, you pay for a full year upfront and receive a 20% discount compared to monthly billing. Your subscription will automatically renew each year unless canceled."
            />
            <FaqItem 
              question="Can I cancel my subscription?"
              answer="Yes, you can cancel your subscription at any time from your account settings. If you cancel, you'll still have access to your paid features until the end of your current billing period."
            />
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  return (
    <motion.div 
      className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 rounded-xl text-left"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="font-medium text-lg mb-2 text-white">{question}</h3>
      <p className="text-gray-400">{answer}</p>
    </motion.div>
  );
};

export default Pricing;
