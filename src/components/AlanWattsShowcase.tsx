
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const AlanWattsShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Featured Client
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            How we're helping to protect and monetize Alan Watts' digital legacy
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto rounded-lg border border-blue-200 bg-white overflow-hidden shadow-sm">
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Link 
                to="/case-studies/alan-watts" 
                className="mb-8 inline-block"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-md flex items-center justify-center">
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
              <div className="overflow-hidden rounded-md h-full w-3/4 ml-auto">
                <img 
                  src="public/lovable-uploads/cc93ab06-52d9-4bc6-982c-e27b607f63cf.png" 
                  alt="Alan Watts" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 py-3 px-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="font-medium text-xl text-white">Alan Watts</p>
                  <p className="text-sm text-gray-200">British philosopher known for interpreting Eastern philosophy for Western audiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
