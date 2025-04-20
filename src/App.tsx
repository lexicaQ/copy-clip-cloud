
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";
import Tutorials from "./pages/Tutorials";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import Roadmap from "./pages/Roadmap";
import Updates from "./pages/Updates";
import Download from "./pages/Download";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Partners from "./pages/Partners";
import Documentation from "./pages/Documentation";
import Status from "./pages/Status";
import Blog from "./pages/Blog";
import Help from "./pages/Help";
import FAQ from "./pages/FAQ";
import CookieBanner from "./components/cookie/CookieBanner";
import AcceptableUse from "./pages/AcceptableUse";
import DataProcessing from "./pages/DataProcessing";
import GettingStartedHelp from "./pages/help/GettingStartedHelp";

// Documentation pages
import GettingStarted from "./pages/docs/GettingStarted";
import CoreFeatures from "./pages/docs/CoreFeatures";
import AdvancedUsage from "./pages/docs/AdvancedUsage";
import ApiDocumentation from "./pages/docs/ApiDocumentation";
import ApiExplorer from "./pages/docs/ApiExplorer";
import KeyboardShortcuts from "./pages/docs/KeyboardShortcuts";
import CloudSync from "./pages/docs/CloudSync";
import Templates from "./pages/docs/Templates";
import SmartOrganization from "./pages/docs/SmartOrganization";
import SearchFiltering from "./pages/docs/SearchFiltering";
import SecurityDocs from "./pages/docs/SecurityDocs";
import Sdk from "./pages/docs/Sdk";
import IntegrationGuides from "./pages/docs/IntegrationGuides";
import DeveloperPortal from "./pages/docs/DeveloperPortal";
import AllArticles from "./pages/docs/AllArticles";

// Feature pages that exist in the project
import CopyClipCloud from "./pages/features/CopyClipCloud";
import SmartOrganizationFeature from "./pages/features/SmartOrganizationFeature";
import UniversalClipboard from "./pages/features/UniversalClipboard";
import SmartSearch from "./pages/features/SmartSearch";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <CookieBanner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/acceptable-use" element={<AcceptableUse />} />
          <Route path="/data-processing" element={<DataProcessing />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/download" element={<Download />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/help" element={<Help />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/status" element={<Status />} />
          
          {/* Documentation pages */}
          <Route path="/docs/getting-started" element={<GettingStarted />} />
          <Route path="/docs/core-features" element={<CoreFeatures />} />
          <Route path="/docs/advanced-usage" element={<AdvancedUsage />} />
          <Route path="/docs/api-documentation" element={<ApiDocumentation />} />
          <Route path="/docs/api-explorer" element={<ApiExplorer />} />
          <Route path="/docs/keyboard-shortcuts" element={<KeyboardShortcuts />} />
          <Route path="/docs/cloud-sync" element={<CloudSync />} />
          <Route path="/docs/templates" element={<Templates />} />
          <Route path="/docs/smart-organization" element={<SmartOrganization />} />
          <Route path="/docs/search-filtering" element={<SearchFiltering />} />
          <Route path="/docs/security" element={<SecurityDocs />} />
          <Route path="/docs/sdk" element={<Sdk />} />
          <Route path="/docs/integration-guides" element={<IntegrationGuides />} />
          <Route path="/docs/developer-portal" element={<DeveloperPortal />} />
          <Route path="/docs/all-articles" element={<AllArticles />} />
          
          {/* Feature pages */}
          <Route path="/features/copy-clip-cloud" element={<CopyClipCloud />} />
          <Route path="/features/universal-clipboard" element={<UniversalClipboard />} />
          <Route path="/features/smart-organization" element={<SmartOrganizationFeature />} />
          <Route path="/features/smart-search" element={<SmartSearch />} />
          
          {/* Help pages */}
          <Route path="/help/getting-started" element={<GettingStartedHelp />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
