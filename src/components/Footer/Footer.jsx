'use client';

import { useState } from 'react';
import { Scissors, Phone, MapPin, Clock, Instagram, Mail, Facebook, Twitter, Heart, Award, Star, Sparkles, Crown } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Équipe', href: '#team' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const popularServices = [
    { name: 'Coupe Classique', price: '50 MAD' },
    { name: 'Coupe + Barbe', price: '80 MAD' },
    { name: 'Offre Siège', price: '90 MAD' },
    { name: 'Soins Visage', price: '150-350 MAD' }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/le_siege_kenitra/', name: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Facebook, href: '#', name: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', name: 'Twitter', color: 'hover:text-sky-500' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl opacity-5 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E5C965] rounded-full blur-3xl opacity-5 animate-float animation-delay-1000"></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Decorative Barber Elements */}
      <div className="absolute top-20 left-10 opacity-5 animate-float">
        <Scissors className="w-24 h-24 text-[#D4AF37] transform rotate-45" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 animate-float animation-delay-500">
        <Crown className="w-32 h-32 text-[#E5C965]" />
      </div>
      <div className="absolute top-1/2 left-1/3 opacity-3 animate-float animation-delay-700">
        <Award className="w-20 h-20 text-[#D4AF37]" />
      </div>

      {/* Top Decorative Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="https://res.cloudinary.com/dylpck2et/image/upload/v1759200666/logo_siege_ur5mjl.svg" 
                alt="Le Siège Logo" 
                className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
              />
              <div>
                <h3 className="text-2xl font-bold text-white font-['Playfair_Display']">
                  Le Siège
                </h3>
                <p className="text-[#D4AF37] text-sm font-medium">Kénitra</p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed text-sm">
              Votre destination beauté à Kénitra. Excellence, créativité et savoir-faire au service de votre style depuis plus d&apos;une décennie.
            </p>

            {/* Rating Display */}
            <div className="flex items-center space-x-2 bg-white/5 rounded-xl p-3 border border-[#D4AF37]/20">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>
              <span className="text-white font-bold text-sm">4.9/5</span>
              <span className="text-gray-400 text-xs">1000+ avis</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 glass-dark rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 backdrop-blur-xl group`}
                >
                  <social.icon className="w-5 h-5 group-hover:animate-pulse" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-['Playfair_Display'] flex items-center">
              <Sparkles className="w-5 h-5 text-[#D4AF37] mr-2" />
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 h-px bg-[#D4AF37] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-['Playfair_Display'] flex items-center">
              <Scissors className="w-5 h-5 text-[#D4AF37] mr-2" />
              Services Populaires
            </h4>
            <ul className="space-y-3">
              {popularServices.map((service, index) => (
                <li key={index} className="flex items-center justify-between text-sm group">
                  <span className="text-gray-400 group-hover:text-[#D4AF37] transition-colors">
                    {service.name}
                  </span>
                  <span className="text-[#D4AF37] font-semibold">
                    {service.price}
                  </span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => scrollToSection('#services')}
              className="mt-6 text-sm text-[#D4AF37] hover:text-[#E5C965] font-medium flex items-center group"
            >
              Voir tous les services
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-['Playfair_Display'] flex items-center">
              <Phone className="w-5 h-5 text-[#D4AF37] mr-2" />
              Contact
            </h4>
            
            <div className="space-y-4 mb-6">
              <a href="tel:+212XXXXXXXXX" className="flex items-start space-x-3 text-sm text-gray-400 hover:text-[#D4AF37] transition-colors group">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:animate-bounce" />
                <span>+212 XXX-XXXXXX</span>
              </a>
              
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=34.26276407307847,-6.595275024274479"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-sm text-gray-400 hover:text-[#D4AF37] transition-colors group"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:animate-bounce" />
                <span>RUE HOUMANE EL FATOUAKI IMMEUBLE 49, Kénitra</span>
              </a>
              
              <div className="flex items-start space-x-3 text-sm text-gray-400">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Lun-Dim: 10h00 - 22h00</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="text-white font-semibold text-sm mb-3 flex items-center">
                <Mail className="w-4 h-4 text-[#D4AF37] mr-2" />
                Newsletter
              </h5>
              {!subscribed ? (
                <div className="flex space-x-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email"
                    className="flex-1 px-3 py-2 bg-white/5 border border-[#D4AF37]/20 rounded-lg text-white text-sm placeholder-gray-500 focus:border-[#D4AF37]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="bg-gradient-to-r from-[#D4AF37] to-[#E5C965] hover:from-[#E5C965] hover:to-[#D4AF37] text-black p-2 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="bg-[#D4AF37]/20 border border-[#D4AF37]/50 rounded-lg p-3 text-sm text-[#D4AF37] font-medium flex items-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Inscription réussie !
                </div>
              )}
              <p className="text-gray-500 text-xs mt-2">
                Recevez nos offres exclusives
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#D4AF37]/20"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-black px-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></div>
                <Scissors className="w-6 h-6 text-[#D4AF37]" />
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse animation-delay-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} <span className="text-[#D4AF37] font-semibold">Le Siège</span>. Tous droits réservés.
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Developed & Designed by</span>
            <a 
              href="https://mohamedsekkar.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:text-[#E5C965] font-semibold transition-colors"
            >
              mohamedsekkar.com
            </a>
            <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37] animate-pulse" />
          </div>

          <div className="flex space-x-6 text-gray-400 text-sm">
            <button className="hover:text-[#D4AF37] transition-colors">
              Politique de confidentialité
            </button>
            <button className="hover:text-[#D4AF37] transition-colors">
              Conditions d&apos;utilisation
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
    </footer>
  );
};

export default Footer;