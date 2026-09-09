import React from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles, 
  BookOpen, 
  Users, 
  Award,
  GraduationCap
} from 'lucide-react';
import { schoolInfo, heroStats } from '../data/schoolData';
import { createWhatsAppUrl } from '../utils/helpers';

interface HeroProps {
  onOpenPPDBModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPPDBModal }) => {
  const waContactUrl = createWhatsAppUrl(
    schoolInfo.whatsappNumber,
    `Assalamu'alaikum Warahmatullahi Wabarakatuh, Admin ${schoolInfo.name}. Saya ingin menanyakan informasi pendaftaran siswa baru dan jadwal kunjungan sekolah.`
  );

  return (
    <section id="beranda" className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-teal-950 text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Subtle Background Pattern & Glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-emerald-200 text-xs sm:text-sm font-medium backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="font-semibold text-amber-300">{schoolInfo.accreditation}</span>
              <span className="text-emerald-300/40">•</span>
              <span>Penerimaan Siswa Baru 2025/2026</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Mendidik Generasi <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-emerald-200 font-['Cinzel',serif]">
                Qur'ani & Cerdas
              </span> <br />
              Berakhlak Mulia
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Selamat datang di <strong className="text-white font-semibold">{schoolInfo.name}</strong>. Lembaga pendidikan terpadu yang memadukan Kurikulum Merdeka berwawasan global dengan pembinaan Tahfidzul Qur'an dan penguatan adab Islamiyah dalam suasana belajar ramah dan menyenangkan.
            </p>

            {/* Quick Selling Points */}
            <div className="pt-2 flex flex-wrap gap-2 justify-center lg:justify-start">
              {[
                "Tahfidz Bersanad & Mutqin",
                "Metode Talaqqi & Sentra",
                "Bilingual Daily Atmosphere",
                "Pendidikan Karakter & Adab"
              ].map((badge, idx) => (
                <span 
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-emerald-100 text-xs font-medium border border-white/10"
                >
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  {badge}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenPPDBModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Daftar PPDB Daring</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={waContactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base border border-emerald-500/40 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-5 h-5 text-emerald-300" />
                <span>Hubungi via WhatsApp</span>
              </a>

              <a
                href="#kurikulum"
                className="text-xs sm:text-sm text-emerald-200 hover:text-white underline underline-offset-4 transition-colors py-2 px-1"
              >
                Lihat Kurikulum &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: Visual Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative border box */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-600/40 bg-emerald-900/60 p-2">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80" 
                  alt="Aktivitas Belajar Siswa Sekolah Daarunnisa"
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-black/20 rounded-xl"></div>

                {/* Floating Admission Callout Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-emerald-100 text-slate-800">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-emerald-900 uppercase tracking-wider">Penerimaan Siswa Baru</p>
                        <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                          KB, TK, SDIT & SMPIT Daarunnisa
                        </h2>
                      </div>
                    </div>
                    <span className="text-[11px] font-extrabold bg-amber-100 text-amber-900 px-2 py-1 rounded border border-amber-200">
                      Buka
                    </span>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span>Quota Terbatas per Kelas</span>
                    <button 
                      onClick={onOpenPPDBModal}
                      className="text-emerald-700 font-bold hover:underline"
                    >
                      Isi Formulir Online &rarr;
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative side badge */}
              <div className="hidden sm:flex absolute -top-5 -right-5 bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 font-bold p-3.5 rounded-2xl shadow-xl flex-col items-center justify-center border-2 border-white/20">
                <ShieldCheck className="w-6 h-6 mb-1 text-slate-900" />
                <span className="text-xs tracking-tight uppercase">Akreditasi</span>
                <span className="text-base font-black leading-none">Grade A</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Stats Strip */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-emerald-800/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {heroStats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-emerald-900/40 border border-emerald-800/70 backdrop-blur-sm rounded-xl p-4 sm:p-5 text-center hover:bg-emerald-900/60 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-['Cinzel',serif] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-emerald-200/80">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
