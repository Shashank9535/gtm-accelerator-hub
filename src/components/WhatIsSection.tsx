
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WhatIsSection: React.FC = () => {
  const features = [
    {
      title: "Expert Mentorship",
      description: "Connect 1:1 with experienced GTM executives who have successfully scaled businesses globally.",
      icon: "/lovable-uploads/c19cbe48-053e-45cd-9972-d0d2d65faddd.png",
      link: "/mentors"
    },
    {
      title: "Community Events",
      description: "Join exclusive workshops, roundtables, and networking events focused on international expansion.",
      icon: "/lovable-uploads/41616128-1bfa-4d04-9a0e-8bc3417a51d4.png",
      link: "/events"
    },
    {
      title: "Strategic Advisors",
      description: "Get guidance from our handpicked advisors with deep expertise in specific markets and industries.",
      icon: "/lovable-uploads/1867b608-0f5b-4eb7-a29b-b18978d50817.png",
      link: "/advisors"
    }
  ];

  return (
    <section id="what-is-gtm" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gtm-deep-blue mb-4">
              What is GTM Unbound?
            </h2>
            <p className="text-lg text-gray-600">
              GTM Unbound provides the tools, expertise, and network to help you navigate international markets.
              We connect founders with top GTM experts and create a vibrant, invite-only community for technology startups expanding internationally.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <img src={feature.icon} alt={feature.title} className="w-16 h-16 mb-6" />
              <h3 className="text-xl font-bold text-gtm-deep-blue mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Link to={feature.link} className="text-gtm-orange font-medium flex items-center hover:underline">
                Learn more
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-6">Trusted by companies from</h3>
          <div className="flex justify-center flex-wrap items-center gap-8 max-w-4xl mx-auto">
            <img src="/lovable-uploads/2776d812-1dda-43c7-bee0-7179994c6c9d.png" alt="Company logo" className="h-7 opacity-70" />
            <img src="/lovable-uploads/75e2f249-23b8-4286-88bb-41d4215ec3fe.png" alt="Company logo" className="h-5 opacity-70" />
            <img src="/lovable-uploads/a763419d-e68b-4852-b521-a8e6c830f83c.png" alt="Company logo" className="h-6 opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
