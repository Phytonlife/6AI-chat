import React, { useState } from 'react';
import { 
  X, MessageSquare, ShoppingBag, BarChart3, Flame, Calendar, 
  CheckCircle2, Clock, ShoppingCart, Send, Star, ArrowRight, UserCheck, ShieldCheck
} from 'lucide-react';
import { getWhatsAppLink } from '../data/landingData.ts';

interface InteractiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveDemoModal: React.FC<InteractiveDemoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'chat' | 'store' | 'dashboard'>('chat');
  
  // Interactive Chat state
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string; time: string; options?: string[] }>>([
    { sender: 'user', text: 'Здравствуйте! Хочу записаться на массаж завтра.', time: '20:30' },
    { 
      sender: 'ai', 
      text: 'Здравствуйте! Рады вам помочь. На завтра в массажной студии «Shakira» свободно к мастеру Айгерим:', 
      time: '20:30',
      options: ['18:00 — Релакс', '19:30 — Массаж спины', '21:00 — СПА-комплекс']
    }
  ]);
  const [inputText, setInputText] = useState('');

  // Interactive Storefront state
  const [cart, setCart] = useState<Array<{ name: string; price: number }>>([
    { name: 'Релакс-массаж (60 мин)', price: 12000 }
  ]);

  const handleSelectOption = (opt: string) => {
    const userMsg = { sender: 'user' as const, text: `Выбираю ${opt}`, time: '20:31' };
    const aiMsg = { 
      sender: 'ai' as const, 
      text: `Отлично! Слот «${opt}» успешно забронирован за вами. Ждём вас завтра! Вам придет напоминание за 2 часа.`, 
      time: '20:31' 
    };
    setMessages(prev => [...prev, userMsg, aiMsg]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const userMsg = { sender: 'user' as const, text: inputText, time: '20:32' };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { 
          sender: 'ai', 
          text: 'Благодарим за сообщение! 6 AI автоматически зафиксировал ваш вопрос в кабинете администратора салона.', 
          time: '20:32' 
        }
      ]);
    }, 600);
  };

  const totalCart = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl border border-neutral-200 overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="px-5 py-4 bg-neutral-900 text-white flex items-center justify-between border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center font-extrabold text-xs">
              6
            </span>
            <div>
              <div className="font-extrabold text-sm tracking-tight flex items-center gap-2">
                <span>Интерактивный демо-кабинет 6 AI</span>
                <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 font-mono">
                  Студия «Shakira»
                </span>
              </div>
              <p className="text-[11px] text-neutral-400">
                Попробуйте вживую: переключайте экраны чата, витрины и дашборда
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-neutral-200 bg-[#F7F8FA] px-4 pt-2 gap-2 text-xs font-bold overflow-x-auto">
          <button
            onClick={() => setActiveTab('chat')}
            className={`px-4 py-2.5 rounded-t-xl transition-all flex items-center gap-2 whitespace-nowrap border-b-2 ${
              activeTab === 'chat'
                ? 'bg-white text-emerald-700 border-emerald-600 shadow-xs'
                : 'text-neutral-500 hover:text-neutral-900 border-transparent'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>1. WhatsApp чат с клиентом</span>
          </button>

          <button
            onClick={() => setActiveTab('store')}
            className={`px-4 py-2.5 rounded-t-xl transition-all flex items-center gap-2 whitespace-nowrap border-b-2 ${
              activeTab === 'store'
                ? 'bg-white text-emerald-700 border-emerald-600 shadow-xs'
                : 'text-neutral-500 hover:text-neutral-900 border-transparent'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>2. Мобильная витрина</span>
          </button>

          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2.5 rounded-t-xl transition-all flex items-center gap-2 whitespace-nowrap border-b-2 ${
              activeTab === 'dashboard'
                ? 'bg-white text-emerald-700 border-emerald-600 shadow-xs'
                : 'text-neutral-500 hover:text-neutral-900 border-transparent'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>3. Кабинет владельца</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-white min-h-[420px]">
          
          {/* TAB 1: INTERACTIVE CHAT */}
          {activeTab === 'chat' && (
            <div className="max-w-xl mx-auto space-y-4">
              <div className="bg-[#EFEAE2] rounded-2xl border border-neutral-300 p-4 space-y-3 min-h-[340px] flex flex-col justify-between">
                
                {/* Messages Feed */}
                <div className="space-y-3 text-xs overflow-y-auto max-h-[260px] pr-1">
                  {messages.map((m, idx) => (
                    <div
                      key={idx}
                      className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`rounded-xl px-3.5 py-2 max-w-[85%] shadow-xs space-y-2 ${
                          m.sender === 'user'
                            ? 'bg-[#E7FFDB] text-neutral-900 rounded-tr-none'
                            : 'bg-white text-neutral-900 rounded-tl-none'
                        }`}
                      >
                        <p>{m.text}</p>

                        {/* Text slots with enter, NO BUTTONS inside message bubble */}
                        {m.options && (
                          <div className="space-y-1.5 pt-1">
                            <div className="font-mono font-bold text-emerald-800 text-xs pl-2 border-l-2 border-emerald-500 leading-relaxed space-y-0.5">
                              <div>18:00 — Релакс</div>
                              <div>19:30 — Массаж спины</div>
                              <div>21:00 — СПА-комплекс</div>
                            </div>
                            <div className="pt-1 flex flex-wrap gap-1.5">
                              {['18:00', '19:30', '21:00'].map((time) => (
                                <button
                                  key={time}
                                  type="button"
                                  onClick={() => handleSelectOption(time)}
                                  className="px-2 py-0.5 bg-neutral-100 hover:bg-emerald-600 hover:text-white rounded text-[11px] font-semibold transition-all border border-neutral-200"
                                >
                                  Написать «{time}»
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        <span className="text-[9px] text-neutral-400 block text-right">
                          {m.time} {m.sender === 'user' ? '✓✓' : ''}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Simulated Input */}
                <form onSubmit={handleSendMessage} className="flex gap-2 pt-2 border-t border-neutral-300/60">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Напишите вопрос (например: где вы находитесь?)..."
                    className="flex-1 bg-white text-neutral-900 border border-neutral-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-emerald-600"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition-colors flex items-center justify-center"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>

              </div>

              <p className="text-center text-xs text-neutral-500">
                💡 Нажмите на любой слот времени выше, чтобы посмотреть, как AI моментально подтверждает запись.
              </p>
            </div>
          )}

          {/* TAB 2: STOREFRONT */}
          {activeTab === 'store' && (
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <div>
                  <h4 className="font-extrabold text-sm text-neutral-900">Мобильная витрина SPA-салона</h4>
                  <p className="text-xs text-neutral-500">Открывается по персональной ссылке в WhatsApp</p>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>В корзине: {cart.length} на сумму {totalCart.toLocaleString('ru-RU')} ₸</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { name: 'Релакс-массаж (60 мин)', price: 12000, desc: 'Глубокое расслабление и аромамасла' },
                  { name: 'Спортивный массаж (60 мин)', price: 15000, desc: 'Проработка глубоких мышц' },
                  { name: 'Подарочный сертификат 20 000 ₸', price: 20000, desc: 'Электронный сертификат с доставкой' },
                  { name: 'СПА-уход за лицом (45 мин)', price: 10000, desc: 'Маска и очищение кожи' },
                ].map((item, idx) => {
                  const isInCart = cart.some(c => c.name === item.name);
                  return (
                    <div key={idx} className="p-3.5 bg-[#F7F8FA] rounded-2xl border border-neutral-200 flex flex-col justify-between space-y-2">
                      <div>
                        <div className="font-bold text-xs text-neutral-900">{item.name}</div>
                        <div className="text-[11px] text-neutral-500 mt-0.5">{item.desc}</div>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-neutral-200">
                        <span className="font-mono font-extrabold text-xs text-neutral-900">
                          {item.price.toLocaleString('ru-RU')} ₸
                        </span>
                        <button
                          onClick={() => {
                            if (isInCart) {
                              setCart(cart.filter(c => c.name !== item.name));
                            } else {
                              setCart([...cart, { name: item.name, price: item.price }]);
                            }
                          }}
                          className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all ${
                            isInCart
                              ? 'bg-neutral-800 text-white'
                              : 'bg-emerald-600 text-white hover:bg-emerald-700'
                          }`}
                        >
                          {isInCart ? '✓ В корзине' : '+ Добавить'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Order bill snippet */}
              <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-950 block">Итоговая накладная:</span>
                  <span className="text-sm font-extrabold font-mono text-emerald-800">
                    {totalCart.toLocaleString('ru-RU')} ₸
                  </span>
                </div>
                <button
                  onClick={() => alert('В реальной системе заявка сразу падает в кабинет и отправляется уведомление владельцу в WhatsApp!')}
                  className="px-4 py-2 bg-neutral-950 text-white rounded-xl text-xs font-bold hover:bg-neutral-800 transition-all"
                >
                  Оформить заявку
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-[#F7F8FA] rounded-xl border border-neutral-200">
                  <div className="text-[11px] text-neutral-500">Обращения сегодня</div>
                  <div className="text-xl font-extrabold font-mono text-neutral-900 mt-1">24</div>
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="text-[11px] text-emerald-800">Записей оформлено</div>
                  <div className="text-xl font-extrabold font-mono text-emerald-800 mt-1">9</div>
                </div>
                <div className="p-3 bg-[#F7F8FA] rounded-xl border border-neutral-200">
                  <div className="text-[11px] text-neutral-500">Заказов в витрине</div>
                  <div className="text-xl font-extrabold font-mono text-neutral-900 mt-1">5</div>
                </div>
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
                  <div className="text-[11px] text-amber-800">Горячие клиенты</div>
                  <div className="text-xl font-extrabold font-mono text-amber-800 mt-1">6</div>
                </div>
              </div>

              {/* Hot Leads Section inside modal */}
              <div className="p-4 bg-white rounded-2xl border border-neutral-200 space-y-2">
                <div className="flex items-center justify-between font-bold text-neutral-900">
                  <span className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-600" />
                    Горячие лиды, ожидающие контакта
                  </span>
                  <span className="text-[10px] text-neutral-400">Синхронизация WhatsApp</span>
                </div>

                <div className="space-y-2">
                  <div className="p-2.5 bg-neutral-50 rounded-lg flex items-center justify-between">
                    <div>
                      <div className="font-bold text-neutral-900">Анна (+7 701 •••-45-12)</div>
                      <div className="text-neutral-500 text-[11px]">«Интересовалась массажем на 19:30, не завершила бронь»</div>
                    </div>
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded text-[10px] font-bold">
                      Внимание
                    </span>
                  </div>

                  <div className="p-2.5 bg-neutral-50 rounded-lg flex items-center justify-between">
                    <div>
                      <div className="font-bold text-neutral-900">Иван (+7 707 •••-90-22)</div>
                      <div className="text-neutral-500 text-[11px]">«Запрос на подарочный сертификат 20 000 ₸»</div>
                    </div>
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded text-[10px] font-bold">
                      Внимание
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#F7F8FA] border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-neutral-500 text-center sm:text-left">
            Хотите такой же кабинет и AI-помощника для своего бизнеса?
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white text-neutral-700 border border-neutral-300 rounded-xl font-bold hover:bg-neutral-100 transition-colors"
            >
              Закрыть
            </button>

            <a
              href={getWhatsAppLink('Здравствуйте! Посмотрел интерактивное демо 6 AI, хочу подключить такую же систему для своего заведения/магазина.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all flex items-center gap-1.5 shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Подключить свой бизнес</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
