import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import { ContactFormData } from '../types';
import { createWhatsAppUrl, generateContactWhatsAppMessage } from '../utils/helpers';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'Informasi Pendaftaran Siswa Baru (PPDB)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const subjects = [
    'Informasi Pendaftaran Siswa Baru (PPDB)',
    'Konsultasi Kurikulum & Program Tahfidz',
    'Jadwal Kunjungan Sekolah (School Tour)',
    'Pertanyaan Biaya & Beasiswa',
    'Kerjasama Lembaga / Lainnya'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMsg('Mohon isi nama, nomor telepon/WhatsApp, dan pesan Anda.');
      return;
    }

    setIsSubmitted(true);
  };

  const handleSendViaWA = () => {
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMsg('Mohon lengkapi data formulir sebelum mengirim via WhatsApp.');
      return;
    }
    const message = generateContactWhatsAppMessage(formData);
    const url = createWhatsAppUrl(schoolInfo.whatsappNumber, message);
    window.open(url, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="kontak" className="py-20 bg-[#faf8f5] relative scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            Layanan Informasi & Kontak
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hubungi Sekolah Daarunnisa
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Kami siap menyambut dan mendampingi Bapak/Ibu untuk mendapatkan informasi terbaik seputar pendidikan ananda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Consultation */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick WhatsApp Consultation Card */}
            <div className="bg-gradient-to-br from-emerald-800 to-teal-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <MessageCircle className="w-32 h-32 text-white" />
              </div>

              <div className="relative z-10 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-emerald-950 font-bold text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-900 animate-ping"></span>
                  Layanan Respons Cepat
                </span>

                <h3 className="text-2xl font-bold font-['Cinzel',serif]">
                  Konsultasi Langsung via WhatsApp
                </h3>
                <p className="text-sm text-emerald-100/90 leading-relaxed">
                  Ingin respon cepat seputar kuota kelas, biaya pendidikan, atau janji temu kunjungan sekolah? Tim admisi kami siap menjawab pesan Anda.
                </p>

                <div className="pt-2">
                  <a
                    href={createWhatsAppUrl(schoolInfo.whatsappNumber, `Assalamu'alaikum Admin ${schoolInfo.name}, saya ingin konsultasi seputar pendaftaran siswa baru.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-xl bg-white text-emerald-950 font-extrabold text-sm hover:bg-amber-300 transition-colors shadow-md"
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-700" />
                    <span>Chat WhatsApp: {schoolInfo.whatsappDisplay}</span>
                  </a>
                </div>

                {/* Preset quick chat prompts */}
                <div className="pt-2 text-xs text-emerald-200">
                  <p className="mb-2 font-medium">Atau pilih topik cepat:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { label: "Brosur Biaya", text: "Mohon info rincian biaya pendaftaran & SPP" },
                      { label: "Jadwal Tour", text: "Saya ingin reservasi jadwal kunjungan sekolah" },
                      { label: "Info Beasiswa", text: "Mohon informasi syarat beasiswa tahfidz" },
                    ].map((btn, idx) => (
                      <a
                        key={idx}
                        href={createWhatsAppUrl(schoolInfo.whatsappNumber, `Assalamu'alaikum Admin ${schoolInfo.name}, ${btn.text}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-md bg-emerald-700/60 hover:bg-emerald-600/80 text-emerald-100 text-[11px] font-medium border border-emerald-600/50"
                      >
                        {btn.label} &rarr;
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Address & Office Hours Info Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Alamat Kampus</h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5 leading-snug">
                    {schoolInfo.address.street}, {schoolInfo.address.village}, {schoolInfo.address.district}, {schoolInfo.address.city}, {schoolInfo.address.province} {schoolInfo.address.postalCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Jam Layanan Kantor</h4>
                  <p className="text-sm text-slate-800 mt-0.5 leading-relaxed">
                    {schoolInfo.visitingHours}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Surat Elektronik (Email)</h4>
                  <a href={`mailto:${schoolInfo.email}`} className="text-sm font-semibold text-emerald-700 hover:underline mt-0.5 block">
                    {schoolInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Telepon Kantor</h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    {schoolInfo.phone}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-md">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Kirim Pesan atau Pertanyaan
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Isi formulir ini dan tim kami akan segera menghubungi Anda melalui nomor telepon atau email yang terdaftar.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 text-center bg-emerald-50/70 border border-emerald-200 rounded-2xl animate-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Pesan Berhasil Terkirim!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
                    Terima kasih telah menghubungi {schoolInfo.name}. Kami telah menerima pertanyaan Anda dan akan memberikan balasan sesegera mungkin.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={createWhatsAppUrl(schoolInfo.whatsappNumber, generateContactWhatsAppMessage(formData))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Teruskan juga ke WhatsApp</span>
                    </a>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          subject: 'Informasi Pendaftaran Siswa Baru (PPDB)',
                          message: ''
                        });
                      }}
                      className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Nama Lengkap Bapak/Ibu <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Contoh: Ibu Rina Wardani"
                        className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50/50 focus:bg-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                        Nomor WhatsApp / HP Aktif <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Contoh: 081289001234"
                        className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50/50 focus:bg-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                      Alamat Email (Opsional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Contoh: nama@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50/50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                      Topik Konsultasi
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50/50 focus:bg-white font-medium"
                    >
                      {subjects.map((sub, idx) => (
                        <option key={idx} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                      Isi Pesan / Pertanyaan <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tuliskan pertanyaan Anda mengenai program sekolah, syarat pendaftaran, atau hal lain yang ingin diketahui..."
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50/50 focus:bg-white"
                      required
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={handleSendViaWA}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-emerald-600 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 font-bold text-xs sm:text-sm transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-700" />
                      <span>Kirim Langsung via WA</span>
                    </button>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                    >
                      <Send className="w-4 h-4 text-amber-300" />
                      <span>Kirim Pesan Formulir</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
