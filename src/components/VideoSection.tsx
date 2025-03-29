
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
            <video 
              className="absolute inset-0 w-full h-full object-cover"
              controls
              autoPlay={false}
              preload="metadata"
            >
              <source 
                src="https://media-hosting.imagekit.io/0a356def560b4f73/1742799135290.mov?Expires=1837838067&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=x~OpQmzRiYahYO01UIrHYFoVQ3ysl2tf4eqmfKr~8fNeRMHRTpMblREL6X-SqZGnmH~WYgnKdt16qF0o2FbwRQ2uy86rM872nE0D1sRmVOANFdgwTwaAk84ZQI7X6VKG2NQ0iH2UeVMMXdjsUYADcGvV98jzyFx8J6vfp-8FaW9YeDE8Gz9ER~Il48n3o-tuBQFqEWifZovBouJjNK4IQ~FZIiRfahDUvGlerBo1HW44X~8dDm1-uo8kOMeY-L3upBOwu1c5lyBRKcfXNPqC~POGoFq7DGlaePiT1JYKhUVIjpYGTQF1jpSoaoJInADP2aQj4JnR1EFV3S6XtoFpuA__" 
                type="video/quicktime" 
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
