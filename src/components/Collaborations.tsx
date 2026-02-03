import { useEffect, useState, useRef } from 'react';
import collab1 from '../images/collab-1.png';
import collab2 from '../images/collab-2.png';
import collab3 from '../images/collab-3.png';
import collab4 from '../images/collab-4.png';
import collab5 from '../images/collab-5.jpg';
import collab6 from '../images/collab-6.jpg';
import collab7 from '../images/collab-7.jpg';
import collab8 from '../images/collab-8.jpg';
import collab9 from '../images/collab-9.jpg';
import collab10 from '../images/collab-10.jpg';
import collab11 from '../images/collab-11.jpg';

export default function Collaborations() {
    const [offset, setOffset] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const scrollY = window.scrollY;
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    setOffset(scrollY * 0.05);
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
                            <span className="text-xl md:text-2xl font-serif text-gray-400 group-hover:text-black transition-colors duration-500 cursor-default text-center tracking-widest uppercase">
                                {brand}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Parallax Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start min-h-[1200px]">

                    {/* Column 1 - Slower / Normal */}
                    <div className="space-y-6 pt-12 flex flex-col">
                        <div className="aspect-[3/4] overflow-hidden relative group rounded-sm shadow-sm">
                            <img src={collab1} alt="Roberto Cavalli Design" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                            <div className="absolute bottom-8 left-0 w-full text-center">
                                <p className="text-white text-lg tracking-[0.2em] font-light uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">Roberto Cavalli</p>
                            </div>
                        </div>
                        <div className="aspect-[3/5] overflow-hidden relative group rounded-sm shadow-sm">
                            <img src={collab5} alt="Luxury Architecture" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                            <div className="absolute bottom-8 left-0 w-full text-center">
                                <p className="text-white text-lg tracking-[0.2em] font-light uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">Modern Luxury</p>
                            </div>
                        </div>
                        <div className="aspect-[4/5] overflow-hidden relative group rounded-sm shadow-sm">
                            <img src={collab10} alt="Future Structure" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                            <div className="absolute bottom-8 left-0 w-full text-center">
                                <p className="text-white text-lg tracking-[0.2em] font-light uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">Avant-Garde</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 - Faster / Moves Up */}
                    <div className="space-y-6 flex flex-col" style={{ transform: `translateY(-${offset * 1.5}px)` }}>
                        <div className="aspect-[3/5] overflow-hidden relative group rounded-sm shadow-sm">
                            <img src={collab3} alt="de GRISOGONO Design" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                            <div className="absolute bottom-8 left-0 w-full text-center">
                                <p className="text-white text-lg tracking-[0.2em] font-light uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">de GRISOGONO</p>
                            </div>
                        </div>
                        <div className="aspect-[3/4] overflow-hidden relative group rounded-sm shadow-sm">
                            <img src={collab6} alt="Sky High Living" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                            <div className="absolute bottom-8 left-0 w-full text-center">
                                <p className="text-white text-lg tracking-[0.2em] font-light uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">Sky High</p>
                            </div>
                        </div>
                        <div className="aspect-[4/5] overflow-hidden relative group rounded-sm shadow-sm">
                            <img src={collab9} alt="Urban Elegance" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                            <div className="absolute bottom-8 left-0 w-full text-center">
                                <p className="text-white text-lg tracking-[0.2em] font-light uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">Urban Elegance</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 3 - Normal */}
                    <div className="space-y-6 pt-24 flex flex-col">
                        <div className="aspect-[3/4] overflow-hidden relative group rounded-sm shadow-sm">
                            <img src={collab2} alt="Paramount Hotels" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                            <div className="absolute bottom-8 left-0 w-full text-center">
                                <p className="text-white text-lg tracking-[0.2em] font-light uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">Paramount</p>
                            </div>
                        </div>
                        <div className="aspect-[3/5] overflow-hidden relative group rounded-sm shadow-sm">
                            <img src={collab7} alt="Night Scape" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                            <div className="absolute bottom-8 left-0 w-full text-center">
                                <p className="text-white text-lg tracking-[0.2em] font-light uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">Night Scape</p>
                            </div>
                        </div>
                        <div className="aspect-[3/5] overflow-hidden relative group rounded-sm shadow-sm">
                            <img src={collab11} alt="Green Living" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                            <div className="absolute bottom-8 left-0 w-full text-center">
                                <p className="text-white text-lg tracking-[0.2em] font-light uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">Sustainable Luxury</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 4 - Faster / Moves Up */}
                    <div className="space-y-6 flex flex-col" style={{ transform: `translateY(-${offset * 2}px)` }}>
                        <div className="aspect-[3/5] overflow-hidden relative group rounded-sm shadow-sm mt-12">
                            <img src={collab4} alt="Mandarin Oriental" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                            <div className="absolute bottom-8 left-0 w-full text-center">
                                <p className="text-white text-lg tracking-[0.2em] font-light uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">Mandarin Oriental</p>
                            </div>
                        </div>
                        <div className="aspect-[3/4] overflow-hidden relative group rounded-sm shadow-sm">
                            <img src={collab8} alt="Futuristic Living" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                            <div className="absolute bottom-8 left-0 w-full text-center">
                                <p className="text-white text-lg tracking-[0.2em] font-light uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">Futuristic</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
