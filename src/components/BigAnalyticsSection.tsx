import React, { useState } from 'react';
import { 
  BarChart3, TrendingUp, AlertTriangle, Filter, HelpCircle, 
  Calendar, CheckCircle, ArrowDown, Users, DollarSign, Clock, ShieldAlert
} from 'lucide-react';

export const BigAnalyticsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'7' | '30' | '90'>('7');

  // Daily numbers for the bar chart (Demo-data)
  const chartData = {
    '7': [
      { day: 'Пн', count: 24, bookings: 9 },
      { day: 'Вт', count: 31, bookings: 12 },
      { day: 'Ср', count: 27, bookings: 10 },
      { day: 'Чт', count: 42, bookings: 16 },
      { day: 'Пт', count: 38, bookings: 15 },
      { day: 'Сб', count: 51, bookings: 21 },
      { day: 'Вс', count: 34, bookings: 13 },
    ],
    '30': [
      { day: 'Нед 1', count: 180, bookings: 72 },
      { day: 'Нед 2', count: 210, bookings: 88 },
      { day: 'Нед 3', count: 245, bookings: 98 },
      { day: 'Нед 4', count: 290, bookings: 114 },
    ],
    '90': [
      { day: 'Мес 1', count: 820, bookings: 320 },
      { day: 'Мес 2', count: 960, bookings: 395 },
      { day: 'Мес 3', count: 1140, bookings: 470 },
    ]
  };

  const currentDataset = chartData[activeFilter];
  const maxVal = Math.max(...currentDataset.map(d => d.count));

  return (
    <section id="analytics" className="py-20 sm:py-28 bg-[#F7F8FA] border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-white px-3 py-1 rounded-md border border-neutral-200">
            <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Инструмент 06 · Аналитический центр</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-neutral-900 tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
            Владелец видит, что происходит с бизнесом.
          </h2>

          <p className="text-lg text-neutral-600">
            Не просто абстрактное число сообщений. <strong>6 AI</strong> помогает увидеть весь путь клиента от первого обращения до подтвержденной записи, заявки или повторной покупки.
          </p>
        </div>

        {/* ========================================================
            DASHBOARD OVERVIEW MOCKUP
        ======================================================== */}
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-xl overflow-hidden p-6 sm:p-8 space-y-8">
          
          {/* Dashboard Top bar & Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-extrabold text-neutral-900">
                  Сквозная аналитика обращений
                </h3>
                <span className="text-[11px] font-mono text-neutral-600 bg-neutral-100 font-semibold px-2 py-0.5 rounded">
                  Demo-data
                </span>
              </div>
              <p className="text-xs text-neutral-500 mt-0.5">
                Показатели динамики потока клиентов и конверсии в результат
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-xl self-start sm:self-auto">
              {(['7', '30', '90'] as const).map((period) => (
                <button
                  key={period}
                  onClick={() => setActiveFilter(period)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    activeFilter === period
                      ? 'bg-white text-neutral-900 shadow-xs'
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  {period === '7' ? '7 дней' : period === '30' ? '30 дней' : '90 дней'}
                </button>
              ))}
            </div>
          </div>

          {/* Key Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-[#F7F8FA] rounded-2xl border border-neutral-200/80">
              <span className="text-xs font-semibold text-neutral-700 block">Всего обращений</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-mono tabular-nums mt-1">
                {activeFilter === '7' ? '247' : activeFilter === '30' ? '925' : '2 920'}
              </div>
              <span className="text-[10px] text-emerald-800 font-semibold mt-1 block">WhatsApp + Витрина</span>
            </div>

            <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200">
              <span className="text-xs font-semibold text-emerald-800 block">Завершённые записи</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-800 font-mono tabular-nums mt-1">
                {activeFilter === '7' ? '96' : activeFilter === '30' ? '372' : '1 185'}
              </div>
              <span className="text-[10px] text-emerald-700 font-semibold mt-1 block">Подтверждено слотов</span>
            </div>

            <div className="p-4 bg-[#F7F8FA] rounded-2xl border border-neutral-200/80">
              <span className="text-xs font-semibold text-neutral-700 block">Оформленные заказы</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-mono tabular-nums mt-1">
                {activeFilter === '7' ? '41' : activeFilter === '30' ? '158' : '490'}
              </div>
              <span className="text-[10px] text-neutral-700 font-semibold mt-1 block">Через витрину / чат</span>
            </div>

            <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-200">
              <span className="text-xs font-semibold text-amber-800 block">Горячие клиенты</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-800 font-mono tabular-nums mt-1">
                {activeFilter === '7' ? '18' : activeFilter === '30' ? '64' : '195'}
              </div>
              <span className="text-[10px] text-amber-800 font-semibold mt-1 block">Прервали диалог</span>
            </div>
          </div>

          {/* Dynamic Bar Chart Visualization */}
          <div className="p-6 bg-[#F7F8FA] rounded-2xl border border-neutral-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-sm font-bold text-neutral-900 block">
                  Количество обращений и записей по дням
                </span>
                <span className="text-xs text-neutral-500">
                  Сравнение входящего потока (тёмный) и дошедших до записи (зелёный)
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs font-medium text-neutral-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-neutral-900" />
                  Обращения
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-emerald-600" />
                  Записи
                </span>
              </div>
            </div>

            {/* Chart Bars */}
            <div className="grid grid-flow-col auto-cols-fr gap-3 items-end h-56 pt-8 pb-2 border-b border-neutral-200">
              {currentDataset.map((item, idx) => {
                const heightPercent = Math.round((item.count / maxVal) * 100);
                const bookingPercent = Math.round((item.bookings / maxVal) * 100);
                return (
                  <div key={idx} className="flex flex-col items-center gap-2 h-full justify-end group">
                    <div className="text-[11px] font-mono text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.count}
                    </div>
                    <div className="w-full max-w-[42px] flex items-end justify-center gap-1 h-full">
                      {/* Inbound bar */}
                      <div
                        style={{ height: `${heightPercent}%` }}
                        className="w-1/2 bg-neutral-900 rounded-t-md transition-all duration-300 group-hover:bg-neutral-800"
                      />
                      {/* Booking bar */}
                      <div
                        style={{ height: `${bookingPercent}%` }}
                        className="w-1/2 bg-emerald-600 rounded-t-md transition-all duration-300 group-hover:bg-emerald-500"
                      />
                    </div>
                    <span className="text-xs font-semibold text-neutral-700 mt-1">
                      {item.day}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-3 text-right">
              <span className="text-[11px] text-neutral-600 font-mono">
                * Демонстрационный набор данных аналитического модуля
              </span>
            </div>
          </div>

          {/* Popular Items breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Top services */}
            <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-3">
              <h4 className="text-sm font-bold text-neutral-900 flex items-center justify-between">
                <span>Что спрашивают и записывают чаще?</span>
                <span className="text-xs text-neutral-400 font-normal">Топ услуг</span>
              </h4>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex justify-between font-medium text-neutral-800 mb-1">
                    <span>Релакс-массаж (60 мин)</span>
                    <span className="font-mono font-bold text-neutral-900">42% обращений</span>
                  </div>
                  <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full rounded-full" style={{ width: '42%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-medium text-neutral-800 mb-1">
                    <span>Спортивный массаж</span>
                    <span className="font-mono font-bold text-neutral-900">28% обращений</span>
                  </div>
                  <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full rounded-full" style={{ width: '28%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-medium text-neutral-800 mb-1">
                    <span>Подарочные сертификаты</span>
                    <span className="font-mono font-bold text-neutral-900">18% обращений</span>
                  </div>
                  <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full rounded-full" style={{ width: '18%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Popular products & view metrics */}
            <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-3">
              <h4 className="text-sm font-bold text-neutral-900 flex items-center justify-between">
                <span>Что смотрят в витрине?</span>
                <span className="text-xs text-neutral-400 font-normal">Интерес к товарам</span>
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-neutral-200">
                  <span className="font-medium text-neutral-800">Подарочный набор «Relax & Balance»</span>
                  <span className="font-mono font-bold text-neutral-900">134 просмотра</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-neutral-200">
                  <span className="font-medium text-neutral-800">Сертификат на 20 000 ₸</span>
                  <span className="font-mono font-bold text-neutral-900">98 просмотров</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-neutral-200">
                  <span className="font-medium text-neutral-800">Аромадиффузор сандал & кедр</span>
                  <span className="font-mono font-bold text-neutral-900">62 просмотра</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================
            SECTION 17: САМОЕ ВАЖНОЕ — УВИДЕТЬ, ГДЕ БИЗНЕС ТЕРЯЕТ ДЕНЬГИ
        ======================================================== */}
        <div className="bg-white rounded-3xl border border-neutral-200 p-6 sm:p-10 space-y-8">
          
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Главная ценность аналитики</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Самое важное — увидеть, где бизнес теряет деньги.
            </h3>

            <p className="text-sm sm:text-base text-neutral-600">
              Наглядный сценарий воронки: вы точно видите, на каком шаге клиент остановился, и можете вовремя исправить слабые места в предложении или графике.
            </p>
          </div>

          {/* Funnel Visualizer */}
          <div className="space-y-3 max-w-4xl mx-auto pt-2">
            
            {/* Step 1 */}
            <div className="p-4 bg-neutral-900 text-white rounded-2xl flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center font-mono font-bold text-xs">1</span>
                <div>
                  <div className="text-sm font-bold">100 клиентов написали в WhatsApp</div>
                  <div className="text-[11px] text-neutral-400">Первичное обращение, вопрос про услугу или цену</div>
                </div>
              </div>
              <span className="font-mono font-extrabold text-lg text-neutral-200">100%</span>
            </div>

            <div className="flex justify-center -my-1 text-neutral-400">
              <ArrowDown className="w-4 h-4" />
            </div>

            {/* Step 2 */}
            <div className="p-4 bg-neutral-800 text-white rounded-2xl flex items-center justify-between shadow-xs ml-4 mr-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-neutral-700 flex items-center justify-center font-mono font-bold text-xs">2</span>
                <div>
                  <div className="text-sm font-bold">60 проявили живой интерес</div>
                  <div className="text-[11px] text-neutral-400">Спросили расписание, адрес или каталог</div>
                </div>
              </div>
              <span className="font-mono font-extrabold text-lg text-neutral-300">60%</span>
            </div>

            <div className="flex justify-center -my-1 text-neutral-400">
              <ArrowDown className="w-4 h-4" />
            </div>

            {/* Step 3 */}
            <div className="p-4 bg-neutral-700 text-white rounded-2xl flex items-center justify-between shadow-xs ml-8 mr-8">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-neutral-600 flex items-center justify-center font-mono font-bold text-xs">3</span>
                <div>
                  <div className="text-sm font-bold">30 дошли до выбора конкретного времени</div>
                  <div className="text-[11px] text-neutral-400">AI предложил свободные окна мастеров</div>
                </div>
              </div>
              <span className="font-mono font-extrabold text-lg text-emerald-400">30%</span>
            </div>

            <div className="flex justify-center -my-1 text-neutral-400">
              <ArrowDown className="w-4 h-4" />
            </div>

            {/* Step 4 Split: Confirmed vs Lost */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-8 mr-8">
              
              {/* Confirmed */}
              <div className="p-4 bg-emerald-600 text-white rounded-2xl flex items-center justify-between shadow-xs">
                <div>
                  <div className="text-xs uppercase font-semibold text-emerald-100">Результат</div>
                  <div className="text-base font-extrabold">20 успешно записались</div>
                  <div className="text-[11px] text-emerald-100">Бронь в календаре мастера</div>
                </div>
                <span className="font-mono font-extrabold text-xl text-white">20</span>
              </div>

              {/* Incomplete */}
              <div className="p-4 bg-amber-50 border border-amber-300 text-amber-950 rounded-2xl flex items-center justify-between shadow-xs">
                <div>
                  <div className="text-xs uppercase font-semibold text-amber-700">Точка роста</div>
                  <div className="text-base font-extrabold">10 не завершили выбор</div>
                  <div className="text-[11px] text-amber-800">Из них 6 — горячие клиенты на возврат!</div>
                </div>
                <span className="font-mono font-extrabold text-xl text-amber-800">10</span>
              </div>

            </div>

          </div>

          <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-xs sm:text-sm text-neutral-700 max-w-3xl mx-auto text-center leading-relaxed">
            «Если люди часто спрашивают об услуге, но не записываются — это повод проверить цену, предложение, расписание или качество обработки обращений.»
            <span className="block text-[11px] text-neutral-400 mt-1">
              * Пример аналитического сценария на базе 100 обращений. Помогает принимать решения на основе фактов, а не догадок.
            </span>
          </div>

        </div>

        {/* ========================================================
            SECTION 18: ПОЧЕМУ КЛИЕНТЫ НЕ ПОКУПАЮТ
        ======================================================== */}
        <div className="bg-white rounded-3xl border border-neutral-200 p-6 sm:p-10 space-y-6">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              AI помогает задавать правильные вопросы.
            </h3>
            <p className="text-sm text-neutral-600">
              Вместо неясного «клиенты почему-то перестали писать», владелец видит структуру основных барьеров:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 pt-2">
            {[
              { reason: 'Цена не подошла', detail: 'Клиент искал дешевле' },
              { reason: 'Нет нужного времени', detail: 'Вечерние слоты заняты' },
              { reason: 'Нет нужной услуги', detail: 'Запрос на специфический уход' },
              { reason: 'Перестал отвечать', detail: 'Отвлёкся на личные дела' },
              { reason: 'Не хватило информации', detail: 'Хотел уточнить детали состава' },
              { reason: 'Не завершил заказ', detail: 'Бросил корзину в витрине' },
              { reason: 'Запросил человека', detail: 'Сложный индивидуальный кейс' },
              { reason: 'Долгая пауза', detail: 'Вернулся через несколько дней' },
            ].map((item, idx) => (
              <div key={idx} className="p-3.5 bg-[#F7F8FA] rounded-xl border border-neutral-200">
                <div className="w-2 h-2 rounded-full bg-amber-500 mb-2" />
                <div className="font-bold text-xs text-neutral-900 leading-snug">{item.reason}</div>
                <div className="text-[11px] text-neutral-500 mt-0.5">{item.detail}</div>
              </div>
            ))}
          </div>

          <div className="p-3.5 bg-neutral-100 rounded-xl text-xs text-neutral-600">
            <strong>Главный вывод:</strong> Владелец получает не просто сырые числа, а конкретные точки для улучшения бизнеса, маркетинга и сервиса.
          </div>
        </div>

      </div>
    </section>
  );
};
