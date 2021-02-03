import { createContext, useState, useMemo, useCallback } from 'react';
import { localizedContent } from '../utils/languages';

interface IContent {
  bannerTitle: string;
  recipes: string;
  prepTime: string;
  cookTime: string;
  servings: string;
}

export type Language = 'es' | 'en-US';

interface IContent {
  [path: string]: IContent | string;
}

export type LanguageContextData = {
  userLocale: Language;
  setUserLocale: (locale: Language) => void;
  localizedContent: IContent;
};

export const languageDefaultValue: LanguageContextData = {
  userLocale: 'en-US',
  setUserLocale: () => null,
  localizedContent: localizedContent['en-US'],
};

export const LanguageContext = createContext<LanguageContextData>(
  languageDefaultValue
);

export const useLanguageContextValue = (): LanguageContextData => {
  const [userLocale, setUserLanguage] = useState(
    languageDefaultValue.userLocale || 'en-US'
  );

  const setUserLocale = useCallback(
    async (locale: Language) => {
      setUserLanguage(locale);
    },
    [setUserLanguage]
  );

  return useMemo(
    () => ({
      userLocale,
      setUserLocale,
      localizedContent: localizedContent[userLocale],
    }),
    [userLocale, setUserLocale]
  );
};
