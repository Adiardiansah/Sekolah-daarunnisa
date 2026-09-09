import React from 'react';
import { 
  CheckCircle2, 
  HeartHandshake, 
  BookOpen, 
  GraduationCap, 
  Sparkles, 
  Target, 
  Compass,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { schoolInfo, coreValues } from '../data/schoolData';
import { createWhatsAppUrl } from '../utils/helpers';

export const AboutSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-emerald-700" />,
    BookOpen: <BookOpen className="w-6 h-6 text-emerald-700" />,
    GraduationCap: <GraduationCap className="w-6 h-6 text-emerald-700" />,
    Sparkles: <Sparkles className="w-6 h-6 text-emerald-700" />
  };

  const waBrosurUrl = createWhatsAppUrl(
    schoolInfo.whatsappNumber,
    `Assalamu'alaikum Admin ${schoolInfo.name}, bolehkah saya meminta brosur profil sekolah, kurikulum, dan rincian biaya pendaftaran?`
  );

  return (
    <section id="tentang" className="py-20 bg-[#faf8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            Tentang Lembaga Kami
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Membangun Karakter Islami yang Tangguh dan Cerdas Sejak Dini
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Didirikan sejak tahun {schoolInfo.establishedYear}, {schoolInfo.name} hadir sebagai mitra terpercaya bagi orang tua dalam mengantarkan putra-putri tercinta menjadi insan yang shaleh, unggul secara akademik, dan berwawasan luas.
          </p>
        </div>

        {/* Story & Principal Greeting */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-2xl font-bold text-slate-900">
              Lingkungan Belajar yang Hangat, Inklusif, dan Penuh Teladan
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Kami meyakini setiap anak memiliki fitrah kebaikan dan potensi kecerdasan yang unik. Di {schoolInfo.name}, proses belajar dirancang agar anak merasa dicintai, dihargai, dan tertantang untuk menggali rasa ingin tahunya melalui penggabungan ilmu agama dan sains modern.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Dengan rasio guru dan murid yang terjaga, para asatidz dan pendidik dapat memberikan pendampingan personal kepada setiap peserta didik, baik dalam setoran hafalan Al-Qur'an harian maupun capaian kompetensi akademik.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-slate-800">
              {[
                "Pendidikan Karakter Adab Harian",
                "Metode Talaqqi Berstandar Sanad",
                "Guru Tersertifikasi & Berdedikasi",
                "Fasilitas Bersih, Aman, & Ramah Anak",
                "Pendampingan Psikologis & Bakat",
                "Komunikasi Aktif dengan Orang Tua"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={waBrosurUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Minta Brosur Lengkap (PDF) via WhatsApp</span>
              </a>
              <a
                href="#kurikulum"
                className="inline-flex items-center gap-1 px-4 py-2.5 rounded-lg border border-slate-300 hover:bg-white text-slate-700 font-semibold text-xs sm:text-sm transition-all"
              >
                <span>Lihat Kurikulum</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-100 relative">
              <div className="text-amber-500 font-['Cinzel',serif] text-5xl font-black opacity-30 leading-none select-none">
                “
              </div>
              <p className="text-slate-700 italic text-base sm:text-lg leading-relaxed -mt-4 relative z-10">
                “Pendidikan bukan sekadar mengisi bejana yang kosong, melainkan menyalakan lentera keimanan dan akal budi. Di Sekolah Daarunnisa, kami mendampingi setiap ananda agar tumbuh dengan adab yang luhur, cinta kepada Al-Qur'an, dan memiliki rasa percaya diri untuk memimpin masa depan.”
              </p>
              
              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 border-2 border-emerald-600/30 flex items-center justify-center font-bold text-emerald-800 text-lg">
                  DN
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    Ustadzah Hj. Maryam Salimah, M.Pd.I
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Kepala Sekolah & Pembina Pendidikan Karakter Daarunnisa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visi & Misi Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Visi */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Visi Sekolah</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Menjadi pusat keunggulan pendidikan Islam terpadu yang terdepan dalam melahirkan generasi Qur'ani berakhlak mulia, cerdas mandiri, unggul dalam sains teknologi, serta berdaya saing global.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Misi Sekolah</h3>
            <ul className="space-y-2.5 text-slate-600 text-sm sm:text-base">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                <span>Menanamkan aqidah yang lurus dan pembiasaan ibadah shahihah dalam kehidupan sehari-hari.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                <span>Menyelenggarakan program tahfidzul Qur'an mutqin dengan metode talaqqi dan bersanad.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                <span>Menerapkan kurikulum merdeka yang menumbuhkan nalar kritis, kreativitas, dan literasi digital.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                <span>Menciptakan iklim sekolah yang ramah, asri, aman, dan memupuk kepedulian sosial santri.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Core Values */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900">4 Pilar Nilai Karakter Utama</h3>
            <p className="text-slate-600 text-sm mt-1">Fondasi kokoh dalam setiap interaksi dan pembelajaran di Sekolah Daarunnisa</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200/80 hover:border-emerald-500/50 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {iconMap[val.icon] || <Sparkles className="w-6 h-6 text-emerald-700" />}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
