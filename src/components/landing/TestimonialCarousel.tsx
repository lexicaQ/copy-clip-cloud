
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight, Quote, ShieldCheck, Award, User, Calendar, Heart } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  company?: string;
  verified?: boolean;
  date?: string;
}

const testimonials = [
  {
    name: "Alex Chen",
    role: "Senior UX Designer",
    company: "DesignWorks Inc.",
    content: "CopyClipCloud has revolutionized my workflow. The seamless sync across devices and clean interface saves me hours every week. The encryption features give me peace of mind when handling sensitive client data.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    verified: true,
    date: "March 15, 2023"
  },
  {
    name: "Sarah Johnson",
    role: "Lead Developer",
    company: "TechSolve",
    content: "As a developer juggling multiple projects, this is the clipboard manager I've been waiting for. The rich media support and organization are game-changing. Search functionality makes finding past snippets effortless.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    verified: true,
    date: "April 3, 2023"
  },
  {
    name: "Michael Davis",
    role: "Digital Marketing Director",
    company: "Growth Partners",
    content: "The encryption features give me peace of mind when handling sensitive client information. This tool has become essential for our entire team. We've seen a 30% boost in productivity since implementation.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    verified: true,
    date: "February 21, 2023"
  },
  {
    name: "Rebecca Wong",
    role: "Product Manager",
    company: "Innovate Solutions",
    content: "CopyClipCloud simplifies collaboration across our team. The interface is intuitive and the search functionality helps me find content instantly. It's been a game-changer for our product development workflow.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    verified: true,
    date: "January 17, 2023"
  },
  {
    name: "James Wilson",
    role: "Content Creator",
    company: "CreativeSphere",
    content: "As someone who deals with various media types daily, the ability to seamlessly organize and access my clipboard history is invaluable. The image handling capabilities are particularly impressive.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    verified: true,
    date: "May 9, 2023"
  },
  {
    name: "Olivia Martinez",
    role: "UI Designer",
    company: "DesignForward",
    content: "The clean interface and smooth performance make this a standout tool. It's become an essential part of my design workflow. The categorization features help me maintain a library of design elements I use frequently.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    verified: true,
    date: "April 28, 2023"
  },
  {
    name: "Daniel Kim",
    role: "Software Engineer",
    company: "TechInnovate",
    content: "As a developer, having a reliable clipboard manager is essential. CopyClipCloud's code snippet detection and syntax highlighting save me countless hours when reusing code fragments across projects.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    verified: true,
    date: "March 3, 2023"
  },
  {
    name: "Emma Roberts",
    role: "Technical Writer",
    company: "DocuTech",
    content: "The format preservation and organization features are perfect for my documentation work. Being able to categorize and tag clipboard items makes my reference material instantly accessible.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    verified: true,
    date: "February 14, 2023"
  },
  {
    name: "Thomas Wang",
    role: "Project Manager",
    company: "GlobalTech Solutions",
    content: "CopyClipCloud has streamlined our team's communication. We share snippets seamlessly and the organization system keeps everything accessible. A must-have tool for any collaborative team.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    verified: true,
    date: "January 30, 2023"
  },
  {
    name: "Sophia Garcia",
    role: "Digital Artist",
    company: "ArtVision Studio",
    content: "The image handling capabilities are exceptional. I can keep my visual references organized and accessible, which has been a game-changer for my creative process.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    verified: true,
    date: "March 22, 2023"
  },
  {
    name: "David Chen",
    role: "Frontend Developer",
    company: "WebFlux Technologies",
    content: "The code snippet management is incredibly useful. The syntax highlighting and search functionality make it easy to find and reuse code fragments, saving me hours of development time.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    verified: true,
    date: "April 17, 2023"
  },
  {
    name: "Jessica Park",
    role: "Marketing Specialist",
    company: "Growth Accelerate",
    content: "CopyClipCloud has simplified our content management workflow. The ability to organize and access marketing copy across platforms has significantly improved our team's efficiency.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    verified: true,
    date: "May 12, 2023"
  }
];

