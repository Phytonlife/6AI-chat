import React, { useState } from 'react';
import { 
  Sparkles, Utensils, ShoppingBag, HeartHandshake, GraduationCap, 
  Wrench, User, CheckCircle2, ChevronRight, MessageSquare, ArrowRight
} from 'lucide-react';
import { getWhatsAppLink } from '../data/landingData.ts';
import massageImg from '../assets/images/massage_spa_studio_1790687061075.jpg';
import restaurantImg from '../assets/images/restaurant_banquet_1790687074629.jpg';
import retailGiftImg from '../assets/images/retail_boutique_gift_1790687111565.jpg';

export const TargetAudienceAndCases: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<'massage' | 'restaurant' | 'shop'>('massage');

  const industries = [
    { title: 'Салоны красоты & SPA', desc: 'Запись на стрижки, уходы, окрашивание и ногтевой сервис' },
    { title: 'Массажные студии', desc: 'Выбор мастера, бронь времени, продажа курсов и сертификатов' },
    { title: 'Рестораны & Банкеты', desc: 'Бронь столиков, согласование дат и меню для мероприятий' },
    { title: 'Магазины & Шоурумы', desc: 'Витрина товаров, консультация по наличию, оформление заказов' },
    { title: 'Студии фитнеса & йоги', desc: 'Расписание групп, покупка абонементов, запись на тренировку' },
    { title: 'Образовательные центры', desc: 'Запись на пробные уроки, курсы языков и детские секции' },
    { title: 'Сервисные компании', desc: 'Химчистки, детейлинг, ремонт техники и выездные услуги' },
    { title: 'Частные специалисты', desc: 'Коучи, психологи, косметологи и персональные мастера' },
  ];

  return (
    <section id="scenarios" className="py-20 sm:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20">
        
        {/* ========================================================
            SECTION 22: КОМУ ПОДХОДИТ
        ======================================================== */}
        <div className="space-y-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
              <span>Сферы применения</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-neutral-900 tracking-tight" style={{ textWrap: 'balance' }}>
              Кому подходит 6 AI?
            </h2>

            <p className="text-lg text-neutral-600">
              «Если ваши клиенты регулярно задают вопросы в WhatsApp — 6 AI уже может приносить пользу вашему бизнесу с первого дня.»
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#F7F8FA] rounded-2xl border border-neutral-200 hover:border-emerald-300 transition-all space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <h4 className="font-extrabold text-sm text-neutral-900">{ind.title}</h4>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            SECTION 23: РЕАЛЬНЫЕ СЦЕНАРИИ (ИНТЕРАКТИВНЫЙ ТАБ)
        ======================================================== */}
        <div className="space-y-10 pt-8 border-t border-neutral-100">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Как это работает в реальных сценариях:
            </h3>
            <p className="text-sm text-neutral-600">
              Переключите нишу, чтобы увидеть, как цепочка адаптируется под специфику конкретного бизнеса:
            </p>
          </div>

          {/* Scenario tabs */}
          <div className="flex flex-wrap gap-2 border-b border-neutral-200 pb-3">
            {[
              { id: 'massage', label: '1. Массажный салон (Запись)' },
              { id: 'restaurant', label: '2. Ресторан (Банкетная заявка)' },
              { id: 'shop', label: '3. Магазин подарков (Заказ с витрины)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveScenario(tab.id as any)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  activeScenario === tab.id
                    ? 'bg-neutral-950 text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Scenario Content card */}
          <div className="bg-[#F7F8FA] rounded-3xl border border-neutral-200 p-6 sm:p-8">
            {activeScenario === 'massage' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="text-xs font-bold text-emerald-800 bg-emerald-100/70 inline-block px-2.5 py-1 rounded">
                    Сценарий: Запись на массаж
                  </div>
                  <h4 className="text-xl font-extrabold text-neutral-900">
                    Клиент → WhatsApp → AI → Подбор услуги → Выбор времени → Подтверждённая бронь
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Клиент спрашивает про снятие болей в спине. AI объясняет разницу между релакс и лечебным сеансом, проверяет календарь мастера Айгерим и фиксирует запись без задержек.
                  </p>
                  <div className="p-3 bg-white rounded-xl border border-neutral-200 text-xs text-neutral-700">
                    <strong>Итог:</strong> Бронь в календаре, клиент получил адрес и памятку, администратор свободен от рутины.
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <img
                    src={massageImg}
                    onError={(e) => { e.currentTarget.src = '/images/massage.jpg'; }}
                    alt="Массажный салон интерьер"
                    className="w-full h-64 sm:h-72 object-cover rounded-2xl border border-neutral-300 shadow-md"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {activeScenario === 'restaurant' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="text-xs font-bold text-emerald-800 bg-emerald-100/70 inline-block px-2.5 py-1 rounded">
                    Сценарий: Банкетный зал ресторана
                  </div>
                  <h4 className="text-xl font-extrabold text-neutral-900">
                    Клиент → WhatsApp → Запрос на банкет → Дата → Число гостей → Готовая смета-заявка
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    «Здравствуйте! Свободен ли зал на 18 октября на 45 человек?» AI уточняет формат (юбилей / корпоратив), высылает меню банкета и передаёт готовый лид управляющему.
                  </p>
                  <div className="p-3 bg-white rounded-xl border border-neutral-200 text-xs text-neutral-700">
                    <strong>Итог:</strong> Управляющий связывается с клиентом, зная точную дату, количество гостей и средний чек.
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <img
                    src={restaurantImg}
                    onError={(e) => { e.currentTarget.src = '/images/restaurant_banquet.jpg'; }}
                    alt="Банкетный зал ресторана"
                    className="w-full h-64 sm:h-72 object-cover rounded-2xl border border-neutral-300 shadow-md"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {activeScenario === 'shop' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="text-xs font-bold text-emerald-800 bg-emerald-100/70 inline-block px-2.5 py-1 rounded">
                    Сценарий: Розничный магазин подарков
                  </div>
                  <h4 className="text-xl font-extrabold text-neutral-900">
                    Клиент → Поиск подарка → Мобильная витрина → Корзина → Накладная заказа
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Клиент выбирает подарок в диапазоне 20 000 — 30 000 ₸. AI отправляет подборку с фотографиями, покупатель добавляет в корзину и отправляет структурированную заявку на доставку.
                  </p>
                  <div className="p-3 bg-white rounded-xl border border-neutral-200 text-xs text-neutral-700">
                    <strong>Итог:</strong> Накладная сформирована, менеджеру остаётся лишь упаковать и отправить заказ курьером.
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <img
                    src={retailGiftImg}
                    onError={(e) => { e.currentTarget.src = '/images/certificate.jpg'; }}
                    alt="Магазин подарков витрина"
                    className="w-full h-64 sm:h-72 object-cover rounded-2xl border border-neutral-300 shadow-md"
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ========================================================
            SECTION 24: РЕАЛЬНЫЕ КЕЙСЫ ТЕСТИРОВАНИЯ
        ======================================================== */}
        <div className="space-y-6 pt-8 border-t border-neutral-100">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Реальные внедрения · Казахстан</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              6 AI уже тестируется и работает на реальных бизнесах в Казахстане.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Вы можете прямо сейчас написать на рабочие WhatsApp-номера наших клиентов и лично протестировать, как AI-помощник отвечает, предлагает услуги и ведёт запись:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Case 1: Shakira Massage Studio */}
            <div className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-emerald-200 shadow-md space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                  <div>
                    <span className="font-extrabold text-lg text-neutral-900 block">
                      Массажная студия «Shakira»
                    </span>
                    <span className="text-xs font-mono text-neutral-500 font-semibold">
                      Тел: +7 (702) 971-16-86
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-300">
                    ● В работе 24/7
                  </span>
                </div>

                <div className="p-3.5 bg-emerald-50/60 rounded-2xl border border-emerald-100 space-y-2 text-xs text-neutral-800">
                  <div className="font-bold text-emerald-950 text-xs sm:text-sm">
                    Результаты связки 6 AI + Таргет-реклама:
                  </div>
                  <ul className="space-y-1.5 leading-relaxed">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                      <span><strong>50–100 обращений в день:</strong> бот обрабатывает поток без задержек</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                      <span><strong>5–10 подтверждённых записей в день</strong> сразу во время переписки</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                      <span><strong>10–20 горячих лидов:</strong> клиенты, которые приходят и бронируют позже</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                      <span><strong>2–3 новые оценки и постоянные клиенты</strong> через модуль обратной связи</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Button to test Shakira directly */}
              <div className="pt-2">
                <a
                  href="https://wa.me/77029711686?text=%D0%A1%D3%99%D0%BB%D0%B5%D0%BC%D0%B5%D1%82%D1%81%D1%96%D0%B7%D0%B1%D0%B5!%20%D2%9A%D0%B0%D0%BD%D0%B4%D0%B0%D0%B9%20%D0%BC%D0%B0%D1%81%D1%81%D0%B0%D0%B6%20%D2%9B%D1%8B%D0%B7%D0%BC%D0%B5%D1%82%D1%82%D0%B5%D1%80%D1%96%D2%A3%D1%96%D0%B7%20%D0%B1%D0%B0%D1%80?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Написать и протестировать в студии «Shakira»</span>
                </a>
              </div>
            </div>

            {/* Case 2: Triumph Restaurant */}
            <div className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-emerald-200 shadow-md space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                  <div>
                    <span className="font-extrabold text-lg text-neutral-900 block">
                      Ресторан «Триумф»
                    </span>
                    <span className="text-xs font-mono text-neutral-500 font-semibold">
                      Тел: +7 (775) 530-95-05
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-300">
                    ● В работе 24/7
                  </span>
                </div>

                <div className="p-3.5 bg-emerald-50/60 rounded-2xl border border-emerald-100 space-y-2 text-xs text-neutral-800">
                  <div className="font-bold text-emerald-950 text-xs sm:text-sm">
                    Задачи автоматизации в ресторане:
                  </div>
                  <ul className="space-y-1.5 leading-relaxed">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                      <span><strong>Консультация по меню и ценам:</strong> ответы на вопросы гостей 24/7</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                      <span><strong>Бронь столов:</strong> быстрый подбор даты и времени без ожидания хостес</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                      <span><strong>Приём заявок на банкеты:</strong> сбор деталей (дата, число гостей, формат)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                      <span><strong>Сбор отзывов:</strong> контроль впечатлений гостей после визита</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Button to test Triumph directly */}
              <div className="pt-2">
                <a
                  href="https://wa.me/77755309505?text=%D0%A1%D3%99%D0%BB%D0%B5%D0%BC%D0%B5%D1%82%D1%81%D1%96%D0%B7%D0%B1%D0%B5!%20%D2%AE%D1%81%D1%82%D0%B5%D0%BB%20%D0%B1%D1%80%D0%BE%D0%BD%D0%B4%D0%B0%D1%83%D2%93%D0%B0%20%D0%B1%D0%BE%D0%BB%D0%B0%20%D0%BC%D0%B0?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Написать и протестировать в ресторане «Триумф»</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
