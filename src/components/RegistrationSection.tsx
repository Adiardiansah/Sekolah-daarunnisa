import React, { useState, useEffect } from 'react';
import { 
  ClipboardCheck, 
  Send, 
  MessageCircle, 
  Sparkles, 
  User, 
  Users, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  GraduationCap, 
  CheckCircle, 
  AlertCircle,
  FileText,
  Printer,
  Copy,
  ChevronRight,
  Clock
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import { PPDBFormData } from '../types';
import { 
  createWhatsAppUrl, 
  generatePPDBWhatsAppMessage, 
  generateRegistrationCode 
} from '../utils/helpers';

interface RegistrationSectionProps {
  initialLevel?: string;
}

export const RegistrationSection: React.FC<RegistrationSectionProps> = ({ initialLevel }) => {
  const [formData, setFormData] = useState<PPDBFormData>({
    fullName: '',
    nickname: '',
    gender: 'Laki-laki',
    birthPlace: '',
    birthDate: '',
    level: initialLevel || 'SD Islam Terpadu (SDIT)',
    programType: 'Reguler (Fullday)',
    previousSchool: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    parentJob: '',
    address: '',
    notes: ''
  });

  // Update level if prop changes
  useEffect(() => {
    if (initialLevel) {
      setFormData(prev => ({ ...prev, level: initialLevel }));
    }
  }, [initialLevel]);

  const [activeTab, setActiveTab] = useState<'form' | 'success'>('form');
  const [registrationCode, setRegistrationCode] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const levelOptions = [
    'KB & TK Islam Terpadu',
    'SD Islam Terpadu (SDIT)',
    'SMP Islam Terpadu (SMPIT)',
    'Program Takhassus Tahfidz'
  ];

  const programOptions: ('Reguler (Fullday)' | 'Tahfidz Khusus' | 'Boarding (Asrama)')[] = [
    'Reguler (Fullday)',
    'Tahfidz Khusus',
    'Boarding (Asrama)'
  ];

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.fullName.trim()) err.fullName = 'Nama lengkap calon siswa wajib diisi';
    if (!formData.birthPlace.trim()) err.birthPlace = 'Tempat lahir wajib diisi';
    if (!formData.birthDate) err.birthDate = 'Tanggal lahir wajib dipilih';
    if (!formData.parentName.trim()) err.parentName = 'Nama orang tua/wali wajib diisi';
    if (!formData.parentPhone.trim()) {
      err.parentPhone = 'Nomor WhatsApp aktif wajib diisi untuk konfirmasi';
    } else if (formData.parentPhone.replace(/\D/g, '').length < 9) {
      err.parentPhone = 'Format nomor HP/WhatsApp tidak valid';
    }
    if (!formData.address.trim()) err.address = 'Alamat domisili wajib diisi';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newCode = generateRegistrationCode();
    setRegistrationCode(newCode);
    setActiveTab('success');
  };

  const handleSendViaWhatsApp = () => {
    if (!validate()) return;
    const code = registrationCode || generateRegistrationCode();
    setRegistrationCode(code);
    const waText = generatePPDBWhatsAppMessage(formData, code);
    const url = createWhatsAppUrl(schoolInfo.whatsappNumber, waText);
    window.open(url, '_blank');
    setActiveTab('success');
  };

  const handleCopySummary = () => {
    const text = generatePPDBWhatsAppMessage(formData, registrationCode);
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <section id="pendaftaran" className="py-20 bg-white relative scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <ClipboardCheck className="w-3.5 h-3.5 text-amber-800" />
            PPDB Online 2025/2026
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Formulir Pendaftaran Siswa Baru (Daring)
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Kemudahan mendaftar secara online untuk calon wali murid. Cukup isi formulir di bawah ini, dapatkan nomor registrasi, atau langsung teruskan data pendaftaran ke WhatsApp panitia PPDB kami.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {activeTab === 'form' ? (
            <div className="bg-[#faf9f6] rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden">
              {/* Notice Banner */}
              <div className="bg-emerald-900 text-white p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded bg-amber-400 text-emerald-950 text-xs font-extrabold uppercase tracking-wide mb-1.5">
                    Langkah Cepat & Praktis
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold">
                    Pendaftaran Daring Sekolah Daarunnisa
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/90 mt-1">
                    Silakan lengkapi formulir di bawah. Data Anda terlindungi dengan aman dan privasi terjamin.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm border border-emerald-500 shadow transition-all"
                  title="Langsung kirim via WhatsApp tanpa proses panjang"
                >
                  <MessageCircle className="w-4 h-4 text-amber-300" />
                  <span>Daftar Cepat via WA</span>
                </button>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 lg:p-10 space-y-8">
                
                {/* SECTION 1: DATA CALON SISWA */}
                <div>
                  <h4 className="text-base font-bold text-slate-900 pb-2 border-b border-slate-200 flex items-center gap-2">
                    <User className="w-5 h-5 text-emerald-700" />
                    1. Data Identitas Calon Siswa
                  </h4>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="sm:col-span-2">
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Nama Lengkap Calon Siswa <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Contoh: Muhammad Azzam Al-Fatih"
                        className={`w-full px-4 py-2.5 rounded-xl text-sm border bg-white focus:outline-none focus:ring-2 ${
                          errors.fullName ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-300 focus:ring-emerald-600'
                        }`}
                      />
                      {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Nama Panggilan
                      </label>
                      <input
                        type="text"
                        name="nickname"
                        value={formData.nickname}
                        onChange={handleInputChange}
                        placeholder="Contoh: Azzam"
                        className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Jenis Kelamin <span className="text-rose-500">*</span>
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      >
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Tempat Lahir <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="birthPlace"
                        value={formData.birthPlace}
                        onChange={handleInputChange}
                        placeholder="Contoh: Jakarta"
                        className={`w-full px-4 py-2.5 rounded-xl text-sm border bg-white focus:outline-none focus:ring-2 ${
                          errors.birthPlace ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-300 focus:ring-emerald-600'
                        }`}
                      />
                      {errors.birthPlace && <p className="text-xs text-rose-500 mt-1">{errors.birthPlace}</p>}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Tanggal Lahir <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 rounded-xl text-sm border bg-white focus:outline-none focus:ring-2 ${
                          errors.birthDate ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-300 focus:ring-emerald-600'
                        }`}
                      />
                      {errors.birthDate && <p className="text-xs text-rose-500 mt-1">{errors.birthDate}</p>}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Jenjang Sekolah yang Dituju <span className="text-rose-500">*</span>
                      </label>
                      <select
                        name="level"
                        value={formData.level}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 font-medium"
                      >
                        {levelOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Pilihan Program Belajar
                      </label>
                      <select
                        name="programType"
                        value={formData.programType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      >
                        {programOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Asal Sekolah Sebelumnya / PAUD
                      </label>
                      <input
                        type="text"
                        name="previousSchool"
                        value={formData.previousSchool}
                        onChange={handleInputChange}
                        placeholder="Contoh: TK Al-Hikmah (kosongkan jika belum pernah sekolah)"
                        className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>
                  </div>
                </div>

                {/* SECTION 2: DATA ORANG TUA / WALI */}
                <div>
                  <h4 className="text-base font-bold text-slate-900 pb-2 border-b border-slate-200 flex items-center gap-2">
                    <Users className="w-5 h-5 text-emerald-700" />
                    2. Data Orang Tua / Wali Siswa
                  </h4>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Nama Ayah / Ibu / Wali <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="Contoh: H. Ahmad Fauzi"
                        className={`w-full px-4 py-2.5 rounded-xl text-sm border bg-white focus:outline-none focus:ring-2 ${
                          errors.parentName ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-300 focus:ring-emerald-600'
                        }`}
                      />
                      {errors.parentName && <p className="text-xs text-rose-500 mt-1">{errors.parentName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Nomor WhatsApp / HP Aktif <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleInputChange}
                        placeholder="Contoh: 081234567890"
                        className={`w-full px-4 py-2.5 rounded-xl text-sm border bg-white focus:outline-none focus:ring-2 ${
                          errors.parentPhone ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-300 focus:ring-emerald-600'
                        }`}
                      />
                      {errors.parentPhone && <p className="text-xs text-rose-500 mt-1">{errors.parentPhone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Alamat Email
                      </label>
                      <input
                        type="email"
                        name="parentEmail"
                        value={formData.parentEmail}
                        onChange={handleInputChange}
                        placeholder="Contoh: orangtua@gmail.com"
                        className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Pekerjaan Orang Tua / Instansi
                      </label>
                      <input
                        type="text"
                        name="parentJob"
                        value={formData.parentJob}
                        onChange={handleInputChange}
                        placeholder="Contoh: Karyawan Swasta / Wiraswasta"
                        className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Alamat Tempat Tinggal Lengkap <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        name="address"
                        rows={2}
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Jl. / Kompleks, No. Rumah, RT/RW, Kelurahan, Kecamatan, Kota"
                        className={`w-full px-4 py-2 rounded-xl text-sm border bg-white focus:outline-none focus:ring-2 ${
                          errors.address ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-300 focus:ring-emerald-600'
                        }`}
                      />
                      {errors.address && <p className="text-xs text-rose-500 mt-1">{errors.address}</p>}
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Catatan Khusus / Pertanyaan Calon Wali Murid
                      </label>
                      <textarea
                        name="notes"
                        rows={2}
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Tuliskan jika ananda memiliki alergi, minat khusus, target hafalan sebelumnya, atau pertanyaan mengenai biaya..."
                        className="w-full px-4 py-2 rounded-xl text-sm border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action Buttons */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate-500 text-center sm:text-left">
                    Semua data yang dikirim akan diverifikasi oleh panitia penerimaan siswa baru.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-emerald-600 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 font-bold text-xs sm:text-sm transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-700" />
                      <span>Kirim via WhatsApp</span>
                    </button>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
                    >
                      <Send className="w-4 h-4 text-amber-300" />
                      <span>Simpan & Buat Bukti Pendaftaran</span>
                    </button>
                  </div>
                </div>

              </form>
            </div>
          ) : (
            /* REGISTRATION SUCCESS RECEIPT CARD */
            <div className="bg-white rounded-3xl border border-emerald-200 shadow-xl p-6 sm:p-10 text-slate-800 animate-in zoom-in-95 duration-200">
              <div className="text-center max-w-md mx-auto mb-8">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                  Pendaftaran Daring Berhasil!
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  Bukti Pra-Pendaftaran Siswa
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Terima kasih, data calon siswa telah berhasil direkam dalam sistem Sekolah Daarunnisa.
                </p>
              </div>

              {/* Digital Card Preview */}
              <div className="bg-[#faf9f6] rounded-2xl border border-slate-200 p-5 sm:p-6 mb-8 relative">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4 border-b border-slate-200">
                  <div>
                    <span className="text-xs text-slate-500 font-semibold uppercase">Nomor Registrasi PPDB</span>
                    <div className="text-xl sm:text-2xl font-black text-emerald-900 font-['Cinzel',serif] tracking-wider">
                      {registrationCode}
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-900 rounded-lg border border-amber-200">
                    Status: Menunggu Konfirmasi Berkas
                  </span>
                </div>

                <div className="py-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-500 block text-xs">Nama Calon Siswa:</span>
                    <strong className="text-slate-900">{formData.fullName} ({formData.gender})</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">Jenjang & Program:</span>
                    <strong className="text-emerald-800">{formData.level} - {formData.programType}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">Nama Orang Tua / Wali:</span>
                    <strong className="text-slate-900">{formData.parentName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">Nomor WhatsApp:</span>
                    <strong className="text-slate-900">{formData.parentPhone}</strong>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-slate-500 block text-xs">Alamat Domisili:</span>
                    <span className="text-slate-700">{formData.address}</span>
                  </div>
                </div>

                {/* Steps Forward */}
                <div className="pt-4 border-t border-slate-200 text-xs text-slate-600">
                  <strong className="text-slate-900 block mb-1">Langkah Selanjutnya:</strong>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Kirimkan konfirmasi nomor registrasi ini ke WhatsApp Admin PPDB.</li>
                    <li>Siapkan fotokopi Kartu Keluarga (KK), Akta Kelahiran, dan Pas Foto Ananda.</li>
                    <li>Panitia akan mengabarkan jadwal observasi psikologis & tes baca Al-Qur'an.</li>
                  </ol>
                </div>
              </div>

              {/* Action Buttons in Success View */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={createWhatsAppUrl(schoolInfo.whatsappNumber, generatePPDBWhatsAppMessage(formData, registrationCode))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>Kirim Data Ini ke WhatsApp Admin</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-sm transition-all"
                >
                  <Copy className="w-4 h-4" />
                  <span>{isCopied ? 'Tersalin!' : 'Salin Ringkasan'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('form');
                    setFormData({
                      fullName: '',
                      nickname: '',
                      gender: 'Laki-laki',
                      birthPlace: '',
                      birthDate: '',
                      level: 'SD Islam Terpadu (SDIT)',
                      programType: 'Reguler (Fullday)',
                      previousSchool: '',
                      parentName: '',
                      parentPhone: '',
                      parentEmail: '',
                      parentJob: '',
                      address: '',
                      notes: ''
                    });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs text-slate-500 hover:text-slate-800 underline"
                >
                  Isi Formulir Siswa Lain
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
