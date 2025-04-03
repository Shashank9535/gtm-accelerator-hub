
import React from 'react';
import { motion } from 'framer-motion';
import TeamMember from './TeamMember';

const founders = [
  {
    name: "Aditi Aggarwal Mehta",
    role: "Founder",
    company: "GTM Unbound",
    bio: "Passionate about helping tech startups navigate global markets and accelerate their international growth.",
    imageSrc: "/lovable-uploads/b46d13d8-351f-49b7-8553-dcd0c25bdbfd.png",
    linkedinUrl: "https://www.linkedin.com/in/aditi-aggarwal-mehta/"
  },
  {
    name: "Manik M",
    role: "Co-Founder and MD",
    company: "Omnify",
    bio: "Experienced leader with a proven track record in scaling SaaS businesses across global markets.",
    imageSrc: "/lovable-uploads/48c93a0f-10cf-45e5-be50-1515ebddbde1.png",
    linkedinUrl: "https://www.linkedin.com/in/manikm/"
  },
  {
    name: "Prabhu D Gupta",
    role: "Entrepreneur in Residence",
    company: "GTM Unbound",
    bio: "Strategic thinker and execution expert helping startups optimize their go-to-market strategies for international success.",
    imageSrc: "/lovable-uploads/c8918350-82fa-4098-82fd-9db96f2c6ea5.png",
    linkedinUrl: "https://www.linkedin.com/in/prabhu-d-gupta/"
  }
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-[#1A1F2C] to-[#2D1A3F]">
      {/* Futuristic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] -z-10"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#9b87f5]/20 blur-xl"
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
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] bg-clip-text text-transparent mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Meet the visionaries behind GTM Unbound who are dedicated to helping tech startups
            accelerate their international growth journey.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {founders.map((founder, index) => (
            <TeamMember
              key={index}
              name={founder.name}
              role={founder.role}
              company={founder.company}
              bio={founder.bio}
              imageSrc={founder.imageSrc}
              linkedinUrl={founder.linkedinUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
