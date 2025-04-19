
import React from "react";
import { CheckCircle } from "lucide-react";
import FeatureDetailLayout from "./FeatureDetailLayout";

const Reliability = () => {
  return (
    <FeatureDetailLayout
      title="Reliable & Stable"
      subtitle="Built with reliability in mind, ensuring your clipboard is always available when you need it"
      icon={CheckCircle}
    >
      <div className="py-12 text-center">
        <p className="text-gray-400">Detailed information about reliability features coming soon.</p>
      </div>
    </FeatureDetailLayout>
  );
};

export default Reliability;
