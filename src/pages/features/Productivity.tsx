
import React from "react";
import { Rocket } from "lucide-react";
import FeatureDetailLayout from "./FeatureDetailLayout";

const Productivity = () => {
  return (
    <FeatureDetailLayout
      title="Boost Productivity"
      subtitle="Smart templates and keyboard shortcuts accelerate your workflow"
      icon={Rocket}
    >
      <div className="py-12 text-center">
        <p className="text-gray-400">Detailed information about productivity features coming soon.</p>
      </div>
    </FeatureDetailLayout>
  );
};

export default Productivity;
