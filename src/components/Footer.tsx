
import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <a href="/" className="inline-block mb-4">
              <span className="font-display text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                MindsetDRM
              </span>
            </a>
            <p className="text-sm text-foreground/70 mb-4">
              Protecting digital content with intelligent security solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-sm text-foreground/70 hover:text-blue-600 transition-colors"
                >
                  Claiming
                </a>
              </li>
              <li>
                <Link
                  to="/distribution"
                  className="text-sm text-foreground/70 hover:text-blue-600 transition-colors"
                >
                  Distribution
                </Link>
              </li>
              <li>
                <Link
                  to="/licensing"
                  className="text-sm text-foreground/70 hover:text-blue-600 transition-colors"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-foreground/70 hover:text-blue-600 transition-colors"
                >
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
                <Link
                  to="/contact"
                  className="text-sm text-foreground/70 hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-foreground/60">
              &copy; {new Date().getFullYear()} Mindset DRM. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-sm text-foreground/60 hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
