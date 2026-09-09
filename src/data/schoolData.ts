import { SchoolInfo, CurriculumLevel, Facility, Testimonial, FAQItem } from '../types';

/**
 * =========================================================================
 * PANDUAN PENGELOLAAN KONTEN SEKOLAH DAARUNNISA
 * =========================================================================
 * Anda cukup mengubah teks, kontak, dan link di dalam file ini untuk menyesuaikan
 * seluruh isi website Sekolah Daarunnisa tanpa perlu merusak kode tampilan.
 * =========================================================================
 */

export const schoolInfo: SchoolInfo = {
  name: "Sekolah Daarunnisa",
  tagline: "Membina Generasi Qur'ani, Cerdas Berkarakter & Berwawasan Global",
  motto: "Iman, Adab, Ilmu, dan Kepemimpinan",
  establishedYear: "2012",
  accreditation: "Terakreditasi A (Unggul)",
  npsn: "NPSN: 69981234",
  description: 
    "Sekolah Daarunnisa adalah lembaga pendidikan Islam terpadu yang memadukan Kurikulum Nasional (Kurikulum Merdeka) dengan Kurikulum Diniyyah dan Program Tahfidz Al-Qur'an. Berkomitmen menumbuhkan lingkungan belajar yang hangat, ramah anak, berakhlak mulia, dan siap menghadapi tantangan masa depan.",
  
  // Kontak Utama
  phone: "(021) 8765-4321",
  whatsappNumber: "6281289001234", // Format internasional tanpa simbol (+) atau spasi untuk direct link
  whatsappDisplay: "+62 812-8900-1234",
  email: "info@daarunnisa.sch.id",
  
  // Alamat Lengkap & Peta
  address: {
    street: "Jl. Melati Indah No. 45, Kompleks Pendidikan Daarunnisa",
    village: "Sukamaju",
    district: "Cilodong",
    city: "Kota Depok",
    province: "Jawa Barat",
    postalCode: "16415",
    mapUrl: "https://maps.google.com/?q=Kota+Depok+Jawa+Barat",
    // Link Google Maps Embed iframe (aman & responsive)
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126880.89973273117!2d106.7725308!3d-6.4024844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec069f56e9c9%3A0x301576d14fed8e0!2sKota%20Depok%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
  },
  
  visitingHours: "Senin - Jumat: 07.30 - 15.30 WIB | Sabtu: 08.00 - 12.00 WIB (Khusus Pelayanan PPDB)",
  
  // Akun Media Sosial Resmi
  socials: {
    instagram: "https://instagram.com/sekolahdaarunnisa",
    instagramHandle: "@sekolahdaarunnisa",
    facebook: "https://facebook.com/sekolahdaarunnisa.official",
    youtube: "https://youtube.com/@sekolahdaarunnisa",
    youtubeHandle: "Sekolah Daarunnisa Official",
    tiktok: "https://tiktok.com/@sekolahdaarunnisa",
    tiktokHandle: "@sekolahdaarunnisa",
  }
};

export const heroStats = [
  { label: "Akreditasi BAN-S/M", value: "Grade A", desc: "Kualitas Pembelajaran Unggul" },
  { label: "Target Hafalan", value: "3 - 30 Juz", desc: "Metode Talaqqi & Mutqin" },
  { label: "Rasio Guru & Siswa", value: "1 : 12", desc: "Pendampingan Intensif & Ramah" },
  { label: "Tingkat Kelulusan PTN & Favorit", value: "98%", desc: "Akademik & Karakter Teruji" },
];

export const coreValues = [
  {
    title: "Akhlaqul Karimah",
    desc: "Menanamkan adab sebelum ilmu melalui keteladanan ibadah harian, kepedulian sosial, dan tutur kata santun.",
    icon: "HeartHandshake"
  },
  {
    title: "Tahfidzul Qur'an",
    desc: "Bimbingan hafalan berstandar sanad dengan pendidik bersertifikat, menjamin bacaan tartil dan mutqin.",
    icon: "BookOpen"
  },
  {
    title: "Keunggulan Akademik",
    desc: "Implementasi Kurikulum Merdeka yang kontekstual, melatih nalar kritis, literasi sains, dan teknologi.",
    icon: "GraduationCap"
  },
  {
    title: "Kemandirian & Kepemimpinan",
    desc: "Pembentukan jiwa kepemimpinan mandiri melalui ekstrakurikuler kepanduan, public speaking, dan organisasi siswa.",
    icon: "Sparkles"
  }
];

