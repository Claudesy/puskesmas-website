import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Siapkan Dokumen',
    desc: 'Bawa kartu BPJS (fisik/Mobile JKN) dan KTP sebelum berangkat.',
    icon: '📄',
    accent: '#01934a',
  },
  {
    number: '02',
    title: 'Pendaftaran Loket',
    desc: 'Serahkan kartu BPJS + KTP ke petugas loket — dapatkan nomor antrean.',
    icon: '🪪',
    accent: '#C9A87C',
  },
  {
    number: '03',
    title: 'Verifikasi BPJS',
    desc: 'Petugas cek status kepesertaan & masa aktif kartu di sistem.',
    icon: '✅',
    accent: '#01934a',
  },
  {
    number: '04',
    title: 'Menunggu Poli',
    desc: 'Tunggu panggilan nama di ruang tunggu poli yang dituju.',
    icon: '🪑',
    accent: '#C9A87C',
  },
  {
    number: '05',
    title: 'Pemeriksaan Dokter',
    desc: 'Dokter memeriksa, diagnosis, dan menerbitkan resep obat.',
    icon: '🩺',
    accent: '#01934a',
  },
  {
    number: '06',
    title: 'Rujukan (jika perlu)',
    desc: 'Jika perlu tindakan lanjut, dokter terbitkan surat rujukan ke RS.',
    icon: '📋',
    accent: '#C9A87C',
  },
  {
    number: '07',
    title: 'Ambil Obat',
    desc: 'Serahkan resep di apotek — obat BPJS diberikan gratis.',
    icon: '💊',
    accent: '#01934a',
  },
  {
    number: '08',
    title: 'Selesai & Pulang',
    desc: 'Rekam medis tersimpan otomatis. Kembali sesuai jadwal follow-up.',
    icon: '🏠',
    accent: '#C9A87C',
  },
];

