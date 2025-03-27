
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
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

// ScrollToTop component that handles scrolling on route changes or when hash changes
const ScrollToHashHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // If the URL has a hash, scroll to that element
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (location.pathname === '/') {
        // If the hash element doesn't exist and we're on the homepage, 
        // don't do anything as it might still be loading
      } else {
        // If the hash element doesn't exist and we're not on the homepage,
        // navigate to the homepage with the hash
        navigate(`/${location.hash}`, { replace: true });
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location, navigate]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHashHandler />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/alan-watts" element={<AlanWattsCase />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
