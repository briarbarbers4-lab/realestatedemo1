import { Building2, Menu, X, Globe, Settings, MessageCircle, Phone, Mail, Calendar, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none">
      {/* Top Utility Bar */}
      <div className="w-full bg-black/80 backdrop-blur-sm text-gray-300 py-2 px-4 sm:px-8 flex justify-between items-center text-xs font-medium border-b border-white/10 pointer-events-auto">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
            <Globe className="w-3.5 h-3.5" />
            <span>Language: <span className="text-white">EN</span></span>
          </div>
          <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors hidden sm:flex">
            <Settings className="w-3.5 h-3.5" />
            <span>Preferences: <span className="text-white">AED / Imperial</span></span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 hover:text-white transition-colors hidden md:flex">
            <span>WhatsApp</span>
            <MessageCircle className="w-4 h-4" />
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
            <span>Call us</span>
            <Phone className="w-4 h-4" />
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-white transition-colors hidden md:flex">
            <span>Get in touch</span>
            <Mail className="w-4 h-4" />
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-white transition-colors hidden lg:flex">
            <span>Schedule call</span>
            <Calendar className="w-4 h-4" />
          </a>
          <button className="hover:text-white transition-colors">
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Spacer between Top Bar and Header */}
      <div className="h-4" />

      {/* Floating Glassmorphic Header */}
      <nav
        className={`pointer-events-auto transition-all duration-500 w-[95%] max-w-7xl rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl ${isScrolled
          ? 'bg-black/80 py-3'
          : 'bg-black/40 py-4'
          }`}
      >
        <div className="px-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2 group"
            >
              <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-white text-lg font-serif font-bold hidden sm:block">
                Dubai Luxury Estates
              </span>
            </button>

            <div className="hidden lg:flex items-center gap-8">
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
                className="bg-white text-black px-6 py-2.5 rounded-xl text-sm font-semibold hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300"
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
            <div className="lg:hidden mt-6 pb-4 space-y-4 animate-fade-in border-t border-white/10 pt-4">
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
                className="block w-full bg-white text-black px-5 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 text-center"
              >
                Contact Us
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
