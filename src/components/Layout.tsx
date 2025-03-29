
import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Toaster } from "./ui/toaster";
import { DecorativeElements } from "./DecorativeElements";

interface LayoutProps {
  children: React.ReactNode;
  extraNavLinks?: { title: string; href: string }[];
}

export const Layout: React.FC<LayoutProps> = ({ children, extraNavLinks }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Configure chat widget
  useEffect(() => {
    // This is where we'd add a chat widget for lead generation
    // Placeholder for future implementation
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden relative">
      <Navbar extraNavLinks={extraNavLinks} />
      
      {/* Global decorative elements */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <DecorativeElements />
      </div>
      
      {/* Scroll indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-200">
        <div 
          id="scroll-indicator" 
          className="h-full bg-blue-600 transition-all duration-200"
        ></div>
      </div>
      
      <main className="flex-grow relative z-10">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
};
