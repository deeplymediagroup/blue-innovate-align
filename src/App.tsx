
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import CaseStudies from "./pages/CaseStudies";
import AlanWattsCase from "./pages/AlanWattsCase";
import { scrollToTop } from "@/hooks/use-mobile";

// ScrollToTop component to reset scroll position on navigation
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    scrollToTop();
  }, [location]);
  
  return null;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/alan-watts" element={<AlanWattsCase />} />
          <Route path="/claiming" element={<Index />} />
          <Route path="/distribution" element={<Index />} />
          <Route path="/licensing" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
