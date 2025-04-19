
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User, Link as LinkIcon, Share2, Bookmark, Printer } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export interface ArticleViewProps {
  title: string;
  content: React.ReactNode;
  category: string;
  author?: string;
  date?: string;
  readTime?: string;
  backLink?: string;
  backText?: string;
  relatedLinks?: Array<{title: string, url: string}>;
}

const ArticleView = ({
  title,
  content,
  category,
  author = "CopyClipCloud Team",
  date = "April 15, 2023",
  readTime = "5 min read",
  backLink = "/docs",
  backText = "Back to Documentation",
  relatedLinks = []
}: ArticleViewProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link to={backLink} className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {backText}
        </Link>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-2">
          <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm">
            {category}
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>
        
        <div className="flex flex-wrap items-center text-sm text-gray-400 mb-8 gap-4">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1.5" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1.5" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1.5" />
            <span>{readTime}</span>
          </div>
        </div>
        
        <div className="glass-panel p-6 mb-8">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-medium">Contents</h2>
          </div>
          <nav className="space-y-1">
            <a href="#introduction" className="block py-1 px-2 rounded hover:bg-white/5 transition-colors">
              Introduction
            </a>
            <a href="#prerequisites" className="block py-1 px-2 rounded hover:bg-white/5 transition-colors">
              Prerequisites
            </a>
            <a href="#step-by-step" className="block py-1 px-2 rounded hover:bg-white/5 transition-colors">
              Step-by-Step Guide
            </a>
            <a href="#tips" className="block py-1 px-2 rounded hover:bg-white/5 transition-colors">
              Tips & Best Practices
            </a>
            <a href="#troubleshooting" className="block py-1 px-2 rounded hover:bg-white/5 transition-colors">
              Troubleshooting
            </a>
          </nav>
        </div>
        
        <div className="prose prose-invert max-w-none mb-10">
          {content}
        </div>
        
        <div className="flex flex-wrap gap-3 mb-8">
          <Button variant="outline" size="sm" className="h-8">
            <Share2 className="w-3.5 h-3.5 mr-2" /> Share
          </Button>
          <Button variant="outline" size="sm" className="h-8">
            <Bookmark className="w-3.5 h-3.5 mr-2" /> Save
          </Button>
          <Button variant="outline" size="sm" className="h-8">
            <Printer className="w-3.5 h-3.5 mr-2" /> Print
          </Button>
        </div>
        
        {relatedLinks.length > 0 && (
          <div className="glass-panel p-6 mb-8">
            <h3 className="text-lg font-medium mb-4">Related Articles</h3>
            <div className="space-y-2">
              {relatedLinks.map((link, index) => (
                <Link 
                  key={index} 
                  to={link.url}
                  className="flex items-center py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <LinkIcon className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ArticleView;
