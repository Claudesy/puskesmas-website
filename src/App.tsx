// Chief's Main App - Puskesmas Balowerti Digital Sanctuary
// Cream Color Palette: #C9A87C

import { ReactLenis, useLenis } from 'lenis/react';
import { useEffect } from 'react';

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

const NAV_HEIGHT = 72;

// Hook: bridge Lenis scrollTo ke anchor click handler di main.tsx
function LenisBridge() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    // Expose lenis instance ke window agar global handler di main.tsx bisa pakai
    (window as Window & { __lenis?: typeof lenis }).__lenis = lenis;
    return () => { delete (window as Window & { __lenis?: typeof lenis }).__lenis; };
  }, [lenis]);

  return null;
}

function App() {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo out
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
        infinite: false,
      }}
    >
      <LenisBridge />
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
        {/* Hero — langsung visible, tidak perlu reveal */}
        <Hero />
        <div data-reveal="left"><About /></div>
        <div data-reveal="right"><Doctors /></div>
        <div data-reveal="left"><PatientFlow /></div>
        <div data-reveal="right"><Diseases /></div>
        <div data-reveal="left"><Services /></div>
        <div data-reveal="right"><Facilities /></div>
        <div data-reveal="left"><USG /></div>
        <div data-reveal="right"><Testimonials /></div>
        <div data-reveal="left"><Reservation /></div>
        <div data-reveal="right"><Location /></div>
        <div data-reveal><Footer /></div>
      </main>
    </div>
    </ReactLenis>
  );
}

export { NAV_HEIGHT };
export default App;
