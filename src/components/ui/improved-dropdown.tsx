
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface DropdownItem {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ElementType;
}

interface ImprovedDropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  align?: "left" | "right" | "center";
  className?: string;
  width?: number;
}

export const ImprovedDropdown = ({ 
  trigger, 
  items, 
  align = "left", 
  className,
  width = 220
}: ImprovedDropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Position alignment styles
  const getPositionStyles = () => {
    switch(align) {
      case "right":
        return { right: 0 };
      case "center":
        return { left: "50%", transform: "translateX(-50%)" };
      default:
        return { left: 0 };
    }
  };

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <div 
        className="cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 mt-2 rounded-lg shadow-lg overflow-hidden backdrop-blur-xl"
            style={{ 
              width: `${width}px`, 
              background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              border: "1px solid rgba(255,255,255,0.1)",
              ...getPositionStyles()
            }}
          >
            <div className="py-2">
              {items.map((item, index) => (
                <DropdownItem 
                  key={index} 
                  item={item} 
                  onClick={() => {
                    if (item.onClick) item.onClick();
                    setIsOpen(false);
                  }}
                />
              ))}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DropdownItem = ({ 
  item, 
  onClick 
}: { 
  item: DropdownItem; 
  onClick: () => void 
}) => {
  const Icon = item.icon;
  
  const content = (
    <div 
      className="flex items-center px-4 py-2.5 text-sm text-white hover:bg-white/10 transition-colors cursor-pointer group"
      onClick={onClick}
    >
      {Icon && <Icon className="w-4 h-4 mr-3 text-white/70 group-hover:text-white" />}
      <span>{item.label}</span>
    </div>
  );
  
  if (item.href) {
    return (
      <a href={item.href} className="block">
        {content}
      </a>
    );
  }
  
  return content;
};
