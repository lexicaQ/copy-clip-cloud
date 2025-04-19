
import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { ComingSoon } from "@/components/ui/coming-soon";
import DownloadButton from "@/components/landing/DownloadButton";
import { Link } from "react-router-dom";

interface PlanFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface PricingPlanCardProps {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  highlight?: boolean;
  isAnnual: boolean;
  icon: React.ElementType;
}

const PricingPlanCard = ({
  name,
  price,
  description,
  features,
  highlight,
  isAnnual,
  icon: Icon,
}: PricingPlanCardProps) => {
  const monthlyPrice = parseFloat(price);
  const isBasicPlan = name === "Basic";
  
  return (
    <motion.div
      className={`group relative rounded-2xl overflow-hidden backdrop-blur-lg transition-all duration-300 hover:translate-y-[-5px]`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Card background with gradient */}
      <div className={`absolute inset-0 ${
        highlight 
          ? 'bg-gradient-to-br from-white/10 to-white/5'
          : 'bg-gradient-to-br from-white/5 to-white/2'
      } z-0`}>
        {/* Animated border effect */}
        <motion.div
          className="absolute inset-0 border border-white/10 rounded-2xl"
          animate={{
            boxShadow: highlight ? [
              "0 0 0 0 rgba(255, 255, 255, 0.1)",
              "0 0 8px 2px rgba(255, 255, 255, 0.2)",
              "0 0 0 0 rgba(255, 255, 255, 0.1)"
            ] : [
              "0 0 0 0 rgba(255, 255, 255, 0.05)",
              "0 0 4px 0 rgba(255, 255, 255, 0.1)",
              "0 0 0 0 rgba(255, 255, 255, 0.05)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Plan badge for highlight */}
      {highlight && (
        <motion.div 
          className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl px-4 py-1 rounded-full text-sm font-medium text-white border border-white/10 z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Most Popular
        </motion.div>
      )}
      
      <div className="p-8 relative z-1">
        {/* Icon and name */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-4">
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-xl font-bold mb-2 text-white">
            {name}
          </h3>
          
          <p className="text-white/70 h-12">
            {description}
          </p>
        </div>
        
        {/* Price */}
        <div className="text-center mb-8 relative">
          {isAnnual && monthlyPrice > 0 && (
            <motion.div 
              className="absolute -right-2 -top-2 bg-gradient-to-r from-green-500/20 to-green-500/10 px-2 py-1 rounded-full text-xs text-white font-medium border border-white/10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Save 20%
            </motion.div>
          )}
          <div className="text-4xl font-bold mb-2 relative inline-flex">
            <span className="text-sm absolute top-0 left-[-12px] text-white/70">$</span>
            <span className="text-white">{monthlyPrice}</span>
          </div>
          <div className="text-sm text-white/70">
            per {isAnnual ? 'year' : 'month'}
          </div>
          {isAnnual && monthlyPrice > 0 && (
            <div className="text-sm mt-2 text-white/70">
              ${(monthlyPrice / 12).toFixed(2)} / month, billed annually
            </div>
          )}
        </div>
        
        {/* CTA Button */}
        {isBasicPlan ? (
          <DownloadButton variant="compact" />
        ) : (
          <motion.button 
            className="w-full py-3 rounded-lg mb-8 transition-all flex items-center justify-center gap-2 relative bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 text-white border border-white/10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ComingSoon className="absolute -top-3 -left-3" />
            Get Started
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        )}
        
        {/* Features list */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex items-start ${
                feature.included 
                  ? 'text-white' 
                  : 'text-white/40'
              }`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + (index * 0.05) }}
              viewport={{ once: true }}
            >
              <div className={`flex-shrink-0 w-5 h-5 mr-3 mt-0.5 flex items-center justify-center ${
                feature.included 
                  ? 'text-black bg-white rounded-full' 
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
      </div>
    </motion.div>
  );
};

export default PricingPlanCard;
