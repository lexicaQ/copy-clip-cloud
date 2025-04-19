
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface DocCodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
  className?: string;
}

const DocCodeBlock = ({
  code,
  language = "javascript",
  title,
  showLineNumbers = false,
  className = ""
}: DocCodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <motion.div 
      className={`relative bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 my-6 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <span className="text-xs text-white/60">
          {title || language}
        </span>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-xs h-8 px-2 hover:bg-white/10 transition-colors"
          onClick={handleCopy}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 mr-1.5" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 mr-1.5" />
              <span>Copy code</span>
            </>
          )}
        </Button>
      </div>
      <pre className={`p-4 overflow-x-auto text-sm font-mono text-white/90 ${showLineNumbers ? 'line-numbers' : ''}`}>
        <code>{code}</code>
      </pre>
    </motion.div>
  );
};

export default DocCodeBlock;
