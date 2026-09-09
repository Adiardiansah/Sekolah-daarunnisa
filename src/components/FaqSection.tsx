import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { faqItems, schoolInfo } from '../data/schoolData';
import { createWhatsAppUrl } from '../utils/helpers';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'PPDB', 'Kurikulum', 'Biaya', 'Umum'];

  const filteredFaqs = selectedCategory === 'Semua'
    ? faqItems
    : faqItems.filter(f => f.category === selectedCategory);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const waFaqUrl = createWhatsAppUrl(
    schoolInfo.whatsappNumber,
    `Assalamu'alaikum Admin ${schoolInfo.name}, saya memiliki pertanyaan yang belum tercantum di halaman FAQ website.`
  );

  return (
    <section id="faq" className="py-20 bg-white relative scroll-mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Tanya Jawab (FAQ)
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Informasi penting yang kerap ditanyakan oleh calon wali murid seputar pendaftaran, kurikulum, dan kegiatan sekolah.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-[#faf9f7] transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-white transition-colors"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-emerald-100 text-emerald-800' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 bg-white">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              Punya pertanyaan lain yang belum terjawab?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Konsultasikan langsung dengan panitia admisi kami melalui WhatsApp.
            </p>
          </div>

          <a
            href={waFaqUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm shadow transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-amber-300" />
            <span>Tanya via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
