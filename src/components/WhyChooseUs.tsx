import { Shield, Award, Users, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Trusted Agents',
    description: 'Licensed professionals with extensive market knowledge and proven track records in luxury real estate.'
  },
  {
    icon: Award,
    title: 'Premium Listings',
    description: 'Exclusive access to the finest properties in the most sought-after locations nationwide.'
  },
  {
    icon: Users,
    title: 'Tailored Services',
    description: 'Personalized approach tailored to your unique needs, preferences, and investment goals.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock assistance ensuring you receive immediate attention whenever you need it.'
  }
];

import { useScrollReveal } from '../hooks/useScrollReveal';

export default function WhyChooseUs() {
  const { elementRef, isVisible } = useScrollReveal(0.1);
  return (
    <section id="why-choose-us" ref={elementRef} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gray-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gray-300 rounded-full blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-12 ${isVisible ? 'animate-reveal-up' : ''}`}>
          <div className="inline-block px-3 py-1.5 bg-black/5 backdrop-blur-sm border border-black/10 rounded-full text-gray-600 text-xs font-semibold mb-4">
            Our Advantages
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-black mb-4 tracking-tight">
            Why Choose <span className="font-serif italic">Us</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto font-light">
            Experience excellence in every aspect of your real estate journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white/70 backdrop-blur-xl p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-gray-200/50 hover:border-gray-300 overflow-hidden ${
                isVisible ? 'animate-reveal-up' : ''
              } animate-stagger-${index + 1}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-navy-900 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-serif font-bold text-black mb-2 group-hover:text-navy-900 transition-colors duration-300">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
