
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TeamMemberProps {
  name: string;
  role: string;
  company?: string;
  bio: string;
  imageSrc: string;
  linkedinUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  company,
  bio,
  imageSrc,
  linkedinUrl
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(155,135,245,0.3)] transition-all duration-500"
    >
      <div className="flex flex-col sm:flex-row items-center p-6">
        <div className="mb-4 sm:mb-0 sm:mr-6 relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] blur-md opacity-70 transform scale-105 group-hover:scale-110 transition-transform duration-300"></div>
          <Avatar className="h-28 w-28 border-2 border-white/30 relative">
            <AvatarImage src={imageSrc} alt={name} className="object-cover" />
            <AvatarFallback className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xl">
              {name.split(' ').map(part => part[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </div>
        
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-1">
            {name}
          </h3>
          
          <p className="text-sm font-medium text-[#9b87f5] mb-2">
            {role}{company && <span> at {company}</span>}
          </p>
          
          <p className="text-gray-300 text-sm mb-4">
            {bio}
          </p>
          
          <motion.a 
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-gray-300 hover:text-white transition-colors group-hover:text-[#9b87f5]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="h-4 w-4 mr-1" />
            <span>LinkedIn Profile</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;
