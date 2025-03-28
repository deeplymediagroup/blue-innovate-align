
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const AlanWattsShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50/80 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Featured Client
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How we're helping to protect and monetize Alan Watts' digital legacy
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8">
              <Link to="/case-studies/alan-watts">
                <Button className="mb-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center">
                  View Full Case Study 
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 mr-3 overflow-hidden">
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/548b74c8e4b0d3ebe88e525d/a25f04e5-6440-4fd1-9d76-7e1a49b2690f/Screen+Shot+2022-03-21+at+4.17.56+PM.png" 
                    alt="Mark Watts" 
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg">Mark Watts</p>
                  <p className="text-blue-600">Alan Watts Organization</p>
                </div>
              </div>
              
              <p className="mb-8 text-gray-700 italic">
                "MindsetDRM not only safeguarded my father's intellectual property but allowed it to flourish in the digital age. Their understanding of the balance between preservation and innovation has brought my fathers teachings to millions"
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-blue-600">99.9%</p>
                  <p className="text-sm text-gray-600">Content Claimed</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-blue-600">660%</p>
                  <p className="text-sm text-gray-600">Revenue Growth</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-blue-600">27k+</p>
                  <p className="text-sm text-gray-600">Active Claims</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-full">
              <img 
                src="https://img.youtube.com/vi/dYSQ1NF1hvw/maxresdefault.jpg" 
                alt="Alan Watts content" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/60 text-white">
                <p className="font-bold text-xl">Alan Watts</p>
                <p className="text-sm">British philosopher known for interpreting Eastern philosophy for Western audiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
