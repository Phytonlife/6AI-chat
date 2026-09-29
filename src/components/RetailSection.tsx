import React from 'react';
import { ShoppingBag, Smartphone, FileText, UserCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { T } from '../data/translations.ts';
import { getWhatsAppLink } from '../data/landingData.ts';

export const RetailSection: React.FC = () => {
  const { lang } = useLanguage();
  const text = T[lang];

  return (
    <section id="retail" className="py-20 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
            <ShoppingBag className="w-3.5 h-3.5 text-emerald-600" />
            <span>{text.retailBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-neutral-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {text.retailTitle}
          </h2>

          <p className="text-base sm:text-lg text-neutral-600">
            {text.retailSub}
          </p>
        </div>

        {/* 4-Step Retail Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#F7F8FA] rounded-3xl p-6 border border-neutral-200 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="w-8 h-8 rounded-xl bg-white border border-neutral-200 flex items-center justify-center font-mono font-bold text-xs text-neutral-800 shadow-2xs">
                1
              </span>
              <h3 className="font-extrabold text-base text-neutral-900">
                {text.retailStep1Title}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {text.retailStep1Desc}
              </p>
            </div>
            <div className="text-[11px] font-semibold text-emerald-700 pt-2 border-t border-neutral-200/60">
              WhatsApp 24/7
            </div>
          </div>

          <div className="bg-[#F7F8FA] rounded-3xl p-6 border border-neutral-200 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="w-8 h-8 rounded-xl bg-white border border-neutral-200 flex items-center justify-center font-mono font-bold text-xs text-neutral-800 shadow-2xs">
                2
              </span>
              <h3 className="font-extrabold text-base text-neutral-900">
                {text.retailStep2Title}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {text.retailStep2Desc}
              </p>
            </div>
            <div className="text-[11px] font-semibold text-emerald-700 pt-2 border-t border-neutral-200/60">
              {lang === 'kz' ? 'Іздеу және сүзгілер' : 'Поиск и категории'}
            </div>
          </div>

          <div className="bg-[#F7F8FA] rounded-3xl p-6 border border-neutral-200 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="w-8 h-8 rounded-xl bg-white border border-neutral-200 flex items-center justify-center font-mono font-bold text-xs text-neutral-800 shadow-2xs">
                3
              </span>
              <h3 className="font-extrabold text-base text-neutral-900">
                {text.retailStep3Title}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {text.retailStep3Desc}
              </p>
            </div>
            <div className="text-[11px] font-semibold text-emerald-700 pt-2 border-t border-neutral-200/60">
              {lang === 'kz' ? 'Ыңғайлы себет' : 'Корзина без багов'}
            </div>
          </div>

          <div className="bg-[#F7F8FA] rounded-3xl p-6 border border-neutral-200 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-xs shadow-2xs">
                4
              </span>
              <h3 className="font-extrabold text-base text-neutral-900">
                {text.retailStep4Title}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {text.retailStep4Desc}
              </p>
            </div>
            <div className="text-[11px] font-semibold text-emerald-700 pt-2 border-t border-neutral-200/60">
              {lang === 'kz' ? 'Дайын жүкқұжат' : 'Накладная в чате'}
            </div>
          </div>
        </div>

        {/* Reassurance Banner for Shop Owners */}
        <div className="p-6 sm:p-8 bg-neutral-950 text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-extrabold">
              {lang === 'kz' ? 'Дүкеніңіздегі сауданы жеңілдетіңіз' : 'Продавайте товары в WhatsApp без рутины'}
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
              {lang === 'kz'
                ? 'Клиенттер каталогты өздері қарап, себетке жинап, дайын накладнаямен келеді. Менеджерге тек төлемді қабылдап, тауарды курьерге беру қалады!'
                : 'Покупатели сами собирают корзину в удобной витрине и присылают готовую накладную. Менеджеру остаётся лишь сверить адрес и передать заказ в доставку!'}
            </p>
          </div>

          <a
            href={getWhatsAppLink(lang === 'kz' ? 'Сәлеметсіз бе! Менің дүкенім бар, 6 AI витринасы мен сату жүйесін қосқым келеді.' : 'Здравствуйте! У меня товарный бизнес/магазин, хочу подключить 6 AI с онлайн-витриной.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shrink-0 transition-all shadow-md flex items-center gap-2"
          >
            <span>{lang === 'kz' ? 'Дүкен үшін қосу' : 'Подключить магазин'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
