
import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  extraNavLinks?: { title: string; href: string; }[];
}

export const Layout: React.FC<LayoutProps> = ({ children, extraNavLinks }) => {
  return (
    <div className="min-safe-h-screen flex flex-col relative">
      <Navbar extraNavLinks={extraNavLinks} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
