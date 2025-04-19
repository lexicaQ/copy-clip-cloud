
import React from "react";
import { Cloud } from "lucide-react";
import FeatureDetailLayout from "./FeatureDetailLayout";

const Sync = () => {
  return (
    <FeatureDetailLayout
      title="Seamless Sync"
      subtitle="Work across all your devices with real-time synchronization of your clipboard data"
      icon={Cloud}
    >
      <div className="py-12 text-center">
        <p className="text-gray-400">Detailed information about sync features coming soon.</p>
      </div>
    </FeatureDetailLayout>
  );
};

export default Sync;
