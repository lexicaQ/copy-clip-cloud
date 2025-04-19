
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Eye, Lock, Database, FileCheck, Key, AlertCircle, Server, User, Globe, Calendar } from "lucide-react";

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

      {/* Background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
        <motion.div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <main className="pt-32 pb-24 px-4 max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Privacy Policy</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At CopyClipCloud, your privacy is our priority. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
          </p>
          <p className="text-md text-gray-500 mt-4">
            Last Updated: April 19, 2025
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Core Privacy Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PrivacyFeature
              title="End-to-End Encryption"
              description="All your clipboard data is encrypted directly on your device before transmission. No one can access your clipboard contents, not even our team. Your data remains private at all times."
              icon={Lock}
            />
            <PrivacyFeature
              title="Minimal Data Collection"
              description="We adhere to data minimization principles, collecting only what's necessary to provide our services. We don't build profiles of our users or collect data for purposes beyond core functionality."
              icon={Eye}
            />
            <PrivacyFeature
              title="Local-First Processing"
              description="Whenever possible, data processing happens locally on your device. Cloud synchronization is optional, encrypted, and only occurs with your explicit consent."
              icon={Database}
            />
            <PrivacyFeature
              title="Transparency & Control"
              description="We provide clear information about our data practices and give you meaningful control over your data. Our privacy policy is written in clear language without legal jargon."
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
          <div className="mb-8 flex items-center">
            <div className="p-2 rounded-lg bg-white/10 mr-4">
              <FileCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Privacy Policy</h2>
          </div>

          <div className="space-y-8 text-gray-300">
            <div>
              <h3 className="text-xl font-medium mb-3">1. Information We Collect</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium flex items-center mb-2">
                    <User className="w-4 h-4 mr-2" />
                    Account Information
                  </h4>
                  <p className="text-gray-400 leading-relaxed pl-6">
                    When you create an account, we collect your email address, name, and password (which is stored in a secure, hashed format). This information is necessary to authenticate you and provide access to your account.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium flex items-center mb-2">
                    <Database className="w-4 h-4 mr-2" />
                    Clipboard Data
                  </h4>
                  <p className="text-gray-400 leading-relaxed pl-6">
                    If you enable cloud synchronization, we store your encrypted clipboard entries. Important: This data is encrypted on your device before transmission, and we don't possess the decryption keys. Only your authenticated devices can decrypt this information.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium flex items-center mb-2">
                    <Server className="w-4 h-4 mr-2" />
                    Usage Data
                  </h4>
                  <p className="text-gray-400 leading-relaxed pl-6">
                    We collect anonymous usage statistics including feature usage patterns, app performance metrics, and error logs. This data is aggregated and not linked to your identity, helping us improve the app's functionality and stability.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium flex items-center mb-2">
                    <Globe className="w-4 h-4 mr-2" />
                    Device Information
                  </h4>
                  <p className="text-gray-400 leading-relaxed pl-6">
                    We collect information about your device type, operating system version, unique device identifiers, and network information. This helps us optimize the app for your device and troubleshoot technical issues.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">2. How We Use Your Information</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="space-y-3 text-gray-400 list-disc pl-6">
                <li>
                  <strong>Providing and improving our services:</strong> To operate, maintain, and enhance the functionality and features of CopyClipCloud.
                </li>
                <li>
                  <strong>Synchronization:</strong> To enable clipboard synchronization between your devices when you enable this feature.
                </li>
                <li>
                  <strong>Account management:</strong> To authenticate users, process subscriptions, and provide customer support.
                </li>
                <li>
                  <strong>Communication:</strong> To send administrative messages, updates, security alerts, and support messages.
                </li>
                <li>
                  <strong>Analytics and improvement:</strong> To understand how users interact with our application, identify trends, and improve our services.
                </li>
                <li>
                  <strong>Security:</strong> To detect, prevent, and address technical issues, security breaches, and fraudulent activities.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">3. Data Security</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                We implement robust security measures to protect your personal information:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-2">End-to-End Encryption</h4>
                  <p className="text-sm text-gray-400">
                    Your clipboard data is encrypted on your device using AES-256 encryption before being transmitted to our servers. We don't possess the decryption keys, which means we cannot access your clipboard contents.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Secure Data Transmission</h4>
                  <p className="text-sm text-gray-400">
                    All data transmitted between your device and our servers uses TLS/SSL encryption to prevent interception during transit.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Access Controls</h4>
                  <p className="text-sm text-gray-400">
                    We maintain strict access controls for our systems and databases. Only authorized personnel with specific job requirements can access systems containing user data.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Regular Security Audits</h4>
                  <p className="text-sm text-gray-400">
                    We conduct regular security assessments, vulnerability scanning, and penetration testing to identify and address potential security risks.
                  </p>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                While we implement safeguards, no method of transmission over the Internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal information but cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">4. Data Sharing and Disclosure</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:
              </p>
              
              <ul className="space-y-3 text-gray-400 list-disc pl-6">
                <li>
                  <strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you. These providers have access to your information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> We may disclose information if required by law, regulation, legal process, or governmental request.
                </li>
                <li>
                  <strong>Business Transfers:</strong> If CopyClipCloud is involved in a merger, acquisition, or sale of all or a portion of its assets, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our website of any change in ownership or uses of your personal information.
                </li>
                <li>
                  <strong>Protection of Rights:</strong> We may disclose information to protect the safety, rights, or property of CopyClipCloud, our users, or others.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share information with third parties when you have given us your consent to do so.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">5. Your Rights and Choices</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                You have several rights regarding your personal information:
              </p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-lg font-medium mb-1">Access and Update</h4>
                  <p className="text-gray-400 leading-relaxed">
                    You can access and update your account information directly through the app settings. If you need assistance, you can contact our support team.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-1">Data Deletion</h4>
                  <p className="text-gray-400 leading-relaxed">
                    You can delete specific clipboard data within the app. If you wish to delete your account, you can do so in the app settings or by contacting our support team. When you delete your account, we will delete or anonymize your personal information within 30 days, except where we are required to maintain certain information for legal purposes.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-1">Data Portability</h4>
                  <p className="text-gray-400 leading-relaxed">
                    You can export your clipboard data through the app's export functionality, allowing you to obtain a copy of your data in a structured, commonly used, and machine-readable format.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-1">Communication Preferences</h4>
                  <p className="text-gray-400 leading-relaxed">
                    You can manage your communication preferences by updating your account settings or by following the unsubscribe instructions included in the emails we send.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">6. Children's Privacy</h3>
              <p className="text-gray-400 leading-relaxed">
                Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete such information as quickly as possible. If you believe that we might have any information from or about a child under 13, please contact us.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">7. International Data Transfers</h3>
              <p className="text-gray-400 leading-relaxed">
                Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. If you are located outside the United States and choose to provide information to us, please note that we transfer the information to the United States and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">8. Changes to This Privacy Policy</h3>
              <p className="text-gray-400 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. For significant changes, we will provide a more prominent notice, which may include an email notification. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">9. Contact Us</h3>
              <p className="text-gray-400 leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 pl-4 border-l-2 border-white/20">
                <p className="text-white">CopyClipCloud Support</p>
                <p className="text-gray-400">Email: privacy@copyclipcloud.com</p>
                <p className="text-gray-400">Address: 123 Privacy Avenue, Suite 456, San Francisco, CA 94105, USA</p>
              </div>
              <p className="text-gray-400 leading-relaxed mt-4">
                We will respond to your inquiry within 30 days.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="glass-panel p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-6 flex items-center">
            <div className="p-2 rounded-lg bg-white/10 mr-4">
              <Calendar className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Retention Periods</h2>
          </div>
          
          <p className="text-gray-400 leading-relaxed mb-6">
            We store different types of data for varying periods of time, depending on the purpose for which it was collected and our legal obligations:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 font-medium text-white">Data Type</th>
                  <th className="py-3 px-4 font-medium text-white">Retention Period</th>
                  <th className="py-3 px-4 font-medium text-white">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Account Information</td>
                  <td className="py-3 px-4">For as long as your account is active, plus 30 days after account deletion</td>
                  <td className="py-3 px-4">Account authentication and management</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Clipboard Data</td>
                  <td className="py-3 px-4">Until deleted by the user or 30 days after account deletion</td>
                  <td className="py-3 px-4">Syncing clipboard content between devices</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Payment Information</td>
                  <td className="py-3 px-4">As required by applicable tax and accounting laws (typically 7 years)</td>
                  <td className="py-3 px-4">Financial record-keeping and compliance</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Usage Data</td>
                  <td className="py-3 px-4">3 years (in aggregated form)</td>
                  <td className="py-3 px-4">Service improvement and analytics</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Support Communications</td>
                  <td className="py-3 px-4">2 years after the support case is closed</td>
                  <td className="py-3 px-4">Customer support reference and quality assurance</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 p-5 border border-white/10 rounded-lg bg-white/5">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 mr-3 mt-0.5 text-amber-300" />
              <div>
                <p className="text-amber-300 font-medium mb-2">Data Deletion Notice</p>
                <p className="text-gray-400 text-sm">
                  When data is deleted, it may remain in our backup systems for a limited period but will not be available for normal operations. We permanently delete or anonymize data according to the retention periods above unless a legal obligation requires us to retain it longer.
                </p>
              </div>
            </div>
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
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="px-6 py-3 bg-white text-black rounded-full inline-flex items-center hover:bg-opacity-90 transition-all"
            >
              <Key className="w-4 h-4 mr-2" />
              Contact Us
            </a>
            <a 
              href="/terms" 
              className="px-6 py-3 bg-white/10 text-white rounded-full inline-flex items-center hover:bg-white/20 transition-all"
            >
              Terms of Service
            </a>
            <a 
              href="/cookies" 
              className="px-6 py-3 bg-white/10 text-white rounded-full inline-flex items-center hover:bg-white/20 transition-all"
            >
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
