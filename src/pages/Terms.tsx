
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FileText, Check, Shield, ExternalLink } from "lucide-react";

const Terms = () => {
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
            <span className="text-gradient">Terms of Service</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using CopyClipCloud.
          </p>
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
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Terms of Service</h2>
          </div>

          <div className="space-y-8 text-gray-300">
            <div>
              <h3 className="text-xl font-medium mb-3">1. Acceptance of Terms</h3>
              <p className="text-gray-400 leading-relaxed">
                By accessing or using CopyClipCloud, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">2. Use License</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of CopyClipCloud for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 flex-shrink-0 text-white/70" />
                  <span>Modify or copy the materials</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 flex-shrink-0 text-white/70" />
                  <span>Use the materials for any commercial purpose</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 flex-shrink-0 text-white/70" />
                  <span>Attempt to decompile or reverse engineer any software contained in CopyClipCloud</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 flex-shrink-0 text-white/70" />
                  <span>Remove any copyright or other proprietary notations from the materials</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">3. Disclaimer</h3>
              <p className="text-gray-400 leading-relaxed">
                The materials on CopyClipCloud are provided on an 'as is' basis. CopyClipCloud makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">4. Limitations</h3>
              <p className="text-gray-400 leading-relaxed">
                In no event shall CopyClipCloud or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use CopyClipCloud, even if CopyClipCloud or a CopyClipCloud authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">5. Revisions and Errata</h3>
              <p className="text-gray-400 leading-relaxed">
                The materials appearing on CopyClipCloud could include technical, typographical, or photographic errors. CopyClipCloud does not warrant that any of the materials on its website are accurate, complete or current. CopyClipCloud may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">6. Links</h3>
              <p className="text-gray-400 leading-relaxed">
                CopyClipCloud has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by CopyClipCloud of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">7. Modifications to Terms of Service</h3>
              <p className="text-gray-400 leading-relaxed">
                CopyClipCloud may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">8. Governing Law</h3>
              <p className="text-gray-400 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
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
            <span>Last Updated: April 1, 2023</span>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            If you have any questions about our Terms of Service, please don't hesitate to contact us.
          </p>
          <a 
            href="/contact" 
            className="px-6 py-3 bg-white text-black rounded-full inline-flex items-center hover:bg-opacity-90 transition-all"
          >
            Contact Us
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
