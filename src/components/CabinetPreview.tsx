import React, { useState } from 'react';
import { 
  Home, MessageSquare, Users, Calendar, Scissors, ShoppingBag, 
  Smartphone, Flame, MessageSquareHeart, BarChart3, Settings, ShieldCheck, Check
} from 'lucide-react';

export const CabinetPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dialogs');

  const menuItems = [
    { id: 'home', label: 'Главная', icon: Home },
    { id: 'dialogs', label: 'Диалоги', icon: MessageSquare, badge: '12' },
    { id: 'clients', label: 'Клиенты', icon: Users },
    { id: 'bookings', label: 'Записи', icon: Calendar, badge: '5' },
    { id: 'services', label: 'Услуги', icon: Scissors },
    { id: 'products', label: 'Товары', icon: ShoppingBag },
    { id: 'storefront', label: 'Витрина', icon: Smartphone },
    { id: 'hot', label: 'Горячие', icon: Flame, badge: '3', badgeColor: 'bg-amber-500 text-white' },
    { id: 'feedback', label: 'Обратная связь', icon: MessageSquareHeart },
    { id: 'analytics', label: 'Аналитика', icon: BarChart3 },
    { id: 'settings', label: 'Настройки', icon: Settings },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
            <span>Простота управления</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-neutral-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Всё управление — в одном кабинете.
          </h2>

          <p className="text-lg text-neutral-600">
            Интуитивный интерфейс на русском языке. Управляйте расписанием, ценами, витриной и клиентами так же легко, как обычным приложением в телефоне или на компьютере.
          </p>
        </div>

        {/* Desktop Browser Mockup */}
        <div className="bg-neutral-950 rounded-3xl p-3 sm:p-4 shadow-2xl border border-neutral-800 max-w-5xl mx-auto">
          {/* Browser Window Chrome */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-3 font-mono text-[11px] text-neutral-400">app.6ai.kz/dashboard</span>
            </div>
            <span className="text-[11px] text-neutral-500 font-mono">Личный кабинет владельца</span>
          </div>

          {/* Cabinet Application Canvas */}
          <div className="bg-[#F7F8FA] rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[500px] border border-neutral-800/20 text-neutral-900">
            
            {/* Sidebar (Columns 1-3) */}
            <div className="md:col-span-3 bg-neutral-900 text-neutral-300 p-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 px-2 py-1">
                  <span className="w-6 h-6 rounded-md bg-emerald-600 text-white flex items-center justify-center font-extrabold text-xs">
                    6
                  </span>
                  <span className="font-bold text-white text-sm">6 AI Dashboard</span>
                </div>

                {/* Navigation items */}
                <div className="space-y-0.5 text-xs">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg font-medium transition-colors ${
                          isActive
                            ? 'bg-neutral-800 text-white font-bold'
                            : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-neutral-400'}`} />
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${item.badgeColor || 'bg-neutral-700 text-neutral-300'}`}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Business profile badge */}
              <div className="pt-4 border-t border-neutral-800 px-2 text-xs flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                  S
                </div>
                <div className="truncate">
                  <div className="font-bold text-white text-xs truncate">Shakira Studio</div>
                  <div className="text-[10px] text-emerald-400">Тариф: BUSINESS</div>
                </div>
              </div>
            </div>

            {/* Main Content Area (Columns 4-12) */}
            <div className="md:col-span-9 p-5 sm:p-6 bg-white space-y-6 overflow-y-auto max-h-[560px]">
              
              {/* Dynamic content depending on activeTab or default showcase */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                <div>
                  <h4 className="text-lg font-extrabold text-neutral-900">
                    {menuItems.find(m => m.id === activeTab)?.label || 'Диалоги клиентов'}
                  </h4>
                  <p className="text-xs text-neutral-500">
                    Активные сессии в WhatsApp, синхронизированные в реальном времени
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md font-semibold border border-emerald-200">
                    AI активен · 24/7
                  </span>
                </div>
              </div>

              {/* Sample Dialogs List */}
              <div className="space-y-3">
                <div className="p-3.5 bg-emerald-50/40 rounded-xl border border-emerald-200 flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-neutral-900 text-xs">+7 (701) 459-••-12 (Айгуль)</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded">
                        Записана на 19:30
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 truncate max-w-md">
                      «Спасибо, буду вовремя. Скажите, у вас есть парковка?» — <em>AI ответил: «Да, бесплатная парковка во дворе.»</em>
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">3 мин назад</span>
                </div>

                <div className="p-3.5 bg-amber-50/40 rounded-xl border border-amber-200 flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-neutral-900 text-xs">+7 (705) 811-••-90 (Марат)</span>
                      <span className="text-[10px] bg-amber-100 text-amber-900 font-semibold px-2 py-0.5 rounded">
                        Горячий лид · Не завершил
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 truncate max-w-md">
                      «Сколько стоит абонемент на 5 сеансов?» — <em>Остановился на выборе времени</em>
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">18 мин назад</span>
                </div>

                <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-neutral-900 text-xs">+7 (777) 120-••-45 (Алишер)</span>
                      <span className="text-[10px] bg-neutral-200 text-neutral-700 font-semibold px-2 py-0.5 rounded">
                        Новый заказ витрины
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 truncate max-w-md">
                      Подарочный набор «Relax & Balance» (28 000 ₸) — <em>Сформирована накладная #KZ-4819</em>
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">45 мин назад</span>
                </div>
              </div>

              {/* Cabinet quick controls snippet */}
              <div className="pt-4 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-center">
                  <span className="font-bold text-neutral-900 block">Каталог услуг</span>
                  <span className="text-[11px] text-neutral-500">14 активных позиций</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-center">
                  <span className="font-bold text-neutral-900 block">Мастера</span>
                  <span className="text-[11px] text-neutral-500">Айгерим, Асель, Данияр</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-center">
                  <span className="font-bold text-neutral-900 block">Расписание</span>
                  <span className="text-[11px] text-neutral-500">Пн-Вс: 09:00 — 22:00</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Footnote reassurance */}
        <div className="text-center">
          <p className="text-base font-bold text-neutral-800">
            «Не нужно быть программистом или нанимать IT-специалиста.»
          </p>
          <p className="text-xs text-neutral-500 mt-1">
            Мы берем первичную настройку на себя, а управлять повседневными задачами сможет любой ваш администратор.
          </p>
        </div>

      </div>
    </section>
  );
};
