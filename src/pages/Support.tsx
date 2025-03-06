
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InteractiveBackground from "@/components/landing/InteractiveBackground";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <InteractiveBackground />
      <Header />
      <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-8">Support</h1>
          <p className="text-center text-gray-400 max-w-2xl mx-auto">
            Coming soon! Our support resources and contact information will be available here.
          </p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
