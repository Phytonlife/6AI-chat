import React from 'react';
import { Target, Zap, Clock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { T } from '../data/translations.ts';
import { getWhatsAppLink } from '../data/landingData.ts';

export const TargetAdsCombo: React.FC = () => {
  const { lang } = useLanguage();
  const text = T[lang];

  return (
    <section id="ads" className="py-20 sm:py-24 bg-[#F7F8FA] border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-white px-3 py-1 rounded-md border border-neutral-200 shadow-2xs">
            <Target className="w-3.5 h-3.5 text-emerald-600" />
            <span>{text.adsBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-neutral-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {text.adsTitle}
          </h2>

          <p className="text-base sm:text-lg text-neutral-600">
            {text.adsSub}
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-7 border border-neutral-200 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-neutral-900 leading-snug">
                {text.adsPoint1Title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {text.adsPoint1Desc}
              </p>
            </div>
            <div className="pt-3 border-t border-neutral-100 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>{lang === 'kz' ? 'Шебер сабырлы жұмыс істейді' : 'Мастер не отвлекается'}</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-neutral-200 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-neutral-900 leading-snug">
                {text.adsPoint2Title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {text.adsPoint2Desc}
              </p>
            </div>
            <div className="pt-3 border-t border-neutral-100 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>{lang === 'kz' ? '3 секундта жауап' : 'Ответ за 3 секунды'}</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-neutral-200 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-neutral-900 leading-snug">
                {text.adsPoint3Title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {text.adsPoint3Desc}
              </p>
            </div>
            <div className="pt-3 border-t border-neutral-100 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>{lang === 'kz' ? 'Бюджет желге ұшпайды' : 'Бюджет окупается'}</span>
            </div>
          </div>
        </div>

        {/* Real Example Visual Banner */}
        <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold uppercase text-emerald-700 font-mono tracking-wider">
              {lang === 'kz' ? 'Мысал сценарий:' : 'Пример из практики:'}
            </span>
            <p className="text-sm sm:text-base font-extrabold text-neutral-900">
              {lang === 'kz' 
                ? '«Instagram-да жарнама жүріп жатыр → Клиенттер әр 7 минут сайын WhatsApp-қа жазады → 6 AI барлығын күттірмей қабылдап, бос уақытты таңдатады!»'
                : '«Идёт таргет в Instagram → Клиенты пишут каждые 7 минут → 6 AI принимает всех без очереди, продаёт и заносит запись в календарь!»'}
            </p>
          </div>

          <a
            href={getWhatsAppLink(lang === 'kz' ? 'Сәлеметсіз бе! Бізде жарнама/таргет қосылған, 6 AI арқылы хабарламаларды өңдеуді автоматтандырғым келеді.' : 'Здравствуйте! Запускаем рекламу и хотим подключить 6 AI для обработки потока заявок.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-2"
          >
            <span>{lang === 'kz' ? 'Жарнамамен қосу' : 'Подключить под рекламу'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
