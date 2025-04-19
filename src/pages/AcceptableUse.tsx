
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FileText, AlertTriangle, Shield, Users, Server, Clock, MessageSquare, Check } from "lucide-react";

const AcceptableUse = () => {
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
            <span className="text-gradient">Acceptable Use Policy</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            This Acceptable Use Policy outlines permitted and prohibited uses of CopyClipCloud's services to ensure a safe, respectful, and lawful environment for all users.
          </p>
          <p className="text-md text-gray-500 mt-4">
            Last Updated: April 19, 2025
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="glass-panel p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-white/10 mr-3">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium">Our Commitment</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We're committed to providing a secure and respectful platform for all users. This policy helps ensure our services are used appropriately and legally while protecting the rights and experiences of our community.
            </p>
          </motion.div>

          <motion.div
            className="glass-panel p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-white/10 mr-3">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium">Your Responsibility</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              By using CopyClipCloud, you agree to use our services in accordance with this policy. You are responsible for all content you store, sync, or share through our platform, and for ensuring that your use complies with applicable laws.
            </p>
          </motion.div>

          <motion.div
            className="glass-panel p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-white/10 mr-3">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium">Violations</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Violations of this policy may result in actions ranging from a warning to immediate account termination, depending on the severity and frequency of the violation. We reserve the right to report illegal activities to relevant authorities.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="glass-panel p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-8 flex items-center">
            <div className="p-2 rounded-lg bg-white/10 mr-4">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Acceptable Use Policy</h2>
          </div>

          <div className="space-y-8 text-gray-300">
            <div>
              <h3 className="text-xl font-medium mb-4">1. Prohibited Content</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                You agree not to use CopyClipCloud to store, process, or transmit content that:
              </p>
              <ul className="space-y-3 text-gray-400 list-disc pl-6">
                <li>Is illegal or promotes illegal activities</li>
                <li>Infringes on the intellectual property rights of others</li>
                <li>Is harmful, threatening, defamatory, obscene, or harassing</li>
                <li>Contains malware, viruses, or other malicious code</li>
                <li>Promotes discrimination, bigotry, racism, hatred, or physical harm against any group or individual</li>
                <li>Contains sexually explicit content</li>
                <li>Promotes violence or describes graphic or gratuitous violence</li>
                <li>Contains personal, confidential, or sensitive information belonging to others without authorization</li>
                <li>Violates the privacy or publicity rights of any third party</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">2. Prohibited Activities</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                You agree not to engage in any of the following activities:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 flex-shrink-0 text-white/70" />
                  <span>Attempting to gain unauthorized access to CopyClipCloud's systems or other users' accounts</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 flex-shrink-0 text-white/70" />
                  <span>Interfering with or disrupting the integrity or performance of CopyClipCloud's services</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 flex-shrink-0 text-white/70" />
                  <span>Using CopyClipCloud to violate the security or integrity of any computer, network, or communication system</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 flex-shrink-0 text-white/70" />
                  <span>Engaging in any activity that places an unreasonable or disproportionately large load on our infrastructure</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 flex-shrink-0 text-white/70" />
                  <span>Circumventing any limitations or restrictions we place on our services</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 flex-shrink-0 text-white/70" />
                  <span>Harvesting or collecting email addresses or other contact information of other users</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 flex-shrink-0 text-white/70" />
                  <span>Impersonating another person or otherwise misrepresenting your affiliation with a person or entity</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 flex-shrink-0 text-white/70" />
                  <span>Engaging in any form of automated data collection, including but not limited to scraping, data mining, or data extraction</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">3. System Abuse</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                You agree not to misuse CopyClipCloud's resources in ways that could harm our systems or disrupt service for other users. Examples of system abuse include:
              </p>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-2 flex items-center">
                    <Server className="w-5 h-5 mr-2" />
                    Resource Misuse
                  </h4>
                  <p className="text-sm text-gray-400">
                    Using our services to perform operations that consume excessive computational resources, storage, or bandwidth beyond what is reasonably necessary for normal clipboard management.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-2 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Rate Limit Evasion
                  </h4>
                  <p className="text-sm text-gray-400">
                    Attempting to circumvent or bypass rate limiting mechanisms or other usage limits imposed on our services, including creating multiple accounts to avoid restrictions.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-2 flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Spam and Abuse
                  </h4>
                  <p className="text-sm text-gray-400">
                    Using our services to distribute unwanted communications, promotions, advertisements, or any form of spam. This includes using CopyClipCloud as a tool to facilitate the distribution of spam through other channels.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">4. Commercial Use Limitations</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Free accounts may not be used for commercial purposes beyond personal productivity. Commercial usage is permitted only on appropriate subscription tiers or with explicit written permission from CopyClipCloud.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Prohibited commercial activities for free accounts include:
              </p>
              <ul className="space-y-2 text-gray-400 list-disc pl-6 mt-3">
                <li>Using CopyClipCloud as a critical component of a business workflow</li>
                <li>Reselling or redistributing our services</li>
                <li>Using our services to develop or operate commercial products or services without appropriate licensing</li>
                <li>Using automated scripts to collect, process, or transmit data through our services for commercial purposes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">5. Security Research</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                We value the contributions of security researchers in identifying and reporting vulnerabilities. However, all security research and vulnerability testing must:
              </p>
              <ul className="space-y-2 text-gray-400 list-disc pl-6">
                <li>Be conducted in accordance with our Bug Bounty Program guidelines</li>
                <li>Not disrupt or degrade the service for other users</li>
                <li>Not access, modify, or delete data belonging to other users</li>
                <li>Be reported directly to our security team at security@copyclipcloud.com and not disclosed publicly until we've had reasonable time to address the issue</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                Please note that security research conducted outside of these guidelines may be considered a violation of this policy and potentially of applicable laws.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">6. Enforcement</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                We reserve the right to investigate and take appropriate action against any suspected violations of this policy. Actions we may take include:
              </p>
              <ul className="space-y-2 text-gray-400 list-disc pl-6">
                <li>Issuing warnings</li>
                <li>Temporary or permanent suspension of service</li>
                <li>Termination of accounts</li>
                <li>Reporting to law enforcement authorities</li>
                <li>Seeking legal remedies</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                The severity of our response will depend on the nature of the violation and any history of previous violations. We generally attempt to notify users of policy violations and give them an opportunity to correct their behavior, but we reserve the right to take immediate action without notice in cases of severe violations or when necessary to protect our services, users, or third parties.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">7. Reporting Violations</h3>
              <p className="text-gray-400 leading-relaxed">
                If you become aware of any violation of this Acceptable Use Policy, please report it to us at abuse@copyclipcloud.com. Please provide as much detail as possible about the suspected violation, including any relevant evidence. We will investigate all credible reports and take appropriate action.
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
          <h2 className="text-2xl font-bold mb-6">Changes to This Policy</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            We may update this Acceptable Use Policy from time to time to reflect changes in our services, legal requirements, or best practices. We will notify users of significant changes through our website or via email.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            Your continued use of CopyClipCloud after any changes to this policy indicates your acceptance of the modified policy. If you do not agree with the changes, you should discontinue using our services.
          </p>
          <p className="text-gray-400 leading-relaxed">
            It is your responsibility to review this policy periodically to stay informed about our acceptable use requirements.
          </p>
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
            <span>Last Updated: April 19, 2025</span>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            If you have any questions about our Acceptable Use Policy, please don't hesitate to contact us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="px-6 py-3 bg-white text-black rounded-full inline-flex items-center hover:bg-opacity-90 transition-all"
            >
              Contact Us
            </a>
            <a 
              href="/terms" 
              className="px-6 py-3 bg-white/10 text-white rounded-full inline-flex items-center hover:bg-white/20 transition-all"
            >
              Terms of Service
            </a>
            <a 
              href="/privacy" 
              className="px-6 py-3 bg-white/10 text-white rounded-full inline-flex items-center hover:bg-white/20 transition-all"
            >
              Privacy Policy
            </a>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default AcceptableUse;
