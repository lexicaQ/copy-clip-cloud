
import React from "react";
import { motion } from "framer-motion";
import DocLayout from "@/components/docs/DocLayout";
import { 
  Cloud, 
  Shield, 
  Smartphone, 
  Laptop, 
  ArrowRight, 
  Info, 
  Lock, 
  Settings, 
  CheckCircle, 
  XCircle, 
  AlertCircle 
} from "lucide-react";

const CloudSync = () => {
  return (
    <DocLayout 
      title="Cloud Synchronization" 
      description="Learn how to synchronize your clipboard content securely across all your devices"
      icon={Cloud}
    >
      <div className="space-y-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Cloud className="w-5 h-5" /> Overview
          </h2>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            CopyClipCloud's synchronization feature allows you to access your clipboard history across all your devices. 
            When you copy something on one device, it's instantly available on all your other connected devices. 
            All data is transmitted with end-to-end encryption, ensuring that your sensitive information remains secure.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div 
              className="glass-panel p-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-2 rounded-lg bg-white/10 w-fit mb-3">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-bold mb-2">Secure</h3>
              <p className="text-sm text-gray-400">
                End-to-end encryption ensures that only your authorized devices can access your clipboard data.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-panel p-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-2 rounded-lg bg-white/10 w-fit mb-3">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-bold mb-2">Seamless</h3>
              <p className="text-sm text-gray-400">
                Synchronization happens automatically in the background with minimal impact on performance.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-panel p-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-2 rounded-lg bg-white/10 w-fit mb-3">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="font-bold mb-2">Cross-platform</h3>
              <p className="text-sm text-gray-400">
                Works across macOS, Windows, iOS, and Android devices with consistent behavior on all platforms.
              </p>
            </motion.div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-300">
                Cloud synchronization is available on Pro and Enterprise plans. Basic users can upgrade to access this feature.
              </p>
            </div>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5" /> Setting Up Cloud Sync
          </h2>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            Follow these steps to enable cloud synchronization across your devices:
          </p>
          
          <div className="space-y-5 mb-8">
            <motion.div 
              className="glass-panel p-5 relative"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">
                1
              </div>
              <div className="ml-5">
                <h3 className="font-bold mb-2">Create or sign in to your account</h3>
                <p className="text-gray-400 mb-3">
                  You need a CopyClipCloud account to use cloud synchronization. Go to Settings > Account 
                  to sign in or create a new account.
                </p>
                <div className="bg-black/30 border border-white/5 rounded-lg p-3 text-sm text-gray-300">
                  <span className="font-mono">Settings > Account > Sign In</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass-panel p-5 relative"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">
                2
              </div>
              <div className="ml-5">
                <h3 className="font-bold mb-2">Enable cloud synchronization</h3>
                <p className="text-gray-400 mb-3">
                  In the application settings, navigate to the Sync tab and toggle on the "Enable Cloud Sync" option.
                </p>
                <div className="bg-black/30 border border-white/5 rounded-lg p-3 text-sm text-gray-300">
                  <span className="font-mono">Settings > Sync > Enable Cloud Sync</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass-panel p-5 relative"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">
                3
              </div>
              <div className="ml-5">
                <h3 className="font-bold mb-2">Configure sync settings</h3>
                <p className="text-gray-400 mb-3">
                  Customize what gets synchronized (text, images, code snippets) and 
                  set up optional encryption password for additional security.
                </p>
                <div className="bg-black/30 border border-white/5 rounded-lg p-3 text-sm text-gray-300">
                  <span className="font-mono">Settings > Sync > Sync Options</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass-panel p-5 relative"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">
                4
              </div>
              <div className="ml-5">
                <h3 className="font-bold mb-2">Repeat on all devices</h3>
                <p className="text-gray-400 mb-3">
                  Install CopyClipCloud on all your devices and sign in with the same account. 
                  Enable sync on each device to ensure seamless clipboard sharing.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5" /> Security & Privacy
          </h2>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            We take the security of your clipboard data seriously. Here's how we ensure your information remains protected:
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-white mt-0.5" />
              <div>
                <h3 className="font-bold mb-1">End-to-End Encryption</h3>
                <p className="text-gray-400">
                  All clipboard data is encrypted on your device before being sent to our servers. 
                  Only your devices have the keys to decrypt this information, meaning even we can't access your clipboard contents.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-white mt-0.5" />
              <div>
                <h3 className="font-bold mb-1">Optional Password Protection</h3>
                <p className="text-gray-400">
                  Add an extra layer of security by setting up a password that will be required to access your clipboard history on any device.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-white mt-0.5" />
              <div>
                <h3 className="font-bold mb-1">Selective Synchronization</h3>
                <p className="text-gray-400">
                  Choose what types of content get synchronized. Exclude sensitive content types or specific applications from cloud synchronization.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-white mt-0.5" />
              <div>
                <h3 className="font-bold mb-1">Secure Data Transmission</h3>
                <p className="text-gray-400">
                  All data is transmitted using TLS 1.3 with strong encryption algorithms, ensuring that your information can't be intercepted during transmission.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" /> Troubleshooting
          </h2>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            If you're experiencing issues with cloud synchronization, here are some common problems and solutions:
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="glass-panel p-5">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">Sync not working between devices</h3>
                  <p className="text-gray-400 mb-3">
                    Ensure that all devices are signed in with the same account and have synchronization enabled. 
                    Check your internet connection and verify that cloud sync is activated in settings.
                  </p>
                  <div className="bg-black/30 border border-white/5 rounded-lg p-3 text-sm text-gray-300">
                    <span className="font-mono">Settings > Sync > Force Sync Now</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-5">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">Some items not syncing</h3>
                  <p className="text-gray-400 mb-3">
                    Check your selective sync settings to ensure that the content types you want to sync are enabled. 
                    Very large items (over 50MB) aren't synchronized automatically to conserve bandwidth.
                  </p>
                  <div className="bg-black/30 border border-white/5 rounded-lg p-3 text-sm text-gray-300">
                    <span className="font-mono">Settings > Sync > Sync Options > Content Types</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-5">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">Forgotten encryption password</h3>
                  <p className="text-gray-400 mb-3">
                    If you've forgotten your encryption password, you'll need to reset your cloud sync data. 
                    This will delete all cloud-stored clipboard items, but your local data will remain intact.
                  </p>
                  <div className="bg-black/30 border border-white/5 rounded-lg p-3 text-sm text-gray-300">
                    <span className="font-mono">Settings > Sync > Reset Cloud Data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium mb-1">Need more help?</h4>
              <p className="text-sm text-gray-300">
                If you're still experiencing issues, visit our <a href="/support" className="text-white underline">support page</a> or 
                contact our customer support team for personalized assistance.
              </p>
            </div>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="py-6 text-center"
        >
          <h3 className="text-xl font-bold mb-4">Ready to sync your clipboard across all devices?</h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Upgrade to a Pro or Enterprise plan to unlock cloud synchronization and access your clipboard from anywhere.
          </p>
          <motion.a
            href="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Pricing Plans
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.section>
      </div>
    </DocLayout>
  );
};

export default CloudSync;
