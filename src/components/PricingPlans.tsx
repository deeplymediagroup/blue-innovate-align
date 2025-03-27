
import React, { useRef } from "react";
import { GlassmorphicCard } from "./GlassmorphicCard";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export const PricingPlans: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  
  const services = [
    { 
      name: "Revenue Generation via Claims & Licensing",
      scale: true,
      enterprise: true
    },
    { 
      name: "Claim, Track, or Block Unauthorized Use of Your Content",
      scale: true,
      enterprise: true
    },
    { 
      name: "Technology-Supported Licensing Process",
      scale: true,
      enterprise: true
    },
    { 
      name: "Access to Personalized Dashboard",
      scale: true,
      enterprise: true
    },
    { 
      name: "Dedicated Partner Manager",
      scale: false,
      enterprise: true
    },
    { 
      name: "Management of Organic Licensing Program",
      scale: false,
      enterprise: true
    },
    { 
      name: "Creation of a Customized Digital Rights Strategy",
      scale: false,
      enterprise: true
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-background to-blue-50/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={sectionRef}
          style={{ opacity, scale }}
          className="max-w-5xl mx-auto"
        >
          <div className="mb-16 text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
              Digital Rights Plans for your Strategic Goals
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Choose the plan that aligns with your content protection needs
            </p>
          </div>

          <GlassmorphicCard className="overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40%]">Services</TableHead>
                    <TableHead className="text-center">Scale Program</TableHead>
                    <TableHead className="text-center">Enterprise Program</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {services.map((service, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? "bg-blue-50/30" : ""}>
                      <TableCell className="font-medium">{service.name}</TableCell>
                      <TableCell className="text-center">
                        {service.scale ? (
                          <Check className="h-5 w-5 text-blue-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {service.enterprise ? (
                          <Check className="h-5 w-5 text-blue-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mx-auto" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 p-6">
              <Button variant="outline" className="border-blue-300 text-blue-600">
                Get Scale Program
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Get Enterprise Program
              </Button>
            </div>
          </GlassmorphicCard>
        </motion.div>
      </div>
    </section>
  );
};
