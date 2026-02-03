import { Building2, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-xl shadow-2xl py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 bg-navy-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-lg font-serif font-bold hidden sm:block">
              Dubai Luxury Estates
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('properties')}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-300 relative group"
            >
              Properties
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('why-dubai')}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-300 relative group"
            >
              Why Dubai
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-300 relative group"
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-navy-900 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:shadow-xl hover:shadow-navy-900/30 hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection('properties')}
              className="block w-full text-left text-gray-300 hover:text-white font-medium py-2 transition-colors duration-300"
            >
              Properties
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-300 hover:text-white font-medium py-2 transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('why-dubai')}
              className="block w-full text-left text-gray-300 hover:text-white font-medium py-2 transition-colors duration-300"
            >
              Why Dubai
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-gray-300 hover:text-white font-medium py-2 transition-colors duration-300"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-navy-900 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:shadow-xl hover:shadow-navy-900/30 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
