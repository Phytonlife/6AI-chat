import React from 'react';
import { Play, MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '../data/landingData.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

interface StickyMobileBarProps {
  onOpenDemo: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenDemo }) => {
  const { lang } = useLanguage();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 px-4 py-2.5 shadow-lg">
      <div className="max-w-md mx-auto flex items-center gap-2">
        <button
          onClick={onOpenDemo}
          className="flex-1 py-2.5 px-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition-colors border border-neutral-300"
        >
          <Play className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
          <span>{lang === 'kz' ? 'Демоны ашу' : 'Демо-кабинет'}</span>
        </button>

        <a
          href={getWhatsAppLink(lang === 'kz' ? 'Сәлеметсіз бе! 6 AI туралы толығырақ білгім келеді.' : 'Здравствуйте! Хочу узнать подробнее о 6 AI для моего бизнеса.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp 24/7</span>
        </a>
      </div>
    </div>
  );
};
