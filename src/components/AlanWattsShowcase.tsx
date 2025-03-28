
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const AlanWattsShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Featured Client
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            How we're helping to protect and monetize Alan Watts' digital legacy
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-5xl mx-auto rounded-lg border border-blue-200 bg-white overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 flex flex-col justify-between h-full space-y-6">
              <div className="flex flex-col space-y-6">
                <Link 
                  to="/case-studies/alan-watts" 
                  onClick={() => window.scrollTo(0, 0)}
                  className="w-fit"
                >
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-md flex items-center justify-center shadow-sm hover:shadow transition-all">
                    View Full Case Study 
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                
                <div className="flex items-center">
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
                
                <p className="text-gray-600 italic">
                  "MindsetDRM not only safeguarded my father's intellectual property but allowed it to flourish in the digital age. Their understanding of the balance between preservation and innovation has brought my fathers teachings to millions"
                </p>
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center transition-all duration-300 hover:bg-blue-100">
                  <p className="text-2xl font-bold text-blue-600">100M+</p>
                  <p className="text-xs text-gray-500">Total Views</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center transition-all duration-300 hover:bg-blue-100">
                  <p className="text-2xl font-bold text-blue-600">99.9%</p>
                  <p className="text-xs text-gray-500">Content Claimed</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center transition-all duration-300 hover:bg-blue-100">
                  <p className="text-2xl font-bold text-blue-600">660%</p>
                  <p className="text-xs text-gray-500">Revenue Growth</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center transition-all duration-300 hover:bg-blue-100">
                  <p className="text-2xl font-bold text-blue-600">27k+</p>
                  <p className="text-xs text-gray-500">Active Claims</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-4 h-full flex items-center">
              <div className="relative overflow-hidden rounded-md h-full w-full">
                <img 
                  src="public/lovable-uploads/06398809-4801-4451-b433-d94226f52860.png" 
                  alt="Alan Watts" 
                  className="w-full h-[300px] md:h-[350px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 py-4 px-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <p className="font-medium text-xl text-white mb-1">Alan Watts</p>
                  <p className="text-sm text-gray-100">British philosopher known for interpreting Eastern philosophy for Western audiences</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
