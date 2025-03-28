
import React, { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { GlassmorphicCard } from "@/components/GlassmorphicCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

// This component ensures the page scrolls to the top when it loads
const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return null;
};

const AlanWattsCase: React.FC = () => {
  // Case study data
  const caseStudy = {
    title: "Alan Watts Organization",
    subtitle: "Transforming Alan Watts' Digital Legacy on YouTube",
    logo: "https://images.squarespace-cdn.com/content/v1/548b74c8e4b0d3ebe88e525d/a25f04e5-6440-4fd1-9d76-7e1a49b2690f/Screen+Shot+2022-03-21+at+4.17.56+PM.png",
    background: "/lovable-uploads/a9921c76-fa95-4d2c-97a8-ce84b849dd16.png",
    description: "The Alan Watts Organization sought our help to protect and monetize unauthorized usage of Alan Watts' content across YouTube.",
    challenge: "With over 25,000 videos containing Alan Watts' content across YouTube, the organization faced significant challenges in tracking usage, ensuring proper attribution, and monetizing this valuable intellectual property.",
    approach: "We implemented a comprehensive content identification and claiming strategy, working closely with the Alan Watts Organization to balance intellectual property protection with audience growth.",
    results: {
      revenue: "$9,873.68 monthly revenue recovered",
      claims: "27,000+ active claims across YouTube",
      growth: "660% increase in monthly revenue",
      accuracy: "99.9% content claiming accuracy"
    },
    quote: {
      text: "MindsetDRM not only safeguarded my father's intellectual property but allowed it to flourish in the digital age. Their understanding of the balance between preservation and innovation has brought my fathers teachings to millions",
      author: "Mark Watts",
      title: "Director, Alan Watts Organization"
    },
    timeline: [
      {
        year: "2020",
        title: "Initial Assessment",
        description: "Conducted a comprehensive audit of Alan Watts content across YouTube"
      },
      {
        year: "2020",
        title: "Strategy Development",
        description: "Created a customized content claiming and revenue recovery plan"
      },
      {
        year: "2021",
        title: "Implementation",
        description: "Deployed our content identification system and began actively claiming content"
      },
      {
        year: "2022",
        title: "Optimization",
        description: "Refined claiming strategies and expanded to additional platforms"
      },
      {
        year: "2023",
        title: "Scaling Results",
        description: "Achieved significant revenue growth and expanded digital footprint"
      }
    ]
  };

  return (
    <Layout>
      <ScrollToTop />
      
      <section className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center mb-6">
              <img 
                src={caseStudy.logo} 
                alt={caseStudy.title}
                className="h-16 w-16 rounded-full mr-4 object-cover"
              />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">{caseStudy.title}</h1>
                <p className="text-xl text-blue-600">{caseStudy.subtitle}</p>
              </div>
            </div>
            
            <div className="aspect-video rounded-xl overflow-hidden mb-12">
              <img 
                src={caseStudy.background}
                alt="Alan Watts case study header"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed">{caseStudy.description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
            <GlassmorphicCard className="p-8">
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-foreground/70">{caseStudy.challenge}</p>
            </GlassmorphicCard>
            
            <GlassmorphicCard className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
              <p className="text-foreground/70">{caseStudy.approach}</p>
            </GlassmorphicCard>
          </div>
          
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.values(caseStudy.results).map((result, idx) => (
                <GlassmorphicCard key={idx} className="p-6 text-center">
                  <p className="text-foreground/70">{result}</p>
                </GlassmorphicCard>
              ))}
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mb-16">
            <GlassmorphicCard variant="highlight" className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <img 
                    src={caseStudy.logo}
                    alt={caseStudy.quote.author}
                    className="h-20 w-20 rounded-full object-cover mx-auto"
                  />
                </div>
                <blockquote className="text-xl md:text-2xl italic mb-6">
                  "{caseStudy.quote.text}"
                </blockquote>
                <cite className="not-italic font-bold">{caseStudy.quote.author}</cite>
                <p className="text-sm text-foreground/60">{caseStudy.quote.title}</p>
              </div>
            </GlassmorphicCard>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Project Timeline</h2>
            <div className="space-y-8">
              {caseStudy.timeline.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="flex items-start">
                    <div className="min-w-24 mr-6">
                      <p className="text-2xl font-bold text-blue-600">{item.year}</p>
                    </div>
                    <GlassmorphicCard className="p-6 flex-grow">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </GlassmorphicCard>
                  </div>
                  {idx < caseStudy.timeline.length - 1 && (
                    <div className="absolute left-3 top-12 bottom-0 w-0.5 bg-blue-200 ml-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AlanWattsCase;
