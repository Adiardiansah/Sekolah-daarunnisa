import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, CheckCheck } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import { createWhatsAppUrl } from '../utils/helpers';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const defaultGreeting = `Assalamu'alaikum Admin ${schoolInfo.name}, saya ingin bertanya seputar pendaftaran siswa baru.`;

  const quickPrompts = [
    { label: "Biaya & Uang Pangkal", text: "Assalamu'alaikum, boleh minta rincian biaya pendaftaran dan SPP?" },
    { label: "Jadwal School Tour", text: "Assalamu'alaikum, saya ingin reservasi waktu berkunjung ke sekolah." },
    { label: "Target Tahfidz Qur'an", text: "Assalamu'alaikum, bagaimana metode dan target hafalan Qur'an di Daarunnisa?" }
  ];

  const handleSend = (text: string) => {
    const url = createWhatsAppUrl(schoolInfo.whatsappNumber, text);
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      
      {/* Interactive Chat Popup Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden animate-in slide-in-from-bottom-5 duration-200 text-slate-800">
          
          {/* Header of Popup */}
          <div className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-950 border-2 border-emerald-400 flex items-center justify-center text-amber-300 font-bold text-sm">
                  DN
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-900 rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Admin PPDB Daarunnisa</h4>
                <p className="text-[11px] text-emerald-200 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Online • Siap Membantu
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-emerald-200 hover:text-white p-1 rounded-lg hover:bg-emerald-700/50"
              aria-label="Tutup popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            {/* Incoming school message */}
            <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200/80 shadow-2xs max-w-[90%]">
              <p className="text-xs text-slate-700 leading-relaxed">
                Assalamu'alaikum Ayah/Bunda! Selamat datang di <strong>{schoolInfo.name}</strong>. Ada yang bisa kami bantu seputar pendaftaran siswa baru atau kurikulum?
              </p>
              <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-400">
                <span>Baru saja</span>
                <CheckCheck className="w-3 h-3 text-emerald-600" />
              </div>
            </div>

            {/* Quick Prompt Chips */}
            <div className="pt-1">
              <p className="text-[11px] font-semibold text-slate-500 mb-1.5">Pertanyaan cepat:</p>
              <div className="space-y-1.5">
                {quickPrompts.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(item.text)}
                    className="w-full text-left px-3 py-1.5 rounded-xl bg-emerald-50/70 hover:bg-emerald-100 border border-emerald-200/70 text-emerald-900 text-xs font-medium transition-colors"
                  >
                    💬 {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Custom Message Input Footer */}
          <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              placeholder="Ketik pertanyaan Anda..."
              onKeyDown={(e) => {
                if (e.key === 'Enter' && customMsg.trim()) {
                  handleSend(customMsg);
                }
              }}
              className="flex-1 text-xs px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-600 bg-slate-50"
            />
            <button
              onClick={() => handleSend(customMsg.trim() || defaultGreeting)}
              className="p-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs transition-colors shrink-0"
              aria-label="Kirim ke WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* Main Floating WhatsApp Bubble Trigger */}
      <div className="flex items-center gap-2.5">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-white text-slate-800 text-xs font-bold rounded-full shadow-lg border border-slate-100 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Tanya Admin PPDB</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-emerald-300"
          aria-label="Buka Chat WhatsApp"
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <>
              <MessageCircle className="w-7 h-7 fill-white/20" />
              <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping"></span>
              </span>
            </>
          )}
        </button>
      </div>

    </div>
  );
};
