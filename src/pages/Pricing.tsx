
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Shield, Cloud, Star, ArrowRight, Sparkles } from "lucide-react";
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
  saveAmount?: number;
}

const PricingCard = ({ plan, isAnnual }: { plan: PricingPlan; isAnnual: boolean }) => {
  const monthlyPrice = parseInt(plan.price);
  const annualPrice = Math.floor(monthlyPrice * 10);
  const saveAmount = plan.saveAmount || monthlyPrice * 2;
  
  return (
    <motion.div
      className={`${
        plan.highlight 
          ? 'bg-white/5 backdrop-blur-lg border border-white/10' 
          : 'glass-panel'
      } p-8 relative hover:translate-y-[-5px] transition-all duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02, 
        rotateY: 2, 
        rotateX: 2,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {plan.highlight && (
        <motion.div 
          className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ transform: "translateZ(20px)" }}
        >
          <Sparkles className="w-3 h-3" /> Most Popular
        </motion.div>
      )}
      
      <div className="flex items-center justify-center h-16 mb-6" style={{ transform: "translateZ(30px)" }}>
        <motion.div
          whileHover={{ 
            rotate: [0, -10, 10, -10, 0],
            scale: 1.1
          }}
          transition={{ duration: 0.5 }}
        >
          <plan.icon className={`w-8 h-8 ${plan.highlight ? 'text-white' : 'text-gray-400'}`} />
        </motion.div>
      </div>
      
      <h3 className="text-xl font-bold text-center mb-2" style={{ transform: "translateZ(30px)" }}>{plan.name}</h3>
      <p className="text-gray-400 text-center mb-6 h-12" style={{ transform: "translateZ(30px)" }}>{plan.description}</p>
      
      <div className="text-center mb-8 relative" style={{ transform: "translateZ(30px)" }}>
        {isAnnual && (
          <motion.div 
            className="absolute -right-2 -top-2 bg-white/10 px-2 py-1 rounded-full text-xs flex items-center gap-1"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-3 h-3" /> Save 20%
          </motion.div>
        )}
        <div className="text-4xl font-bold mb-2 relative inline-flex">
          <span className="text-sm absolute top-0 left-[-12px]">$</span>
          {isAnnual ? annualPrice : monthlyPrice}
        </div>
        <div className="text-sm text-gray-400">
          per {isAnnual ? 'year' : 'month'}
        </div>
        {isAnnual && (
          <div className="text-sm text-emerald-500 mt-2 flex items-center justify-center gap-1">
            <Check className="w-3 h-3" /> Save ${saveAmount} annually
          </div>
        )}
      </div>
      
      <motion.button 
        className={`w-full py-3 rounded-lg mb-8 transition-all flex items-center justify-center gap-2 relative overflow-hidden group ${
          plan.highlight
            ? 'bg-white text-black hover:bg-opacity-90'
            : 'bg-white/10 hover:bg-white/20'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{ transform: "translateZ(30px)" }}
      >
        <span className="relative z-10">Get Started</span>
        <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
        
        {/* Button background shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
          initial={{ left: "-100%" }}
          whileHover={{ left: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ width: "50%" }}
        />
      </motion.button>
      
      <div className="space-y-4" style={{ transform: "translateZ(30px)" }}>
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

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-8 h-px bg-white/10"></div>
      <div className="absolute top-0 left-0 w-px h-8 bg-white/10"></div>
      <div className="absolute bottom-0 right-0 w-8 h-px bg-white/10"></div>
      <div className="absolute bottom-0 right-0 w-px h-8 bg-white/10"></div>
    </motion.div>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans: PricingPlan[] = [
    {
      name: "Free",
      price: "0",
      description: "Essential features for personal use",
      icon: Cloud,
      saveAmount: 0,
      features: [
        { text: "Basic clipboard history (7 days)", included: true },
        { text: "Single device sync", included: true },
        { text: "Standard encryption", included: true },
        { text: "Copy & paste text and images", included: true },
        { text: "Community support", included: true },
        { text: "AI organization", included: false },
        { text: "Custom rules", included: false },
        { text: "Priority support", included: false },
        { text: "Team sharing", included: false },
        { text: "Advanced encryption", included: false }
      ]
    },
    {
      name: "Pro",
      price: "4.99",
      description: "Advanced features for power users",
      icon: Zap,
      highlight: true,
      saveAmount: 12,
      features: [
        { text: "Unlimited clipboard history", included: true, highlight: true },
        { text: "Multi-device sync (up to 5)", included: true, highlight: true },
        { text: "Military-grade encryption", included: true },
        { text: "Text, images, files, code support", included: true },
        { text: "Priority email support", included: true },
        { text: "AI organization & suggestions", included: true },
        { text: "Custom rules (up to 15)", included: true },
        { text: "Advanced statistics & reporting", included: true },
        { text: "Limited team sharing (3 members)", included: true },
        { text: "Offline access", included: true },
        { text: "Cloud backup", included: true },
        { text: "API access", included: false }
      ]
    },
    {
      name: "Enterprise",
      price: "12.99",
      description: "Complete solution for teams",
      icon: Shield,
      saveAmount: 36,
      features: [
        { text: "Everything in Pro, plus:", included: true },
        { text: "Unlimited devices", included: true, highlight: true },
        { text: "Advanced team management", included: true, highlight: true },
        { text: "Enhanced security controls", included: true },
        { text: "Unlimited history retention", included: true },
        { text: "SSO integration", included: true },
        { text: "24/7 priority support", included: true },
        { text: "Custom integration API", included: true },
        { text: "SLA guarantees", included: true },
        { text: "Compliance exportation", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Custom feature development", included: true }
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
            className="w-20 h-20 mx-auto rounded-full bg-white/5 backdrop-blur-lg flex items-center justify-center mb-6 relative overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Star className="w-10 h-10" />
            
            {/* Animated particles in the circle */}
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                animate={{
                  x: [0, Math.random() * 30 - 15, 0],
                  y: [0, Math.random() * 30 - 15, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
                style={{
                  left: `${50 + (Math.random() * 20 - 10)}%`,
                  top: `${50 + (Math.random() * 20 - 10)}%`
                }}
              />
            ))}
          </motion.div>
          
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Simple, Transparent Pricing</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Choose the perfect plan for your needs with our straightforward pricing options.
            All plans include our core clipboard functionality.
          </p>
          
          <div className="inline-flex items-center p-1 rounded-full backdrop-blur-md bg-white/5 border border-white/10 mb-16 relative">
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: ["0 0 0px rgba(255,255,255,0.1)", "0 0 15px rgba(255,255,255,0.2)", "0 0 0px rgba(255,255,255,0.1)"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full transition-all duration-300 relative ${
                !isAnnual ? 'bg-white text-black' : ''
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full transition-all duration-300 relative ${
                isAnnual ? 'bg-white text-black' : ''
              }`}
            >
              Annual
              <motion.span 
                className="ml-2 text-xs bg-emerald-500 text-white px-2 py-0.5 rounded-full inline-flex items-center gap-1"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 5 }}
              >
                <Sparkles className="w-2 h-2" /> Save 20%
              </motion.span>
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, staggerChildren: 0.1 }}
          style={{ perspective: "1000px" }}
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
          style={{ perspective: "1000px" }}
        >
          <motion.div 
            className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 rounded-xl flex items-start gap-4 relative overflow-hidden"
            whileHover={{ 
              scale: 1.02, 
              rotateX: 2, 
              rotateY: 2, 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div 
              className="p-3 rounded-full bg-white/10 flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: 10 }}
              style={{ transform: "translateZ(20px)" }}
            >
              <Shield className="w-6 h-6 text-gray-300" />
            </motion.div>
            <div style={{ transform: "translateZ(20px)" }}>
              <h3 className="font-medium text-xl mb-2">30-Day Money-back Guarantee</h3>
              <p className="text-gray-400">
                Try CopyClipCloud risk-free. If you're not satisfied within the first 30 days, 
                we'll refund your payment. No questions asked.
              </p>
            </div>
            
            {/* Animated background shine */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
              style={{ width: "50%" }}
            />
          </motion.div>
        </motion.div>
        
        {/* Enterprise info */}
        <motion.div 
          className="max-w-3xl mx-auto mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
          <p className="text-gray-400 mb-6">
            For larger teams or specialized requirements, our enterprise solutions can be customized to your needs.
          </p>
          <motion.button 
            className="px-8 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition-all inline-flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Sales
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Pricing;
