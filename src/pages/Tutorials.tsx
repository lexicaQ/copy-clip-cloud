
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Book, Clock, Calendar, User, ArrowRight, Play, BookOpen, Download, Filter } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InteractiveBackground from "@/components/landing/InteractiveBackground";

const tutorialsData = [
  {
    id: 1,
    title: "Getting Started with CopyClipCloud",
    description: "Learn the basics of using CopyClipCloud to organize your clipboard history and boost productivity.",
    category: "Beginner",
    duration: "5 min",
    date: "May 12, 2023",
    author: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    popular: true
  },
  {
    id: 2,
    title: "Advanced Organization Techniques",
    description: "Discover how to use folders, tags, and smart groups to keep your clipboard items perfectly organized.",
    category: "Advanced",
    duration: "12 min",
    date: "June 3, 2023",
    author: "Alex Chen",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    popular: true
  },
  {
    id: 3,
    title: "Syncing Across Multiple Devices",
    description: "Set up seamless synchronization between your Mac, iPhone, and iPad for access to your clipboard anywhere.",
    category: "Intermediate",
    duration: "8 min",
    date: "July 15, 2023",
    author: "Michael Davis",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    popular: false
  },
  {
    id: 4,
    title: "Encryption and Security Features",
    description: "Learn how to use CopyClipCloud's military-grade encryption to protect sensitive clipboard data.",
    category: "Security",
    duration: "10 min",
    date: "August 22, 2023",
    author: "Rebecca Wong",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    popular: true
  },
  {
    id: 5,
    title: "Keyboard Shortcuts Mastery",
    description: "Speed up your workflow by learning all the essential keyboard shortcuts for CopyClipCloud.",
    category: "Productivity",
    duration: "7 min",
    date: "September 5, 2023",
    author: "James Wilson",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    popular: false
  },
  {
    id: 6,
    title: "Working with Images and Rich Media",
    description: "Master techniques for handling images, videos, and other rich media formats in your clipboard history.",
    category: "Media",
    duration: "15 min",
    date: "October 11, 2023",
    author: "Olivia Martinez",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    popular: false
  },
];

const categories = [
  "All", "Beginner", "Intermediate", "Advanced", "Productivity", "Security", "Media"
];

const TutorialCard = ({ tutorial, index }: { tutorial: typeof tutorialsData[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel hover:border-white/20 transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img src={tutorial.image} alt={tutorial.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <span className="inline-block text-xs font-medium bg-white/20 rounded-full px-2.5 py-1 backdrop-blur-md">
            {tutorial.category}
          </span>
          {tutorial.popular && (
            <span className="inline-block ml-2 text-xs font-medium bg-white text-black rounded-full px-2.5 py-1">
              Popular
            </span>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium mb-2">{tutorial.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{tutorial.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1" />
              {tutorial.duration}
            </span>
            <span className="flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              {tutorial.date}
            </span>
          </div>
        </div>
        <div className="flex items-center mt-5 pt-5 border-t border-white/5">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">{tutorial.author}</span>
          </div>
          <Link 
            to={`/tutorials/${tutorial.id}`} 
            className="ml-auto flex items-center text-sm font-medium text-white hover:text-gray-300 transition-colors"
          >
            <span>Read Tutorial</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedTutorial = () => {
  return (
    <motion.div 
      className="glass-panel p-8 rounded-2xl mb-16 border border-white/20 shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-6 lg:mb-0">
          <h4 className="text-sm font-medium text-white/70 mb-3 flex items-center">
            <BookOpen className="w-4 h-4 mr-2" />
            Featured Tutorial
          </h4>
          <h2 className="text-3xl font-bold mb-4">Master Class: From Beginner to Pro</h2>
          <p className="text-gray-400 mb-6">
            This comprehensive guide will take you from a complete beginner to a CopyClipCloud power user. 
            Learn all the essential techniques, shortcuts, and strategies to transform your clipboard management workflow.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-gray-400 text-sm">
              <Clock className="w-4 h-4 mr-1.5" />
              <span>45 minute course</span>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <User className="w-4 h-4 mr-1.5" />
              <span>By Daniel Kim</span>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <Calendar className="w-4 h-4 mr-1.5" />
              <span>Updated April 2023</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/tutorials/masterclass"
              className="flex items-center space-x-2 px-5 py-2.5 bg-white text-black rounded-full hover:bg-opacity-90 transition-all"
            >
              <Play className="w-4 h-4" />
              <span className="font-medium">Start Learning</span>
            </Link>
            <button className="flex items-center space-x-2 px-5 py-2.5 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all border border-white/20">
              <Download className="w-4 h-4" />
              <span className="font-medium">Download PDF</span>
            </button>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-video bg-black/40 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Master Class Tutorial" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40">
                <Play className="w-8 h-8 text-white fill-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Tutorials = () => {
  return (
    <div className="min-h-screen bg-background">
      <InteractiveBackground />
      <Header />
      
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Tutorials & Guides</h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Learn how to get the most out of CopyClipCloud with our collection of tutorials, guides, and tips designed for users of all levels.
            </p>
          </div>
          
          <FeaturedTutorial />
          
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h2 className="text-2xl font-bold mb-4 sm:mb-0">Latest Tutorials</h2>
            <div className="flex items-center space-x-2 bg-white/5 rounded-lg p-1 border border-white/10">
              <Filter className="w-4 h-4 ml-2" />
              <select className="bg-transparent text-sm focus:outline-none border-none text-gray-300 py-1.5 pr-2">
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorialsData.map((tutorial, index) => (
              <TutorialCard key={tutorial.id} tutorial={tutorial} index={index} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full hover:bg-white/15 transition-all border border-white/20">
              <span className="mr-2">Load More Tutorials</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Tutorials;
