
import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import FeatureLayout from "./FeatureLayout";

const EndToEndEncryptionFeature = () => {
  return (
    <FeatureLayout
      title="End-to-End Encryption"
      subtitle="Keep your sensitive clipboard data secure with military-grade encryption, ensuring your information stays private across all your devices"
      icon={Shield}
      callToAction={{
        text: "Download Now",
        link: "/download"
      }}
    >
      <div className="space-y-24">
        {/* Feature Section 1 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="glass-panel p-8 lg:p-10 rounded-3xl h-[400px] flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Placeholder for an animated illustration */}
              <div className="w-64 h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center relative overflow-hidden border border-white/10">
                <Shield className="w-16 h-16 text-white/70" />
                <motion.div 
                  className="absolute inset-0 border-4 border-white/20 rounded-xl"
                  animate={{ 
                    boxShadow: ["0 0 0 0 rgba(255,255,255,0.3)", "0 0 0 10px rgba(255,255,255,0)"] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
              </div>
            </motion.div>
          </div>
          
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6"
            >
              <span className="text-gradient">Military-Grade Protection</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 leading-relaxed mb-6"
            >
              Your clipboard often contains sensitive information like passwords, personal data, and proprietary content. Our end-to-end encryption uses AES-256 encryption standards to ensure your data remains encrypted from the moment it's copied until it's pasted on another device.
            </motion.p>
            
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
            >
              {["AES-256 encryption standard", "Zero-knowledge architecture", "No plain-text data ever stored on servers", "Secure key management system"].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
        
        {/* Feature Section 2 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 lg:order-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6"
            >
              <span className="text-gradient">Cross-Device Security</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 leading-relaxed mb-6"
            >
              Whether you're syncing clipboard content between your laptop, phone, or tablet, our encryption ensures that your data remains secure in transit and at rest. Only authorized devices with your encryption keys can decrypt and access your clipboard data.
            </motion.p>
            
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
            >
              {["Secure device authorization", "Encrypted transit between devices", "Automatic key rotation", "Device management controls"].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
          
          <div className="glass-panel p-8 lg:p-10 rounded-3xl h-[400px] flex items-center justify-center order-1 lg:order-2">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Placeholder for an animated illustration */}
              <div className="relative flex items-center justify-center">
                <div className="w-16 h-24 bg-white/10 rounded-xl border border-white/20 absolute -left-20"></div>
                <div className="w-36 h-24 bg-white/10 rounded-xl border border-white/20"></div>
                <div className="w-20 h-28 bg-white/10 rounded-xl border border-white/20 absolute -right-20"></div>
                
                <motion.div 
                  className="absolute w-full h-full"
                  animate={{
                    background: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.1)", "rgba(255,255,255,0.02)"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Feature Section 3 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8"
          >
            <span className="text-gradient">Advanced Security Controls</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Biometric Verification",
                description: "Add an additional layer of security with fingerprint or facial recognition."
              },
              {
                title: "Auto-Expiry",
                description: "Set sensitive clipboard items to automatically expire after a defined period."
              },
              {
                title: "Remote Wipe",
                description: "Remotely clear clipboard history on any of your devices if lost or compromised."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass-panel p-6 rounded-xl border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </FeatureLayout>
  );
};

export default EndToEndEncryptionFeature;
