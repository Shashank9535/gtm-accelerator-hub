
import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gtm-deep-blue">
            See GTM Unbound in Action
          </h2>
          <div className="relative pt-[56.25%] rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 w-full h-full bg-gray-800">
              <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/hXQZ4eos9Ak?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playlist=hXQZ4eos9Ak"
                  title="GTM Unbound Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 pointer-events-none"></div>
              </div>
            </div>
          </div>
          <p className="text-center text-gtm-deep-blue mt-6 font-medium text-lg">
            We are on a mission to simplify Go-To-Market for Global Technology Companies
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
