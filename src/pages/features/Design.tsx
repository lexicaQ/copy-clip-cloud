
import React from "react";
import { Award } from "lucide-react";
import FeatureDetailLayout from "./FeatureDetailLayout";

const Design = () => {
  return (
    <FeatureDetailLayout
      title="Award-Winning Design"
      subtitle="Intuitive interface that has won multiple design awards for its usability"
      icon={Award}
    >
      <div className="py-12 text-center">
        <p className="text-gray-400">Detailed information about design features coming soon.</p>
      </div>
    </FeatureDetailLayout>
  );
};

export default Design;
