
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
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-lovable-dark-blue text-white rounded-xl p-8 mb-12"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">GTM Unbound Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 mb-6">
            <img src="/lovable-uploads/bb227662-9c66-437e-b294-a9d4a65a6b54.png" alt="GTM Unbound Partners" className="max-w-full h-auto" />
          </div>
          <p className="text-lg text-center">
            GTM Unbound is expanding—more joining in, more being built, and the momentum is unstoppable
          </p>
        </motion.div>

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
