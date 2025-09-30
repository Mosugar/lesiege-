'use client';

import { useState, useEffect, useRef } from 'react';
import { Users, Award, Star, Scissors, Calendar, TrendingUp, Sparkles } from 'lucide-react';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Omar Boussof",
      role: "Coiffeur Expert",
      experience: 12,
      initials: "OB",
      specialties: ["Coupes Classiques", "Barbe", "Soins Premium"],
      image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80",
      rating: 4.9,
      clients: "500+",
      gradient: "from-[#D4AF37] to-[#E5C965]"
    },
    {
      name: "Hamza Hriz",
      role: "Coiffeur Senior",
      experience: 10,
      initials: "HH",
      specialties: ["Styles Modernes", "Coloration", "Protéines"],
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80",
      rating: 4.8,
      clients: "450+",
      gradient: "from-[#E5C965] to-[#D4AF37]"
    },
    {
      name: "Hamza El Alami",
      role: "Coiffeur Professionnel",
      experience: 8,
      initials: "HEA",
      specialties: ["Coupes Tendances", "Soins Visage", "Styling"],
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=80",
      rating: 4.8,
      clients: "400+",
      gradient: "from-[#D4AF37] to-[#B8941F]"
    },
    {
      name: "Youssef Slimi",
      role: "Coiffeur Professionnel",
      experience: 8,
      initials: "YS",
      specialties: ["Barbe Artistique", "Fades", "Design"],
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&q=80",
      rating: 4.7,
      clients: "380+",
      gradient: "from-[#E5C965] to-[#B8941F]"
    },
    {
      name: "Younes Benhsiba",
      role: "Coiffeur",
      experience: 5,
      initials: "YB",
      specialties: ["Coupes Enfants", "Styles Jeunes", "Moderne"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      rating: 4.7,
      clients: "300+",
      gradient: "from-[#D4AF37] to-[#E5C965]"
    },
    {
      name: "Alae Lhamri",
      role: "Coiffeur",
      experience: 4,
      initials: "AL",
      specialties: ["Nouvelles Tendances", "Créativité", "Innovation"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      rating: 4.6,
      clients: "250+",
      gradient: "from-[#E5C965] to-[#D4AF37]"
    }
  ];

  const stats = [
    { icon: Users, number: "6", label: "Experts Passionnés" },
    { icon: Award, number: "47+", label: "Années d'expérience cumulées" },
    { icon: TrendingUp, number: "2280+", label: "Clients satisfaits" },
    { icon: Star, number: "4.8", label: "Note moyenne" }
  ];

  return (
    <section 
      id="team" 
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-[#E5C965] rounded-full blur-3xl opacity-10 animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-[#D4AF37]/5 to-[#E5C965]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center max-w-4xl mx-auto mb-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 glass-dark text-[#D4AF37] rounded-full text-sm font-semibold mb-8 border border-[#D4AF37]/30 backdrop-blur-xl">
            <Users className="w-4 h-4 mr-2 animate-pulse" />
            Notre Équipe
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-['Playfair_Display']">
            <span className="text-white block mb-3">Des Artistes </span>
            <span className="gradient-gold text-6xl md:text-7xl lg:text-8xl">Passionnés</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Rencontrez nos coiffeurs experts, dédiés à sublimer votre style avec passion et savoir-faire
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24 max-w-6xl mx-auto ${isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 text-center border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/10 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
              
              <div className="relative w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#E5C965] rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-6 transition-transform duration-300">
                <stat.icon className="w-7 h-7 text-black" />
              </div>
              <div className="relative text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E5C965] mb-2 font-['Playfair_Display']">
                {stat.number}
              </div>
              <div className="relative text-sm text-gray-300 font-medium leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto ${isVisible ? 'animate-fade-in animation-delay-400' : 'opacity-0'}`}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative glass-dark rounded-3xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 hover:scale-105 backdrop-blur-xl"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.15}s both`
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Image Section */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Experience Badge */}
                <div className="absolute top-4 right-4 glass-dark px-4 py-2 rounded-full border border-[#D4AF37]/30 backdrop-blur-xl">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-white font-bold text-sm">{member.experience} ans</span>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 left-4 glass-dark px-3 py-2 rounded-full border border-[#D4AF37]/30 backdrop-blur-xl">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                    <span className="text-white font-bold text-sm">{member.rating}</span>
                  </div>
                </div>

                {/* Initials Avatar (shows on hover) */}
                <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 transition-all duration-500 ${hoveredCard === index ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-2xl font-bold text-black shadow-2xl border-4 border-white/20`}>
                    {member.initials}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="relative p-6 space-y-4">
                {/* Name & Role */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1 font-['Playfair_Display'] group-hover:text-[#D4AF37] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium">{member.role}</p>
                </div>

                {/* Stats Row */}
                <div className="flex items-center justify-around py-4 border-y border-[#D4AF37]/20">
                  <div className="text-center">
                    <div className="text-lg font-bold text-[#D4AF37] font-['Playfair_Display']">
                      {member.clients}
                    </div>
                    <div className="text-xs text-gray-400">Clients</div>
                  </div>
                  <div className="w-px h-8 bg-[#D4AF37]/20"></div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-[#D4AF37] font-['Playfair_Display']">
                      {member.experience}+
                    </div>
                    <div className="text-xs text-gray-400">Années</div>
                  </div>
                </div>

                {/* Book Button */}
                <button
                  onClick={() => window.location.href = '#contact'}
                  className={`w-full py-3 rounded-xl font-bold transition-all duration-300 bg-gradient-to-r ${member.gradient} hover:shadow-lg hover:shadow-[#D4AF37]/30 text-black flex items-center justify-center space-x-2`}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Réserver avec {member.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 ${isVisible ? 'animate-fade-in animation-delay-600' : 'opacity-0'}`}>
          <div className="glass-dark rounded-3xl p-10 max-w-4xl mx-auto border border-[#D4AF37]/30 backdrop-blur-xl">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-[#D4AF37] mr-3" />
              <h3 className="text-3xl font-bold text-white font-['Playfair_Display']">
                Prêt pour une transformation ?
              </h3>
              <Sparkles className="w-8 h-8 text-[#D4AF37] ml-3" />
            </div>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Nos experts sont à votre disposition pour créer le style qui vous ressemble
            </p>
            <button
              onClick={() => window.location.href = '#contact'}
              className="bg-gradient-to-r from-[#D4AF37] to-[#E5C965] hover:from-[#E5C965] hover:to-[#D4AF37] text-black px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105"
            >
              Prendre Rendez-vous
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Team;