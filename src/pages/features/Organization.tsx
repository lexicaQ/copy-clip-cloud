
import React from "react";
import { Clipboard } from "lucide-react";
import FeatureDetailLayout from "./FeatureDetailLayout";

const Organization = () => {
  return (
    <FeatureDetailLayout
      title="Content Organization"
      subtitle="AI-powered categorization keeps your clipboard items neatly organized"
      icon={Clipboard}
    >
      <div className="py-12 text-center">
        <p className="text-gray-400">Detailed information about organization features coming soon.</p>
      </div>
    </FeatureDetailLayout>
  );
};

export default Organization;
