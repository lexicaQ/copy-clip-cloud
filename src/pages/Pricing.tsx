
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Pricing</h1>
        <p className="text-center text-gray-400 max-w-2xl mx-auto">
          This page will show pricing options for CopyClipCloud.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
