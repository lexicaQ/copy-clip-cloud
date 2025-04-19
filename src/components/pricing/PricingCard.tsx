
import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { ComingSoon } from "@/components/ui/coming-soon";
import DownloadButton from "@/components/landing/DownloadButton";

interface PlanFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  highlight?: boolean;
  isAnnual: boolean;
  icon: React.ElementType;
}

const PricingCard = ({
  name,
  price,
  description,
  features,
  highlight,
  isAnnual,
  icon: Icon,
}: PricingCardProps) => {
  const monthlyPrice = parseFloat(price);
  const isBasicPlan = name === "Basic";
  
  return (
    <motion.div
      className={`${
        highlight 
          ? 'bg-white text-black' 
          : 'bg-black/5 backdrop-blur-lg border border-white/10'
      } p-8 relative rounded-2xl hover:translate-y-[-5px] transition-all duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {highlight && (
        <motion.div 
          className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Most Popular
        </motion.div>
      )}
      
      <div className="flex items-center justify-center h-16 mb-6">
        <Icon className={`w-8 h-8 ${highlight ? 'text-black' : 'text-white'}`} />
      </div>
      
      <h3 className={`text-xl font-bold text-center mb-2 ${highlight ? 'text-black' : 'text-white'}`}>
        {name}
      </h3>
      
      <p className={`text-center mb-6 h-12 ${highlight ? 'text-black/70' : 'text-white/70'}`}>
        {description}
      </p>
      
      <div className="text-center mb-8 relative">
        {isAnnual && monthlyPrice > 0 && (
          <motion.div 
            className="absolute -right-2 -top-2 bg-black/80 px-2 py-1 rounded-full text-xs text-white font-medium border border-white/20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Save 20%
          </motion.div>
        )}
        <div className="text-4xl font-bold mb-2 relative inline-flex">
          <span className="text-sm absolute top-0 left-[-12px]">$</span>
          {monthlyPrice}
        </div>
        <div className={`text-sm ${highlight ? 'text-black/70' : 'text-white/70'}`}>
          per {isAnnual ? 'year' : 'month'}
        </div>
        {isAnnual && monthlyPrice > 0 && (
          <div className={`text-sm mt-2 ${highlight ? 'text-black/70' : 'text-white/70'}`}>
            ${(monthlyPrice / 12).toFixed(2)} / month, billed annually
          </div>
        )}
      </div>
      
      {isBasicPlan ? (
        <DownloadButton variant="compact" />
      ) : (
        <motion.button 
          className={`w-full py-3 rounded-lg mb-8 transition-all flex items-center justify-center gap-2 relative ${
            highlight
              ? 'bg-black text-white hover:bg-black/90'
              : 'bg-white text-black hover:bg-white/90'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ComingSoon className="absolute -top-3 -left-3" />
          Get Started
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      )}
      
      <div className="space-y-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`flex items-start ${
              feature.included 
                ? highlight ? 'text-black' : 'text-white' 
                : highlight ? 'text-black/40' : 'text-white/40'
            }`}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + (index * 0.05) }}
            viewport={{ once: true }}
          >
            <div className={`flex-shrink-0 w-5 h-5 mr-3 mt-0.5 flex items-center justify-center ${
              feature.included 
                ? highlight ? 'text-white bg-black rounded-full' : 'text-black bg-white rounded-full' 
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
    </motion.div>
  );
};

export default PricingCard;
