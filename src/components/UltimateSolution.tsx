
import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Users } from "lucide-react";

export const UltimateSolution: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display font-bold text-4xl md:text-5xl mb-4"
          >
            Our Comprehensive Approach
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            We combine cutting-edge technology with YouTube's ecosystem to deliver superior results
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Our Technology */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-blue-700">Our Technology</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start text-left">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Advanced content identification systems</span>
              </div>
              <div className="flex items-start text-left">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Automated rights management platform</span>
              </div>
              <div className="flex items-start text-left">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Smart licensing automation tools</span>
              </div>
            </div>
          </motion.div>
          
          {/* YouTube Partnership */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg">
              <Zap className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-blue-700">YouTube Partnership</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start text-left">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Direct Content ID system access</span>
              </div>
              <div className="flex items-start text-left">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Deep platform integration capabilities</span>
              </div>
              <div className="flex items-start text-left">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Real-time policy enforcement</span>
              </div>
            </div>
          </motion.div>
          
          {/* YouTube Experience */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
              <Users className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-blue-700">YouTube Experience</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start text-left">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Strong creator community relationships</span>
              </div>
              <div className="flex items-start text-left">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Deep platform expertise & insights</span>
              </div>
              <div className="flex items-start text-left">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Complete ecosystem knowledge</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
