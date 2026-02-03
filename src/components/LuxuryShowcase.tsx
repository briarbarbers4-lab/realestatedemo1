import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { useState } from 'react';

const showcaseProperties = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Architectural Masterpiece',
    location: 'Beverly Hills, California',
    price: '$12,500,000',
    description: 'A stunning contemporary estate featuring floor-to-ceiling windows and infinity pool'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Sky-High Luxury',
    location: 'Manhattan, New York',
    price: '$18,900,000',
    description: 'Exclusive penthouse with panoramic city views and private rooftop terrace'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Oceanfront Paradise',
    location: 'Malibu, California',
    price: '$22,000,000',
    description: 'Breathtaking beachfront villa with direct ocean access and private beach'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Modern Estate',
    location: 'Miami Beach, Florida',
    price: '$15,750,000',
    description: 'Ultra-modern waterfront mansion with yacht dock and entertainment pavilion'
  }
];

import { useScrollReveal } from '../hooks/useScrollReveal';

export default function LuxuryShowcase() {
  const { elementRef, isVisible } = useScrollReveal(0.1);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseProperties.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseProperties.length) % showcaseProperties.length);
  };

  return (
    <section ref={elementRef} className="relative h-[85vh] w-full bg-black overflow-hidden">
      <div className="absolute inset-0">
        {showcaseProperties.map((property, index) => (
          <div
            key={property.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-10 lg:px-16 pb-16">
        <div className={`max-w-3xl ${isVisible ? 'animate-reveal-up' : ''}`}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-semibold mb-4">
            <MapPin className="w-3.5 h-3.5" />
            {showcaseProperties[currentSlide].location}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-3 tracking-tight">
            {showcaseProperties[currentSlide].title}
          </h2>

          <p className="text-base text-gray-300 mb-4 max-w-xl font-light leading-relaxed">
            {showcaseProperties[currentSlide].description}
          </p>

          <div className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
            {showcaseProperties[currentSlide].price}
          </div>

          <button className="group inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105">
            Schedule Private Tour
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        <div className="absolute bottom-16 right-10 flex gap-3">
          <button
            onClick={prevSlide}
            className="group w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            aria-label="Previous property"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="group w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            aria-label="Next property"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {showcaseProperties.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-10 h-1 bg-white'
                : 'w-6 h-1 bg-white/30 hover:bg-white/50'
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
