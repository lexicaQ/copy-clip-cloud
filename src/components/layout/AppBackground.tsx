
import React from "react";
import { useLocation } from "react-router-dom";
import InteractiveBackground from "@/components/landing/InteractiveBackground";
import BackgroundEffects from "@/components/landing/BackgroundEffects";

const AppBackground = () => {
  const location = useLocation();
  const pathname = location.pathname;
  
  // Documentation pages have a simpler black and white theme
  const isDocPage = pathname.startsWith("/docs") || 
                    pathname === "/help" || 
                    pathname === "/faq";

  if (isDocPage) {
    return (
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.8)_100%)]" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
    );
  }
  
  // Determine which background to use based on route
  // Use BackgroundEffects for selected pages, InteractiveBackground for others
  const useBackgroundEffects = pathname === "/features" || 
                              pathname === "/about" || 
                              pathname === "/support";
  
  return useBackgroundEffects ? <BackgroundEffects /> : <InteractiveBackground />;
};

export default AppBackground;
