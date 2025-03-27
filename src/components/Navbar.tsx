
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    
    // If we're not on the homepage, navigate there first then scroll
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // If we're already on the homepage, just scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-24 flex items-center",
        scrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm h-16"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-display font-bold text-xl md:text-2xl bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              MindsetDRM
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <nav className="flex items-center space-x-1 mr-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("claiming")}
                className="text-foreground/70 hover:text-foreground"
              >
                Claiming
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("distribution")}
                className="text-foreground/70 hover:text-foreground"
              >
                Distribution
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("licensing")}
                className="text-foreground/70 hover:text-foreground"
              >
                Licensing
              </Button>
            </nav>
            <Link to="/contact">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Connect
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-white shadow-lg flex flex-col"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("claiming")}
                className="justify-start h-10"
              >
                Claiming
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("distribution")}
                className="justify-start h-10"
              >
                Distribution
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("licensing")}
                className="justify-start h-10"
              >
                Licensing
              </Button>
              <Link to="/contact" className="w-full">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  Connect
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
