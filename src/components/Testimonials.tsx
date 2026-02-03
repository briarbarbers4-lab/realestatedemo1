import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    content: 'Prestige Realty made our dream home a reality. Their attention to detail and market knowledge is unmatched. The entire process was seamless, and we couldn\'t be happier with our new property.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Property Investor',
    content: 'Working with Prestige Realty has been an absolute pleasure. Their team provided invaluable insights that helped me make informed investment decisions. Truly exceptional service.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'First-Time Buyer',
    content: 'As a first-time buyer, I was nervous about the process. The team at Prestige Realty guided me every step of the way with patience and expertise. I found the perfect home thanks to them.',
    rating: 5,
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
];

import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Testimonials() {
  const { elementRef, isVisible } = useScrollReveal(0.1);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" ref={elementRef} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-gray-700/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-gray-800/10 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className={`text-center mb-12 ${isVisible ? 'animate-reveal-up' : ''}`}>
          <div className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-gray-300 text-xs font-semibold mb-4">
            Client Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
            Client <span className="font-serif italic">Testimonials</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto font-light">
            Discover what our satisfied clients have to say
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 md:p-10 shadow-2xl max-w-3xl mx-auto relative border border-gray-100">
                    <Quote className="absolute top-6 left-6 w-12 h-12 text-gray-100" />

                    <div className="flex flex-col items-center text-center relative z-10">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-white shadow-xl"
                      />

                      <div className="flex gap-1 mb-5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-black text-black" />
                        ))}
                      </div>

                      <p className="text-base md:text-lg text-gray-700 mb-5 leading-relaxed italic font-light">
                        "{testimonial.content}"
                      </p>

                      <h4 className="text-lg font-serif font-bold text-black mb-1">{testimonial.name}</h4>
                      <p className="text-gray-500 font-semibold uppercase tracking-wider text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
