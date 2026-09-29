import React, { useState } from 'react';
import { 
  UserCheck, ShoppingBag, Smartphone, Flame, MessageSquareHeart, 
  CheckCircle2, Clock, ArrowRight, FileText, Send, Eye, Plus, ShoppingCart, Star
} from 'lucide-react';
import { HOT_LEADS_SAMPLE, REVIEWS_SAMPLE, getWhatsAppLink } from '../data/landingData.ts';
import massageImg from '../assets/images/massage_spa_studio_1790687061075.jpg';
import retailGiftImg from '../assets/images/retail_boutique_gift_1790687111565.jpg';

interface DeepFeaturesProps {
  onOpenDemo: () => void;
}

export const DeepFeatures: React.FC<DeepFeaturesProps> = ({ onOpenDemo }) => {
  // AI-Seller interactive preview state
  const [cartItems, setCartItems] = useState<string[]>(['Подарочный набор «Relax & Balance»']);
  const [selectedGiftOption, setSelectedGiftOption] = useState<number>(2);

  const toggleCart = (item: string) => {
    if (cartItems.includes(item)) {
      setCartItems(cartItems.filter(i => i !== item));
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  return (
    <div className="space-y-24 py-16 bg-white">
      
      {/* ========================================================
          01. AI-АДМИНИСТРАТОР
      ======================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Инструмент 01 · AI-Администратор</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
              Администратор, который не заканчивает смену в 18:00.
            </h3>

            <p className="text-base text-neutral-600 leading-relaxed">
              Клиент может написать утром перед работой, в обеденный перерыв, поздним вечером или в воскресенье. <strong>6 AI</strong> продолжает первую линию общения: расскажет про прайс, покажет свободные окна и оформит запись.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Мгновенный ответ без ожидания</h4>
                  <p className="text-xs text-neutral-500">Клиент не уйдёт к конкурентам, пока живой администратор занят другим гостем.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Точные ответы по вашим регламентам</h4>
                  <p className="text-xs text-neutral-500">Знает точный адрес с ориентирами, правила бронирования и длительность сеансов.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#F7F8FA] border border-neutral-200 rounded-xl text-xs text-neutral-700 font-medium">
              «Владелец или менеджер подключается тогда, когда действительно нужен человек — для нестандартных или VIP-задач.»
            </div>
          </div>

          {/* Right: WhatsApp Admin Flow Mockup */}
          <div className="lg:col-span-6">
            <div className="bg-[#EFEAE2] rounded-2xl border border-neutral-300 shadow-md p-4 sm:p-5 relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-300/80 mb-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                    6
                  </div>
                  <div>
                    <span className="font-bold text-neutral-900 block">Массажная студия «Shakira»</span>
                    <span className="text-[10px] text-emerald-700 font-medium">AI-администратор · онлайн</span>
                  </div>
                </div>
                <span className="text-[10px] bg-white/70 px-2 py-0.5 rounded border border-neutral-300 font-mono text-neutral-600">
                  Сценарий: Запись
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-end">
                  <div className="bg-[#E7FFDB] text-neutral-900 rounded-xl rounded-tr-none px-3.5 py-2 max-w-[85%] shadow-xs">
                    <p>Здравствуйте! Сколько стоит массаж?</p>
                    <span className="text-[9px] text-neutral-400 block text-right mt-0.5">21:40 ✓✓</span>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-white text-neutral-900 rounded-xl rounded-tl-none px-3.5 py-2.5 max-w-[90%] shadow-xs space-y-2">
                    <p className="font-semibold text-emerald-900">
                      Здравствуйте! У нас есть несколько популярных направлений:
                    </p>
                    <div className="space-y-1.5 text-[11px] text-neutral-700 border-l-2 border-emerald-500 pl-2">
                      <p>• <strong>Релакс-массаж</strong> (60 мин) — 12 000 ₸</p>
                      <p>• <strong>Спортивный массаж</strong> (60 мин) — 15 000 ₸</p>
                      <p>• <strong>Массаж спины и ШВЗ</strong> (40 мин) — 9 000 ₸</p>
                    </div>
                    <p className="text-[11px] text-neutral-600">Какое направление вас интересует?</p>
                    <span className="text-[9px] text-neutral-400 block text-right">21:40</span>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#E7FFDB] text-neutral-900 rounded-xl rounded-tr-none px-3.5 py-2 max-w-[85%] shadow-xs">
                    <p>Релакс. Хочу завтра вечером.</p>
                    <span className="text-[9px] text-neutral-400 block text-right mt-0.5">21:41 ✓✓</span>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-white text-neutral-900 rounded-xl rounded-tl-none px-3.5 py-2.5 max-w-[90%] shadow-xs space-y-1.5">
                    <p className="text-neutral-800">
                      Отлично! Завтра на <strong>Релакс-массаж</strong> свободно:
                    </p>
                    {/* Time slots with enter / line breaks, NO BUTTONS */}
                    <div className="font-mono font-bold text-emerald-800 text-xs pl-2 border-l-2 border-emerald-500 leading-relaxed space-y-0.5 my-1">
                      <div>18:00</div>
                      <div>19:30</div>
                      <div>21:00</div>
                    </div>
                    <p className="text-[11px] text-neutral-600">Какое время вам удобно?</p>
                    <span className="text-[9px] text-neutral-400 block text-right">21:41</span>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#E7FFDB] text-neutral-900 rounded-xl rounded-tr-none px-3.5 py-1.5 max-w-[85%] shadow-xs">
                    <p>19:30 подходит.</p>
                    <span className="text-[9px] text-neutral-400 block text-right mt-0.5">21:42 ✓✓</span>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-white text-neutral-900 rounded-xl rounded-tl-none px-3.5 py-2 max-w-[90%] shadow-xs space-y-1 border-l-2 border-emerald-600">
                    <p className="font-bold text-emerald-800 text-xs">✓ Хорошо, оформим запись!</p>
                    <p className="text-[11px] text-neutral-600">
                      Мастер: Асель · Время: завтра в 19:30 · Сумма: 12 000 ₸. Отправили подтверждение и геолокацию салона.
                    </p>
                    <span className="text-[9px] text-neutral-400 block text-right">21:42</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          02. AI-ПРОДАВЕЦ & НАКЛАДНАЯ / ЗАКАЗ
      ======================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 border-t border-neutral-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Chat & Order Invoice Visual */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-md p-5 space-y-4">
              
              {/* Dialogue snippet */}
              <div className="bg-[#EFEAE2] p-3.5 rounded-xl border border-neutral-300 space-y-2.5 text-xs">
                <div className="flex justify-end">
                  <div className="bg-[#E7FFDB] text-neutral-900 rounded-lg px-3 py-1.5 max-w-[85%] shadow-xs">
                    <p>Мне нужен подарок до 30 000 ₸ для подруги.</p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-white text-neutral-900 rounded-lg px-3 py-2 max-w-[95%] shadow-xs space-y-2">
                    <p className="font-semibold text-emerald-900">
                      Вот отличные варианты под ваш бюджет:
                    </p>

                    {/* Product preview cards inside WhatsApp */}
                    <div className="space-y-2">
                      <div className="p-2.5 bg-neutral-50 rounded-lg border border-neutral-200 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-neutral-900 text-xs">1. SPA-сертификат «Гармония»</div>
                          <div className="text-[11px] text-neutral-500">Массаж + уход за лицом</div>
                          <div className="text-xs font-bold text-emerald-700 font-mono">20 000 ₸</div>
                        </div>
                        <button
                          onClick={() => setSelectedGiftOption(1)}
                          className="px-2.5 py-1 text-[11px] font-semibold bg-white border border-neutral-300 rounded hover:bg-neutral-100 text-neutral-700"
                        >
                          Выбрать
                        </button>
                      </div>

                      <div className="p-2.5 bg-emerald-50/60 rounded-lg border border-emerald-200 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-neutral-900 text-xs">2. Подарочный набор «Relax & Balance»</div>
                          <div className="text-[11px] text-neutral-500">Аромамасла, свеча и скраб</div>
                          <div className="text-xs font-bold text-emerald-700 font-mono">28 000 ₸</div>
                        </div>
                        <button
                          onClick={() => setSelectedGiftOption(2)}
                          className="px-2.5 py-1 text-[11px] font-semibold bg-emerald-600 text-white rounded shadow-xs"
                        >
                          В заказе
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-[10px] text-neutral-500">Выбран второй вариант:</span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                        Добавлен в корзину
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Invoice Specimen */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-700" />
                    <span className="text-xs font-bold text-neutral-900">Накладная заказа #KZ-4819</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100 font-semibold px-2 py-0.5 rounded">
                    Новая заявка
                  </span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-neutral-600">
                    <span>Подарочный набор «Relax & Balance» (1 шт)</span>
                    <span className="font-mono font-medium text-neutral-900">28 000 ₸</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Подарочная брендовая упаковка</span>
                    <span className="font-mono font-medium text-neutral-900">0 ₸ (Бонус)</span>
                  </div>
                  <div className="pt-2 border-t border-neutral-200 flex justify-between font-bold text-neutral-900 text-sm">
                    <span>Итого к оплате:</span>
                    <span className="font-mono text-emerald-700">28 000 ₸</span>
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] text-neutral-500">
                  <span>Клиент: +7 (701) •••-12-88</span>
                  <span className="text-neutral-400">Способ: При получении / по согласованию</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Copy */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Инструмент 02 · AI-Продавец и Накладная</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
              AI не просто отвечает. Он помогает продавать.
            </h3>

            <p className="text-base text-neutral-600 leading-relaxed">
              Вместо сухого ответа «Прайс в шапке профиля», <strong>6 AI</strong> задаёт уточняющие вопросы, фильтрует товары и услуги под бюджет клиента и предлагает конкретный следующий шаг.
            </p>

            {/* Step flow */}
            <div className="bg-[#F7F8FA] p-4 rounded-xl border border-neutral-200 space-y-2">
              <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
                Цепочка от вопроса до заказа:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                <div className="bg-white p-2 rounded-lg border border-neutral-200 font-medium">1. Выбор товара</div>
                <div className="bg-white p-2 rounded-lg border border-neutral-200 font-medium">2. Корзина</div>
                <div className="bg-white p-2 rounded-lg border border-neutral-200 font-medium">3. Накладная</div>
                <div className="bg-emerald-600 text-white p-2 rounded-lg font-bold">4. Заявка бизнесу</div>
              </div>
            </div>

            <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900">
              <strong>Важное примечание:</strong> Онлайн-оплату можно подключить дополнительно, если это необходимо вашей модели бизнеса.
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          03. ВИТРИНА КАК МИНИ-САЙТ
      ======================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 border-t border-neutral-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Инструмент 03 · Собственная онлайн-витрина</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
              Одна ссылка — и у вашего бизнеса есть собственная витрина.
            </h3>

            <p className="text-base text-neutral-600 leading-relaxed">
              Не просто ссылка на ленту Instagram, где клиент путается в постах. Полноценный, удобный мобильный каталог ваших услуг и товаров: с фото, понятными ценами, описанием и кнопками заказа.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 bg-[#F7F8FA] rounded-xl border border-neutral-200">
                <span className="font-bold text-neutral-900 text-sm block">Всегда актуальный прайс</span>
                <span className="text-xs text-neutral-500">Меняйте цены и услуги в один клик из личного кабинета.</span>
              </div>
              <div className="p-3.5 bg-[#F7F8FA] rounded-xl border border-neutral-200">
                <span className="font-bold text-neutral-900 text-sm block">Работает прямо в WhatsApp</span>
                <span className="text-xs text-neutral-500">Клиент нажимает ссылку в диалоге и видит меню мгновенно.</span>
              </div>
            </div>

            <div>
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-neutral-950 rounded-xl hover:bg-neutral-800 transition-all shadow-xs"
              >
                <Eye className="w-4 h-4" />
                <span>Посмотреть демо-витрину</span>
              </button>
            </div>
          </div>

          {/* Right: Phone Frame with Storefront */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-sm bg-neutral-950 p-3 rounded-[36px] shadow-2xl border-4 border-neutral-800">
              {/* Phone Speaker Notch */}
              <div className="w-24 h-4 bg-neutral-900 rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-neutral-800 rounded-full mr-2" />
                <div className="w-6 h-1 bg-neutral-800 rounded-full" />
              </div>

              {/* Screen Content */}
              <div className="bg-white rounded-[26px] overflow-hidden p-4 space-y-3.5 text-neutral-900">
                
                {/* Storefront Header */}
                <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                  <div>
                    <h5 className="font-extrabold text-sm text-neutral-900">Массажная студия «Shakira»</h5>
                    <p className="text-[10px] text-neutral-400">г. Алматы · просп. Достык, 128</p>
                  </div>
                  <div className="relative">
                    <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center">
                      <ShoppingCart className="w-3.5 h-3.5 text-neutral-700" />
                    </div>
                    {cartItems.length > 0 && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                        {cartItems.length}
                      </span>
                    )}
                  </div>
                </div>

                {/* Categories */}
                <div className="flex gap-1.5 overflow-x-auto pb-1 text-[11px] font-semibold text-neutral-600">
                  <span className="px-2.5 py-1 bg-neutral-900 text-white rounded-lg whitespace-nowrap">Все услуги</span>
                  <span className="px-2.5 py-1 bg-neutral-100 rounded-lg whitespace-nowrap">Массаж</span>
                  <span className="px-2.5 py-1 bg-neutral-100 rounded-lg whitespace-nowrap">Сертификаты</span>
                  <span className="px-2.5 py-1 bg-neutral-100 rounded-lg whitespace-nowrap">Уход</span>
                </div>

                {/* Item 1 */}
                <div className="border border-neutral-200 rounded-xl p-3 flex gap-3 items-center hover:border-emerald-300 transition-colors">
                  <img
                    src={massageImg}
                    onError={(e) => { e.currentTarget.src = '/images/massage.jpg'; }}
                    alt="Классический массаж"
                    className="w-16 h-16 rounded-lg object-cover shrink-0 bg-neutral-100"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <h6 className="font-bold text-xs text-neutral-900 truncate">Классический массаж</h6>
                    <p className="text-[10px] text-neutral-500">60 минут · Снятие зажимов</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="font-mono font-bold text-xs text-neutral-900">12 000 ₸</span>
                      <button
                        onClick={onOpenDemo}
                        className="px-2.5 py-1 bg-emerald-600 text-white rounded text-[10px] font-bold hover:bg-emerald-700"
                      >
                        Записаться
                      </button>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="border border-neutral-200 rounded-xl p-3 flex gap-3 items-center hover:border-emerald-300 transition-colors">
                  <img
                    src={retailGiftImg}
                    onError={(e) => { e.currentTarget.src = '/images/certificate.jpg'; }}
                    alt="Подарочный сертификат"
                    className="w-16 h-16 rounded-lg object-cover shrink-0 bg-neutral-100"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <h6 className="font-bold text-xs text-neutral-900 truncate">Подарочный сертификат</h6>
                    <p className="text-[10px] text-neutral-500">Номинал на выбор</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="font-mono font-bold text-xs text-neutral-900">20 000 ₸</span>
                      <button
                        onClick={() => toggleCart('Подарочный сертификат')}
                        className={`px-2.5 py-1 rounded text-[10px] font-bold transition-all ${
                          cartItems.includes('Подарочный сертификат')
                            ? 'bg-neutral-800 text-white'
                            : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200'
                        }`}
                      >
                        {cartItems.includes('Подарочный сертификат') ? 'В корзине' : '+ Добавить'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Storefront Bottom Action Bar */}
                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
                  <div className="text-[10px] text-neutral-500">
                    В корзине: <span className="font-bold text-neutral-900">{cartItems.length} поз.</span>
                  </div>
                  <button
                    onClick={onOpenDemo}
                    className="px-3 py-1.5 bg-neutral-950 text-white rounded-lg text-xs font-bold hover:bg-neutral-800"
                  >
                    Оформить заказ
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          04. ГОРЯЧИЕ ЛИДЫ
      ======================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 border-t border-neutral-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
              <Flame className="w-3.5 h-3.5 text-amber-600" />
              <span>Инструмент 04 · Горячие Лиды</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
              Не теряйте клиентов, которые уже заинтересовались.
            </h3>

            <p className="text-base text-neutral-600 leading-relaxed">
              Обычно клиент спрашивает цену, выбирает время, но отвлекается на звонок и закрывает чат. В обычном WhatsApp про него забудут через час. <strong>6 AI</strong> сохраняет таких клиентов в специальную панель внимания.
            </p>

            <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl space-y-2 text-xs text-neutral-700">
              <div className="font-bold text-neutral-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Честное позиционирование инструмента:</span>
              </div>
              <p>
                В кабинете вы видите горячих клиентов, статус их вопроса и можете в один клик продолжить диалог с заранее подготовленным вежливым сообщением.
              </p>
            </div>
          </div>

          {/* Right: Hot Leads Dashboard Preview */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-lg p-5 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-sm text-neutral-900">Панель: Горячие лиды</h5>
                    <p className="text-[11px] text-neutral-500">Клиенты, проявившие интерес без завершения брони</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  3 требуют внимания
                </span>
              </div>

              <div className="space-y-3">
                {HOT_LEADS_SAMPLE.map((lead) => (
                  <div
                    key={lead.id}
                    className="p-3.5 bg-[#F7F8FA] rounded-xl border border-neutral-200 hover:border-amber-300 transition-all space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-neutral-900 text-sm">{lead.name}</span>
                      <span className="text-[10px] text-neutral-400 font-mono">{lead.time}</span>
                    </div>

                    <p className="text-neutral-700 italic bg-white p-2 rounded border border-neutral-100">
                      {lead.request}
                    </p>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                        {lead.status}
                      </span>

                      <div className="flex items-center gap-2">
                        <a
                          href={getWhatsAppLink(lead.suggestedReply)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 bg-emerald-600 text-white rounded font-semibold text-[11px] hover:bg-emerald-700 flex items-center gap-1"
                        >
                          <Send className="w-3 h-3" />
                          <span>Написать</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          05. ОБРАТНАЯ СВЯЗЬ
      ======================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 border-t border-neutral-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Feedback Dashboard Widget */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-md p-5 space-y-4">
              
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    <MessageSquareHeart className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-sm text-neutral-900">Индекс лояльности и отзывы</h5>
                    <p className="text-[11px] text-neutral-500">Автоматический опрос после визита</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded text-emerald-800 font-extrabold text-sm font-mono">
                  <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                  <span>4.9 / 5.0</span>
                </div>
              </div>

              <div className="space-y-3">
                {REVIEWS_SAMPLE.map((review) => (
                  <div key={review.id} className="p-3 bg-[#F7F8FA] rounded-xl border border-neutral-200 text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-bold text-neutral-900">
                        <span>{review.name}</span>
                        <span className="text-[10px] text-neutral-400 font-normal">· {review.service}</span>
                      </div>
                      <div className="flex text-amber-500">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-neutral-600 leading-relaxed">«{review.text}»</p>
                    <div className="text-[10px] text-neutral-400 text-right">{review.date}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Copy */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
              <MessageSquareHeart className="w-3.5 h-3.5" />
              <span>Инструмент 05 · Обратная связь</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
              Слышите клиентов, а не только считаете продажи.
            </h3>

            <p className="text-base text-neutral-600 leading-relaxed">
              Через заданное время после завершения визита или получения заказа, 6 AI деликатно спрашивает оценку и впечатления клиента. Вы вовремя узнаёте о недовольствах до того, как они попадут в 2GIS или Google Maps.
            </p>

            <ul className="space-y-2.5 text-xs text-neutral-700">
              <li className="flex items-center gap-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Сбор оценок (1–5) и текстовых пожеланий
              </li>
              <li className="flex items-center gap-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Уведомление владельца при низкой оценке для быстрого исправления
              </li>
              <li className="flex items-center gap-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Повышение повторных визитов и лояльности аудитории
              </li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
};
