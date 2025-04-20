
import React from "react";
import { Check, Info } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

interface Feature {
  name: string;
  description: string;
  basic: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
  category?: string;
}

interface PricingComparisonTableProps {
  isAnnual: boolean;
}

const PricingComparisonTable = ({ isAnnual }: PricingComparisonTableProps) => {
  const features: Feature[] = [
    {
      category: "Core Features",
      name: "Clipboard History",
      description: "Store and access your clipboard history",
      basic: true,
      pro: true,
      enterprise: true,
    },
    {
      name: "Maximum History Size",
      description: "Amount of clipboard items you can store",
      basic: "100 items",
      pro: "Unlimited",
      enterprise: "Unlimited",
    },
    {
      name: "History Retention",
      description: "How long we keep your clipboard history",
      basic: "7 days",
      pro: "30 days",
      enterprise: "Unlimited",
    },
    {
      category: "Sync & Organization",
      name: "Device Sync",
      description: "Sync your clipboard across multiple devices",
      basic: false,
      pro: true,
      enterprise: true,
    },
    {
      name: "AI Organization",
      description: "Smart content organization using AI",
      basic: false,
      pro: true,
      enterprise: true,
    },
    {
      name: "Custom Rules",
      description: "Create custom organization rules",
      basic: false,
      pro: "Limited",
      enterprise: "Advanced",
    },
    {
      category: "Security & Privacy",
      name: "Data Encryption",
      description: "Secure your clipboard content",
      basic: "Standard",
      pro: "Advanced",
      enterprise: "Military-grade",
    },
    {
      name: "Password Protection",
      description: "Protect your clipboard content with a password",
      basic: false,
      pro: true,
      enterprise: true,
    },
    {
      name: "Privacy Controls",
      description: "Control what data is synced and stored",
      basic: "Basic",
      pro: "Advanced",
      enterprise: "Custom",
    },
    {
      category: "Support & Teams",
      name: "Priority Support",
      description: "Get priority customer support",
      basic: false,
      pro: true,
      enterprise: true,
    },
    {
      name: "Team Management",
      description: "Manage team access and permissions",
      basic: false,
      pro: false,
      enterprise: true,
    },
    {
      name: "Custom API",
      description: "Access to custom integration API",
      basic: false,
      pro: false,
      enterprise: true,
    },
    {
      name: "Advanced Analytics",
      description: "Detailed usage statistics and insights",
      basic: false,
      pro: true,
      enterprise: true,
    },
    {
      name: "Dedicated Account Manager",
      description: "Personal support contact for your account",
      basic: false,
      pro: false,
      enterprise: true,
    },
  ];

  // Group features by category
  const getCategoryFeatures = () => {
    const result: { [key: string]: Feature[] } = {};
    let currentCategory = "";
    
    features.forEach(feature => {
      if (feature.category) {
        currentCategory = feature.category;
        result[currentCategory] = [];
      }
      
      if (currentCategory && !feature.category) {
        result[currentCategory].push(feature);
      }
    });
    
    return result;
  };
  
  const categoryFeatures = getCategoryFeatures();
  const categories = Object.keys(categoryFeatures);

  const pricing = {
    basic: { monthly: "0", annual: "0" },
    pro: { monthly: "3.99", annual: "39.99" },
    enterprise: { monthly: "7.99", annual: "79.99" }
  };

  return (
    <motion.div 
      className="rounded-xl overflow-hidden border border-white/10 backdrop-blur-xl bg-black/5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-white/10 bg-white/5">
              <TableHead className="w-[280px] py-6 text-white font-medium">Features</TableHead>
              <TableHead className="text-center py-6">
                <div className="flex flex-col items-center">
                  <span className="text-white font-medium text-lg">Basic</span>
                  <span className="text-white/70 text-sm mt-1">${pricing.basic[isAnnual ? 'annual' : 'monthly']}/{isAnnual ? 'year' : 'month'}</span>
                </div>
              </TableHead>
              <TableHead className="text-center py-6 bg-white/5">
                <div className="flex flex-col items-center">
                  <span className="text-white font-medium text-lg">Pro</span>
                  <span className="text-white/70 text-sm mt-1">${pricing.pro[isAnnual ? 'annual' : 'monthly']}/{isAnnual ? 'year' : 'month'}</span>
                  {isAnnual && <span className="text-xs text-green-400">Save 20%</span>}
                </div>
              </TableHead>
              <TableHead className="text-center py-6">
                <div className="flex flex-col items-center">
                  <span className="text-white font-medium text-lg">Enterprise</span>
                  <span className="text-white/70 text-sm mt-1">${pricing.enterprise[isAnnual ? 'annual' : 'monthly']}/{isAnnual ? 'year' : 'month'}</span>
                  {isAnnual && <span className="text-xs text-green-400">Save 20%</span>}
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category, categoryIndex) => (
              <React.Fragment key={category}>
                <TableRow className="bg-white/5 border-white/10">
                  <TableCell colSpan={4} className="font-semibold text-white py-4">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * categoryIndex }}
                    >
                      {category}
                    </motion.div>
                  </TableCell>
                </TableRow>
                
                {categoryFeatures[category].map((feature, index) => (
                  <TableRow key={`${category}-${index}`} className="border-white/10 hover:bg-white/5">
                    <TableCell className="font-medium text-white py-4">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * (index + 1) }}
                      >
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="flex items-center gap-2 cursor-help text-left">
                              {feature.name}
                              <Info className="h-4 w-4 text-white/40" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-black/90 text-white border border-white/10 backdrop-blur-xl shadow-xl p-3 max-w-xs">
                              <p>{feature.description}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </motion.div>
                    </TableCell>
                    
                    <TableCell className="text-center py-4">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * (index + 1) + 0.1 }}
                        className="flex justify-center"
                      >
                        {typeof feature.basic === 'string' ? (
                          <span className="text-white bg-white/5 px-3 py-1 rounded-full text-sm">{feature.basic}</span>
                        ) : feature.basic ? (
                          <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-white" />
                          </div>
                        ) : (
                          <span className="text-white/30">—</span>
                        )}
                      </motion.div>
                    </TableCell>
                    
                    <TableCell className="text-center py-4 bg-white/5">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * (index + 1) + 0.2 }}
                        className="flex justify-center"
                      >
                        {typeof feature.pro === 'string' ? (
                          <span className="text-white bg-white/10 px-3 py-1 rounded-full text-sm">{feature.pro}</span>
                        ) : feature.pro ? (
                          <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-white" />
                          </div>
                        ) : (
                          <span className="text-white/30">—</span>
                        )}
                      </motion.div>
                    </TableCell>
                    
                    <TableCell className="text-center py-4">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * (index + 1) + 0.3 }}
                        className="flex justify-center"
                      >
                        {typeof feature.enterprise === 'string' ? (
                          <span className="text-white bg-white/5 px-3 py-1 rounded-full text-sm">{feature.enterprise}</span>
                        ) : feature.enterprise ? (
                          <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-white" />
                          </div>
                        ) : (
                          <span className="text-white/30">—</span>
                        )}
                      </motion.div>
                    </TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
};

export default PricingComparisonTable;
