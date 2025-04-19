
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FileText, Shield, Database, Lock, FileCheck, AlertCircle, Globe, Scale } from "lucide-react";

const DataProcessing = () => {
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
            <span className="text-gradient">Data Processing Agreement</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            This Data Processing Agreement ("DPA") outlines how CopyClipCloud processes personal data on behalf of our business and enterprise customers.
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
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium">Legal Compliance</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              This DPA is designed to help customers comply with data protection laws, including but not limited to the EU General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other applicable privacy regulations.
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
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium">Data Processing</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              As a processor, we handle personal data only on behalf of and in accordance with the instructions of our customers (the controllers), who determine the purposes and means of processing the personal data.
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
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium">Data Protection</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, protecting personal data from unauthorized access, alteration, disclosure, or destruction.
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
            <h2 className="text-2xl font-bold">Data Processing Agreement</h2>
          </div>

          <div className="space-y-8 text-gray-300">
            <div>
              <h3 className="text-xl font-medium mb-4">1. Definitions</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                For the purposes of this DPA, the following terms shall have the meanings set forth below:
              </p>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="font-medium text-white mb-1">"Controller"</p>
                  <p className="text-sm text-gray-400">
                    Means the Customer, who determines the purposes and means of the Processing of Personal Data.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="font-medium text-white mb-1">"Processor"</p>
                  <p className="text-sm text-gray-400">
                    Means CopyClipCloud, which processes Personal Data on behalf of the Controller.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="font-medium text-white mb-1">"Personal Data"</p>
                  <p className="text-sm text-gray-400">
                    Means any information relating to an identified or identifiable natural person ('Data Subject'); an identifiable natural person is one who can be identified, directly or indirectly.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="font-medium text-white mb-1">"Processing"</p>
                  <p className="text-sm text-gray-400">
                    Means any operation or set of operations which is performed on Personal Data or on sets of Personal Data, whether or not by automated means.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="font-medium text-white mb-1">"Data Protection Laws"</p>
                  <p className="text-sm text-gray-400">
                    Means all laws and regulations applicable to the Processing of Personal Data under the Agreement, including but not limited to the GDPR and the CCPA.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="font-medium text-white mb-1">"GDPR"</p>
                  <p className="text-sm text-gray-400">
                    Means the General Data Protection Regulation (EU) 2016/679.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="font-medium text-white mb-1">"CCPA"</p>
                  <p className="text-sm text-gray-400">
                    Means the California Consumer Privacy Act, Cal. Civ. Code § 1798.100 et seq., and its implementing regulations.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">2. Scope and Purpose</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                This DPA applies to the Processing of Personal Data by the Processor on behalf of the Controller in connection with the provision of the Services as described in our Terms of Service.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                The purpose of the Processing is to provide the Services to the Controller in accordance with the Terms of Service. The duration of the Processing shall be for the duration of the Controller's subscription to the Services, unless otherwise agreed in writing.
              </p>
              <p className="text-gray-400 leading-relaxed">
                The types of Personal Data processed and the categories of Data Subjects concerned depend on how the Controller uses the Services. These may include:
              </p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Personal Data Types</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-400 space-y-1">
                    <li>Contact information (e.g., name, email address)</li>
                    <li>Account credentials</li>
                    <li>Device information</li>
                    <li>Usage data</li>
                    <li>Clipboard content (as uploaded by users)</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Data Subject Categories</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-400 space-y-1">
                    <li>The Controller's employees, contractors, and agents</li>
                    <li>The Controller's customers and clients</li>
                    <li>Other individuals whose data may be stored in clipboard entries</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">3. Processor Obligations</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                As the Processor, CopyClipCloud shall:
              </p>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Lock className="w-5 h-5 mr-2 text-white/70" />
                    <h4 className="font-medium text-white">Process Personal Data Only on Instructions</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Process Personal Data only on documented instructions from the Controller, including with regard to transfers of Personal Data to a third country or an international organization, unless required to do so by law.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Lock className="w-5 h-5 mr-2 text-white/70" />
                    <h4 className="font-medium text-white">Confidentiality</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Ensure that persons authorized to process the Personal Data have committed themselves to confidentiality or are under an appropriate statutory obligation of confidentiality.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Lock className="w-5 h-5 mr-2 text-white/70" />
                    <h4 className="font-medium text-white">Security Measures</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including, among others, as appropriate:
                  </p>
                  <ul className="list-disc pl-5 text-sm text-gray-400 mt-2 space-y-1">
                    <li>The encryption of Personal Data</li>
                    <li>The ability to ensure the ongoing confidentiality, integrity, availability, and resilience of processing systems and services</li>
                    <li>The ability to restore the availability and access to Personal Data in a timely manner in the event of a physical or technical incident</li>
                    <li>A process for regularly testing, assessing, and evaluating the effectiveness of technical and organizational measures for ensuring the security of the processing</li>
                  </ul>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Lock className="w-5 h-5 mr-2 text-white/70" />
                    <h4 className="font-medium text-white">Sub-processors</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Not engage another processor (a "Sub-processor") without prior specific or general written authorization of the Controller. In the case of general written authorization, the Processor shall inform the Controller of any intended changes concerning the addition or replacement of other processors, thereby giving the Controller the opportunity to object to such changes.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Lock className="w-5 h-5 mr-2 text-white/70" />
                    <h4 className="font-medium text-white">Data Subject Rights</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Taking into account the nature of the processing, assist the Controller by appropriate technical and organizational measures, insofar as this is possible, for the fulfillment of the Controller's obligation to respond to requests for exercising the Data Subject's rights.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Lock className="w-5 h-5 mr-2 text-white/70" />
                    <h4 className="font-medium text-white">Data Protection Impact Assessment</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Assist the Controller in ensuring compliance with the obligations regarding security of processing, notification of data breaches, data protection impact assessments, and prior consultation with supervisory authorities.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Lock className="w-5 h-5 mr-2 text-white/70" />
                    <h4 className="font-medium text-white">Return or Deletion of Data</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    At the choice of the Controller, delete or return all the Personal Data to the Controller after the end of the provision of Services, and delete existing copies unless storage of the Personal Data is required by law.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Lock className="w-5 h-5 mr-2 text-white/70" />
                    <h4 className="font-medium text-white">Audits</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    Make available to the Controller all information necessary to demonstrate compliance with the obligations laid down in this DPA and allow for and contribute to audits, including inspections, conducted by the Controller or another auditor mandated by the Controller.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">4. Sub-processors</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                The Processor may only engage Sub-processors with the Controller's prior written authorization. The Processor shall ensure that its contract with each Sub-processor contains obligations no less protective than those in this DPA.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                The Processor shall maintain an up-to-date list of its Sub-processors, which shall be made available to the Controller upon request. The current list of Sub-processors engaged by CopyClipCloud is available at [URL to Sub-processor list].
              </p>
              <p className="text-gray-400 leading-relaxed">
                The Processor shall remain fully liable to the Controller for the performance of the Sub-processor's obligations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">5. Data Transfers</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                The Processor shall not transfer Personal Data to a country outside the European Economic Area (EEA) without ensuring that adequate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission, Binding Corporate Rules, or adherence to an approved code of conduct or certification mechanism.
              </p>
              <p className="text-gray-400 leading-relaxed">
                If the GDPR requires the implementation of additional measures to ensure an adequate level of protection for Personal Data transferred outside the EEA, the Processor shall implement such measures.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">6. Data Breach Notification</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                The Processor shall notify the Controller without undue delay after becoming aware of a personal data breach affecting the Controller's Personal Data.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Such notification shall at minimum:
              </p>
              <ul className="space-y-2 text-gray-400 list-disc pl-6">
                <li>Describe the nature of the personal data breach including where possible, the categories and approximate number of Data Subjects concerned and the categories and approximate number of Personal Data records concerned</li>
                <li>Communicate the name and contact details of the data protection officer or other contact point where more information can be obtained</li>
                <li>Describe the likely consequences of the personal data breach</li>
                <li>Describe the measures taken or proposed to be taken to address the personal data breach, including, where appropriate, measures to mitigate its possible adverse effects</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                The Processor shall cooperate with the Controller and take such reasonable commercial steps as are directed by the Controller to assist in the investigation, mitigation, and remediation of each such personal data breach.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">7. Liability</h3>
              <p className="text-gray-400 leading-relaxed">
                The Processor shall be liable for the damage caused by Processing only where it has not complied with obligations of the GDPR specifically directed to processors or where it has acted outside or contrary to lawful instructions of the Controller.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">8. Miscellaneous</h3>
              <div className="bg-white/5 p-5 rounded-lg border border-white/10">
                <div className="flex items-start mb-3">
                  <Scale className="w-5 h-5 mr-3 mt-0.5 text-white" />
                  <h4 className="text-lg font-medium">Governing Law</h4>
                </div>
                <p className="text-sm text-gray-400">
                  This DPA shall be governed by the laws of the same jurisdiction as specified in the Terms of Service between the Controller and the Processor.
                </p>
              </div>
              
              <div className="bg-white/5 p-5 rounded-lg border border-white/10 mt-4">
                <div className="flex items-start mb-3">
                  <Globe className="w-5 h-5 mr-3 mt-0.5 text-white" />
                  <h4 className="text-lg font-medium">Modifications</h4>
                </div>
                <p className="text-sm text-gray-400">
                  Any modifications to this DPA must be in writing and signed by authorized representatives of both parties.
                </p>
              </div>
              
              <div className="bg-white/5 p-5 rounded-lg border border-white/10 mt-4">
                <div className="flex items-start mb-3">
                  <FileCheck className="w-5 h-5 mr-3 mt-0.5 text-white" />
                  <h4 className="text-lg font-medium">Severability</h4>
                </div>
                <p className="text-sm text-gray-400">
                  If any provision of this DPA is found by any court of competent jurisdiction to be invalid or unenforceable, the invalidity of such provision shall not affect the other provisions of this DPA, and all provisions not affected by such invalidity shall remain in full force and effect.
                </p>
              </div>
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
              <AlertCircle className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Customer Responsibilities</h2>
          </div>
          
          <p className="text-gray-400 leading-relaxed mb-6">
            As the Controller, the customer is responsible for:
          </p>
          
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start">
              <Check className="w-5 h-5 mr-3 flex-shrink-0 text-white/70" />
              <span>Determining the purposes and means of Processing Personal Data</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 mr-3 flex-shrink-0 text-white/70" />
              <span>Ensuring that the Processing of Personal Data complies with applicable Data Protection Laws</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 mr-3 flex-shrink-0 text-white/70" />
              <span>Obtaining and managing all necessary consents from Data Subjects as required by applicable Data Protection Laws</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 mr-3 flex-shrink-0 text-white/70" />
              <span>Providing appropriate notice to Data Subjects regarding how their Personal Data will be processed</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 mr-3 flex-shrink-0 text-white/70" />
              <span>Responding to requests from Data Subjects exercising their rights under applicable Data Protection Laws</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 mr-3 flex-shrink-0 text-white/70" />
              <span>Conducting data protection impact assessments as required by applicable Data Protection Laws</span>
            </li>
          </ul>
          
          <div className="mt-6 p-5 border border-white/10 rounded-lg bg-white/5">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 mr-3 mt-0.5 text-amber-300" />
              <div>
                <p className="text-amber-300 font-medium mb-2">Important Note</p>
                <p className="text-gray-400 text-sm">
                  The customer should only use CopyClipCloud to process Personal Data in accordance with applicable Data Protection Laws. CopyClipCloud does not act as a controller of any Personal Data processed through our Services.
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
            <span>Last Updated: April 19, 2025</span>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            If you have any questions about our Data Processing Agreement, please don't hesitate to contact us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="px-6 py-3 bg-white text-black rounded-full inline-flex items-center hover:bg-opacity-90 transition-all"
            >
              Contact Us
            </a>
            <a 
              href="/privacy" 
              className="px-6 py-3 bg-white/10 text-white rounded-full inline-flex items-center hover:bg-white/20 transition-all"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="px-6 py-3 bg-white/10 text-white rounded-full inline-flex items-center hover:bg-white/20 transition-all"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default DataProcessing;
