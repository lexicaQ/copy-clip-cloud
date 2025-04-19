import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Cloud, Star, Check, Info, CreditCard, Lock, BadgeDollarSign } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
import PricingPlanCard from "@/components/pricing/PricingPlanCard";
import PricingComparisonTable from "@/components/pricing/PricingComparisonTable";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
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
      price: "49.99",
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
      price: "99.99",
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
      
      <div className="relative z-10 pt-32 pb-24">
        {/* Background animated elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`circle-${i}`}
              className="absolute rounded-full border border-white/5"
              style={{
                width: `${100 + i * 200}px`,
                height: `${100 + i * 200}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                rotate: [0, 360],
                x: [-(i * 50), (i * 50), -(i * 50)],
                y: [-(i * 30), (i * 30), -(i * 30)],
              }}
              transition={{
                rotate: { duration: 50 + i * 10, repeat: Infinity, ease: "linear" },
                x: { duration: 30 + i * 5, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" },
                y: { duration: 20 + i * 5, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" },
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="relative w-20 h-20 mx-auto mb-6 rounded-full bg-black/20 backdrop-blur-lg border border-white/10 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(255, 255, 255, 0.1)",
                    "0 0 0 10px rgba(255, 255, 255, 0)",
                    "0 0 0 0 rgba(255, 255, 255, 0.1)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <BadgeDollarSign className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl font-bold mb-6 text-gradient">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
              Choose the perfect plan for your needs. No hidden fees. Cancel anytime.
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-16">
              <span className={`transition-colors ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
              <div className="relative">
                <Switch
                  checked={isAnnual}
                  onCheckedChange={setIsAnnual}
                  className="data-[state=checked]:bg-gradient-to-r from-white/20 to-white/5 data-[state=unchecked]:bg-white/5"
                />
                {isAnnual && (
                  <motion.span 
                    className="absolute -top-5 -right-12 text-xs bg-gradient-to-r from-green-500/20 to-green-500/10 text-white px-2 py-0.5 rounded-full"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    Save 20%
                  </motion.span>
                )}
              </div>
              <span className={`transition-colors ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
                Annual
              </span>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {plans.map((plan, index) => (
              <PricingPlanCard
                key={index}
                {...plan}
                price={plan.price}
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
              <h2 className="text-3xl font-bold text-gradient mb-4">Compare Plans</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Find the perfect plan for your needs. See how our plans compare feature by feature.
              </p>
            </div>
            <PricingComparisonTable />
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="glass-panel p-8 rounded-xl flex items-start gap-6 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <div className="p-3 rounded-xl bg-white/10 shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              
              <div className="relative z-10">
                <h3 className="font-medium text-xl mb-2 text-white">Money-back Guarantee</h3>
                <p className="text-gray-400">
                  Try CopyClipCloud risk-free. If you're not satisfied within the first 30 days, 
                  we'll refund your payment. No questions asked.
                </p>
                
                <div className="mt-6 flex items-center gap-2">
                  {[
                    { icon: Lock, text: "Secure Payment" },
                    { icon: CreditCard, text: "Multiple Payment Methods" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-1 text-sm text-white/70 bg-white/5 px-3 py-1 rounded-full">
                      <item.icon className="w-3 h-3" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gradient mb-4">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto mt-10 grid gap-6">
              {[
                {
                  question: "Can I switch plans at any time?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will be applied immediately, and we'll prorate any charges or credits."
                },
                {
                  question: "Is my data secure?",
                  answer: "Absolutely. We use military-grade encryption to protect your data. Your clipboard contents are encrypted both during transmission and at rest on our servers."
                },
                {
                  question: "How does the annual billing work?",
                  answer: "With annual billing, you pay for a full year upfront and receive a 20% discount compared to monthly billing. Your subscription will automatically renew each year unless canceled."
                },
                {
                  question: "Can I cancel my subscription?",
                  answer: "Yes, you can cancel your subscription at any time from your account settings. If you cancel, you'll still have access to your paid features until the end of your current billing period."
                }
              ].map((faq, i) => (
                <motion.div 
                  key={i}
                  className="glass-panel p-6 rounded-xl text-left relative overflow-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    scale: 1.01,
                  }}
                >
                  <motion.div
                    className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + 0.1 * i, duration: 0.8 }}
                  />
                  
                  <h3 className="font-medium text-lg mb-2 text-white flex items-center">
                    <span className="text-xs mr-2 bg-white/10 p-1 rounded-md flex-shrink-0">
                      <Info className="w-3 h-3" />
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 backdrop-blur-xl border border-white/10 transition-all"
              >
                Have more questions? Contact us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Pricing;
