
import React from "react";
import { Shield } from "lucide-react";
import FeatureDetailLayout from "./FeatureDetailLayout";

const FeaturePrivacy = () => {
  return (
    <FeatureDetailLayout
      title="Privacy First"
      subtitle="Your data is encrypted and never shared with third parties"
      icon={Shield}
    >
      <div className="py-12 text-center">
        <p className="text-gray-400">Detailed information about privacy features coming soon.</p>
      </div>
    </FeatureDetailLayout>
  );
};

export default FeaturePrivacy;
