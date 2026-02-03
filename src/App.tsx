import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import LuxuryShowcase from './components/LuxuryShowcase';
import About from './components/About';
import WhyDubai from './components/WhyDubai';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <FeaturedProperties />
      <LuxuryShowcase />
      <About />
      <WhyDubai />
      <Testimonials />
      <CTA />
      <ContactForm />
      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default App;
