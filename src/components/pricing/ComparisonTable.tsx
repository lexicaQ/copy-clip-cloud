
import React from "react";
import { Check, Info, Minus } from "lucide-react";
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
  category: string;
}

const features: Feature[] = [
  {
    name: "Clipboard History",
    description: "Access and manage your clipboard history",
    basic: "50 items",
    pro: "Unlimited",
    enterprise: "Unlimited",
    category: "Core Features"
  },
  {
    name: "Device Sync",
    description: "Sync across multiple devices",
    basic: false,
    pro: "Up to 5 devices",
    enterprise: "Unlimited devices",
    category: "Core Features"
  },
  {
    name: "AI Organization",
    description: "Smart content organization using AI",
    basic: false,
    pro: true,
    enterprise: "Advanced",
    category: "AI Features"
  },
  {
    name: "Custom Rules",
    description: "Create custom organization rules",
    basic: false,
    pro: "Basic rules",
    enterprise: "Advanced rules",
    category: "AI Features"
  },
  {
    name: "History Retention",
    description: "Extended history retention period",
    basic: "7 days",
    pro: "30 days",
    enterprise: "Unlimited",
    category: "Storage"
  },
  {
    name: "Priority Support",
    description: "Get priority customer support",
    basic: false,
    pro: "Email support",
    enterprise: "24/7 priority",
    category: "Support"
  },
  {
    name: "Team Management",
    description: "Manage team access and permissions",
    basic: false,
    pro: false,
    enterprise: true,
    category: "Team Features"
  },
  {
    name: "Custom API",
    description: "Access to custom integration API",
    basic: false,
    pro: false,
    enterprise: true,
    category: "Integration"
  },
  {
    name: "Export Options",
    description: "Export your clipboard data",
    basic: "Basic CSV",
    pro: "Multiple formats",
    enterprise: "All formats + API",
    category: "Integration"
  },
  {
    name: "Security Level",
    description: "Level of security and encryption",
    basic: "Standard",
    pro: "Advanced",
    enterprise: "Enterprise-grade",
    category: "Security"
  },
];

// Group features by category
const groupedFeatures = features.reduce((acc, feature) => {
  if (!acc[feature.category]) {
    acc[feature.category] = [];
  }
  acc[feature.category].push(feature);
  return acc;
}, {} as Record<string, Feature[]>);

const ComparisonTable = () => {
  return (
    <motion.div 
      className="rounded-xl border border-white/10 bg-black/5 backdrop-blur-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Table>
        <TableHeader className="bg-white/5">
          <TableRow>
            <TableHead className="w-[300px] font-medium text-lg">Features</TableHead>
            <TableHead className="text-center font-medium text-lg">Basic</TableHead>
            <TableHead className="text-center font-medium text-lg">Pro</TableHead>
            <TableHead className="text-center font-medium text-lg">Enterprise</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(groupedFeatures).map(([category, categoryFeatures], categoryIndex) => (
            <React.Fragment key={category}>
              {/* Category header */}
              <TableRow className="bg-white/5">
                <TableCell colSpan={4} className="font-semibold text-white">
                  {category}
                </TableCell>
              </TableRow>
              
              {/* Features within category */}
              {categoryFeatures.map((feature, index) => (
                <TableRow key={`${category}-${index}`} className="hover:bg-white/5 transition-colors">
                  <TableCell className="font-medium">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="flex items-center gap-2 text-left">
                          {feature.name}
                          <Info className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{feature.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                  <TableCell className="text-center">
                    {typeof feature.basic === 'string' ? (
                      <span className="text-sm text-gray-300">{feature.basic}</span>
                    ) : feature.basic ? (
                      <Check className="mx-auto h-4 w-4 text-green-500" />
                    ) : (
                      <Minus className="mx-auto h-4 w-4 text-gray-500" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {typeof feature.pro === 'string' ? (
                      <span className="text-sm text-gray-300">{feature.pro}</span>
                    ) : feature.pro ? (
                      <Check className="mx-auto h-4 w-4 text-green-500" />
                    ) : (
                      <Minus className="mx-auto h-4 w-4 text-gray-500" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {typeof feature.enterprise === 'string' ? (
                      <span className="text-sm text-gray-300">{feature.enterprise}</span>
                    ) : feature.enterprise ? (
                      <Check className="mx-auto h-4 w-4 text-green-500" />
                    ) : (
                      <Minus className="mx-auto h-4 w-4 text-gray-500" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
};

export default ComparisonTable;
