import React from 'react';
import { Award, TrendingUp, CheckCircle2, ShieldCheck, HeartHandshake, Zap, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { getWhatsAppLink } from '../data/landingData.ts';

export const StatusAndPrestige: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#F7F8FA] border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'kz' ? 'Бренд мәртебесі мен сенім' : 'Статус бренда и лояльность'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-neutral-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {lang === 'kz' 
              ? 'Мәртебе мен бедел: Сіз бірден ірі, салмақты компания ретінде көрінесіз' 
              : 'Статус и престиж: Вы сразу проявляете себя как большая, серьёзная компания'}
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            {lang === 'kz'
              ? 'Заманауи тұтынушылар инновациялық автоматтандыруды қолданатын компанияларға әлдеқайда көп сенеді және оңай тапсырыс береді.'
              : 'Потребители подсознательно выбирают технологичные бренды. Мгновенный вежливый сервис и собственная витрина вызывают в разы больше доверия, чем сухой ответ обычного человека.'}
          </p>
        </div>

        {/* 3 Pillars Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-3xl p-7 border border-neutral-200 shadow-xs space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-neutral-900 leading-snug">
                {lang === 'kz' ? 'Сатылымдар статистикасы' : 'Клиенты покупают чаще'}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {lang === 'kz'
                  ? 'Статистика бойынша, сатып алушылар қарапайым адамның 3 сағаттан кейін жазған құрғақ жауабына қарағанда, лезде жауап беріп, көркем витрина ұсынған компаниялардан жиі алады.'
                  : 'Потребители чаще покупают у компаний с автоматизацией: вместо сухого ответа «прайс в шапке» или долгого молчания, клиент получает вежливую заботу за 3 секунды.'}
              </p>
            </div>
            <div className="pt-3 border-t border-neutral-100 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{lang === 'kz' ? 'Жоғары конверсия' : 'Выше конверсия в чек'}</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-neutral-200 shadow-xs space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-neutral-900 leading-snug">
                {lang === 'kz' ? 'Астаналық желілер деңгейі' : 'Уровень столичных сетей'}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {lang === 'kz'
                  ? 'Сізде әзірге 1–2 шебер немесе шағын дүкен болса да, клиент өзін премиум-қонақ үйлер мен ең үздік желілік брендтердің деңгейінде сезінеді.'
                  : 'Даже если у вас пока 1–2 мастера или уютный магазин, клиент ощущает первоклассный уровень заботы, как в лучших премиальных заведениях и столичных отелях.'}
              </p>
            </div>
            <div className="pt-3 border-t border-neutral-100 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{lang === 'kz' ? 'Сапалы бедел' : 'Репутация лидера'}</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-neutral-200 shadow-xs space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-neutral-900 leading-snug">
                {lang === 'kz' ? 'Сыпайылық пен дәлдік' : 'Безупречная вежливость'}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {lang === 'kz'
                  ? 'AI ешқашан шаршамайды, дөрекі жауап бермейді және мәліметтерді ұмытпайды. Әрбір клиентке құрметпен қарайды.'
                  : 'AI никогда не отвечает с раздражением, не срывается после тяжелого дня и не забывает поздороваться. Общение всегда идеально выдержано и профессионально.'}
              </p>
            </div>
            <div className="pt-3 border-t border-neutral-100 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{lang === 'kz' ? 'Қайта оралушылар саны артады' : 'Растут повторные визиты'}</span>
            </div>
          </div>

        </div>

        {/* Status Reassurance Banner */}
        <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-extrabold text-sm sm:text-base text-white">
              {lang === 'kz'
                ? '«6 AI бар бизнес — клиент көзінде заманауи және сенімді көрінеді»'
                : '«Бизнес с 6 AI сразу выглядит современным, технологичным и надёжным»'}
            </div>
            <p className="text-xs text-neutral-400">
              {lang === 'kz'
                ? 'Кез келген бәсекелесіңізден клиентке жасаған қамқорлығыңыз арқылы бір қадам алда болыңыз.'
                : 'Выделяйтесь среди конкурентов скоростью, уважением к времени клиента и собственным сервисом.'}
            </p>
          </div>

          <a
            href={getWhatsAppLink(lang === 'kz' ? 'Сәлеметсіз бе! Бизнесімнің деңгейін 6 AI арқылы көтергім келеді.' : 'Здравствуйте! Хочу подключить 6 AI и поднять статус сервиса для клиентов.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shrink-0 transition-all shadow-md flex items-center gap-2"
          >
            <span>{lang === 'kz' ? 'Кеңес алу' : 'Получить консультацию'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
