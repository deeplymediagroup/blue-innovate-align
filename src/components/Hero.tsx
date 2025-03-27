
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowDown } from "lucide-react";
import { AnimatedBlob } from "./AnimatedBlob";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="min-safe-h-screen relative flex items-center overflow-hidden pt-24 pb-20">
      {/* Dynamic background that moves with cursor */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 z-0"
        style={{
          backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
          transition: "background-position 0.2s ease-out",
        }}
      />
      
      {/* Animated background blobs with parallax effect */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
        <AnimatedBlob 
          size="h-[600px] w-[600px]" 
          position="top-[-200px] right-[-200px]" 
        />
        <AnimatedBlob 
          size="h-[700px] w-[700px]" 
          position="bottom-[-300px] left-[-200px]" 
          delay="3s"
        />
      </motion.div>

      {/* 3D floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute h-32 w-32 rounded-full bg-blue-300/30 blur-xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{
            top: '15%',
            right: '20%',
          }}
        />
        <motion.div 
          className="absolute h-20 w-20 rounded-full bg-blue-400/20 blur-xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1
          }}
          style={{
            top: '30%',
            left: '15%',
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={sectionRef}
          className="reveal-section max-w-4xl mx-auto text-center space-y-6"
        >
          <div className="inline-block mb-3">
            <div className="py-1 px-3 bg-blue-100 border border-blue-200 rounded-full">
              <p className="text-xs font-medium text-blue-700">
                Global Leader in Digital Rights Management
              </p>
            </div>
          </div>

          <h1 className="font-display font-bold text-5xl md:text-7xl bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent leading-tight">
            Protect and Monetize <br />
            Your Content on YouTube
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto text-balance">
            We help creators and brands recover and monetize unauthorized usage of their content across YouTube.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg button-shimmer">
                Get Started <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>

          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a href="#clients" className="inline-flex flex-col items-center">
              <p className="text-sm text-foreground/70 mb-2">Trusted by World-Class Brands</p>
              <motion.div 
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="h-5 w-5" />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
