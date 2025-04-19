
import React from "react";
import { Search as SearchIcon } from "lucide-react";
import FeatureDetailLayout from "./FeatureDetailLayout";

const Search = () => {
  return (
    <FeatureDetailLayout
      title="Intelligent Search"
      subtitle="Retrieve any clipboard item instantly with powerful search and filtering"
      icon={SearchIcon}
    >
      <div className="py-12 text-center">
        <p className="text-gray-400">Detailed information about search features coming soon.</p>
      </div>
    </FeatureDetailLayout>
  );
};

export default Search;
