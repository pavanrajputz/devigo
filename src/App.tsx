
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Work from "./pages/Work";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import UIUXDesign from "./pages/services/UIUXDesign";
import EnterpriseSoftware from "./pages/services/EnterpriseSoftware";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import ITConsulting from "./pages/services/ITConsulting";
import BloodBankSystem from "./pages/case-studies/BloodBankSystem";
import EcommercePlatform from "./pages/case-studies/EcommercePlatform";
import CorporateCRM from "./pages/case-studies/CorporateCRM";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/services/enterprise-software" element={<EnterpriseSoftware />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/it-consulting" element={<ITConsulting />} />
          <Route path="/case-studies/blood-bank-system" element={<BloodBankSystem />} />
          <Route path="/case-studies/ecommerce-platform" element={<EcommercePlatform />} />
          <Route path="/case-studies/corporate-crm" element={<CorporateCRM />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
