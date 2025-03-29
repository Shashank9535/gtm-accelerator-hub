
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gtm-deep-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Logo variant="white" />
            <p className="mt-4 text-sm">
              We are on a mission to simplify Go-To-Market for Global Technology Companies.
            </p>
            <div className="flex mt-4 space-x-3">
              <a
                href="https://www.linkedin.com/company/gtm-unbound"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gtm-orange transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:aditi@gtmunbound.com"
                className="text-white hover:text-gtm-orange transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gtm-orange transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/experts" className="hover:text-gtm-orange transition-colors">Experts</Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-gtm-orange transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-gtm-orange transition-colors">Resources</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/community" className="hover:text-gtm-orange transition-colors">Join Us</Link>
              </li>
              <li>
                <a 
                  href="https://gtmunbound.com/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gtm-orange transition-colors"
                >
                  Request Invite
                </a>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-gtm-orange transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/membership" className="hover:text-gtm-orange transition-colors">Membership</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">
              <a href="mailto:aditi@gtmunbound.com" className="hover:text-gtm-orange transition-colors">
                aditi@gtmunbound.com
              </a>
            </p>
            <p className="text-sm mt-2">
              <a 
                href="https://www.linkedin.com/company/gtm-unbound" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gtm-orange transition-colors"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gtm-light-blue mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} GTM Unbound. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
