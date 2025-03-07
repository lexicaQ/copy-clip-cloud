
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, Shield, Cloud, Star, ArrowRight, X, BarChart3, Sparkles, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InteractiveBackground from "@/components/landing/InteractiveBackground";
import { AnimatedBadge } from "@/components/ui/animated-badge";

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
  metrics?: {
    storage: number;
    devices: number;
    retention: number;
  };
}

const PricingCard = ({ plan, isAnnual }: { plan: PricingPlan; isAnnual: boolean }) => {
  const monthlyPrice = parseInt(plan.price);
  const annualPrice = Math.floor(monthlyPrice * 10);
  
  return (
    <motion.div
      className={`${
        plan.highlight 
          ? 'relative z-10 bg-white/5 backdrop-blur-lg border border-white/20' 
          : 'glass-panel border border-white/10'
      } p-8 rounded-xl relative hover:translate-y-[-5px] transition-all duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
        rotateY: 2,
        rotateX: 2
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
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
      
      <div className="flex items-center justify-center h-16 mb-6">
        <motion.div 
          className={`p-3 rounded-full ${plan.highlight ? 'bg-white/20' : 'bg-white/10'} transform`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <plan.icon className={`w-8 h-8 ${plan.highlight ? 'text-white' : 'text-gray-300'}`} />
        </motion.div>
      </div>
      
      <h3 className="text-xl font-bold text-center mb-2">{plan.name}</h3>
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
        <div className="text-4xl font-bold mb-2 relative inline-flex">
          <span className="text-sm absolute top-0 left-[-12px]">$</span>
          {isAnnual ? annualPrice : monthlyPrice}
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
      
      {/* Plan metrics visualization - NEW */}
      {plan.metrics && (
        <div className="mb-8 grid grid-cols-3 gap-2">
          <MetricPill label="Storage" value={`${plan.metrics.storage}GB`} />
          <MetricPill label="Devices" value={`${plan.metrics.devices}`} />
          <MetricPill label="History" value={`${plan.metrics.retention} days`} />
        </div>
      )}
      
      <motion.button 
        className={`w-full py-3 rounded-lg mb-8 transition-all flex items-center justify-center gap-2 overflow-hidden relative ${
          plan.highlight
            ? 'bg-white text-black hover:bg-opacity-90'
            : 'bg-white/10 hover:bg-white/20'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Button highlight effect */}
        <motion.div 
          className="absolute inset-0 bg-white/10"
          initial={{ x: "-100%", opacity: 0.5 }}
          animate={{ x: "200%" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        
        <span className="relative z-10">Get Started</span>
        <ArrowRight className="w-4 h-4 relative z-10" />
      </motion.button>
      
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
              {feature.included ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
            </div>
            <span className={feature.highlight ? 'font-medium' : ''}>
              {feature.text}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const MetricPill = ({ label, value }: { label: string; value: string }) => (
  <motion.div 
    className="bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-center"
    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
  >
    <p className="text-xs text-gray-400">{label}</p>
    <p className="text-sm font-semibold">{value}</p>
  </motion.div>
);

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans: PricingPlan[] = [
    {
      name: "Basic",
      price: "0",
      description: "Essential features for personal use",
      icon: Cloud,
      metrics: {
        storage: 2,
        devices: 1,
        retention: 7
      },
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
      metrics: {
        storage: 15,
        devices: 5,
        retention: 30
      },
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
      metrics: {
        storage: 50,
        devices: 20, 
        retention: 90
      },
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

  const comparisonItems = [
    { feature: "Encryption Strength", basic: "AES-128", pro: "AES-256", enterprise: "AES-256 + Custom" },
    { feature: "Data Storage", basic: "2GB", pro: "15GB", enterprise: "50GB" },
    { feature: "Devices", basic: "1 device", pro: "5 devices", enterprise: "Unlimited" },
    { feature: "History Retention", basic: "7 days", pro: "30 days", enterprise: "Unlimited" },
    { feature: "Sync Frequency", basic: "Manual", pro: "Real-time", enterprise: "Real-time" },
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
            className="w-20 h-20 mx-auto rounded-full bg-white/5 backdrop-blur-lg flex items-center justify-center mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Star className="w-10 h-10" />
          </motion.div>
          
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Simple, Transparent Pricing</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Choose the perfect plan for your needs with our straightforward pricing options.
          </p>
          
          <div className="inline-flex items-center p-1 rounded-full backdrop-blur-md bg-white/5 border border-white/10 mb-16">
            <motion.button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                !isAnnual ? 'bg-white text-black' : ''
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              Monthly
            </motion.button>
            <motion.button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                isAnnual ? 'bg-white text-black' : ''
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              Annual
              <AnimatedBadge text="Save 20%" className="ml-2" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
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

        {/* NEW: Feature Comparison Table */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold">
              <span className="text-gradient">Feature Comparison</span>
            </h2>
            <div className="h-px flex-grow bg-gradient-to-r from-white/20 to-transparent"></div>
            <AnimatedBadge 
              text="Detailed View" 
              icon={<BarChart3 className="w-3 h-3" />} 
            />
          </div>

          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-6">
              <div className="text-lg font-medium">Feature</div>
              <div className="text-center">
                <Cloud className="w-5 h-5 mx-auto mb-2" />
                <div className="font-medium">Basic</div>
              </div>
              <div className="text-center">
                <Zap className="w-5 h-5 mx-auto mb-2" />
                <div className="font-medium">Pro</div>
              </div>
              <div className="text-center">
                <Shield className="w-5 h-5 mx-auto mb-2" />
                <div className="font-medium">Enterprise</div>
              </div>

              {comparisonItems.map((item, index) => (
                <React.Fragment key={index}>
                  <motion.div 
                    className="py-3 border-t border-white/5"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {item.feature}
                  </motion.div>
                  <motion.div 
                    className="py-3 text-center border-t border-white/5 text-gray-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index + 0.1 }}
                  >
                    {item.basic}
                  </motion.div>
                  <motion.div 
                    className="py-3 text-center border-t border-white/5 font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index + 0.2 }}
                  >
                    {item.pro}
                  </motion.div>
                  <motion.div 
                    className="py-3 text-center border-t border-white/5 font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index + 0.3 }}
                  >
                    {item.enterprise}
                  </motion.div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>

        {/* NEW: User Testimonials */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold">
              <span className="text-gradient">What Our Users Say</span>
            </h2>
            <div className="h-px flex-grow bg-gradient-to-r from-white/20 to-transparent"></div>
            <AnimatedBadge 
              text="Real Users" 
              icon={<Users className="w-3 h-3" />} 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 rounded-xl"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-white/20">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">Michael T.</h4>
                  <p className="text-sm text-gray-400">Pro Plan User</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "I switched from a competing clipboard manager and haven't looked back. The sync feature is incredibly reliable."
              </p>
              <div className="flex">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="backdrop-blur-lg bg-white/5 border border-white/20 p-6 rounded-xl"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-white/20">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">Emma R.</h4>
                  <p className="text-sm text-gray-400">Enterprise Plan User</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "Our design team has been using the Enterprise plan for 6 months. The team sharing features have transformed our workflow."
              </p>
              <div className="flex">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 rounded-xl"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-white/20">
                  <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="User" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">David L.</h4>
                  <p className="text-sm text-gray-400">Basic Plan User</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "Even the free plan offers more than most paid clipboard managers. I've been using it daily for my coding projects."
              </p>
              <div className="flex">
                {Array(4).fill(0).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <Star className="w-4 h-4 text-gray-500" />
              </div>
            </motion.div>
          </div>
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
