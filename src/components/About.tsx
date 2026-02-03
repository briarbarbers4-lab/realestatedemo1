import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const { elementRef, isVisible } = useScrollReveal(0.1);
  return (
    <section id="about" ref={elementRef} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Modern architecture"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-gray-700/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={isVisible ? 'animate-reveal-left' : ''}>
            <div className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-gray-300 text-xs font-semibold mb-4">
              About Prestige Realty
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">
              Your Trusted <span className="font-serif italic">Real Estate</span> Partner
            </h2>
            <div className="space-y-4 text-gray-400 text-base leading-relaxed font-light">
              <p>
                With over two decades of excellence in the luxury real estate market,
                Prestige Realty has established itself as the premier choice for
                discerning clients seeking exceptional properties.
              </p>
              <p>
                Our team of seasoned professionals combines market expertise with
                personalized service to deliver unparalleled results. We understand
                that buying or selling a property is one of life's most significant
                decisions, and we're committed to making your experience seamless
                and rewarding.
              </p>
              <p>
                From exclusive waterfront estates to sophisticated urban penthouses,
                we curate a portfolio of the finest properties across the nation's
                most prestigious locations.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="group text-center">
                <div className="text-3xl font-serif font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">20+</div>
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="group text-center">
                <div className="text-3xl font-serif font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">5000+</div>
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Properties Sold</div>
              </div>
              <div className="group text-center">
                <div className="text-3xl font-serif font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className={`relative ${isVisible ? 'animate-reveal-right animate-stagger-2' : ''}`}>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury property"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-gray-700/30 to-gray-900/30 rounded-2xl -z-10 blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-br from-gray-600/20 to-gray-800/20 rounded-2xl -z-10 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
