
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

  return (
    <div className="flex flex-col min-h-screen overflow-hidden relative">
      <Navbar extraNavLinks={extraNavLinks} />
      
      {/* Global decorative elements */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <DecorativeElements />
      </div>
      
      <main className="flex-grow relative z-10">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
};
