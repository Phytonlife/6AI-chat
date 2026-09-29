import React from 'react';
import { Play, Zap, MessageSquare, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { getWhatsAppLink } from '../data/landingData.ts';

interface FinalCtaProps {
  onOpenDemo: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenDemo }) => {
  return (
    <div>
      {/* ========================================================
          SECTION 33: ФИНАЛЬНЫЙ ТЁМНЫЙ БЛОК
      ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#0A0F1D] text-white relative overflow-hidden">
        {/* Subtle radial emerald background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded-md border border-emerald-800">
            <span>Старт без риска</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
            Покажем, как 6 AI будет работать именно в вашем бизнесе.
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Вам не нужно разбираться в сложных нейросетях и технических настройках. Просто расскажите, чем занимается ваша компания — мы подготовим понятный сценарий под вашу специфику.
          </p>

          {/* 3 Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-6 py-3.5 bg-white text-neutral-950 rounded-xl text-xs font-extrabold hover:bg-neutral-100 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Play className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span>Открыть бесплатное демо</span>
            </button>

            <a
              href={getWhatsAppLink('Здравствуйте! Хочу запустить тест 6 AI на своём бизнесе на 7 дней за 5 000 ₸ (проверить на реальных клиентах).')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 text-white rounded-xl text-xs font-extrabold hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Zap className="w-4 h-4" />
              <span>Запустить тест на 7 дней (5 000 ₸)</span>
            </a>

            <a
              href={getWhatsAppLink('Здравствуйте! Хочу проконсультироваться по 6 AI: расскажите, как система решит задачи моего бизнеса.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-neutral-800 text-neutral-200 border border-neutral-700 rounded-xl text-xs font-extrabold hover:bg-neutral-700 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Написать в WhatsApp</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Никаких скрытых платежей
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-400" />
              Очная встреча в Атырау / онлайн по Казахстану
            </span>
          </div>

        </div>
      </section>

      {/* ========================================================
          FOOTER (QUIET CONTRACT)
      ======================================================== */}
      <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900 py-12 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xl font-black text-white tracking-tight">6 AI</span>
                <span className="text-neutral-500">· 6 инструментов в одной системе</span>
              </div>
              <p className="text-neutral-500 text-xs max-w-sm">
                AI-администратор, продавец, витрина, горячие клиенты, обратная связь и бизнес-аналитика для малого и среднего бизнеса Казахстана.
              </p>
            </div>

            {/* Quick links */}
            <div className="flex flex-wrap gap-6 text-xs font-medium text-neutral-400">
              <a href="#problems" className="hover:text-white transition-colors">Проблемы</a>
              <a href="#tools" className="hover:text-white transition-colors">Инструменты</a>
              <a href="#analytics" className="hover:text-white transition-colors">Аналитика</a>
              <a href="#scenarios" className="hover:text-white transition-colors">Сценарии</a>
              <a href="#pricing" className="hover:text-white transition-colors">Тарифы</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
            <div>
              © 2026 6 AI. Частный технологический продукт. Все права защищены. Казахстан.
            </div>

            <div className="flex items-center gap-4">
              <span>Локальный запуск: г. Атырау</span>
              <span>·</span>
              <a
                href={getWhatsAppLink('Здравствуйте! Вопрос разработчикам 6 AI.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                Техподдержка WhatsApp
              </a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};
