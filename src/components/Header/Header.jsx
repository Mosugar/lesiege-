'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, Menu, X, Clock, MapPin, Scissors } from 'lucide-react';

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
      {/* Top Info Bar */}
      <div className="bg-black text-white py-2.5 border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>Lun-Dim: 10h-22h</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>RUE HOUMANE EL FATOUAKI, Kénitra</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/le_siege_kenitra/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-[#D4AF37]/20' 
          : 'bg-black/90 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div 
              className="cursor-pointer group py-2"
              onClick={() => scrollToSection('#hero')}
            >
              <Image 
                src="https://res.cloudinary.com/dylpck2et/image/upload/v1759200666/logo_siege_ur5mjl.svg" 
                alt="Le Siège - Salon de Coiffure" 
                width={80}
                height={80}
                className="w-20 h-20 object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-lg group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="relative text-white hover:text-[#D4AF37] font-medium transition-colors duration-200 group py-2"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full rounded-full"></span>
                </button>
              ))}
            </div>

            {/* Call Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <a
                href="tel:+212XXXXXXXXX"
                className="bg-gradient-to-r from-[#D4AF37] via-[#E5C965] to-[#D4AF37] hover:from-[#E5C965] hover:via-[#D4AF37] hover:to-[#E5C965] text-black px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-[#D4AF37]/50 flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Réserver</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-white hover:text-[#D4AF37] hover:bg-gray-800/50 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="fixed top-24 left-4 right-4 bg-black/95 border border-[#D4AF37]/20 rounded-2xl shadow-2xl p-6 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-white hover:text-[#D4AF37] font-medium py-3 px-4 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
                >
                  {link.name}
                </button>
              ))}
              
              <div className="pt-4 border-t border-[#D4AF37]/20">
                <a
                  href="tel:+212XXXXXXXXX"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#D4AF37] to-[#E5C965] text-black py-3 px-4 rounded-lg font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  <span>Appelez maintenant</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;