import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CreatorCardProps {
  name: string;
  image: string;
  category: string;
}

const CreatorCard: React.FC<CreatorCardProps> = ({ name, image, category }) => {
  return (
    <div className="relative group">
      <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-white/80">{category}</p>
        </div>
      </div>
    </div>
  );
};

export const CreatorShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const creators = [
    {
      name: "Alan Watts",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
      category: "Philosophy"
    },
    {
      name: "Motivational Speakers",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2",
      category: "Personal Development"
    },
    {
      name: "Music Artists",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
      category: "Entertainment"
    },
    {
      name: "Educational Content",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      category: "Education"
    },
    {
      name: "Podcasters",
      image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc",
      category: "Audio"
    },
    {
      name: "Thought Leaders",
      image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4",
      category: "Business"
    },
  ];

  return (
    <section id="creators" className="py-24 bg-gradient-to-b from-blue-50/50 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={sectionRef}
          className="reveal-section max-w-5xl mx-auto"
        >
          <div className="mb-16 text-center">
            <div className="inline-block mb-3">
              <div className="py-1 px-3 bg-blue-100 border border-blue-200 rounded-full">
                <p className="text-xs font-medium text-blue-700">
                  Who We Work With
                </p>
              </div>
            </div>
            <h2 className="font-display font-bold">
              Content We Amplify
            </h2>
            <p className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto">
              We work with a diverse range of creators and brands to protect and monetize their content
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {creators.map((creator, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <CreatorCard 
                    name={creator.name}
                    image={creator.image}
                    category={creator.category}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static transform-none mr-2" />
              <CarouselNext className="relative static transform-none" />
            </div>
          </Carousel>

          <div className="mt-16 relative">
            <GlassmorphicCard variant="highlight" className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    Largest Motivational Media Network on YouTube
                  </h3>
                  <p className="text-foreground/70 mb-6">
                    Our network manages rights for leading motivational content creators, helping them protect their intellectual property and grow their revenue.
                  </p>
                  <div className="flex space-x-8">
                    <div>
                      <p className="text-3xl font-bold text-blue-600">75M+</p>
                      <p className="text-sm text-foreground/60">Monthly Views</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">30M+</p>
                      <p className="text-sm text-foreground/60">Subscribers</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <motion.div
                    className="absolute w-full h-full rounded-lg overflow-hidden"
                    animate={{
                      opacity: [0.4, 0.6, 0.4],
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "mirror",
                    }}
                    style={{ zIndex: 1 }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 backdrop-blur-sm rounded-lg"></div>
                  </motion.div>
                  <img
                    src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d"
                    alt="Motivational content"
                    className="rounded-lg w-full relative z-0"
                  />
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </section>
  );
};
