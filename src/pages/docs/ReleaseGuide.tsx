
import React from "react";
import { FileText } from "lucide-react";
import DocLayout from "./DocLayout";

const ReleaseGuide = () => {
  return (
    <DocLayout 
      title="Release Guide" 
      icon={FileText}
      description="Learn about our latest updates and changes"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Latest Release</h2>
          <div className="glass-panel p-6 rounded-lg border border-white/10">
            <p className="text-gray-300 mb-4">
              Version 2.5.0 brings significant improvements to performance and user experience:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-white/30 mt-2 mr-3" />
                Enhanced clipboard synchronization across devices
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-white/30 mt-2 mr-3" />
                Improved search functionality with better results ranking
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-white/30 mt-2 mr-3" />
                New keyboard shortcuts for faster navigation
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Previous Releases</h2>
          <div className="space-y-4">
            {[
              { version: "2.4.0", date: "March 2025", description: "Added smart categorization features" },
              { version: "2.3.0", date: "February 2025", description: "Enhanced security protocols" },
              { version: "2.2.0", date: "January 2025", description: "Improved cloud sync reliability" }
            ].map((release) => (
              <div key={release.version} className="glass-panel p-4 rounded-lg border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Version {release.version}</h3>
                  <span className="text-sm text-gray-400">{release.date}</span>
                </div>
                <p className="text-gray-300">{release.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DocLayout>
  );
};

export default ReleaseGuide;
