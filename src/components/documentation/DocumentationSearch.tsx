
import React from "react";
import { Search } from "lucide-react";
import { useDocumentationSearch } from "@/hooks/useDocumentationSearch";

export const DocumentationSearch = () => {
  const { searchResults, isSearching, performSearch } = useDocumentationSearch();
  
  return (
    <div className="relative max-w-xl mx-auto">
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search documentation..." 
          className="w-full px-5 py-4 bg-white/10 rounded-full pl-12 focus:outline-none focus:ring-2 focus:ring-white/30"
          onChange={(e) => performSearch(e.target.value)}
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>
      
      {searchResults.length > 0 && (
        <div className="absolute w-full mt-2 bg-black/90 rounded-xl border border-white/10 shadow-xl backdrop-blur-xl z-50">
          <div className="py-2">
            {searchResults.map((result, index) => (
              <a
                key={index}
                href={result.href}
                className="flex items-center px-4 py-2 hover:bg-white/5 transition-colors"
              >
                <Search className="w-4 h-4 mr-3 text-gray-400" />
                <div>
                  <div className="text-sm font-medium">{result.title}</div>
                  <div className="text-xs text-gray-400">{result.category}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
