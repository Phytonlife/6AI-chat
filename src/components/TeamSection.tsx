import React from 'react';
import { Terminal, Shield, Cpu, MessageSquare, Layout, CheckCircle } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F7F8FA] border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-3xl border border-neutral-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
              <Cpu className="w-3.5 h-3.5" />
              <span>Собственная разработка</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight" style={{ textWrap: 'balance' }}>
              Продукт создаётся казахстанской командой разработчиков.
            </h3>

            <p className="text-base text-neutral-600 leading-relaxed">
              <strong>6 AI</strong> — частный технологический продукт, который мы проектируем, программируем и развиваем самостоятельно. Мы не перепродаём чужие конструкторы ботов: каждый алгоритм записи, витрина, интеграция с WhatsApp и кабинет разработаны под потребности реального бизнеса в Казахстане.
            </p>
          </div>

          {/* Pillars grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            {[
              { icon: Terminal, label: 'Собственный код', sub: 'TypeScript & Node.js' },
              { icon: MessageSquare, label: 'WhatsApp', sub: 'Прямые вебхуки 24/7' },
              { icon: Layout, label: 'Личный кабинет', sub: 'React & UI-архитектура' },
              { icon: Cpu, label: 'AI-логика', sub: 'Сценарии и регламенты' },
              { icon: Shield, label: 'Безопасность', sub: 'Изолированные данные' },
              { icon: CheckCircle, label: 'Тестирование', sub: 'Проверено в реале' },
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="p-4 bg-[#F7F8FA] rounded-2xl border border-neutral-200 text-center space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-white border border-neutral-200 mx-auto flex items-center justify-center text-neutral-800">
                    <Icon className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div>
                    <div className="font-extrabold text-xs text-neutral-900">{p.label}</div>
                    <div className="text-[10px] text-neutral-500 font-mono mt-0.5">{p.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200 text-xs sm:text-sm text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <span>
              <strong>Честный подход:</strong> Никаких вымышленных корпораций из 50 человек. Вы общаетесь напрямую с создателями и разработчиками системы, получая быструю обратную связь и доработки под свой бизнес.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
