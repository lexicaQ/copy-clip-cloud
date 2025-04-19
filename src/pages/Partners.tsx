
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Users, 
  CheckCircle, 
  Globe, 
  ArrowRight,
  MessageSquare,
  Mail,
  ShieldCheck,
  Zap,
  HeartHandshake,
  Building,
  Award
} from "lucide-react";

const partnerTypes = [
  {
    title: "Technology Partners",
    description: "Integrate CopyClipCloud with your platform or service to enhance productivity for mutual customers.",
    icon: Globe,
    benefits: [
      "Access to developer APIs and SDK",
      "Joint marketing opportunities",
      "Early access to new features",
      "Technical implementation support"
    ]
  },
  {
    title: "Reseller Partners",
    description: "Add CopyClipCloud to your product portfolio and provide your customers with leading clipboard management.",
    icon: Building,
    benefits: [
      "Competitive commission structure",
      "Sales and marketing resources",
      "Dedicated partner manager",
      "Training and certification"
    ]
  },
  {
    title: "Educational Partners",
    description: "Special programs for educational institutions to empower students and faculty with productivity tools.",
    icon: Award,
    benefits: [
      "Discounted licensing",
      "Curriculum integration resources",
      "Campus-wide deployment assistance",
      "Student ambassador program"
    ]
  }
];

const featuredPartners = [
  { name: "Apple", logoPlaceholder: "A", category: "Platform Partner" },
  { name: "Microsoft", logoPlaceholder: "M", category: "Integration Partner" },
  { name: "Adobe", logoPlaceholder: "A", category: "Technology Partner" },
  { name: "Slack", logoPlaceholder: "S", category: "Integration Partner" },
  { name: "Notion", logoPlaceholder: "N", category: "Technology Partner" },
  { name: "Zoom", logoPlaceholder: "Z", category: "Integration Partner" },
];

const PartnerTypeCard = ({ partnerType, index }) => (
  <motion.div
    className="glass-panel p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <div className="flex items-center mb-4">
      <div className="p-2 rounded-lg bg-white/10 mr-3">
        <partnerType.icon className="w-5 h-5" />
      </div>
      <h3 className="text-xl font-medium">{partnerType.title}</h3>
    </div>
    
    <p className="text-gray-400 text-sm mb-6">{partnerType.description}</p>
    
    <h4 className="font-medium mb-3">Key Benefits:</h4>
    <ul className="space-y-2 mb-6">
      {partnerType.benefits.map((benefit, idx) => (
        <li key={idx} className="flex items-start">
          <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
          <span className="text-gray-300 text-sm">{benefit}</span>
        </li>
      ))}
    </ul>
    
    <a 
      href="#learn-more"
      className="text-white hover:underline inline-flex items-center"
    >
      Learn More <ArrowRight className="w-4 h-4 ml-1" />
    </a>
  </motion.div>
);

const FeaturedPartnerLogo = ({ partner, index }) => (
  <motion.div
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
  >
    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3">
      <span className="text-xl font-bold">{partner.logoPlaceholder}</span>
    </div>
    <p className="font-medium text-sm">{partner.name}</p>
    <p className="text-xs text-gray-400">{partner.category}</p>
  </motion.div>
);

const Partners = () => {
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
            <HeartHandshake className="w-5 h-5 mr-2" />
            <span>Partner Program</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Grow Your Business with CopyClipCloud</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join our partner ecosystem and collaborate with us to deliver exceptional 
            productivity solutions to your customers.
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
            <h2 className="text-2xl font-bold mb-8 text-center">Why Partner With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 rounded-xl">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 mr-3 text-white/70" />
                  <h3 className="text-xl font-medium">Expand Your Reach</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Gain access to our growing user base of productivity-focused professionals and businesses looking for advanced clipboard management.
                </p>
              </div>
              
              <div className="p-6 bg-white/5 rounded-xl">
                <div className="flex items-center mb-4">
                  <Zap className="w-6 h-6 mr-3 text-white/70" />
                  <h3 className="text-xl font-medium">Innovative Technology</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Partner with a technology leader in productivity tools, bringing cutting-edge features and AI capabilities to your customers.
                </p>
              </div>
              
              <div className="p-6 bg-white/5 rounded-xl">
                <div className="flex items-center mb-4">
                  <ShieldCheck className="w-6 h-6 mr-3 text-white/70" />
                  <h3 className="text-xl font-medium">Security & Trust</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Align with a brand that prioritizes data security and user privacy, building trust and credibility with your audience.
                </p>
              </div>
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
          <h2 className="text-2xl font-bold mb-8 text-center">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerTypes.map((partnerType, index) => (
              <PartnerTypeCard key={index} partnerType={partnerType} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="glass-panel p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Our Partners</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mb-8">
            {featuredPartners.map((partner, index) => (
              <FeaturedPartnerLogo key={index} partner={partner} index={index} />
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="#view-all-partners"
              className="text-white hover:underline inline-flex items-center"
            >
              View All Partners <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="glass-panel p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-lg bg-white/10 mr-3">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium">Partner Support</h3>
            </div>
            
            <p className="text-gray-400 mb-6">
              Our dedicated partner success team is committed to helping you succeed. We provide comprehensive resources, training, and support.
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-gray-300">Dedicated partner manager</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-gray-300">Technical implementation assistance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-gray-300">Marketing and sales resources</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-gray-300">Training and certification programs</span>
              </li>
            </ul>
            
            <a 
              href="/support"
              className="inline-flex items-center text-white hover:underline"
            >
              Visit Partner Support Portal <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </motion.div>
          
          <motion.div
            className="glass-panel p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-lg bg-white/10 mr-3">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium">Become a Partner</h3>
            </div>
            
            <p className="text-gray-400 mb-6">
              Ready to join our partner ecosystem? Fill out the form below and our partnerships team will contact you to discuss next steps.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <input 
                type="email" 
                placeholder="Work Email" 
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <input 
                type="text" 
                placeholder="Company" 
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <select 
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <option value="">Partnership Type</option>
                <option value="technology">Technology Partner</option>
                <option value="reseller">Reseller Partner</option>
                <option value="education">Educational Partner</option>
              </select>
            </div>
            
            <button className="w-full px-6 py-3 bg-white text-black rounded-lg hover:bg-opacity-90 transition-all">
              Submit Application
            </button>
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Questions?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Contact our partnerships team to learn more about our partner program and how we can work together.
          </p>
          <a 
            href="mailto:partners@copyclipcloud.com" 
            className="px-6 py-3 bg-white text-black rounded-full inline-flex items-center hover:bg-opacity-90 transition-all"
          >
            Contact Partnerships Team
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Partners;
