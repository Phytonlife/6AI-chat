import React from 'react';
import { Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { T } from '../data/translations.ts';

export const TopTurnkeyBanner: React.FC = () => {
  const { lang } = useLanguage();
  const text = T[lang];

  return (
    <div className="bg-emerald-900 text-white border-b border-emerald-800/80 px-4 py-3 sm:py-3.5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-700/80 border border-emerald-500/40 flex items-center justify-center text-emerald-200">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <div className="space-y-0.5">
            <div className="font-extrabold text-xs sm:text-sm text-emerald-100 flex items-center gap-2">
              <span>{text.turnkeyTitle}</span>
              <span className="hidden sm:inline text-[10px] bg-emerald-800 text-emerald-300 font-mono px-1.5 py-0.5 rounded border border-emerald-700">
                100% {text.turnkeyBadge}
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-emerald-200/90 leading-relaxed max-w-4xl">
              {text.turnkeyDesc}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-300 shrink-0 self-end md:self-auto bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>{lang === 'kz' ? 'Бас қатырусыз' : 'Без головной боли'}</span>
        </div>
      </div>
    </div>
  );
};
