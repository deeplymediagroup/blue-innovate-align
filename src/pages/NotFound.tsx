
import React from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { useLocation } from "react-router-dom";

const NotFound: React.FC = () => {
  const location = useLocation();

  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center max-w-lg">
          <p className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">
            404 Error
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Page not found</h1>
          <p className="text-lg text-foreground/70 mb-8">
            Sorry, we couldn't find the page you're looking for. The URL{" "}
            <span className="font-medium">{location.pathname}</span> doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <a href="/">Return to homepage</a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
