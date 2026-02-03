import { useState } from 'react';
import emptyRoom from '../images/visualizer-empty.png';
import modernRoom from '../images/visualizer-modern.png';

export default function PropertyVisualizer() {
    const [activeStyle, setActiveStyle] = useState<'empty' | 'modern'>('modern');
    const [isAnimating, setIsAnimating] = useState(false);

    const handleStyleChange = (style: 'empty' | 'modern') => {
        if (style === activeStyle) return;
        setIsAnimating(true);
        setTimeout(() => {
            setActiveStyle(style);
            setIsAnimating(false);
        }, 300); // Wait for fade out
    };

    return (
        <section className="py-24 bg-white" id="visualizer">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-light tracking-[0.2em] mb-6 uppercase text-gray-900">
                        Visualize Your Future
                    </h2>
                    <p className="text-gray-500 max-w-3xl mx-auto font-light text-lg tracking-wide leading-relaxed">
                        Experience the potential of our unblemished canvases. Toggle between the raw architectural beauty and a curated modern design concept.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Visualizer Container */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl bg-gray-100 group">
                        {/* Images */}
                        <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
                            <img
                                src={emptyRoom}
                                alt="Empty Room"
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${activeStyle === 'empty' ? 'opacity-100' : 'opacity-0'}`}
                            />
                            <img
                                src={modernRoom}
                                alt="Modern Furnished Room"
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${activeStyle === 'modern' ? 'opacity-100' : 'opacity-0'}`}
                            />
                        </div>

                        {/* Overlay Controls (Bottom Center) */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 shadow-lg z-20">
                            <button
                                onClick={() => handleStyleChange('empty')}
                                className={`px-6 py-2 rounded-full text-sm font-medium tracking-widest uppercase transition-all duration-300 ${activeStyle === 'empty'
                                        ? 'bg-white text-gray-900 shadow-md transform scale-105'
                                        : 'text-white hover:bg-white/10'
                                    }`}
                            >
                                Empty Shell
                            </button>
                            <button
                                onClick={() => handleStyleChange('modern')}
                                className={`px-6 py-2 rounded-full text-sm font-medium tracking-widest uppercase transition-all duration-300 ${activeStyle === 'modern'
                                        ? 'bg-white text-gray-900 shadow-md transform scale-105'
                                        : 'text-white hover:bg-white/10'
                                    }`}
                            >
                                Modern Suite
                            </button>
                        </div>

                        {/* Interactive Tooltip Hint */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}>
                            <div className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs tracking-widest uppercase border border-white/10">
                                Drag to Compare (Coming Soon)
                            </div>
                        </div>
                    </div>

                    {/* Feature Description */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div>
                            <h3 className="text-xl font-serif mb-4 text-gray-900">The Power of Staging</h3>
                            <p className="text-gray-500 font-light leading-relaxed">
                                90% of buyers find it difficult to visualize a property's potential. Our bespoke 3D staging service allows you to see exactly how Italian marble floors complement minimalist furniture layouts before you move in.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-serif mb-4 text-gray-900">Customization Options</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-500 font-light">
                                    <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                                    Bespoke Furniture Packages
                                </li>
                                <li className="flex items-center text-gray-500 font-light">
                                    <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                                    Smart Home Integration Planning
                                </li>
                                <li className="flex items-center text-gray-500 font-light">
                                    <span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>
                                    Interior Design Consultation Included
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
