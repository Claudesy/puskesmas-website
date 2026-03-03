// Hero Section - Efficient & Clean Design
import { useState, useEffect, useRef } from 'react';
import { Clock, MapPin, Video, Siren, ChevronDown, User, Phone, Calendar, Stethoscope, MessageCircle, Activity, Baby, FlaskConical, HeartPulse, Home, Microscope } from 'lucide-react';
import { buildWhatsAppUrl, OPERATIONAL_HOURS } from '@/config/site';

type Mode = 'kunjungan' | 'telemedicine' | 'darurat';

const doctors = [
  { name: 'dr. Ferdi Iskandar', poli: 'Poli Umum', shift: OPERATIONAL_HOURS.doctorShift, img: '/images/ferdi.png' },
  { name: 'dr. Cica Lusiana', poli: 'Poli Lansia', shift: OPERATIONAL_HOURS.doctorShift, img: '/images/cica.webp' },
  { name: 'dr. Rachmad Juni T.', poli: 'IGD', shift: OPERATIONAL_HOURS.emergency, img: '/images/rachmad.png' },
  { name: 'drg. Endah Retno W.', poli: 'Poli Gigi', shift: OPERATIONAL_HOURS.doctorShift, img: '/images/endah.avif' },
];

const layananList = [
  { id: 'Poli Umum', label: 'Poli Umum', icon: Stethoscope, desc: 'Pemeriksaan umum' },
  { id: 'Poli Lansia', label: 'Poli Lansia', icon: HeartPulse, desc: 'Layanan lansia' },
  { id: 'Poli Gigi', label: 'Poli Gigi', icon: Activity, desc: 'Kesehatan gigi' },
  { id: 'KIA', label: 'KIA / Anak', icon: Baby, desc: 'Ibu & anak' },
  { id: 'VCT', label: 'VCT', icon: Microscope, desc: 'Konseling & tes' },
  { id: 'Laboratorium', label: 'Laboratorium', icon: FlaskConical, desc: 'Pemeriksaan lab' },
  { id: 'IGD', label: 'IGD', icon: Home, desc: 'Gawat darurat' },
];
const poliList = [
  { id: 'Poli Umum', label: 'Poli Umum', icon: Stethoscope, desc: 'Pemeriksaan umum' },
  { id: 'Poli Gigi', label: 'Poli Gigi', icon: Activity, desc: 'Kesehatan gigi' },
  { id: 'Poli Lansia', label: 'Poli Lansia', icon: HeartPulse, desc: 'Layanan lansia' },
  { id: 'KIA / Anak', label: 'KIA / Anak', icon: Baby, desc: 'Ibu & anak' },
  { id: 'Kesehatan Jiwa', label: 'Kesehatan Jiwa', icon: Microscope, desc: 'Konseling jiwa' },
];

const waktuList = [
  { id: '07:30 - 09:00', label: '07:30 - 09:00', icon: Clock, desc: 'Pagi awal' },
  { id: '09:00 - 11:00', label: '09:00 - 11:00', icon: Clock, desc: 'Pagi' },
  { id: '11:00 - 13:00', label: '11:00 - 13:00', icon: Clock, desc: 'Siang' },
  { id: '13:00 - 15:00', label: '13:00 - 15:00', icon: Clock, desc: 'Sore awal' },
  { id: '15:00 - 17:00', label: '15:00 - 17:00', icon: Clock, desc: 'Sore' },
];

