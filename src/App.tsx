import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import Collaborations from './components/Collaborations';
import LuxuryShowcase from './components/LuxuryShowcase';
import About from './components/About';
import WhyDubai from './components/WhyDubai';
import ROICalculator from './components/ROICalculator';
import PropertyVisualizer from './components/PropertyVisualizer';
import NeighborhoodExplorer from './components/NeighborhoodExplorer';
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
      <Collaborations />
      <LuxuryShowcase />
      <About />
      <WhyDubai />
      <ROICalculator />
      <PropertyVisualizer />
      <NeighborhoodExplorer />
      <Testimonials />
      <CTA />
      <ContactForm />
      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default App;
