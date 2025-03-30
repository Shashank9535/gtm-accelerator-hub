
import React from 'react';
import { Button } from '@/components/ui/button';
import ExpertCard from '@/components/ExpertCard';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const experts = [
  {
    id: 1,
    name: "Akash Verma",
    title: "Head of GTM Strategy",
    company: "Tech Innovators Inc.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    expertise: ["US Market Entry", "SaaS Sales", "Pricing Strategy"]
  },
  {
    id: 2,
    name: "Sarah Chen",
    title: "VP of International Growth",
    company: "Global AI Solutions",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    expertise: ["EMEA Expansion", "AI GTM", "Channel Strategy"]
  },
  {
    id: 3,
    name: "Raj Patel",
    title: "Founder & CEO",
    company: "MarketFit Advisors",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    expertise: ["Product Marketing", "Market Validation", "Sales Enablement"]
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    title: "Global Sales Director",
    company: "Enterprise Tech Partners",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    expertise: ["Enterprise Sales", "Revenue Operations", "Sales Playbooks"]
  }
];

const pastEvents = [
  {
    id: 1,
    title: "SaaSBoomi Annual 2025",
    date: "January 20, 2025",
    location: "Bangalore, India",
    imageUrl: "/lovable-uploads/c0ed2120-f9e8-43b9-8efc-c226a3f77f03.png", 
    description: "A premier gathering of SaaS founders and leaders from across India."
  },
  {
    id: 2,
    title: "Women Leaders in AI SaaS",
    date: "May 15, 2023",
    location: "Virtual Event",
    imageUrl: "/lovable-uploads/9d486963-8978-46cc-9ddb-b31bd35566b8.png",
    description: "Breaking Barriers & Building AI-First Companies with top women leaders."
  },
  {
    id: 3,
    title: "GTM Unbound Founders' Walk",
    date: "March 9, 2024",
    location: "Cubbon Park, Bangalore",
    imageUrl: "/lovable-uploads/a763419d-e68b-4852-b521-a8e6c830f83c.png",
    description: "Networking and knowledge sharing in the serene surroundings of Cubbon Park."
  }
];

const ExpertsSection: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D004D] via-[#1A0033] to-[#0D001A] -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] -z-10"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#00FF99]/20 blur-xl"
            style={{
              width: Math.random() * 150 + 50,
              height: Math.random() * 150 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 15 + 15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#FF0066] to-[#0099FF] bg-clip-text text-transparent mb-4">
            Meet Our GTM Experts
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Connect with industry veterans who have successfully led global GTM strategies
            for technology companies across markets.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {experts.map((expert, index) => (
            <motion.div
              key={expert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <ExpertCard
                name={expert.name}
                title={expert.title}
                company={expert.company}
                imageUrl={expert.imageUrl}
                expertise={expert.expertise}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Past Events Section with the provided images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00FF99] to-[#0099FF] bg-clip-text text-transparent mb-6 text-center">
            Our Previous Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl h-full">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={event.imageUrl} 
                      alt={event.title} 
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D004D] via-transparent to-transparent opacity-70"></div>
                  </div>
                  
                  <div className="p-6 relative">
                    <div className="absolute -top-10 right-6 bg-[#FF0066] text-white text-xs rounded-full py-1 px-3 font-medium">
                      Past Event
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    
                    <div className="flex items-center text-gray-300 text-sm mb-2">
                      <Calendar className="h-4 w-4 mr-2 text-[#00FF99]" />
                      {event.date}
                    </div>
                    
                    <div className="flex items-center text-gray-300 text-sm mb-4">
                      <MapPin className="h-4 w-4 mr-2 text-[#00FF99]" />
                      {event.location}
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">
                      {event.description}
                    </p>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="w-full bg-[#0099FF] hover:bg-[#0077CC] text-white border-none shadow-[0_0_15px_rgba(0,153,255,0.5)]">
                        <Users className="h-4 w-4 mr-2" />
                        View Gallery
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Featured Event: CorridorX GTM Unbound */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-[#2D004D]/80 to-[#0D001A]/80 backdrop-blur-xl rounded-xl overflow-hidden border border-[#FF0066]/20 shadow-[0_0_30px_rgba(255,0,102,0.2)]"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative overflow-hidden">
                <img 
                  src="/lovable-uploads/742702d4-a0fd-4e58-b57a-6d2e6288c2f4.png" 
                  alt="CorridorX GTM Unbound" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2D004D] opacity-70 md:block hidden"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D004D] to-transparent opacity-70 md:hidden block"></div>
              </div>
              
              <div className="md:w-3/5 p-8 md:p-10">
                <div className="inline-block px-3 py-1 rounded-full bg-[#FF0066]/20 text-[#FF0066] text-xs font-semibold mb-4">
                  UPCOMING EVENT
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">CorridorX GTM Unbound</h3>
                <p className="text-gray-300 mb-6">
                  Join us for an exclusive meetup with founders who have successfully expanded internationally and investors who are hyper-focused on global GTM strategies.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3 text-[#00FF99]" />
                    <span className="text-white">Friday, 21 Feb 2025</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 mr-3 text-[#00FF99]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="text-white">5:30 PM onwards</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-[#00FF99]" />
                    <span className="text-white">WeWork Embassy Quest</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-3 text-[#00FF99]" />
                    <span className="text-white">Limited to 30 participants</span>
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Button className="bg-gradient-to-r from-[#FF0066] to-[#0099FF] hover:opacity-90 text-white border-none px-8 py-6 h-auto text-lg shadow-[0_0_25px_rgba(255,0,102,0.3)]">
                    Request Invitation
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Community Gathering Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00FF99] to-[#0099FF] bg-clip-text text-transparent mb-8 text-center">
              GTM Unbound Community
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.div 
                className="relative rounded-xl overflow-hidden aspect-square"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <img 
                  src="/lovable-uploads/ed6614f3-374e-48c4-85ce-7a9b6a785f89.png" 
                  alt="GTM Community Event" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D004D] via-transparent to-transparent opacity-60"></div>
              </motion.div>
              
              <motion.div 
                className="relative rounded-xl overflow-hidden aspect-square"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <img 
                  src="/lovable-uploads/1867b608-0f5b-4eb7-a29b-b18978d50817.png" 
                  alt="Tech Founders Meetup" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D004D] via-transparent to-transparent opacity-60"></div>
              </motion.div>
              
              <motion.div 
                className="relative rounded-xl overflow-hidden aspect-square"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <img 
                  src="/lovable-uploads/c19cbe48-053e-45cd-9972-d0d2d65faddd.png" 
                  alt="GTM Unbound Founders' Walk" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D004D] via-transparent to-transparent opacity-60"></div>
              </motion.div>
              
              <motion.div 
                className="relative rounded-xl overflow-hidden aspect-square"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <img 
                  src="/lovable-uploads/2776d812-1dda-43c7-bee0-7179994c6c9d.png" 
                  alt="Momentum Strategy Impact" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D004D] via-transparent to-transparent opacity-60"></div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link to="/experts">
            <Button className="bg-gradient-to-r from-[#FF0066] to-[#0099FF] hover:opacity-90 text-white border-none px-8 py-6 h-auto text-lg shadow-[0_0_25px_rgba(255,0,102,0.3)]">
              View All Experts & Events
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertsSection;
