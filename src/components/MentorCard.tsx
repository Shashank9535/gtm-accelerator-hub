
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Globe } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface MentorCardProps {
  name: string;
  role: string;
  company: string;
  location: string;
  availability: string;
  image: string;
  expertise: string[];
}

const MentorCard: React.FC<MentorCardProps> = ({
  name,
  role,
  company,
  location,
  availability,
  image,
  expertise
}) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl h-full"
    >
      <div className="flex flex-col h-full">
        {/* Image section with gradient overlay */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
            <div>
              <h3 className="font-bold text-lg text-white">{name}</h3>
              <p className="text-sm text-white/80">{role} at {company}</p>
            </div>
          </div>
        </div>
        
        {/* Content section */}
        <div className="p-5 flex flex-col flex-grow">
          <div className="space-y-3 text-sm text-gray-600 mb-6 flex-grow">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gtm-orange" />
              <span>{location}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gtm-orange" />
              <span>{availability}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-gtm-orange" />
              <span>Go-to-Market Expert</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Areas of expertise:</h4>
            <div className="flex flex-wrap gap-2">
              {expertise.map((skill, index) => (
                <span 
                  key={index}
                  className="text-xs bg-gtm-orange/10 text-gtm-orange px-3 py-1.5 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <Button className="w-full bg-gtm-deep-blue hover:bg-gtm-light-blue text-white">
            Request Mentorship
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default MentorCard;
