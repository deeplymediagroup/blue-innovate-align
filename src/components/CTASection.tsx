
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-600 rounded-xl p-8 md:p-12 text-white text-center shadow-lg">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Let's talk about your content.
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Join top creators and brands who trust us to protect and monetize
              their digital assets.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button 
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
