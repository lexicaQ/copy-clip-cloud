
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
    description: "Access and manage your clipboard history",
    basic: true,
    pro: true,
    enterprise: true,
  },
  {
    name: "Device Sync",
    description: "Sync across multiple devices",
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
    name: "History Retention",
    description: "Extended history retention period",
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
];

const ComparisonTable = () => {
  return (
    <div className="rounded-xl border bg-black/5 backdrop-blur-xl">
      <Table>
        <TableHeader className="bg-white/5">
          <TableRow>
            <TableHead className="w-[300px]">Features</TableHead>
            <TableHead className="text-center">Basic</TableHead>
            <TableHead className="text-center">Pro</TableHead>
            <TableHead className="text-center">Enterprise</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="flex items-center gap-2">
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
                {feature.basic && <Check className="mx-auto h-4 w-4 text-green-500" />}
              </TableCell>
              <TableCell className="text-center">
                {feature.pro && <Check className="mx-auto h-4 w-4 text-green-500" />}
              </TableCell>
              <TableCell className="text-center">
                {feature.enterprise && <Check className="mx-auto h-4 w-4 text-green-500" />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ComparisonTable;
