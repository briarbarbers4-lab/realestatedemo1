import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CTA() {
  const { elementRef, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={elementRef} className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-ken-burns-slow">
          <img
            src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Dubai skyline"
            className="w-full h-full object-cover scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
      </div>

      <div className={`relative z-10 max-w-4xl mx-auto text-center ${isVisible ? 'animate-reveal-up' : ''}`}>
        <div className="inline-block px-3 py-1.5 bg-navy-900/40 backdrop-blur-sm border border-navy-900/50 rounded-full text-blue-200 text-xs font-semibold mb-5">
          Get Started Today
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">
          Ready to Own Your
          <br />
          <span className="font-serif italic bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-300 bg-clip-text text-transparent">
            Dubai Dream Home?
          </span>
        </h2>

        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
          Connect with our expert team today and take the first step toward your luxury property investment
        </p>

        <button className="group inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:shadow-2xl hover:shadow-navy-900/30 hover:scale-105 transition-all duration-500 relative overflow-hidden">
          <span className="absolute inset-0 bg-navy-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          <span className="relative z-10">Book a Consultation</span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
        </button>

        <div className="mt-10 flex flex-wrap justify-center gap-8 text-white">
          <div className="group text-center">
            <div className="text-3xl md:text-4xl font-serif font-bold mb-1 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-blue-200 to-cyan-100 bg-clip-text text-transparent">15+</div>
            <div className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Prime Locations</div>
          </div>
          <div className="w-px bg-gray-700/50"></div>
          <div className="group text-center">
            <div className="text-3xl md:text-4xl font-serif font-bold mb-1 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-blue-200 to-cyan-100 bg-clip-text text-transparent">AED 5B+</div>
            <div className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Properties Sold</div>
          </div>
          <div className="w-px bg-gray-700/50"></div>
          <div className="group text-center">
            <div className="text-3xl md:text-4xl font-serif font-bold mb-1 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-blue-200 to-cyan-100 bg-clip-text text-transparent">500+</div>
            <div className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
