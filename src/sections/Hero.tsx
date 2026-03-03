// Chief's Hero Section - The Digital Sanctuary Entry Point
// Diagram-focused left panel (chat Abby sementara disembunyikan)

import { useEffect, useRef, useState } from 'react';
import { Clock, Calendar, User, ChevronDown } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
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
      title: 'Deteksi Dini',
      detail: 'Perubahan gejala terpantau lebih awal.',
      labelClass: 'top-[10%] left-[-2%] items-end text-right',
      lineClass: 'top-[27%] left-[27%] w-16 rotate-[-18deg]',
    },
    {
      title: 'Terapi Lebih Tepat',
      detail: 'Rencana obat disesuaikan tiap progres.',
      labelClass: 'top-[24%] right-[-2%] items-start text-left',
      lineClass: 'top-[39%] right-[27%] w-16 rotate-[18deg]',
    },
    {
      title: 'Risiko Menurun',
      detail: 'Kontrol berkala membantu cegah komplikasi.',
      labelClass: 'bottom-[24%] left-[-2%] items-end text-right',
      lineClass: 'bottom-[36%] left-[27%] w-20 rotate-[16deg]',
    },
    {
      title: 'Pemulihan Aman',
      detail: 'Tindak lanjut membuat perawatan terkendali.',
      labelClass: 'bottom-[8%] right-[-2%] items-start text-left',
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
      <div className="relative z-10 min-h-screen flex items-center px-6 lg:px-[7vw] py-20">
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

              <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]">
                <div className="absolute inset-x-[18%] top-[7%] bottom-[11%] rounded-[34px] overflow-hidden bg-white/70 border border-[#EADDCB] shadow-[0_14px_32px_rgba(149,122,95,0.15)] float-gentle-delay-1">
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
    </section>
  );
};

export default Hero;
