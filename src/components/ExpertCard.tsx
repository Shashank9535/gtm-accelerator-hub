
import React from 'react';
import { Card } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExpertCardProps {
  name: string;
  title: string;
  company: string;
  imageUrl: string;
  expertise: string[];
  onClick?: () => void;
}

const ExpertCard: React.FC<ExpertCardProps> = ({
  name,
  title,
  company,
  imageUrl,
  expertise,
  onClick
}) => {
  return (
    <Card 
      className="overflow-hidden backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl hover:shadow-[0_0_20px_rgba(0,153,255,0.3)] transition-all duration-500"
      onClick={onClick}
    >
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D004D] via-transparent to-transparent opacity-60"></div>
        </div>
        
        <div className="absolute top-3 right-3">
          <motion.div 
            className="w-10 h-10 rounded-full bg-[#00FF99]/30 backdrop-blur-md flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-6 rounded-full bg-[#00FF99]/80 flex items-center justify-center">
              <span className="text-[#2D004D] font-bold text-xs">GTM</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-white">{name}</h3>
        <p className="text-[#00FF99] text-sm">{title}</p>
        <p className="text-gray-300 text-sm mb-3">{company}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {expertise.map((tag, index) => (
            <motion.span 
              key={index} 
              className="bg-[#0099FF]/20 text-[#0099FF] text-xs px-2 py-1 rounded-full border border-[#0099FF]/30"
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        <motion.button 
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF0066] to-[#0099FF] text-white py-2 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(255,0,102,0.3)]"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Calendar className="h-4 w-4" />
          <span>Book Session</span>
        </motion.button>
      </div>
    </Card>
  );
};

export default ExpertCard;
