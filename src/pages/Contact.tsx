
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Phone, Send, Clock, Check, ArrowRight, Loader2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InteractiveBackground from "@/components/landing/InteractiveBackground";
import { toast } from "sonner";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormValues({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
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
              className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Mail className="w-8 h-8 text-white" />
            </motion.div>
            
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Contact Us</h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">Get in touch with our team for support, feedback, or partnership opportunities.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <motion.div
              className="glass-panel p-8 rounded-2xl border border-white/20 shadow-lg backdrop-blur-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formValues.subject}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formValues.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                      placeholder="Your message here..."
                      required
                    />
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 disabled:opacity-70"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
            
            {/* Contact Info & Map */}
            <div className="space-y-8">
              <motion.div
                className="glass-panel p-8 rounded-2xl border border-white/20 shadow-lg backdrop-blur-lg"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <ul className="space-y-6">
                  <ContactItem
                    icon={MapPin}
                    title="Office Address"
                    content="1234 Innovation Drive, Suite 500, San Francisco, CA 94107"
                    link="https://maps.google.com/?q=San+Francisco"
                  />
                  
                  <ContactItem
                    icon={Phone}
                    title="Phone Number"
                    content="+1 (555) 123-4567"
                    link="tel:+15551234567"
                  />
                  
                  <ContactItem
                    icon={Mail}
                    title="Email Us"
                    content="support@copyclipcloud.com"
                    link="mailto:support@copyclipcloud.com"
                  />
                  
                  <ContactItem
                    icon={Clock}
                    title="Business Hours"
                    content="Monday - Friday, 9:00 AM - 6:00 PM PST"
                  />
                </ul>
              </motion.div>
              
              {/* Google Maps Embed */}
              <motion.div
                className="rounded-2xl overflow-hidden border border-white/20 shadow-lg h-[300px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555691775!2d-122.50764357022089!3d37.75781499644172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1629734217055!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Office Location"
                />
              </motion.div>
              
              {/* Support Points */}
              <motion.div
                className="glass-panel p-6 rounded-2xl border border-white/20 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-lg font-medium mb-4">Customer Support</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <SupportPoint text="24/7 Technical Support" />
                  <SupportPoint text="Video Call Consultations" />
                  <SupportPoint text="Priority Response for Pro Users" />
                  <SupportPoint text="Comprehensive Knowledge Base" />
                </div>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="glass-panel p-8 rounded-2xl border border-white/20 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FaqItem question="How quickly can I expect a response?" answer="We aim to respond to all inquiries within 24 hours during business days. Premium support customers receive priority response times." />
              <FaqItem question="Do you offer phone support?" answer="Yes, phone support is available for business and enterprise customers. Individual users can schedule a call through our support portal." />
              <FaqItem question="How can I report a bug?" answer="You can report bugs through our support form or by sending an email to bugs@copyclipcloud.com with detailed information about the issue." />
              <FaqItem question="Can I request a feature?" answer="Absolutely! We welcome feature requests through our feedback form. Many of our best features have come from user suggestions." />
            </div>
            
            <div className="text-center mt-8">
              <motion.a
                href="/support"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                whileHover={{ x: 5 }}
              >
                Visit our full support center
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

const ContactItem = ({
  icon: Icon,
  title,
  content,
  link
}: {
  icon: React.ElementType;
  title: string;
  content: string;
  link?: string;
}) => {
  const ContentComponent = link ? 'a' : 'div';
  const contentProps = link ? {
    href: link,
    target: link.startsWith('http') ? '_blank' : undefined,
    rel: link.startsWith('http') ? 'noopener noreferrer' : undefined
  } : {};
  
  return (
    <motion.li 
      className="flex items-start"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center mr-4 mt-1">
        <Icon className="w-5 h-5 text-blue-400" />
      </div>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <ContentComponent 
          {...contentProps} 
          className={`text-gray-400 ${link ? 'hover:text-blue-400 transition-colors flex items-center' : ''}`}
        >
          {content}
          {link && <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />}
        </ContentComponent>
      </div>
    </motion.li>
  );
};

const SupportPoint = ({
  text
}: {
  text: string;
}) => (
  <motion.div 
    className="flex items-center"
    whileHover={{ x: 5 }}
    transition={{ duration: 0.2 }}
  >
    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3">
      <Check className="w-3 h-3 text-white" />
    </div>
    <span className="text-gray-300 text-sm">{text}</span>
  </motion.div>
);

const FaqItem = ({
  question,
  answer
}: {
  question: string;
  answer: string;
}) => (
  <motion.div 
    className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors duration-300"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <h3 className="font-medium text-white mb-2 flex items-start">
      <MessageSquare className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-blue-400" />
      <span>{question}</span>
    </h3>
    <p className="text-gray-400 text-sm">{answer}</p>
  </motion.div>
);

export default Contact;
