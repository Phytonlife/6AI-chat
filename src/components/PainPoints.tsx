import React from 'react';
import { Clock, HelpCircle, Moon, UserX, BarChart2, Layers, AlertCircle, ArrowDown } from 'lucide-react';
import { PAIN_POINTS } from '../data/landingData.ts';

const icons = [Clock, HelpCircle, Moon, UserX, BarChart2, Layers];

export const PainPoints: React.FC = () => {
  return (
    <section id="problems" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-md border border-amber-200/80">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Реальные будни бизнеса</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-neutral-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Знакомо?
          </h2>

          <p className="text-lg text-neutral-600">
            Каждый день казахстанский бизнес теряет от 20% до 50% потенциальных обращений из-за человеческого фактора и рутины в переписках.
          </p>
        </div>

        {/* 6 Pain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAIN_POINTS.map((pain, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={pain.id}
                className="bg-[#F7F8FA] rounded-2xl p-6 sm:p-7 border border-neutral-200 hover:border-neutral-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-800 shadow-xs">
                    <Icon className="w-5 h-5 text-neutral-700" />
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 leading-snug">
                    {pain.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {pain.description}
                  </p>
                </div>

                {pain.quote && (
                  <div className="mt-5 pt-4 border-t border-neutral-200/80">
                    <p className="text-xs font-mono text-neutral-700 bg-white/80 p-2.5 rounded-lg border border-neutral-200/60 leading-relaxed">
                      {pain.quote}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Transition Final Line */}
        <div className="mt-14 max-w-2xl mx-auto text-center p-6 bg-emerald-50/70 border border-emerald-200 rounded-2xl">
          <div className="flex justify-center mb-2">
            <ArrowDown className="w-5 h-5 text-emerald-700 animate-bounce" />
          </div>
          <p className="text-lg sm:text-xl font-bold text-emerald-950">
            «6 AI собирает первую линию работы с клиентом в одну систему.»
          </p>
          <p className="text-xs sm:text-sm text-emerald-800 mt-1">
            Без бесконечных переключений между чатами, блокнотами и таблицами.
          </p>
        </div>

      </div>
    </section>
  );
};
