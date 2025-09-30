'use client';

import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Camera } from 'lucide-react';

const InstagramGallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80",
      title: "Notre Espace Principal",
      description: "Un salon moderne et élégant"
    },
    {
      url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80",
      title: "Stations de Coiffure",
      description: "Équipement professionnel haut de gamme"
    },
    {
      url: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80",
      title: "Zone de Soins",
      description: "Espace dédié aux traitements premium"
    },
    {
      url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
      title: "Ambiance Chaleureuse",
      description: "Un cadre raffiné pour votre détente"
    },
    {
      url: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80",
      title: "Détails Luxueux",
      description: "Chaque élément soigneusement choisi"
    },
    {
      url: "https://images.unsplash.com/photo-1599351431613-d0a7b23ef31f?w=800&q=80",
      title: "Éclairage Professionnel",
      description: "Pour un résultat parfait"
    },
    {
      url: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=800&q=80",
      title: "Espace Attente",
      description: "Confort et élégance"
    },
    {
      url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&q=80",
      title: "Notre Signature",
      description: "Excellence à chaque détail"
    },
    {
      url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80",
      title: "Style Contemporain",
      description: "Design moderne et sophistiqué"
    }
  ];

  const openLightbox = (index) => {
    setSelectedImage(galleryImages[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <section 
      id="gallery" 
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
            <Camera className="w-4 h-4 mr-2 animate-pulse" />
            Galerie
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-['Playfair_Display']">
            <span className="text-white block mb-3">Découvrez Notre </span>
            <span className="gradient-gold text-6xl md:text-7xl lg:text-8xl">Univers</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Plongez dans l&apos;ambiance unique du Siège - où luxe, modernité et élégance se rencontrent
          </p>
        </div>

        {/* Gallery Grid - Creative Masonry Layout */}
        <div className={`max-w-7xl mx-auto ${isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
            {/* Large Featured Image - Spans 2 columns and 2 rows on desktop */}
            <div 
              className="lg:col-span-2 lg:row-span-2 relative group cursor-pointer rounded-2xl overflow-hidden"
              onClick={() => openLightbox(0)}
              style={{ animation: 'fadeIn 0.6s ease-out 0s both' }}
            >
              <div className="relative h-full min-h-[300px] lg:min-h-[600px]">
                <img
                  src={galleryImages[0].url}
                  alt={galleryImages[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2 font-['Playfair_Display']">
                      {galleryImages[0].title}
                    </h3>
                    <p className="text-gray-300 text-sm">{galleryImages[0].description}</p>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 glass-dark rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[#D4AF37]/30">
                  <Maximize2 className="w-5 h-5 text-[#D4AF37]" />
                </div>
              </div>
            </div>

            {/* Regular Images */}
            {galleryImages.slice(1).map((image, index) => (
              <div
                key={index + 1}
                className={`relative group cursor-pointer rounded-2xl overflow-hidden ${
                  index === 1 || index === 4 ? 'md:row-span-2' : ''
                }`}
                onClick={() => openLightbox(index + 1)}
                style={{ animation: `fadeIn 0.6s ease-out ${(index + 1) * 0.1}s both` }}
              >
                <div className={`relative h-full ${index === 1 || index === 4 ? 'min-h-[300px]' : 'min-h-[200px]'}`}>
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-bold text-white mb-1 font-['Playfair_Display']">
                        {image.title}
                      </h3>
                      <p className="text-gray-300 text-xs">{image.description}</p>
                    </div>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 glass-dark rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[#D4AF37]/30">
                    <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 ${isVisible ? 'animate-fade-in animation-delay-600' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 text-gray-400 mb-6">
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm font-medium">Venez vivre l&apos;expérience Le Siège</span>
          </div>
          {/* <button
            onClick={() => window.location.href = '#contact'}
            className="bg-gradient-to-r from-[#D4AF37] to-[#E5C965] hover:from-[#E5C965] hover:to-[#D4AF37] text-black px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105"
          >
            Réserver Votre Visite
          </button> */}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 glass-dark rounded-full flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors border border-[#D4AF37]/30 hover:border-[#D4AF37]/50"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            className="absolute left-6 w-12 h-12 glass-dark rounded-full flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors border border-[#D4AF37]/30 hover:border-[#D4AF37]/50"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className="absolute right-6 w-12 h-12 glass-dark rounded-full flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors border border-[#D4AF37]/30 hover:border-[#D4AF37]/50"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div 
            className="max-w-6xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            
            {/* Image Info */}
            <div className="mt-6 text-center glass-dark rounded-2xl p-6 border border-[#D4AF37]/30 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-2 font-['Playfair_Display']">
                {selectedImage.title}
              </h3>
              <p className="text-gray-300">{selectedImage.description}</p>
              <p className="text-gray-500 text-sm mt-3">
                {currentIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

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

export default InstagramGallery;