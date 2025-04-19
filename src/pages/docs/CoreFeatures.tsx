
import React from "react";
import { motion } from "framer-motion";
import DocLayout from "@/components/docs/DocLayout";
import { Key, Clipboard, Search, Clock, Database, Lock, Zap, Layers, MessageSquare } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ElementType;
  imageUrl?: string;
  isNew?: boolean;
}

const FeatureCard = ({ title, description, icon: Icon, imageUrl, isNew }: FeatureProps) => {
  return (
    <motion.div 
      className="glass-panel p-6 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.3)" }}
    >
      {isNew && (
        <div className="absolute top-3 right-3 bg-white/10 text-white text-xs px-2 py-1 rounded-full">
          New
        </div>
      )}
      <div className="p-3 bg-white/10 rounded-lg w-fit mb-4">
        <Icon className="w-6 h-6" />
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      
      <p className="text-gray-300 mb-5 leading-relaxed">
        {description}
      </p>
      
      {imageUrl && (
        <div className="mt-4 rounded-lg overflow-hidden border border-white/10">
          <img src={imageUrl} alt={title} className="w-full h-auto" />
        </div>
      )}
    </motion.div>
  );
};

const CoreFeatures = () => {
  const features: FeatureProps[] = [
    {
      title: "Smart Clipboard History",
      description: "CopyClipCloud automatically records everything you copy, creating a searchable history of your clipboard items. Access recent and frequently used items with just a few keystrokes.",
      icon: Clipboard,
      imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXIlMjBpbnRlcmZhY2V8ZW58MHwwfDB8fHww"
    },
    {
      title: "AI-Powered Organization",
      description: "Our intelligent system automatically categorizes your clipboard items based on content type, making it easier to find what you need. Text snippets, code blocks, images, and links are all neatly organized.",
      icon: Layers,
      isNew: true
    },
    {
      title: "Cross-Device Synchronization",
      description: "Access your clipboard history across all your devices. With seamless cloud sync, copy something on your laptop and paste it on your phone or tablet without missing a beat.",
      icon: Database
    },
    {
      title: "Powerful Search Capabilities",
      description: "Find exactly what you're looking for with advanced search filters. Search by keyword, date, type, or custom tags to quickly locate any item in your clipboard history.",
      icon: Search,
      imageUrl: "https://images.unsplash.com/photo-1571721795195-a2d50c404b88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHVzZXIlMjBpbnRlcmZhY2V8ZW58MHwwfDB8fHww"
    },
    {
      title: "Military-Grade Encryption",
      description: "Your data is protected with end-to-end encryption, ensuring that sensitive information remains secure and private. Only your authorized devices can access your clipboard data.",
      icon: Lock
    },
    {
      title: "Smart Templates",
      description: "Create reusable templates for frequently used text, code snippets, or forms. Insert these templates with a single keystroke to save time and reduce errors.",
      icon: Zap,
      isNew: true
    },
    {
      title: "History Retention Controls",
      description: "Customize how long items remain in your clipboard history with flexible retention settings. Set up auto-cleaning rules based on item age, type, or content.",
      icon: Clock
    },
    {
      title: "Selective Exclusions",
      description: "Exclude specific applications or sensitive content types from being recorded in your clipboard history, giving you complete control over what information is stored.",
      icon: MessageSquare
    }
  ];

  return (
    <DocLayout 
      title="Core Features" 
      description="Explore the powerful capabilities that make CopyClipCloud the ultimate clipboard manager"
      icon={Key}
    >
      <div className="space-y-10">
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            CopyClipCloud combines powerful features with a seamless user experience to transform how you 
            work with copied content. Here's what makes our clipboard manager stand out from the rest:
          </p>
          
          <div className="border-l-4 border-white/20 pl-4 py-1 text-lg italic text-gray-300">
            "CopyClipCloud has revolutionized how I work across multiple devices. The intelligent organization 
            and search features have saved me countless hours." — Alex Chen, UX Designer
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              imageUrl={feature.imageUrl}
              isNew={feature.isNew}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 glass-panel p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Feature Comparison
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-white/10">
                  <th className="pb-4 text-gray-400">Feature</th>
                  <th className="pb-4 text-center text-gray-400">Basic</th>
                  <th className="pb-4 text-center text-gray-400">Pro</th>
                  <th className="pb-4 text-center text-gray-400">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  { feature: "Clipboard History", basic: true, pro: true, enterprise: true },
                  { feature: "Search Capability", basic: true, pro: true, enterprise: true },
                  { feature: "Cross-Device Sync", basic: false, pro: true, enterprise: true },
                  { feature: "End-to-End Encryption", basic: true, pro: true, enterprise: true },
                  { feature: "AI Organization", basic: false, pro: true, enterprise: true },
                  { feature: "Custom Templates", basic: false, pro: true, enterprise: true },
                  { feature: "History Retention", basic: "7 days", pro: "30 days", enterprise: "Unlimited" },
                  { feature: "Team Sharing", basic: false, pro: false, enterprise: true },
                  { feature: "API Access", basic: false, pro: false, enterprise: true },
                  { feature: "Priority Support", basic: false, pro: true, enterprise: true },
                ].map((row, index) => (
                  <tr key={index} className="text-gray-300">
                    <td className="py-3">{row.feature}</td>
                    <td className="py-3 text-center">
                      {typeof row.basic === "boolean" ? (
                        row.basic ? (
                          <span className="text-white">✓</span>
                        ) : (
                          <span className="text-gray-600">—</span>
                        )
                      ) : (
                        row.basic
                      )}
                    </td>
                    <td className="py-3 text-center">
                      {typeof row.pro === "boolean" ? (
                        row.pro ? (
                          <span className="text-white">✓</span>
                        ) : (
                          <span className="text-gray-600">—</span>
                        )
                      ) : (
                        row.pro
                      )}
                    </td>
                    <td className="py-3 text-center">
                      {typeof row.enterprise === "boolean" ? (
                        row.enterprise ? (
                          <span className="text-white">✓</span>
                        ) : (
                          <span className="text-gray-600">—</span>
                        )
                      ) : (
                        row.enterprise
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-center">
            <motion.a 
              href="/pricing"
              className="inline-flex items-center px-5 py-2.5 bg-white text-black rounded-lg hover:bg-white/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Pricing Details
            </motion.a>
          </div>
        </motion.div>
      </div>
    </DocLayout>
  );
};

export default CoreFeatures;
