
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface TestimonialsProps {
  companies: string[];
}

const TestimonialsSection = ({ companies }: TestimonialsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="testimonials-section text-center relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />
      
      <motion.p 
        className="text-sm text-gray-400 mb-6 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Trusted by innovative teams at
      </motion.p>
      
      <motion.div 
        className="flex flex-wrap items-center justify-center gap-8 mt-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {companies.map((company, index) => (
          <motion.div 
            key={index}
            className="company-logo h-8 opacity-50 hover:opacity-100 transition-opacity duration-300 tracking-widest font-light"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            viewport={{ once: true }}
          >
            {company}
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        className="mt-8 text-xs text-gray-500 flex items-center justify-center gap-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: true }}
      >
        Made with <Heart className="w-3 h-3 text-white/50" /> by the CopyClipCloud team
      </motion.div>
    </motion.div>
  );
};

export default TestimonialsSection;
