'use client';

import { useState, useEffect, useRef } from 'react';
import { MapPin, Clock, Award, Users, Scissors, Star, Phone, Navigation, Sparkles, Heart, TrendingUp, CheckCircle } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
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

  const stats = [
    { 
      icon: Users, 
      number: "1000+", 
      label: "Clients satisfaits",
      color: "from-amber-400 to-yellow-600"
    },
    { 
      icon: Award, 
      number: "12", 
      label: "Ans d'excellence",
      color: "from-amber-500 to-orange-600"
    },
    { 
      icon: Scissors, 
      number: "6", 
      label: "Coiffeurs experts",
      color: "from-yellow-400 to-amber-600"
    },
    { 
      icon: Star, 
      number: "4.9", 
      label: "Note moyenne",
      color: "from-amber-400 to-yellow-500"
    }
  ];

  const features = [
    {
      title: "Excellence & Luxe",
      description: "Un cadre raffiné où chaque détail compte pour votre confort",
      icon: Award,
      gradient: "from-[#D4AF37] to-[#E5C965]"
    },
    {
      title: "Équipe Professionnelle",
      description: "Des coiffeurs passionnés avec plus de 10 ans d&apos;expérience",
      icon: Users,
      gradient: "from-[#E5C965] to-[#D4AF37]"
    },
    {
      title: "Techniques Modernes",
      description: "Les dernières tendances et techniques de coiffure",
      icon: Scissors,
      gradient: "from-[#D4AF37] to-[#B8941F]"
    }
  ];

  const storyTabs = [
    {
      title: "Notre Histoire",
      content: [
        "Niché au cœur de Kénitra, Le Siège est bien plus qu&apos;un salon de coiffure - c&apos;est une expérience unique où l&apos;art de la coiffure rencontre le luxe et l&apos;excellence.",
        "Fondé avec la vision de créer un espace où chaque client se sent valorisé et transformé, nous avons bâti notre réputation sur la qualité exceptionnelle de nos services et l&apos;expertise de notre équipe.",
        "Nos six coiffeurs professionnels, chacun avec des années d&apos;expérience, sont passionnés par leur métier et dédiés à sublimer votre style unique."
      ]
    }
  ];

  const values = [
    { icon: Heart, text: "Passion pour l&apos;excellence" },
    { icon: Sparkles, text: "Innovation constante" },
    { icon: TrendingUp, text: "Croissance avec nos clients" },
    { icon: CheckCircle, text: "Satisfaction garantie" }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#E5C965] rounded-full blur-3xl opacity-10 animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#D4AF37]/5 to-[#E5C965]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center max-w-4xl mx-auto mb-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 glass-dark text-[#D4AF37] rounded-full text-sm font-semibold mb-8 border border-[#D4AF37]/30 backdrop-blur-xl">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            À Propos de Nous
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-['Playfair_Display']">
            <span className="text-white block mb-3">Votre Destination </span>
            <span className="gradient-gold text-6xl md:text-7xl lg:text-8xl">Beauté</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Depuis plus d&apos;une décennie, Le Siège incarne l&apos;excellence et le raffinement dans l&apos;art de la coiffure à Kénitra
          </p>
        </div>

        {/* Stats Grid - Enhanced Design */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24 ${isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 text-center border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/20"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/10 group-hover:to-transparent rounded-3xl transition-all duration-500"></div>
              
              <div className={`relative w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-black" />
              </div>
              <div className="relative text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E5C965] mb-3 font-['Playfair_Display']">
                {stat.number}
              </div>
              <div className="relative text-sm text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          
          {/* Left: Story with Enhanced Design */}
          <div className={`space-y-10 ${isVisible ? 'animate-fade-in animation-delay-300' : 'opacity-0'}`}>
            
            {/* Story Card */}
            <div className="relative glass-dark rounded-3xl p-8 md:p-10 border border-[#D4AF37]/20 backdrop-blur-xl">
              <div className="absolute top-0 left-8 -translate-y-1/2">
                <div className="bg-gradient-to-r from-[#D4AF37] to-[#E5C965] px-6 py-2 rounded-full">
                  <h3 className="text-xl font-bold text-black font-['Playfair_Display']">
                    Notre Histoire
                  </h3>
                </div>
              </div>
              
              <div className="mt-4 space-y-5 text-gray-300 leading-relaxed">
                {storyTabs[0].content.map((paragraph, idx) => (
                  <p key={idx} className="text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="glass-dark rounded-2xl p-5 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 hover:scale-105 backdrop-blur-xl group"
                >
                  <value.icon className="w-8 h-8 text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm text-gray-300 font-medium leading-snug">{value.text}</p>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group relative glass-dark rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 backdrop-blur-xl overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  <div className="relative flex items-start space-x-5">
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <feature.icon className="w-7 h-7 text-black" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-2 text-lg">{feature.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image Gallery with 3D Effect */}
          <div className={`${isVisible ? 'animate-fade-in animation-delay-400' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main Large Image */}
              <div className="relative h-[500px] rounded-3xl overflow-hidden luxury-shadow group mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80"
                  alt="Le Siège Salon Interior"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="glass-dark rounded-2xl p-6 border border-[#D4AF37]/30 backdrop-blur-xl">
                    <p className="text-white font-semibold text-lg mb-1">Intérieur Luxueux</p>
                    <p className="text-gray-300 text-sm">Un espace pensé pour votre confort</p>
                  </div>
                </div>
              </div>
              
              {/* Bottom Two Images */}
              <div className="grid grid-cols-2 gap-6">
                <div className="relative h-56 rounded-2xl overflow-hidden luxury-shadow group">
                  <img 
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80"
                    alt="Professional Barber"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-semibold text-sm">Expertise Professionnelle</p>
                  </div>
                </div>
                
                <div className="relative h-56 rounded-2xl overflow-hidden luxury-shadow group">
                  <img 
                    src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80"
                    alt="Luxury Salon Equipment"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-semibold text-sm">Équipement Premium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section - Redesigned */}
        <div className={`relative ${isVisible ? 'animate-fade-in animation-delay-500' : 'opacity-0'}`}>
          <div className="glass-dark rounded-3xl overflow-hidden luxury-shadow border border-[#D4AF37]/30 backdrop-blur-xl">
            <div className="grid lg:grid-cols-5">
              
              {/* Map - Takes 3 columns */}
              <div className="lg:col-span-3 relative h-96 lg:h-auto min-h-[500px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.442603512447!2d-6.595275024274479!3d34.26276407307847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7597efa83cacf%3A0x744818700c59461!2sLe%20Si%C3%A8ge%20%7C%20Salon%20de%20coiffure!5e0!3m2!1sen!2sma!4v1759200648461!5m2!1sen!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 brightness-90 contrast-110 saturate-50 hover:saturate-100 hover:brightness-100 transition-all duration-500"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent pointer-events-none"></div>
              </div>

              {/* Info - Takes 2 columns */}
              <div className="lg:col-span-2 p-8 lg:p-10 space-y-8 bg-gradient-to-br from-gray-900/90 to-black/90">
                <div>
                  <h3 className="text-4xl font-bold mb-4 font-['Playfair_Display']">
                    <span className="gradient-gold">Visitez-Nous</span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Découvrez notre salon au cœur de Kénitra, un espace pensé pour votre confort et votre bien-être
                  </p>
                </div>

                {/* Address Card */}
                <div className="group relative glass-dark rounded-2xl p-6 border border-[#D4AF37]/30 hover:border-[#D4AF37]/50 transition-all duration-300 backdrop-blur-xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#E5C965] rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <MapPin className="w-7 h-7 text-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Notre Adresse</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        RUE HOUMANE EL FATOUAKI<br />
                        IMMEUBLE 49<br />
                        Kénitra, Maroc
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="group relative glass-dark rounded-2xl p-6 border border-[#D4AF37]/30 hover:border-[#D4AF37]/50 transition-all duration-300 backdrop-blur-xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#E5C965] to-[#D4AF37] rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Clock className="w-7 h-7 text-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Horaires d&apos;Ouverture</h4>
                      <p className="text-gray-300 text-sm mb-1">Lundi - Dimanche</p>
                      <p className="text-[#D4AF37] font-bold text-lg">10h00 - 22h00</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4 pt-2">
                  <a
                    href="tel:+212XXXXXXXXX"
                    className="group relative bg-gradient-to-r from-[#D4AF37] to-[#E5C965] hover:from-[#E5C965] hover:to-[#D4AF37] text-black px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#D4AF37]/50 flex items-center justify-center space-x-3 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <Phone className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Appeler Maintenant</span>
                  </a>
                  
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=34.26276407307847,-6.595275024274479"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-dark text-white hover:bg-white/10 px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-[#D4AF37]/30 hover:border-[#D4AF37]/50 flex items-center justify-center space-x-3 backdrop-blur-xl"
                  >
                    <Navigation className="w-5 h-5" />
                    <span>Obtenir l&apos;Itinéraire</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;