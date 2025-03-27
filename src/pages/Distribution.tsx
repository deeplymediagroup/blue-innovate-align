
import React from "react";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { YoutubeContentCard } from "@/components/YoutubeContentCard";

const Distribution: React.FC = () => {
  const contentItems = [
    {
      title: "Alan Watts - Acceptance of Death",
      channel: "Intellectual Wave",
      views: "2.3M views",
      thumbnail: "https://i.ytimg.com/vi/qK1BJkBJdtU/hqdefault.jpg"
    },
    {
      title: "Alan Watts: How To Find Your Purpose In Life",
      channel: "Motivation Ark",
      views: "1.8M views",
      thumbnail: "https://i.ytimg.com/vi/fD4CKNoi6O0/hqdefault.jpg"
    },
    {
      title: "Alan Watts - The Wisdom of Insecurity",
      channel: "PhilosophyNotes",
      views: "875K views",
      thumbnail: "https://i.ytimg.com/vi/dQw5DgBXWKA/hqdefault.jpg"
    },
    {
      title: "The Real You - Alan Watts",
      channel: "Mindset Mentor",
      views: "4.1M views",
      thumbnail: "https://i.ytimg.com/vi/faSVTByG0LQ/hqdefault.jpg"
    },
    {
      title: "Alan Watts - Let Go Of Controlling Everything",
      channel: "Daily Wisdom",
      views: "1.2M views",
      thumbnail: "https://i.ytimg.com/vi/bjNRGpfj8EU/hqdefault.jpg"
    },
    {
      title: "Alan Watts: The Art of Meditation",
      channel: "Spirit Science",
      views: "3.5M views",
      thumbnail: "https://i.ytimg.com/vi/jPpUNAFHgxM/hqdefault.jpg"
    }
  ];

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-blue-50/30 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Content Distribution
            </h1>
            <p className="text-xl text-foreground/70">
              We work with world-class creators to distribute your content
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Content We Amplify</h2>
              <p className="text-lg text-foreground/70 mt-4">
                We partner with top YouTube creators to distribute and monetize your content
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {contentItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <YoutubeContentCard
                    title={item.title}
                    channel={item.channel}
                    views={item.views}
                    thumbnail={item.thumbnail}
                  />
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button className="bg-blue-600 hover:bg-blue-700">
                View More Content
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Largest Motivational Media Network on YouTube</h2>
                <p className="text-foreground/70 mb-6">
                  Our network manages rights for leading motivational content creators, helping them protect their intellectual property and grow their revenue.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-0.5">✓</div>
                    <span>75M+ monthly views</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-0.5">✓</div>
                    <span>30M+ subscribers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-0.5">✓</div>
                    <span>Global audience reach</span>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Learn More
                </Button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d"
                  alt="Content distribution"
                  className="rounded-lg w-full h-auto shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Distribution;
