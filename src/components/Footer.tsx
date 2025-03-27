
import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-50 pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">MindsetDRM</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Helping creators protect and monetize their content on YouTube
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-blue-600 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="text-foreground/60 hover:text-blue-600 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a href="#" className="text-foreground/60 hover:text-blue-600 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-foreground/70 hover:text-blue-600 transition-colors">YouTube Content ID</Link></li>
              <li><Link to="/" className="text-foreground/70 hover:text-blue-600 transition-colors">Content Claims</Link></li>
              <li><Link to="/" className="text-foreground/70 hover:text-blue-600 transition-colors">Licensing</Link></li>
              <li><Link to="/" className="text-foreground/70 hover:text-blue-600 transition-colors">Content Strategy</Link></li>
              <li><Link to="/" className="text-foreground/70 hover:text-blue-600 transition-colors">Analytics</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/case-studies" className="text-foreground/70 hover:text-blue-600 transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="text-foreground/70 hover:text-blue-600 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-foreground/70 hover:text-blue-600 transition-colors">Dashboard</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-blue-600 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-blue-600 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-foreground/70 hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link to="/privacy" className="text-foreground/70 hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><a href="#" className="text-foreground/70 hover:text-blue-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-blue-600 transition-colors">Login</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mt-8">
          <p className="text-sm text-center text-foreground/60">
            © {new Date().getFullYear()} MindsetDRM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
