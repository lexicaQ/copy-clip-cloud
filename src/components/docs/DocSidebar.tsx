
import React from "react";
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
  ChevronRight
} from "lucide-react";

interface SidebarLinkProps {
  href: string;
  icon: React.ElementType;
  title: string;
  isActive: boolean;
}

const SidebarLink = ({ href, icon: Icon, title, isActive }: SidebarLinkProps) => (
  <Link
    to={href}
    className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
      isActive 
        ? 'bg-white/10 text-white' 
        : 'text-white/70 hover:bg-white/5 hover:text-white'
    }`}
  >
    <Icon className="w-4 h-4 mr-3 flex-shrink-0" />
    <span className="text-sm">{title}</span>
    {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
  </Link>
);

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

const SidebarSection = ({ title, children }: SidebarSectionProps) => (
  <div className="mb-6">
    <h3 className="text-xs uppercase tracking-wider text-white/50 font-medium mb-2 px-4">{title}</h3>
    <div className="space-y-1">
      {children}
    </div>
  </div>
);

const DocSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <motion.aside
      className="w-full lg:w-64 flex-shrink-0 border-r border-white/10 py-6 hidden lg:block"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="sticky top-24">
        <SidebarSection title="Getting Started">
          <SidebarLink 
            href="/docs/getting-started" 
            icon={Book} 
            title="Getting Started" 
            isActive={currentPath === "/docs/getting-started"} 
          />
        </SidebarSection>
        
        <SidebarSection title="Core Features">
          <SidebarLink 
            href="/docs/core-features" 
            icon={LayoutGrid} 
            title="Overview" 
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
            icon={Code} 
            title="Advanced Features" 
            isActive={currentPath === "/docs/advanced-usage"} 
          />
        </SidebarSection>
        
        <SidebarSection title="API & SDK">
          <SidebarLink 
            href="/docs/api-documentation" 
            icon={FileText} 
            title="API Documentation" 
            isActive={currentPath === "/docs/api-documentation"} 
          />
          <SidebarLink 
            href="/docs/sdk" 
            icon={Code} 
            title="SDK" 
            isActive={currentPath === "/docs/sdk"} 
          />
          <SidebarLink 
            href="/docs/integration-guides" 
            icon={Code} 
            title="Integration Guides" 
            isActive={currentPath === "/docs/integration-guides"} 
          />
        </SidebarSection>
        
        <SidebarSection title="Security">
          <SidebarLink 
            href="/docs/security" 
            icon={Shield} 
            title="Security" 
            isActive={currentPath === "/docs/security"} 
          />
        </SidebarSection>
        
        <SidebarSection title="Resources">
          <SidebarLink 
            href="/docs/all-articles" 
            icon={FileText} 
            title="All Articles" 
            isActive={currentPath === "/docs/all-articles"} 
          />
        </SidebarSection>
      </div>
    </motion.aside>
  );
};

export default DocSidebar;
