
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
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent, 
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider
} from "@/components/ui/sidebar";

interface SidebarLinkProps {
  href: string;
  icon: React.ElementType;
  title: string;
  isActive: boolean;
  isNew?: boolean;
  onClick?: () => void;
}

const SidebarLink = ({ href, icon: Icon, title, isActive, isNew, onClick }: SidebarLinkProps) => (
  <SidebarMenuItem>
    <SidebarMenuButton 
      asChild 
      isActive={isActive}
      tooltip={title}
    >
      <Link
        to={href}
        className="flex items-center gap-2"
        onClick={onClick}
      >
        <Icon className="flex-shrink-0" />
        <span>{title}</span>
        {isNew && (
          <span className="ml-auto text-[10px] bg-white/10 text-white px-1.5 py-0.5 rounded">NEW</span>
        )}
      </Link>
    </SidebarMenuButton>
  </SidebarMenuItem>
);

const DocSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [query, setQuery] = useState("");
  
  // Filter sidebar links based on search query
  const filterLinks = (title: string) => {
    if (!query) return true;
    return title.toLowerCase().includes(query.toLowerCase());
  };

  return (
    <SidebarProvider>
      <Sidebar variant="inset" className="bg-background/60 backdrop-blur-sm border-r border-white/10 rounded-l-lg">
        <SidebarContent className="px-3 py-2">
          <div className="sticky top-0 bg-background/80 backdrop-blur-sm z-10 px-2 py-3">
            <div className="relative mb-4">
              <Input
                type="text"
                placeholder="Search docs..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-9 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
              <Search className="absolute top-2.5 left-3 h-4 w-4 text-white/50" />
              {query && (
                <button 
                  className="absolute top-2.5 right-3 text-white/50 hover:text-white"
                  onClick={() => setQuery("")}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
          
          <SidebarGroup>
            <SidebarGroupLabel>Getting Started</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
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
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <SidebarGroup>
            <SidebarGroupLabel>Core Features</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
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
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <SidebarGroup>
            <SidebarGroupLabel>Advanced Usage</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
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
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <SidebarGroup>
            <SidebarGroupLabel>Developer Tools</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
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
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <SidebarGroup>
            <SidebarGroupLabel>Security</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarLink 
                  href="/docs/security" 
                  icon={Shield} 
                  title="Security Guide" 
                  isActive={currentPath === "/docs/security"}
                />
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <SidebarGroup>
            <SidebarGroupLabel>Resources</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
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
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};

export default DocSidebar;