export const curriculumLevels: CurriculumLevel[] = [
  {
    id: "kb-tk",
    name: "KB & TK Islam Terpadu",
    subname: "Pendidikan Usia Dini Berbasis Fitrah & Sentra",
    ageGroup: "Usia 3 - 6 Tahun",
    accentColor: "from-amber-500 to-orange-500",
    description: 
      "Fokus pada penanaman kecintaan kepada Al-Qur'an, stimulasi motorik, pembiasaan adab islami, dan kemandirian melalui metode bermain sambil belajar (Learning through play).",
    highlights: [
      "Metode Sentra & Multiple Intelligences",
      "Hafalan Surat Pendek (Juz 30) & Doa Harian",
      "Pengenalan Huruf Hijaiyah & Angka secara Kontekstual",
      "Toilet Training & Kemandirian Makan Mandiri"
    ],
    subjects: [
      {
        category: "Karakter & Diniyyah",
        items: ["Tahsin UMMI Kids", "Hafalan Doa & Hadits Pilihan", "Praktik Sholat Ceria", "Kisah Teladan Nabi & Sahabat"]
      },
      {
        category: "Fondasi Akademik",
        items: ["Literasi Awal & Fonik", "Numerasi Dasar & Pola Logika", "Eksplorasi Sains Alam", "Motorik Halus & Kreativitas Seni"]
      }
    ],
    tahfidzTarget: "Target lulus TK: Juz 'Amma (Surat An-Nas s/d Adh-Dhuha) + 25 Hadits Pilihan",
    activities: ["Field Trip Edukatif", "Pentas Seni Anak Shalih", "Market Day Cilik", "Berenang & Senam Ceria"]
  },
  {
    id: "sdit",
    name: "SD Islam Terpadu (SDIT)",
    subname: "Fondasi Karakter Kokoh & Literasi Holistik",
    ageGroup: "Usia 7 - 12 Tahun (Kelas 1 - 6)",
    accentColor: "from-emerald-600 to-teal-700",
    description: 
      "Mengintegrasikan Kurikulum Merdeka Kemendikbudristek dengan Kurikulum Karakter Diniyyah. Menyiapkan anak yang tekun beribadah, gemar membaca, dan fasih berbahasa.",
    highlights: [
      "Pembelajaran Berbasis Proyek (P5) Berkelanjutan",
      "Tahfidz Intensif Pagi Hari dengan Sistem Halaqah",
      "Kelas Bilingual Dasar (Bahasa Arab & Bahasa Inggris Sehari-hari)",
      "Bimbingan Minat Bakat Matematika, Sains, & Robotika Dasar"
    ],
    subjects: [
      {
        category: "Muatan Diniyyah",
        items: ["Tahfidz & Tahsin Al-Qur'an", "Bahasa Arab Dasar", "Fiqih Ibadah Praktis", "Aqidah & Sirah Nabawiyah"]
      },
      {
        category: "Muatan Kurikulum Nasional",
        items: ["Bahasa Indonesia", "Matematika Bernalar", "IPAS (Sains & Sosial)", "Pendidikan Pancasila", "Bahasa Inggris"]
      }
    ],
    tahfidzTarget: "Target lulus SDIT: Minimal 3 Juz Mutqin (Juz 28, 29, 30) & Uji Publik Tahfidz",
    activities: ["Mabit (Malam Bina Iman dan Taqwa)", "Science Fair", "Pramuka SIT", "Klub Robotik & Panahan", "Karya Tulis Cilik"]
  },
  {
    id: "smpit",
    name: "SMP Islam Terpadu (SMPIT)",
    subname: "Generasi Pemimpin Berwawasan Global & Berakhlak Qur'ani",
    ageGroup: "Usia 13 - 15 Tahun (Kelas 7 - 9)",
    accentColor: "from-blue-600 to-indigo-700",
    description: 
      "Menemani masa transisi remaja dengan pendampingan spiritual yang hangat dan kurikulum akademik berstandar tinggi untuk persiapan ke jenjang lanjutan favorit.",
    highlights: [
      "Program Pembiasaan Qiyamul Lail & Shaum Sunnah",
      "English & Arabic Daily Communication Environment",
      "Laboratorium Komputer & Digital Coding Dasar",
      "Career Exploration & Mentoring Kepribadian Remaja"
    ],
    subjects: [
      {
        category: "Kepesantrenan & Agama",
        items: ["Tahfidzul Qur'an Takhassus", "Bahasa Arab Nahwu Shorof Dasar", "Fiqih Remaja & Ushul Fiqih", "Tafsir Ayat Pilihan"]
      },
      {
        category: "Akademik Lanjutan",
        items: ["Matematika Terapan", "IPA Terpadu (Fisika, Biologi, Kimia)", "Bahasa Inggris Lanjutan (TOEFL Prep Junior)", "Informatika & Literasi Digital"]
      }
    ],
    tahfidzTarget: "Target Reguler: 5 - 10 Juz | Target Kelas Takhassus: 15 - 30 Juz",
    activities: ["Super Camp Leadership", "Riset Ilmiah Remaja (O2SN & OSN)", "Latihan Pidato 3 Bahasa (Muhadharah)", "Basket, Futsal, & Bela Diri"]
  },
  {
    id: "tahfidz-khusus",
    name: "Program Takhassus Tahfidz",
    subname: "Intensif Menghafal & Memahami Al-Qur'an Bersanad",
    ageGroup: "Usia SD Lanjutan & SMP",
    accentColor: "from-amber-600 to-emerald-800",
    description: 
      "Program unggulan bagi santri/siswa yang bertekad menyelesaikan hafalan Al-Qur'an 30 juz dengan pendampingan asatidz/asatidzah bersanad dan karantina tahfidz.",
    highlights: [
      "Target Hafalan 1 Hari 1 Halaman / Ziyadah Terukur",
      "Muraja'ah Berkala (Tasmi' 5, 10, 20, 30 Juz Sekali Duduk)",
      "Pemahaman Matan Jazariyyah & Kaidah Tajwid Mendalam",
      "Wisuda Akbar Sanad & Ijazah Tahfidz Resmi"
    ],
    subjects: [
      {
        category: "Materi Khusus",
        items: ["Setoran Ziyadah Harian", "Muraja'ah Akbar", "Kajian Adab Penghafal Qur'an (At-Tibyan)", "Ilmu Rasm Utsmani"]
      }
    ],
    tahfidzTarget: "Target Program: 30 Juz Mutqin Bersanad & Berakhlak Al-Qur'an",
    activities: ["Daurah Qur'an Liburan", "Tasmi' Kubra di Hadapan Orang Tua", "Bakti Sosial Penghafal Qur'an"]
  }
];

