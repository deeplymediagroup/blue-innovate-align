
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DollarSign } from "lucide-react";
import { GlassmorphicCard } from "./GlassmorphicCard";

interface Stat {
  name: string;
  value: string;
  period: string;
}

export const ScrollingStats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const stats: Stat[] = [
    {
      name: "Alan Watts",
      value: "$9,873.12",
      period: "per month"
    },
    // Placeholder stats for demonstration - these would be replaced with real client data
    {
      name: "Client 2",
      value: "$5,432.67",
      period: "per month"
    },
    {
      name: "Client 3",
      value: "$7,891.45",
      period: "per month"
    },
    {
      name: "Client 4",
      value: "$12,345.89",
      period: "per month"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-blue-50/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            Revenue Recovery Results
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            See how our clients are monetizing their content across YouTube
          </p>
        </div>

        <motion.div
          ref={containerRef}
          style={{ opacity }}
          className="relative h-80 overflow-hidden"
        >
          <motion.div 
            style={{ y }}
            className="space-y-4"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex justify-center"
              >
                <GlassmorphicCard 
                  className="p-6 w-full max-w-xl flex items-center justify-between"
                  variant="highlight"
                >
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <DollarSign className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium text-lg">{stat.name}</h3>
                      <p className="text-sm text-foreground/70">Revenue Recovery</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                    <p className="text-sm text-foreground/70">{stat.period}</p>
                  </div>
                </GlassmorphicCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
