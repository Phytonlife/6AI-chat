import React, { useState } from 'react';
import { MessageSquare, Play, Sparkles, CheckCircle2, ChevronRight, Clock, ShieldCheck, ArrowRight, Languages } from 'lucide-react';
import { getWhatsAppLink } from '../data/landingData.ts';
import { useLanguage } from '../context/LanguageContext.tsx';
import { T } from '../data/translations.ts';

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const { lang } = useLanguage();
  const text = T[lang];

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-neutral-200">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wide text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>{text.heroBadge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-neutral-900 tracking-tight leading-[1.12]" style={{ textWrap: 'balance' }}>
              {text.heroH1}
            </h1>

            <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed">
              <strong className="text-neutral-900 font-semibold">6 AI</strong> {text.heroSub}
            </p>

            <p className="text-sm text-neutral-500 leading-normal">
              {text.heroDesc}
            </p>

            {/* Multilingual Reassurance Badge */}
            <div className="p-3.5 bg-white border border-emerald-200 rounded-xl shadow-2xs flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                <Languages className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-950 block">
                  {text.multilingualBadge}
                </span>
                <span className="text-[11px] text-neutral-500">
                  {text.multilingualSub}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-neutral-950 rounded-xl hover:bg-neutral-800 active:scale-[0.99] transition-all shadow-md"
              >
                <span>{text.tryBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-neutral-800 bg-white border border-neutral-300 rounded-xl hover:bg-neutral-50 active:scale-[0.99] transition-all shadow-xs"
              >
                <Play className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span>{text.viewDemoBtn}</span>
              </button>

              <a
                href={getWhatsAppLink(lang === 'kz' ? 'Сәлеметсіз бе! 6 AI туралы білгім келеді.' : 'Здравствуйте! Хочу узнать подробнее о 6 AI.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{text.writeWaBtn}</span>
              </a>
            </div>

            {/* Trust Markers */}
            <div className="pt-3 border-t border-neutral-200/80">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-neutral-500">
                <span className="flex items-center gap-1.5 text-neutral-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  {text.trust1}
                </span>
                <span className="text-neutral-300">·</span>
                <span className="flex items-center gap-1.5 text-neutral-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  {text.trust2}
                </span>
                <span className="text-neutral-300">·</span>
                <span className="flex items-center gap-1.5 text-neutral-700">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  {text.trust3}
                </span>
                <span className="text-neutral-300">·</span>
                <span className="flex items-center gap-1.5 text-neutral-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  {text.trust4}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Dual Mockup (WhatsApp + Dashboard) */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Card Container */}
              <div className="bg-white rounded-3xl border border-neutral-200 shadow-xl overflow-hidden">
                {/* Header Mockup Bar */}
                <div className="px-4 py-3 bg-neutral-900 text-white flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold tracking-wide">{text.mockupTitle}</span>
                  </div>
                  <span className="text-[11px] text-neutral-400 bg-neutral-800 px-2 py-0.5 rounded border border-neutral-700 font-mono">
                    {text.mockupDemoBadge}
                  </span>
                </div>

                <div className="p-4 sm:p-5 bg-neutral-50/50 space-y-4">
                  
                  {/* Dashboard Quick Stats Bar (Demo-Data) */}
                  <div className="bg-white p-3.5 rounded-2xl border border-neutral-200 shadow-2xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
                        {text.summaryToday}
                      </span>
                      <span className="text-[10px] text-neutral-600 bg-neutral-100 font-semibold px-1.5 py-0.5 rounded">
                        Demo-data
                      </span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="p-2 bg-neutral-50 rounded-xl border border-neutral-100">
                        <div className="text-lg font-extrabold text-neutral-900 font-mono tabular-nums">24</div>
                        <div className="text-[10px] text-neutral-700 leading-tight">{text.inquiries}</div>
                      </div>
                      <div className="p-2 bg-emerald-50/60 rounded-xl border border-emerald-100">
                        <div className="text-lg font-extrabold text-emerald-800 font-mono tabular-nums">9</div>
                        <div className="text-[10px] text-emerald-800 font-semibold leading-tight">{text.bookings}</div>
                      </div>
                      <div className="p-2 bg-neutral-50 rounded-xl border border-neutral-100">
                        <div className="text-lg font-extrabold text-neutral-900 font-mono tabular-nums">5</div>
                        <div className="text-[10px] text-neutral-700 leading-tight">{text.orders}</div>
                      </div>
                      <div className="p-2 bg-amber-50/70 rounded-xl border border-amber-100">
                        <div className="text-lg font-extrabold text-amber-800 font-mono tabular-nums">6</div>
                        <div className="text-[10px] text-amber-800 font-semibold leading-tight">{text.hotLeads}</div>
                      </div>
                    </div>
                  </div>

                  {/* Simulated WhatsApp Chat Window (Natural plain text, NO BUTTONS) */}
                  <div className="bg-[#EFEAE2] rounded-2xl border border-neutral-300 p-3.5 space-y-3 relative overflow-hidden">
                    <div className="flex items-center justify-between pb-2 border-b border-neutral-300/60 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                          6
                        </div>
                        <div>
                          <div className="font-bold text-neutral-900">{text.salonName}</div>
                          <div className="text-[10px] text-emerald-700 font-medium">{text.onlineAdmin}</div>
                        </div>
                      </div>
                      <span className="text-[10px] text-neutral-500 font-mono">WhatsApp 24/7</span>
                    </div>

                    {/* Messages in Kazakh with Plain Text Slots separated by Enter */}
                    <div className="space-y-2.5 text-xs">
                      {/* Client message */}
                      <div className="flex justify-end">
                        <div className="bg-[#E7FFDB] text-neutral-900 rounded-xl rounded-tr-none px-3.5 py-2 max-w-[85%] shadow-2xs">
                          <p>Сәлеметсіз бе! Ертеңге массажға жазылайын деп едім.</p>
                          <span className="text-[9px] text-neutral-400 block text-right mt-0.5">22:14 ✓✓</span>
                        </div>
                      </div>

                      {/* AI response with text slots on new lines */}
                      <div className="flex justify-start">
                        <div className="bg-white text-neutral-900 rounded-xl rounded-tl-none px-3.5 py-2.5 max-w-[92%] shadow-2xs space-y-2">
                          <p className="font-semibold text-emerald-950">
                            Сәлеметсіз бе! Әрине, уақыт таңдауға көмектесемін.
                          </p>
                          
                          <p className="text-neutral-700">
                            Ертеңгі күнге (сәрсенбі) Айгерім шеберге бос уақыттар:
                          </p>

                          {/* Plain text slots separated by line breaks, NO BUTTONS */}
                          <div className="font-mono font-bold text-emerald-800 text-xs pl-2 border-l-2 border-emerald-500 leading-relaxed space-y-0.5">
                            <div>18:00</div>
                            <div>19:30</div>
                            <div>21:00</div>
                          </div>

                          <p className="text-neutral-700 pt-0.5">
                            Сізге қай уақыт ыңғайлы болады?
                          </p>

                          <span className="text-[9px] text-neutral-400 block text-right mt-0.5">22:14</span>
                        </div>
                      </div>

                      {/* Client response */}
                      <div className="flex justify-end">
                        <div className="bg-[#E7FFDB] text-neutral-900 rounded-xl rounded-tr-none px-3.5 py-1.5 max-w-[85%] shadow-2xs">
                          <p>19:30 ыңғайлы болады</p>
                          <span className="text-[9px] text-neutral-400 block text-right mt-0.5">22:15 ✓✓</span>
                        </div>
                      </div>

                      {/* AI confirmation */}
                      <div className="flex justify-start">
                        <div className="bg-white text-neutral-900 rounded-xl rounded-tl-none px-3.5 py-2.5 max-w-[92%] shadow-2xs space-y-1 border-l-2 border-emerald-600">
                          <div className="flex items-center gap-1 text-emerald-700 font-bold text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Жақсы, жазылуды растадық!</span>
                          </div>
                          <div className="text-[11px] text-neutral-700 leading-snug space-y-0.5 pt-0.5">
                            <div>• Шебер: Айгерім</div>
                            <div>• Уақыты: ертең 19:30</div>
                            <div>• Қызмет: Релакс-массаж (60 мин), 12 000 ₸</div>
                          </div>
                          <p className="text-[10px] text-neutral-500 pt-1">
                            Салонның мекенжайы мен локациясын жібердік. Күтеміз!
                          </p>
                          <span className="text-[9px] text-neutral-400 block text-right mt-0.5">22:15</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom insight pill */}
                  <div className="flex items-center justify-between text-xs text-neutral-500 px-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {text.insightNote}
                    </span>
                    <button
                      onClick={onOpenDemo}
                      className="text-emerald-700 font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      <span>{text.openDemoLink}</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

