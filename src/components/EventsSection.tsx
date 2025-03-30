
import React from 'react';
import { Button } from '@/components/ui/button';
import EventCard from '@/components/EventCard';
import { Link } from 'react-router-dom';
import { Linkedin, Calendar, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const events = [
  {
    id: 1,
    title: "Women Leaders in AI SaaS",
    date: "May 15, 2023",
    location: "Bangalore, India",
    imageUrl: "/lovable-uploads/41616128-1bfa-4d04-9a0e-8bc3417a51d4.png",
    attendees: 85,
    virtual: false
  },
  {
    id: 2,
    title: "GTM Unbound Founders' Walk",
    date: "March 9, 2023",
    location: "Cubbon Park, Bangalore",
    imageUrl: "/lovable-uploads/dbc7b430-7c73-4e8e-9cfb-d8b259204d58.png",
    attendees: 40,
    virtual: false
  },
  {
    id: 3,
    title: "CorridorX GTM Unbound",
    date: "February 21, 2025",
    location: "WeWork Embassy Quest",
    imageUrl: "/lovable-uploads/994514a5-3b59-48da-a758-105a63d976e9.png",
    attendees: 120,
    virtual: false
  }
];

const EventsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* 3D geometric background elements */}
      <div className="absolute -right-20 top-20 w-64 h-64 bg-gtm-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 bottom-20 w-80 h-80 bg-gtm-deep-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gtm-deep-blue mb-4">
            Upcoming Events & Webinars
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our exclusive events in Bangalore and across the US, or participate in
            our virtual webinars led by industry experts.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <EventCard
                title={event.title}
                date={event.date}
                location={event.location}
                imageUrl={event.imageUrl}
                attendees={event.attendees}
                virtual={event.virtual}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg shadow-md"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gtm-orange/20 rounded-full blur-sm"></div>
                <img 
                  src="/lovable-uploads/7619b595-711e-4f83-a099-c097dd5ad81a.png" 
                  alt="Aditi Aggarwal Mehta" 
                  className="relative rounded-full w-40 h-40 object-cover mx-auto border-4 border-gtm-orange"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gtm-deep-blue mb-2">Meet Our Founder</h3>
              <h4 className="text-xl font-semibold text-gtm-orange mb-3">Aditi Aggarwal Mehta</h4>
              <p className="text-gray-600 mb-4">
                Aditi is passionate about helping technology companies simplify their Go-To-Market strategies and expand internationally. With years of experience in the SaaS industry, she founded GTM Unbound to connect startups with top GTM experts and create a vibrant, invite-only community.
              </p>
              <motion.a 
                href="https://www.linkedin.com/in/aditi-aggarwal-mehta/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0077B5] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <h3 className="text-2xl font-bold text-gtm-deep-blue mb-6">Community Gatherings</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div 
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <img 
                src="/lovable-uploads/666d9b58-5a5d-4967-aff6-04e8b49dd774.png" 
                alt="SaaSBoomi Annual 2025" 
                className="w-full h-64 object-cover"
              />
            </div>
            <motion.div 
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <img 
                src="/lovable-uploads/b09b766a-9196-468b-8111-4192937866df.png" 
                alt="GTM Unbound Founders' Walk" 
                className="w-full h-64 object-cover"
              />
            </div>
            <motion.div 
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <img 
                src="/lovable-uploads/e2d66b5f-af74-4359-aee0-cf0a9434c8b9.png" 
                alt="Tech Founders Meetup" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link to="/events">
            <Button className="bg-gtm-deep-blue hover:bg-gtm-light-blue text-white shadow-lg hover:shadow-gtm-deep-blue/20 transition-all">
              View All Events
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
