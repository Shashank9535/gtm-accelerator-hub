
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { X, Menu } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  isHash?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '#what-is-gtm', isHash: true },
  { label: 'Events', href: '#events', isHash: true },
  { label: 'Experts', href: '#experts', isHash: true },
  { label: 'About', href: '/about' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleNavItemClick = (item: NavItem) => {
    if (item.isHash) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/10 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Logo variant={isScrolled ? "default" : "white"} className="h-8 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.isHash ? "#" : item.href}
                onClick={() => item.isHash && handleNavItemClick(item)}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-gtm-orange'
                    : isScrolled ? 'text-gtm-deep-blue hover:text-gtm-orange' : 'text-white hover:text-gtm-orange'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => window.location.href = "https://gtmunbound.com/"}
                className={`${isScrolled 
                  ? 'bg-gtm-deep-blue hover:bg-gtm-light-blue text-white' 
                  : 'bg-gtm-orange hover:bg-opacity-90 text-white'} 
                  border-none shadow-lg`}
              >
                Request an Invite
              </Button>
            </motion.div>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-gtm-deep-blue" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-gtm-deep-blue" : "text-white"} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.isHash ? "#" : item.href}
                    onClick={() => item.isHash && handleNavItemClick(item)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'bg-white/10 text-gtm-orange'
                        : isScrolled ? 'text-gtm-deep-blue hover:bg-white/5 hover:text-gtm-orange' : 'text-white hover:bg-white/5 hover:text-gtm-orange'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-2">
                  <Button 
                    onClick={() => window.location.href = "https://gtmunbound.com/"}
                    className="w-full bg-gtm-orange hover:bg-opacity-90 text-white border-none shadow-lg"
                  >
                    Request an Invite
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
