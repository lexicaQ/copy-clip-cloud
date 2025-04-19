
import React from "react";
import { Shield } from "lucide-react";
import FeatureDetailLayout from "./FeatureDetailLayout";

const Security = () => {
  return (
    <FeatureDetailLayout
      title="Enhanced Security"
      subtitle="End-to-end encryption ensures your sensitive clipboard data stays protected"
      icon={Shield}
    >
      <div className="py-12 text-center">
        <p className="text-gray-400">Detailed information about security features coming soon.</p>
      </div>
    </FeatureDetailLayout>
  );
};

export default Security;
