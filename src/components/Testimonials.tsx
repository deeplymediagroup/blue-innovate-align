
import React, { useEffect, useRef } from "react";
import { GlassmorphicCard } from "./GlassmorphicCard";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, company, rating }) => {
  return (
    <GlassmorphicCard 
      variant="bordered" 
      className="h-full"
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < rating ? "text-blue-500 fill-blue-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="italic text-foreground/80 mb-6">{quote}</p>
        </div>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-foreground/60">{role}, {company}</p>
        </div>
      </div>
    </GlassmorphicCard>
  );
};

export const Testimonials: React.FC = () => {
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

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={sectionRef}
          className="reveal-section max-w-5xl mx-auto"
        >
          <div className="mb-16 text-center">
            <div className="inline-block mb-3">
              <div className="py-1 px-3 bg-blue-100 border border-blue-200 rounded-full">
                <p className="text-xs font-medium text-blue-700">
                  Customer Stories
                </p>
              </div>
            </div>
            <h2 className="font-display font-bold">Trusted by Content Creators Worldwide</h2>
            <p className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto">
              See what our clients say about Mindset DRM's powerful protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              quote="Mindset DRM gave us complete control over our training materials. It's been instrumental in protecting our proprietary content while providing a seamless experience for our customers."
              author="Sarah Johnson"
              role="Director of Digital Learning"
              company="EduTech Solutions"
              rating={5}
            />
            <Testimonial
              quote="The analytics feature is a game-changer. We can now see exactly how our content is being consumed, which has helped us optimize our digital strategy."
              author="Michael Chang"
              role="CMO"
              company="Visual Media Group"
              rating={5}
            />
            <Testimonial
              quote="Implementation was surprisingly simple. Their support team was responsive and helped us integrate the system with our existing platform in just days."
              author="Alexandra Rivera"
              role="CTO"
              company="CreativeStream"
              rating={4}
            />
            <Testimonial
              quote="Our subscription retention improved by 23% after implementing Mindset DRM. The watermarking feature has virtually eliminated unauthorized sharing."
              author="David Okafor"
              role="Product Manager"
              company="Contentify"
              rating={5}
            />
            <Testimonial
              quote="As a small publisher, we needed affordable protection without complexity. Mindset DRM delivers enterprise security at a price point that works for us."
              author="Emma Thompson"
              role="Founder"
              company="Thompson Publishing"
              rating={5}
            />
            <Testimonial
              quote="The expiring access feature has been perfect for our time-limited course offerings. Students get access when they need it, and we maintain control of our IP."
              author="James Wilson"
              role="VP of Operations"
              company="SkillMasters Academy"
              rating={4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
