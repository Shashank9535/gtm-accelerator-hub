
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
    <motion.div
      initial={{ opacity: 0.8 }}
      whileHover={{ 
        scale: 1.03, 
        rotateY: 2,
        z: 20,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card 
        className="relative overflow-hidden backdrop-blur-xl bg-[#2D004D]/30 border border-[#FF0066]/20 shadow-[0_8px_32px_rgba(0,153,255,0.2)] hover:shadow-[0_8px_32px_rgba(0,255,153,0.3),0_0_0_1px_rgba(255,0,102,0.3)] transition-all duration-500 group"
        onClick={onClick}
      >
        {/* Animated background gradient */}
        <div className="absolute -inset-[100px] bg-gradient-to-r from-[#FF0066]/10 via-[#0099FF]/5 to-[#00FF99]/10 blur-3xl opacity-30 group-hover:opacity-40 animate-pulse transition-opacity duration-1000"></div>
        
        {/* Animated top corner accent */}
        <motion.div 
          className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-[#FF0066]/40 to-transparent rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative">
          <div className="aspect-square overflow-hidden">
            <motion.img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
              whileHover={{ filter: "brightness(1.1)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D004D] via-transparent to-transparent opacity-70"></div>
            
            {/* Animated overlay effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#FF0066]/20 to-[#0099FF]/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          {/* Futuristic badge with glowing effect */}
          <div className="absolute top-3 right-3">
            <motion.div 
              className="w-10 h-10 rounded-full bg-[#00FF99]/20 backdrop-blur-xl border border-[#00FF99]/30 flex items-center justify-center overflow-hidden"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 15px rgba(0, 255, 153, 0.5)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div 
                className="w-6 h-6 rounded-full bg-[#00FF99]/70 flex items-center justify-center"
                animate={{ 
                  boxShadow: ["0 0 0px rgba(0, 255, 153, 0)", "0 0 10px rgba(0, 255, 153, 0.5)", "0 0 0px rgba(0, 255, 153, 0)"]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-[#2D004D] font-bold text-xs">GTM</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        <div className="relative p-4 z-10">
          {/* Subtle highlight line */}
          <div className="w-1/3 h-0.5 bg-gradient-to-r from-[#0099FF] to-transparent mb-3 opacity-70"></div>
          
          <h3 className="font-bold text-lg text-white group-hover:text-[#00FF99] transition-colors duration-300">{name}</h3>
          <p className="text-[#FF0066] text-sm">{title}</p>
          <p className="text-gray-300 text-sm mb-3">{company}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {expertise.map((tag, index) => (
              <motion.span 
                key={index} 
                className="bg-[#0099FF]/10 text-[#0099FF] text-xs px-2 py-1 rounded-full border border-[#0099FF]/20 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(0, 153, 255, 0.2)",
                  borderColor: "rgba(0, 153, 255, 0.4)",
                  boxShadow: "0 0 8px rgba(0, 153, 255, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          <motion.button 
            className="relative w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF0066] to-[#0099FF] text-white py-2 rounded-md transition-all duration-300 overflow-hidden group"
            whileHover={{ 
              boxShadow: "0 0 25px rgba(255, 0, 102, 0.4)",
              y: -2 
            }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Button glow effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#FF0066]/0 via-white/20 to-[#FF0066]/0"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 1 }}
            />
            
            <Calendar className="h-4 w-4 relative z-10" />
            <span className="relative z-10">Book Session</span>
          </motion.button>
          
          {/* Bottom corner accent */}
          <div className="absolute bottom-0 right-0 w-16 h-16 opacity-20">
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-[#00FF99]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-[#FF0066]"></div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ExpertCard;
