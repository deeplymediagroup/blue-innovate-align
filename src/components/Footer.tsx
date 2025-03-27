
import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Footer: React.FC = () => {
  const location = useLocation();
  
  // Helper function to scroll to a section if on homepage, or navigate if not
  const scrollToSectionOrNavigate = (sectionId: string, path: string) => {
    if (location.pathname === "/") {
      // If on homepage, scroll to the section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      return `/#${sectionId}`;
    } else {
      // If not on homepage, prepare to navigate to homepage + section
      return `/${path}`;
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">MindsetDRM</h3>
            <p className="mb-4 text-gray-400">
              Helping rights holders protect, monetize, and grow their content on YouTube
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to={scrollToSectionOrNavigate("services", "")} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Claiming
                </Link>
              </li>
              <li>
                <Link 
                  to={scrollToSectionOrNavigate("distribution", "")} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Distribution
                </Link>
              </li>
              <li>
                <Link 
                  to={scrollToSectionOrNavigate("licensing", "")} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} MindsetDRM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
