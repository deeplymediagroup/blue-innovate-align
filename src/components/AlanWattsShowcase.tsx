
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const AlanWattsShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-4">
          <span className="text-sm uppercase tracking-wider text-blue-600">FEATURED CLIENT</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
          Alan Watts Organization
        </h2>
        
        <p className="text-lg text-gray-700 mb-12 max-w-xl">
          How we're helping to protect and monetize Alan Watts' digital legacy
        </p>
            
        <div className="rounded-lg border border-blue-200 bg-white overflow-hidden">
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="bg-white shadow-sm rounded-lg p-8 mb-8 transition-transform duration-300 hover:shadow-md">
                  <div className="mb-4">
                    <p className="text-gray-600">Monthly Revenue Recovered</p>
                  </div>
                  
                  <div className="flex items-baseline">
                    <h3 className="text-5xl font-bold text-blue-600">$9,873</h3>
                    <span className="text-2xl ml-1 text-gray-400">.68</span>
                    <span className="ml-2 text-gray-400">/month</span>
                  </div>
                </div>
                
                <Link to="/case-studies/alan-watts" className="block">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center">
                    View Full Case Study 
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                
                <div className="mt-8 flex items-center">
                  <div className="h-14 w-14 rounded-full bg-gray-200 mr-4 overflow-hidden">
                    <img 
                      src="https://images.squarespace-cdn.com/content/v1/548b74c8e4b0d3ebe88e525d/a25f04e5-6440-4fd1-9d76-7e1a49b2690f/Screen+Shot+2022-03-21+at+4.17.56+PM.png" 
                      alt="Mark Watts" 
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Mark Watts</p>
                    <p className="text-sm text-blue-500">Alan Watts Organization</p>
                  </div>
                </div>
                
                <p className="mt-4 text-gray-600 italic">
                  "MindsetDRM not only safeguarded my father's intellectual property but allowed it to flourish in the digital age. Their understanding of the balance between preservation and innovation has brought my fathers teachings to millions"
                </p>
                
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-blue-600">99.9%</p>
                    <p className="text-xs text-gray-500">Content Claimed</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-blue-600">660%</p>
                    <p className="text-xs text-gray-500">Revenue Growth</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-blue-600">27k+</p>
                    <p className="text-xs text-gray-500">Active Claims</p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-full">
                <div className="aspect-[3/4] overflow-hidden rounded-md">
                  <img 
                    src="/lovable-uploads/34b3ac63-95e7-45b0-b137-298d43b0aacc.png" 
                    alt="Alan Watts" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm py-2 px-3 rounded shadow-md text-white max-w-xs">
                    <p className="font-medium">Alan Watts</p>
                    <p className="text-sm text-gray-300">British philosopher known for interpreting Eastern philosophy for Western audiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
