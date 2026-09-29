import React from 'react';
import { Check, Sparkles, MessageSquare, ArrowRight, Play, ShieldAlert, Zap, Clock } from 'lucide-react';
import { PRICING_TIERS, getWhatsAppLink } from '../data/landingData.ts';

interface PricingSectionProps {
  onOpenDemo: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDemo }) => {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
            <span>Прозрачная стоимость</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-neutral-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Тарифы на ежемесячное обслуживание
          </h2>

          <p className="text-lg text-neutral-600">
            Фиксированная абонентская плата в тенге. Без скрытых платежей за каждое входящее сообщение.
          </p>
        </div>

        {/* 4 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-6 flex flex-col justify-between transition-all relative ${
                tier.highlighted
                  ? 'bg-neutral-900 text-white shadow-xl ring-2 ring-emerald-500 scale-[1.02]'
                  : 'bg-[#F7F8FA] text-neutral-900 border border-neutral-200 hover:border-neutral-300'
              }`}
            >
              {/* Badge for popular tier */}
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className={`text-xl font-extrabold tracking-tight ${tier.highlighted ? 'text-white' : 'text-neutral-900'}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-xs mt-1 leading-snug min-h-[32px] ${tier.highlighted ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    {tier.subtitle}
                  </p>
                </div>

                {/* Price tag */}
                <div className="pt-2 border-t border-neutral-200/50">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold font-mono tabular-nums">
                      {tier.priceMonth.toLocaleString('ru-RU')}
                    </span>
                    <span className={`text-sm font-semibold ${tier.highlighted ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      ₸ / месяц
                    </span>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-2.5 pt-3 text-xs">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${tier.highlighted ? 'text-emerald-400' : 'text-emerald-600'}`} />
                      <span className={tier.highlighted ? 'text-neutral-200' : 'text-neutral-700'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {tier.paymentNote && (
                  <p className="text-[11px] text-neutral-500 pt-1 border-t border-neutral-200/40">
                    * {tier.paymentNote}
                  </p>
                )}
              </div>

              {/* Bottom Target & Button */}
              <div className="pt-6 mt-6 border-t border-neutral-200/30 space-y-3">
                <div className={`text-[11px] font-medium leading-relaxed ${tier.highlighted ? 'text-neutral-300' : 'text-neutral-500'}`}>
                  {tier.forWhom}
                </div>

                <a
                  href={getWhatsAppLink(tier.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    tier.highlighted
                      ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-md'
                      : 'bg-white text-neutral-900 border border-neutral-300 hover:bg-neutral-100 shadow-xs'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{tier.ctaText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================
            SECTION 27: СКИДКА НА СТАРТ (PROMO DUAL OFFER)
        ======================================================== */}
        <div className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Специальные условия запуска</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Первый месяц тарифа PRO: всего 50 000 ₸ вместо 90 000 ₸
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed max-w-2xl">
                Для быстрорастущих компаний: протестируйте максимальную конфигурацию 6 AI (до 10 мастеров, до 3 WhatsApp-номеров, расширенная витрина и персональные сценарии) с выгодой 40 000 ₸ в первый месяц.
              </p>

              <p className="text-[11px] text-neutral-400 font-mono">
                * Условия действуют на период запуска продукта и могут быть изменены. Без автоматических скрытых списаний.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href={getWhatsAppLink('Здравствуйте! Хочу подключить тариф PRO по спеццене первого месяца за 50 000 ₸ (до 10 мастеров, до 3 номеров).')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-500 text-center transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Получить спецусловия PRO</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

        {/* ========================================================
            SECTION 28: ПЕРВИЧНАЯ НАСТРОЙКА (ONBOARDING ПОД КЛЮЧ)
        ======================================================== */}
        <div className="bg-[#F7F8FA] rounded-3xl border border-neutral-200 p-8 sm:p-12 space-y-8">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Разовый платеж за внедрение
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Первичная настройка — это не просто создание аккаунта.
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Мы не бросаем вас с пустой админкой. Наша команда полностью оцифровывает и настраивает ваш бизнес «под ключ», чтобы в день запуска всё работало безупречно.
            </p>
          </div>

          {/* 10 Onboarding Steps Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
            {[
              '1. Разбираемся в бизнесе',
              '2. Добавляем услуги',
              '3. Добавляем товары',
              '4. Настраиваем график',
              '5. Заносим правила',
              '6. Обучаем логику AI',
              '7. Подключаем WhatsApp',
              '8. Создаём витрину',
              '9. Тестируем диалоги',
              '10. Финальный запуск',
            ].map((step, idx) => (
              <div key={idx} className="p-3 bg-white rounded-xl border border-neutral-200 text-neutral-800 font-semibold flex items-center gap-2 shadow-2xs">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="leading-tight">{step}</span>
              </div>
            ))}
          </div>

          <div className="p-5 bg-white rounded-2xl border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-neutral-400 line-through font-mono">50 000 ₸</span>
                <span className="text-2xl font-extrabold text-neutral-900 font-mono">25 000 ₸</span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Спеццена для первых клиентов
                </span>
              </div>
              <p className="text-xs text-neutral-500 mt-1">
                Единоразовый onboarding fee: включает полную подготовку, загрузку каталога и проверку сценариев.
              </p>
            </div>

            <a
              href={getWhatsAppLink('Здравствуйте! Хочу заказать первичную настройку 6 AI «под ключ» по спеццене 25 000 ₸ (полная оцифровка услуг, каталога, графика и правил бизнеса).')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-neutral-950 text-white rounded-xl text-xs font-bold hover:bg-neutral-800 transition-all shrink-0"
            >
              Заказать настройку под ключ
            </a>
          </div>

        </div>

        {/* ========================================================
            SECTION 29 & 30: ТЕСТ 7 ДНЕЙ & БЕСПЛАТНОЕ ДЕМО
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* 7 Days Test */}
          <div className="p-8 bg-emerald-50/70 border border-emerald-200 rounded-3xl space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100 px-2.5 py-1 rounded-md">
                <Clock className="w-3.5 h-3.5 text-emerald-700" />
                <span>Проверка на вашем бизнесе</span>
              </div>

              <h4 className="text-2xl font-extrabold text-neutral-900">
                7 дней теста за 5 000 ₸
              </h4>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                Хотите сначала проверить систему в реальном бою на своих клиентах? Запустим тест на 1 неделю с базовой настройкой и сценариями под вашу нишу.
              </p>

              <ul className="space-y-2 text-xs text-neutral-700 pt-1">
                <li className="flex items-center gap-2">✓ Индивидуальная базовая настройка</li>
                <li className="flex items-center gap-2">✓ Тестовый AI и сценарий в WhatsApp</li>
                <li className="flex items-center gap-2">✓ Персональная консультация по результатам</li>
              </ul>
            </div>

            <a
              href={getWhatsAppLink('Здравствуйте! Хочу подключить тест 6 AI на своём бизнесе на 7 дней за 5 000 ₸ (тестовый бот, сценарий в WhatsApp и консультация).')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 transition-all text-center flex items-center justify-center gap-2 shadow-xs"
            >
              <Zap className="w-4 h-4" />
              <span>Запустить тест на 7 дней</span>
            </a>
          </div>

          {/* Free Instant Demo */}
          <div className="p-8 bg-neutral-900 text-white rounded-3xl space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-300 bg-neutral-800 px-2.5 py-1 rounded-md border border-neutral-700">
                <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                <span>Без регистрации и смс</span>
              </div>

              <h4 className="text-2xl font-extrabold text-white">
                Бесплатный демо-кабинет
              </h4>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Не готовы подключать свой бизнес прямо сейчас? Посмотрите готовый тестовый салон красоты: пообщайтесь в AI-чате, откройте витрину, соберите корзину и посмотрите дашборд.
              </p>

              <ul className="space-y-2 text-xs text-neutral-300 pt-1">
                <li className="flex items-center gap-2">✓ Реальный интерфейс SPA-салона</li>
                <li className="flex items-center gap-2">✓ Интерактивный симулятор диалога</li>
                <li className="flex items-center gap-2">✓ Мгновенный доступ в браузере</li>
              </ul>
            </div>

            <button
              onClick={onOpenDemo}
              className="w-full py-3.5 px-4 bg-white text-neutral-950 rounded-xl text-xs font-bold hover:bg-neutral-100 transition-all text-center flex items-center justify-center gap-2 shadow-xs"
            >
              <Play className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span>Открыть интерактивное демо</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
