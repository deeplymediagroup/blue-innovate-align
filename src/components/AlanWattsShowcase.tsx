
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const AlanWattsShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
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
            How we're helping to protect and monetize a family estate's digital legacy
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto rounded-xl border border-blue-200 bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">FE</span>
                </div>
                <div>
                  <p className="font-semibold text-lg">Family Estate</p>
                  <p className="text-sm text-blue-600">Intellectual Property Owner</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center transition-all duration-300 hover:from-blue-100 hover:to-blue-200 border border-blue-200">
                  <p className="text-2xl font-bold text-blue-700">100M+</p>
                  <p className="text-xs text-gray-600">Total Views</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center transition-all duration-300 hover:from-blue-100 hover:to-blue-200 border border-blue-200">
                  <p className="text-2xl font-bold text-blue-700">99.9%</p>
                  <p className="text-xs text-gray-600">Content Claimed</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center transition-all duration-300 hover:from-blue-100 hover:to-blue-200 border border-blue-200">
                  <p className="text-2xl font-bold text-blue-700">660%</p>
                  <p className="text-xs text-gray-600">Revenue Growth</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center transition-all duration-300 hover:from-blue-100 hover:to-blue-200 border border-blue-200">
                  <p className="text-2xl font-bold text-blue-700">27k+</p>
                  <p className="text-xs text-gray-600">Active Claims</p>
                </div>
              </div>
              
              <Link 
                to="/case-studies/alan-watts" 
                onClick={() => window.scrollTo(0, 0)}
                className="block"
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all group">
                    View Full Case Study 
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        repeatType: "reverse"
                      }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.span>
                  </Button>
                </motion.div>
              </Link>
            </div>
            
            <div className="h-full flex items-center">
              <div className="relative overflow-hidden rounded-lg h-full w-full">
                <img 
                  src="/lovable-uploads/bd5f4d9e-1866-45a2-b53e-a2f987172cbb.png" 
                  alt="Luxury Estate Aerial View" 
                  className="w-full h-[280px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 py-3 px-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <p className="font-medium text-lg text-white mb-1">Family Estate</p>
                  <p className="text-sm text-gray-100">High-value intellectual property with global digital presence</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
