// Chief's Reservation Section - Zen Queue System & Dynamic Wait-Time

import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, User, Phone, CheckCircle2 } from 'lucide-react';

const Reservation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [queueCount, setQueueCount] = useState(4);
  const [waitTime, setWaitTime] = useState(15);

  useEffect(() => {
    const interval = setInterval(() => {
      setQueueCount(prev => {
        const change = Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0;
        return Math.max(0, Math.min(10, prev + change));
      });
      setWaitTime(prev => {
        const change = Math.random() > 0.8 ? (Math.random() > 0.5 ? 5 : -5) : 0;
        return Math.max(5, Math.min(45, prev + change));
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderZenOrbs = () => {
    const orbs = [];
    const totalOrbs = 8;
    const activeOrbs = Math.min(queueCount, totalOrbs);
    
    for (let i = 0; i < totalOrbs; i++) {
      const isActive = i < activeOrbs;
      orbs.push(
        <div
          key={i}
          className={`w-3 h-3 rounded-full transition-all duration-700 ${
            isActive 
              ? 'zen-orb animate-pulse' 
              : 'bg-[#FAF3EB]'
          }`}
          style={{
            animationDelay: `${i * 150}ms`,
            opacity: isActive ? 0.8 + (i * 0.025) : 0.3,
          }}
        />
      );
    }
    return orbs;
  };

  return (
    <section
      ref={sectionRef}
      id="reservation"
      className="relative w-full py-14 lg:py-20 bg-[#F8F5F2] overflow-hidden neo-section"
    >
      <div className="px-6 lg:px-[7vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative mx-auto lg:mx-0 w-full max-w-[450px] aspect-[3/4] rounded-[30px] overflow-hidden neo-card neo-card-hover">
              <img
                src="/images/reservation-portrait.jpg"
                alt="Healthcare Staff"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2420]/30 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="frosted-glass rounded-2xl px-6 py-4 neo-card">
                  <p className="text-lg font-bold text-[#2D2420] font-['Playfair_Display']">
                    Kesehatan Anda, Nafas Kami
                  </p>
                  <p className="text-sm text-[#8B7D6F] mt-1">
                    Reservasi online untuk pelayanan terbaik
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              className={`mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <span className="text-xs uppercase tracking-[0.2em] text-[#8B7D6F] font-medium">
                Reservasi
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2420] mt-4 mb-4">
                Reservasi <span className="text-[#C9A87C]">Online</span>
              </h2>
              <p className="text-base text-[#8B7D6F] leading-relaxed">
                Isi data singkat, pilih layanan, dan dapatkan estimasi waktu pelayanan.
              </p>
            </div>

            <div
              className={`frosted-glass rounded-[28px] p-6 lg:p-8 neo-card neo-card-hover mb-6
                transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-wider text-[#8B7D6F] mb-2">
                    Nama Lengkap
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B7D6F]" />
                    <input
                      type="text"
                      placeholder="Masukkan nama lengkap"
                      className="w-full bg-white/50 border border-[#FAF3EB] rounded-xl pl-10 pr-4 py-3 text-sm text-[#2D2420] placeholder:text-[#8B7D6F]/50 focus:outline-none focus:ring-2 focus:ring-[#C9A87C]/30 transition-all neo-control"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8B7D6F] mb-2">
                    Nomor HP
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B7D6F]" />
                    <input
                      type="tel"
                      placeholder="0812xxxxxxx"
                      className="w-full bg-white/50 border border-[#FAF3EB] rounded-xl pl-10 pr-4 py-3 text-sm text-[#2D2420] placeholder:text-[#8B7D6F]/50 focus:outline-none focus:ring-2 focus:ring-[#C9A87C]/30 transition-all neo-control"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8B7D6F] mb-2">
                    Layanan
                  </label>
                  <div className="relative">
                    <CheckCircle2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B7D6F]" />
                    <select className="w-full bg-white/50 border border-[#FAF3EB] rounded-xl pl-10 pr-8 py-3 text-sm text-[#2D2420] appearance-none focus:outline-none focus:ring-2 focus:ring-[#C9A87C]/30 transition-all neo-control">
                      <option>Pilih Layanan</option>
                      <option>Poli Umum</option>
                      <option>Poli Gigi</option>
                      <option>KIA</option>
                      <option>Laboratorium</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8B7D6F] mb-2">
                    Tanggal
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B7D6F]" />
                    <input
                      type="date"
                      className="w-full bg-white/50 border border-[#FAF3EB] rounded-xl pl-10 pr-4 py-3 text-sm text-[#2D2420] focus:outline-none focus:ring-2 focus:ring-[#C9A87C]/30 transition-all neo-control"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8B7D6F] mb-2">
                    Waktu
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B7D6F]" />
                    <select className="w-full bg-white/50 border border-[#FAF3EB] rounded-xl pl-10 pr-8 py-3 text-sm text-[#2D2420] appearance-none focus:outline-none focus:ring-2 focus:ring-[#C9A87C]/30 transition-all neo-control">
                      <option>Pilih Waktu</option>
                      <option>08:00 - 10:00</option>
                      <option>10:00 - 12:00</option>
                      <option>13:00 - 15:00</option>
                      <option>15:00 - 17:00</option>
                    </select>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#C9A87C] hover:bg-[#B8956A] text-white font-medium py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-[#C9A87C]/20 heartbeat neo-card-hover">
                <span>Konfirmasi Reservasi</span>
              </button>
            </div>

            <div
              className={`frosted-glass rounded-[28px] p-6 neo-card
                transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '350ms' }}
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs uppercase tracking-wider text-[#8B7D6F]">
                  Kondisi saat ini
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C9A87C] animate-pulse" />
                  <span className="text-sm font-medium text-[#C9A87C]">Tenang & Terkendali</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex gap-2">
                  {renderZenOrbs()}
                </div>
                <span className="text-sm text-[#8B7D6F]">
                  Antrian poli umum: <span className="font-medium text-[#2D2420]">{queueCount} orang</span>
                </span>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#FAF3EB]">
                <Clock className="w-5 h-5 text-[#C9A87C]" />
                <span className="text-sm text-[#8B7D6F]">
                  Estimasi tunggu: <span className="font-medium text-[#2D2420]">{waitTime} menit</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
