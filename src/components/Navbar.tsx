import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <a href="/" className="flex items-center">
              <span className="font-display text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                MindsetDRM
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="#claiming"
              className="text-sm font-medium text-foreground/80 hover:text-blue-600 transition-colors"
            >
              Claiming
            </Link>
            <Link
              to="/distribution"
              className="text-sm font-medium text-foreground/80 hover:text-blue-600 transition-colors"
            >
              Distribution
            </Link>
            <Link
              to="/licensing"
              className="text-sm font-medium text-foreground/80 hover:text-blue-600 transition-colors"
            >
              Licensing
            </Link>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground/80 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 button-shimmer">
              Get Started
            </Button>
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
              to="/distribution"
              className="text-base font-medium text-foreground/80 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Distribution
            </Link>
            <Link
              to="/licensing"
              className="text-base font-medium text-foreground/80 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Licensing
            </Link>
            <a
              href="#pricing"
              className="text-base font-medium text-foreground/80 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-base font-medium text-foreground/80 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
          <div className="grid">
            <Button
              className="w-full bg-blue-600 text-white hover:bg-blue-700 button-shimmer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
