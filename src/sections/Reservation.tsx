// Chief's Reservation Section - Zen Queue System & Informative Wait-Time

import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, User, Phone, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppUrl, OPERATIONAL_HOURS, QUEUE_INFO } from '@/config/site';

const Reservation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [nama, setNama] = useState('');
  const [noHp, setNoHp] = useState('');
  const [layanan, setLayanan] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [waktu, setWaktu] = useState('');

  function handleReservasi() {
    if (!nama || !layanan || !tanggal || !waktu) {
      alert('Mohon lengkapi semua field sebelum konfirmasi.');
      return;
    }
    const msg =
      `Halo Puskesmas Balowerti, saya ingin reservasi:\n\n` +
      `👤 Nama: ${nama}\n` +
      `📞 No HP: ${noHp || '-'}\n` +
      `🏥 Layanan: ${layanan}\n` +
      `📅 Tanggal: ${tanggal}\n` +
      `⏰ Waktu: ${waktu}\n\n` +
      `Mohon konfirmasinya. Terima kasih 🙏`;
    window.open(buildWhatsAppUrl(msg), '_blank');
  }

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
    const activeOrbs = QUEUE_INFO.realtimeEnabled ? 6 : 3;
    
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
                  <p className="text-lg font-bold text-[#2D2420]">
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
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs bg-[#FAF3EB] text-[#8B7D6F] px-3 py-1.5 rounded-full">
                  🕐 {OPERATIONAL_HOURS.clinicCompact}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs bg-red-50 text-red-500 px-3 py-1.5 rounded-full">
                  🚨 {OPERATIONAL_HOURS.emergency}
                </span>
              </div>
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
                      value={nama}
                      onChange={e => setNama(e.target.value)}
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
                      value={noHp}
                      onChange={e => setNoHp(e.target.value)}
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
                    <select
                      value={layanan}
                      onChange={e => setLayanan(e.target.value)}
                      className="w-full bg-white/50 border border-[#FAF3EB] rounded-xl pl-10 pr-8 py-3 text-sm text-[#2D2420] appearance-none focus:outline-none focus:ring-2 focus:ring-[#C9A87C]/30 transition-all neo-control"
                    >
                      <option value="">Pilih Layanan</option>
                      <option>Poli Umum</option>
                      <option>Poli Gigi</option>
                      <option>KIA</option>
                      <option>Laboratorium</option>
                      <option>Imunisasi</option>
                      <option>KB</option>
                      <option>Kesehatan Jiwa</option>
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
                      value={tanggal}
                      onChange={e => setTanggal(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
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
                    <select
                      value={waktu}
                      onChange={e => setWaktu(e.target.value)}
                      className="w-full bg-white/50 border border-[#FAF3EB] rounded-xl pl-10 pr-8 py-3 text-sm text-[#2D2420] appearance-none focus:outline-none focus:ring-2 focus:ring-[#C9A87C]/30 transition-all neo-control"
                    >
                      <option value="">Pilih Waktu</option>
                      <option>07:30 - 09:00</option>
                      <option>09:00 - 11:00</option>
                      <option>11:00 - 13:00</option>
                      <option>13:00 - 15:00</option>
                      <option>15:00 - 17:00</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                onClick={handleReservasi}
                data-magnetic
                data-magnetic-strength="10"
                className="w-full bg-[#C9A87C] hover:bg-[#B8956A] text-white font-medium py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#C9A87C]/20 neo-card-hover"
              >
                <span>💬 Konfirmasi via WhatsApp</span>
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
                  <span className="text-sm font-medium text-[#C9A87C]">
                    {QUEUE_INFO.realtimeEnabled ? 'Real-time' : 'Info Manual'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex gap-2">
                  {renderZenOrbs()}
                </div>
                <span className="text-sm text-[#8B7D6F]">
                  Antrian poli umum: <span className="font-medium text-[#2D2420]">{QUEUE_INFO.queueSnapshot}</span>
                </span>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#FAF3EB]">
                <Clock className="w-5 h-5 text-[#C9A87C]" />
                <span className="text-sm text-[#8B7D6F]">
                  Estimasi tunggu: <span className="font-medium text-[#2D2420]">{QUEUE_INFO.waitEstimate}</span>
                </span>
              </div>
              <p className="text-xs text-[#8B7D6F] mt-2">{QUEUE_INFO.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
