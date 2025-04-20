
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Cloud, 
  ArrowRight, 
  Check, 
  Smartphone, 
  Laptop, 
  Computer, 
  Shield, 
  Zap,  // Replace ZapFast with Zap
  Copy 
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SharedBackground from "@/components/layout/SharedBackground";
import { Button } from "@/components/ui/button";

const UniversalClipboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <SharedBackground />
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            to="/features" 
            className="inline-flex items-center text-sm text-white/70 hover:text-white mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Features
          </Link>
          
          <div className="glass-panel p-8 rounded-xl mb-12 backdrop-blur-xl">
            <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8">
              <div className="flex-shrink-0">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10">
                  <Cloud className="w-16 h-16 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-3">Universal Clipboard</h1>
                <p className="text-xl text-gray-300">Seamlessly sync your clipboard across all your devices</p>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed">
                Copy on one device, paste on another. Our synchronization technology ensures your clipboard is instantly available across all your devices. 
                Whether you're working on your MacBook, iPad, or iPhone, your clipboard follows you everywhere, making cross-device workflows seamless and efficient.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Hero Visual */}
        <motion.div
          className="mb-20 relative glass-panel overflow-hidden rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 z-0"></div>
          <div className="p-8 md:p-12 lg:p-16 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <motion.h2 
                  className="text-3xl font-bold mb-6 text-gradient"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  One Clipboard, All Devices
                </motion.h2>
                <motion.p 
                  className="text-gray-300 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  CopyClipCloud's Universal Clipboard creates a seamless bridge between all your devices. Copy text, code, images, and files on one device, and instantly have them available on any other. No more emailing yourself information or using chat apps as workarounds.
                </motion.p>
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {[
                    "Instant cross-device synchronization",
                    "End-to-end encryption for secure data transfer",
                    "Supports text, code, images, and files",
                    "Preserves formatting and metadata",
                    "Works offline with automatic sync when reconnected"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="p-1 rounded-full bg-white/10 mr-3 mt-1">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
              
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative">
                  {/* Devices illustration */}
                  <motion.div
                    className="relative w-72 h-72"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                  >
                    {/* Phone */}
                    <motion.div 
                      className="absolute left-0 bottom-0 w-28 h-48 rounded-xl bg-white/5 border border-white/20 shadow-lg overflow-hidden"
                      animate={{ y: [2, -2, 2], rotate: [-2, 2, -2] }}
                      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    >
                      <div className="h-3 bg-white/10 flex justify-center items-center">
                        <div className="w-10 h-1 rounded-full bg-white/30"></div>
                      </div>
                      <div className="flex items-center justify-center h-full">
                        <div className="text-[8px] text-white/60 font-mono px-2">
                          <motion.div 
                            className="bg-purple-500/30 rounded text-white/80 px-1 inline-block"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                          >
                            Hello World!
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Laptop */}
                    <motion.div 
                      className="absolute right-0 top-0 w-56 h-40 rounded-lg bg-white/5 border border-white/20 shadow-lg overflow-hidden"
                      animate={{ y: [-3, 3, -3], rotate: [1, -1, 1] }}
                      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    >
                      <div className="h-4 bg-white/10 flex items-center px-2">
                        <div className="w-2 h-2 rounded-full bg-white/30 mr-1"></div>
                        <div className="w-2 h-2 rounded-full bg-white/30 mr-1"></div>
                        <div className="w-2 h-2 rounded-full bg-white/30"></div>
                      </div>
                      <div className="p-2 text-[10px] text-white/60 font-mono">
                        const greeting = "Hello World!";
                        <motion.div 
                          className="bg-purple-500/30 rounded text-white/80 px-1 inline-block mt-1"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        >
                          console.log(greeting);
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    {/* Tablet */}
                    <motion.div 
                      className="absolute right-5 bottom-5 w-36 h-28 rounded-lg bg-white/5 border border-white/20 shadow-lg overflow-hidden"
                      animate={{ y: [3, -3, 3], rotate: [-1, 1, -1] }}
                      transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                    >
                      <div className="h-3 bg-white/10"></div>
                      <div className="flex items-center justify-center h-full">
                        <div className="text-[8px] text-white/60 font-mono">
                          <motion.div 
                            className="bg-purple-500/30 rounded text-white/80 px-1 inline-block"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                          >
                            Hello World!
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Connection animation */}
                    <motion.div 
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5] 
                      }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                      <Cloud className="w-full h-full text-purple-500/40" />
                    </motion.div>
                    
                    {[1, 2, 3].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/20"
                        style={{ width: '100%', height: '100%' }}
                        initial={{ scale: 0.2, opacity: 0.8 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 3, 
                          delay: i * 0.5,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Copy,
                title: "Copy Anywhere",
                description: "Copy any type of content on any of your devices. Universal Clipboard detects the content type automatically."
              },
              {
                icon: Cloud,
                title: "Secure Sync",
                description: "Your content is encrypted and securely transferred to our cloud, making it instantly available on your other devices."
              },
              {
                icon: ZapFast,
                title: "Instant Paste",
                description: "Paste your content on any other device. The transfer is so fast you won't even notice it's syncing."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="glass-panel p-6 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 glass-panel p-6 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-start">
              <div className="p-2 rounded-lg bg-white/10 mr-4 mt-1">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Secure By Design</h3>
                <p className="text-gray-400">
                  Your data is fully encrypted using AES-256 encryption before it leaves your device. Only your authorized devices with the proper encryption keys can decrypt and access your clipboard content. 
                  We never have access to your unencrypted data.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Supported Devices Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-8 rounded-xl mb-20"
        >
          <h2 className="text-3xl font-bold mb-10 text-center text-gradient">Supported Devices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Smartphone, 
                name: "Mobile",
                description: "iOS & Android", 
                devices: ["iPhone", "iPad", "Android phones", "Android tablets"],
                features: ["Copy text & images", "Copy links", "Copy rich content"]
              },
              { 
                icon: Laptop, 
                name: "Laptop",
                description: "macOS & Windows", 
                devices: ["MacBook Pro", "MacBook Air", "Windows laptops", "Chromebooks"],
                features: ["Full file support", "Code snippets with syntax", "Advanced formatting"]
              },
              { 
                icon: Computer, 
                name: "Desktop",
                description: "All platforms", 
                devices: ["Mac Mini", "iMac", "Windows PC", "Linux workstations"],
                features: ["Multiple clipboard history", "Customizable shortcuts", "Large file support"]
              }
            ].map((device, index) => (
              <motion.div 
                key={index}
                className="glass-panel backdrop-blur-xl border border-white/10 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                    <device.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-medium">{device.name}</h3>
                  <p className="text-sm text-gray-400">{device.description}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-white/70 mb-2">Compatible With:</h4>
                    <ul className="space-y-1">
                      {device.devices.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/30 mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-white/70 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {device.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-300">
                          <Check className="w-3 h-3 text-white/50 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-10 text-center text-gradient">What Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Universal Clipboard has been a game-changer for my workflow. Moving content between my devices is now completely seamless.",
                author: "Sarah L.",
                role: "Product Designer",
                rating: 5
              },
              {
                quote: "I used to email myself text and images all the time. With Universal Clipboard, that's a thing of the past. It just works.",
                author: "Michael T.",
                role: "Software Developer",
                rating: 5
              },
              {
                quote: "The cross-device functionality is incredible. I can start work on my Mac and continue on my iPad without missing a beat.",
                author: "Jamie K.",
                role: "Digital Marketer",
                rating: 4
              },
              {
                quote: "As someone who constantly switches between devices, this tool has saved me countless hours of frustration.",
                author: "Alex M.",
                role: "UI/UX Designer",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="glass-panel p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`} 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-12 rounded-xl text-center bg-gradient-to-br from-purple-500/5 to-blue-500/5"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ready to transform your workflow?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience the convenience of having your clipboard available everywhere. Download CopyClipCloud today and transform your cross-device workflow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button 
              asChild
              size="lg"
              className="bg-white text-black hover:bg-white/90"
            >
              <Link to="/download">
                Download Now <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
            >
              <Link to="/features">
                Explore More Features
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UniversalClipboard;