const PatientFlow = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let i = 0;
    const interval = setInterval(() => {
      setActiveStep(i);
      i++;
      if (i >= steps.length) clearInterval(interval);
    }, 200);
    return () => clearInterval(interval);
  }, [isVisible]);

  const revealed = (i: number) => i <= activeStep;
  const isActive = (i: number) =>
    hoveredStep === i || (hoveredStep === null && i === activeStep);

  return (
    <section
      ref={sectionRef}
      id="patient-flow"
      className="relative w-full py-16 lg:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #F8F4EF 0%, #FAF3EB 60%, #F0F7F3 100%)' }}
    >
      <style>{`
        @keyframes pf-pulse {
          0%   { transform: scale(1);   opacity: 0.55; }
          70%  { transform: scale(2.6); opacity: 0; }
          100% { transform: scale(2.6); opacity: 0; }
        }
        @keyframes pf-pulse2 {
          0%   { transform: scale(1);   opacity: 0.3; }
          70%  { transform: scale(3.4); opacity: 0; }
          100% { transform: scale(3.4); opacity: 0; }
        }
        @keyframes pf-draw {
          from { stroke-dashoffset: 120; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes pf-node-in {
          0%   { transform: scale(0.3); opacity: 0; }
          65%  { transform: scale(1.18); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes pf-card-in {
          0%   { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .pf-node-enter { animation: pf-node-in 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .pf-card-enter { animation: pf-card-in 0.4s ease-out forwards; }
        .pf-connector  { animation: pf-draw 0.45s ease-out forwards; }
      `}</style>

      {/* Background rings */}
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full border border-[#01934a]/8 pointer-events-none" />
      <div className="absolute -top-8 -right-8 w-[240px] h-[240px] rounded-full border border-[#01934a]/6 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full border border-[#C9A87C]/8 pointer-events-none" />

      <div className="relative px-6 lg:px-[7vw]">

        {/* ── Header ── */}
        <div
          className="mb-10 transition-all duration-700"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'none' : 'translateY(24px)' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1.5px] bg-[#01934a]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#8B7D6F] font-medium">
              Alur Pelayanan BPJS
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D2420] leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Berobat dengan{' '}
            <span style={{ color: '#01934a' }}>BPJS</span>
          </h2>
          <p className="text-base text-[#8B7D6F] mt-4 max-w-lg leading-relaxed">
            Langkah mudah berobat di Puskesmas Balowerti menggunakan kartu BPJS Kesehatan.
          </p>
        </div>

        {/* ── Info box: dokumen wajib ── */}
        <div
          className="mb-10 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(16px)',
            transitionDelay: '150ms',
          }}
        >
          <div
            className="inline-flex flex-wrap items-center gap-4 rounded-2xl px-6 py-4"
            style={{
              background: 'linear-gradient(145deg, rgba(1,147,74,0.07), rgba(1,147,74,0.03))',
              border: '1px solid rgba(1,147,74,0.18)',
            }}
          >
            <span className="text-xs uppercase tracking-[0.18em] font-semibold" style={{ color: '#01934a' }}>
              Siapkan sebelum datang
            </span>
            {['🪪 Kartu BPJS (fisik / Mobile JKN)', '🪪 KTP'].map((item) => (
              <span
                key={item}
                className="text-sm text-[#2D2420] font-medium px-3 py-1.5 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.8)',
                  border: '1px solid rgba(1,147,74,0.15)',
                  boxShadow: '3px 3px 8px rgba(1,147,74,0.06), -2px -2px 6px rgba(255,255,255,0.9)',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── Desktop: journey map 4×2 ── */}
        <div className="hidden lg:block">

          {/* Baris 1: step 01–04 */}
          <div className="flex items-start gap-0 mb-14">
            {steps.slice(0, 4).map((step, colIdx) => {
              const gi = colIdx;
              const isLast = colIdx === 3;

              return (
                <div key={step.number} className="flex items-start flex-1 min-w-0">
                  <div className="flex-1 min-w-0 flex flex-col items-center">

                    {/* Node */}
                    <div
                      className="relative mb-5 cursor-pointer"
                      style={{ width: 56, height: 56 }}
                      onMouseEnter={() => setHoveredStep(gi)}
                      onMouseLeave={() => setHoveredStep(null)}
                    >
                      {revealed(gi) && (
                        <>
                          <span className="absolute inset-0 rounded-full" style={{ background: step.accent, animation: `pf-pulse 2.6s ease-out infinite`, animationDelay: `${gi * 0.12}s` }} />
                          <span className="absolute inset-0 rounded-full" style={{ background: step.accent, animation: `pf-pulse2 2.6s ease-out infinite`, animationDelay: `${gi * 0.12 + 0.45}s` }} />
                        </>
                      )}
                      <div
                        className={revealed(gi) ? 'pf-node-enter' : ''}
                        style={{
                          opacity: revealed(gi) ? 1 : 0,
                          width: 56, height: 56,
                          borderRadius: '50%',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                          position: 'relative', zIndex: 10,
                          background: isActive(gi)
                            ? `linear-gradient(135deg, ${step.accent}, ${step.accent}cc)`
                            : 'linear-gradient(145deg, #fff, #FAF3EB)',
                          boxShadow: isActive(gi)
                            ? `0 8px 24px ${step.accent}44`
                            : '6px 6px 14px rgba(181,157,128,0.22), -5px -5px 12px rgba(255,255,255,0.9)',
                          border: `1.5px solid ${isActive(gi) ? step.accent : 'rgba(233,221,205,0.8)'}`,
                          transition: 'all 0.3s cubic-bezier(0.34,1.4,0.64,1)',
                          transform: isActive(gi) ? 'scale(1.12)' : 'scale(1)',
                        }}
                      >
                        <span className="text-[10px] font-bold tracking-wider" style={{ color: isActive(gi) ? 'rgba(255,255,255,0.75)' : '#A89280', lineHeight: 1 }}>{step.number}</span>
                        <span className="text-lg leading-none mt-0.5">{step.icon}</span>
                      </div>
                    </div>

                    {/* Label */}
                    <div
                      className={revealed(gi) ? 'pf-card-enter' : ''}
                      style={{ opacity: revealed(gi) ? 1 : 0, width: '100%', padding: '0 8px', textAlign: 'center', animationDelay: `${gi * 0.05 + 0.15}s` }}
                    >
                      <h3 className="font-semibold text-sm mb-1 transition-colors duration-300"
                        style={{ fontFamily: "'Playfair Display', serif", color: isActive(gi) ? step.accent : '#2D2420' }}>
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#8B7D6F] leading-relaxed">{step.desc}</p>
                    </div>

                  </div>

                  {/* Connector */}
                  {!isLast && (
                    <div className="flex-shrink-0 self-start" style={{ width: 48, marginTop: 20, opacity: revealed(gi) && revealed(gi + 1) ? 1 : 0, transition: 'opacity 0.4s' }}>
                      <svg width="48" height="18" viewBox="0 0 48 18" fill="none">
                        <defs>
                          <linearGradient id={`gh${gi}`} x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor={step.accent} />
                            <stop offset="100%" stopColor={steps[gi + 1]?.accent ?? step.accent} />
                          </linearGradient>
                        </defs>
                        <path d="M0 9 Q12 2 24 9 Q36 16 48 9" stroke={`url(#gh${gi})`} strokeWidth="1.5" strokeDasharray="120" strokeLinecap="round" className={revealed(gi) && revealed(gi + 1) ? 'pf-connector' : ''} />
                        {revealed(gi) && revealed(gi + 1) && <polygon points="44,6 48,9 44,12" fill={steps[gi + 1]?.accent ?? step.accent} opacity="0.9" />}
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Swoosh row 1→2 */}
          <div className="flex justify-end mb-8 pr-6" style={{ opacity: revealed(3) && revealed(4) ? 1 : 0, transition: 'opacity 0.5s 0.2s' }}>
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
              <defs>
                <linearGradient id="gsw" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor={steps[3].accent} />
                  <stop offset="100%" stopColor={steps[4].accent} />
                </linearGradient>
              </defs>
              <path d="M0 4 Q40 4 40 20 Q40 36 80 36" stroke="url(#gsw)" strokeWidth="1.5" strokeDasharray="180" strokeLinecap="round" className={revealed(3) && revealed(4) ? 'pf-connector' : ''} />
              <polygon points="76,32 80,36 76,40" fill={steps[4].accent} opacity="0.85" />
            </svg>
          </div>

          {/* Baris 2: step 05–08 reversed */}
          <div className="flex flex-row-reverse items-start gap-0">
            {steps.slice(4, 8).map((step, colIdx) => {
              const gi = 7 - colIdx;
              const isLast = colIdx === 3;

              return (
                <div key={step.number} className="flex items-start flex-1 min-w-0 flex-row-reverse">
                  <div className="flex-1 min-w-0 flex flex-col items-center">

                    <div className="relative mb-5 cursor-pointer" style={{ width: 56, height: 56 }}
                      onMouseEnter={() => setHoveredStep(gi)}
                      onMouseLeave={() => setHoveredStep(null)}
                    >
                      {revealed(gi) && (
                        <>
                          <span className="absolute inset-0 rounded-full" style={{ background: step.accent, animation: `pf-pulse 2.6s ease-out infinite`, animationDelay: `${gi * 0.12}s` }} />
                          <span className="absolute inset-0 rounded-full" style={{ background: step.accent, animation: `pf-pulse2 2.6s ease-out infinite`, animationDelay: `${gi * 0.12 + 0.45}s` }} />
                        </>
                      )}
                      <div
                        className={revealed(gi) ? 'pf-node-enter' : ''}
                        style={{
                          opacity: revealed(gi) ? 1 : 0,
                          width: 56, height: 56,
                          borderRadius: '50%',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                          position: 'relative', zIndex: 10,
                          background: isActive(gi)
                            ? `linear-gradient(135deg, ${step.accent}, ${step.accent}cc)`
                            : 'linear-gradient(145deg, #fff, #FAF3EB)',
                          boxShadow: isActive(gi)
                            ? `0 8px 24px ${step.accent}44`
                            : '6px 6px 14px rgba(181,157,128,0.22), -5px -5px 12px rgba(255,255,255,0.9)',
                          border: `1.5px solid ${isActive(gi) ? step.accent : 'rgba(233,221,205,0.8)'}`,
                          transition: 'all 0.3s cubic-bezier(0.34,1.4,0.64,1)',
                          transform: isActive(gi) ? 'scale(1.12)' : 'scale(1)',
                        }}
                      >
                        <span className="text-[10px] font-bold tracking-wider" style={{ color: isActive(gi) ? 'rgba(255,255,255,0.75)' : '#A89280', lineHeight: 1 }}>{step.number}</span>
                        <span className="text-lg leading-none mt-0.5">{step.icon}</span>
                      </div>
                    </div>

                    <div
                      className={revealed(gi) ? 'pf-card-enter' : ''}
                      style={{ opacity: revealed(gi) ? 1 : 0, width: '100%', padding: '0 8px', textAlign: 'center', animationDelay: `${gi * 0.05 + 0.15}s` }}
                    >
                      <h3 className="font-semibold text-sm mb-1 transition-colors duration-300"
                        style={{ fontFamily: "'Playfair Display', serif", color: isActive(gi) ? step.accent : '#2D2420' }}>
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#8B7D6F] leading-relaxed">{step.desc}</p>
                    </div>

                  </div>

                  {/* Connector reversed */}
                  {!isLast && (
                    <div className="flex-shrink-0 self-start" style={{ width: 48, marginTop: 20, opacity: revealed(gi) && revealed(gi - 1) ? 1 : 0, transition: 'opacity 0.4s' }}>
                      <svg width="48" height="18" viewBox="0 0 48 18" fill="none">
                        <defs>
                          <linearGradient id={`gr${gi}`} x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor={step.accent} />
                            <stop offset="100%" stopColor={steps[gi - 1]?.accent ?? step.accent} />
                          </linearGradient>
                        </defs>
                        <path d="M48 9 Q36 2 24 9 Q12 16 0 9" stroke={`url(#gr${gi})`} strokeWidth="1.5" strokeDasharray="120" strokeLinecap="round" className={revealed(gi) && revealed(gi - 1) ? 'pf-connector' : ''} />
                        {revealed(gi) && revealed(gi - 1) && <polygon points="4,6 0,9 4,12" fill={steps[gi - 1]?.accent ?? step.accent} opacity="0.9" />}
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile: vertical timeline ── */}
        <div className="lg:hidden">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <div key={step.number} className="flex gap-4">
                <div className="flex flex-col items-center flex-shrink-0" style={{ width: 48 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', flexShrink: 0,
                    background: revealed(i) ? `linear-gradient(135deg, ${step.accent}, ${step.accent}cc)` : 'linear-gradient(145deg, #F0E8DE, #E8DDD3)',
                    boxShadow: revealed(i) ? `0 6px 18px ${step.accent}44` : '4px 4px 10px rgba(181,157,128,0.15), -3px -3px 8px rgba(255,255,255,0.8)',
                    transition: 'all 0.4s cubic-bezier(0.34,1.4,0.64,1)',
                    transform: revealed(i) ? 'scale(1)' : 'scale(0.75)',
                    opacity: revealed(i) ? 1 : 0.3,
                  }}>
                    <span className="text-[10px] font-bold" style={{ color: revealed(i) ? 'rgba(255,255,255,0.75)' : '#B0A090', lineHeight: 1 }}>{step.number}</span>
                    <span className="text-base leading-none mt-0.5">{step.icon}</span>
                  </div>
                  {!isLast && (
                    <div style={{
                      width: 2, flex: 1, minHeight: 24, marginTop: 4, borderRadius: 4,
                      background: revealed(i) && revealed(i + 1) ? `linear-gradient(to bottom, ${step.accent}, ${steps[i + 1]?.accent ?? step.accent})` : '#E9DDD0',
                      transition: 'background 0.5s ease',
                    }} />
                  )}
                </div>
                <div className="flex-1 mb-5 rounded-[16px] p-4 neo-card transition-all duration-500"
                  style={{ opacity: revealed(i) ? 1 : 0, transform: revealed(i) ? 'none' : 'translateX(16px)' }}>
                  <h3 className="font-semibold text-[#2D2420] text-base mb-1 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#8B7D6F] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Progress bar ── */}
        <div className="mt-12 transition-all duration-700" style={{ opacity: isVisible ? 1 : 0, transitionDelay: '300ms' }}>
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs text-[#8B7D6F] tracking-wide">Progres alur BPJS</span>
            <span className="text-xs font-semibold" style={{ color: '#01934a' }}>
              {Math.min(activeStep + 1, steps.length)} / {steps.length} langkah
            </span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{
            background: 'linear-gradient(145deg, rgba(233,221,205,0.8), rgba(255,255,255,0.9))',
            boxShadow: 'inset 2px 2px 5px rgba(181,157,128,0.18), inset -1px -1px 4px rgba(255,255,255,0.9)',
          }}>
            <div className="h-full rounded-full transition-all duration-700" style={{
              width: `${(Math.min(activeStep + 1, steps.length) / steps.length) * 100}%`,
              background: 'linear-gradient(to right, #01934a, #C9A87C, #01934a)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 3s linear infinite',
            }} />
          </div>

          {/* UGD note */}
          <div className="mt-5 flex items-start gap-3 rounded-xl px-4 py-3"
            style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)' }}>
            <span className="text-base flex-shrink-0">🚨</span>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              <span className="font-semibold text-red-500">Kondisi Darurat:</span>{' '}
              Langsung ke IGD — tidak perlu surat rujukan. Tunjukkan kartu BPJS ke petugas.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PatientFlow;
