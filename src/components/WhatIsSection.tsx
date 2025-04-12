
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Rocket, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatIsSection: React.FC = () => {
  const features = [
    {
      title: "GTM Sprints",
      description: "Expert-led short programs to validate your next move",
      icon: <Target className="h-8 w-8 text-lovable-accent" />,
    },
    {
      title: "Peer Pods",
      description: "High Trust communities for founders at your stage",
      icon: <Users className="h-8 w-8 text-lovable-blue" />,
    },
    {
      title: "Launch Support",
      description: "Templates, playbooks, and people to help you go live",
      icon: <Rocket className="h-8 w-8 text-lovable-accent" />,
    },
    {
      title: "Zero to One Labs",
      description: "Co-creation spaces for new product ideas",
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
    }
  ];

  return (
    <section id="what-is-gtm" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-lovable-dark-blue mb-4">
              What is GTM Unbound?
            </h2>
            <p className="text-lg text-gray-600">
              GTM Unbound provides the tools, expertise, and network to help you navigate international markets. We connect founders with top GTM experts and create a vibrant, invite-only community for technology startups expanding internationally.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-lovable-dark-blue mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-500 mb-6">Backed by the best</h3>
          <div className="flex justify-center flex-wrap items-center gap-8 max-w-4xl mx-auto">
            <img src="/lovable-uploads/2776d812-1dda-43c7-bee0-7179994c6c9d.png" alt="Y Combinator" className="h-7 opacity-70" />
            <img src="/lovable-uploads/75e2f249-23b8-4286-88bb-41d4215ec3fe.png" alt="Sequoia" className="h-7 opacity-70" />
            <img src="/lovable-uploads/a763419d-e68b-4852-b521-a8e6c830f83c.png" alt="AWS" className="h-7 opacity-70" />
            <img src="/lovable-uploads/2776d812-1dda-43c7-bee0-7179994c6c9d.png" alt="Google Cloud" className="h-7 opacity-70" />
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg"
            className="bg-lovable-blue hover:bg-lovable-blue/90 text-white font-semibold"
          >
            Explore the Platform
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;

