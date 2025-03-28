
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  extraNavLinks?: { title: string; href: string; }[];
}

export const Navbar: React.FC<NavbarProps> = ({ extraNavLinks }) => {
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

  const navLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * custom, duration: 0.5 }
    })
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
            <motion.a 
              href="/" 
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-display text-xl font-bold text-gradient">
                MindsetDRM
              </span>
            </motion.a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Claiming", href: "https://preview--blue-innovate-align.lovable.app/#services" },
              { name: "Distribution", href: "https://preview--blue-innovate-align.lovable.app/#distribution" },
              { name: "Licensing", href: "https://preview--blue-innovate-align.lovable.app/#licensing" },
              ...(extraNavLinks || [])
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-blue-600 transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navLinkVariants}
              >
                {link.title || link.name}
              </motion.a>
            ))}
          </nav>

          <motion.div 
            className="hidden md:flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a href="/contact">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 button-shimmer shadow-sm hover-glow">
                Connect
              </Button>
            </a>
          </motion.div>

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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg"
          >
            <div className="container mx-auto px-4 py-6 space-y-6">
              <nav className="flex flex-col space-y-4">
                {[
                  { name: "Claiming", href: "https://preview--blue-innovate-align.lovable.app/#services" },
                  { name: "Distribution", href: "https://preview--blue-innovate-align.lovable.app/#distribution" },
                  { name: "Licensing", href: "https://preview--blue-innovate-align.lovable.app/#licensing" },
                  ...(extraNavLinks || [])
                ].map((link, index) => (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                    href={link.href}
                    className="text-base font-medium text-foreground/80 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title || link.name}
                  </motion.a>
                ))}
              </nav>
              <motion.div 
                className="grid gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <a href="/contact">
                  <Button
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 button-shimmer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Connect
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
