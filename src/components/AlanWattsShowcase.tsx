import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const AlanWattsShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50/80 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-4">
          <span className="text-sm uppercase tracking-wider text-blue-600">FEATURED CLIENT</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
          Alan Watts Organization
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-12 max-w-xl">
              We've helped the Alan Watts Organization recover and monetize
              unauthorized usage of their content across YouTube.
            </p>
            
            <div className="bg-white/90 shadow-lg backdrop-blur-sm rounded-lg p-8 mb-8 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="mb-4">
                <p className="text-gray-600">Monthly Revenue Recovered</p>
              </div>
              
              <div className="flex items-baseline">
                <h3 className="text-5xl font-bold text-blue-600">$9,873</h3>
                <span className="text-2xl ml-1 text-gray-400">.12</span>
                <span className="ml-2 text-gray-400">/month</span>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-3"></div>
                  <p className="text-gray-700">Monitoring</p>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-3"></div>
                  <p className="text-gray-700">Monetization across 25,000+ claims</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center mb-10">
              <div className="h-14 w-14 rounded-full bg-gray-200 mr-4 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/548b74c8e4b0d3ebe88e525d/a25f04e5-6440-4fd1-9d76-7e1a49b2690f/Screen+Shot+2022-03-21+at+4.17.56+PM.png" 
                  alt="Mark Watts" 
                  className="h-full w-full object-cover object-center scale-150"
                />
              </div>
              <div>
                <p className="font-medium">Mark Watts</p>
                <p className="text-sm text-gray-600">Director, Alan Watts Organization</p>
              </div>
            </div>
            
            <Button variant="link" className="text-blue-600 group flex items-center">
              View full case study 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center overflow-hidden">
              <img 
                src="https://img.youtube.com/vi/dYSQ1NF1hvw/maxresdefault.jpg" 
                alt="Alan Watts content" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 bg-white/80 rounded-full flex items-center justify-center">
                  <svg className="h-8 w-8 text-blue-600 ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm py-2 px-3 rounded shadow-md flex items-center">
              <div className="h-6 w-6 bg-red-600 rounded flex items-center justify-center mr-2">
                <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium">YouTube Content ID</p>
                <p className="text-xs text-gray-600">25,000+ claims monitored</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
