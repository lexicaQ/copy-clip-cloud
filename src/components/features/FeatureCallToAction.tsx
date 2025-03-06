
import React from "react";
import { motion } from "framer-motion";
import DownloadButton from "@/components/landing/DownloadButton";

const FeatureCallToAction = () => {
  return (
    <motion.div
      className="mt-24 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Workflow?</h2>
      <DownloadButton />
    </motion.div>
  );
};

export default FeatureCallToAction;
