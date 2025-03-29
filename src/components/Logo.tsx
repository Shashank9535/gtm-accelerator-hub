
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'white';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/lovable-uploads/6abd1962-db89-4c98-90d4-8924ab718a76.png" 
        alt="GTM Unbound Logo" 
        className={`h-10 w-auto ${variant === 'white' ? 'brightness-0 invert' : ''}`}
      />
      <div className="font-bold text-2xl">
        <span className={variant === 'white' ? "text-white" : "text-gtm-deep-blue"}>GTM</span>
        <span className={variant === 'white' ? "text-white" : "text-gtm-orange"}>Unbound</span>
      </div>
    </Link>
  );
};

export default Logo;
