
import React from "react";
import { Shield } from "lucide-react";
import DocLayout from "./DocLayout";

const SecurityDocs = () => {
  return (
    <DocLayout title="Security & Privacy" icon={Shield}>
      <div className="space-y-8">
        <div className="glass-panel p-8">
          <h2 className="text-2xl font-semibold mb-6">Security Features</h2>
          
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-medium mb-3">End-to-End Encryption</h3>
              <p className="text-gray-300">
                Learn about our state-of-the-art encryption measures that protect your data 
                at rest and in transit.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium mb-3">Password Protection</h3>
              <p className="text-gray-300">
                Understanding our password policies and best practices for securing your account.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium mb-3">Secure Sharing</h3>
              <p className="text-gray-300">
                How to safely share clipboard content with team members while maintaining security.
              </p>
            </section>
          </div>
        </div>
      </div>
    </DocLayout>
  );
};

export default SecurityDocs;
