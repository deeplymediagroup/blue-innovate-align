import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export const Navbar: React.FC<{ extraNavLinks?: { title: string; href: string }[] }> = ({ 
  extraNavLinks = [] 
}) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  const navLinks = [
    { title: "Services", href: "/services" },
    { title: "Case Studies", href: "/case-studies" },
    { title: "Pricing", href: "/scale" },
    { title: "Contact", href: "/contact" },
    ...extraNavLinks,
  ];
  
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center font-bold text-xl">
          <img src="/logo.svg" alt="Mindset Logo" className="h-8 mr-2" />
          Mindset
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className="text-sm font-medium hover:underline underline-offset-4">
              {link.title}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === 'dark' ? (
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all" />
            )}
          </Button>
          <Link to="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
              Contact Us
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
