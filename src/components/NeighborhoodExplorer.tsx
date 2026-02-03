import { useState } from 'react';
import mapBg from '../images/map-stylized.svg';

interface PointOfInterest {
    id: number;
    x: number; // Percentage
    y: number; // Percentage
    name: string;
    category: 'Dining' | 'Shopping' | 'Wellness' | 'Transport';
    description: string;
}

const points: PointOfInterest[] = [
    { id: 1, x: 25, y: 40, name: 'Palm Jumeirah Beach Club', category: 'Wellness', description: 'Exclusive private beach access with cabana service.' },
    { id: 2, x: 80, y: 20, name: 'Dubai Mall Fashion Ave', category: 'Shopping', description: 'The world\'s largest destination for luxury fashion.' },
    { id: 3, x: 75, y: 35, name: 'Burj Khalifa Atmosphere', category: 'Dining', description: 'Fine dining at 442 meters above ground.' },
    { id: 4, x: 45, y: 60, name: 'Marina Yacht Club', category: 'Wellness', description: 'Premier berthing for yachts up to 100m.' },
    { id: 5, x: 60, y: 80, name: 'Executive Helipad', category: 'Transport', description: 'Direct private aviation access.' },
    { id: 6, x: 90, y: 10, name: 'DIFC Arts Club', category: 'Dining', description: 'Cultural hub meeting Michelin starred gastronomy.' }
];

export default function NeighborhoodExplorer() {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [activePin, setActivePin] = useState<number | null>(null);

    const categories = ['All', 'Dining', 'Shopping', 'Wellness', 'Transport'];

    const filteredPoints = activeCategory === 'All'
        ? points
        : points.filter(p => p.category === activeCategory);

    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative" id="neighborhood">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-3xl md:text-5xl font-serif font-light mb-4">
                            The Center of Everything
                        </h2>
                        <p className="text-gray-400 max-w-xl font-light tracking-wide leading-relaxed">
                            Strategically positioned to offer immediate access to Dubai's most prestigious landmarks, yet secluded enough to provide absolute tranquility.
                        </p>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap gap-3">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-white/10 ${activeCategory === cat
                                        ? 'bg-amber-500 text-black border-amber-500'
                                        : 'bg-white/5 text-white hover:bg-white/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Map Container */}
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#0B1120] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                    {/* Map Background */}
                    <div className="absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100">
                        <img src={mapBg} alt="Neighborhood Map" className="w-full h-full object-cover" />
                    </div>

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />

                    {/* Pins */}
                    {filteredPoints.map((point) => (
                        <div
                            key={point.id}
                            className="absolute"
                            style={{ left: `${point.x}%`, top: `${point.y}%` }}
                        >
                            {/* Pulse Effect */}
                            <div className="relative -translate-x-1/2 -translate-y-1/2 group/pin">
                                <button
                                    className={`w-4 h-4 rounded-full border-2 transition-all duration-300 relative z-20 ${activePin === point.id ? 'bg-amber-500 border-white scale-125' : 'bg-slate-900 border-amber-500 hover:scale-125'}`}
                                    onClick={() => setActivePin(activePin === point.id ? null : point.id)}
                                    onMouseEnter={() => setActivePin(point.id)}
                                />
                                <div className={`absolute inset-0 -z-10 bg-amber-500 rounded-full animate-ping opacity-75 ${activePin === point.id ? 'block' : 'hidden'}`}></div>

                                {/* Tooltip */}
                                <div className={`absolute left-1/2 bottom-full mb-4 -translate-x-1/2 w-64 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl transition-all duration-300 origin-bottom ${activePin === point.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">{point.category}</span>
                                        <span className="text-xs text-gray-400">5 min drive</span>
                                    </div>
                                    <h4 className="text-white font-serif text-lg leading-tight mb-2">{point.name}</h4>
                                    <p className="text-gray-300 text-xs leading-relaxed">{point.description}</p>

                                    {/* Arrow */}
                                    <div className="absolute left-1/2 top-full -translate-x-1/2 -mt-2 border-8 border-transparent border-t-white/20"></div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Legend/Compass (Decorative) */}
                    <div className="absolute bottom-8 right-8 text-white/20 font-mono text-xs tracking-widest pointer-events-none select-none">
                        <div className="w-12 h-12 border-2 border-current rounded-full flex items-center justify-center mb-2">
                            <div className="w-0.5 h-4 bg-current relative">
                                <div className="absolute -top-1 left-1/2 -translate-x-1/2 text-[8px]">N</div>
                            </div>
                        </div>
                        LAT 25.2048° N<br />
                        LON 55.2708° E
                    </div>
                </div>
            </div>
        </section>
    );
}
