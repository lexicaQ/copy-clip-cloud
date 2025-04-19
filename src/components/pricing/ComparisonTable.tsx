
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

interface Feature {
  name: string;
  description: string;
  basic: boolean;
  pro: boolean;
  enterprise: boolean;
}

const features: Feature[] = [
  {
    name: "Clipboard History",
    description: "Store and access your clipboard history",
    basic: true,
    pro: true,
    enterprise: true,
  },
  {
    name: "Maximum History Size",
    description: "Amount of clipboard items you can store",
    basic: true,
    pro: true,
    enterprise: true,
  },
  {
    name: "History Retention",
    description: "How long we keep your clipboard history",
    basic: true,
    pro: true,
    enterprise: true,
  },
  {
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
    pro: true,
    enterprise: true,
  },
  {
    name: "Data Encryption",
    description: "Secure your clipboard content",
    basic: true,
    pro: true,
    enterprise: true,
  },
  {
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

const ComparisonTable = () => {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-black/5 backdrop-blur-xl">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-white/5">
            <TableRow className="hover:bg-white/5">
              <TableHead className="w-[300px] text-white">Features</TableHead>
              <TableHead className="text-center text-white">Basic</TableHead>
              <TableHead className="text-center text-white">Pro</TableHead>
              <TableHead className="text-center text-white">Enterprise</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((feature, index) => (
              <TableRow key={index} className="hover:bg-white/5 border-white/10">
                <TableCell className="font-medium text-white">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex items-center gap-2 cursor-help">
                        {feature.name}
                        <Info className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-black text-white border border-white/10">
                        <p>{feature.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
                <TableCell className="text-center">
                  {feature.basic ? (
                    feature.name === "Maximum History Size" ? (
                      <span className="text-white">100 items</span>
                    ) : feature.name === "History Retention" ? (
                      <span className="text-white">7 days</span>
                    ) : feature.name === "Data Encryption" ? (
                      <span className="text-white">Standard</span>
                    ) : (
                      <Check className="mx-auto h-4 w-4 text-white" />
                    )
                  ) : (
                    <span className="text-gray-600">-</span>
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {feature.pro ? (
                    feature.name === "Maximum History Size" ? (
                      <span className="text-white">Unlimited</span>
                    ) : feature.name === "History Retention" ? (
                      <span className="text-white">30 days</span>
                    ) : feature.name === "Data Encryption" ? (
                      <span className="text-white">Advanced</span>
                    ) : (
                      <Check className="mx-auto h-4 w-4 text-white" />
                    )
                  ) : (
                    <span className="text-gray-600">-</span>
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {feature.enterprise ? (
                    feature.name === "Maximum History Size" ? (
                      <span className="text-white">Unlimited</span>
                    ) : feature.name === "History Retention" ? (
                      <span className="text-white">Unlimited</span>
                    ) : feature.name === "Data Encryption" ? (
                      <span className="text-white">Military-grade</span>
                    ) : (
                      <Check className="mx-auto h-4 w-4 text-white" />
                    )
                  ) : (
                    <span className="text-gray-600">-</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ComparisonTable;
