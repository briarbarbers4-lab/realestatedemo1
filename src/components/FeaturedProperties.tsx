import { MapPin, Bed, Bath, Square, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const properties = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Luxury Villa Palm Jumeirah',
    location: 'Palm Jumeirah, Dubai',
    price: 'AED 25,000,000',
    beds: 6,
    baths: 7,
    sqft: '12,500'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Burj Khalifa Penthouse',
    location: 'Downtown Dubai',
    price: 'AED 45,000,000',
    beds: 5,
    baths: 6,
    sqft: '10,800'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Beachfront Villa',
    location: 'Jumeirah Beach, Dubai',
    price: 'AED 32,000,000',
    beds: 7,
    baths: 8,
    sqft: '15,200'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Emirates Hills Mansion',
    location: 'Emirates Hills, Dubai',
    price: 'AED 55,000,000',
    beds: 8,
    baths: 10,
    sqft: '18,000'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Marina Tower Apartment',
    location: 'Dubai Marina',
    price: 'AED 8,500,000',
    beds: 3,
    baths: 4,
    sqft: '4,200'
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Arabian Ranches Villa',
    location: 'Arabian Ranches, Dubai',
    price: 'AED 12,000,000',
    beds: 5,
    baths: 6,
    sqft: '8,500'
  }
];

export default function FeaturedProperties() {
  const { elementRef, isVisible } = useScrollReveal(0.1);

  return (
    <section id="properties" ref={elementRef} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-navy-900/5 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-navy-800/5 rounded-full blur-3xl opacity-15"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-12 ${isVisible ? 'animate-reveal-up' : ''}`}>
          <div className="inline-block px-3 py-1.5 bg-navy-900/10 backdrop-blur-sm border border-navy-900/20 rounded-full text-navy-900 text-xs font-semibold mb-4">
            Premium Collection
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-black mb-4 tracking-tight">
            Featured <span className="font-serif italic text-navy-900">Properties</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto font-light">
            Handpicked selection of extraordinary homes in Dubai's most prestigious locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className={`group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-navy-900/30 transition-all duration-700 hover:shadow-2xl hover:shadow-navy-900/10 ${
                isVisible ? 'animate-reveal-up' : ''
              } animate-stagger-${(index % 6) + 1}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>

              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-navy-900 text-white px-4 py-1.5 rounded-lg font-semibold text-sm shadow-lg">
                    {property.price}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-serif font-bold text-black mb-2 group-hover:text-navy-900 transition-colors duration-300">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-500 mb-4 text-sm">
                  <MapPin className="w-3.5 h-3.5 mr-1.5 group-hover:text-navy-900 transition-colors duration-300" />
                  <span className="font-medium">{property.location}</span>
                </div>

                <div className="flex items-center justify-between text-gray-700 mb-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-1.5 group/icon">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover/icon:bg-navy-900 group-hover/icon:text-white transition-all duration-300">
                      <Bed className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-sm">{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1.5 group/icon">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover/icon:bg-navy-900 group-hover/icon:text-white transition-all duration-300">
                      <Bath className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-sm">{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1.5 group/icon">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover/icon:bg-navy-900 group-hover/icon:text-white transition-all duration-300">
                      <Square className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-sm">{property.sqft}</span>
                  </div>
                </div>

                <button className="group/btn w-full bg-navy-900 text-white py-3 px-5 rounded-lg text-sm font-semibold hover:shadow-2xl hover:shadow-navy-900/30 transition-all duration-500 flex items-center justify-center gap-2 relative overflow-hidden">
                  <span className="absolute inset-0 bg-navy-800 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative z-10">View Details</span>
                  <ChevronRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
