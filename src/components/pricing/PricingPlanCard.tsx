import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { ComingSoon } from "@/components/ui/coming-soon";
import { Button } from "@/components/ui/button";

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
  const monthlyPrice = Number(price);
  const isBasicPlan = name === "Basic";
  const yearlyPrice = monthlyPrice * 12;
  const monthlySavings = isAnnual ? ((monthlyPrice * 12) * 0.2) / 12 : 0;
  
  return (
    <motion.div
      className={`group relative rounded-2xl overflow-visible backdrop-blur-lg transition-all duration-300 hover:translate-y-[-5px] border ${
        highlight 
          ? 'border-white/20 shadow-lg shadow-white/5' 
          : 'border-white/10'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 ${
        highlight 
          ? 'bg-gradient-to-br from-white/8 to-white/2'
          : 'bg-gradient-to-br from-white/4 to-white/1'
      } z-0 rounded-2xl`} />
      
      {/* Plan badge for highlight - moved higher up */}
      {highlight && (
        <motion.div 
          className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl px-4 py-1.5 rounded-full text-sm font-medium text-white border border-white/20 z-20 shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Most Popular
        </motion.div>
      )}
      
      <div className="p-8 relative z-10">
        {/* Icon and name */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-4 border border-white/10">
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
              className="absolute -right-2 -top-6 bg-green-500/20 px-2 py-1 rounded-full text-xs text-white font-medium border border-green-500/30"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Save ${(yearlyPrice * 0.2).toFixed(2)} yearly
            </motion.div>
          )}
          
          <div className="flex items-baseline justify-center mb-1">
            <span className="text-sm text-white/70 mr-1">$</span>
            <span className="text-4xl font-bold text-white">{price}</span>
            <span className="text-sm text-white/70 ml-1">/{isAnnual ? 'year' : 'month'}</span>
          </div>
          
          {monthlyPrice > 0 && (
            <div className="text-sm text-white/70">
              {isAnnual ? (
                <>
                  ${(monthlyPrice / 12).toFixed(2)} per month
                  <span className="text-green-400 ml-2">
                    (save ${monthlySavings.toFixed(2)}/mo)
                  </span>
                </>
              ) : (
                <>${yearlyPrice.toFixed(2)} billed yearly</>
              )}
            </div>
          )}
        </div>
        
        {/* CTA Button - Simplified for Basic plan */}
        {isBasicPlan ? (
          <div className="mb-8">
            <Button 
              className="w-full py-6 bg-gradient-to-r from-white/15 to-white/5 hover:from-white/20 hover:to-white/10 text-white border border-white/10 rounded-xl transition-all duration-300"
            >
              Download App
            </Button>
          </div>
        ) : (
          <motion.div
            className="mb-8 relative"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              className="w-full py-6 bg-gradient-to-r from-white/15 to-white/5 hover:from-white/20 hover:to-white/10 text-white border border-white/10 rounded-xl transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
            {/* Coming Soon badge - moved to top right corner with higher z-index */}
            <div className="absolute -top-4 -right-4 z-30">
              <ComingSoon />
            </div>
          </motion.div>
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
              <div className={`flex-shrink-0 w-5 h-5 mr-3 mt-0.5 ${
                feature.included 
                  ? 'text-black bg-white rounded-full flex items-center justify-center' 
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
