'use client';

import { useState, useEffect, useRef } from 'react';
import { Scissors, Clock, Sparkles, Crown, Star, Gem, Zap, TrendingUp } from 'lucide-react';

const Services = () => {
  const [priceRange, setPriceRange] = useState(600);
  const [isVisible, setIsVisible] = useState(false);
  const [filteredServices, setFilteredServices] = useState([]);
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

  const services = [
    { name: "La cire", category: "Cire", price: 20, duration: 15, icon: Sparkles, tier: "basic" },
    { name: "Brushing", category: "Cheveux", price: 20, duration: 15, icon: Scissors, tier: "basic" },
    { name: "Barbe", category: "Taillage de barbe", price: 30, duration: 20, icon: Scissors, tier: "basic" },
    { name: "Coupe enfant", category: "Moins de 10 ans", price: 40, duration: 30, icon: Scissors, tier: "basic" },
    { name: "Coupe classique", category: "Cheveux", price: 50, duration: 45, icon: Scissors, tier: "standard" },
    { name: "Coupe", category: "Coupe homme", price: 50, duration: 40, icon: Scissors, tier: "standard" },
    { name: "Offre de bienvenue", category: "Coupe+Barbe+Masque Cheveux+gommage visage+masque visage", price: 70, duration: 40, icon: Star, tier: "standard", featured: true },
    { name: "Offre Siège", category: "Coupe+Barbe+Masque cheveux + Masque visage + gommage visage", price: 90, duration: 60, icon: Crown, tier: "premium", featured: true },
    { name: "Coloration cheveux noir", category: "Coloration", price: 120, duration: 40, icon: Sparkles, tier: "premium" },
    { name: "Coloration cheveux marron", category: "Coloration", price: 120, duration: 90, icon: Sparkles, tier: "premium" },
    { name: "Soins visage (lucy)", category: "Soins visage", price: 150, duration: 40, icon: Star, tier: "premium" },
    { name: "Soins visage (subliderm)", category: "Soins visage", price: 200, duration: 60, icon: Star, tier: "luxury" },
    { name: "Soins visage academie", category: "Soins visage", price: 250, duration: 40, icon: Gem, tier: "luxury" },
    { name: "Soins cheveux (revox)", category: "Soins cheveux", price: 300, duration: 60, icon: Sparkles, tier: "luxury" },
    { name: "Soins visage hydrafacial academie", category: "Soins visage", price: 350, duration: 60, icon: Gem, tier: "luxury" },
    { name: "Protéine +", category: "Protéine", price: 350, duration: 60, icon: Zap, tier: "luxury" },
    { name: "Coloration les meshes", category: "Coloration", price: 400, duration: 90, icon: Sparkles, tier: "elite" },
    { name: "Protéine ++", category: "Protéine", price: 400, duration: 60, icon: Zap, tier: "elite" },
    { name: "Protéine +++", category: "Protéine", price: 500, duration: 60, icon: Crown, tier: "elite" },
    { name: "Protéine ++++", category: "Protéine", price: 600, duration: 60, icon: Crown, tier: "elite" },
  ];

  useEffect(() => {
    const filtered = services.filter(service => service.price <= priceRange);
    setFilteredServices(filtered);
  }, [priceRange]);

  const getTierInfo = (price) => {
    if (price <= 40) return { name: "Essential", color: "from-gray-400 to-gray-600", glow: "rgba(156, 163, 175, 0.5)" };
    if (price <= 90) return { name: "Standard", color: "from-blue-400 to-blue-600", glow: "rgba(96, 165, 250, 0.5)" };
    if (price <= 200) return { name: "Premium", color: "from-purple-400 to-purple-600", glow: "rgba(192, 132, 252, 0.5)" };
    if (price <= 350) return { name: "Luxury", color: "from-amber-400 to-amber-600", glow: "rgba(251, 191, 36, 0.5)" };
    return { name: "Elite", color: "from-[#D4AF37] to-[#B8941F]", glow: "rgba(212, 175, 55, 0.5)" };
  };

  const currentTier = getTierInfo(priceRange);

  return (
    <section 
      id="services" 
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
            Nos Services
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-['Playfair_Display']">
            <span className="text-white block mb-3">Des Prestations </span>
            <span className="gradient-gold text-6xl md:text-7xl lg:text-8xl">Sur Mesure</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Découvrez nos services en fonction de votre budget - de l&apos;essentiel à l&apos;élite
          </p>
        </div>

        {/* Interactive Price Slider */}
        <div className={`max-w-5xl mx-auto mb-16 ${isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
          <div className="glass-dark rounded-3xl p-8 md:p-12 border border-[#D4AF37]/30 backdrop-blur-xl">
            
            {/* Current Tier Display */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center space-x-4 mb-6">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${currentTier.color} animate-pulse`}></div>
                <h3 className={`text-4xl md:text-5xl font-bold font-['Playfair_Display'] bg-gradient-to-r ${currentTier.color} bg-clip-text text-transparent`}>
                  {currentTier.name}
                </h3>
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${currentTier.color} animate-pulse`}></div>
              </div>
              <p className="text-gray-300 text-lg">
                Affichage des services jusqu&apos;à <span className="font-bold text-[#D4AF37]">{priceRange} MAD</span>
              </p>
            </div>

            {/* Slider Container */}
            <div className="relative mb-16">
              {/* Tier Markers Above */}
              <div className="absolute -top-10 left-0 right-0 flex justify-between px-1 text-xs font-semibold">
                <span className="text-gray-500 transform -translate-x-1/2">20</span>
                <span className="text-blue-400 transform -translate-x-1/2">90</span>
                <span className="text-purple-400 transform -translate-x-1/2">200</span>
                <span className="text-amber-400 transform -translate-x-1/2">350</span>
                <span className="text-[#D4AF37] transform -translate-x-1/2">600</span>
              </div>

              {/* Custom Slider Track */}
              <div className="relative h-4 bg-gradient-to-r from-gray-700 via-blue-700 via-purple-700 via-amber-700 to-[#D4AF37]/50 rounded-full shadow-inner">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-gray-400 via-blue-400 via-purple-400 via-amber-400 to-[#D4AF37] rounded-full transition-all duration-300 shadow-lg"
                  style={{ 
                    width: `${(priceRange / 600) * 100}%`,
                    boxShadow: `0 0 20px ${currentTier.glow}`
                  }}
                ></div>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min="20"
                max="600"
                step="10"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="absolute top-0 left-0 w-full h-4 opacity-0 cursor-pointer"
              />

              {/* Slider Thumb */}
              <div 
                className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r ${currentTier.color} rounded-full border-4 border-white/20 transition-all duration-300 pointer-events-none backdrop-blur-sm`}
                style={{ 
                  left: `calc(${(priceRange / 600) * 100}% - 20px)`,
                  boxShadow: `0 0 30px ${currentTier.glow}, 0 0 60px ${currentTier.glow}`
                }}
              >
                <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
              </div>

              {/* Tier Labels Below */}
              <div className="absolute -bottom-10 left-0 right-0 flex justify-between px-1 text-xs font-semibold">
                <span className="text-gray-400 transform -translate-x-1/2">Essential</span>
                <span className="text-blue-400 transform -translate-x-1/2">Standard</span>
                <span className="text-purple-400 transform -translate-x-1/2">Premium</span>
                <span className="text-amber-400 transform -translate-x-1/2">Luxury</span>
                <span className="text-[#D4AF37] transform -translate-x-1/2">Elite</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-[#D4AF37]/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E5C965] mb-2 font-['Playfair_Display']">
                  {filteredServices.length}
                </div>
                <div className="text-sm text-gray-400 font-medium">Services disponibles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E5C965] mb-2 font-['Playfair_Display']">
                  {priceRange}
                </div>
                <div className="text-sm text-gray-400 font-medium">MAD maximum</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E5C965] mb-2 font-['Playfair_Display']">
                  {Math.min(...filteredServices.map(s => s.duration)) || 0}-{Math.max(...filteredServices.map(s => s.duration)) || 0}
                </div>
                <div className="text-sm text-gray-400 font-medium">Minutes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className={`${isVisible ? 'animate-fade-in animation-delay-400' : 'opacity-0'}`}>
          {filteredServices.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredServices.map((service, index) => {
                const ServiceIcon = service.icon;
                const tierInfo = getTierInfo(service.price);
                
                return (
                  <div
                    key={index}
                    className={`group relative glass-dark rounded-2xl p-6 border-2 transition-all duration-500 hover:scale-105 backdrop-blur-xl ${
                      service.featured 
                        ? 'border-[#D4AF37]/50 hover:border-[#D4AF37]' 
                        : 'border-[#D4AF37]/20 hover:border-[#D4AF37]/40'
                    }`}
                    style={{
                      animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
                      boxShadow: service.featured ? '0 0 30px rgba(212, 175, 55, 0.3)' : 'none'
                    }}
                  >
                    {/* Featured Badge */}
                    {service.featured && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#D4AF37] to-[#E5C965] text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg z-10">
                        ⭐ Offre Spéciale
                      </div>
                    )}

                    {/* Tier Indicator */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r ${tierInfo.color} text-white shadow-lg`}>
                        {tierInfo.name}
                      </div>
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tierInfo.color} flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                        <ServiceIcon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Service Name */}
                    <h3 className="text-xl font-bold text-white mb-3 font-['Playfair_Display'] group-hover:text-[#D4AF37] transition-colors">
                      {service.name}
                    </h3>

                    {/* Category */}
                    <p className="text-sm text-gray-400 mb-5 line-clamp-2 min-h-[40px] leading-relaxed">
                      {service.category}
                    </p>

                    {/* Price & Duration */}
                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#D4AF37]/20">
                      <div>
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E5C965] font-['Playfair_Display']">
                          {service.price}
                          <span className="text-lg text-gray-400 ml-1">MAD</span>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-300 text-sm bg-white/5 px-3 py-2 rounded-lg">
                        <Clock className="w-4 h-4 mr-2" />
                        {service.duration} min
                      </div>
                    </div>

                    {/* Book Button */}
                    <button
                      onClick={() => window.location.href = '#contact'}
                      className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                        service.featured
                          ? 'bg-gradient-to-r from-[#D4AF37] to-[#E5C965] hover:from-[#E5C965] hover:to-[#D4AF37] text-black shadow-lg hover:shadow-[#D4AF37]/50'
                          : 'bg-white/10 text-white hover:bg-white/20 border border-[#D4AF37]/30 hover:border-[#D4AF37]/50'
                      }`}
                    >
                      Réserver
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 glass-dark rounded-full flex items-center justify-center mx-auto mb-6 border border-[#D4AF37]/30">
                <Scissors className="w-12 h-12 text-[#D4AF37]" />
              </div>
              <p className="text-gray-300 text-xl font-semibold mb-2">Aucun service dans cette gamme de prix</p>
              <p className="text-gray-500 text-sm">Augmentez le curseur pour voir plus de services</p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 ${isVisible ? 'animate-fade-in animation-delay-600' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 text-gray-400 mb-6">
            <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm font-medium">Explorez toute notre gamme de services premium</span>
          </div>
          <button
            onClick={() => setPriceRange(600)}
            className="bg-gradient-to-r from-[#D4AF37] to-[#E5C965] hover:from-[#E5C965] hover:to-[#D4AF37] text-black px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105"
          >
            Voir Tous Les Services
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
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

export default Services;