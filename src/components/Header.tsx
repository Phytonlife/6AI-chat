import React from 'react';
import { MessageSquare, Play, Globe } from 'lucide-react';
import { getWhatsAppLink } from '../data/landingData.ts';
import { useLanguage } from '../context/LanguageContext.tsx';
import { T } from '../data/translations.ts';

interface HeaderProps {
  onOpenDemo: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemo }) => {
  const { lang, setLang } = useLanguage();
  const text = T[lang];

  return (
    <header className="sticky top-0 z-40 bg-[#F7F8FA]/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
        {/* Zone 1: Brand Wordmark (Single Text Element) */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <span className="text-xl font-bold tracking-tight text-neutral-900 group-hover:text-emerald-700 transition-colors">
            6 AI
          </span>
          <span className="text-xs text-neutral-400 font-medium hidden sm:inline">{text.brandSubtitle}</span>
        </a>

        {/* Zone 2: 4-6 Clean Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-neutral-600">
          <a href="#problems" className="hover:text-neutral-900 transition-colors">
            {text.navProblems}
          </a>
          <a href="#compare" className="hover:text-neutral-900 transition-colors">
            {text.navCompare}
          </a>
          <a href="#tools" className="hover:text-neutral-900 transition-colors">
            {text.navTools}
          </a>
          <a href="#ads" className="hover:text-neutral-900 transition-colors">
            {text.navAds}
          </a>
          <a href="#retail" className="hover:text-neutral-900 transition-colors">
            {text.navRetail}
          </a>
          <a href="#pricing" className="hover:text-neutral-900 transition-colors">
            {text.navPricing}
          </a>
          <a href="#faq" className="hover:text-neutral-900 transition-colors">
            {text.navFaq}
          </a>
        </nav>

        {/* Zone 3: Actions + KZ / RU Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* KZ / RU Language Switcher Button */}
          <div className="flex items-center bg-neutral-200/80 p-0.5 rounded-lg border border-neutral-300">
            <button
              onClick={() => setLang('kz')}
              className={`px-2 py-1 text-xs font-bold rounded-md transition-all ${
                lang === 'kz'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-neutral-700 hover:text-neutral-950'
              }`}
              title="Қазақ тілі"
            >
              KZ
            </button>
            <button
              onClick={() => setLang('ru')}
              className={`px-2 py-1 text-xs font-bold rounded-md transition-all ${
                lang === 'ru'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-neutral-700 hover:text-neutral-950'
              }`}
              title="Русский язык"
            >
              RU
            </button>
          </div>

          <button
            onClick={onOpenDemo}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-800 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors whitespace-nowrap shadow-xs"
          >
            <Play className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
            <span>{text.demoBtn}</span>
          </button>

          <a
            href={getWhatsAppLink(lang === 'kz' ? 'Сәлеметсіз бе! 6 AI жүйесі туралы толығырақ білгім келеді.' : 'Здравствуйте! Хочу узнать подробнее о 6 AI для своего бизнеса.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors whitespace-nowrap shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

