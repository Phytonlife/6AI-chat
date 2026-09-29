import React from 'react';
import { DollarSign, Clock, Users, Check, X, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { T } from '../data/translations.ts';
import { getWhatsAppLink } from '../data/landingData.ts';

export const CostComparison: React.FC = () => {
  const { lang } = useLanguage();
  const text = T[lang];

  return (
    <section id="compare" className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
            <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
            <span>{text.compareBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-neutral-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {text.compareTitle}
          </h2>

          <p className="text-base sm:text-lg text-neutral-600">
            {text.compareSub}
          </p>
        </div>

        {/* 2-Column Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Hiring Separate Employees (Traditional way) */}
          <div className="lg:col-span-6 bg-[#F7F8FA] rounded-3xl p-6 sm:p-8 border border-neutral-300/80 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <span className="text-sm font-extrabold text-neutral-900 uppercase tracking-wider">
                  {lang === 'kz' ? 'Жеке мамандарды жалдау:' : 'Найм отдельных людей в штат:'}
                </span>
                <span className="text-xs font-mono font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                  {lang === 'kz' ? 'Қымбат әрі күрделі' : 'Высокие расходы'}
                </span>
              </div>

              {/* Items */}
              <div className="space-y-3.5 text-xs">
                <div className="p-3.5 bg-white rounded-xl border border-neutral-200 flex items-center justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3" />
                    </span>
                    <div>
                      <div className="font-bold text-neutral-900 text-xs sm:text-sm">{text.adminRole}</div>
                      <div className="text-[11px] text-neutral-500 mt-0.5">
                        {lang === 'kz' ? 'Түнде және демалыста жауап бере алмайды' : 'Не отвечает ночью, в выходные и во время отпуска'}
                      </div>
                    </div>
                  </div>
                  <span className="font-mono font-extrabold text-xs sm:text-sm text-neutral-900 shrink-0">
                    {text.adminCost}
                  </span>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-neutral-200 flex items-center justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3" />
                    </span>
                    <div>
                      <div className="font-bold text-neutral-900 text-xs sm:text-sm">{text.sellerRole}</div>
                      <div className="text-[11px] text-neutral-500 mt-0.5">
                        {lang === 'kz' ? 'Тауарларды таңдап, хабарламаларға жауап беру' : 'Консультации и подбор вариантов в чате'}
                      </div>
                    </div>
                  </div>
                  <span className="font-mono font-extrabold text-xs sm:text-sm text-neutral-900 shrink-0">
                    {text.sellerCost}
                  </span>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-neutral-200 flex items-center justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3" />
                    </span>
                    <div>
                      <div className="font-bold text-neutral-900 text-xs sm:text-sm">{text.appRole}</div>
                      <div className="text-[11px] text-neutral-500 mt-0.5">
                        {lang === 'kz' ? 'Әзірлеу, сервер, қолдау шығындары' : 'Разработка, серверы и постоянная поддержка'}
                      </div>
                    </div>
                  </div>
                  <span className="font-mono font-extrabold text-xs sm:text-sm text-neutral-900 shrink-0">
                    {text.appCost}
                  </span>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-neutral-200 flex items-center justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3" />
                    </span>
                    <div>
                      <div className="font-bold text-neutral-900 text-xs sm:text-sm">{text.analystRole}</div>
                      <div className="text-[11px] text-neutral-500 mt-0.5">
                        {lang === 'kz' ? 'Жоғалған клиенттермен жұмыс және сапаны бақылау' : 'Контроль воронки, отзывов и возврат клиентов'}
                      </div>
                    </div>
                  </div>
                  <span className="font-mono font-extrabold text-xs sm:text-sm text-neutral-900 shrink-0">
                    {text.analystCost}
                  </span>
                </div>
              </div>
            </div>

            {/* Total Traditional Cost */}
            <div className="p-4 bg-neutral-200/80 rounded-2xl flex items-center justify-between border border-neutral-300">
              <span className="font-extrabold text-neutral-800 text-xs sm:text-sm">{text.totalStaff}</span>
              <span className="font-mono font-black text-lg sm:text-xl text-rose-700">
                {text.totalStaffCost}
              </span>
            </div>
          </div>

          {/* Right Column: 6 AI All-in-One */}
          <div className="lg:col-span-6 bg-neutral-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-emerald-500 flex flex-col justify-between space-y-6 relative overflow-hidden">
            {/* Background highlight */}
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                    6
                  </span>
                  <span className="text-sm font-extrabold text-white uppercase tracking-wider">
                    {text.aiSolutionTitle}
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-800">
                  {lang === 'kz' ? 'Үнемділік 95%' : 'Экономия 95%'}
                </span>
              </div>

              {/* Benefits list */}
              <div className="space-y-3 text-xs sm:text-sm">
                {[
                  lang === 'kz' ? 'AI-Администратор 24/7 жауап береді, жазылуды рәсімдейді' : 'AI-Администратор: отвечает 24/7, консультирует и записывает',
                  lang === 'kz' ? 'AI-Сатушы: тауарларды ұсынып, себет пен тапсырыс жасайды' : 'AI-Продавец: подбирает товары и доводит до заказа',
                  lang === 'kz' ? 'Жеке мобильді витрина: қосымша орнатпай браузерде ашылады' : 'Мобильная онлайн-витрина: без скачивания приложений',
                  lang === 'kz' ? 'Ыстық лидтер: сатып алмай қалған клиенттерді тіркеп отырады' : 'Горячие лиды: фиксирует всех, кто не завершил бронь',
                  lang === 'kz' ? 'Кері байланыс: клиенттерден автоматты бағалау жинайды' : 'Обратная связь: собирает оценки и защищает репутацию',
                  lang === 'kz' ? 'Бизнес-аналитика: өтінімдер саны мен воронканы көрсетеді' : 'Сквозная бизнес-аналитика: цифры и воронка потерь',
                  lang === 'kz' ? 'Ешқандай демалыссыз, ауырып қалусыз және шаршаусыз' : 'Без отпусков, больничных, отгулов и выгорания',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-neutral-200">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price & CTA */}
            <div className="relative z-10 pt-4 border-t border-neutral-800 space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-neutral-400 block">
                    {lang === 'kz' ? 'Айлық абоненттік төлем:' : 'Ежемесячная подписка:'}
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-3xl sm:text-4xl font-black font-mono text-emerald-400">
                      {text.aiSolutionCost}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-emerald-300 bg-emerald-950/80 px-2 py-1 rounded border border-emerald-800">
                    24 сағат / 7 күн
                  </span>
                </div>
              </div>

              <a
                href={getWhatsAppLink(lang === 'kz' ? 'Сәлеметсіз бе! 6 AI жүйесін 25 000 ₸ тарифі бойынша қосу туралы білгім келеді.' : 'Здравствуйте! Хочу подключить 6 AI для своего бизнеса от 25 000 ₸/мес.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs sm:text-sm font-bold transition-all text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <span>{lang === 'kz' ? 'Барлығын 25 000 ₸-ге алу' : 'Получить всё в одном от 25 000 ₸'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
