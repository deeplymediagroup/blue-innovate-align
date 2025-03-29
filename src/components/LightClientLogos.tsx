
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export const LightClientLogos: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const clientLogos = [
    { 
      name: "TEDx", 
      logo: "/lovable-uploads/52177375-4183-4a15-b829-d9af2a03b1ef.png" 
    },
    { 
      name: "The Peaceful Warrior", 
      logo: "/lovable-uploads/21958e1b-ef4c-491e-937f-abf4074e3bbf.png" 
    },
    { 
      name: "Entrepreneur", 
      logo: "/lovable-uploads/bc4f51e9-4d69-4861-952c-094cb60fbf09.png" 
    },
    { 
      name: "Alan Watts Organization", 
      logo: "/lovable-uploads/cc93ab06-52d9-4bc6-982c-e27b607f63cf.png" 
    },
    { 
      name: "Dr. Wayne Dyer", 
      logo: "/lovable-uploads/ef8d07d9-25b6-4921-85c1-b7d8e7ca3be6.png" 
    },
  ];

  return (
    <section id="clients" className="py-12 border-t border-b border-gray-100 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={sectionRef}
          className="reveal-section max-w-6xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-xl font-medium text-gray-500">
              Trusted by top creators & rights holders
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
