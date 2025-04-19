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

// Feature pages that exist in the project
import LightningFast from "./pages/features/LightningFast";
import SmartSearch from "./pages/features/SmartSearch";
import SmartOrganization from "./pages/features/SmartOrganizationFeature"; 
import CodeSnippets from "./pages/features/CodeSnippets";
import CustomRules from "./pages/features/CustomRules";
import HistoryTimeline from "./pages/features/HistoryTimeline";
import EndToEndEncryption from "./pages/features/EndToEndEncryption";
import CopyClipCloud from "./pages/features/CopyClipCloud";

// Docs pages that exist in the project
import AdvancedUsage from "./pages/docs/AdvancedUsage";
import GettingStarted from "./pages/docs/GettingStarted";

// Use case page
import DeveloperCase from "./pages/use-cases/DeveloperCase";

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
          
          {/* Feature pages */}
          <Route path="/features/copy-clip-cloud" element={<CopyClipCloud />} />
          <Route path="/features/lightning-fast" element={<LightningFast />} />
          <Route path="/features/smart-search" element={<SmartSearch />} />
          <Route path="/features/smart-organization" element={<SmartOrganization />} />
          <Route path="/features/code-snippets" element={<CodeSnippets />} />
          <Route path="/features/custom-rules" element={<CustomRules />} />
          <Route path="/features/history-timeline" element={<HistoryTimeline />} />
          <Route path="/features/end-to-end-encryption" element={<EndToEndEncryption />} />
          
          {/* Documentation pages */}
          <Route path="/docs/getting-started" element={<GettingStarted />} />
          <Route path="/docs/advanced-usage" element={<AdvancedUsage />} />
          
          {/* Use cases */}
          <Route path="/use-cases/developer" element={<DeveloperCase />} />
          
          {/* Help pages */}
          <Route path="/help/getting-started" element={<GettingStartedHelp />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
