
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface LogoProps {
  variant?: 'default' | 'white';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <motion.div
        whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
        className="relative"
      >
        <div className={`absolute inset-0 ${variant === 'white' ? 'bg-white/10' : 'bg-gtm-orange/10'} rounded-full blur-md opacity-70`}></div>
        <img 
          src="/lovable-uploads/6abd1962-db89-4c98-90d4-8924ab718a76.png" 
          alt="GTM Unbound Logo" 
          className={`h-10 w-auto relative ${variant === 'white' ? 'brightness-0 invert' : ''}`}
        />
      </motion.div>
      <div className="font-bold text-2xl flex items-center">
        <motion.span 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className={variant === 'white' ? "text-white" : "text-gtm-deep-blue"}
        >
          GTM
        </motion.span>
        <motion.span 
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={variant === 'white' ? "text-white" : "text-gtm-orange"}
        >
          Unbound
        </motion.span>
      </div>
    </Link>
  );
};

export default Logo;
