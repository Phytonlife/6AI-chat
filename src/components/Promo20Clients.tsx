import React from 'react';
import { Sparkles, MessageSquare, ArrowRight, Flame } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { T } from '../data/translations.ts';
import { getWhatsAppLink } from '../data/landingData.ts';

export const Promo20Clients: React.FC = () => {
  const { lang } = useLanguage();
  const text = T[lang];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-emerald-700/60 relative overflow-hidden">
          {/* Background subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950 px-3 py-1 rounded-md border border-emerald-700">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>{text.promo20Badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {text.promo20Title}
              </h3>

              <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl leading-relaxed">
                {text.promo20Desc}
              </p>

              <div className="flex items-center gap-3 pt-1">
                <span className="text-xs font-mono font-bold text-amber-300 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-amber-400/40">
                  {text.promo20Counter}
                </span>
                <span className="text-[11px] text-emerald-200">
                  {lang === 'kz' ? 'Тарифтер: START, SELLER, BUSINESS' : 'Тарифы: START, SELLER, BUSINESS'}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <a
                href={getWhatsAppLink(lang === 'kz' ? 'Сәлеметсіз бе! Мен алғашқы 20 клиенттің бірі болып айына 15 000 ₸ жеңілдікпен қосылғым келеді.' : 'Здравствуйте! Хочу успеть в число первых 20 клиентов по спеццене 15 000 ₸/мес на полгода.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 bg-white text-emerald-950 hover:bg-emerald-50 rounded-xl text-xs sm:text-sm font-extrabold transition-all text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700" />
                <span>{text.promo20Btn}</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
