
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Eye, Lock, Database, FileCheck, Key } from "lucide-react";

const PrivacyFeature = ({ title, description, icon: Icon }) => (
  <motion.div
    className="glass-panel p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <div className="flex items-start space-x-4">
      <div className="p-2 rounded-xl bg-white/10 flex items-center justify-center">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  </motion.div>
);

const Privacy = () => {
  return (
    <div className="relative min-h-screen">
      <Header />

      <main className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Your Privacy Matters to Us</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We built CopyClipCloud from the ground up with strict privacy principles. Learn how we protect your data.
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Privacy Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PrivacyFeature
              title="End-to-End Encryption"
              description="All your data is encrypted directly on your device before transmission. No one can access it, not even us."
              icon={Lock}
            />
            <PrivacyFeature
              title="No Data Collection"
              description="We don't collect any personal data that isn't necessary for app functionality. No hidden trackers."
              icon={Eye}
            />
            <PrivacyFeature
              title="Local Processing"
              description="Your data is primarily processed on your device. Cloud synchronization is optional and always encrypted."
              icon={Database}
            />
            <PrivacyFeature
              title="Transparency"
              description="Our privacy policy is transparent and written in clear language. We explain exactly what happens with your data."
              icon={FileCheck}
            />
          </div>
        </motion.div>

        <motion.div
          className="glass-panel p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
          <div className="space-y-6 text-gray-300">
            <p>
              <strong>Effective Date:</strong> April 1, 2023
            </p>
            <p>
              At CopyClipCloud, we respect your privacy and understand the importance of protecting the data you entrust to us. This Privacy Policy describes how we collect, use, and disclose your data.
            </p>
            <p>
              <strong>What data we collect:</strong> We only collect data necessary for the functioning of our app. This includes account information (email, name) for account management and your encrypted clip data when you enable cloud synchronization.
            </p>
            <p>
              <strong>How we use your data:</strong> We use your data exclusively for providing, maintaining, and improving our services. Your clip data is only used for synchronization between your own devices.
            </p>
            <p>
              <strong>Data security:</strong> We employ state-of-the-art security measures to protect your data. All sensitive data is secured with end-to-end encryption.
            </p>
            <p>
              <strong>Your rights:</strong> You have the right to access, correct, or delete your data. You can close your account at any time, and all your data will be removed from our servers.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-white/10 mb-4">
            <Shield className="w-6 h-6 mr-2" />
            <span>Security by Design</span>
          </div>
          <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            If you have questions about how we handle your data, contact us anytime.
            We are transparent and open to your concerns.
          </p>
          <a 
            href="/contact" 
            className="px-6 py-3 bg-white text-black rounded-full inline-flex items-center hover:bg-opacity-90 transition-all"
          >
            <Key className="w-4 h-4 mr-2" />
            Contact Us
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
