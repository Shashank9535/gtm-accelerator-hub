
import React from 'react';

const CallToAction: React.FC = () => {
  const handleRequestInvite = () => {
    window.location.href = "https://gtmunbound.com/";
  };

  return (
    <section className="py-16 bg-gtm-deep-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Accelerate Your Global GTM Strategy?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Join our exclusive community of founders and GTM experts and gain the insights,
          connections, and resources you need to succeed internationally.
        </p>
        <button 
          onClick={handleRequestInvite}
          className="bg-gtm-orange hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-md transition-colors hover-scale text-lg"
        >
          Request an Invite
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
