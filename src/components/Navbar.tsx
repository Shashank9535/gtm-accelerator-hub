
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleRequestInvite = () => {
    window.location.href = "https://gtmunbound.com/";
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/experts" className="text-gtm-deep-blue hover:text-gtm-light-blue transition-colors">
            Experts
          </Link>
          <Link to="/events" className="text-gtm-deep-blue hover:text-gtm-light-blue transition-colors">
            Events
          </Link>
          <Link to="/resources" className="text-gtm-deep-blue hover:text-gtm-light-blue transition-colors">
            Resources
          </Link>
          <Link to="/community" className="text-gtm-deep-blue hover:text-gtm-light-blue transition-colors">
            Community
          </Link>
          <Link to="/about" className="text-gtm-deep-blue hover:text-gtm-light-blue transition-colors">
            About
          </Link>
          <Button 
            onClick={handleRequestInvite}
            className="bg-gtm-orange hover:bg-opacity-90 text-white font-medium rounded-md"
          >
            Request Invite
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white shadow-inner animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/experts" 
              className="text-gtm-deep-blue hover:text-gtm-light-blue transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Experts
            </Link>
            <Link 
              to="/events" 
              className="text-gtm-deep-blue hover:text-gtm-light-blue transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              to="/resources" 
              className="text-gtm-deep-blue hover:text-gtm-light-blue transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              to="/community" 
              className="text-gtm-deep-blue hover:text-gtm-light-blue transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
            <Link 
              to="/about" 
              className="text-gtm-deep-blue hover:text-gtm-light-blue transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Button 
              onClick={handleRequestInvite}
              className="bg-gtm-orange hover:bg-opacity-90 text-white font-medium w-full"
            >
              Request Invite
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
