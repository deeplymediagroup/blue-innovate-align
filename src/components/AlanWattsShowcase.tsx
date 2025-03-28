
import React from "react";
import { GlassmorphicCard } from "./GlassmorphicCard";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const AlanWattsShowcase: React.FC = () => {
  return (
    <section id="featured-client" className="py-16 bg-gradient-to-b from-blue-50/30 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
              Featured Client
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              How we're helping to protect and monetize Alan Watts' digital legacy
            </p>
          </div>

          <GlassmorphicCard variant="highlight" className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3 order-2 lg:order-1 px-6 py-8 md:p-10">
                <div className="mb-6 text-center lg:text-left">
                  <Link to="/case-studies/alan-watts">
                    <Button className="w-auto mb-6">
                      View Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-100 mr-3">
                      <img
                        src="https://images.squarespace-cdn.com/content/v1/548b74c8e4b0d3ebe88e525d/a25f04e5-6440-4fd1-9d76-7e1a49b2690f/Screen+Shot+2022-03-21+at+4.17.56+PM.png"
                        alt="Alan Watts Organization"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Mark Watts</h3>
                      <p className="text-sm text-blue-600">Alan Watts Organization</p>
                    </div>
                  </div>
                </div>

                <blockquote className="relative mb-6">
                  <div className="text-lg italic text-foreground/80 mb-4">
                    "MindsetDRM not only safeguarded my father's intellectual property but allowed it to flourish in the digital age. Their understanding of the balance between preservation and innovation has brought my fathers teachings to millions"
                  </div>
                </blockquote>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-blue-600">99.9%</p>
                    <p className="text-xs text-foreground/60">Content Claimed</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-blue-600">660%</p>
                    <p className="text-xs text-foreground/60">Revenue Growth</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-blue-600">27k+</p>
                    <p className="text-xs text-foreground/60">Active Claims</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 order-1 lg:order-2 relative overflow-hidden">
                <img
                  src="/lovable-uploads/a9921c76-fa95-4d2c-97a8-ce84b849dd16.png"
                  alt="Alan Watts speaking"
                  className="w-full h-full object-cover"
                  style={{ maxHeight: "100%", minHeight: "300px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-end p-8">
                  <div className="text-white max-w-xs">
                    <h3 className="text-2xl font-bold mb-2">Alan Watts</h3>
                    <p className="text-sm text-white/80">
                      British philosopher known for interpreting Eastern philosophy for Western audiences
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </GlassmorphicCard>
        </div>
      </div>
    </section>
  );
};