export const facilitiesList: Facility[] = [
  {
    id: "masjid",
    title: "Masjid & Aula Islamic Center",
    category: "Ibadah & Spiritual",
    description: "Pusat kegiatan sholat berjamaah, sholat dhuha harian, setoran tahfidz pagi, dan kajian parenting wali murid.",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80",
    iconName: "Compass"
  },
  {
    id: "smart-classroom",
    title: "Ruang Kelas Ber-AC & Multimedia",
    category: "Akademik",
    description: "Ruang kelas ergonomis dilengkapi pendingin udara, proyektor interaktif, audio visual, dan kapasitas maksimal 24 siswa.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    iconName: "Monitor"
  },
  {
    id: "perpustakaan",
    title: "Perpustakaan Digital & Pojok Baca",
    category: "Literasi",
    description: "Ribuan koleksi buku anak islami, ensiklopedia sains, novel inspiratif, dan akses perpustakaan digital e-book.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    iconName: "BookOpenCheck"
  },
  {
    id: "lab-sains-komputer",
    title: "Laboratorium Sains & Komputer",
    category: "Sains & Teknologi",
    description: "Fasilitas eksperimen fisika, kimia, biologi terapan serta komputer modern dengan koneksi internet terlindungi (safe-search).",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    iconName: "Microscope"
  },
  {
    id: "lapangan-olahraga",
    title: "Lapangan Olahraga & Area Panahan",
    category: "Kebugaran",
    description: "Fasilitas olahraga futsal, basket, bulu tangkis, serta area sunnah panahan dan berkuda berstandar aman.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
    iconName: "Trophy"
  },
  {
    id: "kantin-sehat",
    title: "Kantin Sehat Halal & Bersih",
    category: "Kesehatan",
    description: "Penyedia makanan dan minuman higienis bebas MSG berlebih dan pengawet, diawasi oleh tim gizi sekolah.",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=800&q=80",
    iconName: "UtensilsCrossed"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "dr. Hj. Fauziah Rahma, Sp.A",
    role: "Wali Murid Ananda Aisha (Kelas 5 SDIT)",
    quote: "Sekolah Daarunnisa memberikan rasa tenang bagi kami para orang tua. Putri kami tidak hanya fasih membaca dan menghafal 4 juz Al-Qur'an, tetapi karakternya di rumah menjadi sangat mandiri, santun, dan kritis dalam berpikir.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "2",
    name: "Ir. H. Muhammad Prasetyo, M.T.",
    role: "Wali Murid Ananda Raihan (Alumni SMPIT - Lolos SMA Unggulan)",
    quote: "Kombinasi kurikulum sains dan diniyyah di Daarunnisa luar biasa. Raihan dibekali adab kepemimpinan yang tangguh dan fondasi matematika sains yang kuat sehingga sangat percaya diri saat bersaing di tingkat provinsi.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "3",
    name: "Ustadzah Nurul Hidayati, S.Pd.I",
    role: "Wali Murid Ananda Maryam (TK B Daarunnisa)",
    quote: "Guru-gurunya sangat sabar, ramah, dan penuh kasih sayang. Perkembangan motorik dan adab harian putri saya berkembang sangat pesat. Setiap hari ia selalu antusias untuk berangkat ke sekolah.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=200&q=80"
  }
];

