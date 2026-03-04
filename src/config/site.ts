export const SITE_INFO = {
  name: 'Puskesmas Balowerti',
  address: 'Jl. Balowerti GG V No 68, Kediri',
  phoneDisplay: '(0354) 689746',
  phoneTel: '0354689746',
  whatsappDisplay: '0851-7892-2096',
  whatsappInternational: '6285178922096',
  email: 'puskesmas.balowerti@kediri.go.id',
} as const;

export const OPERATIONAL_HOURS = {
  clinicFull: 'Senin-Sabtu 07.30-17.00 WIB',
  clinicCompact: 'Senin-Sabtu: 07.30-17.00',
  clinicWindow: '07.30 - 17.00',
  doctorShift: 'Sen-Sab 07.30-17.00',
  emergency: 'IGD 24 Jam',
  combined: 'Senin-Sabtu 07.30-17.00 WIB | IGD 24 Jam',
} as const;

export const QUEUE_INFO = {
  realtimeEnabled: false,
  queueSnapshot: 'Konfirmasi di loket',
  waitEstimate: '15-30 menit (jam ramai)',
  note: 'Estimasi dapat berubah sesuai kondisi kunjungan harian.',
} as const;

export const buildWhatsAppUrl = (message: string): string =>
  `https://wa.me/${SITE_INFO.whatsappInternational}?text=${encodeURIComponent(message)}`;

export const getSafeCrewPortalUrl = (
  rawUrl: string | undefined,
  allowLocalhost = false
): string | null => {
  if (!rawUrl) return null;

  try {
    const parsed = new URL(rawUrl);
    const protocol = parsed.protocol.toLowerCase();
    if (protocol !== 'http:' && protocol !== 'https:') return null;

    const hostname = parsed.hostname.toLowerCase();
    const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
    if (isLocalhost && !allowLocalhost) return null;

    return parsed.toString();
  } catch {
    return null;
  }
};
