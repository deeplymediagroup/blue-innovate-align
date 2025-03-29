
import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-gray-900">MindsetDRM</h3>
            <p className="mb-4 text-gray-600">
              Helping rights holders protect, monetize, and grow their content on YouTube
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#services" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Claiming
                </a>
              </li>
              <li>
                <a href="/#distribution" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Distribution
                </a>
              </li>
              <li>
                <a href="/#licensing" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Licensing
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="https://studio.mindsetdrm.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-8 pt-8 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} MindsetDRM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
