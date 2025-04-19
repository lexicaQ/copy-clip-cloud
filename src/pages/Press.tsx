
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Newspaper, 
  Calendar, 
  ArrowRight,
  Download,
  Mail,
  FileText,
  Quote,
  Link2
} from "lucide-react";

const pressReleases = [
  {
    title: "CopyClipCloud Raises $5M Series A to Transform Digital Productivity",
    date: "April 10, 2023",
    excerpt: "Funding will accelerate development of AI-powered features and expand cross-platform support.",
    link: "#"
  },
  {
    title: "CopyClipCloud 3.5 Launches with Industry-Leading Security Features",
    date: "March 15, 2023",
    excerpt: "Latest release introduces military-grade encryption and enhanced privacy controls for clipboard management.",
    link: "#"
  },
  {
    title: "CopyClipCloud Partners with Major Enterprise Software Providers",
    date: "February 3, 2023",
    excerpt: "New integrations will bring CopyClipCloud's productivity tools to enterprise customers worldwide.",
    link: "#"
  },
  {
    title: "CopyClipCloud Reaches 500,000 Active Users Milestone",
    date: "December 12, 2022",
    excerpt: "User base grows 200% year-over-year as remote work drives demand for productivity tools.",
    link: "#"
  }
];

const pressCategories = ["All", "Press Releases", "News", "Awards", "Events"];

const pressMedia = [
  { name: "Company Logo (Dark)", format: "PNG, SVG", size: "2.4 MB" },
  { name: "Company Logo (Light)", format: "PNG, SVG", size: "2.2 MB" },
  { name: "Product Screenshots", format: "PNG", size: "15.6 MB" },
  { name: "Founder Headshots", format: "JPG", size: "8.3 MB" },
  { name: "Brand Guidelines", format: "PDF", size: "3.7 MB" },
  { name: "Product Demo Video", format: "MP4", size: "42.8 MB" }
];

const mediaQuotes = [
  {
    quote: "CopyClipCloud is redefining how we interact with clipboard history, bringing intelligence and security to what was once a mundane utility.",
    source: "TechCrunch",
    link: "#"
  },
  {
    quote: "A game-changer for professionals who frequently work with multiple pieces of content across different applications and devices.",
    source: "The Verge",
    link: "#"
  },
  {
    quote: "The attention to design detail and user experience sets CopyClipCloud apart from the countless clipboard managers on the market.",
    source: "9to5Mac",
    link: "#"
  }
];

const PressReleaseCard = ({ release, index }) => (
  <motion.div
    className="glass-panel hover:border-white/20 transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <div className="p-6">
      <div className="flex items-center text-sm text-gray-400 mb-3">
        <Calendar className="w-4 h-4 mr-1.5" />
        {release.date}
      </div>
      <h3 className="text-xl font-medium mb-3">{release.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{release.excerpt}</p>
      <a 
        href={release.link} 
        className="text-white hover:underline inline-flex items-center text-sm"
      >
        Read Full Release
        <ArrowRight className="w-4 h-4 ml-1.5" />
      </a>
    </div>
  </motion.div>
);

const MediaQuote = ({ quote, index }) => (
  <motion.div
    className="glass-panel p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <div className="mb-4">
      <Quote className="w-8 h-8 text-white/30" />
    </div>
    <p className="text-lg italic mb-4">"{quote.quote}"</p>
    <div className="flex items-center justify-between">
      <span className="text-gray-400">{quote.source}</span>
      <a 
        href={quote.link} 
        className="text-white hover:underline inline-flex items-center text-sm"
      >
        <Link2 className="w-4 h-4 mr-1.5" />
        Read Article
      </a>
    </div>
  </motion.div>
);

const MediaItem = ({ item, index }) => (
  <motion.div
    className="flex items-center justify-between p-4 border-b border-white/10 last:border-0"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
  >
    <div className="flex items-center">
      <FileText className="w-5 h-5 mr-3 text-gray-400" />
      <div>
        <p className="font-medium">{item.name}</p>
        <p className="text-xs text-gray-400">{item.format} • {item.size}</p>
      </div>
    </div>
    <a 
      href={`#download-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
    >
      <Download className="w-4 h-4" />
    </a>
  </motion.div>
);

const Press = () => {
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
            <Newspaper className="w-5 h-5 mr-2" />
            <span>Press Center</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Media Resources & News</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Find the latest news, press releases, media resources, and contact information for CopyClipCloud.
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="text-2xl font-bold">Press Releases</h2>
            
            <div className="flex items-center mt-4 md:mt-0 overflow-x-auto">
              {pressCategories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 text-sm whitespace-nowrap ${
                    index === 0 
                      ? 'bg-white/20 text-white rounded-full' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pressReleases.map((release, index) => (
              <PressReleaseCard key={index} release={release} index={index} />
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <button className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full hover:bg-white/15 transition-all border border-white/20">
              <span className="mr-2">View All Press Releases</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="glass-panel overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-white/10 mr-3">
                  <Download className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium">Media Kit</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Download our media assets including logos, product images, and brand guidelines.
              </p>
            </div>
            
            <div className="divide-y divide-white/5">
              {pressMedia.map((item, index) => (
                <MediaItem key={index} item={item} index={index} />
              ))}
            </div>
            
            <div className="p-4 bg-white/5 text-center">
              <a 
                href="#download-all"
                className="text-white hover:underline inline-flex items-center text-sm"
              >
                <Download className="w-4 h-4 mr-1.5" />
                Download Complete Media Kit (72.6 MB)
              </a>
            </div>
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
              <h3 className="text-xl font-medium">Press Contact</h3>
            </div>
            
            <p className="text-gray-400 mb-6">
              For press inquiries, interview requests, or additional information, please contact our communications team.
            </p>
            
            <div className="space-y-4 mb-6">
              <div>
                <p className="font-medium">Media Relations</p>
                <a href="mailto:press@copyclipcloud.com" className="text-white hover:underline">press@copyclipcloud.com</a>
              </div>
              
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-gray-400">Director of Communications</p>
                <a href="mailto:sarah@copyclipcloud.com" className="text-white hover:underline">sarah@copyclipcloud.com</a>
              </div>
              
              <div>
                <p className="font-medium">Response Time</p>
                <p className="text-gray-400">We typically respond to media inquiries within 24 hours.</p>
              </div>
            </div>
            
            <a 
              href="/contact"
              className="px-6 py-3 bg-white text-black rounded-full inline-flex items-center hover:bg-opacity-90 transition-all"
            >
              Contact Press Team
            </a>
          </motion.div>
        </div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">What They're Saying</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {mediaQuotes.map((quote, index) => (
              <MediaQuote key={index} quote={quote} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Subscribe to our press release mailing list to receive the latest news directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 bg-white/10 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-opacity-90 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Press;
