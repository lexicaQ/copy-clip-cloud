
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

// Enhanced testimonial card with better animations and effects
const TestimonialCard = ({ 
  name, role, content, rating, image, company, verified = true 
}: TestimonialProps) => {
  return (
    <motion.div 
      className="card-futuristic h-full relative overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-3xl" />
      <div className="absolute bottom-0 left-0 h-20 w-20 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-3xl" />
      
      <div className="p-8 relative z-10 flex flex-col h-full">
        {/* Enhanced quote icon */}
        <motion.div
          initial={{ opacity: 0.2, y: 5 }}
          animate={{ opacity: 0.1, y: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <Quote className="w-10 h-10 text-white absolute top-6 right-6" />
        </motion.div>
        
        {/* Enhanced rating with animated stars */}
        <div className="flex text-white mb-6">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <Star 
                className={`w-4 h-4 mr-1 ${i < Math.floor(rating) ? 'text-white' : 'text-gray-600'}`}
                fill={i < Math.floor(rating) ? "currentColor" : "none"} 
              />
            </motion.div>
          ))}
          <motion.span 
            className="text-xs ml-2 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {rating.toFixed(1)}
          </motion.span>
        </div>
        
        {/* Content with improved layout */}
        <p className="text-gray-300 italic leading-relaxed flex-grow mb-6 font-light">{`"${content}"`}</p>
        
        {/* Enhanced user info with better animations */}
        <div className="flex items-center mt-auto pt-6 border-t border-white/10">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 shadow-lg">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            {verified && (
              <motion.div 
                className="absolute -bottom-1 -right-1 bg-white/10 p-1 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <ShieldCheck className="w-3 h-3 text-white" />
              </motion.div>
            )}
          </motion.div>
          <div className="ml-4">
            <motion.h4 
              className="font-medium text-white text-base"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {name}
            </motion.h4>
            <motion.p 
              className="text-xs text-gray-400 flex items-center"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {role} {company && <span className="mx-1">•</span>} {company}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
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
  
  // Improved autoplay logic with better transitioning
  useEffect(() => {
    if (!autoplay || isTransitioning) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, autoplay, itemsPerPage, isTransitioning]);
  
  // Enhanced navigation functions with smoother transitions
  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex >= testimonials.length - itemsPerPage ? 0 : prevIndex + 1
    );
    
    setTimeout(() => setIsTransitioning(false), 600); // Match transition duration
  };
  
  const handlePrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - itemsPerPage : prevIndex - 1
    );
    
    setTimeout(() => setIsTransitioning(false), 600); // Match transition duration
  };
  
  // Enhanced touch handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setAutoplay(false);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (isTransitioning) return;
    
    if (touchStart - touchEnd > 100) {
      handleNext(); // Swipe left
    }
    
    if (touchStart - touchEnd < -100) {
      handlePrev(); // Swipe right
    }
    
    setTimeout(() => setAutoplay(true), 5000);
  };
  
  // Get current visible testimonials
  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);
  
  // Calculate the total number of pages for pagination dots
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage);
  
  return (
    <div className="mt-24 pt-16 border-t border-white/10">
      <motion.div 
        className="text-center mb-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 text-sm mb-5 border border-white/10"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
        >
          <Award className="w-4 h-4 mr-2" />
          User Testimonials
        </motion.div>
        
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-gradient">What Our Users Say</span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Join thousands of professionals who trust CopyClipCloud for their clipboard management needs
        </motion.p>
        
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2 translate-y-10 w-28 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
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
      >
        {/* Enhanced control buttons with better positioning and animations */}
        <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10 hidden md:block">
          <motion.button 
            onClick={handlePrev} 
            className="w-14 h-14 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-all border border-white/10"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            disabled={isTransitioning}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
        </div>
        
        <div className="absolute -right-7 top-1/2 -translate-y-1/2 z-10 hidden md:block">
          <motion.button 
            onClick={handleNext} 
            className="w-14 h-14 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-all border border-white/10"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            disabled={isTransitioning}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
        
        {/* Mobile navigation buttons */}
        <div className="flex justify-between md:hidden absolute top-1/2 -translate-y-1/2 w-full z-10 px-2">
          <motion.button 
            onClick={handlePrev} 
            className="w-10 h-10 rounded-full glass-panel flex items-center justify-center bg-black/50 backdrop-blur-lg"
            whileTap={{ scale: 0.9 }}
            disabled={isTransitioning}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          
          <motion.button 
            onClick={handleNext} 
            className="w-10 h-10 rounded-full glass-panel flex items-center justify-center bg-black/50 backdrop-blur-lg"
            whileTap={{ scale: 0.9 }}
            disabled={isTransitioning}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
        
        {/* Carousel content with improved transitions */}
        <div className="overflow-hidden py-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentTestimonials.map((testimonial, index) => (
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
        
        {/* Enhanced pagination indicators with better animations */}
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: testimonials.length - itemsPerPage + 1 }).map((_, index) => (
            <motion.button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'w-10 h-2 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' 
                  : 'w-2 h-2 bg-white/20 hover:bg-white/50'
              }`}
              onClick={() => {
                if (isTransitioning) return;
                setIsTransitioning(true);
                setCurrentIndex(index);
                setAutoplay(false);
                setTimeout(() => {
                  setIsTransitioning(false);
                  setAutoplay(true);
                }, 600);
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
