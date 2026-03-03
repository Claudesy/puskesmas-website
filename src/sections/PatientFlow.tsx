import React, { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Step = {
  id: string;
  no: number;
  title: string;
  desc: string;
  meta?: string;
  icon: React.ReactNode;
};

const DotIcon = ({ children }: { children: React.ReactNode }) => (
  <span className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white/70 text-black/65 shadow-sm">
    {children}
  </span>
);

const IconDoc = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 3h7l4 4v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
    <path d="M15 3v5h5" />
    <path d="M9 13h6M9 17h6M9 9h3" />
  </svg>
);
const IconTicket = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 1 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 1 0 0-4V8z" />
    <path d="M9 6v12" strokeDasharray="2 2" />
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const IconChair = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 13V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6" />
    <path d="M6 13h12" />
    <path d="M6 13v4a2 2 0 0 0 2 2h1v2" />
    <path d="M18 13v4a2 2 0 0 1-2 2h-1v2" />
  </svg>
);
const IconStetho = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 3v6a4 4 0 0 0 8 0V3" />
    <path d="M12 3v6a4 4 0 0 0 8 0V3" />
    <path d="M8 13v2a6 6 0 0 0 12 0v-2" />
    <path d="M20 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
  </svg>
);
const IconReferral = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 7h8M8 11h6M8 15h8" />
    <path d="M6 3h12a2 2 0 0 1 2 2v16l-4-3-4 3-4-3-4 3V5a2 2 0 0 1 2-2z" />
  </svg>
);
const IconPill = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 14 14 10" />
    <path d="M7 17a5 5 0 0 1 0-7l3-3a5 5 0 0 1 7 7l-3 3a5 5 0 0 1-7 0z" />
  </svg>
);
const IconHome = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 10v11h14V10" />
    <path d="M9 21v-6h6v6" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 240, damping: 22 },
  },
};

