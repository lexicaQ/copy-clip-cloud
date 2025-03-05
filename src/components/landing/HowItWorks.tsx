
import React from "react";
import { motion } from "framer-motion";
import { Clipboard, Cloud, Shield, Laptop } from "lucide-react";

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
  delay?: number;
}

const Step = ({ number, title, description, icon: Icon, delay = 0 }: StepProps) => {
  return (
    <motion.div 
      className="flex flex-col md:flex-row items-start md:items-center gap-4 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay }}
      viewport={{ once: true }}
    >
      <div className="w-14 h-14 rounded-full gradient-bg-blue flex items-center justify-center flex-shrink-0 z-10">
        <Icon className="w-6 h-6 text-white" />
      </div>
      
      <div className="flex-grow glass-panel p-6 md:ml-4">
        <div className="flex items-center mb-2">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
            <span className="text-sm font-bold">{number}</span>
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
      
      {number < 4 && (
        <div className="absolute left-7 top-14 bottom-0 w-0.5 h-[calc(100%+1rem)] bg-gradient-to-b from-white/20 to-transparent z-0 hidden md:block" />
      )}
    </motion.div>
  );
};

const steps = [
  {
    number: 1,
    title: "Install CopyClipCloud",
    description: "Download and install CopyClipCloud on your Mac. The setup process takes less than a minute.",
    icon: Laptop
  },
  {
    number: 2,
    title: "Copy as Usual",
    description: "Use copy and paste as you normally would. CopyClipCloud works in the background, saving everything you copy.",
    icon: Clipboard
  },
  {
    number: 3,
    title: "Access Anywhere",
    description: "Your clipboard history is automatically synced to the cloud and available on all your devices.",
    icon: Cloud
  },
  {
    number: 4,
    title: "Stay Secure",
    description: "Rest easy knowing your data is protected with end-to-end encryption at all times.",
    icon: Shield
  }
];

const HowItWorks = () => {
  return (
    <motion.div 
      className="mt-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-2xl font-bold text-center mb-2 text-gradient-green"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        How It Works
      </motion.h2>
      
      <motion.p 
        className="text-gray-400 text-center mb-10 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        Get started with CopyClipCloud in just a few simple steps
      </motion.p>

      <div className="space-y-8 max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <Step 
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
            icon={step.icon}
            delay={0.5 + index * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default HowItWorks;
