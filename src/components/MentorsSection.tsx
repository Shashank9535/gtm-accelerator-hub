
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MentorCard from './MentorCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

const mentors = [
  {
    name: "Anil Advani",
    role: "Founder & Managing Partner",
    company: "Inventus Law",
    location: "San Francisco, CA",
    availability: "Available Tuesdays & Thursdays",
    image: "/lovable-uploads/9cd64d87-5708-47ad-8336-377895ce94eb.png",
    expertise: ["US Go-to-Market", "Fundraising", "Legal & Compliance", "M&A"]
  },
  {
    name: "Manik M",
    role: "Co-Founder and MD",
    company: "Omnify",
    location: "Bangalore, India",
    availability: "Available Mondays & Wednesdays",
    image: "/lovable-uploads/48c93a0f-10cf-45e5-be50-1515ebddbde1.png",
    expertise: ["SaaS Scaling", "B2B Sales", "Product Strategy", "India-US Expansion"]
  },
  {
    name: "Prabhu D Gupta",
    role: "Entrepreneur in Residence",
    company: "GTM Unbound",
    location: "Bangalore, India",
    availability: "Available Weekly",
    image: "/lovable-uploads/c8918350-82fa-4098-82fd-9db96f2c6ea5.png",
    expertise: ["Revenue Strategy", "GTM Planning", "Market Entry", "SaaS Metrics"]
  },
  {
    name: "Aditi Aggarwal Mehta",
    role: "Founder",
    company: "GTM Unbound",
    location: "San Francisco, CA",
    availability: "Limited Availability",
    image: "/lovable-uploads/b46d13d8-351f-49b7-8553-dcd0c25bdbfd.png",
    expertise: ["International Expansion", "Go-to-Market Strategy", "US Market Entry"]
  }
];

const MentorsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredMentors = mentors.filter(mentor => 
    mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mentor.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
    mentor.location.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gtm-deep-blue mb-4">
            Connect with GTM Mentors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Book 1:1 mentorship sessions with our community of experienced go-to-market experts
            who can help accelerate your global growth journey.
          </p>
        </motion.div>
        
        <div className="mb-10 max-w-2xl mx-auto">
          <div className="flex gap-4 flex-wrap">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search by name, expertise, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MentorCard {...mentor} />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Don't see what you're looking for?</p>
          <Button className="bg-gtm-deep-blue hover:bg-gtm-light-blue">
            Apply to Join as a Mentor
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MentorsSection;
