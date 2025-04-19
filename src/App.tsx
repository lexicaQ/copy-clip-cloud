
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
import TutorialArticle from "./pages/TutorialArticle";
import Status from "./pages/Status";
import Blog from "./pages/Blog";
import Help from "./pages/Help";
import DocArticle from "./pages/DocArticle";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/tutorials/:id" element={<TutorialArticle />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/download" element={<Download />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/help" element={<Help />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/docs/:category/:slug" element={<DocArticle />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/status" element={<Status />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
