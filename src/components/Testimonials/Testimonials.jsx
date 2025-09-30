'use client';

import { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, Heart, ThumbsUp } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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

  const testimonials = [
    {
      name: "Mohammed Bouayoun",
      review: "Sara7a Le Siège Salon de coiffure High Level. L'équipe jamila, l'endroit perfect Machallah",
      rating: 5,
      avatar: "MB",
      gradient: "from-[#D4AF37] to-[#E5C965]"
    },
    {
      name: "Zerrouk Issam",
      review: "Un excellant choix pour une coupe de cheveux, service impeccable avec un staff accueillant et professionnel, je le recommande vivement 👍",
      rating: 5,
      avatar: "ZI",
      gradient: "from-[#E5C965] to-[#D4AF37]"
    },
    {
      name: "Youssef M.",
      review: "Excellent experience. Professional team, quality service. I recommend!",
      rating: 5,
      avatar: "YM",
      gradient: "from-[#D4AF37] to-[#B8941F]"
    },
    {
      name: "Jr Srrn",
      review: "Accueil, cadre, propreté, prestation, tout est au niveau attendu. Bravo à l'équipe extrêmement sympathique",
      rating: 5,
      avatar: "JS",
      gradient: "from-[#E5C965] to-[#B8941F]"
    },
    {
      name: "Abdelilah Hadri",
      review: "Équipe très professionnel, cadre convivial, service impeccable, je le recommande vivement",
      rating: 5,
      avatar: "AH",
      gradient: "from-[#D4AF37] to-[#E5C965]"
    }
  ];

  const stats = [
    { icon: Star, number: "4.9/5", label: "Note Moyenne" },
    { icon: Heart, number: "1000+", label: "Avis Positifs" },
    { icon: ThumbsUp, number: "98%", label: "Recommandations" }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section 
      id="testimonials" 
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
            <Quote className="w-4 h-4 mr-2 animate-pulse" />
            Témoignages
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-['Playfair_Display']">
            <span className="text-white block mb-3">Ce Que Disent </span>
            <span className="gradient-gold text-6xl md:text-7xl lg:text-8xl">Nos Clients</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            La satisfaction de nos clients est notre plus belle récompense
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto ${isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative glass-dark rounded-2xl p-8 text-center border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 hover:scale-105 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/10 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
              
              <div className="relative w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#E5C965] rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-6 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-black" />
              </div>
              <div className="relative text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E5C965] mb-2 font-['Playfair_Display']">
                {stat.number}
              </div>
              <div className="relative text-sm text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className={`max-w-5xl mx-auto ${isVisible ? 'animate-fade-in animation-delay-400' : 'opacity-0'}`}>
          <div className="relative">
            
            {/* Main Testimonial Card */}
            <div className="glass-dark rounded-3xl p-8 md:p-12 border border-[#D4AF37]/30 backdrop-blur-xl min-h-[400px] flex flex-col justify-between">
              
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-[#D4AF37]/20 to-[#E5C965]/20 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-[#D4AF37]" />
              </div>

              {/* Testimonial Content */}
              <div className="relative mt-16">
                <div className="flex items-center justify-center mb-6">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37] mx-1" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed text-center mb-8 min-h-[120px] flex items-center justify-center">
                  &ldquo;{testimonials[currentSlide].review}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[currentSlide].gradient} flex items-center justify-center text-2xl font-bold text-black mb-4 shadow-lg`}>
                    {testimonials[currentSlide].avatar}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1 font-['Playfair_Display']">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-gray-400 text-sm">Client vérifié</p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-center space-x-4 mt-8">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 glass-dark rounded-full flex items-center justify-center text-white hover:text-[#D4AF37] transition-all duration-300 border border-[#D4AF37]/30 hover:border-[#D4AF37]/50 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Dots Navigation */}
                <div className="flex items-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentSlide
                          ? 'w-10 h-3 bg-gradient-to-r from-[#D4AF37] to-[#E5C965]'
                          : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="w-12 h-12 glass-dark rounded-full flex items-center justify-center text-white hover:text-[#D4AF37] transition-all duration-300 border border-[#D4AF37]/30 hover:border-[#D4AF37]/50 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* All Reviews Grid (Hidden on Mobile) */}
          <div className="hidden lg:grid grid-cols-5 gap-4 mt-8">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`group relative glass-dark rounded-xl p-4 border transition-all duration-300 hover:scale-105 backdrop-blur-xl ${
                  index === currentSlide
                    ? 'border-[#D4AF37]/50 bg-[#D4AF37]/10'
                    : 'border-[#D4AF37]/20 hover:border-[#D4AF37]/40'
                }`}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-sm font-bold text-black mx-auto mb-2`}>
                  {testimonial.avatar}
                </div>
                <p className="text-white text-xs font-medium text-center line-clamp-1">
                  {testimonial.name}
                </p>
                <div className="flex justify-center mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 ${isVisible ? 'animate-fade-in animation-delay-600' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 text-gray-400 mb-6">
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm font-medium">Rejoignez nos clients satisfaits</span>
          </div>
          {/* <button
            onClick={() => window.location.href = '#contact'}
            className="bg-gradient-to-r from-[#D4AF37] to-[#E5C965] hover:from-[#E5C965] hover:to-[#D4AF37] text-black px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105"
          >
            Prenez Rendez-vous
          </button> */}
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

export default Testimonials;