
import React from "react";
import { Zap } from "lucide-react";
import FeatureDetailLayout from "./FeatureDetailLayout";

const Focus = () => {
  return (
    <FeatureDetailLayout
      title="Distraction-Free Work"
      subtitle="Focus on your work with a clean, minimal interface designed for professionals"
      icon={Zap}
    >
      <div className="py-12 text-center">
        <p className="text-gray-400">Detailed information about focus features coming soon.</p>
      </div>
    </FeatureDetailLayout>
  );
};

export default Focus;
