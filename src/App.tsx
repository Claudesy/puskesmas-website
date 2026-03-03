// Chief's Main App - Puskesmas Balowerti Digital Sanctuary
// Cream Color Palette: #C9A87C

import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Doctors from './sections/Doctors';
import Facilities from './sections/Facilities';
import USG from './sections/USG';
import Testimonials from './sections/Testimonials';
import Reservation from './sections/Reservation';
import Location from './sections/Location';
import Footer from './sections/Footer';
import StoryScroll from './components/StoryScroll';
import PatientFlow from './sections/PatientFlow';
import Diseases from './sections/Diseases';

function App() {
  return (
    <div className="relative min-h-screen bg-[#F8F5F2]">
      {/* Dot grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage: 'radial-gradient(rgba(201,168,124,0.18) 1.5px, transparent 1.5px)',
          backgroundSize: '14px 14px',
        }}
      />
      <div className="grain-overlay" />
      <div className="px-4">
        <Navigation />
      </div>
      <StoryScroll />
      <main className="relative">
        <Hero />
        <About />
        <Doctors />
        <Services />
        <PatientFlow />
        <Diseases />
        <Facilities />
        <USG />
        <Testimonials />
        <Reservation />
        <Location />
        <Footer />
      </main>
    </div>
  );
}

export default App;
