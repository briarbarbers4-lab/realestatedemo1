import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

export default function Hero() {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const typedText = useTypewriter({
    phrases: ['dream property', 'preferred property', 'place called home', 'space in Dubai'],
    typingSpeed: 80,
    deletingSpeed: 40,
    delayBetweenPhrases: 2000,
    loop: false
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = () => {
    console.log({ location, propertyType, priceRange });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://ik.imagekit.io/rqhbqqo2qx/CITY%20NIGHT%20-%20Cinematic%20Video%20%C3%AF%C2%BD_%20CITYSCAPE%204K%20%C3%AF%C2%BD_%20Free%20No%20Copyright%20Stock%20Video%20And%20Party%20Music%20(online-video-cutter.com).mp4?updatedAt=1759388848623" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-navy-900/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-navy-800/10 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white leading-tight tracking-tight">
              Find your{' '}
              <span className="font-serif italic bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-300 bg-clip-text text-transparent inline-block min-w-[240px] sm:min-w-[340px]">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Discover exceptional luxury properties in the heart of Dubai
            </p>

            <div
              className={`mt-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-4 border transition-all duration-500 animate-fade-in-up max-w-3xl mx-auto ${isFocused ? 'border-navy-900/60 shadow-2xl shadow-navy-900/20 scale-[1.02]' : 'border-white/10'
                }`}
              style={{ animationDelay: '400ms' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="px-3 py-3 text-sm bg-black/30 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-navy-900/70 focus:bg-black/40 transition-all duration-300"
                />

                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="px-3 py-3 text-sm bg-black/30 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-navy-900/70 focus:bg-black/40 transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="" className="bg-black">Property Type</option>
                  <option value="villa" className="bg-black">Villa</option>
                  <option value="apartment" className="bg-black">Apartment</option>
                  <option value="penthouse" className="bg-black">Penthouse</option>
                  <option value="townhouse" className="bg-black">Townhouse</option>
                </select>

                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="px-3 py-3 text-sm bg-black/30 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-navy-900/70 focus:bg-black/40 transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="" className="bg-black">Price Range</option>
                  <option value="0-1m" className="bg-black">Up to AED 1M</option>
                  <option value="1m-3m" className="bg-black">AED 1M - 3M</option>
                  <option value="3m-5m" className="bg-black">AED 3M - 5M</option>
                  <option value="5m-10m" className="bg-black">AED 5M - 10M</option>
                  <option value="10m+" className="bg-black">AED 10M+</option>
                </select>
              </div>

              <button
                onClick={handleSearch}
                className="group w-full bg-navy-900 text-white py-3.5 px-6 rounded-lg font-semibold text-base hover:shadow-2xl hover:shadow-navy-900/30 hover:scale-105 transition-all duration-500 flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-navy-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Search className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Explore Properties</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce-slow">
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-white/30 rounded-full animate-scroll-indicator"></div>
        </div>
      </div>
    </section>
  );
}
