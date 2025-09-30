'use client';

import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, Mail, Send, MessageCircle, Instagram, Calendar, Sparkles, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: "+212 XXX-XXXXXX",
      link: "tel:+212XXXXXXXXX",
      gradient: "from-[#D4AF37] to-[#E5C965]"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "RUE HOUMANE EL FATOUAKI IMMEUBLE 49, Kénitra",
      link: "https://www.google.com/maps/dir/?api=1&destination=34.26276407307847,-6.595275024274479",
      gradient: "from-[#E5C965] to-[#D4AF37]"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun-Dim: 10h00 - 22h00",
      link: null,
      gradient: "from-[#D4AF37] to-[#B8941F]"
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@le_siege_kenitra",
      link: "https://www.instagram.com/le_siege_kenitra/",
      gradient: "from-[#E5C965] to-[#B8941F]"
    }
  ];

  const services = [
    "Coupe Classique",
    "Coupe + Barbe",
    "Soins Visage",
    "Coloration",
    "Protéine",
    "Offre Siège",
    "Autre"
  ];

  return (
    <section 
      id="contact" 
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
            <MessageCircle className="w-4 h-4 mr-2 animate-pulse" />
            Nous Contacter
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-['Playfair_Display']">
            <span className="text-white block mb-3">Prenez </span>
            <span className="gradient-gold text-6xl md:text-7xl lg:text-8xl">Rendez-vous</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Réservez dès maintenant votre moment de transformation au Siège
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-7xl mx-auto ${isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group relative glass-dark rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 hover:scale-105 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/10 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
              
              <div className={`relative w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mb-4 transform group-hover:rotate-6 transition-transform duration-300`}>
                <info.icon className="w-7 h-7 text-black" />
              </div>
              
              <h3 className="relative text-white font-bold text-lg mb-2 font-['Playfair_Display']">
                {info.title}
              </h3>
              
              {info.link ? (
                <a
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="relative text-gray-300 text-sm hover:text-[#D4AF37] transition-colors block"
                >
                  {info.content}
                </a>
              ) : (
                <p className="relative text-gray-300 text-sm">
                  {info.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-in animation-delay-400' : 'opacity-0'}`}>
            <div className="glass-dark rounded-3xl p-8 md:p-10 border border-[#D4AF37]/30 backdrop-blur-xl">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#E5C965] rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-3xl font-bold text-white font-['Playfair_Display']">
                  Réservation
                </h3>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Nom Complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-[#D4AF37]/20 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                      placeholder="Votre nom"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-[#D4AF37]/20 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                      placeholder="+212 XXX-XXXXXX"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-[#D4AF37]/20 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Service Souhaité *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-[#D4AF37]/20 rounded-xl text-white focus:border-[#D4AF37]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                    >
                      <option value="" className="bg-gray-900">Sélectionner un service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service} className="bg-gray-900">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Date Préférée *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-[#D4AF37]/20 rounded-xl text-white focus:border-[#D4AF37]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Message (optionnel)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-white/5 border border-[#D4AF37]/20 rounded-xl text-white placeholder-gray-500 focus:border-[#D4AF37]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all resize-none"
                      placeholder="Des préférences particulières ?"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#D4AF37] to-[#E5C965] hover:from-[#E5C965] hover:to-[#D4AF37] text-black py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Envoyer la demande</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#E5C965] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-black" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 font-['Playfair_Display']">
                    Demande Envoyée !
                  </h4>
                  <p className="text-gray-300">
                    Nous vous contacterons très bientôt pour confirmer votre rendez-vous
                  </p>
                </div>
              )}
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-6 glass-dark rounded-2xl p-6 border border-[#D4AF37]/20 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold mb-1">Réservation Express</h4>
                  <p className="text-gray-400 text-sm">Réservez directement via WhatsApp</p>
                </div>
                <a
                  href="https://wa.me/212XXXXXXXXX?text=Bonjour, j'aimerais réserver un rendez-vous au Siège"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white p-4 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={`${isVisible ? 'animate-fade-in animation-delay-500' : 'opacity-0'}`}>
            <div className="glass-dark rounded-3xl overflow-hidden border border-[#D4AF37]/30 backdrop-blur-xl h-full min-h-[600px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.442603512447!2d-6.595275024274479!3d34.26276407307847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7597efa83cacf%3A0x744818700c59461!2sLe%20Si%C3%A8ge%20%7C%20Salon%20de%20coiffure!5e0!3m2!1sen!2sma!4v1759200648461!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="brightness-90 contrast-110 saturate-50 hover:saturate-100 hover:brightness-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className={`text-center mt-20 ${isVisible ? 'animate-fade-in animation-delay-600' : 'opacity-0'}`}>
          <div className="glass-dark rounded-3xl p-10 max-w-4xl mx-auto border border-[#D4AF37]/30 backdrop-blur-xl">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-[#D4AF37] mr-3" />
              <h3 className="text-3xl font-bold text-white font-['Playfair_Display']">
                Nous Sommes Ouverts 7j/7
              </h3>
              <Sparkles className="w-8 h-8 text-[#D4AF37] ml-3" />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Notre équipe est à votre disposition tous les jours de 10h à 22h
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+212XXXXXXXXX"
                className="bg-gradient-to-r from-[#D4AF37] to-[#E5C965] hover:from-[#E5C965] hover:to-[#D4AF37] text-black px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#D4AF37]/50 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Appeler</span>
              </a>
              <a
                href="https://www.instagram.com/le_siege_kenitra/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 border border-[#D4AF37]/30 hover:border-[#D4AF37]/50 flex items-center space-x-2 backdrop-blur-xl"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
            </div>
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

export default Contact;