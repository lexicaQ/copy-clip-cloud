
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Cookie, Info, Shield, CheckCheck, FileText, AlertCircle, Clock, Server } from "lucide-react";

const Cookies = () => {
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
            <span className="text-gradient">Cookie Policy</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            This Cookie Policy explains how CopyClipCloud ("we", "us", and "our") uses cookies and similar technologies to recognize and remember you when you visit our website and applications.
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
                <Cookie className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium">What Are Cookies</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cookies are small text files containing a string of characters that are stored on your browser or device when you visit our website. They allow us to identify your browser or device when you return to our site, helping us provide a better and more personalized service.
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
              We use cookies to understand how you interact with our website, remember your preferences, provide personalized content, analyze site traffic, secure your account, and improve our services. Different types of cookies serve different purposes such as keeping you logged in or remembering items in your shopping cart.
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
              You can choose to accept or decline cookies through our cookie banner settings. Most modern browsers also allow you to control cookies through their settings. However, refusing cookies may prevent you from taking full advantage of our website functionality, especially features that require you to be logged in.
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
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <CheckCheck className="w-5 h-5 mr-2 text-white/70" />
                Essential Cookies
              </h3>
              <p className="text-gray-400 leading-relaxed pl-7 mb-3">
                These cookies are necessary for the website to function properly and cannot be disabled in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
              </p>
              <div className="bg-white/5 rounded-lg p-4 ml-7">
                <p className="text-sm text-gray-400 font-medium">Examples:</p>
                <ul className="list-disc pl-5 text-sm text-gray-400 mt-2 space-y-1">
                  <li>Authentication cookies to remember your login status</li>
                  <li>Security cookies to prevent CSRF attacks</li>
                  <li>Session management cookies for site functionality</li>
                  <li>Cookie consent cookies to remember your preferences</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <CheckCheck className="w-5 h-5 mr-2 text-white/70" />
                Analytics Cookies
              </h3>
              <p className="text-gray-400 leading-relaxed pl-7 mb-3">
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and anonymous.
              </p>
              <div className="bg-white/5 rounded-lg p-4 ml-7">
                <p className="text-sm text-gray-400 font-medium">Examples:</p>
                <ul className="list-disc pl-5 text-sm text-gray-400 mt-2 space-y-1">
                  <li>Google Analytics cookies (_ga, _gid)</li>
                  <li>Page view tracking cookies</li>
                  <li>User journey and event tracking cookies</li>
                  <li>Performance measurement cookies</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <CheckCheck className="w-5 h-5 mr-2 text-white/70" />
                Functional Cookies
              </h3>
              <p className="text-gray-400 leading-relaxed pl-7 mb-3">
                These cookies enable enhanced functionality and personalization, such as live chats, videos, and social media integration. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, some or all of these functionalities may not work properly.
              </p>
              <div className="bg-white/5 rounded-lg p-4 ml-7">
                <p className="text-sm text-gray-400 font-medium">Examples:</p>
                <ul className="list-disc pl-5 text-sm text-gray-400 mt-2 space-y-1">
                  <li>Language preference cookies</li>
                  <li>Theme or appearance setting cookies</li>
                  <li>User interface customization cookies</li>
                  <li>Third-party service integration cookies (e.g., for chat functions)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <CheckCheck className="w-5 h-5 mr-2 text-white/70" />
                Marketing Cookies
              </h3>
              <p className="text-gray-400 leading-relaxed pl-7 mb-3">
                These cookies track your activity across websites to deliver personalized advertisements that are relevant to your interests. They also help limit the number of times you see an ad and measure the effectiveness of advertising campaigns. They are usually placed by advertising networks with our permission.
              </p>
              <div className="bg-white/5 rounded-lg p-4 ml-7">
                <p className="text-sm text-gray-400 font-medium">Examples:</p>
                <ul className="list-disc pl-5 text-sm text-gray-400 mt-2 space-y-1">
                  <li>Ad network tracking cookies</li>
                  <li>Retargeting or remarketing cookies</li>
                  <li>Social media sharing and tracking cookies</li>
                  <li>Conversion and click-through tracking cookies</li>
                </ul>
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
          <div className="mb-8 flex items-center">
            <div className="p-2 rounded-lg bg-white/10 mr-4">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Cookie Duration</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Session Cookies</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                These cookies are temporary and expire once you close your browser. They are used to identify you during a single browsing session and will disappear from your device when you close your browser software.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Persistent Cookies</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                These cookies remain on your device even after you close your browser. They enable our website to recognize you when you return and provide a more personalized experience. They expire after a specified period, which can vary depending on the cookie's purpose.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                Important Notice on Cookie Lifespans
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our essential cookies typically last for the duration of your session or up to 24 hours.
                Functional cookies may remain for up to 1 year to remember your preferences.
                Analytics cookies generally expire after 2 years.
                Marketing cookies vary based on the specific provider but may last up to 2 years.
                You can clear cookies at any time through your browser settings regardless of their set expiration date.
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
              <Server className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Third-Party Cookies</h2>
          </div>
          
          <p className="text-gray-400 leading-relaxed mb-6">
            Some cookies are placed by third parties on our website pages. These third parties may include analytics providers, advertising networks, social media platforms, and feature enhancement services. They may use this data to provide measurement services or target ads based on your interests.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Analytics Partners</h4>
              <p className="text-sm text-gray-400">
                We use Google Analytics to help us understand how our users engage with the website. Google Analytics uses cookies to collect information about how you use our site. All data collected is anonymous and used to improve our service.
              </p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Social Media</h4>
              <p className="text-sm text-gray-400">
                If you share content from our site through platforms like Facebook, Twitter, or LinkedIn, these services may set cookies that can identify you to these platforms even when you're not directly using them.
              </p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Embedded Content</h4>
              <p className="text-sm text-gray-400">
                When we embed content from services like YouTube or Vimeo, they may use cookies to store information about how you interact with such content.
              </p>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm">
            For more information about these third-party cookies, please refer to the respective privacy policies of these third parties.
          </p>
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
            You have several options for managing your cookie preferences:
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Our Cookie Banner</h3>
              <p className="text-gray-400 leading-relaxed">
                The most straightforward way to manage your cookie preferences is through our cookie banner, which appears when you first visit our website. You can access these settings at any time by clicking the "Cookie Settings" link in the footer of our website.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Browser Settings</h3>
              <p className="text-gray-400 leading-relaxed">
                Most web browsers allow you to control cookies through their settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.allaboutcookies.org" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-1">Chrome</h4>
                  <p className="text-sm text-gray-400">
                    Settings → Privacy and Security → Cookies and other site data
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-1">Firefox</h4>
                  <p className="text-sm text-gray-400">
                    Options → Privacy & Security → Cookies and Site Data
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-1">Safari</h4>
                  <p className="text-sm text-gray-400">
                    Preferences → Privacy → Cookies and website data
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-1">Edge</h4>
                  <p className="text-sm text-gray-400">
                    Settings → Cookies and site permissions → Cookies and site data
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Opt-Out of Analytics</h3>
              <p className="text-gray-400 leading-relaxed">
                To opt out of being tracked by Google Analytics across all websites, visit <a href="https://tools.google.com/dlpage/gaoptout" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-5 border border-white/10 rounded-lg bg-white/5">
            <p className="text-amber-300 font-medium mb-2">Important Note</p>
            <p className="text-gray-400 text-sm">
              Please be aware that restricting cookies may impact the functionality of our website. If you disable or decline cookies, some parts of the website may become inaccessible or not function properly. Essential cookies cannot be disabled as they are necessary for the website to function properly.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="glass-panel p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">Changes to Our Cookie Policy</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            We may update our Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated revision date. If we make significant changes to this policy, we may also notify you by other means, such as sending an email or posting a notice on our home page.
          </p>
          <p className="text-gray-400 leading-relaxed">
            We encourage you to review our Cookie Policy periodically to stay informed about how we use cookies and related technologies.
          </p>
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
              This Cookie Policy was last updated on April 19, 2025.
            </p>
            <p className="text-gray-400 mt-2">
              If you have any questions about our Cookie Policy, please <a href="/contact" className="text-white hover:underline">contact us</a>.
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

export default Cookies;
