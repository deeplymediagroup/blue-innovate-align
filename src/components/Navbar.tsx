
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { 
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

type NavItem = 
  | { title: string; href: string; }
  | { name: string; href: string; };

// Helper function to get display name from nav item
const getDisplayName = (item: NavItem): string => {
  return 'title' in item ? item.title : item.name;
};

const NAV_ITEMS: NavItem[] = [
  { title: "Services", href: "/#services" },
  { title: "Licensing", href: "/#licensing" },
  { title: "How It Works", href: "/#how-it-works" },
  { title: "Distribution", href: "/#distribution" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Content", href: "/#content" },
];

export const Navbar: React.FC<{extraNavLinks?: { title: string; href: string; }[]}> = ({ extraNavLinks }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      // Hide navbar on scroll down, show on scroll up
      if (scrollPosition > prevScrollY && scrollPosition > 300) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      
      setPrevScrollY(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navbarClasses = cn(
    "fixed w-full z-50 transition-all duration-300",
    isScrolled 
      ? "py-2 backdrop-blur-md bg-white/80 shadow-sm" 
      : "py-4 bg-transparent",
    !navVisible && "transform -translate-y-full"
  );

  // Combine default nav items with any extra nav links
  const allNavItems = extraNavLinks 
    ? [...NAV_ITEMS, ...extraNavLinks]
    : NAV_ITEMS;

  return (
    <header className={navbarClasses}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              MindsetDRM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {allNavItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <Link 
                      to={item.href} 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-sm transition-all px-3",
                        location.pathname === item.href || 
                        (location.pathname === "/" && item.href.startsWith("/#"))
                          ? "text-blue-600 font-medium"
                          : "text-foreground/80 hover:text-foreground"
                      )}
                    >
                      {getDisplayName(item)}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button 
              asChild
              className="ml-2 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile Menu Trigger */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9 p-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col pt-16">
              <div className="flex flex-col space-y-4">
                {allNavItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className={cn(
                      "py-2 text-lg transition-colors",
                      location.pathname === item.href || 
                      (location.pathname === "/" && item.href.startsWith("/#"))
                        ? "text-blue-600 font-medium"
                        : "text-foreground/80 hover:text-foreground"
                    )}
                  >
                    {getDisplayName(item)}
                  </Link>
                ))}
                <Button 
                  asChild
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white w-full"
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
