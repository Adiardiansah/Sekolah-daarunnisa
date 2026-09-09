import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  Menu, 
  X, 
  Sparkles, 
  BookOpen, 
  MessageCircle, 
  ChevronRight, 
  ShieldCheck 
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import { createWhatsAppUrl } from '../utils/helpers';

interface HeaderProps {
  onOpenPPDBModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPPDBModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Kurikulum', href: '#kurikulum' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Pendaftaran PPDB', href: '#pendaftaran' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontak & Lokasi', href: '#kontak' },
  ];

  const waDirectUrl = createWhatsAppUrl(
    schoolInfo.whatsappNumber,
    `Assalamu'alaikum Admin ${schoolInfo.name}, saya ingin konsultasi mengenai pendaftaran siswa baru.`
  );

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Banner Announcement & Contacts */}
      <div className="bg-emerald-900 text-emerald-100 text-xs sm:text-sm py-2 px-4 border-b border-emerald-800/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400 text-emerald-950 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-emerald-950 fill-emerald-950" />
              PPDB 2025/2026
            </span>
            <span className="text-emerald-100/90 font-medium">
              Pendaftaran Gelombang 1 Dibuka — Diskon Biaya Masuk s/d 30 Nov!
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-xs text-emerald-200">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Senin - Sabtu: 07.30 - 15.30 WIB</span>
            </div>
            <a 
              href={waDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-100 hover:text-amber-300 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Layanan WA: {schoolInfo.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100' 
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & School Name */}
          <a href="#beranda" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-700 to-teal-800 p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
              <div className="w-full h-full rounded-[10px] bg-emerald-900 flex items-center justify-center text-amber-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-radial from-amber-400/20 to-transparent"></div>
                <BookOpen className="w-6 h-6 text-amber-300 relative z-10" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl text-emerald-950 tracking-tight font-['Cinzel',serif]">
                  DAARUNNISA
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded border border-emerald-200">
                  Unggul
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium tracking-wide">
                Islamic Modern Integrated School
              </p>
            </div>
          </a>

          {/* Desktop Menu Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-emerald-800 hover:bg-emerald-50/70 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={waDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-emerald-600/30 text-emerald-800 bg-emerald-50/50 hover:bg-emerald-100/70 font-semibold text-xs transition-colors"
              title="Hubungi Admin Sekolah via WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenPPDBModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-sm hover:shadow transition-all"
            >
              <span>Daftar PPDB</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-emerald-800 hover:bg-slate-100 focus:outline-none"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-800" />
              ) : (
                <Menu className="w-6 h-6 text-slate-800" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3.5 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:text-emerald-800 hover:bg-emerald-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
            <a
              href={waDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border border-emerald-600/30 text-emerald-800 bg-emerald-50 font-bold text-xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>Tanya WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenPPDBModal();
              }}
              className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-emerald-700 text-white font-bold text-xs shadow"
            >
              <span>Formulir PPDB</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
