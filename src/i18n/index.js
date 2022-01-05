import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from "react-i18next";
import en from './en.json';
import ko from './ko.json';
import de from './de.json';
import es from './es.json';
import fr from './fr.json';
import it from './it.json';
import ja from './ja.json';
import pt from './pt.json';
import chs from './chs.json';

const translationsLanguages = [
  'chs',
  'cht',
  'de',
  'en',
  'es',
  'fr',
  'it',
  'ja',
  'ko',
  'pt',
];

const translationsMap = translationsLanguages.reduce((ac, a) => ({ ...ac, [a]: {} }), {});

export const languages = {
  de: { name: 'Deutsch' },
  en: { name: 'English' },
  es: { name: 'Español' },
  fr: { name: 'Français' },
  it: { name: 'Italiano' },
  pt: { name: 'Português' },
  chs: { name: '汉语' },
  cht: { name: '漢語' },
  ja: { name: '日本語' },
  ko: { name: '한국어' },
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (language) => {
    const persistedLocale = await AsyncStorage.getItem('lang');
    if (!JSON.parse(persistedLocale)) {
      return language("en");
    } else {
      language(JSON.parse(persistedLocale));
    }
  },
  init: () => {},
  cacheUserLanguage: async(locale) => {
    AsyncStorage.setItem('lang', JSON.stringify(JSON.parse(locale)));
  }
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
  resources: {
    en: {
      translation: en,
    },
    ko : {
      translation: ko,
    },
    de: { 
      translation: de,
    },
    es: { 
      translation: es,
    },
    fr: { 
      translation: fr,
    },
    it: { 
      translation: it,
    },
    pt: { 
      translation: pt,
    },
    chs: { 
      translation: chs,
    },
    ja: { 
      translation: ja,
    },
  },
  react: {
    useSuspense: false
}
});

export default i18n;