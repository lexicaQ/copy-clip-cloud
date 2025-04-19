
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

interface ArticleViewProps {
  title: string;
  content: string;
  category: string;
  readTime?: string;
}

export const ArticleView = ({ title, content, category, readTime = "5 min" }: ArticleViewProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto py-8 px-4"
    >
      <div className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
          <BookOpen className="w-4 h-4" />
          <span>{category}</span>
          <span>•</span>
          <span>{readTime} read</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
      </div>
      
      <div className="prose prose-invert max-w-none">
        {content}
      </div>
      
      <div className="mt-12 pt-8 border-t border-white/10">
        <a 
          href="/docs" 
          className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
        >
          <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
          Back to Documentation
        </a>
      </div>
    </motion.article>
  );
};
