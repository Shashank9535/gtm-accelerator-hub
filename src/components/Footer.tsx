
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { Linkedin, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gtm-deep-blue text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          <div className="col-span-1 md:col-span-1">
            <Logo variant="white" />
            <p className="mt-4 text-sm text-gray-300">
              We are on a mission to simplify Go-To-Market for Global Technology Companies.
            </p>
            <div className="flex mt-6 space-x-4">
              <a
                href="https://www.linkedin.com/company/gtm-unbound"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gtm-orange transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gtm-orange transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gtm-orange transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gtm-orange transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gtm-orange transition-colors story-link">Home</Link>
              </li>
              <li>
                <Link to="/mentors" className="text-gray-300 hover:text-gtm-orange transition-colors story-link">Experts</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-gtm-orange transition-colors story-link">Events</Link>
              </li>
              <li>
                <Link to="/advisors" className="text-gray-300 hover:text-gtm-orange transition-colors story-link">Resources</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/mentors" className="text-gray-300 hover:text-gtm-orange transition-colors story-link">Join Us</Link>
              </li>
              <li>
                <a 
                  href="https://gtmunbound.com/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gtm-orange transition-colors story-link"
                >
                  Request Invite
                </a>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gtm-orange transition-colors story-link">Testimonials</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gtm-orange transition-colors story-link">Membership</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex items-start space-x-3 mb-4">
              <Mail className="h-5 w-5 mt-1 text-gray-300" />
              <a href="mailto:aditi@gtmunbound.com" className="text-gray-300 hover:text-gtm-orange transition-colors">
                aditi@gtmunbound.com
              </a>
            </div>
            <div className="flex items-start space-x-3">
              <Linkedin className="h-5 w-5 mt-1 text-gray-300" />
              <a 
                href="https://www.linkedin.com/company/gtm-unbound" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gtm-orange transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} GTM Unbound. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-gtm-orange transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gtm-orange transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-gtm-orange transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
