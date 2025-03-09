
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight, Quote, ShieldCheck, Award, ChevronLeft, ChevronRight } from "lucide-react";

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

// Modern testimonial card component
const TestimonialCard = ({ 
  name, role, content, rating, image, company, verified = true 
}: TestimonialProps) => {
  return (
    <motion.div 
      className="backdrop-blur-lg bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-2xl p-6 md:p-8 h-full flex flex-col transition-all duration-500 relative overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 40px -20px rgba(0, 0, 0, 0.3)",
        transition: { type: "spring", stiffness: 400, damping: 17 }
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-3xl opacity-60" />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Rating */}
        <div className="flex text-white mb-6">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 mr-1 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'}`}
              fill={i < Math.floor(rating) ? "currentColor" : "none"} 
            />
          ))}
          <span className="text-xs ml-2 text-gray-400">
            {rating.toFixed(1)}
          </span>
        </div>
        
        {/* Quote icon */}
        <Quote className="w-8 h-8 text-white/5 absolute top-6 right-6" />
        
        {/* Content */}
        <p className="text-gray-300 text-base leading-relaxed flex-grow mb-6">{`"${content}"`}</p>
        
        {/* User info */}
        <div className="flex items-center mt-auto pt-6 border-t border-white/10">
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-white/5">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            {verified && (
              <motion.div 
                className="absolute -bottom-1 -right-1 bg-gradient-to-tr from-blue-500 to-purple-500 p-0.5 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 500, damping: 15 }}
              >
                <div className="bg-black rounded-full p-0.5">
                  <ShieldCheck className="w-3 h-3 text-white" />
                </div>
              </motion.div>
            )}
          </div>
          <div className="ml-4">
            <h4 className="font-bold text-white text-base">{name}</h4>
            <p className="text-xs text-gray-300 flex items-center">
              {role} {company && <span className="mx-1">•</span>} 
              <span className="text-blue-300">{company}</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Hover animation overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
};

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Calculate items per page based on screen size
  const [itemsPerPage, setItemsPerPage] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Autoplay logic
  useEffect(() => {
    if (!autoplay || isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, autoplay, itemsPerPage, isPaused]);
  
  // Navigation functions
  const nextSlide = () => {
    if (currentIndex >= testimonials.length - itemsPerPage) {
      // Loop back to first slide with animation
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentIndex === 0) {
      // Loop to last possible slide
      setCurrentIndex(testimonials.length - itemsPerPage);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  
  // Touch handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setAutoplay(false);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      nextSlide(); // Swipe left
    }
    
    if (touchStart - touchEnd < -100) {
      prevSlide(); // Swipe right
    }
    
    setTimeout(() => setAutoplay(true), 5000);
  };
  
  // Mouse enter/leave handlers for pausing autoplay
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  
  // Get current visible testimonials
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);
  
  // Calculate the total number of pages
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage);
  
  return (
    <div className="mt-20 pt-16 border-t border-white/10">
      <motion.div 
        className="text-center mb-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-white/5 to-purple-500/10 border border-white/10 text-sm mb-6"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Award className="w-4 h-4 mr-2 text-yellow-400" />
          What Our Users Say
        </motion.div>
        
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">Trusted by Professionals</span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Hear what our users have to say about their experience with CopyClipCloud
        </motion.p>
        
        <motion.div 
          className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-10 w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        />
      </motion.div>
      
      <div 
        className="relative px-4 max-w-7xl mx-auto"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Control buttons - with enhanced styling */}
        <div className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 z-10">
          <motion.button 
            onClick={prevSlide} 
            className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
        </div>
        
        <div className="absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 z-10">
          <motion.button 
            onClick={nextSlide} 
            className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
        
        {/* Carousel content */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visibleTestimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={`${currentIndex}-${index}`}
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  content={testimonial.content}
                  rating={testimonial.rating}
                  image={testimonial.image}
                  verified={testimonial.verified}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Enhanced pagination indicators */}
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => {
                setCurrentIndex(index * itemsPerPage);
                setAutoplay(false);
                setTimeout(() => setAutoplay(true), 5000);
              }}
              className="group focus:outline-none"
            >
              <motion.div 
                className={`transition-all duration-300 rounded-full overflow-hidden h-2 ${
                  index === currentPage 
                    ? 'w-8 bg-gradient-to-r from-blue-400 to-purple-400' 
                    : 'w-2 bg-white/20'
                }`}
                whileHover={{ 
                  width: index === currentPage ? '2rem' : '1rem',
                  backgroundColor: index === currentPage ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)'
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
