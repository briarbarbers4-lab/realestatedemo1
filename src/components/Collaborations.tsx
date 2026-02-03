import { useEffect, useState, useRef } from 'react';
// Importing images normally assuming Vite handles them
// If images are in public/images, we can use string paths, but since I put them in src/images, I need to import them or use dynamic import.
// For Vite, imports are best.
import collab1 from '../images/collab-1.png';
import collab2 from '../images/collab-2.png';
import collab3 from '../images/collab-3.png';
import collab4 from '../images/collab-4.png';

export default function Collaborations() {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        // Only animate when visible to save performance
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            // We calculate an offset relative to when the section enters the viewport
            // This ensures consistent behavior
             setOffset(scrollY * 0.05); // Speed factor
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const brands = [
    "ROBERTO CAVALLI",
    "MANDARIN ORIENTAL",
    "de GRISOGONO",
    "CHELSEA FC",
    "PARAMOUNT HOTELS",
    "THE TRUMP ORGANIZATION",
    "RADISSON",
    "ROTANA"
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden relative" id="collaborations">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-24 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <h2 className="text-3xl md:text-5xl font-light tracking-[0.2em] mb-6 uppercase text-gray-900">
            A New Realm of Curated Collaborations
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto font-light text-lg tracking-wide leading-relaxed">
            Dubai Luxury Estates has worked closely with some of the world's most sought-after purveyors of luxury to create truly exquisite environments.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32 max-w-6xl mx-auto">
          {brands.map((brand, idx) => (
            <div key={idx} className="flex items-center justify-center group">
               {/* Using text as a placeholder for logos to maintain high aesthetic without low-res placeholders */}
               <span className="text-xl md:text-2xl font-serif text-gray-400 group-hover:text-black transition-colors duration-500 cursor-default text-center tracking-widest uppercase">
                 {brand}
               </span>
            </div>
          ))}
        </div>

        {/* Parallax Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-[600px] lg:h-[800px] items-start">
          
          {/* Column 1 - Slower / Normal */}
          <div className="space-y-8 pt-12">
             <div className="aspect-[3/4] overflow-hidden relative group rounded-sm shadow-sm">
                <img src={collab1} alt="Roberto Cavalli Design" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                <div className="absolute bottom-8 left-0 w-full text-center">
                   <p className="text-white text-lg tracking-[0.2em] font-light uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">Roberto Cavalli</p>
                </div>
             </div>
          </div>

          {/* Column 2 - Faster / Moves Up */}
          <div className="space-y-8" style={{ transform: `translateY(-${offset * 1.5}px)` }}>
             <div className="aspect-[3/5] overflow-hidden relative group rounded-sm shadow-sm">
                <img src={collab3} alt="de GRISOGONO Design" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                <div className="absolute bottom-8 left-0 w-full text-center">
                   <p className="text-white text-lg tracking-[0.2em] font-light uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">de GRISOGONO</p>
                </div>
             </div>
          </div>

          {/* Column 3 - Normal */}
          <div className="space-y-8 pt-24">
             <div className="aspect-[3/4] overflow-hidden relative group rounded-sm shadow-sm">
                <img src={collab2} alt="Paramount Hotels" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                <div className="absolute bottom-8 left-0 w-full text-center">
                   <p className="text-white text-lg tracking-[0.2em] font-light uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">Paramount</p>
                </div>
             </div>
          </div>

          {/* Column 4 - Faster / Moves Up */}
          <div className="space-y-8" style={{ transform: `translateY(-${offset * 2}px)` }}>
             <div className="aspect-[3/5] overflow-hidden relative group rounded-sm shadow-sm mt-12">
                <img src={collab4} alt="Mandarin Oriental" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                <div className="absolute bottom-8 left-0 w-full text-center">
                   <p className="text-white text-lg tracking-[0.2em] font-light uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">Mandarin Oriental</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
