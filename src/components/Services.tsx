
import React, { useEffect, useRef } from "react";
import { GlassmorphicCard } from "./GlassmorphicCard";
import { CheckCircle, Shield, DollarSign, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-blue-50/50 relative overflow-hidden">
      {/* 3D Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={sectionRef}
          className="reveal-section max-w-5xl mx-auto"
        >
          <div className="mb-20 text-center">
            <div className="inline-block mb-6">
              <div className="py-1 px-3 bg-blue-100 border border-blue-200 rounded-full">
                <p className="text-xs font-medium text-blue-700">
                  What We Do
                </p>
              </div>
            </div>
            <h2 className="font-display font-bold text-gradient">
              Comprehensive YouTube Content Protection
            </h2>
            <p className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto">
              We help creators and brands take control of their content across YouTube
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="h-full"
            >
              <GlassmorphicCard
                variant="bordered"
                className="relative overflow-hidden transition-all duration-300 hover:shadow-lg h-full backdrop-blur-md border-blue-200/50"
              >
                <div className="absolute -top-6 -right-6 w-24 h-24">
                  <div className="w-full h-full bg-blue-100 rounded-full flex items-end justify-start p-4 rotate-12 shadow-inner">
                    <Youtube className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">Discover Your Content</h3>
                <p className="text-foreground/70 mb-6">
                  We identify where your content is being used across YouTube, giving you complete visibility.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start group">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-blue-600 transition-colors">Automated content scanning</span>
                  </li>
                  <li className="flex items-start group">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-blue-600 transition-colors">Personalized Dashboard</span>
                  </li>
                  <li className="flex items-start group">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-blue-600 transition-colors">Usage analytics</span>
                  </li>
                </ul>
              </GlassmorphicCard>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="h-full"
            >
              <GlassmorphicCard
                variant="highlight"
                className="relative overflow-hidden md:-translate-y-4 transition-all duration-300 hover:shadow-xl h-full backdrop-blur-md before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-100/50 before:to-transparent before:z-0 before:opacity-50"
              >
                <div className="absolute -top-6 -right-6 w-24 h-24">
                  <div className="w-full h-full bg-blue-100 rounded-full flex items-end justify-start p-4 rotate-12 shadow-inner">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">Protect Your Content</h3>
                  <p className="text-foreground/70 mb-6">
                    Choose how your content is used and manage unauthorized usage according to your preferences.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start group">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-blue-600 transition-colors">Automated content claims</span>
                    </li>
                    <li className="flex items-start group">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-blue-600 transition-colors">Protection options</span>
                    </li>
                    <li className="flex items-start group">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-blue-600 transition-colors">Usage management options</span>
                    </li>
                    <li className="flex items-start group">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-blue-600 transition-colors">Dedicated partner manager</span>
                    </li>
                  </ul>
                </div>
              </GlassmorphicCard>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="h-full"
            >
              <GlassmorphicCard
                variant="bordered"
                className="relative overflow-hidden transition-all duration-300 hover:shadow-lg h-full backdrop-blur-md border-blue-200/50"
              >
                <div className="absolute -top-6 -right-6 w-24 h-24">
                  <div className="w-full h-full bg-blue-100 rounded-full flex items-end justify-start p-4 rotate-12 shadow-inner">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">Monetize Your Content</h3>
                <p className="text-foreground/70 mb-6">
                  Turn unauthorized usage into a revenue stream with our monetization options.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start group">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-blue-600 transition-colors">Unlock Revenue Potential</span>
                  </li>
                  <li className="flex items-start group">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-blue-600 transition-colors">Creator partnerships</span>
                  </li>
                  <li className="flex items-start group">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-blue-600 transition-colors">Reclaim Stolen Revenue</span>
                  </li>
                </ul>
              </GlassmorphicCard>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full relative overflow-hidden group">
                <span className="relative z-10">Learn More About Our Services</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
