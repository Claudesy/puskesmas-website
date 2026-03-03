// Chief's About Section - Clinic Introduction with Real Photo
// Using actual Puskesmas Balowerti photo

import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-8 lg:py-12 bg-[#F8F5F2] overflow-hidden neo-section"
    >
      <div className="px-6 lg:px-[7vw]">
        {/* Eyebrow full-width */}
        <div className={`mb-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-xs uppercase tracking-[0.2em] text-[#8B7D6F] font-medium">
            Tentang Kami
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Chief's Left Text Block */}
          <div className="lg:col-span-2">
            {/* Chief's Headline */}
            <div
              className={`mb-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '100ms' }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2420] leading-tight">
                UPTD Puskesmas{' '}
                <span className="text-[#C9A87C]">Poned Balowerti</span>
              </h2>
            </div>

            {/* Paripurna Badge */}
            <div className={`mb-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '150ms' }}>
              <div
                className="inline-flex flex-col items-center px-3 py-2 rounded-2xl border"
                style={{
                  background: 'linear-gradient(135deg,#2D2420 0%,#1C1917 100%)',
                  borderColor: 'rgba(201,168,124,0.35)',
                  boxShadow: '0 4px 16px rgba(201,168,124,0.2)',
                }}
              >
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3" viewBox="0 0 24 24" fill="#F4C430">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-[9px] font-bold tracking-[0.15em] uppercase" style={{ color: '#C9A87C' }}>
                  Paripurna
                </span>
              </div>
            </div>

            {/* Prakata */}
            <div className="space-y-3 mb-4 text-sm lg:text-base text-[#8B7D6F] leading-relaxed">
              <p>Puskesmas Balowerti adalah fasilitas kesehatan tingkat pertama milik Pemerintah Kota Kediri yang melayani masyarakat wilayah Balowerti dan sekitarnya.</p>
              <p>Dengan status <strong className="text-[#2D2420]">PONED</strong> (Pelayanan Obstetri Neonatal Esensial Dasar), kami siap menangani persalinan dan kegawatdaruratan ibu serta bayi baru lahir selama 24 jam.</p>
              <p>Berbekal akreditasi <strong className="text-[#2D2420]">Paripurna</strong> — predikat tertinggi dalam standar nasional — kami berkomitmen menghadirkan layanan kesehatan yang prima, ramah, dan terpercaya bagi seluruh lapisan masyarakat Kota Kediri.</p>
            </div>

            {/* Chief's CTA Link */}
            <a
              href="#services"
              className={`inline-flex items-center gap-2 text-[#C9A87C] font-medium hover:gap-4 transition-all duration-300
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <span>Lihat layanan kami</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Chief's Real Puskesmas Balowerti Image */}
        <div
          className={`mt-6 lg:mt-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[1.02]'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="relative w-full h-[300px] lg:h-[500px] rounded-[30px] overflow-hidden neo-card neo-card-hover">
            <img
              src="/images/puskesmas-building.png"
              alt="Puskesmas Balowerti - Gedung Utama"
              className="w-full h-full object-cover"
            />
            {/* Chief's Subtle Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2420]/40 via-transparent to-transparent" />
            
            {/* Chief's Image Caption */}
            <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8">
              <div className="frosted-glass rounded-xl px-5 py-4 neo-card">
                <p className="text-lg font-bold text-[#2D2420] font-['Playfair_Display']">Puskesmas Balowerti</p>
                <p className="text-sm text-[#8B7D6F]">Jl. Balowerti GG V No 68, Kediri</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-[#C9A87C] animate-pulse" />
                  <span className="text-xs text-[#C9A87C] font-medium">Pemerintah Kota Kediri - Dinas Kesehatan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
