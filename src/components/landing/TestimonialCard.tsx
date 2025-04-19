
import React from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Award } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  image: string;
  delay?: number;
}

const TestimonialCard = ({
  name,
  role,
  company,
  content,
  rating,
  image,
  delay = 0
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="glass-panel p-6 h-full flex flex-col"
    >
      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? "text-white" : "text-gray-600"}`}
            fill={i < rating ? "currentColor" : "none"}
          />
        ))}
        <span className="text-sm text-gray-400 ml-2">{rating.toFixed(1)}</span>
      </div>
      
      {/* Content */}
      <p className="text-gray-300 italic mb-6 flex-grow">"{content}"</p>
      
      {/* Author */}
      <div className="flex items-center mt-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 mr-4">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-medium text-white">{name}</h4>
            <ShieldCheck className="w-4 h-4 text-white/50" />
          </div>
          <p className="text-sm text-gray-400">{role}</p>
          {company && (
            <div className="flex items-center text-xs text-gray-500 mt-0.5">
              <Award className="w-3 h-3 mr-1" />
              {company}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;

