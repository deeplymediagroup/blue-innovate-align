
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const LightHowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const steps = [
    {
      number: "1",
      title: "Connect & Upload",
      description: "You'll be assigned a Partner Manager who will guide you through onboarding and upload your content library into our system. Anywhere your content is being used on YouTube will be identified."
    },
    {
      number: "2",
      title: "Monitor & Understand",
      description: "Knowledge is power and with your personalized dashboard, you will have access to comprehensive information on how your content is being used across YouTube."
    },
    {
      number: "3",
      title: "Strategize & Customize",
      description: "Based on your strategic goals, we will work with you to create a customized digital rights strategy. You can choose your ideal positioning from options including total prevention of content-sharing to strategic creator partnerships."
    },
    {
      number: "4",
      title: "Partner & Guide",
      description: "If your strategy involves creator partnerships, we'll help craft content guidelines and connect you with high-quality creators who will boost content visibility and share revenues with you."
    },
    {
      number: "5",
      title: "Earn & Amplify",
      description: "Your digital rights strategy will be deployed to earn additional revenue for the use of your content across YouTube and amplify your brand's presence."
    },
    {
      number: "6",
      title: "Transparency & Control",
      description: "Throughout the whole process, you will have complete transparency of earnings through your personalized dashboard and will have support to control and optimize your strategy."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
      <motion.div
        style={{ opacity }}
        ref={sectionRef}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">How It Works</h2>
          <p className="text-xl text-gray-600">
            Our proven process to help you protect and monetize your content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.slice(0, 3).map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 flex-grow">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
          {steps.slice(3).map((step, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 flex-grow">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
