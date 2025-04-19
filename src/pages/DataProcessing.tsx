
import React from "react";
import { motion } from "framer-motion";
import { Shield, Server, FileText, Lock, Database, HardDrive, CheckCheck } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
            This Data Processing Agreement ("DPA") forms part of the Agreement between CopyClipCloud ("Processor") and the Customer ("Controller") and reflects the parties' agreement with regard to the Processing of Personal Data.
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
              <h3 className="text-xl font-medium">GDPR Compliance</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We process personal data in compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws. This agreement outlines our commitment to protecting your data and your rights as a data controller.
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
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium">Data Processing</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              This agreement details how we collect, store, use, and protect your data when you use our services. It explains our obligations as a data processor and ensures transparent handling of all data processing activities.
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
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium">Security Measures</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including encryption, access controls, regular security assessments, and employee training on data protection.
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
          <h2 className="text-2xl font-bold mb-6">1. Definitions</h2>
          
          <div className="space-y-6 text-gray-400">
            <p className="leading-relaxed">
              In this Data Processing Agreement, the following terms shall have the meanings set out below:
            </p>
            
            <div className="space-y-4 pl-4">
              <div>
                <p className="font-medium text-white">1.1 "Controller", "Processor", "Data Subject", "Personal Data", "Processing", "Appropriate Technical and Organizational Measures"</p>
                <p className="text-sm mt-1 pl-4">
                  Shall have the same meaning as in the GDPR and other applicable data protection laws.
                </p>
              </div>
              
              <div>
                <p className="font-medium text-white">1.2 "GDPR"</p>
                <p className="text-sm mt-1 pl-4">
                  Means the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data.
                </p>
              </div>
              
              <div>
                <p className="font-medium text-white">1.3 "Services"</p>
                <p className="text-sm mt-1 pl-4">
                  Means the services provided by the Processor to the Controller as set out in the Agreement.
                </p>
              </div>
              
              <div>
                <p className="font-medium text-white">1.4 "Sub-processor"</p>
                <p className="text-sm mt-1 pl-4">
                  Means any processor engaged by the Processor who agrees to receive from the Processor personal data intended for processing activities to be carried out on behalf of the Controller.
                </p>
              </div>
              
              <div>
                <p className="font-medium text-white">1.5 "Data Breach"</p>
                <p className="text-sm mt-1 pl-4">
                  Means a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, personal data transmitted, stored or otherwise processed.
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
          <h2 className="text-2xl font-bold mb-6">2. Processing of Personal Data</h2>
          
          <div className="space-y-6 text-gray-400">
            <div>
              <h3 className="text-xl font-medium text-white mb-3">2.1 Scope and Purpose</h3>
              <p className="leading-relaxed mb-4">
                The Processor shall process Personal Data only on documented instructions from the Controller, including with regard to transfers of Personal Data to a third country or an international organization, unless required to do so by Union or Member State law to which the Processor is subject.
              </p>
              <p className="leading-relaxed">
                The Processor shall immediately inform the Controller if, in its opinion, an instruction infringes the GDPR or other data protection provisions.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-white mb-3">2.2 Duration</h3>
              <p className="leading-relaxed">
                The Processor shall process Personal Data for the duration of the Agreement, unless otherwise agreed upon in writing or required by applicable law.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-white mb-3">2.3 Type of Personal Data and Categories of Data Subjects</h3>
              <p className="leading-relaxed mb-4">
                The types of Personal Data processed and the categories of Data Subjects whose Personal Data is processed are set out in Annex 1 to this DPA.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h4 className="font-medium text-white mb-4">Annex 1: Data Processing Details</h4>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-white">Types of Personal Data:</p>
                  <ul className="list-disc pl-8 mt-2 space-y-2 text-sm">
                    <li>Contact information (name, email address, phone number)</li>
                    <li>Account credentials (username, encrypted password)</li>
                    <li>Usage data (device information, IP addresses, access times)</li>
                    <li>Payment information (when applicable)</li>
                    <li>User preferences and settings</li>
                    <li>Content and data stored in the clipboard manager</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-medium text-white">Categories of Data Subjects:</p>
                  <ul className="list-disc pl-8 mt-2 space-y-2 text-sm">
                    <li>Customers and users of the Controller's services</li>
                    <li>Employees and contractors of the Controller</li>
                    <li>End-users of the CopyClipCloud application</li>
                    <li>Contacts and individuals whose information is stored in the clipboard manager</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-medium text-white">Processing Activities:</p>
                  <ul className="list-disc pl-8 mt-2 space-y-2 text-sm">
                    <li>Storage and synchronization of clipboard data</li>
                    <li>User account management and authentication</li>
                    <li>Processing payments and managing subscriptions</li>
                    <li>Providing technical support and customer service</li>
                    <li>Analyzing application usage for improvement purposes</li>
                    <li>Sending notifications and communications about the service</li>
                  </ul>
                </div>
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
          <h2 className="text-2xl font-bold mb-6">3. Obligations of the Processor</h2>
          
          <div className="space-y-6 text-gray-400">
            <div className="mb-8">
              <p className="leading-relaxed mb-4">
                The Processor shall:
              </p>
              
              <div className="space-y-4 pl-4">
                <div className="flex">
                  <div className="mr-3 mt-1 text-white">
                    <CheckCheck className="w-5 h-5" />
                  </div>
                  <p>
                    Process the Personal Data only on documented instructions from the Controller, including with regard to transfers of Personal Data to a third country or an international organization.
                  </p>
                </div>
                
                <div className="flex">
                  <div className="mr-3 mt-1 text-white">
                    <CheckCheck className="w-5 h-5" />
                  </div>
                  <p>
                    Ensure that persons authorized to process the Personal Data have committed themselves to confidentiality or are under an appropriate statutory obligation of confidentiality.
                  </p>
                </div>
                
                <div className="flex">
                  <div className="mr-3 mt-1 text-white">
                    <CheckCheck className="w-5 h-5" />
                  </div>
                  <p>
                    Implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, taking into account the state of the art, the costs of implementation and the nature, scope, context and purposes of processing.
                  </p>
                </div>
                
                <div className="flex">
                  <div className="mr-3 mt-1 text-white">
                    <CheckCheck className="w-5 h-5" />
                  </div>
                  <p>
                    Respect the conditions for engaging another processor as set out in the GDPR and this DPA.
                  </p>
                </div>
                
                <div className="flex">
                  <div className="mr-3 mt-1 text-white">
                    <CheckCheck className="w-5 h-5" />
                  </div>
                  <p>
                    Assist the Controller by appropriate technical and organizational measures, insofar as this is possible, for the fulfilment of the Controller's obligation to respond to requests for exercising the Data Subject's rights.
                  </p>
                </div>
                
                <div className="flex">
                  <div className="mr-3 mt-1 text-white">
                    <CheckCheck className="w-5 h-5" />
                  </div>
                  <p>
                    Assist the Controller in ensuring compliance with security obligations, data breach notifications, data protection impact assessments, and prior consultations with supervisory authorities.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-white mb-3">3.1 Security Measures</h3>
              <p className="leading-relaxed mb-4">
                The Processor implements and maintains appropriate technical and organizational security measures that include, but are not limited to:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Lock className="w-4 h-4 mr-2 text-white/70" />
                    <h4 className="font-medium text-white">Encryption</h4>
                  </div>
                  <p className="text-sm">
                    End-to-end encryption of clipboard content and personal data during storage and transmission.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Database className="w-4 h-4 mr-2 text-white/70" />
                    <h4 className="font-medium text-white">Access Control</h4>
                  </div>
                  <p className="text-sm">
                    Strict access controls and authentication mechanisms to prevent unauthorized access.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <HardDrive className="w-4 h-4 mr-2 text-white/70" />
                    <h4 className="font-medium text-white">Data Backup</h4>
                  </div>
                  <p className="text-sm">
                    Regular backup procedures and disaster recovery plans to prevent data loss.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Shield className="w-4 h-4 mr-2 text-white/70" />
                    <h4 className="font-medium text-white">Vulnerability Management</h4>
                  </div>
                  <p className="text-sm">
                    Regular security assessments, penetration testing, and vulnerability scanning.
                  </p>
                </div>
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
          <h2 className="text-2xl font-bold mb-6">4. Sub-processors</h2>
          
          <div className="space-y-6 text-gray-400">
            <p className="leading-relaxed">
              The Processor shall not engage another processor (Sub-processor) without prior specific or general written authorization of the Controller. In case of general written authorization, the Processor shall inform the Controller of any intended changes concerning the addition or replacement of Sub-processors, thereby giving the Controller the opportunity to object to such changes.
            </p>
            
            <div>
              <h3 className="text-xl font-medium text-white mb-3">4.1 Sub-processor Obligations</h3>
              <p className="leading-relaxed mb-4">
                Where the Processor engages a Sub-processor for carrying out specific processing activities on behalf of the Controller, the same data protection obligations as set out in this DPA shall be imposed on that Sub-processor by way of a contract, providing sufficient guarantees to implement appropriate technical and organizational measures.
              </p>
              <p className="leading-relaxed">
                Where the Sub-processor fails to fulfil its data protection obligations, the Processor shall remain fully liable to the Controller for the performance of the Sub-processor's obligations.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-white mb-3">4.2 Current Sub-processors</h3>
              <p className="leading-relaxed mb-4">
                The Controller hereby authorizes the engagement of the Sub-processors listed in Annex 2 to this DPA.
              </p>
              
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h4 className="font-medium text-white mb-4">Annex 2: Authorized Sub-processors</h4>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-1">
                      <p className="font-medium text-white">Name</p>
                    </div>
                    <div className="col-span-1">
                      <p className="font-medium text-white">Purpose</p>
                    </div>
                    <div className="col-span-1">
                      <p className="font-medium text-white">Location</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/10 pt-3">
                    <div className="col-span-1">
                      <p>Amazon Web Services</p>
                    </div>
                    <div className="col-span-1">
                      <p>Cloud infrastructure and storage</p>
                    </div>
                    <div className="col-span-1">
                      <p>EU (Frankfurt), US (Virginia)</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/10 pt-3">
                    <div className="col-span-1">
                      <p>Stripe</p>
                    </div>
                    <div className="col-span-1">
                      <p>Payment processing</p>
                    </div>
                    <div className="col-span-1">
                      <p>EU, US</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/10 pt-3">
                    <div className="col-span-1">
                      <p>Zendesk</p>
                    </div>
                    <div className="col-span-1">
                      <p>Customer support services</p>
                    </div>
                    <div className="col-span-1">
                      <p>EU (Dublin)</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/10 pt-3">
                    <div className="col-span-1">
                      <p>Google Analytics</p>
                    </div>
                    <div className="col-span-1">
                      <p>Analytics and usage statistics</p>
                    </div>
                    <div className="col-span-1">
                      <p>EU, US</p>
                    </div>
                  </div>
                </div>
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
          <div className="mb-6">
            <p className="text-gray-400 max-w-2xl mx-auto">
              This Data Processing Agreement was last updated on April 19, 2025.
            </p>
            <p className="text-gray-400 mt-2">
              If you have any questions about our Data Processing Agreement, please <a href="/contact" className="text-white hover:underline">contact us</a>.
            </p>
          </div>
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
