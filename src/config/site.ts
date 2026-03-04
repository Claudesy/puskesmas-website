export const WA_NUMBER = "6281234567890";

export const SITE_INFO = {
  address: "Jl. Balowerti V No. 35, Kediri, Jawa Timur",
  phone: "(0354) 683111",
  email: "pkmbalowerti@gmail.com",
};

export const OPERATIONAL_HOURS = {
  clinic: "Senin - Sabtu: 07:30 - 14:00",
  clinicCompact: "Senin - Sabtu: 07:30 - 14:00",
  clinicWindow: "07:30 - 14:00",
  emergency: "UGD & PONED: 24 Jam",
  doctorShift: "07:30 - 14:00",
};

export const QUEUE_INFO = {
  realtimeEnabled: false,
  queueSnapshot: "5-10 orang",
  waitEstimate: "15-30 menit",
  note: "Estimasi waktu tunggu dapat berubah sewaktu-waktu.",
};

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
