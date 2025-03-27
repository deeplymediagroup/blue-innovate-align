
import React from "react";
import { Layout } from "@/components/Layout";
import { GlassmorphicCard } from "@/components/GlassmorphicCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, CheckCircle2, PlayCircle } from "lucide-react";

const CaseStudies: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Case Study</h1>
            <p className="text-xl text-foreground/70">
              Transforming Alan Watts' Digital Legacy on YouTube: A Partnership with YouTube and MindsetDRM
            </p>
          </div>
          
          <GlassmorphicCard className="p-8 md:p-12 max-w-5xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  The Alan Watts Organization
                </h3>
                <p className="text-foreground/70 mb-6">
                  When Mark Watts, along with the Alan Watts Organization (AWEU), sought to protect and properly monetize the vast collection of Alan Watts' teachings across YouTube, the digital landscape posed significant challenges.
                </p>
                <div className="flex space-x-8 mb-8">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">99.7%</p>
                    <p className="text-sm text-foreground/60">Content Claimed</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">11K+</p>
                    <p className="text-sm text-foreground/60">Claims Processed</p>
                  </div>
                </div>
                <Button className="bg-blue-600 text-white hover:bg-blue-700 group flex items-center">
                  View Full Documentation <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
              <div className="relative">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
                    alt="Alan Watts"
                    className="rounded-lg w-full relative z-0 shadow-lg aspect-[4/3] object-cover"
                  />
                </motion.div>
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm py-2 px-3 rounded shadow-md flex items-center">
                  <PlayCircle className="h-6 w-6 text-blue-600 mr-2" />
                  <div>
                    <p className="text-xs font-medium">Alan Watts</p>
                    <p className="text-xs text-gray-600">Transforming Digital Legacy</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassmorphicCard>
        </div>
      </div>
      
      <section className="py-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The Challenge</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Widespread Misuse</h3>
                <p className="text-foreground/70">
                  Alan Watts' speeches and lectures were being re-uploaded without permission or manipulated into formats that misrepresented his work.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Content Detection</h3>
                <p className="text-foreground/70">
                  YouTube's Content ID system was unable to effectively track audio-only content like Alan Watts' lectures.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Posthumous Management</h3>
                <p className="text-foreground/70">
                  Managing the rights to someone's content after their death is inherently complex, especially with a large library spread across numerous channels.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-100 mb-12">
              <h3 className="text-2xl font-bold mb-4 text-center">Our Solutions</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start mb-4">
                    <CheckCircle2 className="text-blue-600 h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold mb-2">Audio-Only Content ID Tool</h4>
                      <p className="text-foreground/70">
                        MindsetDRM worked directly with YouTube to gain exclusive access and improve a new audio-only Content ID tool, enabling us to accurately track and claim Alan Watts' lectures across the platform.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-start mb-4">
                    <CheckCircle2 className="text-blue-600 h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold mb-2">Custom Dashboard</h4>
                      <p className="text-foreground/70">
                        We built a proprietary dashboard specifically designed for rights holders of Alan Watts' content, allowing them to track all content, manage claims & takedowns, and view real-time revenue reporting.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-start mb-4">
                    <CheckCircle2 className="text-blue-600 h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold mb-2">Creator Ecosystem</h4>
                      <p className="text-foreground/70">
                        MindsetDRM built an ecosystem where creators could engage with Alan Watts' teachings in a legitimate and profitable way through a licensing program.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-start mb-4">
                    <CheckCircle2 className="text-blue-600 h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold mb-2">Content Guidelines</h4>
                      <p className="text-foreground/70">
                        We ensured that creators understood the rules for using Alan Watts' teachings, maintaining high quality content that accurately represented his philosophy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Results</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-12">
              Our ecosystem approach helped expand audience reach while building sustainable partnerships
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-2">99.7%</div>
                <p>Content Claimed</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-2">11K+</div>
                <p>Claims Processed</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-2">↑230%</div>
                <p>Revenue Growth</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                <p>Licensed Creators</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Looking Forward</h3>
                <p className="mb-6">
                  As the licensing program grows, we are working to include more creators and allow greater use of Alan Watts' teachings while maintaining high standards for quality. The more we expand, the more revenue is funneled back to Alan Watts' estate.
                </p>
                
                <h4 className="text-xl font-bold mb-3">Continued Technological Innovation</h4>
                <p className="mb-6">
                  MindsetDRM remains at the forefront of innovation, exploring AI tools and advanced content protection technologies to further secure Alan Watts' intellectual property. We are actively collaborating with YouTube and other platforms to improve content identification and tackle emerging threats like AI-generated content.
                </p>
                
                <h4 className="text-xl font-bold mb-3">Building Long-Term Partnerships</h4>
                <p>
                  We continue to nurture long-term partnerships with creators, licensors, and platforms, ensuring that Alan Watts' voice is heard in new and exciting ways, while respecting his philosophy and teachings. The creator ecosystem will continue to thrive, fostering creativity while maintaining the authenticity of Alan Watts' work.
                </p>
              </div>
              
              <div className="bg-blue-50 p-8 border-t border-blue-100">
                <h3 className="text-2xl font-bold mb-6 text-center">Testimonial</h3>
                <blockquote className="text-lg italic mb-4">
                  "Working with MindsetDRM has transformed how we manage my father's digital legacy. Their innovative approach to content protection and monetization has not only increased our revenue but ensured that Alan's teachings are shared authentically with the world."
                </blockquote>
                <div className="flex items-center justify-end">
                  <div className="mr-4">
                    <p className="font-bold">Mark Watts</p>
                    <p className="text-sm text-gray-600">Alan Watts Organization</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to protect and monetize your content?</h2>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg">
            Get Started Today
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
