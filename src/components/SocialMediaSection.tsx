import React, { useState } from 'react';
import { 
  Instagram, 
  Youtube, 
  Facebook, 
  MessageCircle, 
  Share2, 
  ExternalLink, 
  Heart, 
  Play, 
  Sparkles,
  Camera
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export const SocialMediaSection: React.FC = () => {
  const [activeMediaFilter, setActiveMediaFilter] = useState<'all' | 'instagram' | 'youtube'>('all');

  const socialHighlights = [
    {
      platform: 'instagram',
      title: 'Momen Wisuda Akbar Tahfidz Al-Qur\'an Juz 30 & Tasmi\' Kubra Siswa SDIT & SMPIT Daarunnisa',
      date: '2 Hari lalu',
      likes: '482 menyukai',
      imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
      link: schoolInfo.socials.instagram,
      tag: '#TahfidzDaarunnisa'
    },
    {
      platform: 'youtube',
      title: 'Video Profil Sekolah: Menumbuhkan Adab & Prestasi Sains Berwawasan Global',
      date: '1 Minggu lalu',
      likes: '1.8K x ditonton',
      imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
      link: schoolInfo.socials.youtube,
      tag: 'Durasi: 4:35 Menit'
    },
    {
      platform: 'instagram',
      title: 'Keseruan Market Day Cilik: Melatih Jiwa Entrepreneurship & Kejujuran Santri Sejak Dini',
      date: '3 Hari lalu',
      likes: '356 menyukai',
      imageUrl: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80',
      link: schoolInfo.socials.instagram,
      tag: '#MarketDay'
    },
    {
      platform: 'instagram',
      title: 'Eksperimen Seru Science Fair: Eksplorasi Energi Bersih & Robotika Sederhana',
      date: '5 Hari lalu',
      likes: '620 menyukai',
      imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
      link: schoolInfo.socials.instagram,
      tag: '#ScienceProject'
    }
  ];

  const filteredPosts = activeMediaFilter === 'all'
    ? socialHighlights
    : socialHighlights.filter(p => p.platform === activeMediaFilter);

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Share2 className="w-3.5 h-3.5" />
            Media Sosial & Komunitas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ikuti Keseharian & Prestasi Kami
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Tetap terhubung dengan kabar terbaru, agenda sekolah, rekaman hafalan santri, serta kegiatan inspiratif di saluran media sosial resmi {schoolInfo.name}.
          </p>
        </div>

        {/* Social Accounts Channel Banner Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {/* Instagram */}
          <a
            href={schoolInfo.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 border border-pink-100/80 hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-xs">
                <Instagram className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-rose-600 transition-colors" />
            </div>
            <div className="mt-4">
              <span className="text-xs text-slate-500 font-medium">Instagram</span>
              <h4 className="font-bold text-slate-900 text-sm group-hover:text-rose-600 transition-colors">
                {schoolInfo.socials.instagramHandle}
              </h4>
              <span className="text-[11px] text-emerald-700 font-semibold mt-1 inline-block">
                Foto Kegiatan & Info PPDB &rarr;
              </span>
            </div>
          </a>

          {/* YouTube */}
          <a
            href={schoolInfo.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-100/80 hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-xs">
                <Youtube className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-red-600 transition-colors" />
            </div>
            <div className="mt-4">
              <span className="text-xs text-slate-500 font-medium">YouTube Channel</span>
              <h4 className="font-bold text-slate-900 text-sm group-hover:text-red-600 transition-colors">
                {schoolInfo.socials.youtubeHandle}
              </h4>
              <span className="text-[11px] text-emerald-700 font-semibold mt-1 inline-block">
                Video Kajian & Wisuda &rarr;
              </span>
            </div>
          </a>

          {/* Facebook */}
          <a
            href={schoolInfo.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/80 hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <Facebook className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
            </div>
            <div className="mt-4">
              <span className="text-xs text-slate-500 font-medium">Facebook Page</span>
              <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                Sekolah Daarunnisa
              </h4>
              <span className="text-[11px] text-emerald-700 font-semibold mt-1 inline-block">
                Artikel & Forum Parenting &rarr;
              </span>
            </div>
          </a>

          {/* TikTok */}
          <a
            href={schoolInfo.socials.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-gradient-to-br from-slate-100 to-zinc-100 border border-slate-200/80 hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center shadow-xs">
                <Camera className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-950 transition-colors" />
            </div>
            <div className="mt-4">
              <span className="text-xs text-slate-500 font-medium">TikTok Edukasi</span>
              <h4 className="font-bold text-slate-900 text-sm group-hover:text-slate-950 transition-colors">
                {schoolInfo.socials.tiktokHandle}
              </h4>
              <span className="text-[11px] text-emerald-700 font-semibold mt-1 inline-block">
                Video Pendek Kreatif &rarr;
              </span>
            </div>
          </a>
        </div>

        {/* Interactive Feed / Activity Gallery Cards */}
        <div className="bg-[#faf8f5] rounded-3xl p-6 sm:p-8 border border-slate-200/80">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Sorotan Kegiatan Terkini
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Dokumentasi pembelajaran, prestasi, dan pembinaan santri
              </p>
            </div>

            {/* Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveMediaFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeMediaFilter === 'all'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                Semua Konten
              </button>
              <button
                onClick={() => setActiveMediaFilter('instagram')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeMediaFilter === 'instagram'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                Instagram
              </button>
              <button
                onClick={() => setActiveMediaFilter('youtube')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeMediaFilter === 'youtube'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                YouTube
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredPosts.map((post, idx) => (
              <a
                key={idx}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all group flex flex-col"
              >
                <div className="relative h-44 bg-slate-100 overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white p-1.5 rounded-lg">
                    {post.platform === 'youtube' ? (
                      <Play className="w-4 h-4 fill-white" />
                    ) : (
                      <Instagram className="w-4 h-4" />
                    )}
                  </div>
                  <div className="absolute bottom-2 left-2 bg-emerald-900/80 backdrop-blur-xs text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded">
                    {post.tag}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-800 line-clamp-2 leading-snug">
                    {post.title}
                  </h4>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1 text-rose-600 font-semibold">
                      <Heart className="w-3 h-3 fill-rose-500" />
                      {post.likes}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
