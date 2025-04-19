
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleView } from "@/components/documentation/ArticleView";

const TutorialArticle = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<{
    title: string;
    content: string;
    category: string;
    readTime?: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This would typically be an API call
    // For now, we'll simulate fetching with some sample data
    setTimeout(() => {
      // Sample data based on the ID
      const articleData = {
        title: `Tutorial: ${id?.replace(/-/g, " ")}`,
        category: "Tutorials",
        content: `
          <div>
            <p>This is a detailed tutorial about ${id?.replace(/-/g, " ")}.</p>
            <h2>Getting Started</h2>
            <p>First, ensure you have the latest version of CopyClipCloud installed on your device.</p>
            <p>This tutorial will guide you through the complete process step by step.</p>
            <h2>Step 1: Setup</h2>
            <p>Begin by opening the application and navigating to the settings panel.</p>
            <h2>Step 2: Configuration</h2>
            <p>Configure your preferences according to your workflow needs.</p>
            <h2>Step 3: Implementation</h2>
            <p>Now you're ready to implement the feature in your daily work.</p>
            <h2>Conclusion</h2>
            <p>You've successfully learned how to use this feature of CopyClipCloud.</p>
          </div>
        `,
        readTime: "10 min"
      };
      
      setArticle(articleData);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Tutorial Not Found</h1>
        <p className="text-gray-400 mb-8">The tutorial you're looking for doesn't exist or has been moved.</p>
        <a href="/tutorials" className="text-blue-400 hover:underline">
          Back to Tutorials
        </a>
      </div>
    );
  }

  return (
    <ArticleView
      title={article.title}
      content={article.content}
      category={article.category}
      readTime={article.readTime}
    />
  );
};

export default TutorialArticle;
