import React from 'react';
import { UserCheck, ShoppingBag, Smartphone, Flame, MessageSquareHeart, BarChart3, ArrowRight } from 'lucide-react';
import { SIX_TOOLS } from '../data/landingData.ts';

const toolIcons = [UserCheck, ShoppingBag, Smartphone, Flame, MessageSquareHeart, BarChart3];

interface SixToolsSectionProps {
  onOpenDemo: () => void;
}

export const SixToolsSection: React.FC<SixToolsSectionProps> = ({ onOpenDemo }) => {
  return (
    <section id="tools" className="py-16 sm:py-24 bg-[#F7F8FA] border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-white px-3 py-1 rounded-md border border-neutral-200">
            <span>Архитектура 6 в 1</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-neutral-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Один бизнес. Шесть AI-инструментов.
          </h2>

          <p className="text-lg text-neutral-600">
            Каждый инструмент решает ключевую задачу на пути клиента: от первого вопроса в WhatsApp до повторной покупки и аналитики.
          </p>
        </div>

        {/* 6 Large Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SIX_TOOLS.map((tool, idx) => {
            const Icon = toolIcons[idx % toolIcons.length];
            return (
              <div
                key={tool.number}
                className="bg-white rounded-2xl p-7 border border-neutral-200 hover:border-emerald-300 hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-extrabold text-neutral-300 group-hover:text-emerald-600 transition-colors">
                      {tool.number}
                    </span>
                    <span className="text-xs font-semibold text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-md">
                      {tool.tag}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-800 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-extrabold text-neutral-900 tracking-tight">
                    {tool.title}
                  </h3>

                  <p className="text-sm font-medium text-neutral-800 leading-snug">
                    «{tool.description}»
                  </p>

                  <p className="text-xs text-neutral-500 leading-relaxed pt-1">
                    {tool.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-emerald-700 group-hover:text-emerald-800">
                  <span>Подробнее в системе</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="text-lg font-extrabold text-neutral-900">
              Не шесть разных сервисов. Один кабинет.
            </h4>
            <p className="text-sm text-neutral-600">
              Вам не нужно платить 6 отдельным провайдерам и настраивать сложные интеграции.
            </p>
          </div>

          <button
            onClick={onOpenDemo}
            className="shrink-0 px-6 py-3 bg-neutral-900 text-white rounded-xl text-xs font-bold hover:bg-neutral-800 transition-all flex items-center gap-2"
          >
            <span>Посмотреть все 6 инструментов в демо</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
