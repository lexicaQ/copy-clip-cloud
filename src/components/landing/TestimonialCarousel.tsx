
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight, Quote, ShieldCheck, Award } from "lucide-react";

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

const Testimonial = ({ 
  name, role, content, rating, image, company, verified = true 
}: TestimonialProps) => {
  return (
    <motion.div 
      className="glass-panel p-8 relative h-full flex flex-col hover:border-white/20 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -top-4 -right-4 bg-white/10 p-2 rounded-full backdrop-blur-md">
        <Quote className="w-6 h-6 text-white" />
      </div>
      
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border border-white/20 shadow-glow">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="flex items-center">
            <h4 className="font-medium text-white text-lg">{name}</h4>
            {verified && (
              <div className="ml-2 bg-white/10 p-1 rounded-full">
                <ShieldCheck className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
          <p className="text-sm text-gray-400">{role}</p>
          {company && <p className="text-xs text-gray-500 flex items-center"><Award className="w-3 h-3 mr-1" /> {company}</p>}
        </div>
      </div>
      
      <p className="text-gray-300 mb-6 italic leading-relaxed flex-grow">{`"${content}"`}</p>
      
      <div className="flex text-white mt-auto">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 mr-1 ${i < Math.floor(rating) ? 'text-white' : 'text-gray-600'}`}
            fill={i < Math.floor(rating) ? "currentColor" : "none"} 
          />
        ))}
        <span className="text-xs ml-2 text-gray-400">
          {rating.toFixed(1)}/5.0
        </span>
      </div>
    </motion.div>
  );
};

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const itemsPerPage = { 
    desktop: 3, // lg screens
    tablet: 2,  // md screens
    mobile: 1   // sm screens
  };
  const [itemsToShow, setItemsToShow] = useState(itemsPerPage.desktop);
  
  // Update items to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(itemsPerPage.desktop);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(itemsPerPage.tablet);
      } else {
        setItemsToShow(itemsPerPage.mobile);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, autoplay, itemsToShow]);
  
  const totalPages = Math.ceil(testimonials.length / itemsToShow);
  
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - itemsToShow ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - itemsToShow : prevIndex - 1
    );
  };
  
  const goToPage = (pageIndex: number) => {
    const newIndex = pageIndex * itemsToShow;
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
  };
  
  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + itemsToShow);
  
  return (
    <div className="mt-20 pt-16 border-t border-white/10">
      <motion.h2 
        className="text-4xl font-bold text-center mb-4 relative"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">Trusted by Professionals</span>
        <div className="h-1 w-20 bg-white/20 mx-auto mt-3"></div>
      </motion.h2>
      
      <motion.p 
        className="text-gray-400 text-center mb-16 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        Join thousands of satisfied professionals who have transformed their workflow with CopyClipCloud
      </motion.p>
      
      <div className="relative px-4 max-w-7xl mx-auto">
        {/* Navigation buttons */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:block">
          <button 
            onClick={prevSlide} 
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all border border-white/20"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:block">
          <button 
            onClick={nextSlide} 
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all border border-white/20"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Carousel */}
        <div className="overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div 
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentTestimonials.map((testimonial, index) => (
                <Testimonial 
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
        
        {/* Pagination dots */}
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                goToPage(index);
                setAutoplay(false);
                setTimeout(() => setAutoplay(true), 5000);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                Math.floor(currentIndex / itemsToShow) === index 
                  ? 'bg-white w-6' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
