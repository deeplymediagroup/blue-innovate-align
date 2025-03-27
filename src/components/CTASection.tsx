
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-90"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to take control of your content?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
            Join thousands of content creators and rights holders who trust us to protect and monetize their content on YouTube
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg rounded-lg hover:shadow-lg">
                Get Started <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
