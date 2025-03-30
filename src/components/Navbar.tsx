
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleRequestInvite = () => {
    window.location.href = "https://gtmunbound.com/";
  };

  return (
    <header className={`sticky top-0 z-50 bg-white backdrop-blur-md transition-all duration-300 ${
      scrolled ? 'shadow-md bg-white/90' : 'shadow-sm'
    }`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Logo className="hover:scale-105 transition-transform duration-300" />
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {['Experts', 'Events', 'Resources', 'Community', 'About'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link to={`/${item.toLowerCase()}`} className="text-gtm-deep-blue hover:text-gtm-light-blue transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gtm-orange group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button 
              onClick={handleRequestInvite}
              className="bg-gtm-orange hover:bg-opacity-90 text-white font-medium rounded-md shadow-lg hover:shadow-gtm-orange/20 transition-all"
            >
              Request Invite
            </Button>
          </motion.div>
        </nav>
        
        {/* Mobile menu button */}
        <motion.button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden py-4 px-4 bg-white shadow-inner"
        >
          <nav className="flex flex-col space-y-4">
            {['Experts', 'Events', 'Resources', 'Community', 'About'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link 
                  to={`/${item.toLowerCase()}`} 
                  className="text-gtm-deep-blue hover:text-gtm-light-blue transition-colors p-2 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Button 
                onClick={handleRequestInvite}
                className="bg-gtm-orange hover:bg-opacity-90 text-white font-medium w-full shadow-md"
              >
                Request Invite
              </Button>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
