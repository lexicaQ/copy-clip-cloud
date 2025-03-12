import React from "react";
import { motion } from "framer-motion";
import { Users, Shield, Award, Zap, Clock, Building, Calendar, MapPin } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InteractiveBackground from "@/components/landing/InteractiveBackground";
const About = () => {
  const teamMembers = [{
    name: "Alex Chen",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "Sarah Johnson",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "Michael Davis",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }, {
    name: "Rebecca Wong",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }];
  return <div className="min-h-screen bg-background">
      <InteractiveBackground />
      <Header />
      
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">About CopyClipCloud</h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We're on a mission to transform how people work with their clipboard, making digital workflows more efficient and secure.
            </p>
          </div>
          
          <div className="glass-panel p-8 rounded-2xl mb-16 border border-white/20 shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 pr-0 md:pr-10 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  CopyClipCloud was born in 2020 from a simple frustration: the limitations of the standard clipboard. Our founder, Alex Chen, was a software engineer who found himself constantly copying and pasting code snippets, losing important information in the process.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  What started as a personal project quickly grew into a robust solution embraced by professionals across industries. Today, CopyClipCloud helps thousands of users save time and work more efficiently.
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Building className="w-4 h-4 mr-2" />
                    <span>Founded 2020</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>Team of 15</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Munich</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Our team" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <ValueCard icon={Shield} title="Security First" description="We implement military-grade encryption and take your privacy seriously. Your data remains yours." />
              <ValueCard icon={Zap} title="Efficiency" description="We design intuitive tools that boost productivity and save you valuable time." />
              <ValueCard icon={Users} title="User-Centered" description="Our development is guided by real user needs and feedback from our community." />
              <ValueCard icon={Award} title="Excellence" description="We strive for the highest quality in design, performance, and reliability." />
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => <TeamMemberCard key={index} member={member} index={index} />)}
            </div>
          </div>
          
          <div className="glass-panel p-8 rounded-2xl border border-white/20 shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate and talented individuals to join our team. Check out our open positions and become part of our mission.
            </p>
            <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-opacity-90 transition-all font-medium">
              View Open Positions
            </button>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>;
};
const ValueCard = ({
  icon: Icon,
  title,
  description
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return <motion.div className="glass-panel p-6 rounded-xl flex flex-col items-center text-center" initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }} viewport={{
    once: true
  }}>
      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>;
};
const TeamMemberCard = ({
  member,
  index
}: {
  member: {
    name: string;
    role: string;
    image: string;
  };
  index: number;
}) => {
  return <motion.div className="glass-panel p-6 rounded-xl text-center" initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }} viewport={{
    once: true
  }}>
      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-white/20">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
      <p className="text-gray-400 mb-4">{member.role}</p>
      <div className="flex justify-center space-x-3">
        <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
          <Users className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
          <Clock className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
          <Calendar className="w-4 h-4" />
        </button>
      </div>
    </motion.div>;
};
export default About;