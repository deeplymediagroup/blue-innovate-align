
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, AnimatedButton } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

type NavItem = {
  label: string;
  href: string;
};

interface NavbarProps {
  extraNavLinks?: { title: string; href: string; }[];
}

const navItems: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Distribution", href: "#distribution" },
  { label: "Licensing", href: "#licensing" },
  { label: "Case Studies", href: "/case-studies" },
];

export const Navbar: React.FC<NavbarProps> = ({ extraNavLinks }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle navigation
  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // Handle in-page anchor navigation
      const element = document.querySelector(href);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 100,
          behavior: "smooth",
        });
      }
    } else {
      // Handle external page navigation
      navigate(href);
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
          >
            <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">MindsetDRM</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => handleNavigation(item.href)}
                className="text-foreground/80 hover:text-blue-600 transition-colors text-sm font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <motion.div 
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden rounded-full"
              >
                <AnimatedButton
                  className={`rounded-full transition-all duration-300 ${
                    isScrolled
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white"
                      : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white"
                  } relative z-10 group`}
                >
                  <span className="relative z-10 flex items-center">
                    Connect
                    <motion.div
                      initial={{ x: 0 }}
                      animate={{ x: [0, 3, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        repeatType: "reverse" 
                      }}
                    >
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </motion.div>
                  </span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatedButton>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavigation(item.href)}
                    className="py-2 text-foreground/80 hover:text-blue-600 transition-colors flex items-center justify-between"
                  >
                    {item.label}
                    <ChevronRight className="h-4 w-4" />
                  </button>
                ))}
                <Link 
                  to="/contact" 
                  className="w-full" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <AnimatedButton className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white group">
                      <span className="relative z-10 flex items-center">
                        Connect
                        <motion.div
                          initial={{ x: 0 }}
                          animate={{ x: [0, 3, 0] }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity, 
                            repeatType: "reverse" 
                          }}
                        >
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </motion.div>
                      </span>
                    </AnimatedButton>
                  </motion.div>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
