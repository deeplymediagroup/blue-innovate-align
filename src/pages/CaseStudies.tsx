
import React from "react";
import { Layout } from "@/components/Layout";
import { GlassmorphicCard } from "@/components/GlassmorphicCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: "alan-watts",
      title: "Alan Watts Organization",
      subtitle: "Transforming Alan Watts' Digital Legacy on YouTube",
      logo: "https://images.squarespace-cdn.com/content/v1/548b74c8e4b0d3ebe88e525d/a25f04e5-6440-4fd1-9d76-7e1a49b2690f/Screen+Shot+2022-03-21+at+4.17.56+PM.png",
      background: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
      metrics: [
        { value: "99.7%", label: "Content Claimed" },
        { value: "11K+", label: "Claims Processed" },
        { value: "230%", label: "Revenue Growth" }
      ],
      description: "Learn how we helped the Alan Watts Organization recover and monetize unauthorized usage of their content across YouTube."
    }
  ];

  return (
    <Layout>
      <section className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-foreground/70">
              Discover how we've helped creators and brands protect and monetize their content
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-10 max-w-5xl mx-auto">
            {caseStudies.map((study) => (
              <Link to={`/case-studies/${study.id}`} key={study.id}>
                <GlassmorphicCard className="p-8 transition-all duration-300 hover:shadow-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{study.title}</h3>
                      <p className="text-lg font-medium text-blue-600 mb-4">{study.subtitle}</p>
                      <p className="text-foreground/70 mb-6">{study.description}</p>
                      
                      <div className="flex flex-wrap gap-6 mb-6">
                        {study.metrics.map((metric, idx) => (
                          <div key={idx}>
                            <p className="text-2xl font-bold text-blue-600">{metric.value}</p>
                            <p className="text-sm text-foreground/60">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                      
                      <Button className="group flex items-center">
                        View Case Study <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </div>
                    
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <img
                        src={study.background}
                        alt={study.title}
                        className="rounded-lg w-full aspect-[4/3] object-cover shadow-lg"
                      />
                      <div className="absolute top-4 right-4 h-16 w-16 rounded-full bg-white p-1 shadow-md">
                        <img 
                          src={study.logo} 
                          alt={`${study.title} logo`}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>
                </GlassmorphicCard>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
