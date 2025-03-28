
import React, { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { GlassmorphicCard } from "@/components/GlassmorphicCard";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AlanWattsCase: React.FC = () => {
  const keyMetrics = [
    { label: "Content Claimed", value: "99.9%" },
    { label: "Claims Processed", value: "27K+" },
    { label: "Revenue Growth", value: "660%" },
  ];

  const steps = [
    {
      title: "Content Audit",
      description: "We began by conducting a comprehensive audit of Alan Watts' existing content on YouTube, identifying unauthorized uploads and potential revenue opportunities.",
      icon: "/icons/lightbulb.svg"
    },
    {
      title: "Rights Management",
      description: "We implemented a robust rights management strategy, claiming unauthorized content and ensuring that all revenue generated from the use of Alan Watts' material was properly attributed.",
      icon: "/icons/shield-check.svg"
    },
    {
      title: "Channel Optimization",
      description: "We worked closely with the Alan Watts Organization to optimize their YouTube channel, improving content discoverability and audience engagement.",
      icon: "/icons/trending-up.svg"
    },
    {
      title: "Monetization Strategy",
      description: "We developed a tailored monetization strategy, leveraging YouTube's advertising and licensing options to maximize revenue generation for the Alan Watts Organization.",
      icon: "/icons/dollar-sign.svg"
    },
  ];

  const testimonials = [
    {
      name: "Mark Watts",
      title: "CEO, Alan Watts Organization",
      testimonial: "Mindset has been an invaluable partner in protecting and monetizing our father's work. Their expertise and dedication have allowed us to focus on preserving Alan Watts' legacy while generating significant revenue.",
      image: "https://images.squarespace-cdn.com/content/v1/548b74c8e4b0d3ebe88e525d/a25f04e5-6440-4fd1-9d76-7e1a49b2690f/Screen+Shot+2022-03-21+at+4.17.56+PM.png"
    },
  ];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/case-studies" className="inline-flex items-center mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming Alan Watts' Digital Legacy on YouTube
              </h1>
              <p className="text-xl text-foreground/70 mb-8">
                Learn how we helped the Alan Watts Organization recover and monetize unauthorized usage of their content across YouTube.
              </p>
              <div className="flex flex-wrap gap-6 mb-6">
                {keyMetrics.map((metric, index) => (
                  <div key={index}>
                    <p className="text-3xl font-bold text-blue-600">{metric.value}</p>
                    <p className="text-sm text-foreground/60">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/lovable-uploads/a9921c76-fa95-4d2c-97a8-ce84b849dd16.png"
                alt="Alan Watts"
                className="rounded-lg shadow-lg w-full aspect-[4/3] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h2>
            <p className="text-xl text-foreground/70">
              We implemented a comprehensive strategy to protect and monetize Alan Watts' content on YouTube.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <GlassmorphicCard key={index} className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                      <img src={step.icon} alt={step.title} className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl">{step.title}</h3>
                  </div>
                  <p className="text-foreground/70 flex-grow">{step.description}</p>
                </div>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Testimonials</h2>
            <p className="text-xl text-foreground/70">
              What the Alan Watts Organization is saying about our work.
            </p>
          </div>

          {testimonials.map((testimonial, index) => (
            <GlassmorphicCard key={index} className="p-8 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-24 h-24 mx-auto md:mx-0"
                  />
                  <div className="text-center md:text-left mt-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">{testimonial.title}</p>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <blockquote className="text-lg italic text-foreground/80">
                    "{testimonial.testimonial}"
                  </blockquote>
                </div>
              </div>
            </GlassmorphicCard>
          ))}
        </div>
      </section>

      <section className="py-24 bg-blue-50/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-foreground/70 mb-12">
            Contact us today to learn how we can help you protect and monetize your content.
          </p>
          <Button size="lg">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default AlanWattsCase;
