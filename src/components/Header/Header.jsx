'use client';

import { useState, useEffect } from 'react';
import { Phone, Menu, X, Clock, MapPin, Instagram, Sparkles, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Équipe', href: '#team' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar - Sleek Minimal */}
      <div className="bg-black text-white border-b border-[#D4AF37]/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-10 text-xs">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-gray-400">10h-22h</span>
              </div>
              <div className="hidden md:flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-gray-400">Kénitra</span>
              </div>
            </div>
            <a 
              href="https://www.instagram.com/le_siege_kenitra/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-400 hover:text-[#D4AF37] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">@le_siege_kenitra</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Creative Floating Design */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/98 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.8)] border-b border-[#D4AF37]/20' 
          : 'bg-black/95 backdrop-blur-md'
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo - Minimal & Clean */}
            <div 
              className="cursor-pointer group relative"
              onClick={() => scrollToSection('#hero')}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/20 to-[#E5C965]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="https://res.cloudinary.com/dylpck2et/image/upload/v1759200666/logo_siege_ur5mjl.svg" 
                alt="Le Siège" 
                className="relative w-14 h-14 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              />
            </div>

            {/* Desktop Navigation - Floating Pills */}
            <div className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full p-1.5 border border-white/10">
              {navLinks.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="relative px-6 py-2.5 text-sm text-gray-300 hover:text-white font-medium transition-all duration-300 rounded-full group"
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/90 to-[#E5C965]/90 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full scale-95 group-hover:scale-100"></div>
                </button>
              ))}
            </div>

            {/* CTA - Premium Gradient Button */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+212XXXXXXXXX"
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#E5C965] rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-[#D4AF37] to-[#E5C965] px-6 py-3 rounded-full font-bold text-black text-sm flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                  <Phone className="w-4 h-4" />
                  <span className="hidden sm:inline">Réserver</span>
                </div>
              </a>

              {/* Mobile Menu - Sleek Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative w-11 h-11 bg-white/5 rounded-full border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 flex items-center justify-center group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#E5C965]/0 group-hover:from-[#D4AF37]/20 group-hover:to-[#E5C965]/20 rounded-full transition-all duration-300"></div>
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-white relative z-10" />
                ) : (
                  <Menu className="w-5 h-5 text-white relative z-10" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Animated Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </nav>

      {/* Mobile Menu - Full Screen Takeover */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
          </div>

          {/* Menu Content */}
          <div className="relative h-full flex flex-col justify-center items-center p-8">
            
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 w-12 h-12 bg-white/5 rounded-full border border-white/10 hover:border-[#D4AF37]/50 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
              <X className="w-6 h-6 text-white group-hover:text-[#D4AF37]" />
            </button>

            {/* Logo */}
            <div className="mb-16">
              <img 
                src="https://res.cloudinary.com/dylpck2et/image/upload/v1759200666/logo_siege_ur5mjl.svg" 
                alt="Le Siège" 
                className="w-24 h-24 object-contain opacity-50"
              />
            </div>

            {/* Navigation Links - Centered Large Text */}
            <div className="space-y-2 mb-12 w-full max-w-sm">
              {navLinks.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="group w-full text-center py-4 relative"
                  style={{ 
                    animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
                    opacity: 0
                  }}
                >
                  <span className="text-3xl md:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#D4AF37] group-hover:to-[#E5C965] transition-all duration-300 font-['Playfair_Display']">
                    {link.name}
                  </span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#E5C965] group-hover:w-24 transition-all duration-300"></div>
                </button>
              ))}
            </div>
            
            {/* Contact Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md" style={{ animation: 'fadeIn 0.5s ease-out 0.6s both', opacity: 0 }}>
              <a
                href="tel:+212XXXXXXXXX"
                className="flex-1 bg-gradient-to-r from-[#D4AF37] to-[#E5C965] text-black py-4 rounded-full font-bold text-center hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Appeler
              </a>

              <a
                href="https://www.instagram.com/le_siege_kenitra/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white/5 text-white py-4 rounded-full font-bold text-center hover:bg-white/10 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-8 text-center">
              <div className="text-sm text-gray-400 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                Lun-Dim: 10h-22h
              </div>
            </div>
          </div>
        </div>
      )}

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
    </>
  );
};

export default Header;