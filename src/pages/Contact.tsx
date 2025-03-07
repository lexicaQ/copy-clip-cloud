
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Phone, Send, Clock, Check, AlertCircle, Users, Award, Globe, Shield } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InteractiveBackground from "@/components/landing/InteractiveBackground";
import { AnimatedBadge } from "@/components/ui/animated-badge";
import { toast } from 'sonner';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    agreeToTerms: false
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({ ...prev, agreeToTerms: e.target.checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      toast.success("Your message has been sent! We'll get back to you soon.");
    }, 1500);
  };

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
            <motion.div 
              className="w-20 h-20 mx-auto rounded-full bg-white/5 backdrop-blur-lg flex items-center justify-center mb-6 border border-white/10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <MessageSquare className="w-10 h-10" />
            </motion.div>
            
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Have questions about CopyClipCloud? Reach out to our team for support, feedback, or inquiries.
            </p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <AnimatedBadge text="24/7 Support" icon={<Clock className="w-3 h-3" />} />
              <AnimatedBadge text="Global Team" icon={<Globe className="w-3 h-3" />} />
              <AnimatedBadge text="Secure Communications" icon={<Shield className="w-3 h-3" />} />
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div 
              className="glass-panel p-8 rounded-2xl border border-white/20 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ 
                boxShadow: "0 10px 30px -15px rgba(255, 255, 255, 0.1)",
                translateY: -5
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex items-center mb-6">
                <Mail className="w-5 h-5 mr-2" />
                <h2 className="text-2xl font-bold">Send Us a Message</h2>
              </div>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <motion.div 
                      whileFocus={{ scale: 1.01 }}
                      className="relative"
                    >
                      <input 
                        type="text" 
                        name="name"
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                      />
                      {/* Focus animation */}
                      <motion.div 
                        className="absolute inset-0 border border-white/40 rounded-lg pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileFocus={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                      <input 
                        type="email" 
                        name="email"
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40"
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                    <input 
                      type="text" 
                      name="subject"
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40"
                      placeholder="What is this regarding?"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                    <textarea 
                      name="message"
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 h-36 resize-none"
                      placeholder="Your message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                </div>
                
                <div className="flex items-center">
                  <input 
                    id="terms" 
                    type="checkbox" 
                    className="w-4 h-4 bg-white/5 border border-white/20 rounded" 
                    checked={formState.agreeToTerms}
                    onChange={handleCheckboxChange}
                    required
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
                    I agree to the processing of my personal data as described in the Privacy Policy
                  </label>
                </div>
                
                <div>
                  <motion.button 
                    type="submit" 
                    className="relative w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3 bg-white text-black rounded-lg hover:bg-opacity-90 transition-all font-medium overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)" }}
                    whileTap={{ scale: 0.98 }}
                    disabled={formStatus === 'submitting'}
                  >
                    {/* Button highlight effect */}
                    <motion.div 
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: "-100%", opacity: 0.5 }}
                      animate={{ x: "200%" }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {formStatus === 'submitting' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-transparent border-t-black border-r-black rounded-full"
                        />
                        <span className="relative z-10">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span className="relative z-10">Send Message</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
            
            <motion.div 
              className="glass-panel p-8 rounded-2xl border border-white/20 shadow-lg flex flex-col justify-between"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ 
                boxShadow: "0 10px 30px -15px rgba(255, 255, 255, 0.1)",
                translateY: -5
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div>
                <div className="flex items-center mb-6">
                  <Phone className="w-5 h-5 mr-2" />
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                </div>
                
                <ul className="space-y-6 mb-10">
                  <ContactItem 
                    icon={Mail} 
                    title="Email Us" 
                    content="support@copyclipcloud.com"
                    link="mailto:support@copyclipcloud.com"
                  />
                  <ContactItem 
                    icon={Phone} 
                    title="Call Us" 
                    content="+1 (555) 123-4567"
                    link="tel:+15551234567"
                  />
                  <ContactItem 
                    icon={MapPin} 
                    title="Visit Us" 
                    content="123 Tech Street, San Francisco, CA 94107"
                    link="https://maps.google.com"
                  />
                  <ContactItem 
                    icon={Clock} 
                    title="Working Hours" 
                    content="Monday - Friday: 9AM - 6PM PST"
                  />
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Our Support Commitment
                </h3>
                <div className="space-y-3">
                  <SupportPoint text="Response within 24 hours" />
                  <SupportPoint text="Dedicated support team" />
                  <SupportPoint text="Comprehensive documentation" />
                  <SupportPoint text="Regular product updates" />
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="glass-panel p-8 rounded-2xl border border-white/20 shadow-lg mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-8 justify-center">
              <Users className="w-5 h-5 mr-2" />
              <h2 className="text-2xl font-bold">Our Global Team</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Alex Morgan", role: "Customer Support Lead", image: "https://randomuser.me/api/portraits/men/32.jpg" },
                { name: "Sarah Chen", role: "Technical Support", image: "https://randomuser.me/api/portraits/women/44.jpg" },
                { name: "James Wilson", role: "Product Specialist", image: "https://randomuser.me/api/portraits/men/75.jpg" },
                { name: "Emma Rodriguez", role: "Account Manager", image: "https://randomuser.me/api/portraits/women/68.jpg" }
              ].map((member, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="w-20 h-20 rounded-full mb-3 overflow-hidden border-2 border-white/20"
                    whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)" }}
                  >
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-gray-400">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-panel p-8 rounded-2xl border border-white/20 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-8 justify-center">
              <AlertCircle className="w-5 h-5 mr-2" />
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FaqItem 
                question="How quickly can I expect a response?" 
                answer="We aim to respond to all inquiries within 24 hours during business days. Premium support customers receive priority response times."
              />
              <FaqItem 
                question="Do you offer phone support?" 
                answer="Yes, phone support is available for business and enterprise customers. Individual users can schedule a call through our support portal."
              />
              <FaqItem 
                question="How can I report a bug?" 
                answer="You can report bugs through our support form or by sending an email to bugs@copyclipcloud.com with detailed information about the issue."
              />
              <FaqItem 
                question="Can I request a feature?" 
                answer="Absolutely! We welcome feature requests through our feedback form. Many of our best features have come from user suggestions."
              />
              <FaqItem 
                question="Is there a community forum?" 
                answer="Yes, we have an active community forum where users can share tips, ask questions, and connect with other CopyClipCloud users."
              />
              <FaqItem 
                question="Do you offer refunds?" 
                answer="We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, simply contact our support team for a full refund."
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

const ContactItem = ({ 
  icon: Icon, title, content, link 
}: { 
  icon: React.ElementType; 
  title: string; 
  content: string; 
  link?: string 
}) => {
  const ContentComponent = link ? 'a' : 'div';
  const contentProps = link ? { href: link, target: link.startsWith('http') ? '_blank' : undefined, rel: link.startsWith('http') ? 'noopener noreferrer' : undefined } : {};
  
  return (
    <motion.li 
      className="flex items-start"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.div 
        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1"
        whileHover={{ 
          scale: 1.1, 
          backgroundColor: "rgba(255,255,255,0.15)",
          rotate: [0, -10, 10, -5, 0] 
        }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-5 h-5" />
      </motion.div>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <ContentComponent 
          {...contentProps}
          className={`text-gray-400 ${link ? 'hover:text-white transition-colors' : ''}`}
        >
          {content}
        </ContentComponent>
      </div>
    </motion.li>
  );
};

const SupportPoint = ({ text }: { text: string }) => (
  <motion.div 
    className="flex items-center"
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <motion.div 
      className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-3"
      whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.2)" }}
      transition={{ duration: 0.2 }}
    >
      <Check className="w-3 h-3" />
    </motion.div>
    <span className="text-gray-300 text-sm">{text}</span>
  </motion.div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <motion.div 
    className="bg-white/5 border border-white/10 rounded-lg p-5"
    whileHover={{ 
      backgroundColor: "rgba(255,255,255,0.07)", 
      y: -5,
      boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)"
    }}
    transition={{ duration: 0.2 }}
  >
    <h3 className="font-medium text-white mb-2 flex items-start">
      <MessageSquare className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
      <span>{question}</span>
    </h3>
    <p className="text-gray-400 text-sm">{answer}</p>
  </motion.div>
);

export default Contact;
