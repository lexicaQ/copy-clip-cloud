
import React, { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
}

interface SearchDocumentationProps {
  className?: string;
  placeholder?: string;
}

const SearchDocumentation = ({ 
  className = "", 
  placeholder = "Search documentation..." 
}: SearchDocumentationProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  
  // Mock search function - in a real app, this would connect to a search API
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    
    setIsSearching(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Mock search results based on query
      const mockResults: SearchResult[] = [
        {
          title: "Getting Started with CopyClipCloud",
          description: "Learn how to install and set up CopyClipCloud on your device.",
          url: "/docs/getting-started",
          category: "Getting Started"
        },
        {
          title: "Cloud Synchronization Setup",
          description: "Configure CopyClipCloud to sync across all your devices.",
          url: "/docs/cloud-sync",
          category: "Core Features"
        },
        {
          title: "Security & Privacy Controls",
          description: "Learn about encryption and privacy features in CopyClipCloud.",
          url: "/docs/security",
          category: "Security & Privacy"
        },
        {
          title: "Keyboard Shortcuts Reference",
          description: "Master the essential keyboard shortcuts for efficient clipboard management.",
          url: "/docs/shortcuts",
          category: "Advanced Usage"
        }
      ].filter(result => 
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        result.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setSearchResults(mockResults);
      setIsSearching(false);
    }, 500);
  };
  
  const handleResultClick = (url: string) => {
    navigate(url);
    setSearchResults([]);
    setSearchQuery("");
  };
  
  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSearch}>
        <div className="relative">
          <input 
            type="text" 
            placeholder={placeholder} 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-4 bg-white/10 rounded-full pl-12 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <button 
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-white text-black rounded-full text-sm"
          >
            Search
          </button>
        </div>
      </form>
      
      {searchResults.length > 0 && (
        <motion.div 
          className="absolute left-0 right-0 mt-2 max-h-80 overflow-y-auto bg-black/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl z-50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Search Results</h3>
            <div className="space-y-3">
              {searchResults.map((result, index) => (
                <button
                  key={index}
                  className="w-full text-left p-3 hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => handleResultClick(result.url)}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{result.title}</h4>
                      <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                        {result.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{result.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
      
      {isSearching && (
        <div className="absolute left-0 right-0 mt-2 p-4 bg-black/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            <span className="ml-3 text-sm">Searching...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchDocumentation;