export default function Hero() {
  const [mode, setMode] = useState<Mode>('kunjungan');
  const [loaded, setLoaded] = useState(false);
  const [layanan, setLayanan] = useState('');
  const [showDoctors, setShowDoctors] = useState(false);
  
  // Form states
  const [form, setForm] = useState({ nama: '', hp: '', tanggal: '', waktu: '' });
  const [tele, setTele] = useState({ nama: '', usia: '', hp: '', poli: '', keluhan: '' });


  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  const sendWA = (text: string) => window.open(buildWhatsAppUrl(text), '_blank');

  const handleKunjungan = () => {
    if (!form.nama || !form.hp || !form.tanggal || !form.waktu) return alert('Lengkapi data!');
    sendWA(`*RESERVASI KUNJUNGAN*\n\nNama: ${form.nama}\nHP: ${form.hp}\nLayanan: ${layanan}\nTanggal: ${form.tanggal}\nWaktu: ${form.waktu}`);
  };

  const handleTele = () => {
    if (!tele.nama || !tele.hp || !tele.keluhan) return alert('Lengkapi data!');
    sendWA(`*TELEMEDICINE*\n\nNama: ${tele.nama}\nUsia: ${tele.usia}\nHP: ${tele.hp}\nPoli: ${tele.poli}\nKeluhan: ${tele.keluhan}`);
  };



  const TabButton = ({ id, icon: Icon, label, color }: { id: Mode; icon: any; label: string; color: string }) => (
    <button
      onClick={() => setMode(id)}
      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${
        mode === id ? `${color} text-white shadow-lg` : 'text-[#8B7D6F] hover:text-[#2D2420]'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );

  return (
    <section id="hero" className="relative w-full bg-[#F8F5F2] overflow-hidden pt-24" style={{ paddingBottom: '80px' }}>
      {/* Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(201,168,124,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(201,168,124,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#C9A87C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#C9A87C]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 lg:px-[7vw]">
        {/* Header */}
        <div className={`text-center mb-10 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-white/60 rounded-full text-[10px] uppercase tracking-[0.2em] text-[#8B7D6F] border border-[#EADDCB] mb-4">
            Puskesmas Balowerti Kediri
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#2D2420] leading-tight mb-4">
            Pelayanan <span className="text-[#C9A87C]">Kesehatan</span><br />Terjangkau & Berkualitas
          </h1>
          <p className="text-[#8B7D6F] max-w-lg mx-auto">Reservasi online untuk kunjungan fisik, konsultasi telemedicine, atau bantuan gawat darurat.</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Left - Character */}
          <div className={`transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative h-[560px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#FAF3EB] to-[#F8F5F2] border border-[#EADDCB] shadow-xl">
              <img src="/images/doc.png" alt="Dokter" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2420]/60 via-transparent to-transparent" />
              
              {/* Stats */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                <div className="bg-white/95 rounded-2xl p-4 border border-[#EADDCB]">
                  <Clock className="w-5 h-5 text-[#C9A87C] mb-2" />
                  <p className="text-xs text-[#8B7D6F]">Jam Operasional</p>
                  <p className="text-sm font-bold text-[#2D2420]">{OPERATIONAL_HOURS.clinicWindow}</p>
                  <p className="text-[10px] text-[#C9A87C]">{OPERATIONAL_HOURS.emergency}</p>
                </div>
                <div className="bg-white/95 rounded-2xl p-4 border border-[#EADDCB]">
                  <Stethoscope className="w-5 h-5 text-[#C9A87C] mb-2" />
                  <p className="text-xs text-[#8B7D6F]">Tenaga Nakes</p>
                  <p className="text-sm font-bold text-[#2D2420]">80+</p>
                  <p className="text-[10px] text-[#C9A87C]">Dokter, Perawat, Bidan & Kesehatan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form Card */}
          <div className={`transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-white rounded-3xl border border-[#EADDCB] shadow-xl h-[560px] flex flex-col">
              
              {/* Tabs */}
              <div className="p-2 bg-[#FAF3EB]/60 m-4 rounded-2xl flex gap-2">
                <TabButton id="kunjungan" icon={MapPin} label="Kunjungan" color="bg-[#C9A87C]" />
                <TabButton id="telemedicine" icon={Video} label="Telemedicine" color="bg-[#2D2420]" />
                <TabButton id="darurat" icon={Siren} label="Darurat" color="bg-red-600" />
              </div>

              {/* Content */}
              <div className="flex-1 px-6 pb-6 overflow-y-auto">
                
                {mode === 'kunjungan' && (
                  <div className="space-y-4">
                    {/* Step 1 - Custom Select */}
                    <CustomSelect 
                      value={layanan} 
                      onChange={(v: string) => { setLayanan(v); setShowDoctors(false); }}
                      options={layananList}
                      placeholder="Pilih Layanan"
                    />

                    {/* Info Text */}
                    <div className="bg-[#C9A87C]/10 rounded-xl p-4 border border-[#C9A87C]/20">
                      <p className="text-sm text-[#2D2420] leading-relaxed">
                        <span className="font-semibold">Tips:</span> Agar prosesnya lebih lancar, kami sangat menyarankan untuk hadir di ruang tunggu <span className="font-bold text-[#C9A87C]">15 menit</span> sebelum nomor antrean Anda.
                      </p>
                    </div>

                    <button 
                      onClick={() => setShowDoctors(true)}
                      data-magnetic
                      data-magnetic-strength="8"
                      className="w-full bg-[#2D2420] text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#1C1917] transition-colors"
                    >
                      <Clock className="w-4 h-4" /> Cari Jadwal Dokter
                    </button>

                    {/* Doctor List */}
                    {showDoctors && layanan && (
                      <div className="space-y-2">
                        {doctors.filter(d => d.poli.includes(layanan.replace('Poli ', '')) || layanan === 'IGD').map(doc => (
                          <div key={doc.name} className="flex items-center gap-3 p-3 bg-[#FAF3EB]/70 rounded-xl border border-[#EADDCB] hover:border-[#C9A87C]/30 transition-colors cursor-pointer">
                            <img src={doc.img} alt={doc.name} className="w-10 h-10 rounded-full object-cover border border-[#EADDCB]" />
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-[#2D2420]">{doc.name}</p>
                              <p className="text-xs text-[#8B7D6F]">{doc.poli} • {doc.shift}</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-[#C9A87C]/10 flex items-center justify-center">
                              <ChevronDown className="w-4 h-4 text-[#C9A87C] -rotate-90" />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Booking Form */}
                    {showDoctors && (
                      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#EADDCB]">
                        <Input icon={User} placeholder="Nama" value={form.nama} onChange={(v: string) => setForm({...form, nama: v})} />
                        <Input icon={Phone} placeholder="No HP" value={form.hp} onChange={(v: string) => setForm({...form, hp: v})} />
                        <Input icon={Calendar} type="date" value={form.tanggal} onChange={(v: string) => setForm({...form, tanggal: v})} />
                        <CustomSelect 
                          value={form.waktu} 
                          onChange={(v: string) => setForm({...form, waktu: v})}
                          options={waktuList}
                          placeholder="Pilih Waktu"
                          compact
                        />
                      </div>
                    )}

                    {showDoctors && (
                      <button 
                        onClick={handleKunjungan}
                        data-magnetic
                        data-magnetic-strength="10"
                        className="w-full bg-[#C9A87C] hover:bg-[#B8956A] text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#C9A87C]/25"
                      >
                        <MessageCircle className="w-4 h-4" /> Konfirmasi via WhatsApp
                      </button>
                    )}
                  </div>
                )}

                {mode === 'telemedicine' && (
                  <div className="space-y-4">
                    <div className="bg-[#FAF3EB] rounded-xl p-4 border border-[#EADDCB] flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#2D2420] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Video className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-sm text-[#8B7D6F]"><span className="font-semibold text-[#2D2420]">Konsultasi dari Rumah</span> — Tim merespons via WhatsApp dan Anda akan terhubung dengan Platform Telemedicine Puskesmas Balowerti</p>
                    </div>

                    <div className="grid grid-cols-4 gap-3">
                      <div className="col-span-2">
                        <Input icon={User} placeholder="Nama lengkap" value={tele.nama} onChange={(v: string) => setTele({...tele, nama: v})} />
                      </div>
                      <Input placeholder="Usia" value={tele.usia} onChange={(v: string) => setTele({...tele, usia: v})} />
                      <Input icon={Phone} placeholder="No HP" value={tele.hp} onChange={(v: string) => setTele({...tele, hp: v})} />
                    </div>

                    <CustomSelect 
                      value={tele.poli} 
                      onChange={(v: string) => setTele({...tele, poli: v})}
                      options={poliList}
                      placeholder="Pilih Poli"
                    />

                    <textarea
                      placeholder="Jelaskan keluhan..."
                      value={tele.keluhan}
                      onChange={(e) => setTele({...tele, keluhan: e.target.value})}
                      rows={3}
                      className="w-full bg-[#FAF3EB]/50 border border-[#EADDCB] rounded-xl px-3 py-3 text-sm resize-none focus:ring-2 focus:ring-[#C9A87C]/30"
                    />

                    <button 
                      onClick={handleTele}
                      data-magnetic
                      data-magnetic-strength="10"
                      className="w-full bg-[#2D2420] hover:bg-[#1C1917] text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" /> Kirim ke WhatsApp Loket
                    </button>
                  </div>
                )}

                {mode === 'darurat' && (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                    {/* Alert Icon */}
                    <div className="relative">
                      <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center animate-pulse shadow-xl shadow-red-500/40">
                        <Siren className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full animate-ping" />
                    </div>

                    {/* Info */}
                    <div>
                      <h3 className="text-2xl font-bold text-red-700 mb-2">Gawat Darurat</h3>
                      <p className="text-sm text-red-600">IGD Siap 24 Jam</p>
                      <p className="text-xs text-[#8B7D6F] mt-2 max-w-xs mx-auto">
                        Tekan tombol di bawah untuk mengirim alert darurat ke petugas IGD beserta lokasi Anda.
                      </p>
                    </div>

                    {/* Emergency Button */}
                    <button 
                      onClick={() => {
                        if (navigator.geolocation) {
                          navigator.geolocation.getCurrentPosition(
                            (pos) => {
                              const mapsUrl = `https://maps.google.com/?q=${pos.coords.latitude},${pos.coords.longitude}`;
                              sendWA(`*🚨 ALERT DARURAT IGD 🚨*\n\nLokasi Pasien:\n${mapsUrl}\n\nMohon bantuan segera!`);
                            },
                            () => {
                              sendWA(`*🚨 ALERT DARURAT IGD 🚨*\n\nPasien membutuhkan bantuan segera!\n\nMohon hubungi kembali untuk lokasi.\n\nTerima kasih.`);
                            }
                          );
                        } else {
                          sendWA(`*🚨 ALERT DARURAT IGD 🚨*\n\nPasien membutuhkan bantuan segera!\n\nMohon hubungi kembali untuk lokasi.`);
                        }
                      }}
                      data-magnetic
                      data-magnetic-strength="12"
                      className="w-full max-w-xs bg-red-600 hover:bg-red-700 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 animate-pulse shadow-2xl shadow-red-500/40 hover:scale-105 transition-transform"
                    >
                      <Siren className="w-6 h-6" /> Notify Petugas IGD Sekarang
                    </button>

                    {/* Response Time */}
                    <div className="flex items-center gap-2 text-red-600">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium">Respons &lt; 5 menit</span>
                    </div>

                    {/* Note */}
                    <p className="text-[10px] text-[#8B7D6F]">
                      Sistem akan otomatis mengirim lokasi Anda ke petugas IGD
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Input Component
function Input({ icon: Icon, type = 'text', placeholder, value, onChange }: any) {
  return (
    <div className="relative">
      {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B7D6F]" />}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-[#FAF3EB]/50 border border-[#EADDCB] rounded-xl ${Icon ? 'pl-10' : 'pl-3'} pr-3 py-3 text-sm focus:ring-2 focus:ring-[#C9A87C]/30 focus:outline-none`}
      />
    </div>
  );
}

