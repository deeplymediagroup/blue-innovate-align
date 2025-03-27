
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const AlanWattsShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-4">
          <span className="text-sm uppercase tracking-wider text-gray-400">FEATURED CLIENT</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Alan Watts Organization
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-12 max-w-xl">
              We've helped the Alan Watts Organization recover and monetize
              unauthorized usage of their content across YouTube.
            </p>
            
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg p-8 mb-8">
              <div className="mb-4">
                <p className="text-gray-400">Monthly Revenue Recovered</p>
              </div>
              
              <div className="flex items-baseline">
                <h3 className="text-5xl font-bold">$9,873</h3>
                <span className="text-2xl ml-1 text-gray-400">.12</span>
                <span className="ml-2 text-gray-400">/month</span>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-3"></div>
                  <p className="text-gray-300">Live monitoring active</p>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-3"></div>
                  <p className="text-gray-300">Active monetization across 25,000+ claims</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center mb-10">
              <div className="h-14 w-14 rounded-full bg-gray-200 mr-4"></div>
              <div>
                <p className="font-medium">Mark Watts</p>
                <p className="text-sm text-gray-400">Director, Alan Watts Organization</p>
              </div>
            </div>
            
            <Button variant="link" className="text-white group flex items-center">
              View full case study 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center">
              <div className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-gray-800/80 backdrop-blur-sm py-2 px-3 rounded flex items-center">
              <div className="h-6 w-6 bg-gray-300 rounded mr-2"></div>
              <div>
                <p className="text-xs">YouTube Content ID</p>
                <p className="text-xs text-gray-400">25,000+ claims monitored</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
