
import { useState, useCallback } from 'react';

interface SearchResult {
  title: string;
  category: string;
  href: string;
}

export const useDocumentationSearch = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const performSearch = useCallback((query: string) => {
    setIsSearching(true);
    
    // Simulated search through documentation
    const results = docCategories.flatMap(category => 
      category.articles.filter(article => 
        article.toLowerCase().includes(query.toLowerCase())
      ).map(article => ({
        title: article,
        category: category.title,
        href: `#${article.toLowerCase().replace(/\s+/g, '-')}`
      }))
    );

    setSearchResults(results);
    setIsSearching(false);
  }, []);

  return {
    searchResults,
    isSearching,
    performSearch
  };
};

// This would typically come from an API or database
const docCategories = [
  { 
    title: "Getting Started",
    articles: [
      "Installation Guide",
      "Quick Start Tutorial",
      "User Interface Overview",
      "Key Concepts",
      "Keyboard Shortcuts"
    ]
  },
  { 
    title: "Core Features",
    articles: [
      "Clipboard History",
      "Smart Organization",
      "Search & Filtering",
      "Templates & Snippets",
      "Cross-device Sync"
    ]
  },
  // ... add more categories as needed
];
