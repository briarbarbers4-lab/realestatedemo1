import { Facebook, Instagram, Linkedin, Twitter, Building2, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="bg-black text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-8 h-8 text-white" />
              <span className="text-2xl font-serif font-bold text-white">Prestige Realty</span>
            </div>
            <p className="text-gray-500 mb-6 max-w-md text-sm leading-relaxed font-light">
              Your trusted partner in luxury real estate. Connecting discerning clients with
              exceptional properties in the most prestigious locations.
            </p>

            <form onSubmit={handleSubscribe} className="mb-4">
              <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">
                Exclusive Listings Newsletter
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-10 pr-3 py-2.5 text-sm bg-white/5 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-white text-black text-sm rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:col-span-2">
            <div>
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-300 text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-300 text-sm">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-300 text-sm">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-300 text-sm">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Properties</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-300 text-sm">
                    Buy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-300 text-sm">
                    Sell
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-300 text-sm">
                    Rent
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-300 text-sm">
                    Commercial
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="tel:+15551234567" className="hover:text-white transition-colors duration-300 text-sm">
                    +1 (555) 123-4567
                  </a>
                </li>
                <li>
                  <a href="mailto:info@prestigerealty.com" className="hover:text-white transition-colors duration-300 text-sm">
                    info@prestigerealty.com
                  </a>
                </li>
                <li className="text-gray-500 text-sm pt-1">
                  123 Luxury Avenue<br />
                  New York, NY 10001
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Prestige Realty. All rights reserved.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 border border-gray-800 hover:border-white"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 border border-gray-800 hover:border-white"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 border border-gray-800 hover:border-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 border border-gray-800 hover:border-white"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            <div className="flex gap-4 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
