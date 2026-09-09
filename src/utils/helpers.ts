import { PPDBFormData, ContactFormData } from '../types';
import { schoolInfo } from '../data/schoolData';

/**
 * Membuat link WhatsApp otomatis dengan pesan yang sudah terformat rapi
 */
export function createWhatsAppUrl(phoneNumber: string, text: string): string {
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Membuat pesan WhatsApp resmi untuk Pendaftaran PPDB Daring
 */
export function generatePPDBWhatsAppMessage(data: PPDBFormData, regCode: string): string {
  return `*FORMULIR PENDAFTARAN SISWA BARU (PPDB ONLINE)*
*${schoolInfo.name.toUpperCase()}*
Kode Registrasi: *${regCode}*

*A. Data Calon Siswa:*
• Nama Lengkap: ${data.fullName}
• Nama Panggilan: ${data.nickname || '-'}
• Jenis Kelamin: ${data.gender}
• Tempat, Tgl Lahir: ${data.birthPlace}, ${data.birthDate}
• Jenjang Tujuan: *${data.level}*
• Pilihan Program: *${data.programType}*
• Asal Sekolah: ${data.previousSchool || 'Belum Sekolah / Mandiri'}

*B. Data Orang Tua / Wali:*
• Nama Orang Tua: ${data.parentName}
• No. WhatsApp / HP: ${data.parentPhone}
• Email: ${data.parentEmail || '-'}
• Pekerjaan: ${data.parentJob || '-'}
• Alamat Tinggal: ${data.address}

*C. Catatan / Pertanyaan Tambahan:*
${data.notes || 'Mohon informasi jadwal observasi calon siswa dan kelengkapan berkas selanjutnya. Terima kasih.'}

---
_Pesan ini dikirim secara otomatis melalui formulir website resmi ${schoolInfo.name}_`;
}

/**
 * Membuat pesan WhatsApp untuk formulir kontak umum
 */
export function generateContactWhatsAppMessage(data: ContactFormData): string {
  return `*KONSULTASI & PERTANYAAN RESMI*
*${schoolInfo.name.toUpperCase()}*

• Nama: ${data.name}
• No. WhatsApp: ${data.phone}
• Email: ${data.email || '-'}
• Topik / Subjek: *${data.subject}*

*Pesan / Pertanyaan:*
"${data.message}"

---
_Dikirim via Formulir Kontak Website ${schoolInfo.name}_`;
}

/**
 * Generate kode pendaftaran unik
 */
export function generateRegistrationCode(): string {
  const randomDigits = Math.floor(1000 + Math.random() * 9000);
  const currentYear = new Date().getFullYear();
  return `DN-${currentYear}-${randomDigits}`;
}
