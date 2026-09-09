import React, { useState } from 'react';
import { 
  Building2, 
  Check, 
  Sparkles, 
  Eye, 
  X,
  Compass, 
  Monitor, 
  BookOpenCheck, 
  Microscope, 
  Trophy, 
  UtensilsCrossed 
} from 'lucide-react';
import { facilitiesList, schoolInfo } from '../data/schoolData';
import { Facility } from '../types';

export const FacilitiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeFacilityModal, setActiveFacilityModal] = useState<Facility | null>(null);

  const categories = ['Semua', 'Ibadah & Spiritual', 'Akademik', 'Literasi', 'Sains & Teknologi', 'Kebugaran', 'Kesehatan'];

  const filteredFacilities = selectedCategory === 'Semua'
    ? facilitiesList
    : facilitiesList.filter(f => f.category === selectedCategory);

  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-5 h-5 text-emerald-700" />,
    Monitor: <Monitor className="w-5 h-5 text-emerald-700" />,
    BookOpenCheck: <BookOpenCheck className="w-5 h-5 text-emerald-700" />,
    Microscope: <Microscope className="w-5 h-5 text-emerald-700" />,
    Trophy: <Trophy className="w-5 h-5 text-emerald-700" />,
    UtensilsCrossed: <UtensilsCrossed className="w-5 h-5 text-emerald-700" />
  };

  return (
    <section id="fasilitas" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            Sarana & Prasarana
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fasilitas Lengkap Menunjang Kenyamanan Belajar
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Lingkungan sekolah yang asri, bersih, aman, dan dirancang dengan standar ergonomis terbaik untuk mengoptimalkan potensi setiap siswa.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              onClick={() => setActiveFacilityModal(facility)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col"
            >
              {/* Image Container with Hover zoom */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-emerald-900 shadow-xs border border-emerald-100">
                  {facility.category}
                </div>

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 text-xs font-semibold backdrop-blur-sm">
                    <Eye className="w-3.5 h-3.5" />
                    Lihat Detail
                  </span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700">
                      {iconMap[facility.iconName] || <Sparkles className="w-4 h-4 text-emerald-700" />}
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {facility.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {facility.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                  <span>Standar Ramah Anak</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail for Facility */}
        {activeFacilityModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="relative h-60 bg-slate-100">
                <img
                  src={activeFacilityModal.image}
                  alt={activeFacilityModal.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setActiveFacilityModal(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-md text-xs font-bold text-emerald-900">
                  {activeFacilityModal.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {activeFacilityModal.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {activeFacilityModal.description}
                </p>

                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-900 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Diinspeksi rutin untuk kebersihan, higienitas, dan keselamatan seluruh santri.</span>
                </div>

                <div className="mt-5 flex justify-end">
                  <button
                    onClick={() => setActiveFacilityModal(null)}
                    className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
