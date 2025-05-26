
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
            How we're helping to protect and monetize a family estate's digital legacy
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
                <div className="flex justify-between items-center w-full">
                  <Link 
                    to="/case-studies/alan-watts" 
                    onClick={() => window.scrollTo(0, 0)}
                    className="w-fit"
                  >
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-md flex items-center justify-center shadow-sm hover:shadow transition-all group">
                        View Full Case Study 
                        <motion.span
                          initial={{ x: 0 }}
                          animate={{ x: [0, 5, 0] }}
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
                
                <div className="flex items-center">
                  <div className="h-14 w-14 rounded-full bg-gray-200 mr-4 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">FE</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Family Estate</p>
                    <p className="text-sm text-blue-500">Intellectual Property Owner</p>
                  </div>
                </div>
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
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=350&fit=crop&crop=center" 
                  alt="Family Estate" 
                  className="w-full h-[300px] md:h-[350px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 py-4 px-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <p className="font-medium text-xl text-white mb-1">Family Estate</p>
                  <p className="text-sm text-gray-100">High-value intellectual property with global digital presence</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Add decorative elements */}
      <motion.div 
        className="absolute -right-20 top-40 w-40 h-40 rounded-full bg-blue-100/50 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 15, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute -left-16 bottom-16 w-32 h-32 rounded-full bg-purple-100/40 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -10, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />
    </section>
  );
};
