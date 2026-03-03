// Chief's Hero Section - The Digital Sanctuary Entry Point
// Diagram-focused left panel (chat Abby sementara disembunyikan)

import { useEffect, useRef, useState } from 'react';
import { Clock, Calendar, User, ChevronDown, Phone, Ambulance, Stethoscope, X, MessageCircle } from 'lucide-react';

const doctors = [
  { name: 'dr. Ferdi Iskandar', poli: 'Poli Umum', status: 'on-duty', shift: 'Sen–Sab · 07.30–17.00', avatar: '/images/ferdi.png' },
  { name: 'dr. Cica Lusiana', poli: 'Poli Lansia', status: 'on-duty', shift: 'Sen–Sab · 07.30–17.00', avatar: '/images/cica.webp' },
  { name: 'dr. Rachmad Juni T.', poli: 'IGD', status: 'on-duty', shift: 'Sen–Sab · 07.30–17.00', avatar: '/images/rachmad.png' },
  { name: 'drg. Endah Retno W.', poli: 'Poli Gigi', status: 'on-duty', shift: 'Sen–Sab · 07.30–17.00', avatar: '/images/endah.avif' },
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [fabOpen, setFabOpen] = useState(false);
  const [showDoctors, setShowDoctors] = useState(false);
  const doctorMascotImage = `${import.meta.env.BASE_URL}images/doc.png`;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const nuraniWords = [
    { text: 'Nyaman', position: 'left-[6vw] top-[12vh]', delay: 'delay-0' },
    { text: 'Unggul', position: 'left-[18vw] bottom-[12vh]', delay: 'delay-100' },
    { text: 'Ramah', position: 'right-[6vw] top-[14vh]', delay: 'delay-200' },
    { text: 'Terkendali', position: 'right-[10vw] bottom-[10vh]', delay: 'delay-300' },
  ];
  const controlCallouts = [
    {
      title: 'Terapi Lebih Tepat',
      detail: 'Rencana obat disesuaikan tiap progres.',
      labelClass: 'top-[24%] right-[-14%] items-start text-left',
      lineClass: 'top-[39%] right-[27%] w-16 rotate-[18deg]',
    },
    {
      title: 'Risiko Menurun',
      detail: 'Kontrol berkala membantu cegah komplikasi.',
      labelClass: 'bottom-[24%] left-[-14%] items-end text-right',
      lineClass: 'bottom-[36%] left-[27%] w-20 rotate-[16deg]',
    },
    {
      title: 'Pemulihan Aman',
      detail: 'Tindak lanjut membuat perawatan terkendali.',
      labelClass: 'bottom-[-4%] right-[-2%] items-start text-left',
      lineClass: 'bottom-[20%] right-[27%] w-20 rotate-[-16deg]',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#F8F5F2] neo-section"
    >
      {/* Chief's Cream Gradient Background */}
      <div className="absolute inset-0 bg-cream-gradient pointer-events-none" />

      {/* IGD Banner - Top */}
      <div
        className={`absolute top-20 right-6 z-20 flex justify-end transition-all duration-700
          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        style={{ transitionDelay: '200ms' }}
      >
        <a
          href="tel:0354689746"
          className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-red-500/30 transition-all duration-300 hover:scale-105 group"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
          </span>
          <Ambulance className="w-4 h-4" />
          <span>IGD 24 Jam — (0354) 689746</span>
          <Phone className="w-4 h-4 transition-transform group-hover:rotate-12" />
        </a>
      </div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(201,168,124,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(201,168,124,0.08) 1px, transparent 1px),
            radial-gradient(circle at 60% 40%, rgba(201,168,124,0.07) 0%, transparent 65%)
          `,
          backgroundSize: '40px 40px, 40px 40px, 100% 100%',
        }}
      />

      
      {/* Chief's NURANI Philosophy - Floating Text Elements */}
      {nuraniWords.map((word, index) => (
        <div
          key={word.text}
          className={`absolute ${word.position} float-gentle${index > 0 ? `-delay-${index}` : ''} 
            transition-all duration-1000 ${isLoaded ? 'opacity-70' : 'opacity-0'}`}
          style={{ transitionDelay: `${700 + index * 100}ms` }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#8B7D6F] font-medium">
            {word.text}
          </span>
        </div>
      ))}

      {/* Chief's Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-start px-6 lg:px-[7vw] pt-24 pb-6">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Karakter dokter + garis tipis edukasi kontrol rutin */}
          <div
            className={`relative mx-auto lg:mx-0 w-full max-w-[640px] lg:w-[46vw]
              transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="relative">
              <div className="text-center mb-3">
                <p className="text-sm sm:text-base uppercase tracking-[0.18em] text-[#8B7D6F] font-semibold callout-copy-motion">
                  Kontrol Rutin
                </p>
                <p className="text-base sm:text-lg text-[#6E5F52] mt-1 callout-copy-motion">
                  Konsisten kontrol, lebih aman untuk jangka panjang.
                </p>
              </div>

              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
                <div className="absolute inset-x-[4%] top-[0%] bottom-[10%] rounded-[34px] overflow-hidden bg-white/70 border border-[#EADDCB] shadow-[0_14px_32px_rgba(149,122,95,0.15)] float-gentle-delay-1">
                  <img
                    src={doctorMascotImage}
                    alt="Karakter Dokter"
                    className="w-full h-full object-cover"
                  />
                </div>

                {controlCallouts.map((callout, index) => (
                  <div
                    key={`${callout.title}-line`}
                    className={`hidden md:block absolute border-t border-[#C9A87C]/60 ${callout.lineClass} callout-line-motion`}
                    style={{ animationDelay: `${index * 0.25}s` }}
                  />
                ))}

                {controlCallouts.map((callout, index) => (
                  <div
                    key={callout.title}
                    className={`hidden md:flex absolute ${callout.labelClass} max-w-[220px] callout-label-motion`}
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <div className="space-y-0.5 pb-1 border-b border-[#C9A87C]/45">
                      <p className="text-sm uppercase tracking-[0.14em] text-[#A88A67] font-semibold">
                        {callout.title}
                      </p>
                      <p className="text-sm leading-relaxed text-[#7D6D5F]">
                        {callout.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-1 gap-2 md:hidden">
                {controlCallouts.map((callout) => (
                  <div
                    key={`${callout.title}-mobile`}
                    className="pl-3 pb-1 border-l border-b border-[#C9A87C]/55"
                  >
                    <p className="text-xs uppercase tracking-[0.12em] text-[#A88A67] font-semibold">
                      {callout.title}
                    </p>
                    <p className="text-sm text-[#7D6D5F]">{callout.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chief's Headline & Form - Right Side */}
          <div className="lg:pl-8">
            {/* Chief's Headline Block */}
            <div
              className={`transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#8B7D6F] mb-4">
                UPTD Puskesmas Poned Balowerti
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#2D2420] leading-[0.95] mb-6">
                Reservasi{' '}
                <span className="text-[#C9A87C]">Online</span>
              </h1>
              <p className="text-base lg:text-lg text-[#8B7D6F] max-w-md mb-8 font-light">
                Pilih layanan, dokter, dan jadwal kunjungan dalam satu alur yang nyaman dan terkendali.
              </p>
            </div>

            {/* Chief's Reservation Form Card */}
            <div
              className={`frosted-glass rounded-[28px] p-6 lg:p-8 neo-card neo-card-hover
                transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: '450ms' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="relative group">
                  <label className="block text-xs uppercase tracking-wider text-[#8B7D6F] mb-2">
                    Layanan
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B7D6F]" />
                    <select className="w-full bg-white/50 border border-[#FAF3EB] rounded-xl pl-10 pr-8 py-3 text-sm text-[#2D2420] appearance-none focus:outline-none focus:ring-2 focus:ring-[#C9A87C]/30 transition-all hover:bg-white/70 neo-control">
                      <option>Pilih Layanan</option>
                      <option>Poli Umum</option>
                      <option>Poli Lansia</option>
                      <option>Poli Gigi</option>
                      <option>KIA</option>
                      <option>VCT</option>
                      <option>Laboratorium</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B7D6F] pointer-events-none" />
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-xs uppercase tracking-wider text-[#8B7D6F] mb-2">
                    Dokter
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B7D6F]" />
                    <select className="w-full bg-white/50 border border-[#FAF3EB] rounded-xl pl-10 pr-8 py-3 text-sm text-[#2D2420] appearance-none focus:outline-none focus:ring-2 focus:ring-[#C9A87C]/30 transition-all hover:bg-white/70 neo-control">
                      <option>Pilih Dokter</option>
                      <option>dr. Ferdi Iskandar</option>
                      <option>drg. Endah Retno W.</option>
                      <option>dr. Cica Lusiana</option>
                      <option>dr. Rachmad Juni Triyono</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B7D6F] pointer-events-none" />
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-xs uppercase tracking-wider text-[#8B7D6F] mb-2">
                    Tanggal & Waktu
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B7D6F]" />
                    <input
                      type="date"
                      className="w-full bg-white/50 border border-[#FAF3EB] rounded-xl pl-10 pr-3 py-3 text-sm text-[#2D2420] focus:outline-none focus:ring-2 focus:ring-[#C9A87C]/30 transition-all hover:bg-white/70 neo-control"
                    />
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#C9A87C] hover:bg-[#B8956A] text-white font-medium py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-[#C9A87C]/20 hover:-translate-y-0.5 neo-card-hover">
                <Clock className="w-5 h-5 transition-transform group-hover:rotate-12" />
                <span>Cari Jadwal</span>
              </button>
            </div>

            <div
              className={`flex flex-wrap items-center gap-6 mt-8 
                transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '700ms' }}
            >
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#FAF3EB] flex items-center justify-center transition-transform group-hover:scale-110 neo-inset">
                  <span className="text-[#C9A87C] font-bold text-sm">24</span>
                </div>
                <div>
                  <p className="text-xs text-[#8B7D6F]">Jam</p>
                  <p className="text-sm font-medium text-[#2D2420]">IGD & Rawat Inap</p>
                </div>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#FAF3EB] flex items-center justify-center transition-transform group-hover:scale-110 neo-inset">
                  <span className="text-[#C9A87C] font-bold text-sm">80+</span>
                </div>
                <div>
                  <p className="text-xs text-[#8B7D6F]">Tenaga</p>
                  <p className="text-sm font-medium text-[#2D2420]">Medis & Paramedis</p>
                </div>
              </div>
            </div>

            {/* Chief's Service Chips */}
            <div
              className={`flex flex-wrap gap-2 mt-4
                transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '850ms' }}
            >
              {['Poli Umum', 'Lansia', 'Gigi', 'KIA', 'VCT'].map((poli) => (
                <span
                  key={poli}
                  className="inline-flex items-center text-xs font-medium text-[#8B7D6F] bg-[#FAF3EB] border border-[#EADDCB] rounded-full px-3 py-1.5 neo-chip"
                >
                  {poli}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8F5F2] to-transparent pointer-events-none" />

      {/* Melinda-style FAB — satu tombol, panel slide-up */}
      <style>{`
        @keyframes fab-bob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        @keyframes fab-pulse-ring { 0%{transform:scale(1);opacity:.6} 100%{transform:scale(1.6);opacity:0} }
        @keyframes fab-item-in { 0%{opacity:0;transform:translateY(12px) scale(0.9)} 100%{opacity:1;transform:translateY(0) scale(1)} }
        .fab-bob { animation: fab-bob 2s ease-in-out infinite; }
        .fab-pulse { animation: fab-pulse-ring 1.8s ease-out infinite; }
        .fab-item { animation: fab-item-in 0.28s cubic-bezier(.34,1.56,.64,1) both; }
      `}</style>

      <div
        className={`fixed bottom-7 right-6 z-50 flex flex-col items-end gap-0 transition-all duration-700
          ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1000ms' }}
      >
        {/* Panel slide-up — Luxury Dark */}
        {fabOpen && (
          <div className="mb-4 w-76 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)]" style={{ width: '300px', background: '#1C1917' }}>

            {/* Header panel */}
            <div className="px-5 py-3.5" style={{ background: 'linear-gradient(135deg,#2D2420 0%,#1C1917 100%)', borderBottom: '1px solid rgba(201,168,124,0.15)' }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-3.5 h-3.5 text-[#C9A87C]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A87C]">Tenaga Medis Bertugas</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-emerald-400 font-medium">Siaga</span>
                </div>
              </div>
            </div>

            {/* Doctors list */}
            <div style={{ borderBottom: '1px solid rgba(201,168,124,0.1)' }}>
              {doctors.map((doc, i) => (
                <div
                  key={doc.name}
                  className="fab-item flex items-center gap-3 px-5 py-3 transition-colors"
                  style={{
                    animationDelay: `${i * 60}ms`,
                    borderBottom: i < doctors.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  }}
                >
                  {/* Avatar kartun dokter */}
                  <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden ring-1 ring-[#C9A87C]/30 bg-white">
                    <img
                      src={doc.avatar}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-white truncate">{doc.name}</p>
                    <p className="text-[10px] text-[#8B7D6F]">{doc.poli} · {doc.shift}</p>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                    style={{ background: 'rgba(52,211,153,0.12)', color: '#34d399' }}>
                    <span className="w-1 h-1 rounded-full bg-emerald-400 inline-block" />
                    Bertugas
                  </span>
                </div>
              ))}
            </div>

            {/* Quick actions */}
            <div>
              <a
                href="tel:0354689746"
                className="fab-item flex items-center gap-3 px-5 py-3.5 transition-all group hover:bg-white/5"
                style={{ animationDelay: '240ms', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
              >
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(239,68,68,0.15)' }}>
                  <Ambulance className="w-4 h-4 text-red-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-white">IGD Darurat</p>
                  <p className="text-[10px] text-[#8B7D6F]">(0354) 689746 · 24 Jam</p>
                </div>
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                </span>
              </a>

              <a
                href="https://wa.me/6285178922096"
                target="_blank"
                rel="noopener noreferrer"
                className="fab-item flex items-center gap-3 px-5 py-3.5 transition-all group hover:bg-white/5"
                style={{ animationDelay: '300ms', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
              >
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(37,211,102,0.15)' }}>
                  <svg className="w-4 h-4" style={{ fill: '#25D366' }} viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-white">Chat WhatsApp</p>
                  <p className="text-[10px] text-[#8B7D6F]">Reservasi & konsultasi</p>
                </div>
                <Phone className="w-3 h-3 text-[#8B7D6F]" />
              </a>

              <a
                href="#reservation"
                onClick={() => setFabOpen(false)}
                className="fab-item flex items-center gap-3 px-5 py-3.5 transition-all group hover:bg-white/5"
                style={{ animationDelay: '360ms' }}
              >
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(201,168,124,0.15)' }}>
                  <MessageCircle className="w-4 h-4 text-[#C9A87C]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-white">Reservasi Online</p>
                  <p className="text-[10px] text-[#8B7D6F]">Pilih layanan & jadwal</p>
                </div>
              </a>
            </div>
          </div>
        )}

        {/* FAB Trigger Button */}
        <div className="relative flex items-center justify-center">
          {/* Pulse ring */}
          {!fabOpen && (
            <span className="fab-pulse absolute w-14 h-14 rounded-full bg-[#C9A87C]/40 pointer-events-none" />
          )}
          <button
            onClick={() => setFabOpen(prev => !prev)}
            className={`fab-bob relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300
              ${fabOpen ? 'bg-[#2D2420] rotate-45' : 'bg-[#C9A87C] hover:bg-[#B8956A]'}
              shadow-[0_5px_20px_rgba(0,0,0,0.25)]`}
            aria-label="Buka menu kontak"
          >
            {fabOpen
              ? <X className="w-6 h-6 text-white" />
              : <Phone className="w-6 h-6 text-white" />
            }
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
