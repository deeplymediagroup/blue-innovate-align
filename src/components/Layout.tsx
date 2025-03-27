
import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
  extraNavLinks?: { title: string; href: string; }[];
}

export const Layout: React.FC<LayoutProps> = ({ children, extraNavLinks }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    // Optimized mouse tracking with debounce
    let frame: number;
    
    const mouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      
      frame = requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      });
    };

    window.addEventListener("mousemove", mouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: { type: "spring", mass: 0.3, stiffness: 800, damping: 30 }
    },
    button: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
      backgroundColor: "rgba(59, 130, 246, 0.5)",
      transition: { type: "spring", mass: 0.3, stiffness: 800, damping: 30 }
    },
  };

  const enterButton = () => setCursorVariant("button");
  const leaveButton = () => setCursorVariant("default");

  // Add event listeners for buttons
  useEffect(() => {
    const buttons = document.querySelectorAll("button, a");
    
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", enterButton, { passive: true });
      button.addEventListener("mouseleave", leaveButton, { passive: true });
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", enterButton);
        button.removeEventListener("mouseleave", leaveButton);
      });
    };
  }, []);

  return (
    <div className="min-safe-h-screen flex flex-col relative">
      <Navbar extraNavLinks={extraNavLinks} />
      <main className="flex-1">{children}</main>
      <Footer />
      
      {/* Custom cursor - uses optimized animation */}
      <motion.div
        className="custom-cursor hidden md:block fixed top-0 left-0 w-8 h-8 bg-blue-400/30 backdrop-blur-sm rounded-full pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
        initial={false}
      />
    </div>
  );
};
