import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CurriculumSection } from './components/CurriculumSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { RegistrationSection } from './components/RegistrationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PPDBModal } from './components/PPDBModal';

export default function App() {
  const [isPPDBModalOpen, setIsPPDBModalOpen] = useState(false);
  const [selectedLevelForPPDB, setSelectedLevelForPPDB] = useState<string>('SD Islam Terpadu (SDIT)');

  const handleOpenPPDBModal = () => {
    setIsPPDBModalOpen(true);
  };

  const handleSelectLevelForPPDB = (levelName: string) => {
    setSelectedLevelForPPDB(levelName);
    // Smooth scroll to the pendaftaran section
    const el = document.getElementById('pendaftaran');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf9] text-slate-800 selection:bg-emerald-700 selection:text-white antialiased">
      {/* Navigation Header */}
      <Header onOpenPPDBModal={handleOpenPPDBModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with Call to Action & Stats */}
        <Hero onOpenPPDBModal={handleOpenPPDBModal} />

        {/* 2. Profil Sekolah, Visi, Misi & 4 Karakter Utama */}
        <AboutSection />

        {/* 3. Kurikulum & Jenjang (Pencarian Cepat & Eksplorasi) */}
        <CurriculumSection onSelectLevelForPPDB={handleSelectLevelForPPDB} />

        {/* 4. Sarana & Fasilitas Sekolah */}
        <FacilitiesSection />

        {/* 5. Formulir Pendaftaran Daring (PPDB Online) */}
        <RegistrationSection initialLevel={selectedLevelForPPDB} />

        {/* 6. Testimoni Wali Murid */}
        <TestimonialsSection />

        {/* 7. Integrasi Media Sosial & Dokumentasi Kegiatan */}
        <SocialMediaSection />

        {/* 8. Tanya Jawab (FAQ PPDB & Kurikulum) */}
        <FaqSection />

        {/* 9. Formulir Kontak & Layanan Konsultasi */}
        <ContactSection />
      </main>

      {/* Footer with Integrated Google Maps */}
      <Footer onOpenPPDBModal={handleOpenPPDBModal} />

      {/* Interactive Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Quick PPDB Online Registration Modal */}
      <PPDBModal 
        isOpen={isPPDBModalOpen} 
        onClose={() => setIsPPDBModalOpen(false)} 
        selectedLevel={selectedLevelForPPDB}
      />
    </div>
  );
}
