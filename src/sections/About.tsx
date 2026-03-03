// Chief's About Section - Clinic Introduction with Real Photo
// Using actual Puskesmas Balowerti photo

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Clock, Users, MapPin } from 'lucide-react';

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

  const stats = [
    {
      icon: Clock,
      value: '24',
      label: 'Jam',
      description: 'Layanan IGD & Rawat Inap',
    },
    {
      icon: Users,
      value: '>20',
      label: 'Tenaga',
      description: 'Medis & Paramedis',
    },
    {
      icon: MapPin,
      value: '5',
      label: 'Wilayah',
      description: 'Area Kerja',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-14 lg:py-20 bg-[#F8F5F2] overflow-hidden neo-section"
    >
      <div className="px-6 lg:px-[7vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Chief's Left Text Block */}
          <div>
            {/* Chief's Eyebrow */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-xs uppercase tracking-[0.2em] text-[#8B7D6F] font-medium">
                Tentang Kami
              </span>
            </div>

            {/* Chief's Headline */}
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2420] mt-4 mb-6 leading-tight
                transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '100ms' }}
            >
              UPTD Puskesmas{' '}
              <span className="text-[#C9A87C]">Poned Balowerti</span>
            </h2>

            {/* Chief's Body Text */}
            <p
              className={`text-base lg:text-lg text-[#8B7D6F] leading-relaxed mb-8 max-w-xl
                transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '200ms' }}
            >
              Kami menyediakan layanan kesehatan primer dan rujukan bagi warga Kediri dan sekitarnya—dengan tenaga medis yang berpengalaman dan fasilitas yang nyaman.
            </p>

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

          {/* Chief's Stats Card */}
          <div
            className={`lg:mt-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="frosted-glass rounded-[28px] p-8 neo-card">
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center"
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#FAF3EB] flex items-center justify-center neo-inset">
                      <stat.icon className="w-5 h-5 text-[#C9A87C]" />
                    </div>
                    <p className="text-2xl lg:text-3xl font-bold text-[#2D2420] font-['Playfair_Display']">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-[#8B7D6F] mt-1">
                      {stat.label}
                    </p>
                    <p className="text-xs text-[#8B7D6F] mt-1 hidden sm:block">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chief's Real Puskesmas Balowerti Image */}
        <div
          className={`mt-16 lg:mt-24 transition-all duration-1000 ${
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
