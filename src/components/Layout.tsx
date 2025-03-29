
import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Toaster } from "./ui/toaster";

interface LayoutProps {
  children: React.ReactNode;
  extraNavLinks?: { title: string; href: string }[];
}

export const Layout: React.FC<LayoutProps> = ({ children, extraNavLinks }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden relative bg-white text-gray-900">
      <Navbar extraNavLinks={extraNavLinks} />
      
      <main className="flex-grow relative z-10">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
};
