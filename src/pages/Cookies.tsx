
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Cookie, Info, Shield, CheckCheck } from "lucide-react";

const Cookies = () => {
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
            <span className="text-gradient">Cookie Policy</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            How we use cookies to improve your experience with CopyClipCloud.
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
                <Cookie className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium">What Are Cookies</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cookies are small text files stored on your device that help websites remember your preferences and improve your browsing experience. They're widely used and help make websites work more efficiently.
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
                <Info className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium">How We Use Them</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We use cookies to understand how you interact with our website, remember your preferences, and provide personalized content. We also use them to analyze site traffic and improve our services.
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
              <h3 className="text-xl font-medium">Your Control</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline them if you prefer. However, this may prevent you from taking full advantage of our website.
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
          <h2 className="text-2xl font-bold mb-6">Types of Cookies We Use</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2 flex items-center">
                <CheckCheck className="w-5 h-5 mr-2 text-white/70" />
                Essential Cookies
              </h3>
              <p className="text-gray-400 leading-relaxed pl-7">
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You may disable these by changing your browser settings, but this may affect how the website functions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2 flex items-center">
                <CheckCheck className="w-5 h-5 mr-2 text-white/70" />
                Analytics Cookies
              </h3>
              <p className="text-gray-400 leading-relaxed pl-7">
                We use analytics cookies to understand how visitors interact with our website. These cookies help us analyze data about web page traffic and improve our website to tailor it to customer needs. They only collect aggregated information.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2 flex items-center">
                <CheckCheck className="w-5 h-5 mr-2 text-white/70" />
                Functionality Cookies
              </h3>
              <p className="text-gray-400 leading-relaxed pl-7">
                These cookies allow our website to remember choices you make (such as your preferred language or the region you are in) and provide enhanced, more personal features. They may be set by us or by third-party providers whose services we have added to our pages.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2 flex items-center">
                <CheckCheck className="w-5 h-5 mr-2 text-white/70" />
                Advertising Cookies
              </h3>
              <p className="text-gray-400 leading-relaxed pl-7">
                These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.
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
          <h2 className="text-2xl font-bold mb-6">Managing Your Cookie Preferences</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
          </p>
          
          <p className="text-gray-400 leading-relaxed">
            To opt out of being tracked by Google Analytics across all websites, visit <a href="https://tools.google.com/dlpage/gaoptout" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
          </p>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            This Cookie Policy was last updated on April 1, 2023. <br />
            If you have any questions about our Cookie Policy, please contact us.
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

export default Cookies;
