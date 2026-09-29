import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ru' | 'kz';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'ru',
  setLang: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('ru');

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: (k) => k }}>
      {children}
    </LanguageContext.Provider>
  );
};