const PatientFlow = () => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(3);

  const steps: Step[] = useMemo(
    () => [
      {
        id: "docs", no: 1, title: "Siapkan Dokumen",
        desc: "Bawa kartu BPJS (fisik/Mobile JKN) dan KTP sebelum berangkat.",
        meta: "Persiapan", icon: <DotIcon><IconDoc /></DotIcon>,
      },
      {
        id: "counter", no: 2, title: "Pendaftaran Loket",
        desc: "Serahkan kartu BPJS + KTP ke petugas loket — dapatkan nomor antrean.",
        meta: "Administrasi", icon: <DotIcon><IconTicket /></DotIcon>,
      },
      {
        id: "verify", no: 3, title: "Verifikasi BPJS",
        desc: "Petugas cek status kepesertaan & masa aktif kartu di sistem.",
        meta: "Validasi", icon: <DotIcon><IconCheck /></DotIcon>,
      },
      {
        id: "wait", no: 4, title: "Menunggu Poli",
        desc: "Tunggu panggilan nama di ruang tunggu poli yang dituju.",
        meta: "Antrian", icon: <DotIcon><IconChair /></DotIcon>,
      },
      {
        id: "exam", no: 5, title: "Pemeriksaan Dokter",
        desc: "Dokter memeriksa, diagnosis, dan menerbitkan resep obat.",
        meta: "Klinis", icon: <DotIcon><IconStetho /></DotIcon>,
      },
      {
        id: "referral", no: 6, title: "Rujukan (jika perlu)",
        desc: "Jika perlu tindakan lanjut, dokter terbitkan surat rujukan ke RS.",
        meta: "Lanjutan", icon: <DotIcon><IconReferral /></DotIcon>,
      },
      {
        id: "meds", no: 7, title: "Ambil Obat",
        desc: "Serahkan resep di apotek — obat BPJS diberikan gratis.",
        meta: "Farmasi", icon: <DotIcon><IconPill /></DotIcon>,
      },
      {
        id: "done", no: 8, title: "Selesai & Pulang",
        desc: "Rekam medis tersimpan otomatis. Kembali sesuai jadwal follow-up.",
        meta: "Penutup", icon: <DotIcon><IconHome /></DotIcon>,
      },
    ],
    []
  );

  const activeIdx = Math.max(0, Math.min(steps.length - 1, active - 1));
  const a = steps[activeIdx];

  return (
    <section id="patient-flow" className="min-h-screen bg-[#f7f2ea] text-black/80">
      {/* background rings */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-black/5" />
        <div className="absolute -right-20 -top-20 h-[380px] w-[380px] rounded-full border border-black/5" />
        <div className="absolute -left-40 -bottom-40 h-[520px] w-[520px] rounded-full border border-black/5" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-14">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          className="flex flex-col gap-6"
        >
          <div className="text-sm tracking-widest text-black/50">ALUR PELAYANAN BPJS</div>
          <div className="flex flex-wrap items-end gap-x-3 gap-y-2">
            <h2 className="text-5xl font-semibold tracking-tight text-black/80" style={{ fontFamily: "'Playfair Display', serif" }}>
              Berobat dengan
            </h2>
            <span className="text-5xl font-semibold tracking-tight text-emerald-600" style={{ fontFamily: "'Playfair Display', serif" }}>
              BPJS
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-black/55">
            <span className="rounded-full border border-black/10 bg-white/50 px-3 py-1 backdrop-blur">
              🪪 Kartu BPJS (fisik / Mobile JKN)
            </span>
            <span className="rounded-full border border-black/10 bg-white/50 px-3 py-1 backdrop-blur">
              🆔 KTP
            </span>
            <span className="ml-auto hidden text-xs text-black/40 md:block">
              Klik step di timeline untuk fokus
            </span>
          </div>
        </motion.div>

        {/* Layout */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[320px_1fr]">
          {/* Timeline */}
          <div className="relative">
            <div className="sticky top-10">
              <div className="relative pl-10">
                {/* rail */}
                <div className="absolute left-4 top-2 h-[calc(100%-8px)] w-px bg-black/10" />

                {/* progress */}
                <motion.div
                  className="absolute left-4 top-2 w-px bg-emerald-600/60"
                  animate={reduce ? undefined : { height: `${(activeIdx / (steps.length - 1)) * 100}%` }}
                  transition={{ type: "spring", stiffness: 200, damping: 26 }}
                  style={{ height: `${(activeIdx / (steps.length - 1)) * 100}%` }}
                />

                {/* traveling pulse */}
                <AnimatePresence>
                  {!reduce && (
                    <motion.div
                      key={activeIdx}
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: activeIdx * 68 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 240, damping: 24 }}
                      className="absolute left-4 top-2 -translate-x-1/2"
                    >
                      <motion.span
                        className="block h-3 w-3 rounded-full bg-emerald-600/70"
                        animate={{ scale: [1, 1.8, 1], opacity: [0.9, 0.35, 0.9] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-3">
                  {steps.map((s, idx) => {
                    const isActive = idx === activeIdx;
                    const isDone = idx < activeIdx;
                    return (
                      <motion.button
                        key={s.id}
                        onClick={() => setActive(s.no)}
                        whileHover={reduce ? undefined : { x: 4 }}
                        whileTap={reduce ? undefined : { scale: 0.99 }}
                        className="group flex w-full items-center gap-3 rounded-2xl px-2 py-2 text-left"
                      >
                        <div className="relative">
                          <div className={[
                            "grid h-10 w-10 place-items-center rounded-full border",
                            isActive
                              ? "border-emerald-600/40 bg-emerald-50 text-emerald-700"
                              : isDone
                              ? "border-emerald-600/25 bg-emerald-50/60 text-emerald-700/70"
                              : "border-black/10 bg-white/60 text-black/60",
                          ].join(" ")}>
                            {React.isValidElement(s.icon) ? (s.icon as React.ReactElement<{ children: React.ReactNode }>).props.children : s.icon}
                          </div>
                          <div className={[
                            "absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full text-[10px] font-semibold",
                            isActive ? "bg-emerald-600 text-white" : "bg-black/5 text-black/55",
                          ].join(" ")}>
                            {s.no}
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <div className={[
                              "truncate text-sm font-semibold",
                              isActive ? "text-black/85" : "text-black/65",
                            ].join(" ")}>
                              {s.title}
                            </div>
                            {isActive && (
                              <span className="rounded-full border border-emerald-600/25 bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                                FOCUS
                              </span>
                            )}
                          </div>
                          <div className="mt-0.5 text-xs text-black/40">{s.meta}</div>
                        </div>
                        <div className="text-xs text-black/35 group-hover:text-black/55">→</div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Controls */}
                <div className="mt-6 flex items-center gap-2 pl-2">
                  <button
                    className="rounded-full border border-black/10 bg-white/55 px-4 py-2 text-sm backdrop-blur hover:bg-white/75"
                    onClick={() => setActive((v) => Math.max(1, v - 1))}
                  >
                    Prev
                  </button>
                  <button
                    className="rounded-full border border-black/10 bg-white/55 px-4 py-2 text-sm backdrop-blur hover:bg-white/75"
                    onClick={() => setActive((v) => Math.min(steps.length, v + 1))}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content panel */}
          <div>
            <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white/45 p-8 shadow-sm backdrop-blur">
              <div className="pointer-events-none absolute inset-0" style={{
                background: "radial-gradient(900px circle at 15% 0%, rgba(16,185,129,0.16), transparent 55%), radial-gradient(900px circle at 80% 70%, rgba(0,0,0,0.05), transparent 55%)",
              }} />

              <div className="relative">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="text-xs font-semibold tracking-widest text-black/45">
                      STEP {String(a.no).padStart(2, "0")}
                    </div>
                    <h3 className="mt-2 text-4xl font-semibold leading-tight tracking-tight text-black/85" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {a.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/60">{a.desc}</p>
                  </div>

                  <div className="hidden md:block">
                    <motion.div
                      key={a.id}
                      initial={reduce ? false : { opacity: 0, rotate: -6, scale: 0.98 }}
                      animate={reduce ? undefined : { opacity: 1, rotate: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 220, damping: 18 }}
                      className="grid h-14 w-14 place-items-center rounded-2xl border border-black/10 bg-white/60 text-black/70"
                    >
                      {React.isValidElement(a.icon) ? (a.icon as React.ReactElement<{ children: React.ReactNode }>).props.children : a.icon}
                    </motion.div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-2">
                    <div className="text-xs font-semibold tracking-widest text-black/45">INFO</div>
                    <div className="text-sm leading-relaxed text-black/55">
                      Mitra resmi BPJS Kesehatan — melayani peserta Rawat Jalan & Rawat Inap. Siapkan dokumen sebelum datang.
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-2">
                    <div className="text-xs font-semibold tracking-widest text-black/45">STATUS</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-black/10 bg-white/55 px-3 py-1 text-xs text-black/55">
                        Progress: {activeIdx + 1}/{steps.length}
                      </span>
                      <span className="rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-xs text-emerald-700">
                        {a.meta}
                      </span>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-8">
                  <div className="text-xs font-semibold tracking-widest text-black/45">SELANJUTNYA</div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={steps[Math.min(steps.length - 1, activeIdx + 1)]?.id}
                      initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                      transition={{ type: "spring", stiffness: 220, damping: 22 }}
                      className="mt-2 flex items-center justify-between rounded-2xl border border-black/10 bg-white/55 px-4 py-3"
                    >
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold text-black/75">
                          {steps[Math.min(steps.length - 1, activeIdx + 1)]?.title}
                        </div>
                        <div className="text-xs text-black/45">
                          {steps[Math.min(steps.length - 1, activeIdx + 1)]?.meta}
                        </div>
                      </div>
                      <div className="text-xs text-black/40">→</div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Darurat note */}
                <div className="mt-6 flex items-start gap-3 rounded-xl px-4 py-3"
                  style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)' }}>
                  <span className="text-base flex-shrink-0">🚨</span>
                  <p className="text-xs text-black/50 leading-relaxed">
                    <span className="font-semibold text-red-500">Kondisi Darurat:</span>{' '}
                    Langsung ke IGD — tidak perlu surat rujukan. Tunjukkan kartu BPJS ke petugas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientFlow;
