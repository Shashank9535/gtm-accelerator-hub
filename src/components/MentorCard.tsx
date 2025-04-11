
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
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="h-20 w-20 border-2 border-gtm-orange">
            <AvatarImage src={image} alt={name} className="object-cover" />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h3 className="font-bold text-lg text-gtm-deep-blue">{name}</h3>
            <p className="text-sm text-gray-600">{role} at {company}</p>
          </div>
        </div>
        
        <div className="space-y-3 text-sm text-gray-600 mb-6 flex-1">
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
    </motion.div>
  );
};

export default MentorCard;
