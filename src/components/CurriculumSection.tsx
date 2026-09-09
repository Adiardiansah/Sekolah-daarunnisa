import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  Award, 
  ArrowRight,
  MessageCircle,
  Clock,
  GraduationCap
} from 'lucide-react';
import { curriculumLevels, schoolInfo } from '../data/schoolData';
import { CurriculumLevel } from '../types';
import { createWhatsAppUrl } from '../utils/helpers';

interface CurriculumSectionProps {
  onSelectLevelForPPDB: (levelName: string) => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({ onSelectLevelForPPDB }) => {
  const [activeTab, setActiveTab] = useState<string>(curriculumLevels[1]?.id || 'sdit');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selected level object
  const currentLevel = curriculumLevels.find(lvl => lvl.id === activeTab) || curriculumLevels[0];

  // Filtering for quick search across all levels or active level
  const filteredHighlights = currentLevel.highlights.filter(h => 
    h.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const waAskCurriculum = (levelName: string) => createWhatsAppUrl(
    schoolInfo.whatsappNumber,
    `Assalamu'alaikum Admin ${schoolInfo.name}, saya ingin bertanya lebih lanjut mengenai kurikulum dan kegiatan harian di jenjang *${levelName}*.`
  );

  return (
    <section id="kurikulum" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Struktur Kurikulum & Program
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Perpaduan Kurikulum Merdeka & Nilai-Nilai Al-Qur'an
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Kurikulum dirancang secara seimbang untuk mengembangkan aspek spiritual, intelektual, emosional, dan sosial siswa sesuai tahapan usia perkembangan.
          </p>
        </div>

        {/* Quick Search & Level Navigator */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Level Tabs */}
          <div className="w-full md:w-auto flex flex-wrap gap-2 p-1.5 bg-slate-100/80 rounded-xl border border-slate-200">
            {curriculumLevels.map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => setActiveTab(lvl.id)}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  activeTab === lvl.id
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {lvl.name}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari materi, tahfidz, program..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50 focus:bg-white"
            />
          </div>
        </div>

        {/* Active Level Detail Showcase */}
        <div className="bg-[#fbfaf8] rounded-2xl border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-sm transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Main Info Column */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">
                    {currentLevel.ageGroup}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Program Terpadu & Terarah
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {currentLevel.name}
                </h3>
                <p className="text-emerald-800 font-semibold text-sm sm:text-base mt-1">
                  {currentLevel.subname}
                </p>
                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {currentLevel.description}
                </p>
              </div>

              {/* Target Tahfidz Special Callout */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/70 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-700 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                    Target Capaian Tahfidzul Qur'an
                  </h4>
                  <p className="text-sm sm:text-base font-semibold text-emerald-950 mt-0.5">
                    {currentLevel.tahfidzTarget}
                  </p>
                </div>
              </div>

              {/* Subjects Category Breakdown */}
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-emerald-700" />
                  Mata Pelajaran & Silabus Unggulan
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentLevel.subjects.map((sub, sIdx) => (
                    <div key={sIdx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                      <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                        {sub.category}
                      </p>
                      <ul className="space-y-1.5">
                        {sub.items.map((item, iIdx) => (
                          <li key={iIdx} className="text-xs sm:text-sm text-slate-700 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities and Extracurriculars */}
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  Kegiatan Pembelajaran & Ekstrakurikuler
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentLevel.activities.map((act, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm font-medium text-slate-700 shadow-2xs"
                    >
                      ★ {act}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Action & Highlights Column */}
            <div className="lg:col-span-4 space-y-5">
              {/* Key Highlights Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Karakteristik Pembelajaran
                </h4>

                <div className="space-y-2.5">
                  {(searchQuery ? filteredHighlights : currentLevel.highlights).map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                  {searchQuery && filteredHighlights.length === 0 && (
                    <p className="text-xs text-slate-400 italic">Tidak ditemukan materi dengan kata kunci "{searchQuery}".</p>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2.5">
                  <button
                    onClick={() => onSelectLevelForPPDB(currentLevel.name)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                  >
                    <span>Daftar {currentLevel.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={waAskCurriculum(currentLevel.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-600/30 text-emerald-800 bg-emerald-50/70 hover:bg-emerald-100 font-semibold text-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-700" />
                    <span>Konsultasi Kurikulum Jenjang Ini</span>
                  </a>
                </div>
              </div>

              {/* Information for Parents Banner */}
              <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-200/80 text-amber-950 text-xs sm:text-sm">
                <div className="flex items-center gap-2 font-bold mb-1 text-amber-900">
                  <Clock className="w-4 h-4" />
                  <span>Jadwal Belajar Efektif</span>
                </div>
                <p className="text-amber-900/80 leading-relaxed text-xs">
                  Senin - Jumat: 07.15 - 14.30 WIB (TK) & 07.15 - 15.30 WIB (SD & SMP). Dilengkapi sholat dzuhur dan ashar berjamaah.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
