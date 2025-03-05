
import React from "react";
import { motion } from "framer-motion";
import { Star, User, Quote } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const Testimonial = ({ name, role, content, rating }: TestimonialProps) => {
  return (
    <motion.div 
      className="glass-panel p-6 relative"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="absolute -top-3 -right-3 bg-white/10 p-1.5 rounded-full backdrop-blur-md">
        <Quote className="w-6 h-6 text-gradient-cyan" />
      </div>
      
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full gradient-bg-purple flex items-center justify-center mr-3">
          <User className="w-5 h-5 text-white" />
        </div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
      
      <p className="text-gray-300 mb-4">{content}</p>
      
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className="w-4 h-4 mr-1" 
            fill={i < rating ? "currentColor" : "none"} 
          />
        ))}
      </div>
    </motion.div>
  );
};

const testimonials = [
  {
    name: "Alex Chen",
    role: "UX Designer",
    content: "CopyClipCloud has completely transformed my workflow. The ability to sync clipboard across devices saves me hours each week.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "Software Developer",
    content: "The best clipboard manager I've ever used. The rich media support and organization features are game-changing.",
    rating: 5
  },
  {
    name: "Michael Davis",
    role: "Digital Marketer",
    content: "I was skeptical at first, but now I can't imagine working without it. The encryption features give me peace of mind.",
    rating: 4
  },
];

const AppTestimonials = () => {
  return (
    <motion.div 
      className="mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-2xl font-bold text-center mb-2 text-gradient-purple"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        What Our Users Say
      </motion.h2>
      
      <motion.p 
        className="text-gray-400 text-center mb-10 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        Join thousands of satisfied users who have transformed their workflow with CopyClipCloud.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Testimonial 
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            content={testimonial.content}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default AppTestimonials;