// Custom Select Component with Glassmorphism
function CustomSelect({ value, onChange, options, placeholder, compact }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const selected = options.find((o: any) => o.id === value);
  const DefaultIcon = options[0]?.icon || Stethoscope;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      {!compact && (
        <label className="text-xs uppercase tracking-wider text-[#8B7D6F] mb-2 block font-medium">
          {placeholder}
        </label>
      )}
      
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full bg-white/80 backdrop-blur-sm border rounded-xl px-3 text-left transition-all duration-200 group ${
          compact ? 'py-2.5' : 'py-3.5 px-4'
        } ${
          isOpen || isFocused 
            ? 'border-[#C9A87C] ring-2 ring-[#C9A87C]/20 shadow-lg shadow-[#C9A87C]/10' 
            : 'border-[#EADDCB] hover:border-[#C9A87C]/50 hover:shadow-md'
        }`}
      >
        <div className="flex items-center gap-3">
          {selected ? (
            <>
              <div className={`${compact ? 'w-8 h-8' : 'w-10 h-10'} rounded-xl bg-[#C9A87C]/10 flex items-center justify-center flex-shrink-0`}>
                <selected.icon className={`${compact ? 'w-4 h-4' : 'w-5 h-5'} text-[#C9A87C]`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`font-semibold text-[#2D2420] ${compact ? 'text-xs' : 'text-sm'}`}>{selected.label}</p>
                {!compact && <p className="text-xs text-[#8B7D6F]">{selected.desc}</p>}
              </div>
            </>
          ) : (
            <>
              <div className={`${compact ? 'w-8 h-8' : 'w-10 h-10'} rounded-xl bg-[#FAF3EB] flex items-center justify-center flex-shrink-0`}>
                <DefaultIcon className={`${compact ? 'w-4 h-4' : 'w-5 h-5'} text-[#8B7D6F]`} />
              </div>
              <span className={`text-[#8B7D6F] flex-1 ${compact ? 'text-xs' : 'text-sm'}`}>{placeholder}</span>
            </>
          )}
          <ChevronDown className={`${compact ? 'w-4 h-4' : 'w-5 h-5'} text-[#8B7D6F] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`absolute z-50 w-full mt-2 bg-white/95 backdrop-blur-xl rounded-2xl border border-[#EADDCB] shadow-2xl shadow-black/10 overflow-hidden animate-in fade-in zoom-in-95 duration-200 ${compact ? 'max-h-[200px]' : 'max-h-[280px]'}`}>
          <div className={`overflow-y-auto py-2 ${compact ? 'max-h-[200px]' : 'max-h-[280px]'}`}>
            {options.map((option: any, idx: number) => (
              <button
                key={option.id}
                type="button"
                onClick={() => { onChange(option.id); setIsOpen(false); }}
                className={`w-full px-4 flex items-center gap-3 transition-all duration-150 ${
                  compact ? 'py-2' : 'py-3'
                } ${
                  value === option.id 
                    ? 'bg-[#C9A87C]/10' 
                    : 'hover:bg-[#FAF3EB]/80'
                } ${idx !== options.length - 1 ? 'border-b border-[#EADDCB]/50' : ''}`}
              >
                <div className={`${compact ? 'w-7 h-7' : 'w-9 h-9'} rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                  value === option.id ? 'bg-[#C9A87C] text-white' : 'bg-[#FAF3EB] text-[#8B7D6F]'
                }`}>
                  <option.icon className={`${compact ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
                </div>
                <div className="flex-1 text-left">
                  <p className={`font-medium text-[#2D2420] ${compact ? 'text-xs' : 'text-sm'}`}>
                    {option.label}
                  </p>
                  {!compact && <p className="text-xs text-[#8B7D6F]">{option.desc}</p>}
                </div>
                {value === option.id && (
                  <div className="w-2 h-2 rounded-full bg-[#C9A87C]" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
