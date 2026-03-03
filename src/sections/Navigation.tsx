// Chief's Navigation - Fixed Top Navigation with Logos & Social Media

import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Youtube } from 'lucide-react';

interface NavigationLink {
  label: string;
  href: string;
  external?: boolean;
}

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const crewPortalUrl = import.meta.env.VITE_CREW_PORTAL_URL ?? 'http://localhost:3000';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavigationLink[] = [
    { label: 'Layanan', href: '#services' },
    { label: 'Dokter', href: '#doctors' },
    { label: 'Fasilitas', href: '#facilities' },
    { label: 'USG', href: '#usg' },
    { label: 'Reservasi', href: '#reservation' },
    { label: 'Crew Portal', href: crewPortalUrl, external: true },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/pkm_balowerti/',
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://www.youtube.com/@puskesmasbalowertikediri',
    },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-sm neo-card'
            : 'bg-transparent'
        }`}
      >
        <div className="px-6 lg:px-[7vw] py-3">
          <div className="flex items-center justify-between">
            {/* Left: OKM Logo + Brand */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-3"
            >
              {/* OKM Logo */}
              <div className={`relative w-10 h-10 rounded-full overflow-hidden border-2 transition-all duration-300 neo-inset ${
                isScrolled ? 'border-[#C9A87C]/30' : 'border-white/50'
              }`}>
                <img 
                  src="/images/logookm.png" 
                  alt="Logo Puskesmas"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <span className={`font-bold text-base lg:text-lg font-['Playfair_Display'] transition-colors duration-300 ${
                isScrolled ? 'text-[#2D2420]' : 'text-[#2D2420]'
              }`}>
                Puskesmas Balowerti
              </span>
            </a>

            {/* Center: Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (link.external) {
                      setIsMobileMenuOpen(false);
                      return;
                    }
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-[#C9A87C] ${
                    isScrolled ? 'text-[#2D2420]' : 'text-[#2D2420]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right: Logo Kediri + Social + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Logo Kota Kediri */}
              <div className="flex items-center gap-2 pr-4 border-r border-[#E5DDD5]">
                <img 
                  src="/images/logokediri.png" 
                  alt="Logo Kota Kediri"
                  className="h-10 w-auto object-contain"
                />
              </div>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300
                      hover:bg-[#C9A87C] group ${
                        isScrolled 
                          ? 'bg-[#FAF3EB] hover:bg-[#C9A87C] neo-card-hover' 
                          : 'bg-white/30 backdrop-blur-sm hover:bg-[#C9A87C] neo-control'
                      }`}
                    aria-label={social.label}
                  >
                    <social.icon className={`w-4 h-4 transition-colors duration-300 group-hover:text-white ${
                      isScrolled ? 'text-[#8B7D6F]' : 'text-[#2D2420]'
                    }`} />
                  </a>
                ))}
              </div>
              
              <a
                href="#reservation"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#reservation');
                }}
                className="bg-[#C9A87C] hover:bg-[#B8956A] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A87C]/20 neo-card-hover"
              >
                Reservasi
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#2D2420]" />
              ) : (
                <Menu className="w-6 h-6 text-[#2D2420]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#2D2420]/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        <div
          className={`absolute top-0 right-0 w-80 max-w-full h-full bg-white shadow-2xl neo-card transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            {/* Mobile Header with Logos */}
            <div className="flex items-center gap-3 mb-8 px-4">
              <img src="/images/logookm.png" alt="Logo Puskesmas" className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-bold text-[#2D2420] font-['Playfair_Display']">Puskesmas Balowerti</p>
                <img src="/images/logokediri.png" alt="Kota Kediri" className="h-6 w-auto mt-1" />
              </div>
            </div>

            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (link.external) {
                      setIsMobileMenuOpen(false);
                      return;
                    }
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className={`block py-3 px-4 text-lg font-medium text-[#2D2420] hover:bg-[#FAF3EB] hover:text-[#C9A87C] rounded-xl transition-all duration-300 ${
                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            {/* Social Media - Mobile */}
            <div className={`mt-6 pt-6 border-t border-[#FAF3EB] transition-all duration-300 ${
              isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <p className="text-sm text-[#8B7D6F] mb-3 px-4">Media Sosial</p>
              <div className="flex gap-3 px-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#FAF3EB] flex items-center justify-center neo-control
                      hover:bg-[#C9A87C] group transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-[#8B7D6F] group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-[#FAF3EB]">
              <a
                href="#reservation"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#reservation');
                }}
                className="block w-full bg-[#C9A87C] hover:bg-[#B8956A] text-white text-center font-medium py-4 rounded-xl transition-all duration-300 neo-card-hover"
              >
                Reservasi Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
