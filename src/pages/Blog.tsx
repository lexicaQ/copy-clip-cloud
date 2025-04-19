
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Calendar, 
  User, 
  Clock,
  Search,
  Tag,
  ArrowRight,
  MessageSquare,
  Mail,
  Filter,
  Rss
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Productivity Hacks Using CopyClipCloud",
    excerpt: "Discover how to supercharge your workflow with these advanced clipboard techniques that most users don't know about.",
    date: "April 15, 2023",
    readTime: "8 min read",
    author: "Sarah Johnson",
    categories: ["Productivity", "Tips & Tricks"],
    featured: true,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "The Evolution of Clipboard Managers: Past, Present, and Future",
    excerpt: "From simple text buffers to AI-powered organization, explore how clipboard technology has evolved and where it's headed.",
    date: "March 28, 2023",
    readTime: "12 min read",
    author: "Michael Chen",
    categories: ["Industry Insights", "Technology"],
    featured: false,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "How We Built End-to-End Encryption for Your Clipboard Data",
    excerpt: "A technical deep dive into our security architecture and how we ensure your clipboard data remains private and secure.",
    date: "March 10, 2023",
    readTime: "15 min read",
    author: "Alex Rivera",
    categories: ["Security", "Technology", "Behind the Scenes"],
    featured: false,
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Remote Work & Clipboard Management: A Perfect Match",
    excerpt: "Why proper clipboard management becomes even more crucial when working remotely, with tips for distributed teams.",
    date: "February 22, 2023",
    readTime: "10 min read",
    author: "Emily Wong",
    categories: ["Remote Work", "Productivity"],
    featured: false,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Introducing Smart Templates: The Future of Text Reuse",
    excerpt: "Learn about our newest feature that uses AI to automatically create templates from your frequently copied content.",
    date: "February 5, 2023",
    readTime: "7 min read",
    author: "David Wilson",
    categories: ["Product Updates", "AI"],
    featured: false,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Customer Story: How Agency X Saved 20 Hours Per Week",
    excerpt: "See how a digital marketing agency revolutionized their content workflow with CopyClipCloud's team features.",
    date: "January 18, 2023",
    readTime: "9 min read",
    author: "Rachel Brown",
    categories: ["Case Studies", "Teams"],
    featured: false,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const categories = [
  "All", "Productivity", "Technology", "Security", "Case Studies", "Product Updates", "Tips & Tricks", "Industry Insights"
];

const FeaturedPost = ({ post }) => (
  <motion.div 
    className="glass-panel overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="relative h-64 lg:h-auto">
        <img 
          src={post.image} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
      </div>
      
      <div className="p-8">
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <span className="inline-block text-xs font-medium bg-white/20 rounded-full px-2.5 py-1 backdrop-blur-md">
            Featured
          </span>
          <span className="mx-2">·</span>
          <Calendar className="w-4 h-4 mr-1.5" />
          {post.date}
          <span className="mx-2">·</span>
          <Clock className="w-4 h-4 mr-1.5" />
          {post.readTime}
        </div>
        
        <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
        <p className="text-gray-400 mb-4">{post.excerpt}</p>
        
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <User className="w-4 h-4" />
          </div>
          <span className="text-sm">{post.author}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {post.categories.map((category, idx) => (
            <a 
              key={idx} 
              href={`#category-${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-xs bg-white/10 hover:bg-white/20 transition-colors rounded-full px-3 py-1"
            >
              {category}
            </a>
          ))}
        </div>
        
        <a 
          href={`/blog/${post.id}`}
          className="flex items-center text-white hover:underline"
        >
          Read Article
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </a>
      </div>
    </div>
  </motion.div>
);

const BlogPostCard = ({ post, index }) => (
  <motion.div
    className="glass-panel overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <div className="relative h-48 overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
    </div>
    
    <div className="p-6">
      <div className="flex items-center text-sm text-gray-400 mb-3">
        <Calendar className="w-4 h-4 mr-1.5" />
        {post.date}
        <span className="mx-2">·</span>
        <Clock className="w-4 h-4 mr-1.5" />
        {post.readTime}
      </div>
      
      <h3 className="text-xl font-medium mb-3">{post.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {post.categories.slice(0, 2).map((category, idx) => (
          <a 
            key={idx} 
            href={`#category-${category.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-xs bg-white/10 hover:bg-white/20 transition-colors rounded-full px-3 py-1"
          >
            {category}
          </a>
        ))}
        {post.categories.length > 2 && (
          <span className="text-xs bg-white/5 rounded-full px-3 py-1">
            +{post.categories.length - 2} more
          </span>
        )}
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <User className="w-3 h-3" />
          </div>
          <span className="text-sm text-gray-400">{post.author}</span>
        </div>
        
        <a 
          href={`/blog/${post.id}`}
          className="text-white hover:underline inline-flex items-center text-sm"
        >
          Read <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </a>
      </div>
    </div>
  </motion.div>
);

const Blog = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">The CopyClipCloud Blog</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Tips, tutorials, updates, and insights about productivity, clipboard management, and our product.
          </p>
          
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full px-5 py-4 bg-white/10 rounded-full pl-12 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </motion.div>

        <div className="mb-16">
          <FeaturedPost post={blogPosts[0]} />
        </div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="text-2xl font-bold">Latest Articles</h2>
            
            <div className="flex items-center mt-4 md:mt-0 overflow-x-auto">
              <div className="flex items-center space-x-2 bg-white/5 rounded-lg p-1 border border-white/10">
                <Filter className="w-4 h-4 ml-2" />
                <select className="bg-transparent text-sm focus:outline-none border-none text-gray-300 py-1.5 pr-2">
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <button className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full hover:bg-white/15 transition-all border border-white/20">
              <span className="mr-2">Load More Articles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="lg:col-span-2 glass-panel p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-lg bg-white/10 mr-3">
                <Tag className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium">Popular Categories</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {categories.slice(1).map((category, index) => (
                <a 
                  key={index}
                  href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-3 bg-white/10 rounded-lg text-center hover:bg-white/20 transition-colors text-sm"
                >
                  {category}
                </a>
              ))}
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
              <h3 className="text-xl font-medium">Subscribe</h3>
            </div>
            
            <p className="text-gray-400 text-sm mb-6">
              Stay updated with our latest articles, tips, and product announcements.
            </p>
            
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              
              <button className="w-full px-4 py-3 bg-white text-black rounded-lg hover:bg-opacity-90 transition-all">
                Subscribe to Newsletter
              </button>
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-gray-400">No spam, ever.</span>
              <a 
                href="#rss"
                className="text-xs text-white hover:underline inline-flex items-center"
              >
                <Rss className="w-3.5 h-3.5 mr-1" />
                RSS Feed
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Got a question?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with questions, feedback, or topic suggestions.
          </p>
          <a 
            href="/contact" 
            className="px-6 py-3 bg-white text-black rounded-full inline-flex items-center hover:bg-opacity-90 transition-all"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Contact Us
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
