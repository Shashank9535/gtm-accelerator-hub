
import React from 'react';

const HeroSection: React.FC = () => {
  const handleRequestInvite = () => {
    window.location.href = "https://gtmunbound.com/";
  };

  return (
    <section className="relative bg-gradient-to-r from-gtm-deep-blue to-gtm-light-blue text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Unlock Your Global GTM Potential
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Connect with Experts, Join a Thriving Community, Scale Internationally
          </p>
          <button 
            onClick={handleRequestInvite}
            className="btn-accent text-lg py-3 px-8 rounded-md animate-scale-in hover-scale"
            style={{ animationDelay: '0.4s' }}
          >
            Request an Invite
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