const Testimonial = ({ 
  name, role, content, rating, image, company, verified = true, date 
}: TestimonialProps) => {
  return (
    <motion.div 
      className="glass-panel p-8 relative h-full flex flex-col hover:border-white/20 transition-all duration-300 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -top-4 -right-4 bg-white/10 p-3 rounded-full backdrop-blur-md shadow-lg border border-white/20">
        <Quote className="w-5 h-5 text-white" />
      </div>
      
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border border-white/20 shadow-lg">
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
      
      <div className="mt-auto flex justify-between items-center">
        <div className="flex text-white">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 mr-1 ${i < Math.floor(rating) ? 'text-white' : 'text-gray-600'}`}
              fill={i < Math.floor(rating) ? "currentColor" : "none"} 
            />
          ))}
        </div>
        {date && (
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="w-3 h-3 mr-1" />
            {date}
          </div>
        )}
      </div>
      
      <motion.button 
        className="absolute bottom-2 right-2 p-1.5 bg-transparent text-gray-400 rounded-full hover:text-white"
        whileHover={{ scale: 1.2 }}
      >
        <Heart className="w-3.5 h-3.5" />
      </motion.button>
    </motion.div>
  );
};

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  
  // Update items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerPage(3); // xl screens
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2); // md screens
      } else {
        setItemsPerPage(1); // sm screens
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Autoplay functionality - switch every 3 seconds
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [currentIndex, autoplay, itemsPerPage]);
  
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + itemsPerPage;
      return nextIndex >= testimonials.length ? 0 : nextIndex;
    });
  }, [itemsPerPage]);
  
  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - itemsPerPage;
      return nextIndex < 0 ? Math.max(0, testimonials.length - itemsPerPage) : nextIndex;
    });
  }, [itemsPerPage]);
  
  const goToPage = useCallback((pageIndex: number) => {
    const newIndex = pageIndex * itemsPerPage;
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
  }, [currentIndex, itemsPerPage]);
  
  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);
  
  return (
    <div className="mt-20 pt-16 border-t border-white/10 relative">
      {/* Background element */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-white/5 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 relative"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="text-gradient">Trusted by Professionals</span>
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-white/10 via-white/40 to-white/10 mx-auto mt-3"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
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
          {/* Navigation buttons with improved design */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:block">
            <motion.button 
              onClick={prevSlide} 
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-white/20 transition-all border border-white/20 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:block">
            <motion.button 
              onClick={nextSlide} 
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-white/20 transition-all border border-white/20 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
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
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
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
                    date={testimonial.date}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Mobile navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4 md:hidden">
            <motion.button 
              onClick={prevSlide} 
              className="w-10 h-10 rounded-full glass-panel flex items-center justify-center border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-4 h-4" />
            </motion.button>
            <motion.button 
              onClick={nextSlide} 
              className="w-10 h-10 rounded-full glass-panel flex items-center justify-center border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
          
          {/* Enhanced pagination with animations */}
          <div className="flex justify-center mt-10 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => {
              const isActive = Math.floor(currentIndex / itemsPerPage) === index;
              return (
                <motion.button
                  key={index}
                  onClick={() => {
                    goToPage(index);
                    setAutoplay(false);
                    setTimeout(() => setAutoplay(true), 5000);
                  }}
                  className={`relative h-2.5 rounded-full transition-all overflow-hidden ${
                    isActive ? 'w-8 bg-white' : 'w-2.5 bg-white/30 hover:bg-white/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Go to page ${index + 1}`}
                >
                  {isActive && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-white/50 via-white to-white/50"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
          
          {/* Testimonial stats */}
          <motion.div 
            className="mt-16 flex flex-wrap justify-center gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel px-8 py-6 rounded-xl">
              <h3 className="text-4xl font-bold mb-2">5.0</h3>
              <p className="text-gray-400">Average Rating</p>
              <div className="flex justify-center mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-white mr-1" fill="currentColor" />
                ))}
              </div>
            </div>
            
            <div className="glass-panel px-8 py-6 rounded-xl">
              <h3 className="text-4xl font-bold mb-2">10k+</h3>
              <p className="text-gray-400">Happy Users</p>
              <div className="flex justify-center mt-2">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <div className="glass-panel px-8 py-6 rounded-xl">
              <h3 className="text-4xl font-bold mb-2">98%</h3>
              <p className="text-gray-400">Satisfaction Rate</p>
              <div className="flex justify-center mt-2">
                <Heart className="w-5 h-5 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialCarousel;
