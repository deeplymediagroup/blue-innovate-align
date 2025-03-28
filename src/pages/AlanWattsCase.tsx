
import React from "react";
import { Layout } from "@/components/Layout";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AlanWattsCase: React.FC = () => {
  const results = [
    { metric: "$9,873.68", label: "Monthly Revenue" },
    { metric: "25,000+", label: "Videos Claimed" },
    { metric: "660%", label: "Revenue Growth" },
  ];

  const testimonials = [
    {
      quote: "Mindset Media has been instrumental in helping us protect Alan's legacy in the digital age.",
      author: "Mark Watts",
      role: "Director, Alan Watts Organization",
      image: "https://images.squarespace-cdn.com/content/v1/548b74c8e4b0d3ebe88e525d/a25f04e5-6440-4fd1-9d76-7e1a49b2690f/Screen+Shot+2022-03-21+at+4.17.56+PM.png",
    }
  ];

  return (
    <Layout>
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 via-white to-blue-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <Link to="/case-studies" className="inline-flex items-center text-blue-600 mb-6 hover:underline">
                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Case Studies
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Alan Watts Organization Case Study</h1>
              
              <p className="text-xl mb-6 text-foreground/70">
                How we helped the Alan Watts Organization recover lost revenue and protect their content across YouTube
              </p>
              
              <div className="flex flex-wrap gap-8 mb-8">
                {results.map((result, i) => (
                  <div key={i} className="bg-white shadow-md rounded-lg p-6">
                    <p className="text-3xl font-bold text-blue-600">{result.metric}</p>
                    <p className="text-sm text-foreground/60">{result.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/a9921c76-fa95-4d2c-97a8-ce84b849dd16.png" 
                  alt="Alan Watts" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
            
            <p className="text-lg mb-6">
              The Alan Watts Organization faced significant challenges with unauthorized use of their content across YouTube. 
              As custodians of Alan Watts' intellectual property, they needed a solution to:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>Identify and monitor thousands of unauthorized uploads</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>Recover lost revenue from content being monetized by others</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>Protect the integrity and quality of Alan Watts' lectures</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>Create a sustainable model for maintaining their digital presence</span>
              </li>
            </ul>
            
            <h2 className="text-3xl font-bold mb-8 mt-12">Our Solution</h2>
            
            <p className="text-lg mb-6">
              We implemented a comprehensive content protection strategy that included:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-700">Content Identification</h3>
                <p>We scanned YouTube to identify all instances of Alan Watts content, creating a complete catalog of usage.</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-700">Rights Management</h3>
                <p>We established Content ID claims on over 25,000 videos, ensuring proper attribution and monetization.</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-700">Revenue Recovery</h3>
                <p>We implemented a fair monetization strategy that recovered significant monthly revenue.</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-700">Ongoing Monitoring</h3>
                <p>We continue to monitor for new uploads and changes, ensuring continuous protection.</p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-8 mt-12">The Results</h2>
            
            <p className="text-lg mb-6">
              Our partnership with the Alan Watts Organization has led to remarkable outcomes:
            </p>
            
            <div className="bg-blue-600 text-white p-8 rounded-lg mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <p className="text-5xl font-bold">$9.8K+</p>
                  <p className="mt-2">Monthly Revenue</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold">25K+</p>
                  <p className="mt-2">Videos Claimed</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold">660%</p>
                  <p className="mt-2">Revenue Growth</p>
                </div>
              </div>
            </div>
            
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-blue-50 p-8 rounded-lg mb-8 relative">
                <div className="text-blue-600 text-6xl absolute top-4 left-4 opacity-20">"</div>
                <p className="text-xl italic mb-6 relative z-10">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full mr-4 object-cover" 
                  />
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-foreground/70">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="mt-12 text-center">
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md">
                  Contact Us About Your Content
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AlanWattsCase;
