'use client';

import { useEffect, useRef, useState } from 'react';
import { Calendar, MessageCircle, Phone, Scissors, Star, Clock, Sparkles } from 'lucide-react';

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat brightness-90"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dylpck2et/image/upload/v1759201967/Screenshot_2025-09-30_at_04.11.26_xpohfk.png')`
          }}
        />
        
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        
        {/* Gold accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="max-w-4xl">
          
          {/* Badge */}
          <div className={`inline-flex items-center px-6 py-3 glass-dark text-[#D4AF37] rounded-full text-sm font-semibold mb-8 border border-[#D4AF37]/30 backdrop-blur-xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Salon de Coiffure de Luxe
          </div>
          
          {/* Main Heading */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-['Playfair_Display'] ${isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
            <span className="text-white">Le Siège </span>
            <span className="gradient-gold">Kénitra</span>
          </h1>
          
          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 leading-relaxed ${isVisible ? 'animate-fade-in animation-delay-400' : 'opacity-0'}`}>
            Excellence, créativité et savoir-faire au service de votre beauté
          </p>

          {/* Rating */}
          <div className={`flex items-center space-x-2 mb-10 ${isVisible ? 'animate-fade-in animation-delay-500' : 'opacity-0'}`}>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
              ))}
            </div>
            <span className="text-white font-bold">4.9/5</span>
            <span className="text-gray-400">• Plus de 1000 clients satisfaits</span>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-5 mb-12 ${isVisible ? 'animate-fade-in animation-delay-600' : 'opacity-0'}`}>
            <button
              onClick={scrollToContact}
              className="group relative bg-gradient-to-r from-[#D4AF37] via-[#E5C965] to-[#D4AF37] hover:from-[#E5C965] hover:via-[#D4AF37] hover:to-[#E5C965] text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <span className="relative flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-3" />
                Réserver maintenant
              </span>
            </button>
            
            <a
              href="https://wa.me/212XXXXXXXXX?text=Bonjour, j'aimerais réserver un rendez-vous au Siège"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-dark text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 border border-[#D4AF37]/30 hover:border-[#D4AF37]/50 backdrop-blur-xl"
            >
              <span className="flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-3" />
                WhatsApp
              </span>
            </a>
          </div>

          {/* Contact Information Cards */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl ${isVisible ? 'animate-fade-in animation-delay-800' : 'opacity-0'}`}>
            <div className="group glass-dark rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 backdrop-blur-xl hover:scale-105">
              <div className="flex items-center space-x-4 text-white">
                <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#E5C965] rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-black" />
                </div>
                <div>
                  <div className="font-bold text-base mb-1">Appelez-nous</div>
                  <a 
                    href="tel:+212XXXXXXXXX"
                    className="text-[#D4AF37] text-sm font-semibold hover:text-[#E5C965] transition-colors"
                  >
                    +212 XXX-XXXXXX
                  </a>
                </div>
              </div>
            </div>
            
            <div className="group glass-dark rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 backdrop-blur-xl hover:scale-105">
              <div className="flex items-center space-x-4 text-white">
                <div className="w-14 h-14 bg-gradient-to-br from-[#E5C965] to-[#D4AF37] rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                  <Clock className="w-7 h-7 text-black" />
                </div>
                <div>
                  <div className="font-bold text-base mb-1">Horaires</div>
                  <div className="text-gray-300 text-sm">Lun-Dim: <span className="text-[#D4AF37] font-semibold">10h-22h</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Bar */}
          <div className={`mt-10 flex flex-wrap items-center gap-6 ${isVisible ? 'animate-fade-in animation-delay-900' : 'opacity-0'}`}>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Scissors className="w-4 h-4 text-[#D4AF37]" />
              <span>6 Coiffeurs Experts</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
              <span>12+ Ans d&apos;Excellence</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Services Premium</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default Hero;