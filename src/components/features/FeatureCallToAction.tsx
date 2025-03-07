
import React from "react";
import { motion } from "framer-motion";
import DownloadButton from "@/components/landing/DownloadButton";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureCallToAction = () => {
  return (
    <motion.div
      className="mt-32 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-30 rounded-3xl -z-10" />
      
      <div className="glass-panel py-16 px-8 rounded-3xl text-center border-white/10 md:py-20 md:px-12">
        <motion.h2 
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Ready to Transform Your Workflow?
        </motion.h2>
        
        <motion.p
          className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Join thousands of professionals who have already enhanced their productivity with CopyClipCloud.
        </motion.p>
        
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <DownloadButton />
          
          <Link
            to="/pricing"
            className="group flex items-center text-white/80 hover:text-white transition-colors"
          >
            <span className="mr-2">View Pricing Plans</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        
        <motion.div
          className="mt-16 flex justify-center items-center gap-x-8 gap-y-4 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center text-sm text-gray-400">
            <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"/>
            </svg>
            <span>14-day money back guarantee</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-400">
            <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-9.618 5.04C2.127 9.504 2 11.138 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-.862-.126-2.496-.382-4.016z"/>
            </svg>
            <span>Secure encrypted syncing</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-400">
            <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current">
              <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <span>Instant installation</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-400">
            <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current">
              <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
            </svg>
            <span>Free updates</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeatureCallToAction;
