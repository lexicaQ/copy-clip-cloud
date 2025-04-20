
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Code,
  FileText,
  Key,
  Shield,
  LayoutGrid,
  Cloud,
  LayoutTemplate,
  BrainCircuit,
  Filter,
  Book,
  ChevronRight,
  Search,
  Menu,
  X,
  BookOpen,
  History,
  PenTool,
  Terminal,
  Zap,
  Globe,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SidebarLinkProps {
  href: string;
  icon: React.ElementType;
  title: string;
  isActive: boolean;
  isNew?: boolean;
  onClick?: () => void;
}

const SidebarLink = ({ href, icon: Icon, title, isActive, isNew, onClick }: SidebarLinkProps) => (
  <Link
    to={href}
    className={`flex items-center px-3 py-2 rounded-lg transition-all ${
      isActive 
        ? 'bg-white/10 text-white font-medium' 
        : 'text-white/70 hover:bg-white/5 hover:text-white'
    }`}
    onClick={onClick}
  >
    <Icon className="w-4 h-4 mr-3 flex-shrink-0" />
    <span className="text-sm">{title}</span>
    {isNew && (
      <span className="ml-2 text-[10px] bg-white/10 text-white px-1.5 py-0.5 rounded">NEW</span>
    )}
    {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
  </Link>
);

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
  collapsible?: boolean;
}

const SidebarSection = ({ title, children, collapsible = false }: SidebarSectionProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xs uppercase tracking-wider text-white/50 font-medium mb-2 px-3">{title}</h3>
        {collapsible && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-6 w-6 p-0 text-white/50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ChevronRight className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
          </Button>
        )}
      </div>
      <div className={cn("space-y-1", collapsible && !isOpen && "hidden")}>
        {children}
      </div>
    </div>
  );
};

const DocSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  
  // Filter sidebar links based on search query
  const filterLinks = (title: string) => {
    if (!query) return true;
    return title.toLowerCase().includes(query.toLowerCase());
  };

  // Close mobile sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Mobile toggle button
  const MobileToggle = () => (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setIsOpen(!isOpen)}
      className="lg:hidden fixed top-20 left-4 z-50 bg-background border-white/10"
    >
      {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
    </Button>
  );

  return (
    <>
      <MobileToggle />
      
      <motion.aside
        className={`w-full lg:w-64 flex-shrink-0 py-4 fixed lg:relative top-0 lg:top-0 left-0 h-screen lg:h-[calc(100vh-96px)] z-40 bg-background/95 backdrop-blur-sm transition-transform duration-300 transform lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 overflow-y-auto border-r border-white/10`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 px-3 pb-3">
          <div className="relative mb-4">
            <Input
              type="text"
              placeholder="Search docs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/30"
            />
            <Search className="absolute top-2.5 left-3 h-4 w-4 text-white/50" />
          </div>
        </div>
        
        <div className="px-3">
          <SidebarSection title="Getting Started">
            <SidebarLink 
              href="/docs/getting-started" 
              icon={Book} 
              title="Installation & Setup" 
              isActive={currentPath === "/docs/getting-started"}
            />
            <SidebarLink 
              href="/docs/release-guide" 
              icon={History} 
              title="Release Guide" 
              isActive={currentPath === "/docs/release-guide"}
              isNew
            />
          </SidebarSection>
          
          <SidebarSection title="Core Features">
            <SidebarLink 
              href="/docs/core-features" 
              icon={LayoutGrid} 
              title="Features Overview" 
              isActive={currentPath === "/docs/core-features"}
            />
            <SidebarLink 
              href="/docs/cloud-sync" 
              icon={Cloud} 
              title="Cloud Sync" 
              isActive={currentPath === "/docs/cloud-sync"}
            />
            <SidebarLink 
              href="/docs/templates" 
              icon={LayoutTemplate} 
              title="Templates" 
              isActive={currentPath === "/docs/templates"}
            />
            <SidebarLink 
              href="/docs/smart-organization" 
              icon={BrainCircuit} 
              title="Smart Organization" 
              isActive={currentPath === "/docs/smart-organization"}
            />
            <SidebarLink 
              href="/docs/search-filtering" 
              icon={Filter} 
              title="Search & Filtering" 
              isActive={currentPath === "/docs/search-filtering"}
            />
          </SidebarSection>
          
          <SidebarSection title="Advanced Usage">
            <SidebarLink 
              href="/docs/keyboard-shortcuts" 
              icon={Key} 
              title="Keyboard Shortcuts" 
              isActive={currentPath === "/docs/keyboard-shortcuts"}
            />
            <SidebarLink 
              href="/docs/advanced-usage" 
              icon={Zap} 
              title="Advanced Features" 
              isActive={currentPath === "/docs/advanced-usage"}
            />
            <SidebarLink 
              href="/features/end-to-end-encryption" 
              icon={Shield} 
              title="End-to-End Encryption" 
              isActive={currentPath === "/features/end-to-end-encryption"}
            />
          </SidebarSection>
          
          <SidebarSection title="Developer Tools">
            <SidebarLink 
              href="/docs/api-documentation" 
              icon={FileText} 
              title="API Documentation" 
              isActive={currentPath === "/docs/api-documentation"}
            />
            <SidebarLink 
              href="/docs/api-explorer" 
              icon={Terminal} 
              title="API Explorer" 
              isActive={currentPath === "/docs/api-explorer"}
              isNew
            />
            <SidebarLink 
              href="/docs/developer-portal" 
              icon={Settings} 
              title="Developer Portal" 
              isActive={currentPath === "/docs/developer-portal"}
              isNew
            />
            <SidebarLink 
              href="/docs/sdk" 
              icon={Code} 
              title="SDK" 
              isActive={currentPath === "/docs/sdk"}
            />
            <SidebarLink 
              href="/docs/integration-guides" 
              icon={Globe} 
              title="Integration Guides" 
              isActive={currentPath === "/docs/integration-guides"}
            />
          </SidebarSection>
          
          <SidebarSection title="Security">
            <SidebarLink 
              href="/docs/security" 
              icon={Shield} 
              title="Security Guide" 
              isActive={currentPath === "/docs/security"}
            />
          </SidebarSection>
          
          <SidebarSection title="Resources">
            <SidebarLink 
              href="/docs/all-articles" 
              icon={BookOpen} 
              title="All Documentation" 
              isActive={currentPath === "/docs/all-articles"}
            />
            <SidebarLink 
              href="/tutorials" 
              icon={PenTool} 
              title="Tutorials" 
              isActive={currentPath === "/tutorials"}
            />
          </SidebarSection>
        </div>
      </motion.aside>
    </>
  );
};

export default DocSidebar;
