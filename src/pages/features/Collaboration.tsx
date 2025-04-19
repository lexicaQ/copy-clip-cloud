
import React from "react";
import { Users } from "lucide-react";
import FeatureDetailLayout from "./FeatureDetailLayout";

const Collaboration = () => {
  return (
    <FeatureDetailLayout
      title="Team Collaboration"
      subtitle="Share clipboard items with your team and collaborate on projects effortlessly"
      icon={Users}
    >
      <div className="py-12 text-center">
        <p className="text-gray-400">Detailed information about collaboration features coming soon.</p>
      </div>
    </FeatureDetailLayout>
  );
};

export default Collaboration;
