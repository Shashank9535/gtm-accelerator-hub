
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Globe, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const eventTypes = [
  {
    title: "GTM UNBOUND Founder's Walk",
    description: "Network with fellow founders while enjoying a refreshing walk in scenic locations.",
    icon: <Users className="h-10 w-10 text-gtm-deep-blue/80" />
  },
  {
    title: "GTM UNBOUND Founder's Roundtable",
    description: "Intimate discussions with industry leaders sharing insights on go-to-market strategies.",
    icon: <Calendar className="h-10 w-10 text-gtm-deep-blue/80" />
  },
  {
    title: "GTM UNBOUND Unlocking the US-India Market",
    description: "Expert sessions focused on successfully expanding between the US and Indian markets.",
    icon: <Globe className="h-10 w-10 text-gtm-deep-blue/80" />
  },
  {
    title: "GTM UNBOUND invite-only gathering for SaaS and AI founders",
    description: "Exclusive networking opportunities for select founders in the SaaS and AI space.",
    icon: <MapPin className="h-10 w-10 text-gtm-deep-blue/80" />
  },
  {
    title: "GTM UNBOUND SaaS, AI and road to revenue and strategy",
    description: "Strategic workshops to help founders optimize their revenue models and growth strategies.",
    icon: <Zap className="h-10 w-10 text-gtm-deep-blue/80" />
  },
  {
    title: "AI innovations to VC mixers",
    description: "Connect with venture capitalists interested in AI innovations and emerging technologies.",
    icon: <Users className="h-10 w-10 text-gtm-deep-blue/80" />
  }
];

const Events: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-teal-100/5 to-transparent opacity-60"></div>
      
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-16 container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gtm-deep-blue"
          >
            Our Events
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-center max-w-3xl mx-auto mb-16"
          >
            Join our exclusive events in Bangalore and across the US, or participate in
            our virtual webinars led by industry experts.
          </motion.p>
          
          {/* Hero Banner with Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto mb-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Big ideas meet bold moves</h2>
                <p className="text-lg text-gray-700 mb-6">Step into the room where game-changers gather this week.</p>
                <div className="flex items-center">
                  <div className="text-gtm-orange font-medium">
                    <p>Aditi Aggarwal</p>
                    <p>gtmunbound.com</p>
                  </div>
                </div>
              </div>
              <div className="md:order-first">
                <img 
                  src="/lovable-uploads/75e2f249-23b8-4286-88bb-41d4215ec3fe.png" 
                  alt="GTM Unbound Events" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Event Types Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gtm-deep-blue">Types of Events We Host</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventTypes.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4 flex justify-center">
                        {event.icon}
                      </div>
                      <h3 className="font-bold text-xl mb-2 text-center text-gtm-deep-blue">{event.title}</h3>
                      <p className="text-gray-600 text-center">{event.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto my-16"
          >
            <h3 className="text-xl font-bold mb-4 text-gtm-deep-blue">Upcoming Events Calendar</h3>
            <p className="text-lg mb-3">Events page content is coming soon!</p>
            <p className="text-gray-600">Please check back later for updated information about our upcoming events.</p>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
