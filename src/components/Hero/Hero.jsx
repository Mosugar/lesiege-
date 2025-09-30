'use client';

import { useEffect, useRef, useState } from 'react';
import { Calendar, MessageCircle, Phone, Scissors, Star } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dylpck2et/image/upload/v1759201967/Screenshot_2025-09-30_at_04.11.26_xpohfk.png')`
          }}
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        
        {/* Gold accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#D4AF37]/10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="max-w-4xl">
          
          {/* Badge */}
          <div className={`inline-flex items-center px-6 py-3 glass-dark text-[#D4AF37] rounded-full text-sm font-medium mb-8 border border-[#D4AF37]/30 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Scissors className="w-4 h-4 mr-2" />
            Salon de Coiffure de Luxe
          </div>
          
          {/* Main Heading */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-['Playfair_Display'] ${isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
            <span className="text-white block mb-2">Le Siège</span>
            <span className="text-[#D4AF37] text-shadow-gold">Kénitra</span>
          </h1>
          
          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-gray-200 max-w-2xl mb-10 leading-relaxed ${isVisible ? 'animate-fade-in animation-delay-400' : 'opacity-0'}`}>
            Excellence, créativité et savoir-faire au service de votre beauté
          </p>

          {/* Rating */}
          <div className={`flex items-center space-x-2 mb-10 ${isVisible ? 'animate-fade-in animation-delay-500' : 'opacity-0'}`}>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
              ))}
            </div>
            <span className="text-white font-semibold">4.9/5</span>
            <span className="text-gray-300">• Plus de 1000 clients satisfaits</span>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-5 mb-12 ${isVisible ? 'animate-fade-in animation-delay-600' : 'opacity-0'}`}>
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-[#D4AF37] via-[#E5C965] to-[#D4AF37] hover:from-[#E5C965] hover:via-[#D4AF37] hover:to-[#E5C965] text-black px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-3" />
                Réserver maintenant
              </span>
            </button>
            
            <a
              href="https://wa.me/212XXXXXXXXX?text=Bonjour, j'aimerais réserver un rendez-vous au Siège"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-dark text-white hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl transition-all duration-300 hover:scale-105 border border-[#D4AF37]/30"
            >
              <span className="flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-3" />
                WhatsApp
              </span>
            </a>
          </div>

          {/* Contact Information */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl ${isVisible ? 'animate-fade-in animation-delay-800' : 'opacity-0'}`}>
            <div className="glass-dark rounded-2xl p-5 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="flex items-center space-x-3 text-white">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="font-semibold text-base">Appelez-nous</div>
                  <div className="text-[#D4AF37] text-sm font-medium">+212 XXX-XXXXXX</div>
                </div>
              </div>
            </div>
            
            <div className="glass-dark rounded-2xl p-5 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
              <div className="flex items-center space-x-3 text-white">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center">
                  <Scissors className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="font-semibold text-base">Horaires</div>
                  <div className="text-gray-300 text-sm">Lun-Dim: 10h-22h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;