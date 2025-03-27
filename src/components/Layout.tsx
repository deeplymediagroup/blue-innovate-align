
import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    button: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
      backgroundColor: "rgba(59, 130, 246, 0.5)",
    },
  };

  const enterButton = () => setCursorVariant("button");
  const leaveButton = () => setCursorVariant("default");

  // Add event listeners for buttons
  useEffect(() => {
    const buttons = document.querySelectorAll("button, a");
    
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", enterButton);
      button.addEventListener("mouseleave", leaveButton);
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
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      
      {/* Custom cursor */}
      <motion.div
        className="custom-cursor hidden md:block fixed top-0 left-0 w-8 h-8 bg-blue-400/30 backdrop-blur-sm rounded-full pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </div>
  );
};
