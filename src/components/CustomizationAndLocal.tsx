import React from 'react';
import { Sliders, MapPin, Users, CheckCircle2, ArrowRight, Laptop, CalendarCheck } from 'lucide-react';
import { getWhatsAppLink } from '../data/landingData.ts';

export const CustomizationAndLocal: React.FC = () => {
  const steps = [
    { num: '01', title: 'Встреча / Брифинг', desc: 'Разбираем ваши текущие каналы и частые вопросы клиентов' },
    { num: '02', title: 'Анализ бизнеса', desc: 'Изучаем прайс, регламенты, частые возражения и расписание' },
    { num: '03', title: 'Индивидуальная настройка', desc: 'Загружаем меню, витрину, фото, подключаем WhatsApp' },
    { num: '04', title: 'Тестирование сценариев', desc: 'Прогоняем 20+ реальных ситуаций и диалогов' },
    { num: '05', title: 'Запуск и сопровождение', desc: 'Система начинает работать 24/7, мы на связи' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F7F8FA] border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* ========================================================
            SECTION 20: ИНДИВИДУАЛЬНАЯ НАСТРОЙКА
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-white px-3 py-1 rounded-md border border-neutral-200">
              <Sliders className="w-3.5 h-3.5 text-emerald-600" />
              <span>Конкурентное преимущество</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
              Не шаблон. Настройка под правила именно вашего бизнеса.
            </h2>

            <p className="text-base text-neutral-600 leading-relaxed">
              У двух салонов красоты или ресторанов в одном городе могут быть совершенно разные прайсы, интервалы бронирования, правила предоплаты и тональность общения. Поэтому <strong>6 AI</strong> никогда не запускается «по шаблону».
            </p>

            <div className="p-4 bg-white rounded-2xl border border-neutral-200 space-y-2">
              <p className="text-sm font-bold text-neutral-900">
                «Мы не просто выдаём доступ к кабинету — мы помогаем настроить систему под ваш реальный процесс.»
              </p>
              <p className="text-xs text-neutral-500">
                Задаём правильные вопросы, бережно оцифровываем прайс-лист и тестируем ответы перед открытием доступа для клиентов.
              </p>
            </div>
          </div>

          {/* Config checklist card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm space-y-4">
              <h4 className="font-extrabold text-sm text-neutral-900 uppercase tracking-wider border-b border-neutral-100 pb-3">
                Что настраивается под вашу компанию:
              </h4>

              <div className="grid grid-cols-2 gap-2.5 text-xs">
                {[
                  'Название и специфика',
                  'Прайс-лист и длительность',
                  'Каталог витрины с фото',
                  'Слоты и график мастеров',
                  'Правила бронирования',
                  'База частых вопросов FAQ',
                  'Точный адрес и ориентиры',
                  'Тональность общения (Tone of Voice)',
                  'Условия доставки и оплаты',
                  'Сценарии нестандартных тем',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-[#F7F8FA] rounded-lg border border-neutral-100 font-medium text-neutral-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            SECTION 21: ЛОКАЛЬНЫЙ ЗАПУСК (АТЫРАУ & КАЗАХСТАН)
        ======================================================== */}
        <div className="bg-white rounded-3xl border border-neutral-200 p-8 sm:p-12 shadow-sm space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-neutral-700 bg-neutral-100 px-3 py-1 rounded-md">
              <MapPin className="w-3.5 h-3.5 text-rose-600" />
              <span>Локальное присутствие · Казахстан</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Для бизнеса в Атырау — личная настройка на месте.
            </h3>

            <p className="text-sm sm:text-base text-neutral-600">
              Можно встретиться на территории вашего заведения, салона или магазина, либо провести настройку онлайн по видеосвязи. Для других городов Казахстана (Алматы, Астана, Шымкент, Актау и др.) запуск проходит удаленно за 1–3 дня.
            </p>
          </div>

          {/* 5 Steps timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((st) => (
              <div key={st.num} className="p-4 bg-[#F7F8FA] rounded-2xl border border-neutral-200 space-y-2 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Шаг {st.num}
                  </span>
                  <h5 className="font-bold text-sm text-neutral-900 mt-2">
                    {st.title}
                  </h5>
                  <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-100">
            <span className="text-xs text-neutral-500 font-medium">
              Хотите обсудить запуск и встречу в Атырау?
            </span>
            <a
              href={getWhatsAppLink('Здравствуйте! Хочу обсудить настройку 6 AI в Атырау на территории нашего бизнеса.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-neutral-900 text-white rounded-xl text-xs font-bold hover:bg-neutral-800 transition-all flex items-center gap-2"
            >
              <span>Запросить личную встречу / звонок</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
