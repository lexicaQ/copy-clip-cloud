import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, PenTool, Briefcase, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const UserExamples = () => {
  const userProfiles = [
    {
      title: "Developer",
      icon: Code,
      description: "Sync code snippets and development resources across devices",
      useCases: ["Code Snippets", "API Keys", "Git Commands", "Documentation Links"],
      color: "from-white/10 to-white/5",
      link: "/use-cases/developer"
    },
    {
      title: "Designer",
      icon: PenTool,
      description: "Share colors, images, and designs seamlessly between laptop and tablet",
      useCases: ["Color Codes", "Design Assets", "Image Snippets", "Inspiration"],
      color: "from-white/10 to-white/5",
      link: "/use-cases/designer"
    },
    {
      title: "Business",
      icon: Briefcase,
      description: "Always have important business information at hand",
      useCases: ["Contact Information", "Meeting Notes", "Statistics", "Presentation Text"],
      color: "from-white/10 to-white/5",
      link: "/use-cases/business"
    },
    {
      title: "Science",
      icon: BookOpen,
      description: "Organize research results and literature",
      useCases: ["Quotes", "Research Data", "Literature References", "Statistics"],
      color: "from-white/10 to-white/5",
      link: "/use-cases/science"
    }
  ];

  return (
    <motion.div 
      className="py-24 relative overflow-x-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-gray-200/5 rounded-full blur-[80px] opacity-20"></div>
      </div>
      
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-4 text-gradient"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          For every use case
        </motion.h2>
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          CopyClipCloud is optimized for various professions and use cases
        </motion.p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {userProfiles.map((profile, index) => (
          <motion.div 
            key={index}
            className="glass-panel overflow-hidden relative group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${profile.color} opacity-40 group-hover:opacity-60 transition-opacity duration-300`}></div>
            
            <div className="p-6 relative z-10">
              <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <profile.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{profile.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{profile.description}</p>
              
              <div className="space-y-2">
                {profile.useCases.map((useCase, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                    <p className="text-sm text-gray-300">{useCase}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/10">
                <Link 
                  to={profile.link}
                  className="text-sm flex items-center text-white/70 hover:text-white group/btn"
                >
                  Learn more 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default UserExamples;
