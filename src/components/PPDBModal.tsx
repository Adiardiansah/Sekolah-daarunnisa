import React, { useState } from 'react';
import { X, ClipboardCheck, MessageCircle, Send, CheckCircle2, Copy } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import { PPDBFormData } from '../types';
import { createWhatsAppUrl, generatePPDBWhatsAppMessage, generateRegistrationCode } from '../utils/helpers';

interface PPDBModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLevel?: string;
}

export const PPDBModal: React.FC<PPDBModalProps> = ({ isOpen, onClose, selectedLevel }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<PPDBFormData>({
    fullName: '',
    nickname: '',
    gender: 'Laki-laki',
    birthPlace: '',
    birthDate: '',
    level: selectedLevel || 'SD Islam Terpadu (SDIT)',
    programType: 'Reguler (Fullday)',
    previousSchool: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    parentJob: '',
    address: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [regCode, setRegCode] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.fullName.trim()) err.fullName = 'Nama calon siswa wajib diisi';
    if (!formData.parentName.trim()) err.parentName = 'Nama orang tua wajib diisi';
    if (!formData.parentPhone.trim()) err.parentPhone = 'Nomor WhatsApp wajib diisi';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const code = generateRegistrationCode();
    setRegCode(code);
    setIsSubmitted(true);
  };

  const handleSendWA = () => {
    if (!validate()) return;
    const code = regCode || generateRegistrationCode();
    setRegCode(code);
    const msg = generatePPDBWhatsAppMessage(formData, code);
    const url = createWhatsAppUrl(schoolInfo.whatsappNumber, msg);
    window.open(url, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 text-slate-800 my-8">
        
        {/* Modal Header */}
        <div className="bg-emerald-900 text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-emerald-950 flex items-center justify-center font-bold">
              <ClipboardCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-amber-300">PPDB Daring 2025/2026</span>
              <h3 className="text-base sm:text-lg font-bold">Formulir Pendaftaran Siswa Baru</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Pendaftaran Berhasil Dicatat!</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Kode Registrasi Anda:
              </p>
              <div className="my-3 text-2xl font-black text-emerald-900 font-['Cinzel',serif]">
                {regCode}
              </div>

              <div className="bg-slate-50 p-4 rounded-xl text-xs text-left text-slate-700 space-y-1.5 border border-slate-200">
                <p><strong>Nama Siswa:</strong> {formData.fullName}</p>
                <p><strong>Jenjang:</strong> {formData.level} ({formData.programType})</p>
                <p><strong>Orang Tua:</strong> {formData.parentName} ({formData.parentPhone})</p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={handleSendWA}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Kirim Berkas ke WhatsApp Admin</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-5 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50"
                >
                  Selesai & Tutup
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Lengkap Calon Siswa *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Nama lengkap sesuai akta kelahiran"
                    className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    required
                  />
                  {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Jenis Kelamin
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Jenjang Sekolah *
                  </label>
                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="KB & TK Islam Terpadu">KB & TK Islam Terpadu</option>
                    <option value="SD Islam Terpadu (SDIT)">SD Islam Terpadu (SDIT)</option>
                    <option value="SMP Islam Terpadu (SMPIT)">SMP Islam Terpadu (SMPIT)</option>
                    <option value="Program Takhassus Tahfidz">Program Takhassus Tahfidz</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Orang Tua / Wali *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    placeholder="Nama ayah / ibu"
                    className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    required
                  />
                  {errors.parentName && <p className="text-xs text-rose-500 mt-1">{errors.parentName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    No. WhatsApp Aktif *
                  </label>
                  <input
                    type="tel"
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleInputChange}
                    placeholder="0812xxxxxxxx"
                    className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    required
                  />
                  {errors.parentPhone && <p className="text-xs text-rose-500 mt-1">{errors.parentPhone}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Alamat Domisili Singkat
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Kota / Wilayah tempat tinggal"
                    className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Catatan / Pertanyaan Tambahan
                  </label>
                  <textarea
                    name="notes"
                    rows={2}
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Tuliskan jika ada info tambahan atau pertanyaan..."
                    className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleSendWA}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-600 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 text-xs font-bold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>Kirim via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold shadow transition-colors"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Kirim Pendaftaran Daring</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
