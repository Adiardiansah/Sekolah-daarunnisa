export interface SchoolInfo {
  name: string;
  tagline: string;
  motto: string;
  establishedYear: string;
  accreditation: string;
  npsn: string;
  description: string;
  phone: string;
  whatsappNumber: string; // international format e.g. 6281234567890
  whatsappDisplay: string;
  email: string;
  address: {
    street: string;
    village: string;
    district: string;
    city: string;
    province: string;
    postalCode: string;
    mapUrl: string; // link to open in Google Maps
    embedMapUrl: string; // iframe embed url
  };
  visitingHours: string;
  socials: {
    instagram: string;
    instagramHandle: string;
    facebook: string;
    youtube: string;
    youtubeHandle: string;
    tiktok: string;
    tiktokHandle: string;
  };
}

export interface CurriculumLevel {
  id: string;
  name: string;
  subname: string;
  ageGroup: string;
  accentColor: string;
  description: string;
  highlights: string[];
  subjects: {
    category: string;
    items: string[];
  }[];
  tahfidzTarget: string;
  activities: string[];
}

export interface Facility {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g., "Wali Murid Kelas 4 SDIT", "Alumni Angkatan 2023"
  quote: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'PPDB' | 'Kurikulum' | 'Biaya' | 'Umum';
}

export interface PPDBFormData {
  fullName: string;
  nickname: string;
  gender: 'Laki-laki' | 'Perempuan' | '';
  birthPlace: string;
  birthDate: string;
  level: string;
  programType: 'Reguler (Fullday)' | 'Tahfidz Khusus' | 'Boarding (Asrama)';
  previousSchool: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  parentJob: string;
  address: string;
  notes: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
