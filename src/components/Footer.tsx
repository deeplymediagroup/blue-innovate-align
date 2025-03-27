
import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="/" className="flex items-center">
              <span className="font-display text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                MindsetDRM
              </span>
            </a>
            <p className="mt-4 text-sm text-foreground/70">
              Helping creators and brands recover and monetize unauthorized usage of their content across YouTube.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-foreground/70 hover:text-blue-600 transition-colors">
                  Claiming
                </a>
              </li>
              <li>
                <a href="#distribution" className="text-sm text-foreground/70 hover:text-blue-600 transition-colors">
                  Distribution
                </a>
              </li>
              <li>
                <a href="#licensing" className="text-sm text-foreground/70 hover:text-blue-600 transition-colors">
                  Licensing
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#pricing" className="text-sm text-foreground/70 hover:text-blue-600 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="https://studio.mindsetdrm.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-blue-600 transition-colors"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-foreground/70 hover:text-blue-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-foreground/70 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-sm text-foreground/60 text-center">
            © {new Date().getFullYear()} MindsetDRM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
