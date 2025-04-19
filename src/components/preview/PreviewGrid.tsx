
import React from "react";
import { motion } from "framer-motion";
import PreviewThumbnail, { FileType } from "./PreviewThumbnail";

export interface PreviewItem {
  id: string;
  title: string;
  description?: string;
  type: FileType;
  thumbnail?: string;
  size?: string;
  date?: string;
  author?: string;
  company?: string;
  companyLogo?: string;
  rating?: number;
  testimonial?: string;
}

interface PreviewGridProps {
  items: PreviewItem[];
  className?: string;
}

const PreviewGrid: React.FC<PreviewGridProps> = ({ items, className }) => {
  return (
    <motion.div 
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ staggerChildren: 0.05 }}
      viewport={{ once: true }}
    >
      {items.map((item, index) => (
        <PreviewThumbnail
          key={item.id}
          {...item}
          className=""
        />
      ))}
    </motion.div>
  );
};

export default PreviewGrid;
