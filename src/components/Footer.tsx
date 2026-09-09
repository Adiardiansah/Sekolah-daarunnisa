import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Youtube, 
  Facebook, 
  MessageCircle, 
  BookOpen, 
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  Heart
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import { createWhatsAppUrl } from '../utils/helpers';

interface FooterProps {
  onOpenPPDBModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPPDBModal }) => {
  const waContactUrl = createWhatsAppUrl(
    schoolInfo.whatsappNumber,
    `Assalamu'alaikum Admin ${schoolInfo.name}, saya ingin menanyakan lokasi sekolah dan rute petunjuk arah menuju kampus.`
  );

  return (
    <footer className="bg-emerald-950 text-emerald-100 pt-16 pb-12 border-t-4 border-amber-400 relative overflow-hidden">
      {/* Background Islamic Geometric Pattern Accent */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Peta Lokasi Sekolah & Ringkasan Alamat */}
        <div className="mb-14 bg-emerald-900/60 rounded-3xl p-6 sm:p-8 border border-emerald-800/80 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left detail on Map */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                <MapPin className="w-3.5 h-3.5" />
                Peta & Lokasi Kampus
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Cinzel',serif]">
                Mudah Ditemukan & Strategis
              </h3>

              <p className="text-sm text-emerald-200/90 leading-relaxed">
                Lokasi kampus {schoolInfo.name} berada di kawasan yang asri, tenang, bebas polusi suara, dan mudah dijangkau oleh kendaraan roda dua maupun roda empat dari berbagai penjuru wilayah.
              </p>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-emerald-100 font-medium">
                    {schoolInfo.address.street}, {schoolInfo.address.village}, {schoolInfo.address.district}, {schoolInfo.address.city}, {schoolInfo.address.province} {schoolInfo.address.postalCode}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-emerald-200">
                    {schoolInfo.visitingHours}
                  </span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <a
                  href={schoolInfo.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Buka di Google Maps</span>
                </a>

                <a
                  href={waContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs border border-emerald-600/50 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Petunjuk Arah via WA</span>
                </a>
              </div>
            </div>

            {/* Right: Embedded Responsive Google Map Iframe */}
            <div className="lg:col-span-7">
              <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden shadow-xl border-2 border-emerald-700/60 relative bg-emerald-950">
                <iframe
                  title="Peta Lokasi Sekolah Daarunnisa"
                  src={schoolInfo.address.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-125"
                ></iframe>
              </div>
            </div>

          </div>
        </div>

        {/* Middle Columns: School Info & Navigations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/80">
          
          {/* Col 1: Brand & Accreditation */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full rounded-[10px] bg-emerald-900 flex items-center justify-center text-amber-300">
                  <BookOpen className="w-6 h-6" />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-2xl text-white tracking-tight font-['Cinzel',serif]">
                  DAARUNNISA
                </span>
                <p className="text-xs text-amber-300 font-semibold tracking-wider uppercase">
                  {schoolInfo.accreditation}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
              {schoolInfo.description}
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{schoolInfo.npsn}</span>
            </div>

            {/* Social Media Buttons */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={schoolInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Sekolah Daarunnisa"
                className="w-9 h-9 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-emerald-200 hover:text-white flex items-center justify-center transition-colors border border-emerald-800"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={schoolInfo.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Sekolah Daarunnisa"
                className="w-9 h-9 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-emerald-200 hover:text-white flex items-center justify-center transition-colors border border-emerald-800"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={schoolInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Sekolah Daarunnisa"
                className="w-9 h-9 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-emerald-200 hover:text-white flex items-center justify-center transition-colors border border-emerald-800"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={createWhatsAppUrl(schoolInfo.whatsappNumber, `Assalamu'alaikum Admin ${schoolInfo.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Sekolah Daarunnisa"
                className="w-9 h-9 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-emerald-200 hover:text-white flex items-center justify-center transition-colors border border-emerald-800"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-emerald-800/80 pb-2">
              Jelajahi Profil
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-200/80">
              <li>
                <a href="#beranda" className="hover:text-amber-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Beranda Utama</span>
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-amber-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Visi, Misi & Nilai Karakter</span>
                </a>
              </li>
              <li>
                <a href="#kurikulum" className="hover:text-amber-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Kurikulum Terpadu & Tahfidz</span>
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-amber-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Sarana & Fasilitas Sekolah</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Tanya Jawab (FAQ PPDB)</span>
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-amber-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Hubungi Kami & Konsultasi</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Jenjang & PPDB Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-emerald-800/80 pb-2">
              Jenjang & Program
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-200/80">
              <li>
                <a href="#kurikulum" className="hover:text-amber-300 block">KB & TK Islam Terpadu</a>
              </li>
              <li>
                <a href="#kurikulum" className="hover:text-amber-300 block">SD Islam Terpadu (SDIT)</a>
              </li>
              <li>
                <a href="#kurikulum" className="hover:text-amber-300 block">SMP Islam Terpadu (SMPIT)</a>
              </li>
              <li>
                <a href="#kurikulum" className="hover:text-amber-300 block">Takhassus Tahfidz Al-Qur'an</a>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenPPDBModal}
                  className="text-amber-300 font-bold hover:underline flex items-center gap-1 text-xs"
                >
                  <span>Daftar PPDB Daring</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Layanan Kontak Cepat */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-emerald-800/80 pb-2">
              Layanan Informasi
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-emerald-200/90">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{schoolInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <a 
                  href={createWhatsAppUrl(schoolInfo.whatsappNumber, `Assalamu'alaikum Admin ${schoolInfo.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-semibold underline underline-offset-2"
                >
                  {schoolInfo.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{schoolInfo.email}</span>
              </div>
              <p className="text-[11px] text-emerald-300/70 pt-1">
                Layanan Panitia PPDB beroperasi setiap hari kerja untuk pendampingan wali murid baru.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Customization Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-300/70 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} <strong className="text-white font-semibold">{schoolInfo.name}</strong>. Hak Cipta Dilindungi Undang-Undang.
          </p>

          <p className="flex items-center gap-1 justify-center">
            <span>Dikelola dengan cinta</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>untuk pendidikan generasi umat</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
