import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight, Quote, ShieldCheck, Award } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Types for our testimonials
interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  company?: string;
  verified?: boolean;
}

const testimonials = [
  {
    name: "Alex Chen",
    role: "Senior UX Designer",
    company: "DesignWorks Inc.",
    content: "CopyClipCloud has revolutionized my workflow. The seamless sync across devices and clean interface saves me hours every week. The encryption features give me peace of mind when handling sensitive client data.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    verified: true
  },
  {
    name: "Sarah Johnson",
    role: "Lead Developer",
    company: "TechSolve",
    content: "As a developer juggling multiple projects, this is the clipboard manager I've been waiting for. The rich media support and organization are game-changing. Search functionality makes finding past snippets effortless.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    verified: true
  },
  {
    name: "Michael Davis",
    role: "Digital Marketing Director",
    company: "Growth Partners",
    content: "The encryption features give me peace of mind when handling sensitive client information. This tool has become essential for our entire team. We've seen a 30% boost in productivity since implementation.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    verified: true
  },
  {
    name: "Rebecca Wong",
    role: "Product Manager",
    company: "Innovate Solutions",
    content: "CopyClipCloud simplifies collaboration across our team. The interface is intuitive and the search functionality helps me find content instantly. It's been a game-changer for our product development workflow.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    verified: true
  },
  {
    name: "James Wilson",
    role: "Content Creator",
    company: "CreativeSphere",
    content: "As someone who deals with various media types daily, the ability to seamlessly organize and access my clipboard history is invaluable. The image handling capabilities are particularly impressive.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    verified: true
  },
  {
    name: "Olivia Martinez",
    role: "UI Designer",
    company: "DesignForward",
    content: "The clean interface and smooth performance make this a standout tool. It's become an essential part of my design workflow. The categorization features help me maintain a library of design elements I use frequently.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    verified: true
  },
  {
    name: "Daniel Kim",
    role: "Software Engineer",
    company: "TechInnovate",
    content: "As a developer, having a reliable clipboard manager is essential. CopyClipCloud's code snippet detection and syntax highlighting save me countless hours when reusing code fragments across projects.",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    verified: true
  },
  {
    name: "Emma Roberts",
    role: "Technical Writer",
    company: "DocuTech",
    content: "The format preservation and organization features are perfect for my documentation work. Being able to categorize and tag clipboard items makes my reference material instantly accessible.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    verified: true
  }
];

// Modern testimonial card component with improved avatar positioning
const TestimonialCard = ({ 
  name, role, content, rating, image, company, verified = true 
}: TestimonialProps) => {
  return (
    <motion.div 
      className="relative h-full pt-10 px-6 pb-6 glass-panel backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" }}
    >
      {/* Avatar positioned prominently at the top */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
        <motion.div 
          className="w-20 h-20 rounded-full overflow-hidden border-4 border-background shadow-xl bg-white/5"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </motion.div>
        {verified && (
          <motion.div 
            className="absolute -bottom-1 right-0 bg-white/10 p-1 rounded-full backdrop-blur-md border border-white/20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <ShieldCheck className="w-4 h-4 text-white" />
          </motion.div>
        )}
      </div>
      
      {/* Quote icon with enhanced styling */}
      <div className="absolute -top-2 -right-2 rounded-full p-2 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl">
        <Quote className="w-4 h-4 text-white" />
      </div>
      
      {/* User info with enhanced styling */}
      <div className="text-center mt-8 mb-4">
        <motion.h4 
          className="font-medium text-white text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {name}
        </motion.h4>
        <motion.p 
          className="text-xs text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          {role} {company && <span className="opacity-60 mx-1">•</span>} {company}
        </motion.p>
      </div>
      
      {/* Rating */}
      <div className="flex justify-center text-white mb-4">
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <Star 
              className={`w-4 h-4 mx-0.5 ${i < Math.floor(rating) ? 'text-white' : 'text-gray-600'}`}
              fill={i < Math.floor(rating) ? "currentColor" : "none"} 
            />
          </motion.div>
        ))}
        <span className="text-xs ml-2 text-gray-400">{rating.toFixed(1)}</span>
      </div>
      
      {/* Content with subtle animation */}
      <motion.p 
        className="text-gray-300 italic leading-relaxed text-center text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        "{content}"
      </motion.p>
    </motion.div>
  );
};

const TestimonialCarousel = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  
  // Handle viewport changes responsively
  const [itemsPerView, setItemsPerView] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Update current slide when API changes
  useEffect(() => {
    if (!api) return;
    
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  
  return (
    <div className="mt-20 pt-16 border-t border-white/10">
      {/* Section header with enhanced animations */}
      <motion.div 
        className="text-center mb-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm mb-4 border border-white/10"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Award className="w-4 h-4 mr-2" />
          What Our Users Say
        </motion.div>
        
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-3"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Trusted by Professionals</span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Discover how CopyClipCloud has transformed workflows for users around the world
        </motion.p>
        
        <motion.div 
          className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-10 w-28 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        />
      </motion.div>
      
      {/* Modern carousel using Shadcn UI Carousel */}
      <div className="max-w-7xl mx-auto px-6">
        <Carousel 
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem 
                key={index} 
                className={`pl-4 ${
                  itemsPerView === 3 ? 'lg:basis-1/3' : 
                  itemsPerView === 2 ? 'md:basis-1/2' : 
                  'basis-full'
                }`}
              >
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  content={testimonial.content}
                  rating={testimonial.rating}
                  image={testimonial.image}
                  verified={testimonial.verified}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Custom styled navigation buttons */}
          <div className="flex items-center justify-center mt-8 space-x-2">
            <CarouselPrevious className="relative static lg:-left-0 h-11 w-11 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:scale-105 transition-all" />
            
            {/* Slide indicator dots */}
            <div className="flex items-center justify-center space-x-1 px-4">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    current === i + 1 
                      ? 'w-4 bg-white' 
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            
            <CarouselNext className="relative static lg:-right-0 h-11 w-11 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:scale-105 transition-all" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
