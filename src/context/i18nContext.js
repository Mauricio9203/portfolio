import React, { createContext, useContext, useState } from 'react';

// Importa tus archivos de traducción
import enTranslations from '../lang/en.json';
import esTranslations from '../lang/es.json';

const translations = {
  en: enTranslations,
  es: esTranslations,
};

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState('en'); // Establece el idioma predeterminado aquí

  const translate = (key) => translations[language][key] || key;

  return (
    <I18nContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  return useContext(I18nContext);
}
