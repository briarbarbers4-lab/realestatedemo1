import { TrendingUp, Home, Shield, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const benefits = [
  {
    icon: TrendingUp,
    title: '0% Tax Benefits',
    description: 'No income tax, no capital gains tax, and no property tax making Dubai an ideal investment destination.'
  },
  {
    icon: Sparkles,
    title: 'Luxury Lifestyle',
    description: 'World-class amenities, pristine beaches, and iconic landmarks creating an unparalleled living experience.'
  },
  {
    icon: Home,
    title: 'High ROI',
    description: 'Average rental yields of 5-9% with strong capital appreciation in prime locations.'
  },
  {
    icon: Shield,
    title: 'Safe Investment',
    description: 'Stable economy, strong legal framework, and freehold ownership for international investors.'
  }
];

export default function WhyDubai() {
  const { elementRef, isVisible } = useScrollReveal(0.1);

  return (
    <section id="why-dubai" ref={elementRef} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-navy-900/5 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-navy-800/5 rounded-full blur-3xl opacity-15"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-12 ${isVisible ? 'animate-reveal-up' : ''}`}>
          <div className="inline-block px-3 py-1.5 bg-navy-900/10 backdrop-blur-sm border border-navy-900/20 rounded-full text-navy-900 text-xs font-semibold mb-4">
            Investment Opportunity
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-black mb-4 tracking-tight">
            Why Invest in <span className="font-serif italic text-navy-900">Dubai</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto font-light">
            Discover the advantages of owning luxury property in one of the world's fastest-growing cities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-navy-900/10 transition-all duration-700 transform hover:-translate-y-2 border border-gray-200 hover:border-navy-900/30 overflow-hidden ${
                isVisible ? 'animate-reveal-up' : ''
              } animate-stagger-${index + 1}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-navy-900 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-serif font-bold text-black mb-2 group-hover:text-navy-900 transition-colors duration-300">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
