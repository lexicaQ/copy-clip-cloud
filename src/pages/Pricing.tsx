
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, CreditCard, Zap, Star, Shield, Clock, Users, HelpCircle, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InteractiveBackground from "@/components/landing/InteractiveBackground";

interface PricingFeatureProps {
  text: string;
  available: boolean;
}

const PricingFeature: React.FC<PricingFeatureProps> = ({ text, available }) => (
  <div className="flex items-center py-2">
    <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${available ? 'bg-white/20' : 'bg-white/5'}`}>
      {available ? (
        <Check className="w-3 h-3 text-white" />
      ) : (
        <div className="w-2 h-2 rounded-full bg-white/20"></div>
      )}
    </div>
    <span className={available ? 'text-white' : 'text-gray-500'}>{text}</span>
  </div>
);

interface PlanCardProps {
  name: string;
  price: {
    monthly: string;
    yearly: string;
  };
  description: string;
  features: {
    text: string;
    available: boolean;
  }[];
  popular?: boolean;
  ctaText: string;
  icon: React.ElementType;
  delay?: number;
}

const PlanCard: React.FC<PlanCardProps> = ({ 
  name, 
  price, 
  description, 
  features, 
  popular, 
  ctaText, 
  icon: Icon,
  delay = 0 
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <motion.div 
      className={`glass-panel p-6 ${popular ? 'border-white/30 ring-1 ring-white/20' : 'border-white/10'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      {popular && (
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
          <div className="bg-white text-black text-xs font-bold uppercase py-1 px-3 rounded-full">
            Most Popular
          </div>
        </div>
      )}

      <div className="flex items-center mb-4">
        <div className={`w-10 h-10 rounded-lg ${popular ? 'bg-white/30' : 'bg-white/10'} flex items-center justify-center mr-3`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold">{name}</h3>
      </div>

      <div className="mb-4">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">
            {billingCycle === 'monthly' ? price.monthly : price.yearly}
          </span>
          <span className="text-gray-400 ml-2">
            /{billingCycle === 'monthly' ? 'month' : 'year'}
          </span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <button 
            className={`text-xs px-2 py-1 rounded ${billingCycle === 'monthly' ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-400'}`}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </button>
          <button 
            className={`text-xs px-2 py-1 rounded flex items-center ${billingCycle === 'yearly' ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-400'}`}
            onClick={() => setBillingCycle('yearly')}
          >
            Yearly
            <span className="ml-1 text-[10px] bg-white/20 text-white px-1 rounded">-20%</span>
          </button>
        </div>
        <p className="text-gray-400 mt-3 text-sm">{description}</p>
      </div>

      <div className="my-6 border-t border-b border-white/10 py-4">
        {features.map((feature, index) => (
          <PricingFeature key={index} text={feature.text} available={feature.available} />
        ))}
      </div>

      <button 
        className={`w-full py-3 rounded-lg flex items-center justify-center ${
          popular 
            ? 'bg-white text-black hover:bg-opacity-90' 
            : 'bg-white/10 text-white hover:bg-white/20'
        } transition-colors font-medium`}
      >
        {ctaText}
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </motion.div>
  );
};

const ComparisonTable = () => {
  const features = [
    { name: "Clipboard History", free: "24 hours", pro: "Unlimited", team: "Unlimited" },
    { name: "Device Sync", free: "2 devices", pro: "Up to 5 devices", team: "Unlimited devices" },
    { name: "End-to-End Encryption", free: true, pro: true, team: true },
    { name: "Cloud Backup", free: "7 days", pro: "90 days", team: "1 year" },
    { name: "Search Capabilities", free: "Basic", pro: "Advanced", team: "Advanced" },
    { name: "Custom Tags", free: "3 tags", pro: "Unlimited", team: "Unlimited" },
    { name: "API Access", free: false, pro: true, team: true },
    { name: "Team Sharing", free: false, pro: false, team: true },
    { name: "Admin Console", free: false, pro: false, team: true },
    { name: "Priority Support", free: false, pro: true, team: true },
  ];

  return (
    <div className="mt-20 overflow-x-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-white/10">
              <th className="py-4 px-4 font-medium text-gray-400">Feature</th>
              <th className="py-4 px-4 font-medium text-gray-400">Free</th>
              <th className="py-4 px-4 font-medium text-gray-400">Pro</th>
              <th className="py-4 px-4 font-medium text-gray-400">Team</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-b border-white/5">
                <td className="py-4 px-4">{feature.name}</td>
                <td className="py-4 px-4">
                  {typeof feature.free === 'boolean' ? (
                    feature.free ? (
                      <Check className="w-5 h-5 text-white" />
                    ) : (
                      <div className="w-5 h-5 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                      </div>
                    )
                  ) : (
                    <span>{feature.free}</span>
                  )}
                </td>
                <td className="py-4 px-4">
                  {typeof feature.pro === 'boolean' ? (
                    feature.pro ? (
                      <Check className="w-5 h-5 text-white" />
                    ) : (
                      <div className="w-5 h-5 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                      </div>
                    )
                  ) : (
                    <span>{feature.pro}</span>
                  )}
                </td>
                <td className="py-4 px-4">
                  {typeof feature.team === 'boolean' ? (
                    feature.team ? (
                      <Check className="w-5 h-5 text-white" />
                    ) : (
                      <div className="w-5 h-5 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                      </div>
                    )
                  ) : (
                    <span>{feature.team}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: {
        monthly: "$0",
        yearly: "$0",
      },
      description: "Perfect for casual users who need basic clipboard management.",
      features: [
        { text: "24-hour clipboard history", available: true },
        { text: "Basic search functionality", available: true },
        { text: "Up to 2 synced devices", available: true },
        { text: "Text & image support", available: true },
        { text: "End-to-end encryption", available: true },
        { text: "Advanced organization features", available: false },
        { text: "Cloud backup", available: false },
        { text: "API access", available: false },
        { text: "Priority support", available: false },
      ],
      ctaText: "Get Started",
      icon: Clock,
    },
    {
      name: "Pro",
      price: {
        monthly: "$4.99",
        yearly: "$47.88",
      },
      description: "For professionals who need advanced clipboard management.",
      features: [
        { text: "Unlimited clipboard history", available: true },
        { text: "Advanced search & filters", available: true },
        { text: "Up to 5 synced devices", available: true },
        { text: "All media types support", available: true },
        { text: "End-to-end encryption", available: true },
        { text: "Advanced organization features", available: true },
        { text: "90-day cloud backup", available: true },
        { text: "API access", available: true },
        { text: "Priority support", available: true },
      ],
      popular: true,
      ctaText: "Upgrade to Pro",
      icon: Zap,
    },
    {
      name: "Team",
      price: {
        monthly: "$9.99",
        yearly: "$99.99",
      },
      description: "For teams that need to share clipboard items securely.",
      features: [
        { text: "Unlimited clipboard history", available: true },
        { text: "Advanced search & filters", available: true },
        { text: "Unlimited synced devices", available: true },
        { text: "All media types support", available: true },
        { text: "End-to-end encryption", available: true },
        { text: "Advanced organization features", available: true },
        { text: "1-year cloud backup", available: true },
        { text: "Team sharing features", available: true },
        { text: "Admin console", available: true },
      ],
      ctaText: "Contact Sales",
      icon: Users,
    },
  ];

  const faqs = [
    {
      question: "Can I try the Pro version before purchasing?",
      answer: "Yes, we offer a 14-day free trial of CopyClipCloud Pro with all features unlocked. No credit card required to start your trial."
    },
    {
      question: "Can I switch between plans?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference for the remainder of your billing cycle."
    },
    {
      question: "Is there a discount for students or educators?",
      answer: "Yes, we offer a 50% discount for verified students and educators. Contact our support team with your educational credentials to apply for the discount."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay. For Team plans, we also offer invoice payment options."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <InteractiveBackground />
      <Header />
      
      <div className="pt-32 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-gradient">Pricing Plans</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Choose the perfect plan for your clipboard management needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <PlanCard 
                key={index}
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
                ctaText={plan.ctaText}
                icon={plan.icon}
                delay={0.1 * index}
              />
            ))}
          </div>

          <ComparisonTable />

          <div className="mt-24">
            <motion.h2 
              className="text-3xl font-bold text-center mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Frequently Asked Questions
            </motion.h2>

            <div className="max-w-3xl mx-auto glass-panel divide-y divide-white/10">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index} 
                  className="p-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start">
                    <HelpCircle className="w-5 h-5 mt-1 mr-3 text-white/70" />
                    <div>
                      <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                      <p className="text-gray-400">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="mt-20 text-center glass-panel p-10 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 z-0"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Need a custom solution?</h2>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                For enterprises with specific requirements, we offer custom plans tailored to your organization's needs.
              </p>
              <button className="bg-white text-black px-8 py-3 rounded-lg font-medium inline-flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Contact Our Sales Team
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Pricing;
