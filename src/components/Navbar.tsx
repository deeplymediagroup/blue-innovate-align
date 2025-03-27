
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavbarProps {
  extraNavLinks?: { title: string; href: string; }[];
}

export const Navbar: React.FC<NavbarProps> = ({ extraNavLinks }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to scroll to a section if on homepage, or navigate if not
  const scrollToSectionOrNavigate = (sectionId: string, path: string) => {
    if (location.pathname === "/") {
      // If on homepage, scroll to the section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      return `/#${sectionId}`;
    } else {
      // If not on homepage, prepare to navigate to homepage + section
      return `/${path}`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-display text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                MindsetDRM
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              <Link
                to={scrollToSectionOrNavigate("services", "")}
                className="text-sm font-medium text-foreground/80 hover:text-blue-600 transition-colors"
              >
                Claiming
              </Link>
              <Link
                to={scrollToSectionOrNavigate("distribution", "")}
                className="text-sm font-medium text-foreground/80 hover:text-blue-600 transition-colors"
              >
                Distribution
              </Link>
              <Link
                to={scrollToSectionOrNavigate("licensing", "")}
                className="text-sm font-medium text-foreground/80 hover:text-blue-600 transition-colors"
              >
                Licensing
              </Link>
              {extraNavLinks?.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-blue-600 transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden md:flex items-center">
            <Link to="/contact">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 button-shimmer group">
                <span className="relative z-10 group-hover:translate-x-1 transition-all duration-300">Connect</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
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
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[calc(100vh-4rem)] overflow-auto" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-6 space-y-6">
          <nav className="flex flex-col space-y-4">
            <Link
              to={scrollToSectionOrNavigate("services", "")}
              className="text-base font-medium text-foreground/80 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Claiming
            </Link>
            <Link
              to={scrollToSectionOrNavigate("distribution", "")}
              className="text-base font-medium text-foreground/80 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Distribution
            </Link>
            <Link
              to={scrollToSectionOrNavigate("licensing", "")}
              className="text-base font-medium text-foreground/80 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Licensing
            </Link>
            {extraNavLinks?.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-base font-medium text-foreground/80 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="grid gap-4">
            <Link to="/contact">
              <Button
                className="w-full bg-blue-600 text-white hover:bg-blue-700 button-shimmer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Connect
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
