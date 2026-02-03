import { Send } from 'lucide-react';
import { useState } from 'react';

import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ContactForm() {
  const { elementRef, isVisible } = useScrollReveal(0.1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={elementRef} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-gray-700/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-gray-800/10 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className={`text-center mb-12 ${isVisible ? 'animate-reveal-up' : ''}`}>
          <div className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-gray-300 text-xs font-semibold mb-4">
            Contact Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
            Get In <span className="font-serif italic">Touch</span>
          </h2>
          <p className="text-base text-gray-400 font-light">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={`space-y-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 ${isVisible ? 'animate-reveal-up animate-stagger-2' : ''}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-sm bg-black/30 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 focus:bg-black/40 transition-all duration-300"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-sm bg-black/30 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 focus:bg-black/40 transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-sm bg-black/30 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 focus:bg-black/40 transition-all duration-300"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 text-sm bg-black/30 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 focus:bg-black/40 transition-all duration-300 resize-none"
              placeholder="Tell us about your real estate needs..."
            />
          </div>

          <button
            type="submit"
            className="group w-full bg-white text-black py-3.5 px-6 rounded-lg font-semibold text-base hover:bg-gray-100 transition-all duration-500 flex items-center justify-center gap-2 shadow-2xl hover:shadow-white/20 hover:scale-105 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative z-10">Send Message</span>
            <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </form>
      </div>
    </section>
  );
}
