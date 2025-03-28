
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import CaseStudies from "./pages/CaseStudies";
import AlanWattsCase from "./pages/AlanWattsCase";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

const SectionRedirect = ({ to }: { to: string }) => {
  useEffect(() => {
    window.location.href = to;
  }, [to]);
  
  return null;
};

const ExternalRedirect = ({ to }: { to: string }) => {
  useEffect(() => {
    window.location.href = to;
  }, [to]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/alan-watts" element={<AlanWattsCase />} />
          
          {/* Section redirects */}
          <Route path="/services" element={<ExternalRedirect to="https://preview--blue-innovate-align.lovable.app/#services" />} />
          <Route path="/distribution" element={<ExternalRedirect to="https://preview--blue-innovate-align.lovable.app/#distribution" />} />
          <Route path="/licensing" element={<ExternalRedirect to="https://preview--blue-innovate-align.lovable.app/#licensing" />} />
          <Route path="/claiming" element={<ExternalRedirect to="https://preview--blue-innovate-align.lovable.app/#services" />} />
          
          {/* Scale and Enterprise program redirects */}
          <Route path="/scale" element={<ExternalRedirect to="https://preview--blue-innovate-align.lovable.app/contact" />} />
          <Route path="/enterprise" element={<ExternalRedirect to="https://preview--blue-innovate-align.lovable.app/contact" />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
