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

function App() {
  return (
    <div className="relative min-h-screen bg-[#F8F5F2]">
      <div className="grain-overlay" />
      <Navigation />
      <StoryScroll />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Doctors />
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