export const faqItems: FAQItem[] = [
  {
    category: "PPDB",
    question: "Kapan periode pendaftaran siswa baru (PPDB) dibuka?",
    answer: "Pendaftaran Gelombang 1 untuk Tahun Ajaran 2025/2026 dibuka mulai 1 Oktober hingga 31 Desember. Gelombang 2 dibuka mulai Januari jika kuota masih tersedia. Kuota dibatasi agar rasio kelas tetap kondusif (maksimal 24 siswa/kelas)."
  },
  {
    category: "PPDB",
    question: "Bagaimana alur pendaftaran secara daring (online)?",
    answer: "1) Isi formulir pendaftaran daring di website ini atau hubungi panitia via WhatsApp. 2) Dapatkan nomor registrasi dan konfirmasi panitia. 3) Ikuti jadwal observasi potensi anak & wawancara orang tua. 4) Pengumuman hasil & daftar ulang."
  },
  {
    category: "Kurikulum",
    question: "Bagaimana pembagian waktu antara Kurikulum Nasional dan Tahfidz?",
    answer: "Setiap hari diawali dengan sesi Halaqah Qur'an (Tahsin/Tahfidz) selama 90 menit di pagi hari saat konsentrasi anak optimal. Pelajaran akademik umum berbasis Kurikulum Merdeka berlangsung setelah istirahat pertama, diselingi sholat dzuhur berjamaah dan makan siang sehat."
  },
  {
    category: "Kurikulum",
    question: "Apakah anak yang belum bisa membaca Al-Qur'an bisa mendaftar?",
    answer: "Tentu bisa. Kami memiliki program matrikulasi metode UMMI untuk membimbing siswa dari tingkat dasar pengenalan huruf hingga fasih membaca tartil sesuai tajwid, dengan bimbingan ustadz/ustadzah yang berdedikasi."
  },
  {
    category: "Biaya",
    question: "Apakah tersedia beasiswa bagi siswa berprestasi atau yatim/dhuafa?",
    answer: "Ya, Yayasan Daarunnisa menyediakan program Beasiswa Hafidz Qur'an (mulai dari potongan 50% hingga 100% biaya pendidikan) serta Beasiswa Afirmasi Peduli Ummat. Silakan hubungi admin PPDB via WhatsApp untuk syarat lengkap."
  },
  {
    category: "Umum",
    question: "Apakah orang tua bisa melakukan kunjungan langsung (School Tour)?",
    answer: "Sangat dianjurkan! Kami menyambut hangat kehadiran calon wali murid pada hari kerja Senin-Jumat pukul 08.00 - 14.00 WIB dan Sabtu pukul 08.00 - 11.30 WIB. Anda dapat berkonsultasi langsung dengan konselor pendidikan kami."
  }
];

export const ppdbAnnouncements = [
  {
    badge: "Gelombang 1 Dibuka",
    title: "Penerimaan Peserta Didik Baru (PPDB) TA 2025/2026",
    desc: "Dapatkan potongan Early Bird uang pangkal sebesar Rp 2.500.000,- bagi 50 pendaftar pertama sebelum 30 November.",
    deadline: "30 November 2025"
  }
];
