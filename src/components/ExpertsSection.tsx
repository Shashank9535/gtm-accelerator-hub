
import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ExpertsSection: React.FC = () => {
  const experts = [
    {
      name: "Anil Advani",
      title: "Founder & Managing Partner",
      company: "Inventus Law",
      image: "/lovable-uploads/9cd64d87-5708-47ad-8336-377895ce94eb.png",
      tags: ["Legal", "US Market", "Fundraising"]
    },
    {
      name: "Manik M",
      title: "Co-Founder and MD",
      company: "Omnify",
      image: "/lovable-uploads/48c93a0f-10cf-45e5-be50-1515ebddbde1.png",
      tags: ["SaaS", "B2B", "India"]
    },
    {
      name: "Prabhu D Gupta",
      title: "Entrepreneur in Residence",
      company: "GTM Unbound",
      image: "/lovable-uploads/c8918350-82fa-4098-82fd-9db96f2c6ea5.png",
      tags: ["Strategy", "GTM", "Sales"]
    },
    {
      name: "Aditi Aggarwal Mehta",
      title: "Founder",
      company: "GTM Unbound",
      image: "/lovable-uploads/b46d13d8-351f-49b7-8553-dcd0c25bdbfd.png",
      tags: ["Strategy", "Global", "Product"]
    }
  ];

  // Featured testimonial
  const testimonial = {
    quote: ""Lovable gave us the playbooks and support we needed to find product-market fit with confidence."",
    name: "Vikram, CEO",
    company: "Ornity",
    image: "/lovable-uploads/48c93a0f-10cf-45e5-be50-1515ebddbde1.png"
  };

  return (
    <section id="experts" className="py-16 md:py-24 bg-lovable-gray-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-lovable-dark-blue mb-4">
            Meet Our GTM Sherpas
          </h2>
          <p className="text-lg text-gray-600">
            Top GTM experts helping you move faster.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <p className="text-xl italic text-gray-700 mb-6">{testimonial.quote}</p>
            <div className="flex items-center">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage src={testimonial.image} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-bold text-lovable-dark-blue">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert, index) => (
            <motion.div
              key={expert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6 text-center">
                <Avatar className="h-20 w-20 mb-4 mx-auto">
                  <AvatarImage src={expert.image} alt={expert.name} />
                  <AvatarFallback>{expert.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold text-lovable-dark-blue mb-1">{expert.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{expert.title}, {expert.company}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {expert.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="bg-lovable-gray-light text-lovable-dark-blue">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-lovable-blue hover:bg-lovable-blue/90 text-white font-semibold">
            See All Experts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
