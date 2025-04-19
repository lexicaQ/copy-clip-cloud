
import React from "react";
import { motion } from "framer-motion";
import { Timer, Clock, ArrowRight, CheckCircle } from "lucide-react";
import FeatureDetailLayout from "./FeatureDetailLayout";
import { Button } from "@/components/ui/button";

const TimeSaving = () => {
  return (
    <FeatureDetailLayout
      title="Save Valuable Time"
      subtitle="Stop retyping the same information and reclaim hours of your workday with intelligent clipboard management"
      icon={Timer}
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-3xl font-bold mb-6">Never Type the Same Thing Twice</h2>
          <p className="text-gray-300 mb-6">
            Studies show that professionals spend an average of 2.5 hours a week retyping the same information. 
            CopyClipCloud eliminates this redundancy by giving you instant access to your clipboard history.
          </p>
          
          <ul className="space-y-4 mb-8">
            {[
              "Access your complete clipboard history with a simple keystroke",
              "Quickly find any copied text with powerful search functionality",
              "Organize frequently used snippets into custom collections",
              "Set up templates for commonly used text patterns"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
          
          <Button className="bg-blue-600 hover:bg-blue-700">
            Try It Free <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        
        <div className="bg-black/20 border border-white/10 rounded-xl overflow-hidden p-1">
          <div className="bg-gradient-to-br from-black/60 to-black/40 rounded-lg p-6 h-full">
            <div className="bg-black/30 p-8 rounded-lg border border-white/5 flex items-center justify-center h-full">
              <Clock className="w-24 h-24 text-white/60" />
            </div>
          </div>
        </div>
      </motion.section>
      
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-black/20 border border-white/10 rounded-xl p-8"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">How Much Time Can You Save?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { value: "2.5", unit: "Hours", desc: "saved per week for the average professional" },
            { value: "10+", unit: "Minutes", desc: "saved daily through clipboard history access" },
            { value: "120+", unit: "Hours", desc: "saved annually for regular users" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              className="bg-black/40 border border-white/5 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <p className="text-4xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-xl text-gray-400 mb-4">{stat.unit}</p>
              <p className="text-sm text-gray-500">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Start Saving Time Today</h2>
          <p className="text-gray-300 mb-10">
            Join thousands of professionals who have reclaimed their time with CopyClipCloud's 
            advanced clipboard management. Free up your attention for the work that truly matters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 h-auto rounded-full">
              Download Now
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/10 px-8 py-6 h-auto rounded-full">
              Learn More
            </Button>
          </div>
        </div>
      </motion.section>
    </FeatureDetailLayout>
  );
};

export default TimeSaving;
