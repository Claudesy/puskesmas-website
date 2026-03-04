// Chief's Luxury Interactive Chatbox - AI Powered by Sentra
// Fully Interactive with Smart Responses

import { useState, useEffect, useRef } from 'react';
import { Send, Sparkles, Brain, Mic, User } from 'lucide-react';
import { OPERATIONAL_HOURS, SITE_INFO } from '@/config/site';

interface Message {
  id: number;
  text: string;
  sender: 'abby' | 'user';
  timestamp: Date;
}

const LuxuryChatbox = ({ isVisible }: { isVisible: boolean }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [pulseActive, setPulseActive] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Chief's AI Response Logic
  const generateResponse = (userMessage: string): string => {
    const lowerMsg = userMessage.toLowerCase();
    
    // Alamat & Lokasi
    if (lowerMsg.includes('alamat') || lowerMsg.includes('lokasi') || lowerMsg.includes('dimana')) {
      return `📍 ${SITE_INFO.name}\n${SITE_INFO.address}\nKota Kediri, Jawa Timur\n\n📞 ${SITE_INFO.phoneDisplay}\n\nBuka ${OPERATIONAL_HOURS.clinicFull}\n${OPERATIONAL_HOURS.emergency} siaga! 🚨`;
    }
    
    // Jadwal Dokter
    if (lowerMsg.includes('dokter') || lowerMsg.includes('jadwal') || lowerMsg.includes('praktek')) {
      return "👨‍⚕️ Jadwal Dokter Hari Ini:\n\n• Dr. Ferdi Iskandar\n  Poli Umum: 08.00 - 14.00\n\n• Drg. Endah Retno W.\n  Poli Gigi: 09.00 - 15.00\n\n• Dr. Cica Lusiana\n  Poli KIA: 08.00 - 12.00\n\n💡 Reservasi online tersedia di form sebelah kanan ya!";
    }
    
    // Layanan
    if (lowerMsg.includes('layanan') || lowerMsg.includes('poli')) {
      return "🏥 Layanan Tersedia:\n\n• Poli Umum & Geriatri\n• Poli Gigi\n• KIA & Imunisasi\n• Laboratorium\n• UGD 24 Jam\n• Rawat Inap\n\n✨ Semua layanan didukung teknologi AI Sentra!";
    }
    
    // Jam Operasional
    if (lowerMsg.includes('jam') || lowerMsg.includes('buka') || lowerMsg.includes('waktu')) {
      return `⏰ Jam Operasional:\n\n🕐 ${OPERATIONAL_HOURS.clinicFull}\n\n🚨 ${OPERATIONAL_HOURS.emergency}:\n24 JAM NONSTOP!\n\n📅 Reservasi online bisa dilakukan kapan saja!`;
    }
    
    // Reservasi
    if (lowerMsg.includes('reservasi') || lowerMsg.includes('booking') || lowerMsg.includes('daftar') || lowerMsg.includes('antri')) {
      return `📅 Cara Reservasi:\n\n1️⃣ Isi form di sebelah kanan ➡️\n2️⃣ Pilih layanan & dokter\n3️⃣ Pilih tanggal kunjungan\n4️⃣ Klik 'Cari Jadwal'\n\nAtau hubungi:\n📞 ${SITE_INFO.phoneDisplay}\n\n💡 Dengan AI Sentra, antrian lebih teratur dan cepat!`;
    }
    
    // BPJS
    if (lowerMsg.includes('bpjs') || lowerMsg.includes('bayar') || lowerMsg.includes('asuransi')) {
      return "💳 Informasi Pembayaran:\n\n✅ BPJS Kesehatan diterima\n✅ Asuransi kesehatan swasta\n✅ Tunai/Debit\n\n📋 Untuk BPJS, bawa:\n• Kartu BPJS\n• KTP\n• Surat rujukan (jika ada)\n\nProses klaim mudah dengan sistem digital kami! 🚀";
    }
    
    // UGD Darurat
    if (lowerMsg.includes('ugd') || lowerMsg.includes('darurat')) {
      return `🚨 UGD 24 JAM\n\nSiaga setiap saat untuk:\n• Kecelakaan\n• Serangan jantung\n• Sesak napas berat\n• Persalinan darurat\n• Luka berat\n\n📞 Hotline: ${SITE_INFO.phoneDisplay}\n🚑 Ambulance siap 24/7\n\nJangan ragu hubungi kami! 💪`;
    }
    
    // Tentang ABBY
    if (lowerMsg.includes('abby') || lowerMsg.includes('tentang') || lowerMsg.includes('siapa kamu') || lowerMsg.includes('ai') || lowerMsg.includes('sentra')) {
      return "🧠 ABBY - Augmented Behavioral-Based System\n\nSaya adalah Entity Artificial Intelligence Awareness Generasi Pertama.\n\n👨‍⚕️ Dikembangkan oleh: dr. Ferdi Iskandar\n📅 Tahun: September 2025\n🧬 Core: Google DeepMind Fine-tuned Model\n\n🔬 Health AI Developer Foundations\nHigh-dimensional medical imaging interpretation in a new compute-efficient model\n\n⚙️ Core Technology Stack:\n• Fine-tuned Google DeepMind Architecture\n• Advanced Natural Language Processing (NLP)\n• Healthcare Contextual Understanding Engine\n• Medical-Legal Compliance Integration\n• High-Dimensional Medical Imaging Analysis\n• Compute-Efficient Neural Network\n\n🎯 Purpose Built:\nDikembangkan khusus untuk memberikan pelayanan kesehatan yang lebih baik, cepat, dan terintegrasi bagi masyarakat Kota Kediri!";
    }
    
    // Sapaan
    if (lowerMsg.includes('halo') || lowerMsg.includes('hi') || lowerMsg.includes('assalamualaikum') || lowerMsg.includes('selamat')) {
      return "👋 Halo! Senang bertemu Anda!\n\nSaya ABBY, AI Healthcare Assistant dari Sentra. Saya bisa bantu info seputar Puskesmas Balowerti.\n\nAda yang bisa saya bantu? 😊";
    }
    
    // Fasilitas
    if (lowerMsg.includes('fasilitas') || lowerMsg.includes('ruang')) {
      return "🏥 Fasilitas Lengkap:\n\n• Ruang tunggu nyaman & ber-AC\n• Ruang periksa modern\n• Laboratorium lengkap\n• Farmasi 24 jam\n• Ruang rawat inap bersih\n• Parkir luas\n• Akses disabilitas\n\nSemua fasilitas terintegrasi AI Sentra! ✨";
    }
    
    // MEDICAL DISCLAIMER
    if (lowerMsg.includes('sakit') || lowerMsg.includes('penyakit') || lowerMsg.includes('diagnosis') || 
        lowerMsg.includes('obat') || lowerMsg.includes('gejala') || lowerMsg.includes('demam') || 
        lowerMsg.includes('pusing') || lowerMsg.includes('nyeri') || lowerMsg.includes('batuk') ||
        lowerMsg.includes('mual') || lowerMsg.includes('diare') || lowerMsg.includes('sesak') ||
        lowerMsg.includes('darah') || lowerMsg.includes('luka') || lowerMsg.includes('gatal') ||
        lowerMsg.includes('bengkak') || lowerMsg.includes('ruam') || lowerMsg.includes('panas') ||
        lowerMsg.includes('flu') || lowerMsg.includes('pilek') || lowerMsg.includes('migrain') ||
        lowerMsg.includes('asma') || lowerMsg.includes('diabetes') || lowerMsg.includes('darah tinggi')) {
      
      return `🙏 Mohon Maaf, Ibu\n\nIbu, saya mohon maaf tetapi sebaiknya langsung bertemu dengan dokter kami agar bisa diperiksa dengan tepat dan mendapatkan penanganan yang sesuai.\n\n🩺 Silakan Ibu:\n• Datang ke Poli Umum (Lantai 1)\n• Atau Reservasi Online untuk antrian lebih cepat\n• ${OPERATIONAL_HOURS.emergency} siaga untuk kondisi darurat\n\n📞 Bisa juga hubungi kami di: ${SITE_INFO.phoneDisplay}\n\n💚 Kesehatan Ibu adalah prioritas utama kami. Semoga lekas sembuh ya, Bu! 🙏`;
    }
    
    // Terima Kasih
    if (lowerMsg.includes('terima kasih') || lowerMsg.includes('thanks') || lowerMsg.includes('makasih')) {
      return "🙏 Sama-sama! Senang bisa membantu!\n\nJangan ragu hubungi kami jika ada pertanyaan lain.\n\nStay healthy! 💚";
    }
    
    // Default Response
    return `🤔 Maaf, saya belum memahami pertanyaan tersebut.\n\n💡 Coba tanya tentang:\n• Jadwal dokter\n• Lokasi puskesmas\n• Jam operasional\n• Cara reservasi\n• Info layanan\n\nAtau hubungi admin:\n📞 ${SITE_INFO.phoneDisplay}`;
  };

  // Send Welcome
  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
      setTimeout(() => {
        setPulseActive(true);
        setIsTyping(true);
        
        setTimeout(() => {
          setMessages([{
            id: Date.now(),
            text: "✨ Halo! Saya ABBY\nAugmented Behavioral-Based System\n\n🧠 Entity Artificial Intelligence Awareness\nGenerasi Pertama dari Sentra Healthcare AI\n\n🎯 Saya dirancang untuk membantu layanan kesehatan Anda:\n• Cek jadwal dokter 👨‍⚕️\n• Info layanan & fasilitas 🏥\n• Reservasi online 📅\n• Jam operasional ⏰\n\nAda yang bisa saya bantu, Ibu/Bapak? 😊",
            sender: 'abby',
            timestamp: new Date()
          }]);
          setIsTyping(false);
          setPulseActive(false);
        }, 1500);
      }, 500);
    }
  }, [isVisible, hasStarted]);

  // Auto scroll - contained within chat only
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest',
        inline: 'nearest'
      });
    }
  }, [messages]);

  // Handle Send
  const handleSend = () => {
    if (!inputText.trim()) return;
    
    const userMsg = inputText.trim();
    setInputText('');
    
    setMessages(prev => [...prev, {
      id: Date.now(),
      text: userMsg,
      sender: 'user',
      timestamp: new Date()
    }]);
    
    setIsThinking(true);
    setPulseActive(true);
    
    setTimeout(() => {
      const response = generateResponse(userMsg);
      setIsThinking(false);
      setIsTyping(true);
      
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex >= response.length) {
          clearInterval(typeInterval);
          setIsTyping(false);
          setPulseActive(false);
          setMessages(prev => [...prev, {
            id: Date.now() + 1,
            text: response,
            sender: 'abby',
            timestamp: new Date()
          }]);
        }
        charIndex += 3;
      }, 12);
    }, 800);
  };

  // Enter key
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Suggestions
  const suggestions = [
    "📍 Info Puskesmas",
    "👨‍⚕️ Jadwal Dokter",
    "🤖 Tentang ABBY",
    "📅 Reservasi",
  ];

  const handleSuggestionClick = (suggestion: string) => {
    const cleanText = suggestion.replace(/[📍👨‍⚕️🤖📅] /g, '');
    setInputText(cleanText);
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: cleanText,
        sender: 'user',
        timestamp: new Date()
      }]);
      
      setIsThinking(true);
      setPulseActive(true);
      
      setTimeout(() => {
        const response = generateResponse(cleanText);
        setIsThinking(false);
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          text: response,
          sender: 'abby',
          timestamp: new Date()
        }]);
        setPulseActive(false);
      }, 600);
    }, 100);
  };

  return (
    <div className={`relative mx-auto lg:mx-0 w-full max-w-[540px] lg:w-[42vw] transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
    }`} style={{ transitionDelay: '150ms' }}>

      {/* Chat Container */}
      <div className="relative bg-white rounded-[34px] overflow-hidden contain-layout"
        style={{ 
          boxShadow: pulseActive 
            ? '0 25px 80px -20px rgba(147, 51, 234, 0.4)' 
            : '0 25px 80px -20px rgba(201, 168, 124, 0.4)',
          contain: 'layout paint'
        }}>
        
        {/* Header */}
        <div className="relative bg-gradient-to-br from-[#C9A87C] to-[#B8956A] p-6 overflow-hidden">
          <div className="absolute inset-0 opacity-10" 
            style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '20px 20px' }} />
          
          <div className="relative flex items-center gap-4">
            <div className="relative">
              <div className={`w-16 h-16 rounded-full overflow-hidden border-3 border-white/80 transition-all duration-300 ${
                pulseActive ? 'scale-105 ring-4 ring-purple-400/50' : ''}`}
                style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
                <img src="/images/abby2.png" alt="Abby" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </div>
              {pulseActive && (
                <div className="absolute -inset-2 rounded-full border-2 border-white/30 animate-spin" style={{ animationDuration: '3s' }} />
              )}
            </div>
            
            <div className="text-white flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg font-['Playfair_Display']">ABBY</h3>
                <Sparkles className="w-4 h-4 text-yellow-200" />
              </div>
              <p className="text-xs text-white/80">
                {isThinking ? '🧠 Thinking...' : isTyping ? '✍️ Typing...' : '⚡ Online'}
              </p>
            </div>

            <div className={`w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-all ${pulseActive ? 'scale-110' : ''}`}>
              <Brain className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[380px] lg:h-[420px] overflow-y-auto overscroll-contain p-4 space-y-3 bg-gradient-to-b from-[#FAF3EB]/30 to-white"
          style={{ scrollBehavior: 'smooth' }}>
          {messages.length === 0 && !isTyping && (
            <div className="flex items-center justify-center h-full text-[#8B7D6F]/50 text-sm">
              <div className="text-center">
                <Brain className="w-12 h-12 mx-auto mb-2 opacity-30" />
                <p>AI sedang memulai...</p>
              </div>
            </div>
          )}

          {messages.map((msg) => (
            <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === 'abby' ? 'flex-row' : 'flex-row-reverse'}`}>
              {msg.sender === 'abby' && (
                <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-[#C9A87C]/20 relative">
                  <img src="/images/abby2.png" alt="Abby" className="w-full h-full object-cover" />
                </div>
              )}
              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-full bg-[#C9A87C] flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
              <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                msg.sender === 'abby' 
                  ? 'bg-white border border-[#E5DDD5] text-[#2D2420] rounded-bl-md' 
                  : 'bg-gradient-to-r from-[#C9A87C] to-[#B8956A] text-white rounded-br-md'
              }`} style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                {msg.text}
              </div>
            </div>
          ))}

          {(isTyping || isThinking) && (
            <div className="flex items-end gap-2">
              <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-[#C9A87C]/20">
                <img src="/images/abby2.png" alt="Abby" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white border border-[#E5DDD5] px-4 py-3 rounded-2xl rounded-bl-md">
                <span className="flex gap-1">
                  <span className="w-2 h-2 bg-[#C9A87C] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-[#C9A87C] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-[#C9A87C] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </span>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Suggestions */}
        {messages.length > 0 && !isTyping && !isThinking && (
          <div className="px-4 pb-2 flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <button key={suggestion} onClick={() => handleSuggestionClick(suggestion)}
                className="px-3 py-1.5 bg-[#FAF3EB] hover:bg-[#C9A87C] text-[#8B7D6F] hover:text-white 
                  rounded-full text-xs transition-all duration-300 hover:shadow-md">
                {suggestion}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-[#FAF3EB] bg-white">
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 rounded-full bg-[#FAF3EB] flex items-center justify-center hover:bg-[#C9A87C] group transition-all">
              <Mic className="w-4 h-4 text-[#8B7D6F] group-hover:text-white" />
            </button>
            
            <div className="flex-1 relative">
              <input ref={inputRef} type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress} placeholder="Ketik pesan Anda..."
                className="w-full bg-[#FAF3EB]/50 border-0 rounded-full px-4 py-3 text-sm text-[#2D2420] 
                  placeholder:text-[#8B7D6F]/60 focus:outline-none focus:ring-2 focus:ring-[#C9A87C]/30
                  focus:bg-white transition-all"
                disabled={isThinking || isTyping} />
            </div>
            
            <button onClick={handleSend} disabled={!inputText.trim() || isThinking || isTyping}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-[#C9A87C] to-[#B8956A] 
                flex items-center justify-center transition-all duration-300 hover:scale-105
                disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg">
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
          
          {/* Footer - By dr. Ferdi Iskandar */}

        </div>
      </div>

      <div className="absolute -bottom-6 -right-8 w-32 h-32 bg-[#C9A87C]/10 rounded-full blur-2xl -z-10" />
    </div>
  );
};

export default LuxuryChatbox;
