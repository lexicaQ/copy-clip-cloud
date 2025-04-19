
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FileText, Check, Shield, AlertCircle, Calendar, Server, LucideSearch, Scale, CreditCard } from "lucide-react";

const Terms = () => {
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
            <span className="text-gradient">Terms of Service</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using CopyClipCloud. By using our services, you agree to be bound by these terms.
          </p>
          <p className="text-md text-gray-500 mt-4">
            Last Updated: April 19, 2025
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
              <h3 className="text-xl font-medium mb-4">1. Acceptance of Terms</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                By accessing or using CopyClipCloud's services, website, and applications (collectively, the "Services"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our Services.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We may modify these Terms at any time. Your continued use of the Services following any changes indicates your acceptance of the modified Terms. We will make reasonable efforts to notify you of significant changes through our website or via email.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">2. Service Description</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                CopyClipCloud provides a clipboard management application that allows users to store, organize, and synchronize clipboard content across multiple devices. The Services may include both free and premium features accessible through various subscription tiers.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any part of the Services at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the Services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">3. User Accounts</h3>
              <div className="space-y-4">
                <p className="text-gray-400 leading-relaxed">
                  To access certain features of the Services, you may be required to create an account. You are responsible for:
                </p>
                <ul className="space-y-2 text-gray-400 pl-6 list-disc">
                  <li>Providing accurate, current, and complete information during the registration process</li>
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use of your account or any other breach of security</li>
                </ul>
                <p className="text-gray-400 leading-relaxed">
                  We reserve the right to suspend or terminate your account if we determine, in our sole discretion, that you have violated these Terms, engaged in illegal or fraudulent activity, or if your account has been inactive for an extended period.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">4. User Content</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Our Services allow you to store and synchronize content from your clipboard ("User Content"). You retain all rights to your User Content, and you are solely responsible for all User Content that you upload, post, transmit, or otherwise make available through the Services.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                By using our Services, you grant us a limited license to store, encrypt, and transfer your User Content as necessary to provide the Services. We claim no ownership rights over your User Content.
              </p>
              <p className="text-gray-400 leading-relaxed">
                You represent and warrant that:
              </p>
              <ul className="space-y-2 text-gray-400 pl-6 list-disc mb-4">
                <li>You own or have the necessary licenses, rights, consents, and permissions to use and authorize us to use your User Content</li>
                <li>Your User Content does not violate the rights of any third party, including copyright, trademark, privacy, or other personal or proprietary rights</li>
                <li>Your User Content does not violate any applicable laws or regulations</li>
              </ul>
              <p className="text-gray-400 leading-relaxed">
                We reserve the right to remove any User Content that violates these Terms or that we find objectionable for any reason, without prior notice.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">5. Prohibited Uses</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                You agree not to use the Services to:
              </p>
              <ul className="space-y-2 text-gray-400 pl-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 flex-shrink-0 text-white/70" />
                  <span>Violate any applicable laws, regulations, or rights of others</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 flex-shrink-0 text-white/70" />
                  <span>Store, transmit, or share illegal, harmful, threatening, abusive, defamatory, or otherwise objectionable material</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 flex-shrink-0 text-white/70" />
                  <span>Store or transmit malware, viruses, or any other malicious code</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 flex-shrink-0 text-white/70" />
                  <span>Attempt to gain unauthorized access to our systems or interfere with the operation of the Services</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 flex-shrink-0 text-white/70" />
                  <span>Engage in any activity that could disable, overburden, or impair the Services</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 flex-shrink-0 text-white/70" />
                  <span>Use the Services for any commercial purpose not expressly permitted by us</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 flex-shrink-0 text-white/70" />
                  <span>Reverse engineer, decompile, or attempt to extract the source code of our software</span>
                </li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                Violation of these restrictions may result in suspension or termination of your account and potential legal action.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">6. Subscription and Billing</h3>
              <div className="space-y-4">
                <p className="text-gray-400 leading-relaxed">
                  We offer various subscription tiers, including free and premium plans. By selecting a premium subscription, you agree to pay the applicable fees as described at the time of purchase. Subscription fees may change at any time, but fee changes will not apply retroactively.
                </p>
                
                <div className="bg-white/5 p-5 rounded-lg border border-white/10">
                  <div className="flex items-start mb-3">
                    <CreditCard className="w-5 h-5 mr-3 mt-0.5 text-white" />
                    <h4 className="text-lg font-medium">Payment Terms</h4>
                  </div>
                  <ul className="space-y-2 text-gray-400 pl-6 list-disc">
                    <li>Subscription fees are billed in advance on a monthly or annual basis, depending on the plan selected</li>
                    <li>Payment will be charged to your designated payment method at confirmation of purchase</li>
                    <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period</li>
                    <li>You can manage and cancel your subscription through your account settings</li>
                    <li>Refunds are processed according to our Refund Policy detailed in Section 7</li>
                  </ul>
                </div>
                
                <p className="text-gray-400 leading-relaxed">
                  For any subscription or billing issues, please contact our support team at billing@copyclipcloud.com.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">7. Refund Policy</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                We strive to ensure your satisfaction with our Services. If you are dissatisfied with your subscription, you may be eligible for a refund under the following conditions:
              </p>
              <ul className="space-y-2 text-gray-400 pl-6 list-disc mb-4">
                <li>For monthly subscriptions: Refund requests must be submitted within 7 days of the initial purchase or the most recent renewal</li>
                <li>For annual subscriptions: Refund requests must be submitted within 14 days of the initial purchase or the most recent renewal</li>
                <li>Technical issues: If you experience significant technical issues that prevent you from using the Services and our support team cannot resolve them, you may be eligible for a refund regardless of the time elapsed</li>
              </ul>
              <p className="text-gray-400 leading-relaxed">
                Refund requests should be submitted through our contact form or by emailing refunds@copyclipcloud.com. All refund requests will be evaluated on a case-by-case basis. We reserve the right to deny refund requests that do not meet our criteria.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">8. Intellectual Property</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                The Services, including all content, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof), are owned by CopyClipCloud, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                These Terms grant you a limited, non-exclusive, non-transferable, revocable license to use the Services for your personal, non-commercial use. You may not:
              </p>
              <ul className="space-y-2 text-gray-400 pl-6 list-disc mb-4">
                <li>Modify copies of any materials from the Services</li>
                <li>Use any illustrations, photographs, video or audio sequences, or any graphics separately from the accompanying text</li>
                <li>Delete or alter any copyright, trademark, or other proprietary rights notices from copies of materials from the Services</li>
                <li>Access or use for any commercial purposes any part of the Services or any services or materials available through the Services</li>
              </ul>
              <p className="text-gray-400 leading-relaxed">
                If you believe that any content on our Services violates your copyright, please contact us at copyright@copyclipcloud.com with information specified in our Copyright Policy.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">9. Disclaimer of Warranties</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                WE DO NOT WARRANT THAT:
              </p>
              <ul className="space-y-2 text-gray-400 pl-6 list-disc mb-4">
                <li>THE SERVICES WILL MEET YOUR SPECIFIC REQUIREMENTS</li>
                <li>THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE</li>
                <li>THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICES WILL BE ACCURATE OR RELIABLE</li>
                <li>THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE SERVICES WILL MEET YOUR EXPECTATIONS</li>
                <li>ANY ERRORS IN THE SERVICES WILL BE CORRECTED</li>
              </ul>
              <p className="text-gray-400 leading-relaxed">
                ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICES IS DONE AT YOUR OWN DISCRETION AND RISK. YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH MATERIAL.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">10. Limitation of Liability</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL COPYCLIPCLOUD, ITS AFFILIATES, DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR USE OF, OR INABILITY TO USE, THE SERVICES.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                WITHOUT LIMITING THE FOREGOING, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID BY YOU TO US DURING THE 12-MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.
              </p>
              <p className="text-gray-400 leading-relaxed">
                CERTAIN STATE LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS, OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MIGHT HAVE ADDITIONAL RIGHTS.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">11. Indemnification</h3>
              <p className="text-gray-400 leading-relaxed">
                You agree to defend, indemnify, and hold harmless CopyClipCloud, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services, including, but not limited to, your User Content, any use of the Services' content, services, and products other than as expressly authorized in these Terms, or your use of any information obtained from the Services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">12. Governing Law and Dispute Resolution</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without giving effect to any principles of conflicts of law. Any legal action or proceeding relating to your access to, or use of, the Services or these Terms shall be instituted in a state or federal court in San Francisco County, California, and you agree to submit to the personal jurisdiction of such courts.
              </p>
              <p className="text-gray-400 leading-relaxed">
                If there is any dispute about or involving the Services, you agree that the dispute shall be resolved by binding arbitration under the rules of the American Arbitration Association, before a neutral arbitrator in San Francisco, California. Either party may seek any interim or preliminary relief from a court of competent jurisdiction in San Francisco, California, necessary to protect its rights pending the completion of arbitration.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">13. Termination</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Upon termination, your right to use the Services will immediately cease. If you wish to terminate your account, you may simply discontinue using the Services or deactivate your account through the account settings.
              </p>
              <p className="text-gray-400 leading-relaxed">
                All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">14. General Terms</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                These Terms constitute the entire agreement between you and CopyClipCloud regarding your use of the Services, superseding any prior agreements between you and CopyClipCloud.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Our failure to exercise or enforce any right or provision of these Terms shall not operate as a waiver of such right or provision.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                We may assign our rights and obligations under these Terms, in whole or in part, to any party at any time without notice to you.
              </p>
              <p className="text-gray-400 leading-relaxed">
                These Terms, and any rights and licenses granted hereunder, may not be transferred or assigned by you without our prior written consent.
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
          <div className="mb-8 flex items-center">
            <div className="p-2 rounded-lg bg-white/10 mr-4">
              <LucideSearch className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Definitions</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="font-medium text-white mb-1">"Services"</p>
              <p className="text-sm text-gray-400">
                Refers to CopyClipCloud's website, applications, features, API, and all related services.
              </p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="font-medium text-white mb-1">"User Content"</p>
              <p className="text-sm text-gray-400">
                Refers to any text, images, or other materials that you upload, store, or transmit through the Services.
              </p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="font-medium text-white mb-1">"Premium Features"</p>
              <p className="text-sm text-gray-400">
                Refers to additional features, functionalities, or capacity that are available only to users who have paid for a subscription.
              </p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="font-medium text-white mb-1">"Account"</p>
              <p className="text-sm text-gray-400">
                Refers to your registered profile with CopyClipCloud, including your login credentials and personal settings.
              </p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="font-medium text-white mb-1">"We," "Us," or "Our"</p>
              <p className="text-sm text-gray-400">
                Refers to CopyClipCloud, its parent company, subsidiaries, affiliates, officers, employees, agents, and contractors.
              </p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="font-medium text-white mb-1">"You" or "Your"</p>
              <p className="text-sm text-gray-400">
                Refers to the individual or entity that accesses or uses the Services.
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
            <span>Last Updated: April 19, 2025</span>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            If you have any questions about our Terms of Service, please don't hesitate to contact us.
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

export default Terms;
