
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users,
  Heart,
  Zap,
  Brain,
  ArrowUpRight,
  Globe,
  Award
} from "lucide-react";

const openPositions = [
  {
    title: "Senior iOS Developer",
    location: "Remote (U.S. Time Zones)",
    department: "Engineering",
    type: "Full-time",
    tags: ["iOS", "Swift", "SwiftUI"]
  },
  {
    title: "Product Designer",
    location: "San Francisco, CA",
    department: "Design",
    type: "Full-time",
    tags: ["UI/UX", "Figma", "Design Systems"]
  },
  {
    title: "DevOps Engineer",
    location: "Remote (Global)",
    department: "Engineering",
    type: "Full-time",
    tags: ["AWS", "Kubernetes", "CI/CD"]
  },
  {
    title: "Technical Writer",
    location: "New York, NY",
    department: "Documentation",
    type: "Contract",
    tags: ["Documentation", "Markdown", "API"]
  },
  {
    title: "Growth Marketing Manager",
    location: "Remote (Europe)",
    department: "Marketing",
    type: "Full-time",
    tags: ["SaaS", "User Acquisition", "Analytics"]
  }
];

const JobCard = ({ job, index }) => (
  <motion.div
    className="glass-panel p-6 hover:border-white/20 transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <h3 className="text-xl font-medium mb-2">{job.title}</h3>
    
    <div className="flex flex-wrap gap-2 mt-4 mb-5">
      {job.tags.map((tag, i) => (
        <span key={i} className="text-xs font-medium bg-white/10 rounded-full px-2.5 py-1">
          {tag}
        </span>
      ))}
    </div>
    
    <div className="flex flex-col space-y-2 text-sm text-gray-400 mb-6">
      <div className="flex items-center">
        <MapPin className="w-4 h-4 mr-2" />
        {job.location}
      </div>
      <div className="flex items-center">
        <Briefcase className="w-4 h-4 mr-2" />
        {job.department} • {job.type}
      </div>
    </div>
    
    <a 
      href={`/careers/${job.title.toLowerCase().replace(/\s+/g, '-')}`}
      className="inline-flex items-center text-white hover:underline"
    >
      View Position <ArrowUpRight className="w-4 h-4 ml-1" />
    </a>
  </motion.div>
);

const ValueCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="glass-panel p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <div className="flex items-center mb-4">
      <div className="p-2 rounded-lg bg-white/10 mr-3">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-xl font-medium">{title}</h3>
    </div>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

const BenefitItem = ({ title, description }) => (
  <div className="flex items-start">
    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
      <Heart className="w-5 h-5" />
    </div>
    <div>
      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);

const Careers = () => {
  return (
    <div className="relative min-h-screen">
      <Header />

      <main className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-white/10 mb-6">
            <Briefcase className="w-5 h-5 mr-2" />
            <span>Join Our Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Build the Future of Productivity</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join our passionate team creating innovative tools that help people work smarter.
            We're looking for exceptional talent to help us shape the future.
          </p>
        </motion.div>

        <motion.div
          className="mb-16 glass-panel p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ValueCard 
                icon={Zap}
                title="Innovation First"
                description="We prioritize innovation at every step, constantly pushing boundaries to create revolutionary productivity tools that solve real problems."
              />
              <ValueCard 
                icon={Users}
                title="User-Centered"
                description="Our users are at the heart of everything we do. We obsess over user experience, feedback, and solving genuine user pain points."
              />
              <ValueCard 
                icon={Brain}
                title="Thoughtful Design"
                description="We believe in the power of thoughtful design to transform complexity into clarity. Every pixel and interaction is deliberately crafted."
              />
              <ValueCard 
                icon={Globe}
                title="Remote-First"
                description="We embrace remote work and believe talent shouldn't be limited by geography. Our team works across multiple time zones with flexibility."
              />
              <ValueCard 
                icon={Award}
                title="Excellence"
                description="We pursue excellence in all we do, from code quality to customer support. Good enough is never enough for us."
              />
              <ValueCard 
                icon={Heart}
                title="Work-Life Balance"
                description="We value sustainable pace and believe that balance leads to better work. We encourage time off and focus on outcomes, not hours."
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Open Positions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openPositions.map((job, index) => (
              <JobCard key={index} job={job} index={index} />
            ))}
          </div>
          
          <div className="mt-10 glass-panel p-6 text-center">
            <h3 className="text-xl font-medium mb-2">Don't see the right fit?</h3>
            <p className="text-gray-400 mb-4">
              We're always looking for talented individuals to join our team. Send us your resume for future opportunities.
            </p>
            <a 
              href="mailto:careers@copyclipcloud.com" 
              className="inline-flex items-center px-6 py-3 bg-white text-black rounded-full hover:bg-opacity-90 transition-all"
            >
              Submit General Application
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mb-16 glass-panel p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8">Benefits & Perks</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BenefitItem 
              title="Competitive Compensation"
              description="We offer competitive salaries, equity packages, and regular performance reviews."
            />
            <BenefitItem 
              title="Remote-First Culture"
              description="Work from anywhere with flexible hours. We focus on results, not where or when you work."
            />
            <BenefitItem 
              title="Health & Wellness"
              description="Comprehensive health insurance, mental health support, and wellness stipends."
            />
            <BenefitItem 
              title="Continuous Learning"
              description="Annual learning budget for courses, books, conferences, and professional development."
            />
            <BenefitItem 
              title="Latest Equipment"
              description="Your choice of top-tier equipment to ensure you have the tools you need to excel."
            />
            <BenefitItem 
              title="Team Retreats"
              description="Regular company retreats to connect, collaborate, and celebrate our achievements together."
            />
            <BenefitItem 
              title="Unlimited PTO"
              description="Take the time you need to rest, recharge, and return with fresh ideas and energy."
            />
            <BenefitItem 
              title="Parental Leave"
              description="Generous parental leave for all new parents, including adoption and fostering."
            />
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Our Hiring Process</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We've designed our hiring process to be thorough yet respectful of your time, typically involving 3-4 steps from application to offer.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                <span className="font-bold">1</span>
              </div>
              <span>Application Review</span>
            </div>
            
            <div className="hidden md:block text-gray-600">→</div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                <span className="font-bold">2</span>
              </div>
              <span>Initial Interview</span>
            </div>
            
            <div className="hidden md:block text-gray-600">→</div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                <span className="font-bold">3</span>
              </div>
              <span>Technical Assessment</span>
            </div>
            
            <div className="hidden md:block text-gray-600">→</div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                <span className="font-bold">4</span>
              </div>
              <span>Final Interview</span>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
