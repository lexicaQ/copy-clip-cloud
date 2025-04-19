
import React from "react";
import { Share } from "lucide-react";
import FeatureDetailLayout from "./FeatureDetailLayout";

const Sharing = () => {
  return (
    <FeatureDetailLayout
      title="Seamless Sharing"
      subtitle="Share clipboard content with team members securely without switching applications"
      icon={Share}
    >
      <div className="py-12 text-center">
        <p className="text-gray-400">Detailed information about sharing features coming soon.</p>
      </div>
    </FeatureDetailLayout>
  );
};

export default Sharing;
